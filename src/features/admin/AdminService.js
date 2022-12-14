import axios from "axios";
import { API_URL } from "../../configs/api";

// Get all users
const getAllUsers = async (token) => {
  const response = await axios.get(`${API_URL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
}

// Get user by id
const getUserById = async (id, token) => {
  const response = await axios.get(`${API_URL}/user/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

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

// Delete user
const deleteUser = async (id, token) => {
  const response = await axios.delete(`${API_URL}/user/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
}

// Get all owners
const getAllOwners = async (token) => {
  const response = await axios.get(`${API_URL}/owner`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
}

// Get owner by id
const getOwnerById = async (id, token) => {
  const response = await axios.get(`${API_URL}/owner/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

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

// Delete owner
const deleteOwner = async (id, token) => {
  const response = await axios.delete(`${API_URL}/owner/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
}

// Get all gigs
const getAllGigs = async (token) => {
  const response = await axios.get(`${API_URL}/gig`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
}

// Get gig by id
const getGigById = async (id, token) => {
  const response = await axios.get(`${API_URL}/gig/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
}

// Update gig
const updateGig = async (id, data, token) => {
  const response = await axios.put(`${API_URL}/gig/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
}

// Delete gig
const deleteGig = async (id, token) => {
  const response = await axios.delete(`${API_URL}/gig/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
}

const AdminService = {
  getAllUsers,
  getAllOwners,
  getAllGigs,
  getUserById,
  getOwnerById,
  getGigById,
  updateUser,
  updateOwner,
  updateGig,
  deleteUser,
  deleteOwner,
  deleteGig
};

export default AdminService;