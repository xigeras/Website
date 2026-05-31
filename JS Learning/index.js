//console.log("Hello");
//console.log(`I like pizza!`)


//window.alert(`This is an alert!`);
//window.alert(`I like pizza!`);

//document.getElementById("myH1").textContent = "Hello";
//document.getElementById("myP").textContent = "I like pizza!";

// This is a comment

/*
    This
    is
    a
    comment
*/


// variable = A container that stores a value.
// Behaves as if it were the value it contains

// 1. Declaration     let x;
// 2. Assignment      x = 100;
/*
let fullName = "August Ortega"
let age = 22;
let isStudent = true;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;
*/

//arithmetic operators = operands (values, variables, etc.)
//                       operators (+ - * /)
//                       ex. 11 = x + 5;

//let students = 30;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//students = students ** 2;
//let extraStudents = students % 4

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
//students **= 2;
//students %= 2;

//students++;
//students--;


/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication, division, modulo
    4. addition and subtraction
*/

//let result = 1 + 2 * 3 + 4 ** 2;

//console.log(result);

/*
EASY WAY TO DO USER INPUT

let username = window.prompt("What is your username?");

console.log(username);
*/


/*
PROFESSIONAL WAY
let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
}
*/


// type conversion = change the datatype of a value to another
//                    (strings, numbers, booleans)

/*
let x = "";
let y = "";
let z = "";

x = Number(x);
y = String(y);
z = Boolean(z);


console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
*/

//const = a variable that can't be changed

/*
const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = "The circumference is " + circumference + "cm";
}
*/

// math = built-in object that provides a collection of properties and methods

/*
let x = 3;
let y = 2;
let z = 1;

//z = Math.round(x);
//z = Math.floor(x);
//z = Math.ceil(x);
//z = Math.trunc(x);
//z = Math.pow(x, y);
//z = Math.sqrt(x);
//z = Math.log(x)
//z = Math.sin(x);
//z = Math.cos(x);
//z = Math.tan(x);
//z = Math.abs(x);
//z = Math.sign(x);
let max = Math.max(x, y, z);
let min = Math.min(x, y, z);

console.log(min);
*/

// IF STATEMENTS

/*
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function(){

    age = myText.value;
    age = Number(age);

    if (age >= 100){
        resultElement.textContent = `You are TOO OLD to enter this site!`;
    }
        else if(age == 0){
        resultElement.textContent = `You can't enter. You were just born!`;
    }
    else if(age >= 18) {
        resultElement.textContent = `You are old enough to enter this site.`;
    }
    else if(age < 0){
        resultElement.textContent = `Your age can't be below 0.`;
    }
    else{
        resultElement.textContent = `You must be 18+ to enter this site.`;
    }
}
*/

// .checked is a property that determines the checked state of an HTML checkbox or radio button element

/*
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `You are subscribed!`;
    }
    else{
        subResult.textContent = `You are NOT subscribed!`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with Visa`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `You are paying with MasterCard`;
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = `You are paying with PayPal`;
    }
    else{
        paymentResult.textContent = `You must select a payment type`;
    }
}
*/


//ternary operator = a shortcut to if{} and else{} statements. 
//                      helps to assign a variable based on a condition
//                      condition ? codeIfTrue : codeIfFalse;


//let age = 21;
//let message = age >= 18 ? "You're an adult" : "You're a minor";
//console.log(message);

/*
let time = 16;
let greeting = time < 12 ? "Good morning!" : "Good afternoon!";
console.log(greeting);
*/

/*
let isStudent = true;
let message = isStudent ? "You are a student" : "You are NOT a student";
console.log(message);
*/

/*
let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount*(discount/100)}`);
*/


// SWITCHES


/*
let testScore = 92;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
        break;
}

console.log(letterGrade);
*/

// string methods







