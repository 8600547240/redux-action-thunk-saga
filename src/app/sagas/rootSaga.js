import photosSaga from "./photosSaga";
import postsSaga from "./postsSaga";
import {all} from "redux-saga/effects"

function* rootSaga() {
    yield all([
        photosSaga(),
        postsSaga()
    ])
}

export default rootSaga;