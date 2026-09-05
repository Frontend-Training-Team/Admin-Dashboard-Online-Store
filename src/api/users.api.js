
import api from "./axios";

export const userAll = () => {
    return api.get('/users/all')
}

export const addUser = ({ username,
    email,
    password,
    phone }) => {
    return api.post('/users/add', {
        username,
        email,
        password,
        phone
    })
}

export const getUserById = (userId) => {
  return api.get(`/users/${userId}`);
};

//data = { username, phone, avatar }
export const updateUser = (userId, data) => {
  return api.patch(`/users/${userId}`, data);
};

// Delete user
export const deleteUser=(userId)=>{
    return api.delete(`/users/${userId}`)
}