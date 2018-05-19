function show(age:number):void{
var name:string = 'amit';
//name=100;
console.log("Name is "+name+" age is "+age);
}
show(21);
function add(a:number, b:number):number{
    return a + b;
}
var result:number = add(100,200);
console.log(`Result is ${result}`);
var names:string[]= ["ram","shyam"];
var record:[string,number]=["ram",1001];
var d:string|number = 100;
d="Hello";
console.log("d is "+d);
enum Colors {
    RED=100, BLUE, GREEN
};
var color:Colors = Colors.BLUE;
if("ram"=="ram"){
var favColor:Colors =Colors.BLUE;
if(favColor==Colors.BLUE){
    console.log("Ur Fav Color is *************",pickColor(Colors.BLUE));

}
}
var ff:string ="Hello";
var mytype:(x:number,y:number)=>number = add;
var e1:{name:string,age:number}= {name:"ram",age:21};
type mydatatype={name:string,id:number};
var e2:mydatatype= {name:'ram',id:1000};
function pickColor(color:Colors):string{
   // var gg :string;
    if(color==Colors.BLUE){
        return "Blue";
    }
    else
    if(color==Colors.RED){
        return "Red";
    }
    else{
        return "Green";
    }
}

console.log("Color is ",color);
var p:number = 1000;
console.log("Type of P is.... ",typeof p);
//p = null;
console.log("Type of p is.... ",typeof p);
