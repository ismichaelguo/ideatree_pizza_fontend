import axios from "axios";
import React from "react";
import { Redirect } from "react-router";
const axiosInstance = axios.create({
  baseURL: "https://idea-pizza-backend.herokuapp.com",
  timeout: 5000,
  headers: { withCredentials: "true" },
  // data:{}
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log("url", config.url);
    //public apis should not have token in the header
    if (
      config.url === "/user/login" ||
      config.url === "/products" ||
      config.url === "/user/signup"
    ) {
      return config;
    } else {
      let token = window.localStorage.getItem("Authorization");
      console.log("token", token);
      if (token) {
        //put token to the header
        config.headers.authorization = `${token}`;
        console.log("config", config);
        return config;
      } else {
        alert("You haven't log in yet!");
        //turn to login if token is not existed
        return <Redirect to="/account" />;
      }
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("response", response);
    const { authorization } = response.headers;
    //if there is token in the header,put it to the local storage;
    if (authorization) {
      window.localStorage.setItem("Authorization", `Bearer ${authorization}`);
    }
    return response;
  },
  (error) => {
    //if status error 401 or 405, auth error, go back to login
    if (error.response) {
      const { status } = error.response;
      if (status === 401 || status === 405) {
        return <Redirect to="/account" />;
      }
    }
  }
);

export default axiosInstance;
