import { useState, useEffect } from 'react';
import { Pencil, X, Loader2, Image as ImageIcon } from 'lucide-react';
import { patchUpdateUser } from '../../../api/users.api';
import toast from 'react-hot-toast';
import defaultAvatar from '../../../assets/images/Guest.jpg';

function EditUserModal({ isOpen, user, onClose, onUserUpdated }) {
  const [formData, setFormData] = useState({
    username: user?.username || '',
    phone: user?.phone || '',
    avatar: user?.avatar || '',
  });
  const [previewError, setPreviewError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen || !user) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'avatar') {
      setPreviewError(false);
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username.trim()) {
      toast.error('Username cannot be empty.');
      return;
    }

    try {
      setLoading(true);
      const payload = {
        username: formData.username.trim(),
        phone: formData.phone.trim() || undefined,
        avatar: formData.avatar.trim() || undefined,
      };

      await patchUpdateUser(user._id, payload);
      toast.success('User updated successfully!');
      if (onUserUpdated) onUserUpdated();
      if (onClose) onClose();
    } catch (error) {
      const msg =
        error.response?.data?.message ||
        error.userMessage ||
        'Failed to update user profile.';
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  const previewSrc =
    previewError || !formData.avatar ? defaultAvatar : formData.avatar;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl border border-gray-200 dark:border-[#242B3F] bg-white dark:bg-[#1E2435] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 dark:border-[#242B3F] px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-500 p-2 text-white shadow-sm">
              <Pencil size={18} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Edit User
              </h3>
              <p className="text-xs text-gray-500 dark:text-[#8E9BAE]">
                {user.email}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 text-gray-400 dark:text-[#8E9BAE] hover:text-gray-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#161B26] transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Avatar Preview */}
          <div className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 dark:bg-[#161B26] border border-gray-200/60 dark:border-[#242B3F]">
            <img
              src={previewSrc}
              alt="Avatar Preview"
              onError={() => setPreviewError(true)}
              className="h-14 w-14 rounded-full object-cover border border-gray-200 dark:border-[#242B3F] bg-gray-100 dark:bg-[#1E2435] shrink-0"
            />
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-slate-300">
                Avatar Preview
              </p>
              <p className="text-xs text-gray-500 dark:text-[#8E9BAE] truncate">
                {formData.avatar ? 'Custom image URL' : 'Default avatar'}
              </p>
            </div>
          </div>

          {/* Username */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-[#8E9BAE]">
              Username <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="rounded-xl border border-gray-200 dark:border-[#242B3F] bg-white dark:bg-[#161B26] px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-[#5E6C84] outline-none transition focus:border-brand-500 dark:focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-[#8E9BAE]">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +20 123 456 7890"
              className="rounded-xl border border-gray-200 dark:border-[#242B3F] bg-white dark:bg-[#161B26] px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-[#5E6C84] outline-none transition focus:border-brand-500 dark:focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
            />
          </div>

          {/* Avatar URL */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-[#8E9BAE] flex items-center gap-1.5">
              <ImageIcon size={13} />
              <span>Avatar Image URL</span>
            </label>
            <input
              type="url"
              name="avatar"
              value={formData.avatar}
              onChange={handleChange}
              placeholder="https://example.com/photo.jpg"
              className="rounded-xl border border-gray-200 dark:border-[#242B3F] bg-white dark:bg-[#161B26] px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-[#5E6C84] outline-none transition focus:border-brand-500 dark:focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
            />
          </div>

          {/* Actions */}
          <div className="mt-6 flex items-center justify-end gap-3 border-t border-gray-100 dark:border-[#242B3F] pt-4">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="px-5 py-2.5 rounded-xl border border-gray-200 dark:border-[#242B3F] text-sm font-semibold text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-[#161B26] transition disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-sm font-semibold text-white shadow-sm transition disabled:opacity-60 active:scale-95"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Saving...</span>
                </>
              ) : (
                <span>Save Changes</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditUserModal;
