// EX: 1
interface Shape {
    area(): number;
}

class Circle implements Shape {
    constructor(public radius: number) {}

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle implements Shape {
    constructor(public width: number, public height: number) {}

    area(): number {
        return this.width * this.height;
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 20);

console.log(circle.area());
console.log(rectangle.area());


// EX: 2
class Person {
    constructor(public name: string, public age: number){}
}

const PEOPLE: Person[] = [new Person("Johner", 19), new Person("Shone", 17), new Person("Glunter", 43), new Person("Frintig", 12)];
const isAdultMapping = (arr) => arr.map(x => ({...x, isAdult: x.age >= 18 }));
const adults = isAdultMapping(PEOPLE);
console.log(adults);

// Ex: 3

const getFactorial = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * getFactorial(n - 1);
}

// EX: 4
function reverseArray<T>(arr: T[]): T[] {
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

const fibonacci = (n) => {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};

// Example usage
console.log(fibonacci(100));


