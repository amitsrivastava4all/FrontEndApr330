interface K1{
    show():void;
}
interface K2{
    print():void;
}
interface K3 extends K1, K2{
    display():void
}
// class K4 implements K3{

// }
// id , name, salary, att, companyname, bonus, hra, da, ta
// 1. class
// 2. type
// 3. interface use for Paramaters
interface Emp{
    id:number;
    name:string;
    salary:number;
}
interface FunctionStructure{
    (x:number,y:number):number;
}
function multiply(a:number, b:number):number{
    return a * b;
}
var ee:FunctionStructure = multiply;
var d1:number = ee(100,200);
console.log(`D1 is ${d1}`);
function display(emp:Emp){

}
function show(emp:Emp){
    console.log(`Inside Show ::: Id is ${emp.id} Name is ${emp.name} and Salary is ${emp.salary}`); 
}
show({id:1001,name:'Ram',salary:8888});
type mytype = {id:number, name:string, salary:number};
function print(obj:mytype){
    console.log(`Id is ${obj.id} Name is ${obj.name} and Salary is ${obj.salary}`);

}
var myobject:mytype = {id:1001,name:'Ram',salary:9999};
print(myobject);