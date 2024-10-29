import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getJobs = (filters) => {
    return axios.get(`${API_URL}/jobs`, { params: filters });
};
