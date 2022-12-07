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

// Get all users
const getAllUsers = async (token) => {
  const response = await axios.get(`${API_URL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
}


const AdminService = {
  register,
  login,
  logout,
  getAllUsers
};

export default AdminService;