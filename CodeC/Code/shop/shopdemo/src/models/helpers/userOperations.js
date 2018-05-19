export const userOperations = {
    checkLogin(userArray, userObject){
        var subArray = userArray.filter(user=>{
            return (user.userid == userObject.uid && user.pwd == userObject.pwd);
        });
        if(subArray.length>0){
            return subArray[0];
        }
        else{
            return null;
        }
    }
}