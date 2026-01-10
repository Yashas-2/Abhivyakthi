import axios from "axios";

const API_BASE = "https://abhivyakthi-backend.onrender.com";

const api = axios.create({
  baseURL: API_BASE,
});

export default api;
