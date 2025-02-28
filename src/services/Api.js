import axios from "axios";
import AuthService  from "./AuthService";

const authService = new AuthService()

const api = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api`,
});


api.interceptors.request.use(
  (config) => {
    const token = authService.getCurrentUser().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


api.interceptors.response.use(
    (response) => response, 
    (error) => {
      if (error.response && error.response.status === 401) {
        authService.logout()
        window.location.href = "/login"; 
      }
      return Promise.reject(error);
    }
  );

export default api 