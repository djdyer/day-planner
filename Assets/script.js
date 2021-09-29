// Time/Date goes inside <p> tag w/n <header>
timeInterval = setInterval(function () {
  var currentDay = moment();
  $("#currentDay").text(currentDay.format("dddd, MMMM Do YYYY, h:mm:ss A"));
}, 1000);

// // Current hour of the day
// var currentTime = moment().format("hA");
// console.log(currentTime);

// var hoursArray = [
//   "9AM",
//   "10AM",
//   "11AM",
//   "12AM",
//   "13AM",
//   "14AM",
//   "15AM",
//   "16AM",
//   "17AM",
// ];

// function timeColor() {
//   for (var i = 0; i < hoursArray.length; i++);
//   console.log(timeColor);
// }

var currentHour = moment().format("hA");
console.log(currentHour);

var hour9 = $("#hour9").val();
hour9 += "9AM";
console.log(hour9);

// moment(currentHour).isAfter(hour9);

function timeColor9() {
  if (currentHour.isAfter(hour9)) {
    $("#event9").addClass(".past");
  } else if (currentHour.isBefore(hour9)) {
    $("#event9").addClass(".future");
  } else if (currentHour.isSame(hour9)) {
    $("#event9").addClass(".present");
  }
}

timeColor9();

// 9AM BLOCK
// If future
// if (9 > currentHourNum) {
//   $("#event9").attr("style", "background-color: #77dd77");
// }

// If present
// if (9 === currentHourNum) {
//   $("#event9").attr("style", "background-color: #ff6961");
// }

// // If passed
// if (9 < currentHourNum) {
//   $("#event9").attr("style", "background-color: #d3d3d3");
// }

// 10AM BLOCK
// If future
// if (10 > currentHourNum) {
//   $("#event10").attr("style", "background-color: #77dd77");
// }
// If present
// if (10 === currentHourNum) {
//   $("#event10").attr("style", "background-color: #ff6961");
// }
// // If passed
// if (10 < currentHourNum) {
//   $("#event10").attr("style", "background-color: #d3d3d3");
// }

// 11AM BLOCK
// If future
// if (11 > currentHourNum) {
//   $("#event11").attr("style", "background-color: #77dd77");
// }
// If present
// if (11 === currentHourNum) {
//   $("#event11").attr("style", "background-color: #ff6961");
// }
// // If passed
// if (11 < currentHourNum) {
//   $("#event11").attr("style", "background-color: #d3d3d3");
// }

// 12PM BLOCK
// If future
// if (currentHourNum > 12) {
//   $("#event12").attr("style", "background-color: #77dd77");
// }
// If present
// if (currentHourNum === 12) {
//   $("#event12").attr("style", "background-color: #ff6961");
// }
// // If passed
// if (currentHourNum < 12) {
//   $("#event12").attr("style", "background-color: #d3d3d3");
// }

// 1PM BLOCK
// If future
// if (currentHourNum > 13) {
//   $("#event13").attr("style", "background-color: #77dd77");
// }
// If present
// if (currentHourNum === 1) {
//   $("#event13").attr("style", "background-color: #ff6961");
// }
// // If passed
// if (currentHourNum < 13) {
//   $("#event13").attr("style", "background-color: #d3d3d3");
// }

// 2PM BLOCK
// If future
// if (currentHourNum > 14) {
//   $("#event14").attr("style", "background-color: #77dd77");
// }
// If present
// if (currentHourNum === 2) {
//   $("#event14").attr("style", "background-color: #ff6961");
// }
// // If passed
// if (currentHourNum < 14) {
//   $("#event14").attr("style", "background-color: #d3d3d3");
// }

// 3PM BLOCK
// If future
// if (currentHourNum > 15) {
//   $("#event15").attr("style", "background-color: #77dd77");
// }
// If present
// if (currentHourNum === 3) {
//   $("#event15").attr("style", "background-color: #ff6961");
// }
// // If passed
// if (currentHourNum < 15) {
//   $("#event15").attr("style", "background-color: #d3d3d3");
// }

// 4PM BLOCK
// If future
// if (currentHourNum > 16) {
//   $("#event16").attr("style", "background-color: #77dd77");
// }
// If present
// if (currentHourNum === 4) {
//   $("#event16").attr("style", "background-color: #ff6961");
// }
// // If passed
// if (currentHourNum < 16) {
//   $("#event16").attr("style", "background-color: #d3d3d3");
// }

// 5PM BLOCK
// If future
// if (currentHourNum > 17) {
//   $("#event17").attr("style", "background-color: #77dd77");
// }
// If present
// if (currentHourNum === 5) {
//   $("#event17").attr("style", "background-color: #ff6961");
// }
// // If passed
// if (currentHourNum < 17) {
//   $("#event17").attr("style", "background-color: #d3d3d3");
// }

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
