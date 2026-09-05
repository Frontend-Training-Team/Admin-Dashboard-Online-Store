
import api from "./axios";

export const getAdminDashboard=()=>{
    return api.get('/orders/admin/dashboard');
}

export const getAllActiveCarts = ({ page = 1, limit = 20 } = {}) => {
  return api.get('/orders/admin/carts', {
    params: { page, limit },
  });
};

export const getallOrders=()=>{
    return api.get('/orders/admin')
}

// filter = page ,limit ,from ,to ,sortby ,sortDir,paymentStatus,status
export const getAllOrdersAdmin = (filters = {}) => {
  return api.get('/orders/admin', { params: filters });
}

export const getsingleOrder = (orderId) => {
  return api.get(`/orders/admin/${orderId}`);
}


export const updateOrders = (orderId ,data) => {
  return api.patch(`/orders/admin/${orderId}/status` , data);
}
