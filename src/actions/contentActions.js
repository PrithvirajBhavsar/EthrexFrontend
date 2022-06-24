import * as api from "../apis/contentApis";

export const movies = (data) => async (dispatch) => {
    try {
        const movie = await api.movies(data);
        console.log(movie);
    } catch (error) {
        console.log(error);
    }
}

export const getallmovies = () => async (dispatch) => {
    try {
        const {data} = await api.getallmovies();
        dispatch({type:"moviesData",content:data})
    } catch (error) {
        console.log(error);
    }
}

export const getshows = () => async (dispatch) => {
    try {
        const {data} = await api.getshows();
        dispatch({type:"showsData",content:data})
    } catch (error) {
        console.log(error);
    }
}

export const getcontent = (id,navigate) => async (dispatch) => {
    try {
        const {data} = await api.getmovie(id);
        console.log("action",data);
        dispatch({type:"watchData",content:data})
        navigate(`/content`)
    } catch (error) {
        console.log(error);
    }
}

export const postcomment = (datas) => async (dispatch) => {
    try {
        const {data} = await api.postcomment(datas);
        dispatch(getallcomments(data.content))
    } catch (error) {
        console.log(error);
    }
}

export const getallcomments = (datas) => async (dispatch) => {
    try {
        const {data} = await api.getallcomments(datas);
        dispatch({type:"allComments",content:data})
    } catch (error) {
        console.log(error);
    }
}