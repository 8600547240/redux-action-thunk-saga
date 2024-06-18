import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"
import { userReducer } from "../reducers/userReducer"
import { commentsReducer } from "../reducers/commentsReducer"
import { sagaReducer } from "../reducers/sagaReducer"
import thunk from "redux-thunk"
import createSagaMiddleware from "redux-saga"
import rootSaga from "../sagas/rootSaga"

const sagaMiddleware = createSagaMiddleware()
export const appStore = configureStore({
    reducer: {
        userReducer,
        commentsReducer,
        sagaReducer
    },
    middleware: [logger,thunk,sagaMiddleware]
})
sagaMiddleware.run(rootSaga)