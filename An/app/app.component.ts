
import { Component } from '@angular/core';
import {Item} from '../models/Item';
@Component({
  selector:'app-root',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
}

)
export class AppComponent{
  show: boolean;
  myclass: string;
message: string ;
myval: string;
name:string;
lastName:string;
msg:string;
isValid:boolean;
fruits:string[];
count:number;
items:Item[]=[];
searchValue:string;

fillItems():void{
this.items.push(new Item(1001,"Mobile",9999));
this.items.push(new Item(1002,"Led",2999));
this.items.push(new Item(1003,"Shoes",1999));

}
search(event){

  this.searchValue = event.target.value;
  if(this.searchValue.trim().length==0){
    this.items = [];
    this.fillItems();
  }
  this.doSearch();
}
doSearch():void{
  this.items= this.items.filter(itemObject=>itemObject.name.includes(this.searchValue));
}
constructor(){
  this.fillItems();
  this.count = 0;
  this.isValid = false;
  this.fruits = ['Apple','Orange','Banana'];
  this.lastName = '';
  this.name = '';
  this.show = true;
  this.message = '2018';
  this.myval = 'Text value.....';
}
selectedItem(event){
  console.log("Event is ",event);
alert("Item Selected "+event.target.value);
}
callMe():void{
  this.show = !this.show;
  this.myclass = 'green';
  this.message = "Call Me call";
}
print(lastName):void{
this.lastName = lastName;
this.name=  this.name  + ' ' + this.lastName;
}
takeValue(event):void{
this.name = event.target.value;
}
counter():void{
  this.count++;
}
}
