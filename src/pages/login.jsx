import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Check, Loader2 } from 'lucide-react';

import logo from '../images/logo.svg';
import heroBg from '../images/hero-bg.webp';



export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('admin@koda.com');
  const [password, setPassword] = useState('admin1212');
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoading || isGoogleLoading) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleGoogleLogin = () => {
    if (isLoading || isGoogleLoading) return;

    setIsGoogleLoading(true);

    setTimeout(() => {
      setIsGoogleLoading(false);
      window.location.href = 'https://your-backend-api.com/auth/google';
    }, 1500);
  };

  const isAnyLoading = isLoading || isGoogleLoading;

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 bg-[#1a1a1a]">
      <div className="w-full max-w-6xl bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[650px]">
        
        {/* Left Side */}
        <div 
          className="relative hidden lg:flex flex-col justify-between p-12 bg-cover bg-center bg-no-repeat text-white"
          style={{ 
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${heroBg})` 
          }}
        >
          <div className="relative z-10 space-y-5 pt-12 xl:pt-16">
            <p className="text-gray-100 text-3xl font-bold tracking-wide">
              Lamsa Admin Dashboard
            </p>

            <h1 className="text-5xl xl:text-6xl font-bold leading-tight drop-shadow-sm text-gray-200">
              Manage Your Store Like a Pro
            </h1>
<p className="text-gray-400 text-xl xl:text-base max-w-md leading-relaxed font-normal pt-14">
              Control products, orders, users, carts and analytics from a modern dashboard experience.
            </p>
          </div>

          <div className="relative z-10 space-y-4 my-auto pt-6">
            {[
              'Product Management',
              'Order Tracking',
              'Customer Insights'
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="flex items-center space-x-3 bg-white/20 backdrop-blur-md border border-white/20 px-5 py-3.5 rounded-xl font-medium shadow-sm"
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

        {/* Right Side */}
        <div className="bg-white p-8 md:p-12 flex flex-col justify-center items-center">
          <div className="w-full max-w-md space-y-6">
            
            <div className="text-center space-y-2">
              <div className="inline-block p-2 mb-2">
               <img src={logo} alt="Lamsa Logo" className="h-40 w-auto object-contain mx-auto" />
              </div>
              <p className="text-xs uppercase tracking-widest text-[#B67352] font-semibold">
                HOME FURNITURE | ONLINE STORE
              </p>
              <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
              <p className="text-sm text-gray-500">Sign in to your admin dashboard</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700 block">Email Address</label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    disabled={isAnyLoading}
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#B67352] focus:border-transparent transition disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700 block">Password</label>
                <div className="relative">
                  <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input 
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    disabled={isAnyLoading}
                    className="w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#B67352] focus:border-transparent transition disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isAnyLoading}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button 
                type="submit"
                disabled={isAnyLoading}
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


            <p className="text-center text-xs text-gray-400 pt-1 select-none">
              Secure Admin Access
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}