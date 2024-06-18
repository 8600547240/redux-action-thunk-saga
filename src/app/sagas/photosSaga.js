import { takeLatest,call } from "redux-saga/effects";
import { ServerCall } from "../ServerCall/ServerCall";
function* getPhotos() {
    const res = yield call(ServerCall.sendGetReq,'https://jsonplaceholder.typicode.com/photos')
    console.log(res)
}

function* insertPhoto() {

}

function* photosSaga() {
    yield takeLatest('GET_PHOTOS',getPhotos)
    yield takeLatest('INSERT_PHOTO',insertPhoto)
}

export default photosSaga;