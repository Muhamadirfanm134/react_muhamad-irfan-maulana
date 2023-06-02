import axios from "axios";

const token = localStorage.getItem("access_token");

export const baseAPI = axios.create({
  baseURL: "https://640e39d04ed25579dc2fda62.mockapi.io/api/v1",
});

export const sheetDBAPI = axios.create({
  baseURL: "https://sheetdb.io/api/v1/8jombd5zduabl",
});

export const uploaderAPI = axios.create({
  baseURL: "https://api.cloudinary.com/v1_1",
});

// Contoh API with Token
export const newBaseAPI = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});

export const newBaseAPIwithToken = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
