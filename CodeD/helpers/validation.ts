import {User} from '../model/user';
import {message} from '../model/message';
export function validate(userObject:User):message{

if(isBlank(userObject.userid) && isBlank(userObject.pwd)){
    return {msg:'Userid is Blank and Pwd is Blank',type:'Error'};
}
else{
    return {msg:'',type:'Success'};
}

}
function isBlank(str:string):boolean
{
    return str.trim().length==0;
}