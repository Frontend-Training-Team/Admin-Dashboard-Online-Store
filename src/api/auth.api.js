import api from './axios';

// export const login = (payload) => api.post('/auth/login', payload);
// export const logout = () => api.post('/auth/logout');
// export const getCurrentUser = () => api.get('/auth/me');

//////////////////////////
//  Send registration data
export const registerSendOtp = ({ username, email, password, phone }) => {
    return api.post('/auth/register/send-otp', { username, email, password, phone });
};
// Verify the OTP
export const registerVerifyOtp = ({ email, otp }) => {
    return api.post('/auth/register/verify-otp', { email, otp })
}
//  login 

export const login = async ({ email, password }) => {
    const response = await api.post('/auth/login', { email, password });

    if (response.data?.token) {
        localStorage.setItem('token', response.data.token);
    }

    if (response.data?.user) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
    }

    return response.data;
};

// logout
export const logout = async () => {
    try {
        const response = await api.post('/auth/logout');
        return response.data;
    } finally {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }
};


//  Request an OTP to reset the password
export const forgotPasswordSendOtp = ({ email }) => {
    return api.post('/auth/forgot-password/send-otp', { email });
};

//  Verify Otp
export const forgotPasswordVerifyOtp = ({ email, otp, newPassword }) => {
    return api.post('/auth/forgot-password/verify-otp', { email, otp, newPassword })
}

//Get the currently logged-in
export const getMe = () => {
    return api.get('/auth/me')
}

// test if user is admin
export const adminTest = () => {
    return api.get('/auth/admin-test')
}

// change role
export const changeRole = ({ userId, role }) => {
    return api.patch('/auth/change-role', { userId, role })
}