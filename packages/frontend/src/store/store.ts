import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import imageReducer from "../features/image/imageSlice"

import imageSaga from "../sagas/image.saga";

const sagaMiddleware = createSagaMiddleware()

export default configureStore({
    reducer:{
        image: imageReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(imageSaga)