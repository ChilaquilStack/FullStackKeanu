import { takeLatest, call, put } from "redux-saga/effects";
import { getImage, putError, putImage, putLoading } from "../features/image/imageSlice";
import imageApi from '../services/image.service'

type typeAction = {
    payload: {
        query: string,
        variables: any
    }
}

export function* fetchImage({payload}: typeAction) {
    yield put(putLoading(true))
    try {
        const { data } = yield call(imageApi, { query: payload.query, variables: payload.variables});
        yield put(putImage(data));
    } catch (error) {
        yield put(putError(error));
    } finally {
        yield put(putLoading(false))
    }
}

export default function* imageSaga(){
    yield takeLatest<string, any>(getImage.toString(), fetchImage);
}