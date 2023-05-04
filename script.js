"use strict";
console.log(document.querySelector(".message").textContent); //the query seclector is a method available on document object
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
document.querySelector(".message").textContent = "Correct number!"; //here we are casually manipulating one of the dom nodes
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;
document.querySelector(".guess").value = 23;
document.querySelector(".guess").value;
