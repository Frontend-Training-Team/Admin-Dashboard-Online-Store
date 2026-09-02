import logo from '../assets/fonts/logo.png';

import React, { useState } from 'react';

const Login = () => {
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
    <div className="min-h-screen flex items-center justify-center bg-surface-lightBg dark:bg-surface-darkBg p-4 transition-colors duration-300">
      
      {/* Main Container */}
      <div className="w-full max-w-4xl bg-surface-lightCard dark:bg-surface-darkCard rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 border border-borderCustom-light dark:border-borderCustom-dark">
        
        {/* Left Side: Hero Section */}
        <div className="bg-brand-500 text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
          
          {/* Header Brand */}
          <div className="flex items-center gap-2 mb-8">
            <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <span className="font-serif font-bold text-xxl tracking-wide">LAMSA Home furniture</span>
          </div>

          {/* Hero Content */}
          <div className="my-auto py-6">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-1 leading-tight">
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
        <div className="p-8 md:p-12 flex flex-col justify-center">
          
          {/* Logo & Subtitle */}
          <div className="text-center mb-8">
            <img src={logo} alt="Lamsa Logo" className="w-16 h-16 mx-auto mb-2 object-contain" />
        
            <p className="text-[10px] uppercase tracking-widest text-muted-light dark:text-muted-dark font-medium">
    Home Furniture | ONLINE STORE
  </p>
  
  <h3 className="text-2xl font-bold text-brand-900 dark:text-brand-100 mt-6 mb-1">
    Welcome Back
  </h3>
  <p className="text-xs text-muted-light dark:text-muted-dark">
    Sign in to your admin dashboard
    </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Email Field */}
            <div>
              <label className="block text-xs font-semibold text-brand-900 dark:text-brand-100 mb-1">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-light dark:text-muted-dark">
                  ✉️
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full pl-9 pr-4 py-2.5 bg-brand-50 dark:bg-surface-darkBg text-brand-900 dark:text-brand-100 text-sm border border-borderCustom-light dark:border-borderCustom-dark rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition duration-200"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs font-semibold text-brand-900 dark:text-brand-100 mb-1">
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-light dark:text-muted-dark">
                  🔒
                </span>
                <input
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full pl-9 pr-4 py-2.5 bg-brand-50 dark:bg-surface-darkBg text-brand-900 dark:text-brand-100 text-sm border border-borderCustom-light dark:border-borderCustom-dark rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition duration-200"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-brand-500 hover:bg-brand-300 text-white font-medium py-2.5 rounded-xl transition duration-200 shadow-md active:scale-[0.99] text-sm mt-2"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-borderCustom-light dark:border-borderCustom-dark"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase"></div>
            <span className="relative bg-surface-lightCard dark:bg-surface-darkCard px-6 text-[11px] uppercase tracking-wider text-muted-light dark:text-muted-dark">
              OR
            </span>
          </div>

          {/* Google Auth Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 border border-borderCustom-light dark:border-borderCustom-dark bg-surface-lightBg dark:bg-surface-darkBg hover:bg-brand-50 dark:hover:bg-borderCustom-dark text-brand-900 dark:text-brand-100 font-medium py-2.5 rounded-xl transition duration-200 text-sm"
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
          <p className="text-center text-[11px] text-muted-light dark:text-muted-dark mt-6">
            Secure Admin Access
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;
