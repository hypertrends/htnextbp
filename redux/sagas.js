import { all } from 'redux-saga/effects';
import homeSagas from './Home/saga';

export default function* root () {
  yield all([
    homeSagas(),
  ]);
}
