export default function campaignReducer(state = [], action) {
    switch (action.type){
        case "GET_CAMPAIGNS":
            return action.payload
        case "ADD_CAMPAIGN":
            return [...state, action.payload]
        case "UPDATE_CAMPAIGN":
            return state  
        default:   
            return state;
    }
}