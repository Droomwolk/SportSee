import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const getInformation = async (id) => {
  const response = await api.get(`/user/${id}`);
  return response?.data;
};

export const getActivity = async (id) => {
  const response = await api.get(`/user/${id}/activity`);
  return response?.data;
};

export const getAverageSessions = async (id) => {
  const response = await api.get(`/user/${id}/average-sessions`);
  return response?.data;
};

export const getPerformance = async (id) => {
  const response = await api.get(`/user/${id}/performance`);
  return response?.data;
};
