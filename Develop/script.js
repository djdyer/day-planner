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
if (new9 < currentHourNum) {
  // console.log(new9);
  // console.log(currentHourNum);
  $("#event9").attr("style", "background-color: #77dd77");
}
// If present
if (new9 === currentHourNum) {
  $("#event9").attr("style", "background-color: #ff6961");
}
// // If passed
if (new9 > currentHourNum) {
  $("#event9").attr("style", "background-color: #d3d3d3");
}

// 10AM BLOCK
// If future
if (new10 < currentHourNum) {
  $("#event10").attr("style", "background-color: #77dd77");
}
// If present
if (new10 === currentHourNum) {
  $("#event10").attr("style", "background-color: #ff6961");
}
// // If passed
if (new10 > currentHourNum) {
  $("#event10").attr("style", "background-color: #d3d3d3");
}

// 11AM BLOCK
// If future
if (new11 < currentHourNum) {
  $("#event11").attr("style", "background-color: #77dd77");
}
// If present
if (new11 === currentHourNum) {
  $("#event11").attr("style", "background-color: #ff6961");
}
// // If passed
if (new11 > currentHourNum) {
  $("#event11").attr("style", "background-color: #d3d3d3");
}

// 12PM BLOCK
// If future
if (new12 < currentHourNum) {
  $("#event12").attr("style", "background-color: #77dd77");
}
// If present
if (new12 === currentHourNum) {
  $("#event12").attr("style", "background-color: #ff6961");
}
// // If passed
if (new12 > currentHourNum) {
  $("#event12").attr("style", "background-color: #d3d3d3");
}

// 1PM BLOCK
// If future
if (new13 > currentHourNum) {
  $("#event13").attr("style", "background-color: #77dd77");
}
// If present
if (new13 === currentHourNum) {
  $("#event13").attr("style", "background-color: #ff6961");
}
// // If passed
if (new13 < currentHourNum) {
  $("#event13").attr("style", "background-color: #d3d3d3");
}

// 2PM BLOCK
// If future
if (new14 > currentHourNum) {
  $("#event14").attr("style", "background-color: #77dd77");
}
// If present
if (new14 === currentHourNum) {
  $("#event14").attr("style", "background-color: #ff6961");
}
// // If passed
if (new14 < currentHourNum) {
  $("#event14").attr("style", "background-color: #d3d3d3");
}

// 3PM BLOCK
// If future
if (new15 > currentHourNum) {
  $("#event15").attr("style", "background-color: #77dd77");
}
// If present
if (new15 === currentHourNum) {
  $("#event15").attr("style", "background-color: #ff6961");
}
// // If passed
if (new15 < currentHourNum) {
  $("#event15").attr("style", "background-color: #d3d3d3");
}

// 4PM BLOCK
// If future
if (new16 > currentHourNum) {
  $("#event16").attr("style", "background-color: #77dd77");
}
// If present
if (new16 === currentHourNum) {
  $("#event16").attr("style", "background-color: #ff6961");
}
// // If passed
if (new16 < currentHourNum) {
  $("#event16").attr("style", "background-color: #d3d3d3");
}

// 5PM BLOCK
// If future
if (new17 > currentHourNum) {
  $("#event17").attr("style", "background-color: #77dd77");
}
// If present
if (new17 === currentHourNum) {
  $("#event17").attr("style", "background-color: #ff6961");
}
// // If passed
if (new17 < currentHourNum) {
  $("#event17").attr("style", "background-color: #d3d3d3");
}

// Lock button saves to local storage
$("#saveBtn9").on("click", storeEvent9);
$("#saveBtn10").on("click", storeEvent10);
$("#saveBtn11").on("click", storeEvent11);
$("#saveBtn12").on("click", storeEvent12);
$("#saveBtn13").on("click", storeEvent13);
$("#saveBtn14").on("click", storeEvent14);
$("#saveBtn15").on("click", storeEvent15);
$("#saveBtn16").on("click", storeEvent16);
$("#saveBtn17").on("click", storeEvent17);

function storeEvent9() {
  var entry9 = $("#entry9").val();
  console.log(entry9);
  localStorage.setItem("event", entry9);
}

function storeEvent10() {
  var entry10 = $("#entry10").val();
  console.log(entry10);
  localStorage.setItem("event", entry10);
}

function storeEvent11() {
  var entry11 = $("#entry11").val();
  console.log(entry11);
  localStorage.setItem("event", entry11);
}

function storeEvent12() {
  var entry12 = $("#entry12").val();
  console.log(entry12);
  localStorage.setItem("event", entry9);
}

function storeEvent13() {
  var entry13 = $("#entry13").val();
  console.log(entry13);
  localStorage.setItem("event", entry9);
}

function storeEvent14() {
  var entry14 = $("#entry14").val();
  console.log(entry14);
  localStorage.setItem("event", entry14);
}

function storeEvent15() {
  var entry15 = $("#entry15").val();
  console.log(entry15);
  localStorage.setItem("event", entry15);
}

function storeEvent16() {
  var entry16 = $("#entry16").val();
  console.log(entry16);
  localStorage.setItem("event", entry16);
}
function storeEvent17() {
  var entry17 = $("#entry17").val();
  console.log(entry17);
  localStorage.setItem("event", entry17);
}
