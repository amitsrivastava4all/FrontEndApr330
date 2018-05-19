import {urls} from '../../utils/config';
export const fetchActionCreator=()=>{
 return dispatch=>{
    fetch(urls.userUrl).then(response=>{
        response.json().then(data=>{
            console.log("Going to Dispatch ... ",data);
            dispatch({type:'STORE',payload:{users:data}});    
        }).catch(err=>{
            console.log("Invalid JSON...",err);
        });
    });
 }   
}