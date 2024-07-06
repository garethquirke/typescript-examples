// Polymorphism in TypeScript refers to the ability of different objects to be treated as
// instances of their superclass. This allows methods to be invoked based on the specific
// implementation of those objects, promoting flexibility and reuse in code.

class Animal {
  makeSound() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof!");
  }
}

function playWithAnimal(animal: Animal) {
  animal.makeSound();
}

const myDog = new Dog();
playWithAnimal(myDog);


// Method overloading in TypeScript allows a single function to have multiple signatures.
// TypeScript will resolve the correct function implementation based on the number and 
// types of arguments passed.
class Calculator {
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: any, b: any): any {
        return a + b;
    }
}

const calc = new Calculator();

console.log(calc.add(2, 3)); // Output: 5
console.log(calc.add('Hello', ' TypeScript')); // Output: "Hello TypeScript"


// Definition: Interfaces in TypeScript are used to define the structure of an object. 
// They describe the properties and methods that an object should have. They can also be
// extended by other interfaces.
interface Person {
    name: string;
    age: number;
    greet(): void;
}

class Employee implements Person {
    constructor(public name: string, public age: number) {}

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

interface Animal {
    move(): void;
}

interface Dog extends Animal {
    bark(): void;
}

class Labrador implements Dog {
    makeSound(): void {
        throw new Error("Method not implemented.");
    }
    move() {
        console.log('Running');
    }

    bark() {
        console.log('Woof!');
    }
}


interface IPerson {
    name: string;
    age: number;
    greet(): void;
}

class Person1 implements IPerson {
    constructor(public name: string, public age: number) {}

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

type Response1 = {
    name: string;
}

type ErrorResponse = {
    error: string;
}

const response =  {} as Response1 | ErrorResponse;



