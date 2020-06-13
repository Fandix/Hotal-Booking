import { createStore, applyMiddleware } from 'redux';
import  thunkMiddleware   from 'redux-thunk';
import { createLogger }  from 'redux-logger';
import Reducers from "./Reducers";

const middleware = applyMiddleware(thunkMiddleware,createLogger());

export default createStore(Reducers,middleware);