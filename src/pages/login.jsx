import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Check, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth.api';
import toast from 'react-hot-toast';
import logo from '../images/logo.png';
import heroBg from '../images/hero-bg.webp';

export default function Login() {
  const [form, setForm] = useState({
    email: 'admin@koda.com',
    password: 'admin1212'
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      return toast.error("Please fill all fields");
    }

    setIsLoading(true);

    try {
      // تصحيح استدعاء الدالة المجلوبة من ملف auth.api
      await login(form);
      toast.success("Login successfully");

      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);

    } catch (error) {
      // إضافة ?. للحماية من أخطاء الـ response
      toast.error(error.response?.data?.message || "Unable to login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-3">

      {/* Left Side - Hero Section */}
      <div 
        className="relative flex flex-col lg:col-span-2 justify-between p-12 bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${heroBg})` }}
      >
        <div className="relative z-10 space-y-5 pt-12 xl:pt-16">
          <p className="text-gray-100 text-5xl font-semibold tracking-wide">
            Lamsa Admin Dashboard
          </p>

          <h1 className="text-5xl xl:text-8xl font-bold leading-tight drop-shadow-sm text-gray-200">
            Manage Your <br /> Store Like a Pro
          </h1>

          <p className="text-gray-400 text-xl xl:text-2xl leading-relaxed font-normal">
            Control products, orders, users, carts and analytics from a modern <br /> dashboard experience.
          </p>

          <div className="relative z-10 space-y-4 my-auto mb-6 pt-6 w-full max-w-2xl">
          {[
            'Product Management',
            'Order Tracking',
            'Customer Insights'
          ].map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-3 bg-white/20 backdrop-blur-md border border-white/20 p-4 rounded-xl w-full"
            >
              <Check className="w-5 h-5 text-white" />
              <span className="text-sm xl:text-base text-white">{feature}</span>
            </div>
          ))}
          </div>

          <div className="relative z-10 text-xs text-gray-400">
            © Lamsa Home Furniture. All rights reserved.
          </div>
        </div> 
      </div>

      {/* Right Side - Form Section */}
      <div className="bg-white p-8 md:p-12 flex flex-col justify-center items-center">
        <div className="w-full max-w-md space-y-6">
          
          <div className="text-center space-y-2">
            <div className="inline-block p-2 mb-2">
              <img src={logo} alt="Lamsa Logo" className="h-40 w-auto object-contain mx-auto" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
            <p className="text-sm text-gray-500">Sign in to your admin dashboard</p>
          </div>

          {errorMessage && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm text-center">
              {errorMessage}
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-4 pt-2">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 block">Email Address</label>
              <div className="relative">
                <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  disabled={isLoading}
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#B67352] focus:border-transparent transition disabled:opacity-60"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 block">Password</label>
              <div className="relative">
                <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  disabled={isLoading}
                  required
                  className="w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#B67352] focus:border-transparent transition disabled:opacity-60"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-[#B67352] hover:bg-[#a06243] text-white font-medium rounded-lg shadow-md transition duration-200 text-sm mt-2 flex items-center justify-center space-x-2 disabled:bg-[#B67352]/70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Signing in...</span>
                </>
              ) : (
                <span>Sign In</span>
              )}
            </button>
          </form>

          <div className="relative flex items-center justify-center py-1">
            <div className="border-t border-gray-200 w-full"></div>
            <span className="bg-white px-3 text-xs text-gray-400 uppercase font-semibold absolute">OR</span>
          </div>

          <a
            href="https://accounts.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 border border-[#E5DEC9] dark:border-[#2B231F] bg-[#F7F4EF] hover:bg-[#E5DEC9]/40 dark:bg-[#141110] dark:hover:bg-[#2B231F]/50 text-[#2B231F] dark:text-[#FAFAF8] font-semibold py-2.5 rounded-xl transition duration-200 text-sm no-underline cursor-pointer"
          >
            <img 
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
              alt="google" 
              className="h-5 w-5 object-contain" 
            />
            <span>Continue with Google</span>
          </a>

          <p className="text-center text-xs text-gray-400 pt-1 select-none">
            Secure Admin Access
          </p>

        </div>
      </div>

    </div>
  );
}