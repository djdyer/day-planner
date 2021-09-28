// Time/Date goes inside <p> tag w/n <header>
timeInterval = setInterval(function () {
  var currentDay = moment();
  $("#currentDay").text(currentDay.format("dddd, MMMM Do YYYY, h:mm:ss A"));
}, 1000);

// // Current hour of the day
var currentHour = moment().format("h");
var currentHourNum = parseInt(currentHour);

// Separate variable for each hour, targets text
var hour9 = $("#hour9").text();
var hour10 = $("#hour10").text();
var hour11 = $("#hour11").text();
var hour12 = $("#hour12").text();
var hour13 = $("#hour13").text();
var hour14 = $("#hour14").text();
var hour15 = $("#hour15").text();
var hour16 = $("#hour16").text();
var hour17 = $("#hour17").text();

// Converts hour block text string into integer
var new9 = parseInt(hour9);
var new10 = parseInt(hour10);
var new11 = parseInt(hour11);
var new12 = parseInt(hour12);
var new13 = parseInt(hour13);
var new14 = parseInt(hour14);
var new15 = parseInt(hour15);
var new16 = parseInt(hour16);
var new17 = parseInt(hour17);

// 9AM BLOCK
// If future
if (new9 > currentHourNum) {
  $("#event9").attr("style", "background-color: #77dd77");
}

// If present
if (new9 === currentHourNum) {
  $("#event9").attr("style", "background-color: #ff6961");
}

// // If passed
if (new9 < currentHourNum) {
  $("#event9").attr("style", "background-color: #d3d3d3");
}

// 10AM BLOCK
// If future
if (new10 > currentHourNum) {
  $("#event10").attr("style", "background-color: #77dd77");
}
// If present
if (new10 === currentHourNum) {
  $("#event10").attr("style", "background-color: #ff6961");
}
// // If passed
if (new10 < currentHourNum) {
  $("#event10").attr("style", "background-color: #d3d3d3");
}

// 11AM BLOCK
// If future
if (new11 > currentHourNum) {
  $("#event11").attr("style", "background-color: #77dd77");
}
// If present
if (new11 === currentHourNum) {
  $("#event11").attr("style", "background-color: #ff6961");
}
// // If passed
if (new11 < currentHourNum) {
  $("#event11").attr("style", "background-color: #d3d3d3");
}

// 12PM BLOCK
// If future
if (new12 > currentHourNum) {
  $("#event12").attr("style", "background-color: #77dd77");
}
// If present
if (new12 === currentHourNum) {
  $("#event12").attr("style", "background-color: #ff6961");
}
// // If passed
if (new12 < currentHourNum) {
  $("#event12").attr("style", "background-color: #d3d3d3");
}

// 1PM BLOCK
// If future
if (new13 < currentHourNum) {
  $("#event13").attr("style", "background-color: #77dd77");
}
// If present
if (new13 === currentHourNum) {
  $("#event13").attr("style", "background-color: #ff6961");
}
// // If passed
if (new13 > currentHourNum) {
  $("#event13").attr("style", "background-color: #d3d3d3");
}

// 2PM BLOCK
// If future
if (new14 < currentHourNum) {
  $("#event14").attr("style", "background-color: #77dd77");
}
// If present
if (new14 === currentHourNum) {
  $("#event14").attr("style", "background-color: #ff6961");
}
// // If passed
if (new14 > currentHourNum) {
  $("#event14").attr("style", "background-color: #d3d3d3");
}

// 3PM BLOCK
// If future
if (new15 < currentHourNum) {
  $("#event15").attr("style", "background-color: #77dd77");
}
// If present
if (new15 === currentHourNum) {
  $("#event15").attr("style", "background-color: #ff6961");
}
// // If passed
if (new15 > currentHourNum) {
  $("#event15").attr("style", "background-color: #d3d3d3");
}

// 4PM BLOCK
// If future
if (new16 < currentHourNum) {
  $("#event16").attr("style", "background-color: #77dd77");
}
// If present
if (new16 === currentHourNum) {
  $("#event16").attr("style", "background-color: #ff6961");
}
// // If passed
if (new16 > currentHourNum) {
  $("#event16").attr("style", "background-color: #d3d3d3");
}

// 5PM BLOCK
// If future
if (new17 < currentHourNum) {
  $("#event17").attr("style", "background-color: #77dd77");
}
// If present
if (new17 === currentHourNum) {
  $("#event17").attr("style", "background-color: #ff6961");
}
// // If passed
if (new17 > currentHourNum) {
  $("#event17").attr("style", "background-color: #d3d3d3");
}

// Lock button saves new event to local storage
$("#saveBtn9").on("click", storeEvent9);
$("#saveBtn10").on("click", storeEvent10);
$("#saveBtn11").on("click", storeEvent11);
$("#saveBtn12").on("click", storeEvent12);
$("#saveBtn13").on("click", storeEvent13);
$("#saveBtn14").on("click", storeEvent14);
$("#saveBtn15").on("click", storeEvent15);
$("#saveBtn16").on("click", storeEvent16);
$("#saveBtn17").on("click", storeEvent17);

// pulling saved events from local storage
textArea9 = localStorage.getItem("event9");
$("#entry9").text(textArea9);

textArea10 = localStorage.getItem("event10");
$("#entry10").text(textArea10);

textArea11 = localStorage.getItem("event11");
$("#entry11").text(textArea11);

textArea12 = localStorage.getItem("event12");
$("#entry12").text(textArea12);

textArea13 = localStorage.getItem("event13");
$("#entry13").text(textArea13);

textArea14 = localStorage.getItem("event14");
$("#entry14").text(textArea14);

textArea15 = localStorage.getItem("event15");
$("#entry15").text(textArea15);

textArea16 = localStorage.getItem("event16");
$("#entry16").text(textArea16);

textArea17 = localStorage.getItem("event17");
$("#entry17").text(textArea17);

// Saving new entries in local storage
function storeEvent9(event) {
  event.preventDefault();
  var entry9 = $("#entry9").val();
  localStorage.setItem("event9", entry9);
}

function storeEvent10(event) {
  event.preventDefault();
  var entry10 = $("#entry10").val();
  localStorage.setItem("event10", entry10);
}

function storeEvent11(event) {
  event.preventDefault();
  var entry11 = $("#entry11").val();
  localStorage.setItem("event11", entry11);
}

function storeEvent12(event) {
  event.preventDefault();
  var entry12 = $("#entry12").val();
  localStorage.setItem("event12", entry12);
}

function storeEvent13(event) {
  event.preventDefault();
  var entry13 = $("#entry13").val();
  localStorage.setItem("event13", entry13);
}

function storeEvent14(event) {
  event.preventDefault();
  var entry14 = $("#entry14").val();
  localStorage.setItem("event14", entry14);
}

function storeEvent15(event) {
  event.preventDefault();
  var entry15 = $("#entry15").val();
  localStorage.setItem("event15", entry15);
}

function storeEvent16(event) {
  event.preventDefault();
  var entry16 = $("#entry16").val();
  localStorage.setItem("event16", entry16);
}

function storeEvent17(event) {
  event.preventDefault();
  var entry17 = $("#entry17").val();
  localStorage.setItem("event17", entry17);
}
