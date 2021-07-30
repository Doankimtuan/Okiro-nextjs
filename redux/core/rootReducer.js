import { combineReducers } from '@reduxjs/toolkit';
import home from '../module/home/slice';
const rootReducer = combineReducers({
  home,
});

export default rootReducer;
