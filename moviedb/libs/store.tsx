import {createStore, applyMiddleware} from 'redux';
import thunk, {ThunkMiddleware} from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers';
import { AppActions } from './types/types';

const middleware = [thunk as ThunkMiddleware<AppState,AppActions>];
const initialState = {};

export const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export type AppState = ReturnType<typeof rootReducer>

//export default store;
