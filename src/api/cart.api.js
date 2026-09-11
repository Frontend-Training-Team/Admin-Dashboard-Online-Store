import api from "./axios"

// get my cart
export const getMyCart = () => { return api.get('/carts') }
//  Add item to cart
export const postAddItemToCart = (payload) => { return api.post('/carts/items', payload) }
// update item Quantity
export const patchUpdateItemQuantity = (payload) => { return api.patch('/carts/items', payload) }
// Remove item from cart
export const deleteItemFromCart = (productId) => { return api.delete(`/carts/items/${productId}`) }
// apply coupon
export const postApplyCoupon = (payload) => { return api.post('/carts/coupon', payload) }
// remove coupon
export const deleteCoupon = () => { return api.delete('/carts/coupon') }
// clear cart
export const deleteClearCart = () => { return api.delete('/carts/clear') }

/*
    User ID: "6aa2af49aec1e8248ed875dc"
    Order ID: "6aa2af4eaec1e8248ed875e1"
    Product ID: "6a9d2dbe648864c4a0781c09"
*/