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
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //implementing game logic
  if (!guess) {
    //using negation operatior to invert boolean value from false to true(0 is falsy and we use !operatior to convert it to true)
    document.querySelector(".message").textContent = "No number."; //first option is always sugests that there is no input
  }
});
