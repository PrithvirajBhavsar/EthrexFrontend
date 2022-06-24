import * as api from "../apis/registrationApis";

export const signup = (data,navigate) => async (dispatch) => {
    try {
        const user = await api.signup(data);
        navigate(`/`)
    } catch (error) {
        console.log(error);
    }
}

export const login = (data,navigate) => async (dispatch) => {
    try {
        const user = await api.login(data);
        dispatch({type:"setUser",user:{isLogin:true,email:user.data.email,_id:user.data._id}})
        // navigate(`/`)
    } catch (error) {
        if(error.response.status === 401){
            alert(error.response.data.message);
        }
    }
}

export const isAuthorize = () => async (dispatch) => {
    try {
        const {data} = await api.isAuthorize();
        console.log(data);
        const user = {isLogin:true,email:data.email,_id:data._id};
        dispatch({type:"setUser",user})
    } catch (error) {
        if(error.response.status === 401){
            console.log(error.response.data.message);
        }
    }
}


export const logout = (navigate) => async (dispatch) => {
    try {
        await api.logout();
        dispatch({type:"setUser",user:{isLogin:false,email:"",_id:""}})
        // navigate(`/`);
    } catch (error) {
        if(error.response.status === 401){
            console.log(error.response.data.message);
        }
    }
}
