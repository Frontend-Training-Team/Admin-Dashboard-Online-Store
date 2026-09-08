import api from "./axios"
// Get product reviews
export const getProductReviews = (productId) => { return api.get(`/products/${productId}/reviews`) }
// Add a review
export const postAddAReview = (productId, payload) => { return api.post(`/products/${productId}/reviews`, payload) }
// Delete a review
export const deleteAReview = (productId, reviewId) => { return api.delete(`/products/${productId}/reviews/${reviewId}`) }
