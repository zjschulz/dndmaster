export default function campaignReducer(state = [], action) {
    switch (action.type){
        case "GET_CHARACTERS":
            return action.payload
        case "ADD_CHARACTER":
            return [...state, action.payload]
        case "UPDATE_CHARACTER":
            return state  
        default:   
            return state;
    }
}