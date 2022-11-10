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

const AuthService = {
    register,
    login,
    logout
}

export default AuthService;