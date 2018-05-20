interface Calc{
    compute(x:number,y:number):number;
}
class CalcImpl implements Calc{
    public compute(x:number, y:number):number{
        return x + y;
    }
    public  power(a:number, b:number){
        return a **b;
    }
}
class CalcImpl2 implements Calc{
    public compute(a:number, b:number):number{
        return a*b;
    }
}
//var calcObject:Calc = new CalcImpl();  // Upcasting
var calcObject:CalcImpl = new CalcImpl();
var result:number = calcObject.compute(10,20);
console.log(`Result is ${result}`);
//var cc:CalcImpl = (CalcImpl)calcObject;
result = calcObject.power(10,3);
console.log(`Power Result is ${result}`);
