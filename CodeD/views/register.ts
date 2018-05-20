import {User} from '../model/user';
import {validate} from '../helpers/validation';
import {message} from '../model/message';
import {store} from '../db/store';
export function register(userid:string, pwd:string){
    var userObject:User = new User(userid, pwd);
    var result:message  = validate(userObject);
    if(result.type=='Success'){
        // call store
    console.log(store(userObject)?"Register SuccessFully":"Can't Register");
    }
    else{
        console.log("Can't Register");
        console.log(result.msg);
    }
}