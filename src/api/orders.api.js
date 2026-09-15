import api from "./axios";

export const postPlaceOrder = (payload) => {
  return api.post("/orders", payload);
};

export const getMyOrders = ({ page = 1, limit = 20 } = {}) => {
  return api.get("/orders/my", {
    params: { page, limit },
  });
};

export const getSingleOrder = (orderId) => {
  return api.get(`/orders/my/${orderId}`);
};

export const patchCancelOrder = (orderId) => {
  return api.patch(`/orders/my/${orderId}/cancel`);
};

export const getAllOrdersAdmin = () => {
  return api.get("/orders/admin");
};

export const getSingleOrderAdmin = (orderId) => {
  return api.get(`/orders/admin/${orderId}`);
};