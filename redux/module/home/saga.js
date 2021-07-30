import { takeLatest, put, call } from 'redux-saga/effects';
import { getFeaturesApi, getStoryApi, getLatestPostApi } from '../../api/home';
import {
  getFeature,
  getFeatureFail,
  getFeatureSuccess,
  getStory,
  getStoryFail,
  getStorySuccess,
  getLatestPost,
  getLatestPostFail,
  getLatestPostSuccess,
} from './slice';

function* getFeatureSage() {
  try {
    const result = yield call(getFeaturesApi);
    yield put(getFeatureSuccess(result));
  } catch (error) {
    yield put(getFeatureFail());
  }
}

function* getStorySaga() {
  try {
    const result = yield call(getStoryApi);
    yield put(getStorySuccess(result));
  } catch (error) {
    yield put(getStoryFail());
  }
}
function* getLatestPostSaga({ payload }) {
  try {
    const result = yield call(getLatestPostApi, payload);
    yield put(getLatestPostSuccess(result));
  } catch (error) {
    yield put(getLatestPostFail());
  }
}

export default [
  takeLatest(getFeature, getFeatureSage),
  takeLatest(getStory, getStorySaga),
  takeLatest(getLatestPost, getLatestPostSaga),
];
