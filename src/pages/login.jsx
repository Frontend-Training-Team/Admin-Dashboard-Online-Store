import logo from '../assets/fonts/logo.png';
import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Loader2 } from 'lucide-react';
import { login as loginApi } from '../api/auth.api';       
import { useAuth } from '../context/Authcontext';          


export default function Login({ onLoginSuccess }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

   const [errorMessage, setErrorMessage] = useState('');     
  
    const { login } = useAuth();     

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {                      
     e.preventDefault();
     if (isLoading) return;
 
     setIsLoading(true);
     setErrorMessage('');                                   
 
     try {                                                    
       const response = await loginApi({
         email: formData.email,
         password: formData.password,
       });
 
       const { token, user } = response.data;
 
       login(token, user);
 
       setIsLoading(false);
 
       if (onLoginSuccess) {
         onLoginSuccess();
       } else {
         window.location.href = '/dashboard';
       }
     } catch (error) {                                       
       setIsLoading(false);
       const message =
         error.response?.data?.message ||
          'An error occurred during login. Please try again.';
       setErrorMessage(message);
     }
   };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#FAFAF8] dark:bg-[#141110] transition-colors p-4">
      
      {/* Main Container */}
      <div className="w-full max-w-4xl bg-white dark:bg-[#1F1A17] rounded-2xl shadow-2xl overflow-hidden border border-[#E5DEC9] dark:border-[#2B231F] flex flex-col md:flex-row">
        
        {/* Left Side: Hero Section */}
        <div className="relative w-full md:w-1/2 bg-[#B67352] text-white p-8 md:p-10 flex flex-col justify-between overflow-hidden">
          
          {/* Header Brand */}
          <div className="flex items-center gap-3 z-10 pt-2">
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <span className="font-serif font-bold text-xl md:text-2xl tracking-wide leading-none text-white">
              Lamsa Home Furniture
            </span>
          </div>

          {/* Hero Content */}
          <div className="my-auto py-6 z-10">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-3 leading-tight text-white">
              Manage Your Store Like a Pro
            </h1>
            <p className="text-white/90 text-sm mb-6 leading-relaxed">
              Control products, orders, users, carts and analytics from a modern dashboard experience.
            </p>

            {/* Feature List */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-black/15 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20 text-white">
                <span className="text-white font-bold">✓</span>
                <span className="text-sm font-medium">Product Management</span>
              </div>
              <div className="flex items-center gap-3 bg-black/15 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20 text-white">
                <span className="text-white font-bold">✓</span>
                <span className="text-sm font-medium">Order Tracking</span>
              </div>
              <div className="flex items-center gap-3 bg-black/15 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20 text-white">
                <span className="text-white font-bold">✓</span>
                <span className="text-sm font-medium">Customer Insights</span>
              </div>
            </div>
          </div>

          {/* Background Decorative Element */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
        </div>

        {/* Right Side: Form Section */}
        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between bg-white dark:bg-[#1F1A17]">
          
          {/* Logo Container */}
          <div className="text-center pt-0">
            <div className="inline-block p-3 bg-white rounded-2xl shadow-md mb-2 border border-[#E5DEC9]">
              <img 
                src={logo} 
                alt="Lamsa Logo" 
                className="mx-auto h-24 w-auto object-contain" 
              />
            </div>
            <p className="text-[11px] uppercase tracking-widest text-[#B67352] dark:text-[#D88D68] font-bold mb-3">
              HOME FURNITURE | ONLINE STORE
            </p>
            
            <h3 className="text-2xl font-bold text-[#2B231F] dark:text-[#FAFAF8]">
              Welcome Back
            </h3>
            <p className="text-sm text-[#2B231F]/70 dark:text-[#FAFAF8]/70 mb-2 font-medium">
              Sign in to your admin dashboard
            </p>
          </div>

          {/* Form */}
          {errorMessage && (
            <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm">
              {errorMessage}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-[#2B231F] dark:text-[#FAFAF8] mb-1">
                Email Address
              </label>
              <div className="relative flex items-center">
                <Mail className="absolute left-3 w-5 h-5 text-[#2B231F]/50 dark:text-[#E5DEC9]/60 pointer-events-none" />
                <input
                  type="email"
                  name="email"
                  disabled={isLoading}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#F7F4EF] dark:bg-[#141110] border border-[#E5DEC9] dark:border-[#2B231F] text-[#2B231F] dark:text-[#FAFAF8] placeholder-[#2B231F]/40 dark:placeholder-[#FAFAF8]/40 focus:outline-none focus:ring-2 focus:ring-[#B67352] disabled:opacity-60 disabled:cursor-not-allowed transition-all font-medium"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold text-[#2B231F] dark:text-[#FAFAF8] mb-1">
                Password
              </label>
              <div className="relative flex items-center">
                <Lock className="absolute left-3 w-5 h-5 text-[#2B231F]/50 dark:text-[#E5DEC9]/60 pointer-events-none" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  disabled={isLoading}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-10 py-2.5 rounded-lg bg-[#F7F4EF] dark:bg-[#141110] border border-[#E5DEC9] dark:border-[#2B231F] text-[#2B231F] dark:text-[#FAFAF8] placeholder-[#2B231F]/40 dark:placeholder-[#FAFAF8]/40 focus:outline-none focus:ring-2 focus:ring-[#B67352] disabled:opacity-60 disabled:cursor-not-allowed transition-all font-medium"
                />
                <button
                  type="button"
                  disabled={isLoading}
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-[#2B231F]/50 hover:text-[#2B231F] dark:text-[#E5DEC9]/60 dark:hover:text-[#FAFAF8] transition-colors disabled:cursor-not-allowed"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2.5 rounded-lg font-semibold transition-all mt-2 flex items-center justify-center gap-2 text-sm ${
                isLoading
                  ? 'bg-[#B67352]/70 dark:bg-[#D88D68]/70 cursor-not-allowed opacity-80'
                  : 'bg-[#B67352] hover:bg-[#8F553A] dark:bg-[#D88D68] dark:hover:bg-[#B67352] text-white dark:text-[#141110] cursor-pointer active:scale-[0.99]'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Signing In...</span>
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-4 flex items-center justify-center relative">
            <div className="w-full border-t border-[#E5DEC9] dark:border-[#2B231F]"></div>
            <span className="absolute bg-white dark:bg-[#1F1A17] px-3 text-[11px] uppercase tracking-wider text-[#2B231F]/60 dark:text-[#E5DEC9]/60 font-semibold">
              OR
            </span>
          </div>

          {/* Google Auth Link */}
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

          {/* Footer Text */}
          <p className="text-center text-[11px] text-[#2B231F]/50 dark:text-[#E5DEC9]/50 mt-4 font-medium">
            Secure Admin Access
          </p>

        </div>
      </div>
    </div>
  );
}