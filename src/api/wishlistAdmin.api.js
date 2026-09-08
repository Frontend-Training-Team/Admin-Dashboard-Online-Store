import api from "./axios"

// Get all wishlists (Admin)
export const getAllWishlistsAdmin = (filters = {}) => { return api.get('/wishlists/admin/all', { params: filters }) }
// Wishlist statistics (Admin)
export const getWishlistStatsAdmin = () => { return api.get('/wishlists/admin/stats') }