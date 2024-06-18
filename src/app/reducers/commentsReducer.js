import { commentsInit } from "../utils/init"
export const commentsReducer = (state=commentsInit,action) => {
    switch(action.type){
        case 'COMM_UPDATE':
            state = {
                ...state,
                comments: action.payload
            }    
            break;
    }
    return state;
}