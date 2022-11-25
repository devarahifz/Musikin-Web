import axios from "axios";
import { API_URL } from "../../configs/api";

// Register user
const register = async (data) => {
    const response = await axios.post(`${API_URL}/user/register`, data);
    
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
}

// Login user
const login = async (data) => {
    const response = await axios.post(`${API_URL}/user/login`, data);
    
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
}

// Logout user
const logout = () => {
    localStorage.removeItem("user");
}

// Get user by id
const getUserById = async (id) => {
    const response = await axios.get(`${API_URL}/user/${id}`);

    return response.data;
}

// Update user
const updateUser = async (id, data, token) => {
    const response = await axios.put(`${API_URL}/user/${id}`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
}

// Update user password
const updateUserPassword = async (id, data, token) => {
    const response = await axios.put(`${API_URL}/user/${id}/changepassword`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
}

const AuthService = {
    register,
    login,
    logout,
    getUserById,
    updateUser,
    updateUserPassword
}

export default AuthService;