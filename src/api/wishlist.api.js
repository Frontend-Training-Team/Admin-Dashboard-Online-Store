import api from "./axios"

// Add Product To Wishlist
export const postAddProductToWishlist = (productId) => { return api.post(`/wishlists/add/${productId}`) }
// remove Product from Wishlist
export const deleteProductfromWishlist = (productId) => { return api.delete(`/wishlists/remove/${productId}`) }
// get my wishlist
export const getMyWishlist = () => { return api.get('/wishlists/my') }
/// clear wishlist
export const deleteClearWishlist = () => { return api.delete('/wishlists/clear') }
