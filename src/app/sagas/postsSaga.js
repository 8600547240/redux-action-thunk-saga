import { takeLatest,call } from "redux-saga/effects";
import { ServerCall } from "../ServerCall/ServerCall";
function* deletePost() {
     
}

function* getPosts() {
    const res = yield call(ServerCall.sendGetReq,'https://jsonplaceholder.typicode.com/posts')
    console.log(res)
}

function* postsSaga() {
    yield takeLatest('GET_POSTS',getPosts)
    yield takeLatest('DELETE_POST',deletePost)
}
export default postsSaga;