import {createStore} from 'redux';
import {UserReducer} from '../reducers/userreducer'
export const store = createStore(UserReducer);
store.subscribe(()=>{
    console.log("Store Up... ",store.getState());
})