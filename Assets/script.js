// Time/Date goes inside <p> tag w/n <header>
timeInterval = setInterval(function () {
  var currentDay = moment();
  $("#currentDay").text(currentDay.format("dddd, MMMM Do YYYY, h:mm:ss A"));
}, 1000);

// Hours of the business day
var hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// Current hour of the day
var currentHour = moment().hours();
console.log(currentHour);

for (var i = 0; i < hoursArray.length; i++) {
  console.log(hoursArray[i]);

  // passed
  if (currentHour > hoursArray[i]) {
    $("#" + hoursArray[i]).addClass("past");

    // present
  } else if (currentHour === hoursArray[i]) {
    $("#" + hoursArray[i]).addClass("present");

    // future
  } else {
    $("#" + hoursArray[i]).addClass("future");
  }
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
textArea9 = localStorage.getItem("9");
$("#entry9").text(textArea9);

textArea10 = localStorage.getItem("10");
$("#entry10").text(textArea10);

textArea11 = localStorage.getItem("11");
$("#entry11").text(textArea11);

textArea12 = localStorage.getItem("12");
$("#entry12").text(textArea12);

textArea13 = localStorage.getItem("13");
$("#entry13").text(textArea13);

textArea14 = localStorage.getItem("14");
$("#entry14").text(textArea14);

textArea15 = localStorage.getItem("15");
$("#entry15").text(textArea15);

textArea16 = localStorage.getItem("16");
$("#entry16").text(textArea16);

textArea17 = localStorage.getItem("17");
$("#entry17").text(textArea17);

// Saving new entries in local storage
function storeEvent9(event) {
  event.preventDefault();
  var entry9 = $("#entry9").val();
  localStorage.setItem("9", entry9);
}

function storeEvent10(event) {
  event.preventDefault();
  var entry10 = $("#entry10").val();
  localStorage.setItem("10", entry10);
}

function storeEvent11(event) {
  event.preventDefault();
  var entry11 = $("#entry11").val();
  localStorage.setItem("11", entry11);
}

function storeEvent12(event) {
  event.preventDefault();
  var entry12 = $("#entry12").val();
  localStorage.setItem("12", entry12);
}

function storeEvent13(event) {
  event.preventDefault();
  var entry13 = $("#entry13").val();
  localStorage.setItem("13", entry13);
}

function storeEvent14(event) {
  event.preventDefault();
  var entry14 = $("#entry14").val();
  localStorage.setItem("14", entry14);
}

function storeEvent15(event) {
  event.preventDefault();
  var entry15 = $("#entry15").val();
  localStorage.setItem("15", entry15);
}

function storeEvent16(event) {
  event.preventDefault();
  var entry16 = $("#entry16").val();
  localStorage.setItem("16", entry16);
}

function storeEvent17(event) {
  event.preventDefault();
  var entry17 = $("#entry17").val();
  localStorage.setItem("17", entry17);
}
