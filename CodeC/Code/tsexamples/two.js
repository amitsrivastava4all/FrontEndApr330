var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(age) {
        this.age = age;
    }
    Person.prototype.print = function () {
        console.log("Age is " + this.age);
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, _salary) {
        var _this = _super.call(this, 21) || this;
        _this.id = id;
        _this._salary = _salary;
        _this.name = name; // Local to Instance Assign
        return _this;
    }
    Object.defineProperty(Employee.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (salary) {
            this._salary = salary;
        },
        enumerable: true,
        configurable: true
    });
    Employee.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("Id is " + this.id + " \n        Name is " + this.name + " \n        and Salary is " + this.salary);
    };
    return Employee;
}(Person));
//var per:Person = new Person(21);
var emp = new Employee(1001, "Ram", 909);
emp.salary = emp.salary + 1000;
console.log("Now Salary is ", emp.salary);
emp.print();
