export const actionCreator=(operationName,userid, pwd)=>{
   return {type:operationName,payload:{user:{"uid":userid,"pwd":pwd}}};
}