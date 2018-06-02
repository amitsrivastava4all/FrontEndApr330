import {Injectable} from '@angular/core';
@Injectable()
export class MyService{
  private str:string;
  constructor(){
    this.str = "";
  }
  takeData(str:string){
  this.str = str;
  }
  getData(){
    return this.str;
  }
}
