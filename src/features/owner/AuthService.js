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

const AuthService = {
    register,
    login,
    logout
}

export default AuthService;