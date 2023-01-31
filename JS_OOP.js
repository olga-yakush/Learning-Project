//Intro to OOP

//Example - OOP: this; when we need to reuse a method (*function inside one object) in other objects, 
// "this" replaces the object's name; e.g. "this.shoes" instead of "purchase1.shoes".
var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log("Total price:", calculation);
    }
}
purchase1.totalPrice(); // call the "totalPrice" function for the "purchase1" object.//120

//A more common method of creating objects from classes is to use the new  keyword. 
//When using a default or empty constructor method, JavaScript implicitly calls the Object superclass to create the instance.
class Animal { /* ...class code here... */ }
var myDog = new Animal()
console.log (Animal)

//example of polymorphism using classes in JavaScript:
class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"

//my example of polymorphism using classes
class Instrument {
    makeSound() {
        console.log("Do, Re, Mi, C, D, E")
    }
}
class Guitar extends Instrument {
    makeSound() {
        super.makeSound()
        console.log("played with metal strings sound")
    }
}
class Piano extends Instrument{
    makeSound() {
        super.makeSound()
        console.log("played with concert organ sound")
    }
}
var spanishGuitar = new Guitar();
var parisOrgan = new Piano();
spanishGuitar.makeSound();
parisOrgan.makeSound();

//DEFAULT Parameters -----------------------------------------------------
function withDefaultParams(number=10) { // function with DEFAULT PARAMETER
    console.log('Result:', number * number)
}
withDefaultParams();

//example
class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) { // default parameters in constructor of class
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
var better = new WithDefaultParams();
better.calculate(); // Result: 6


console.log("-----------separation line-----------");


/*
class Person {
    constructor(name="Tom", age=20, energy=100) {
        this.name=name;
        this.age=age;
        this.energy=energy;
    }
    sleep() {
        console.log(this.energy+=10)
    }
    doSomethingFun() {
        console.log(this.energy-=10);
    }
}

class Worker extends Person {
    constructor(xp=0, hourlyWage=10, name, age, energy) {
        super(name, age, energy);
        this.xp=xp;
        this.hourlyWage=hourlyWage;
    }
    
    goToWork() {
        console.log(this.xp+=10);
    }
}

function intern() {
    var intern = new Worker(0, 10, "Bob", 21, 110);
    intern.goToWork();
    return intern;
  }

function manager() {
    var manager = new Worker(100, 30, "Alice", 30, 120);
    manager.goToWork();
    return manager;
}
*/

/// examples of using TEMPLATE LITERALS ->  ``

//display both variables using template literals (variable interpolation)
let greet = "Hello";
let place = "World";
console.log(`${greet} ${place} !`);

//template strings can span multiple lines.
console.log(`Hello, 
World
!`);

//it's possible to perform arithmetic operation inside a template literal expression
console.log(`${1 + 1 + 1 + 1 + 1} stars!`) ;