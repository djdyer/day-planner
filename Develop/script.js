// Time/Date goes inside <p> tag w/n <header>
timeInterval = setInterval(function () {
  var currentDay = moment();
  $("#currentDay").text(currentDay.format("dddd, MMMM Do YYYY, h:mm:ss A"));
}, 1000);

// // Current hour of the day
var currentHour = moment().format("hA");

// Separate variable for each hour, targets text
var hour9a = $("#hour9a").text();
var hour10a = $("#hour10a").text();
var hour11a = $("#hour11a").text();
var hour12p = $("#hour12p").text();
var hour1p = $("#hour1p").text();
var hour2p = $("#hour2p").text();
var hour3p = $("#hour3p").text();
var hour4p = $("#hour4p").text();
var hour5p = $("#hour5p").text();

console.log(hour9a);

// var timeBlock9a = moment("9AM", "hA");
// var timeBlock10a = moment("10AM", "hA");
// var timeBlock11a = moment("11AM", "hA");
// var timeBlock12p = moment("12PM", "hA");
// var timeBlock1p = moment("1PM", "hA");
// var timeBlock2p = moment("2PM", "hA");
// var timeBlock3p = moment("3PM", "hA");
// var timeBlock4p = moment("4PM", "hA");
// var timeBlock5p = moment("5PM", "hA");

// console.log(timeBlock5p);

// var currentHour = moment().format("hA");
console.log(currentHour);
// console.log(timeBlock9a.isBefore(currentHour));
// console.log(timeBlock10a.isBefore(currentHour));
// console.log(timeBlock11a.isBefore(currentHour));
// console.log(timeBlock12p.isBefore(currentHour));
// console.log(timeBlock1p.isBefore(currentHour));
// console.log(timeBlock2p.isBefore(currentHour));
// console.log(timeBlock3p.isBefore(currentHour));
// console.log(timeBlock4p.isBefore(currentHour));
// console.log(timeBlock5p.isBefore(currentHour));

// If future
if (hour9a > currentHour) {
  $("#event9a").attr("style", "background-color: #77dd77");
}
// If present
if (hour9a === currentHour) {
  $("#event9a").attr("style", "background-color: #ff6961");
}
// // If passed
if (hour9a < currentHour) {
  $("#event9a").attr("style", "background-color: #d3d3d3");
}

// If future
if (hour10a > currentHour) {
  $("#event10a").attr("style", "background-color: #77dd77");
}
// If present
if (hour10a === currentHour) {
  $("#event10a").attr("style", "background-color: #ff6961");
}
// // If passed
if (hour10a < currentHour) {
  $("#event10a").attr("style", "background-color: #d3d3d3");
}

// If future
if (hour11a > currentHour) {
  $("#event11a").attr("style", "background-color: #77dd77");
}
// If present
if (hour11a === currentHour) {
  $("#event11a").attr("style", "background-color: #ff6961");
}
// // If passed
if (hour11a < currentHour) {
  $("#event11a").attr("style", "background-color: #d3d3d3");
}

// If future
if (hour12p > currentHour) {
  $("#event12p").attr("style", "background-color: #77dd77");
}
// If present
if (hour12p === currentHour) {
  $("#event12p").attr("style", "background-color: #ff6961");
}
// // If passed
if (hour12p < currentHour) {
  $("#event12p").attr("style", "background-color: #d3d3d3");
}

// If future
if (hour1p > currentHour) {
  $("#event1p").attr("style", "background-color: #77dd77");
}
// If present
if (hour1p === currentHour) {
  $("#event1p").attr("style", "background-color: #ff6961");
}
// // If passed
if (hour12p < currentHour) {
  $("#event1p").attr("style", "background-color: #d3d3d3");
}

// If future
if (hour2p > currentHour) {
  $("#event2p").attr("style", "background-color: #77dd77");
}
// If present
if (hour2p === currentHour) {
  $("#event2p").attr("style", "background-color: #ff6961");
}
// // If passed
if (hour2p < currentHour) {
  $("#event2p").attr("style", "background-color: #d3d3d3");
}

// If future
if (hour3p > currentHour) {
  $("#event3p").attr("style", "background-color: #77dd77");
}
// If present
if (hour3p === currentHour) {
  $("#event3p").attr("style", "background-color: #ff6961");
}
// // If passed
if (hour3p < currentHour) {
  $("#event3p").attr("style", "background-color: #d3d3d3");
}

// If future
if (hour4p > currentHour) {
  $("#event4p").attr("style", "background-color: #77dd77");
}
// If present
if (hour4p === currentHour) {
  $("#event4p").attr("style", "background-color: #ff6961");
}
// // If passed
if (hour4p < currentHour) {
  $("#event4p").attr("style", "background-color: #d3d3d3");
}

// If future
if (hour5p > currentHour) {
  $("#event5p").attr("style", "background-color: #77dd77");
}
// If present
if (hour5p === currentHour) {
  $("#event5p").attr("style", "background-color: #ff6961");
}
// // If passed
if (hour5p < currentHour) {
  $("#event5p").attr("style", "background-color: #d3d3d3");
}

// Lock button saves to local storage
// $(".saveBtn").on("click", storeEvent);

// function storeEvent() {
//   var hour = $(".hour");
//   var description = $(".description");
//   localStorage.setItem("event", hour, description);
// }
