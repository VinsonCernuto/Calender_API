// 1.- Display current time using Moment.js
console.log(moment().format("dddd MMMM Do"));
var now = moment().format("dddd MMMM Do");
$("#currentDay").text(now);
// 2.- Click event to save text area content to Local Storage

// 3.- When app opens, display content for each time block from local storage.

// 4.- Change time block background color depending in the current hour (past, present and future).
console.log(moment().hour())