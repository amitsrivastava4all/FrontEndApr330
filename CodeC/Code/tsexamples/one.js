function show(age) {
    var name = 'amit';
    //name=100;
    console.log("Name is " + name + " age is " + age);
}
show(21);
function add(a, b) {
    return a + b;
}
var result = add(100, 200);
console.log("Result is " + result);
var names = ["ram", "shyam"];
var record = ["ram", 1001];
var d = 100;
d = "Hello";
console.log("d is " + d);
var Colors;
(function (Colors) {
    Colors[Colors["RED"] = 100] = "RED";
    Colors[Colors["BLUE"] = 101] = "BLUE";
    Colors[Colors["GREEN"] = 102] = "GREEN";
})(Colors || (Colors = {}));
;
var color = Colors.BLUE;
if ("ram" == "ram") {
    var favColor = Colors.BLUE;
    if (favColor == Colors.BLUE) {
        console.log("Ur Fav Color is *************", pickColor(Colors.BLUE));
    }
}
var ff = "Hello";
var mytype = add;
var e1 = { name: "ram", age: 21 };
var e2 = { name: 'ram', id: 1000 };
function pickColor(color) {
    // var gg :string;
    if (color == Colors.BLUE) {
        return "Blue";
    }
    else if (color == Colors.RED) {
        return "Red";
    }
    else {
        return "Green";
    }
}
console.log("Color is ", color);
var p = 1000;
console.log("Type of P is.... ", typeof p);
//p = null;
console.log("Type of p is.... ", typeof p);
