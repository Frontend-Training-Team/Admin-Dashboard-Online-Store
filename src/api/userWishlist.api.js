import api from "./axios"
// Add Product To Wishlist
export const addProductToWishlist= (productId) =>{
    return api.post(`/wishlists/add/${productId}`)
}


// remove Product from Wishlist
export const removeProductFromWhishlist= (productId) =>{
    return api.delete(`/wishlists/remove/${productId}`)
}

//my wishlist
export const myWishlist =() =>{
    return api.get('/wishlists/my')
}

/// clear wishlists
export const clearWishlist =() =>{
    return api.delete('/wishlists/clear')
}

