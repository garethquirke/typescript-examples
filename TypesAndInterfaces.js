// Polymorphism in TypeScript refers to the ability of different objects to be treated as
// instances of their superclass. This allows methods to be invoked based on the specific
// implementation of those objects, promoting flexibility and reuse in code.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.makeSound = function () {
        console.log("Animal sound");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("Woof!");
    };
    return Dog;
}(Animal));
function playWithAnimal(animal) {
    animal.makeSound();
}
var myDog = new Dog();
playWithAnimal(myDog);
// Method overloading in TypeScript allows a single function to have multiple signatures.
// TypeScript will resolve the correct function implementation based on the number and 
// types of arguments passed.
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    return Calculator;
}());
var calc = new Calculator();
console.log(calc.add(2, 3)); // Output: 5
console.log(calc.add('Hello', ' TypeScript')); // Output: "Hello TypeScript"
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
    }
    Employee.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Employee;
}());
var Labrador = /** @class */ (function () {
    function Labrador() {
    }
    Labrador.prototype.makeSound = function () {
        throw new Error("Method not implemented.");
    };
    Labrador.prototype.move = function () {
        console.log('Running');
    };
    Labrador.prototype.bark = function () {
        console.log('Woof!');
    };
    return Labrador;
}());
