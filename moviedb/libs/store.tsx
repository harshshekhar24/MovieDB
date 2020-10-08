import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from './sagas/sagas';
import thunk, {ThunkMiddleware} from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers';
import { AppActions } from './types/types';

//const middleware = [thunk as ThunkMiddleware<AppState,AppActions>];
//const initialState = {};
const middleware=createSagaMiddleware();
export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(middleware)));

export type AppState = ReturnType<typeof rootReducer>

middleware.run(saga);

export default store;
