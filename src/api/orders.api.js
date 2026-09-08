import api from "./axios"
//Place order
export const postPlaceOrder = (payload) => { return api.post('/orders', payload) }
//Get my orders
export const getMyOrders = ({ page = 1, limit = 20 } = {}) => { return api.get('/orders/my', { params: { page, limit } }) }
// Get single order
export const getSingleOrder = (orderId) => { return api.get(`/orders/my/${orderId}`) }
// Cancel order
export const patchCancelOrder = (orderId) => { return api.patch(`/orders/my/${orderId}/cancel`)}