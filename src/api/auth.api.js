import api from './axios'

// Send registration OTP
export const postRegisterSendOtp = (payload) => { return api.post('/auth/register/send-otp', payload) }
// Verify registration OTP
export const postRegisterVerifyOtp = (payload) => { return api.post('/auth/register/verify-otp', payload) }
// Login 
export const postLogin = (payload) => { return api.post('/auth/login', payload) }
// Logout 
export const postLogout = () => { return api.post('/auth/logout') }
// Send password reset OTP
export const postForgotPasswordSendOtp = (payload) => { return api.post('/auth/forgot-password/send-otp', payload) }
// Verify reset OTP and set new password
export const postForgotPasswordVerifyOtp = (payload) => { return api.post('/auth/forgot-password/verify-otp', payload) }
// Get current user
export const getCurrentUser = () => { return api.get('/auth/me') }
// Adrnm test route
export const getAdminTest = () => { return api.get('/auth/admin-test') }
// Change user role (Admin)
export const patchChangeRole = (payload) => { return api.patch('/auth/change-role', payload) }

/*
    User ID: "6aa01f48905c08a3f3f93079"
    Order ID: "6aa2af4eaec1e8248ed875e1"
    Product ID: "6aa14197ac3ec0acaa3e2ef8"
*/