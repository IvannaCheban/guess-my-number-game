"use strict";
//console.log(document.querySelector(".message").textContent); //the query seclector is a method available on document object
//the message is a class selector that we reffer to in html //this first part selects the element and then on that
//element we can read the text content property using another dot
//besides getting the text content we can also set the text content
//
//What is the DOM and DOM manupulation
//In a nutshell  it is making JS interact with web page
// DOM _Document object model - structuret representation of html documents that
//  allows JS to access html elements and styles to manipulate them

//DOM stands at the top of the doom tree structure
//and document is a spectial object that we have acces to in javascript
//and this object serves a an entry point into the dom
//basicaly we need it to start selecting elemets
//whatever is in html element is also has to be in a dom

//DOM !== Javascript

//DOM methods and properties is part of web APIs
//Web API is like libraries that are written in JS and the browser implements them so we can acess from JS code
// API - aplication programming interface
// all that happens behid the scenes and we dont have to import or do anything
//besides the DOM there are many different API that JS implemetns:
// such as Timers, Fetch API and many more

//Selecting and manipulating elements

//besides getting the text content we can also set the text content
/*
document.querySelector(".message").textContent = "Correct number!"; //here we are casually manipulating one of the dom nodes
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;
document.querySelector(".guess").value = 23;
document.querySelector(".guess").value;
*/
//Handling click Events
//Event is something that is happening on the page
// for example a mouse click or a mouse moving,or key press//
//with event listener we can wait for certain event to happen and then react to in

// in order to listen to events we first must select the element where the event should happen
/*
document.querySelector(".check").addEventListener("click", function () {
  //first value is action we should listen to, and second is funciton value
  //we selected the element button check and then we used an event listener on that element to attach an event handler, and that event handler is the function argument
  console.log(Number(document.querySelector(".guess").value));// usually we ve get an input from a ui its a stiring, so we have to convert it 
  //we did not store the function value in the variable but passed it directly to add event listener method
  document.querySelector(".message").textContent = "Correct number!"; //we can also have some DoM manipulation here;
});
*/
/*

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //implementing game logic
  if (!guess) {
    //using negation operatior to invert boolean value from false to true(0 is falsy and we use !operatior to convert it to true)
    document.querySelector(".message").textContent = "No number."; //first option is always sugests that there is no input
  }
});
*/
//Implementing game logic (how the game works);
// the second thing: we have to define a secret number and we have to do it on the global scale(outside of the handler function) because we want that secret number to be defined once - when the game starts (we dont want to get a new secret number on each click)
/*
const secretNumber = Math.trunc(Math.random() * 20) + 1; //math is a default js object and it has "random" method; whenever you run it, it gives you a new number and its always different from the one before
//trunc removes decimal and it rounds the random to 19 so we need to add 1 to have 20

document.querySelector(".number").textContent = secretNumber; //displaying the number variable(just on development stage)

let score = 20; //part of an aplication state //score value that is going to decrease with a wrong guess

//It is always good to store a data in a variable and not just rely on DOM

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No number.";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct number!";
  } else if (guess > secretNumber) {
    if (score > 1) {
      //if the score >0 we still have 1 chance but we should'nt so it 1 then
      //adding a condition for finite game
      document.querySelector(".message").textContent = "Too high!";
      score--; //decreasing value of score by 1
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game.";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber)
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game.";
      document.querySelector(".score").textContent = 0;
    }
});
*/

//aplication state - all the data that is relevant to the aplication

//Manipulating CSS styles

//DOM also includes CSS styles

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No number.";
    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct number!";
    document.querySelector("body").style.backgroundColor = "#60b347"; //in JS properties with multiple words - adapt the camelCase notation//value is specifid in string
    document.querySelector(".number").style.width = "30rem"; //again value is in string which contains the number + unit

    //when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game.";
      document.querySelector(".score").textContent = 0;
    }

    //when guess is too low
  } else if (guess < secretNumber)
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game.";
      document.querySelector(".score").textContent = 0;
    }
});
//
