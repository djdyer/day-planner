// Time/Date goes inside <p> tag w/n <header>
timeInterval = setInterval(function () {
  var currentDay = moment();
  $("#currentDay").text(currentDay.format("dddd, MMMM Do YYYY, h:mm:ss a"));
}, 1000);

// Current hour of the day
var currentHour = moment().format("h");

// Separate Variable for each hour block
var hourStr7a = $("#hour7a").text();
var hourStr8a = $("#hour8a").text();
var hourStr9a = $("#hour9a").text();
var hourStr10a = $("#hour10a").text();
var hourStr11a = $("#hour11a").text();
var hourStr12p = $("#hour12p").text();
var hourStr1p = $("#hour1p").text();
var hourStr2p = $("#hour2p").text();
var hourStr3p = $("#hour3p").text();
var hourStr4p = $("#hour4p").text();
var hourStr5p = $("#hour5p").text();
var hourStr6p = $("#hour6p").text();
var hourStr7p = $("#hour7p").text();

function stringTime(hourStr) {
  if (hourStr.length == 3) {
    hourStrFinal = "0" + hourStr;
  }
  hourStr = hourStrFinal[0] + hourStrFinal[1];
  console.log(hourStr);
  return;
}

stringTime(hourStr7a);
stringTime(hourStr8a);
stringTime(hourStr9a);
stringTime(hourStr10a);
stringTime(hourStr11a);
stringTime(hourStr12p);
stringTime(hourStr1p);
stringTime(hourStr2p);
stringTime(hourStr3p);
stringTime(hourStr3p);
stringTime(hourStr4p);
stringTime(hourStr5p);
stringTime(hourStr6p);
stringTime(hourStr7p);

// Lock button saves to local storage
$(".saveBtn").on("click", storeEvent);

function storeEvent() {
  var hour = $(".hour");
  var description = $(".description");
  localStorage.setItem("event", hour, description);
}

// Change background color of event block if in the past
// $(".description").attr("style", "background-color: #d3d3d3");

// Change background color of event block if in the present
// $(".description").attr("style", "background-color: #ff6961");

// Change background color of event block if in the future
// $(".description").attr("style", "background-color: #77dd77");
