// Time/Date goes inside <p> tag w/n <header>
timeInterval = setInterval(function () {
  var currentDay = moment();
  $("#currentDay").text(currentDay.format("dddd, MMMM Do YYYY, h:mm:ss a"));
}, 1000);

var hour = moment().format("h");

$(".description");
