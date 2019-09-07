import { all } from 'redux-saga/effects';
import homeSagas from './Home/saga';
import aboutSagas from './About/saga';

export default function* root () {
  yield all([
    homeSagas(),
    aboutSagas(),
  ]);
}
