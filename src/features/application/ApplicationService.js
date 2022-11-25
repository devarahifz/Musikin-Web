import axios from 'axios';
import { API_URL } from '../../configs/api';

// Create application
const createApplication = async (data, token, id, gigId, photo) => {
  const response = await axios.post(`${API_URL}/application`, 
  {
    user_id: id,
    gig_id: gigId,
    performer_name: data.performer_name,
    portofolio_link: data.portofolio_link,
    status: data.status ,
    user_photo: photo
  }, 
    {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
}

// Get all applications
const getAllApplications = async () => {
  const response = await axios.get(`${API_URL}/application`);

  return response.data;
}

// Get application by id
const getApplicationById = async (id) => {
  const response = await axios.get(`${API_URL}/application/${id}`);

  return response.data;
}

// Update application
const updateApplication = async (id, data, token) => {
  const response = await axios.put(`${API_URL}/application/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
}

// Update application status
const updateApplicationStatus = async (id, data, token) => {
  const response = await axios.put(`${API_URL}/application/${id}/status`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
}

// Delete application
const deleteApplication = async (id, token) => {
  const response = await axios.delete(`${API_URL}/application/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
}

const ApplicationService = {
  createApplication,
  getAllApplications,
  getApplicationById,
  updateApplication,
  updateApplicationStatus,
  deleteApplication
};

export default ApplicationService;