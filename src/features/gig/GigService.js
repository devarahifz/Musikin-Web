import axios from 'axios';
import { API_URL } from '../../configs/api';

// Create new gig
const createGig = async (data, token, id) => {
  data.append('owner_id', id);
  const response = await axios.post(`${API_URL}/gig`, data, 
    {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
}

// Get all gigs
const getAllGigs = async () => {
  const response = await axios.get(`${API_URL}/gig`);

  return response.data;
}

// Get gig by id
const getGigById = async (id) => {
  const response = await axios.get(`${API_URL}/gig/${id}`);

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

const GigService = {
  createGig,
  getAllGigs,
  getGigById,
  updateGig,
  deleteGig
}

export default GigService;