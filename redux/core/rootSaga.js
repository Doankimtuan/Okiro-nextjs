import { all } from 'redux-saga/effects';
import homeSage from '../module/home/saga';

export default function* root() {
  yield all([...homeSage]);
}
