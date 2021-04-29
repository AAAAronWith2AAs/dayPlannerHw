$(document).ready(function () {
  //write out all JQuery inside this function

  //var decs

  //display the date to the user
  //first grab a reference to the element that we want the timwe to be displayed
  var currentDay = $("#currentDay");

  //display current dates in that <p> element
  currentDay.text(moment().format("dddd, MMM Do"));

  //style 2 elements - one past, one future and set it statically

  //currently, i can write text in textarea

  //dynamiclly style the time block based on current time

  //functions
  //functions will be responcible for checking the time and determining what class to add - past, present, or future
  function checkTime() {
    //grab current hour using moment js
    var currentHour = moment().hours();
    console.log(currentHour);

    //NEED TO GRAB HOUR FOR TIME BLOCK TO CMPARE TO CURRENT HOUR AND turn caps lock off
    //loop through time block hours
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      //   console.log(typeof)

      if (blockHour > currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).addClass("present");
      } else if (blockHour < currentHour) {
        $(this).addClass("future");
      }
    });

    //check the currentHour against blockHour
    //if else
  }

  checkTime();

  //event hadlers
  $(".saveBtn").on("click", function () {
    //capture the info that the user inputted and we need to store that info into local storage

    //I need to capture the value of that input and I also need to know what timeblock its attached to
    var value = $(this).siblings(".description").val(); //console.log to check
    var time = $(this).parent().attr("id");

    //save info to local storage
    localStorage.setItem(time, value);
  });
  //event handler finished

  //display items in local storage to stay after refresh
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});
