let currentDayEl = $('#currentDay');
let timeBlockEl = $('#time-block');
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
// display current data 
  var timeDisplayE1 =$('#time-Display');
  function displayTime(){
    var rightNow = dayjs();
    timeDisplayE1.text(rightNow.format('MMM DD YYYY'));
  }
//color code timeblocks to past, present, and future
var currentHour = dayjs().hour();
console.log(currentHour);
$(".time-block").each(function() {
  console.log(parseInt(currentHour));
  console.log(this.id.split("-")[1]);
    if (parseInt(currentHour) === parseInt(this.id.split("-")[1])) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
    } else if (parseInt(currentHour) > parseInt(this.id.split("-")[1])) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    } else {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
    }
});
$(".time-block .saveBtn").on("click", function () {
  var textarea = $(this).closest(".time-block").find("textarea");
  var key = $(this).closest(".time-block").attr("id");
  var value = textarea.val();
  localStorage.setItem(key, value);
});
//code for recalling local storage
$(document).ready(function () {
  $(".time-block textarea").each(function () {
    var key = $(this).closest(".time-block").attr("id");
    var value = localStorage.getItem(key);
    if (value) {
      $(this).val(value);
    }
  });
});
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  setInterval(displayTime, 1000);
});
