import axios from 'axios';

export const signup = (data)=> axios.post("/signup",data);
export const login = (data)=> axios.post("/login",data);
export const isAuthorize = ()=> axios.get("/authorize");
export const logout = ()=> axios.get("/logout");