import {initialState} from './state';
export const reducer=(state=initialState,action)=>{
    console.log("Reducer action is ",action);
if(action.type && action.type=='PLUS'){
    return {counter:state.counter + action.payload.value}
}
return state;
}