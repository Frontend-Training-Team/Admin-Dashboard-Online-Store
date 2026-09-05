
// filter = page ,limit
export const getAllWishlistsAdmin = (filters = {}) => {
  return api.get('/wishlists/admin/all', { params: filters });
};

export const getWishlistStatsAdmin = () => {
  return api.get('/wishlists/admin/stats');
};
