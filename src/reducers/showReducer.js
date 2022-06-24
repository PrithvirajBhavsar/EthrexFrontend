const userReducer = (state=[],action) =>{
    switch (action.type) {

        case "showsData":
            return action.content;

        default:
            return state;
        }
    }
    
export default userReducer;