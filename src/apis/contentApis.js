import axios from 'axios';

export const movies = (data)=> axios.post("/movies",data);
export const getallmovies = ()=> axios.get("/movies");
export const getmovie = (id)=> axios.get(`/content/${id}`);
export const getshows = ()=> axios.get(`/show`);
export const postcomment = (data)=> axios.post(`/comment`,data);
export const getallcomments = (data)=> axios.post(`/getcomments`,data);