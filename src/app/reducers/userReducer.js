import { usersInit } from "../utils/init"
export const userReducer = (state=usersInit,action) => {
    switch(action.type){
        case 'USER_UPDATE':
            state = {
                ...state,
                users: action.payload
            }    
            break;
    }
    return state;
}