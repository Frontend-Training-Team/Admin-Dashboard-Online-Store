/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Mail, Lock, Eye, EyeOff, Check, Loader2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { postLogin } from '../api/auth.api'
import toast from 'react-hot-toast';
import logo from "../assets/images/logo.png"
import heroBg from '../assets/images/hero-bg.webp'

export default function LoginPage() {
  const [form, setForm] = useState({
    email: 'admin@koda.com',
    password: 'admin1212'
  })

  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      let res = await postLogin(form)
      localStorage.setItem("token", res.data.token)
      toast.success("Login successfully")

      setTimeout(() => {
        navigate('/dashboard')
      }, 1000)

    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to login")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-[55%_45%] bg-white dark:bg-[#0B0C0F]">

      {/* Left Side - Hero Section */}
      <div
        className="hidden lg:flex relative flex-col justify-center items-center p-12 bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(11, 12, 15, 0.8)), url(${heroBg})` }}
      >
        <div className="relative z-10 w-full max-w-[500px] space-y-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C98156]">
            Lamsa Admin Dashboard
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight text-white">
            Manage Your Store Like a Pro
          </h1>

          <p className="text-gray-300 text-base leading-relaxed">
            Control products, orders, users, carts and analytics from a modern luxury dashboard experience.
          </p>

          <div className="space-y-3 pt-4 w-full">
            {[
              'Product Management',
              'Order Tracking',
              'Customer Insights'
            ].map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/15 p-3.5 rounded-xl w-full"
              >
                <div className="w-5 h-5 rounded-full bg-[#C98156] flex items-center justify-center text-white shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-medium text-white">{feature}</span>
              </div>
            ))}
          </div>

          <div className="text-xs text-gray-400 pt-6">
            © Lamsa Home Furniture. All rights reserved.
          </div>
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div className="bg-white dark:bg-[#0B0C0F] p-8 md:p-12 flex flex-col justify-center items-center border-l border-brand-200/60 dark:border-white/[0.06]">
        <div className="w-full max-w-md space-y-6">

          <div className="text-center space-y-2">
            <div className="inline-block p-2 mb-2">
              <img src={logo} alt="Lamsa Logo" className="h-20 sm:h-24 w-auto object-contain mx-auto" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-950 dark:text-[#F5F1EA]">Welcome Back</h2>
            <p className="text-xs sm:text-sm text-brand-600/70 dark:text-[#8A8378]">Sign in to your admin dashboard</p>
          </div>

          {errorMessage && (
            <div className="p-3 bg-rose-500/10 border border-rose-500/20 text-rose-500 rounded-xl text-sm text-center font-medium">
              {errorMessage}
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-4 pt-2">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-brand-900 dark:text-[#B9B2A8] block">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-brand-400 dark:text-[#8A8378] absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  disabled={isLoading}
                  required
                  className="w-full h-11 pl-11 pr-4 bg-brand-50/30 dark:bg-[#1F232B] border border-brand-200 dark:border-white/[0.08] text-brand-950 dark:text-[#F5F1EA] placeholder-brand-400 dark:placeholder:text-[#8A8378] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#C98156] focus:border-[#C98156] transition disabled:opacity-60"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-brand-900 dark:text-[#B9B2A8] block">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-brand-400 dark:text-[#8A8378] absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  disabled={isLoading}
                  required
                  className="w-full h-11 pl-11 pr-11 bg-brand-50/30 dark:bg-[#1F232B] border border-brand-200 dark:border-white/[0.08] text-brand-950 dark:text-[#F5F1EA] placeholder-brand-400 dark:placeholder:text-[#8A8378] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#C98156] focus:border-[#C98156] transition disabled:opacity-60"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-brand-400 dark:text-[#8A8378] hover:text-brand-700 dark:hover:text-[#F5F1EA] cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-11 bg-[#C98156] hover:bg-[#b06f47] text-white font-medium rounded-xl shadow-xs transition duration-200 text-sm mt-2 flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
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

          <div className="relative flex items-center justify-center py-2">
            <div className="border-t border-brand-200 dark:border-white/[0.08] w-full"></div>
            <span className="bg-white dark:bg-[#0B0C0F] px-3 text-xs text-brand-400 dark:text-[#8A8378] uppercase font-semibold absolute">OR</span>
          </div>

          <a
            href="https://accounts.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-11 flex items-center justify-center gap-2 border border-brand-200 dark:border-white/[0.08] bg-white dark:bg-[#181B22] hover:bg-brand-50 dark:hover:bg-[#1F232B] text-brand-900 dark:text-[#F5F1EA] font-medium rounded-xl transition duration-200 text-sm no-underline cursor-pointer"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="google"
              className="h-4 w-4 object-contain"
            />
            <span>Continue with Google</span>
          </a>

          <p className="text-center text-xs text-brand-400 dark:text-[#8A8378] pt-2 select-none">
            Secure Admin Access
          </p>

        </div>
      </div>

    </div>
  )
}
