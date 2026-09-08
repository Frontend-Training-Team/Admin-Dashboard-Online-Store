import api from "./axios"

// Get all users (Admin)
export const getUserAll = () => { return api.get('/users/all') }
// Add user from admin panel (Admin)
export const postAddUser = (payload) => { return api.post('/users/add', payload) }
// Get single user (Admin)
export const getUserById = (userId) => { return api.get(`/users/${userId}`) }
// Update user profile
export const patchUpdateUser = (userId, data) => { return api.patch(`/users/${userId}`, data) }
// Delete user (Admin)
export const deleteUser = (userId) => { return api.delete(`/users/${userId}`) }