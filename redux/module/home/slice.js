import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  featured: {
    loading: false,
    error: false,
    success: false,
    data: [],
  },
  story: {
    loading: false,
    error: false,
    success: false,
    data: [],
  },
  latestPost: {
    loading: false,
    error: false,
    success: false,
    data: [],
  },
};

const slice = createSlice({
  initialState,
  name: 'home',
  reducers: {
    getFeature: (state) => ({
      ...state,
      featured: {
        ...state.featured,
        loading: true,
      },
    }),
    getFeatureSuccess: (state, { payload }) => ({
      ...state,
      featured: {
        error: false,
        loading: false,
        success: true,
        data: payload,
      },
    }),
    getFeatureFail: (state, { payload }) => ({
      ...state,
      featured: {
        ...state.featured,
        success: false,
        loading: false,
        error: payload.error,
      },
    }),
    getStory: (state) => ({
      ...state,
      story: {
        ...state.story,
        loading: true,
      },
    }),
    getStorySuccess: (state, { payload }) => ({
      ...state,
      story: {
        error: false,
        loading: false,
        success: true,
        data: payload,
      },
    }),
    getStoryFail: (state, { payload }) => ({
      ...state,
      story: {
        ...state.story,
        success: false,
        loading: false,
        error: payload.error,
      },
    }),
    getLatestPost: (state) => ({
      ...state,
      latestPost: {
        ...state.latestPost,
        loading: true,
      },
    }),
    getLatestPostSuccess: (state, { payload }) => ({
      ...state,
      latestPost: {
        error: false,
        loading: false,
        success: true,
        data: payload,
      },
    }),
    getLatestPostFail: (state, { payload }) => ({
      ...state,
      latestPost: {
        ...state.latestPost,
        success: false,
        loading: false,
        error: payload.error,
      },
    }),
  },
});

export const {
  getFeature,
  getFeatureFail,
  getFeatureSuccess,
  getStory,
  getStoryFail,
  getStorySuccess,
  getLatestPost,
  getLatestPostFail,
  getLatestPostSuccess,
} = slice.actions;

export default slice.reducer;
