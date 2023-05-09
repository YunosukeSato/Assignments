import { snackReducer } from './snackReducer';
import { drinkReducer } from './drinkReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  snackReducer,
  drinkReducer,
});

export default allReducers;
