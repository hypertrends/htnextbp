import { all, call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_ABOUT_DATA, loadAboutDataSuccess } from './actions'

export function* loadAboutDataSaga(action) {
  yield put(loadAboutDataSuccess({ aboutMe: "YO!! THIS IS MY PAGE" }));
}

export function* watchLoadAbout() {
  yield takeLatest(LOAD_ABOUT_DATA, loadAboutDataSaga);
}

export default function* rootSaga() {
  yield all([
    watchLoadAbout(),
  ]);
}