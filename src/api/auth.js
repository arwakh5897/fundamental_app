import api from "./axios";

export const signupUser = (data)=> api.post("/register" , data);

export const loginUser = (data)=> api.post("/login" , data);

export const updateProfile = (data)=>api.put("/profile" , data);

export const getUser = ()=>api.get("/me");

export const logoutUser = ()=>api.post("/logout");

export const forgotPassword = (data) => api.post("/forgot-password" , data);

export const verifyOtp = (data) => api.post("/reset-password" , data);

export const contactUs = (data)=> api.post("/contact-us" , data);