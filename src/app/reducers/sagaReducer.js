import { sagaInit } from "../utils/init"
export const sagaReducer = (state=sagaInit,{type,payload}) => {
    switch(type){
        case 'POSTS_UPDATE':
            return{
                ...state,
                posts: payload
            }
        case 'PHOTOS_UPDATE':
            return{
                ...state,
                photos: payload
            }
    }
    return state;
}