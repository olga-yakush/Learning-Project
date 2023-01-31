console.log('Hello World!');

/* Data types
string= text;
number= numeric values e.g. price;
Boolean =True/False;
Null= absence of value;
Undefined= unassigned value;
BigInt=very large range of numbers;
Symbol=unique identifier.
*/

// my new comment;

console.log(2+2);
console.log(100==100);
console.log(5!=8&&5==5);

//22 is divided by 5 and equals to 4 and the remainder is 2;
console.log(22%5);

//to check Current time is between 9.00 and 17.00
var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17);

//to check Current time is NOT between 9.00 and 17.00
var currentTime = 7;
console.log(currentTime < 9 || currentTime > 17);

var score=8;
console.log("Mid-level skills:", score >0 && score <10);

var timeRemaining=0;
var energy=10;
console.log("Game over: ", timeRemaining==0 || energy==0);

var num1=2;
var num2=5;
var test1=num1 % 2;
var test2=num2 % 2;
var result1=test1==0;
var result2=test2==0;

console.log("Is",num1, "an even number?", result1 );
console.log("Is",num2, "an even number?", result2 );

var result=50;
if(result > 40) {
    console.log('You passed the test.');
} else {
    console.log('You did not pass the test')
}


var age=10;
if(age >65 || age==65) {
    console.log("you get your income from your penstion.");
} else if (age<65 && age>=18) {
    console.log("Each month you get a salary.");
} else if (age <18) {
    console.log("You get an allowance.")
} else {
    console.log("The value of the age variable is not numerical.");
}

var day="Sunday";
switch (day) {
    case "Monday":
        console.log("Do something.");
        break;
    case "Tuesday":
        console.log("Do something.");
        break;
    case "Wedsday":
        console.log("Do something.");
        break;
    case "Thursday":
        console.log("Do something.");
        break;
    case "Friday":
        console.log("Do something.");
        break;
    case "Saturday":
        console.log("Do something.");
        break;
    case "Sunday":
        console.log("Do something.");
        break;
    default:
        console.log("There is no such day");
}

for (var i=1; i<=5; i++) {
    console.log(i);
}
console.log("Counting completed!");

for (var i=5; i>0; i--) {
    console.log(i);
}
console.log("Countdown finished!");

var i=1;
while (i<=5) {
    console.log(i);
    i=i+1;
}
console.log("Counting completed!");

var i=5;
while (i>0){
    console.log(i);
    i=i-1
}
console.log("Countdown finished!");

var year=2018;
while(year<=2022) {
    console.log(year);
    year=year+1;
}

for (var i=1; i<=10; i++) {
    if (i==1) {
        console.log("Gold medal");
    } else if (i==2) {
        console.log("Silver medal");
    } else if (i==3) {
        console.log("Bronze medal");
    } else {
        console.log(i);
    }
}

for (var i=1; i<=10; i++) {
    switch (i) {
        case 1:
            console.log("Gold medal");
            break;
        case 2:
            console.log("Silver medal");
            break;
        case 3:
            console.log("Bronze medal");
            break;
        default:
            console.log(i);
    }
}

function letterFinder (word, match) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log("Found the", match, "at", i)
        } else {
            console.log("...No match found at", i)
        }
    }
}

letterFinder("test", "s")

var clothes=[]; // create empty array literal and assign variable "clothes"
clothes.push("Dress"); //add item to array
clothes.push("Hat");
clothes.push("T-shirt");
clothes.push("Shoes");
clothes.push("Bag");
clothes.pop(); // remove last item in the array
clothes.push("Bag-white");
console.log(clothes[2]); // show the 3d item in the array.

var favCar={}; // create an empty object and assign variable "favCar"
favCar.color="Purple";
favCar.convertible=true;
console.log(favCar);

for (i=1; i<3; i++) {
    for (j=1; j<=7; j++) {
        console.log("Week "+ i + "  day "+ j)
    }
}

for (i=1; i<3; i++) {
    console.log("Week "+ i )
    for (j=1; j<=7; j++) {
        console.log("  day "+ j)
    }
}

console.log(typeof(3.14));

/* try {
    throw new ReferenceError();
} catch(err) {
    console.log(err);
    console.log("There was a reference error.")
}
console.log("My program does not stop running!")

try {
    console.log(a+b);
} catch(err) {
    console.log(err);
    console.log("there was an error");
    console.log("the error was saved in the error log")
}
console.log("My program does not stop running yay!") */


function addTwoNums(a,b) {
    try {
        if (typeof(a)!="number") {
            throw new ReferenceError("the first argument is not a number");
        } else if (typeof(b)!="number") {
            throw new ReferenceError("the second argument is not a number");
        } else {
            console.log(a+b);
        }
    } catch(err) {
        console.log("Error!", err);
    }
}
addTwoNums(5,"5");
console.log("It still works");

console.log("--------------Solution: Defensive programming-------------")

function letterFinder(word, match) {
    var condition1=typeof(word)=="string"&&word.length>=2;
    var condition2=typeof(match)=="string"&&match.length==1;
    if (condition1 && condition2) {
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        console.log("Please pass correct arguments to the function.")
    }
}
letterFinder([],[]);
console.log("--------------alternative run")
letterFinder("cat", "c");

//Function calling and recursion
let counter=5;
function example() {
    console.log(counter);
    counter=counter-1;
    if (counter===0) return; //ended at the condition, when counter equals 0
    example();
}
example();

function getTotal(a,b) {
    return a + b
}
var num1 = 2;
var num2 = 8;

var total = getTotal(num1, num2);
console.log(total);

console.log("-------------New Tasks---------------");

// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    var message = "%c" + txt;
    var style = `color: ${color};`
    style += `background: ${background};`
    style += `font-size: ${fontSize};`
    console.log(message, style);
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    typeof (reason) == "string";
    var fontStyle = "color: tomato; font-size: 50px";
    if (reason == "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    } else if (reason == "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    } else {
        console.log(message, style);
    }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt);
    celebrateStyler(reason);
}
// Call styleAndCelebrate
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');


//That's correct! The  two  function is passed as the first parameter to the  calculate  function and the  one  function is passed as the second parameter. 
//Therefore, when the  calculate  function runs, it will call  two() + one() + one() . 
//The result is then  4 .

function two() {
    return 2;
}
function one() {
    return 1;
}
function calculate(initialValue, incrementValue) {
    return initialValue() + incrementValue() + incrementValue();
}
console.log(calculate(two, one));