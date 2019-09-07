import { combineReducers } from 'redux';
import { AppReducer } from './App/reducer';
import { HomeReducer } from './Home/reducer';
import { AboutReducer } from './About/reducer';

export default combineReducers({
	global: AppReducer,
	home: HomeReducer,
	about: AboutReducer,
});