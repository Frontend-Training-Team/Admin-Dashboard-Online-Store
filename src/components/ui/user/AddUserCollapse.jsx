import { useState } from 'react';
import { UserPlus, X, Loader2 } from 'lucide-react';
import { postAddUser } from '../../../api/users.api';
import toast from 'react-hot-toast';
import bannerBg from '../../../assets/images/users-banner-bg.jpg';

function AddUserCollapse({ isOpen, onClose, onUserAdded }) {
  const initialForm = {
    username: '',
    email: '',
    password: '',
    phone: '',
    role: 'customer',
  };

  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this specific field when user types
    if (errors[name] || errors.general) {
      setErrors((prev) => ({ ...prev, [name]: '', general: '' }));
    }
  };

  const handleClear = () => {
    setFormData(initialForm);
    setErrors({});
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      setLoading(true);
      const payload = {
        username: formData.username.trim(),
        email: formData.email.trim(),
        password: formData.password,
        phone: formData.phone.trim() || undefined,
        role: formData.role,
      };

      await postAddUser(payload);
      toast.success('User created successfully!');
      handleClear();
      if (onUserAdded) onUserAdded();
      if (onClose) onClose();
    } catch (error) {
      const msg =
        error.response?.data?.message ||
        error.userMessage ||
        'Failed to create user. Please check your data.';

      const lowerMsg = msg.toLowerCase();
      if (lowerMsg.includes('email')) {
        setErrors((prev) => ({ ...prev, email: msg }));
      } else if (lowerMsg.includes('username')) {
        setErrors((prev) => ({ ...prev, username: msg }));
      } else if (lowerMsg.includes('password')) {
        setErrors((prev) => ({ ...prev, password: msg }));
      } else {
        setErrors((prev) => ({ ...prev, general: msg }));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`grid transition-all duration-300 ease-out ${
        isOpen
          ? 'grid-rows-[1fr] opacity-100 translate-y-0'
          : 'grid-rows-[0fr] opacity-0 -translate-y-3 pointer-events-none'
      }`}
    >
      <div className="overflow-hidden">
        <div className="rounded-2xl border border-gray-200/80 dark:border-0 bg-white dark:bg-[#1E2435] shadow-md overflow-hidden">
          {/* Top Banner Header */}
          <div
            className="relative overflow-hidden bg-cover bg-center bg-no-repeat px-6 sm:px-8 py-4 sm:py-5 flex items-center justify-between"
            style={{ backgroundImage: `url(${bannerBg})` }}
          >
            <div className="flex items-center gap-3.5">
              <div className="rounded-xl bg-[#A36037] p-2 sm:p-2.5 text-white shadow-sm flex items-center justify-center shrink-0">
                <UserPlus size={20} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#592309] leading-tight">
                  Create New User
                </h3>
                <p className="text-xs text-[#8C5A3C] mt-0.5 font-normal">
                  Fill in the details below to add a new user
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl p-2 text-white/80 hover:text-white hover:bg-white/10 transition cursor-pointer"
              title="Close"
            >
              <X size={20} />
            </button>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Username */}
              <div className="flex flex-col">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-[#8E9BAE] mb-2">
                  USERNAME <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="eg. user_name"
                  className={`w-full rounded-xl border px-4 py-3 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-[#5E6C84] outline-none transition ${
                    errors.username
                      ? 'border-rose-400 dark:border-rose-500 bg-rose-50/40 dark:bg-rose-950/30 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30'
                      : 'border-gray-200 dark:border-[#242B3F] bg-white dark:bg-[#161B26] focus:border-brand-500 dark:focus:border-brand-500 focus:ring-1 focus:ring-brand-500/20'
                  }`}
                />
                {errors.username && (
                  <p className="text-[12px] text-rose-500 dark:text-rose-400 mt-1.5 font-medium animate-fade-in">
                    {errors.username}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-[#8E9BAE] mb-2">
                  EMAIL <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. name@email.com"
                  className={`w-full rounded-xl border px-4 py-3 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-[#5E6C84] outline-none transition ${
                    errors.email
                      ? 'border-rose-400 dark:border-rose-500 bg-rose-50/40 dark:bg-rose-950/30 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30'
                      : 'border-gray-200 dark:border-[#242B3F] bg-white dark:bg-[#161B26] focus:border-brand-500 dark:focus:border-brand-500 focus:ring-1 focus:ring-brand-500/20'
                  }`}
                />
                {errors.email && (
                  <p className="text-[12px] text-rose-500 dark:text-rose-400 mt-1.5 font-medium animate-fade-in">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="flex flex-col">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-[#8E9BAE] mb-2">
                  PASSWORD <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Min. 6 characters"
                  className={`w-full rounded-xl border px-4 py-3 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-[#5E6C84] outline-none transition ${
                    errors.password
                      ? 'border-rose-400 dark:border-rose-500 bg-rose-50/40 dark:bg-rose-950/30 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30'
                      : 'border-gray-200 dark:border-[#242B3F] bg-white dark:bg-[#161B26] focus:border-brand-500 dark:focus:border-brand-500 focus:ring-1 focus:ring-brand-500/20'
                  }`}
                />
                {errors.password && (
                  <p className="text-[12px] text-rose-500 dark:text-rose-400 mt-1.5 font-medium animate-fade-in">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-[#8E9BAE] mb-2">
                  PHONE
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +1 234 567 890"
                  className={`w-full rounded-xl border px-4 py-3 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-[#5E6C84] outline-none transition ${
                    errors.phone
                      ? 'border-rose-400 dark:border-rose-500 bg-rose-50/40 dark:bg-rose-950/30 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30'
                      : 'border-gray-200 dark:border-[#242B3F] bg-white dark:bg-[#161B26] focus:border-brand-500 dark:focus:border-brand-500 focus:ring-1 focus:ring-brand-500/20'
                  }`}
                />
                {errors.phone && (
                  <p className="text-[12px] text-rose-500 dark:text-rose-400 mt-1.5 font-medium animate-fade-in">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* General API error if applicable */}
            {errors.general && (
              <div className="mt-4 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 text-xs font-medium text-rose-600 dark:text-rose-400">
                {errors.general}
              </div>
            )}

            {/* Footer actions */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100 dark:border-[#242B3F] pt-5">
              <p className="text-xs text-gray-400 dark:text-[#8E9BAE]">
                <span className="text-red-500 font-bold">*</span> Required fields
              </p>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={handleClear}
                  disabled={loading}
                  className="px-6 py-2.5 rounded-xl border border-gray-300 dark:border-[#242B3F] bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-[#161B26] text-sm font-medium text-gray-700 dark:text-slate-300 transition disabled:opacity-50 cursor-pointer"
                >
                  Clear
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#8F4F28] hover:bg-[#A36037] dark:bg-[#733E2A] dark:hover:bg-[#A36037] text-sm font-medium text-white shadow-sm transition disabled:opacity-60 active:scale-95 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Adding...</span>
                    </>
                  ) : (
                    <>
                      <UserPlus size={16} />
                      <span>Add User</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddUserCollapse;
