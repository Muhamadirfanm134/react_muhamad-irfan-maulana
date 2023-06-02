import {
  baseAPI,
  newBaseAPI,
  newBaseAPIwithToken,
  sheetDBAPI,
  uploaderAPI,
} from "../config/apiService";

const token = localStorage.getItem("access_token");

export const api = {
  // API Auth
  register: (body) => {
    return sheetDBAPI.post(`?sheet=profile`, body);
  },
  getProfile: () => {
    return sheetDBAPI.get(`?sheet=profile`);
  },

  // API Users
  getUsers: () => {
    return baseAPI.get(`/users`);
  },

  getUsersById: (id) => {
    return baseAPI.get(`/users/${id}`);
  },

  // API Biodata
  getBiodata: () => {
    return baseAPI.get(`/biodatas`);
  },
  getBiodataById: (id) => {
    return baseAPI.get(`/biodatas/${id}`);
  },
  createBiodata: (body) => {
    return baseAPI.post(`/biodatas`, body);
  },
  updateBiodata: (id, body) => {
    return baseAPI.put(`/biodatas/${id}`, body);
  },
  deleteBiodata: (id) => {
    return baseAPI.delete(`/biodatas/${id}`);
  },

  // Image Uploader
  uploader: (body) => {
    return uploaderAPI.post("/dt5fjvwg6/image/upload", body);
  },

  /// API with Token
  // Login
  login: (body) => {
    return newBaseAPI.post("/auth/login", body);
  },

  // Get Auth Profile
  getAuthProfile: () => {
    return newBaseAPIwithToken.get("/auth/profile");
  },
};
