$(function () {

  // button click event listener
  $(".saveBtn").on("click", function () {
    // get the id of the parent time-block
    const id = $(this).parent().attr("id");
    // get the value of the description textarea
    const description = $(this).siblings(".description").val();
    // save the description in local storage
    localStorage.setItem(id, description);

    // add a message into HTML file to show that there was a change made to local storage
    $("#message").text("Your changes were saved!");
  });


  // get the current hour in 24-hour time
  const currentHour = dayjs().hour();
  // loop through each time-block
  $(".time-block").each(function () {
    // get the id of the time-block
    const id = $(this).attr("id");
    // get the hour from the id
    const hour = parseInt(id.split("-")[1]);
    // compare the hour to the current hour
    if (hour < currentHour) {
      // add the past class
      $(this).addClass("past");
    } else if (hour === currentHour) {
      // add the present class
      $(this).addClass("present");
    } else {
      // add the future class
      $(this).addClass("future");
    }
  });
  

  // loop through each item in local storage
  $.each(localStorage, function (key, value) {
    // get the time-block with the id of the key
    const timeBlock = $("#" + key);
    // if the time-block exists
    if (timeBlock.length) {
      // set the value of the description textarea
      timeBlock.find(".description").val(value);
    }
  });


  // Used Day.js to get the current date in the format YYYY-MM-DD
  const currentDate = dayjs().format("dddd, MMMM D, YYYY");
  // Set the text of the currentDay element to the current date
  $("#currentDay").text(currentDate);

});
