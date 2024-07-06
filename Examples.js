var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var circle = new Circle(5);
var rectangle = new Rectangle(10, 20);
console.log(circle.area());
console.log(rectangle.area());
// EX: 2
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var PEOPLE = [new Person("Johner", 19), new Person("Shone", 17), new Person("Glunter", 43), new Person("Frintig", 12)];
var isAdultMapping = function (arr) { return arr.map(function (x) { return (__assign(__assign({}, x), { isAdult: x.age >= 18 })); }); };
var adults = isAdultMapping(PEOPLE);
console.log(adults);
// Ex: 3
var getFactorial = function (n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * getFactorial(n - 1);
};
// EX: 4
function reverseArray(arr) {
    return arr.slice().reverse();
}
// EX: 5
// const fetchData = async(url) => {
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error('Network response was not okay dude');
//         }
//     } catch(err) {
//         console.error('There has been a problem with your fetch operation:', err);
//     }
// }
var fibonacci = function (n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};
// Example usage
console.log(fibonacci(100));
