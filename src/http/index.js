import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
    headers: {
        "Content-type": "application/json",
        Accept: "application/json",
    },
});

// List of all Endpoints
export const sendOtp = (data) => api.post("/api/auth/sendOTP", data);
export const verifyOtp = (data) => api.post("/api/auth/verifyOTP", data);
// export const registerUser = (data) => api.post("/api/activate", data, {
//     headers: {
//         'Content-Type': 'multipart/form-data'
//     }
// });


// export const registerUser = (data, file) => {
//     const config = {
//         headers: {
//             'Content-Type': 'application/octet-stream',
//         },
//     };

//     const payload = new Blob([JSON.stringify(data)], { type: 'application/json' });
//     payload.append('profilePic', file);

//     return api.post('/api/activate', payload, config);
// };

export const registerUser = (data, file) => {
    const formData = new FormData();
    const dataObj = JSON.stringify(data);
    formData.append('jsonPayload', dataObj);
    formData.append('profilePic', file);

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };

    return api.post('/api/activate', formData, config);
};
export const login = (data) => api.post("/api/auth/login", data);
export const logout = () => api.post("/api/auth/logout");
export const getProfile = () => api.get(`/api/user/profile`);
export const updateProfile = (data) => api.post(`api/user/profile/update`, data);

// Interceptors
api.interceptors.response.use(
    (config) => {
        return config;
    },
    async(error) => {
        const orignalRequest = error.config;

        if (
            error.response.status === 401 &&
            orignalRequest &&
            !orignalRequest.isRetry
        ) {
            orignalRequest.isRetry = true;
            try {
                await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/refresh`, {
                    withCredentials: true,
                });

                return api.request(orignalRequest);
            } catch (err) {
                console.log(err.message);
            }
        }

        throw error;
    }
);

export default api;