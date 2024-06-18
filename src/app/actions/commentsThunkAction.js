import { ServerCall } from "../ServerCall/ServerCall"

export const commentsThunkAction = () => {
    return async function(dispatch,getState){
        if(getState().commentsReducer.comments.lengths > 0)return;
        const res = await ServerCall.sendGetReq('https://jsonplaceholder.typicode.com/comments')
        dispatch({
            type: 'COMM_UPDATE',
            payload: res.data
        })
    }
}