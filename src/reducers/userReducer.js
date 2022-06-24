const userReducer = (state={isLogin:false,email:"",_id:""},action) =>{
    switch (action.type) {

        case "setUser":
            return action.user;

        default:
            return state;
        }
    }
    
    export default userReducer;