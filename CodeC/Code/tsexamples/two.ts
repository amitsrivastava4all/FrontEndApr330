abstract class Person{
    constructor(protected age:number){

    }
    print():void{
        console.log("Age is "+this.age);
    }
}
class Employee extends Person{
    name:string;  // Instance Var
    constructor(private id:number,name:string,private _salary:number){
        super(21);
        this.name = name;  // Local to Instance Assign
    }
    set salary(salary:number){
    this._salary = salary;
    }
    get salary(){
        return this._salary;
    }
    print():void{
        super.print();
        console.log(`Id is ${this.id} 
        Name is ${this.name} 
        and Salary is ${this.salary}`);
    }
}
//var per:Person = new Person(21);
var emp:Employee = new Employee(1001,"Ram",909);
emp.salary = emp.salary + 1000;
console.log("Now Salary is ",emp.salary);
emp.print();