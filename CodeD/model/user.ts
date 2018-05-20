export class User{
    constructor(private _userid:string,private _pwd:string ){

    }
    public set userid(userid:string){
        this._userid = userid;
    }
    public get userid(){
    return this._userid;
    }
    public set pwd(pwd:string){
        this._pwd = pwd;
    }
    public get pwd(){
    return this._pwd;
    }

}