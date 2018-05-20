import { User } from '../model/user';
import {userArray} from './db';
export function store(userObject:User){
    userArray.push(userObject);
    console.log("Inside Array ",userArray);
    return true;

}