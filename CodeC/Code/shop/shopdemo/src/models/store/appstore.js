import {createStore,applyMiddleware} from 'redux';
import {UserReducer} from '../reducers/userreducer';
import thunk from 'redux-thunk';

export const store = createStore(UserReducer,applyMiddleware(thunk));
store.subscribe(()=>{
    console.log("Store Up... ",store.getState());
})