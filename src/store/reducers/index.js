import { combineReducers } from 'redux';
import coreReducers from './core.reducer';

export default combineReducers({
  data: coreReducers
});
