import axios from 'axios';
import { API_URL } from "../../configs/api";

// Register admin
const register = async (data) => {
  const response = await axios.post(`${API_URL}/admin/register`, data);

  if (response.data) {
    localStorage.setItem('admin', JSON.stringify(response.data));
  }

  return response.data;
}

// Login admin
const login = async (data) => {
  const response = await axios.post(`${API_URL}/admin/login`, data);

  if (response.data) {
    localStorage.setItem('admin', JSON.stringify(response.data));
  }

  return response.data;
}

// Logout admin
const logout = () => {
    localStorage.removeItem('admin');
}

const AuthService = {
  register,
  login,
  logout,
};

export default AuthService;