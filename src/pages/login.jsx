import logo from '../assets/fonts/logo.png';
import React, { useState } from 'react';
import { useTheme } from '../hooks/usetheme';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const { theme, toggleTheme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-surface-light dark:bg-surface-dark transition-colors p-4">
      {/* Theme Toggle Button */}
      <button
        type="button"
        onClick={toggleTheme}
        className="absolute top-4 right-4 z-50 px-3 py-1.5 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 text-sm font-medium shadow transition-colors"
      >
        {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      {/* Main Container */}
      <div className="w-full max-w-4xl bg-surface-cardLight dark:bg-surface-cardDark rounded-2xl shadow-xl overflow-hidden border border-brand-200 dark:border-brand-800 flex flex-col md:flex-row">
        
        {/* Left Side: Hero Section */}
        <div className="relative w-full md:w-1/2 bg-brand-500 text-white p-8 md:p-12 flex flex-col justify-between overflow-hidden">
          
          {/* Header Brand */}
          <div className="flex items-center gap-2 mb-8 z-10">
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <span className="font-serif font-bold text-2xl tracking-wide">Lamsa Home Furniture</span>
          </div>

          {/* Hero Content */}
          <div className="my-auto py-6 z-10">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2 leading-tight">
              Manage Your Store Like a Pro
            </h1>
            <p className="text-white/80 text-sm mb-6 leading-relaxed">
              Control products, orders, users, carts and analytics from a modern dashboard experience.
            </p>

            {/* Feature List */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10">
                <span className="text-white font-bold">✓</span>
                <span className="text-sm font-medium">Product Management</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10">
                <span className="text-white font-bold">✓</span>
                <span className="text-sm font-medium">Order Tracking</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10">
                <span className="text-white font-bold">✓</span>
                <span className="text-sm font-medium">Customer Insights</span>
              </div>
            </div>
          </div>

          {/* Background Decorative Element */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
        </div>

        {/* Right Side: Form Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          
          {/* Logo & Subtitle */}
          <div className="text-center mb-6">
            <img 
              src={logo} 
              alt="Lamsa Logo" 
              className="mx-auto h-24 w-auto object-contain mb-2" 
            />
            <p className="text-[10px] uppercase tracking-widest text-brand-700/60 dark:text-brand-200/60 font-medium mb-4">
              HOME FURNITURE | ONLINE STORE
            </p>
            
            <h3 className="text-2xl font-bold text-brand-900 dark:text-brand-100">
              Welcome Back
            </h3>
            <p className="text-sm text-brand-700 dark:text-brand-200">
              Sign in to your admin dashboard
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-brand-900 dark:text-brand-100 mb-1">
                Email Address
              </label>
              <div className="relative flex items-center">
                <Mail className="absolute left-3 w-5 h-5 text-brand-700/60 dark:text-brand-200/60 pointer-events-none" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface-light dark:bg-surface-dark border border-brand-200 dark:border-brand-800 text-brand-900 dark:text-brand-100 placeholder-brand-700/50 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-brand-900 dark:text-brand-100 mb-1">
                Password
              </label>
              <div className="relative flex items-center">
                <Lock className="absolute left-3 w-5 h-5 text-brand-700/60 dark:text-brand-200/60 pointer-events-none" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-10 py-2.5 rounded-lg bg-surface-light dark:bg-surface-dark border border-brand-200 dark:border-brand-800 text-brand-900 dark:text-brand-100 placeholder-brand-700/50 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-brand-700/60 dark:text-brand-200/60 hover:text-brand-900 dark:hover:text-brand-100 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-brand-500 hover:bg-brand-700 text-white dark:bg-brand-300 dark:hover:bg-brand-500 dark:text-brand-950 font-semibold transition-colors mt-2"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center justify-center relative">
            <div className="w-full border-t border-brand-200 dark:border-brand-800"></div>
            <span className="absolute bg-surface-cardLight dark:bg-surface-cardDark px-3 text-[11px] uppercase tracking-wider text-brand-700/60 dark:text-brand-200/60 font-medium">
              OR
            </span>
          </div>

          {/* Google Auth Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 border border-brand-200 dark:border-brand-800 bg-surface-light dark:bg-surface-dark hover:bg-brand-50 dark:hover:bg-brand-900/20 text-brand-900 dark:text-brand-100 font-medium py-2.5 rounded-xl transition duration-200 text-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            Continue with Google
          </button>

          {/* Footer Text */}
          <p className="text-center text-[11px] text-brand-700/60 dark:text-brand-200/60 mt-6">
            Secure Admin Access
          </p>

        </div>
      </div>
    </div>
  );
}