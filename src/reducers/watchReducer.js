const watchReducer = (state={trailer:""},action) =>{
    switch (action.type) {

        case "watchData":
            return action.content;

        default:
            return state;
        }
    }
    
export default watchReducer;