import axios from "axios";
import { baseUrl } from "./config";

export const axiosInstance = axios.create({
  baseURL: baseUrl,
});

// Request Intercepter

axiosInstance.interceptors.request.use((request) => {
  console.log("request =>>>>>>>", request);
  return request;
});

// Request from client -> Request will go to request intercepter first -> server -> response will come to Response intercepter -> come back to client

// Response Intercepter

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("response =>>>>>>>", response);
    return response.data;
  },
  async (error) => {
    throw new Error("something went wrong ....");
  }
);
