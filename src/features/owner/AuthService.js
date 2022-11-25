import axios from "axios";
import { API_URL } from "../../configs/api";

// Register owner
const register = async (data) => {
    const response = await axios.post(`${API_URL}/owner/register`, data);
    
    if (response.data) {
        localStorage.setItem("owner", JSON.stringify(response.data));
    }

    return response.data;
}

// Login owner
const login = async (data) => {
    const response = await axios.post(`${API_URL}/owner/login`, data);
    
    if (response.data) {
        localStorage.setItem("owner", JSON.stringify(response.data));
    }

    return response.data;
}

// Logout owner
const logout = () => {
    localStorage.removeItem("owner");
}

// Get owner by id
const getOwnerById = async (id) => {
    const response = await axios.get(`${API_URL}/owner/${id}`);

    return response.data;
}

// Update owner
const updateOwner = async (id, data, token) => {
    const response = await axios.put(`${API_URL}/owner/${id}`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
}

// Update owner password
const updateOwnerPassword = async (id, data, token) => {
    const response = await axios.put(`${API_URL}/owner/${id}/changepassword`, data, {
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
    getOwnerById,
    updateOwner,
    updateOwnerPassword
}

export default AuthService;