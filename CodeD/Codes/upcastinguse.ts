class A{
    one():void{
        console.log("A One...");
    }
    two():void{
        console.log("A Two...");
    }
    three():void{
        console.log("A Three...");
    }
    four():void{
        console.log("A Four...");
    }
}
class B extends A{
    four():void{
        console.log("B Four...");
    }
    five():void{
        console.log("B Five");
    }
}
class C extends A{
    one():void{
        console.log("C One...");
    }
    all():void{
        console.log("C All....");
    }
}
class Caller{
    static callMe(a:A):void{
        a.one();
        a.two();
        a.three();
        a.four();
    }
}
Caller.callMe(new A());
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$")
Caller.callMe(new B());
console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
Caller.callMe(new C());

/*var b:B = new B();
b.one();
b.two();
b.three();
b.four();
b.five();
console.log("********************************")
var c:C = new C();
c.one();
c.two();
c.three();
c.four();
c.all();
*/