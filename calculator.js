// Create an HTML file that has two input fields to accept the two numbers to perform operations on.
// Create 4 buttons to perform each of the basic mathematical functions (add, subtract, multiply, divide).
// In your JavaScript, put an event listener on each of the buttons.
// Copy the code below an implement a basic calculator.
// When the user performs one of the operations, output the result to another DOM element of your choice.
// console.log("hello world");


  // Create a function that multiplies two numbers
  // passed in as arguments. Return the sum.
function multiply(){
var input1 = document.getElementById('inpOne').value,
 input2 = document.getElementById('inpTwo').value,
 result = document.getElementById('output').innerHTML = input1 * input2;
}
function handleMultiplyEvent(){
var butt1 = document.getElementById('multiply');
butt1.addEventListener('click', function(){
multiply();
console.log('multiplied');
  });
 } 

handleMultiplyEvent();

  // Create a function that adds two numbers
  // passed in as arguments. Return the sum.

function add(){
var input5 = document.getElementById('inpOne').value,
 input6 = document.getElementById('inpTwo').value,
 addResult = document.getElementById('output').innerHTML = 
 parseInt(input5) + parseInt(input6);
}
function handleAddEvent(){
var butt3 = document.getElementById('add');
butt3.addEventListener('click', function(){
add();
console.log('added');
  });
 } 

handleAddEvent();


  // Create a function that subtracts two numbers
  // passed in as arguments. Return the difference.
function subtract(){
var input3 = document.getElementById('inpOne').value,
 input4 = document.getElementById('inpTwo').value,
 subResult = document.getElementById('output').innerHTML = input3 - input4;
}
function handleSubtractEvent(){
var butt4 = document.getElementById('subtract');
butt4.addEventListener('click', function(){
subtract();
console.log('subtracted');
  });
 } 

handleSubtractEvent();



  // Create a function that divides two numbers
  // passed in as arguments. Return the quotient.
 
function divide(){
var input7 = document.getElementById('inpOne').value,
 input8 = document.getElementById('inpTwo').value,
 result = document.getElementById('output').innerHTML = input7 & input8;
}
function handleDivideEvent(){
var butt5 = document.getElementById('divide');
butt5.addEventListener('click', function(){
divide();
console.log('divide');
  });
 } 

handleDivideEvent();




  // Create a function that accepts three arguments.
  //   1. First number
  //   2. Second number
  //   3. A function that performs an operation on them

  // Return the value of the operation.
 
