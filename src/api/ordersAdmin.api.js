import api from "./axios"

// Admin dashboard stats
export const getAdminDashboard = () => { return api.get('/orders/admin/dashboard') }
// Get all active carts (Admin) 
export const getAllActiveCarts = ({ page = 1, limit = 20 } = {}) => { return api.get('/orders/admin/carts', { params: { page, limit } }) }
// Get all orders (Admin)
export const getAllOrdersAdmin = (filters = {}) => { return api.get('/orders/admin', { params: filters }) }
// Get single order (Admin)
export const getSingleOrder = (orderId) => { return api.get(`/orders/admin/${orderId}`) }
// Update order status (Admin)
export const patchUpdateOrders = (orderId, data) => { return api.patch(`/orders/admin/${orderId}/status`, data) }
