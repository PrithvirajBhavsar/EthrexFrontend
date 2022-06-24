const userReducer = (state=[],action) =>{
    switch (action.type) {

        case "moviesData":
            return action.content;

        default:
            return state;
        }
    }
    
export default userReducer;