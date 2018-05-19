import {userOperations} from '../helpers/userOperations';
export const UserReducer = (state={},action)=>{
if(action.type && action.type=='LOGIN'){
    var userObject = action.payload.user;
    var currentUser = userOperations.checkLogin(state.users.users,userObject);
    var message = currentUser?"Welcome":"Invalid Userid or Password";
    console.log("Current User Details are ",currentUser);
    return {...state,"currentuser":currentUser,"message":message};
}
else
if(action.type && action.type=='STORE'){
    console.log("Inside Store .... "+action.payload);
    return {...state, "users":action.payload.users,"message":''};
}
return state;
}