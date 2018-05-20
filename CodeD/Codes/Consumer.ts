import {show} from './Producer';
show(10,20);
var d:Array<string> = new Array<string>();
d.push("Hello");
//d.push(100);
class Stack<T>{
    data:T;
    arr:T[]=[];
    push(data:T){
        this.data = data;
        this.arr.push(this.data);
    }
    print():void{
        for(let x:T of this.arr){
            console.log("X is "+x);
        }
    }

}
var myStack:Stack<string> = new Stack<string>();
myStack.push("Hello");
myStack.push("Hi");
//myStack.push(100);
myStack.print();
var myStack2:Stack<number> = new Stack<number>();
myStack2.push(100);

