import api from "./axios"

// get my cart
export const getMyCart=() =>{
    return api.get('/carts')
}
//  Add item to the cart
export const addItemToCart= (payload)=>{
    return api.post('/carts/items' ,payload)
}
// update the item Quantity
export const updateItemQuantity= (payload)=>{
    return api.patch('/carts/items' ,payload)
}
// delete item from cart
export const deleteItemFromCart=(productId) =>{
    return api.delete(`/carts/items/${productId}`)
}
// apply coupon
export const applyCoupon= (payload)=>{
    return api.post('/carts/coupon' ,payload)
}
// remove coupons
export const removeCoupon= ()=>{
    return api.delete('/carts/coupon')
}
// clear cart
export const clearCart= ()=>{
    return api.delete('/carts/clear')
}