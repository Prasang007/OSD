var $body = $("body");

var mCounter = 0;
var eCounter = 0;
var nCounter = 0;
var uCounter = 0;

$("body").on("mouseover", ".letter", function(e) {
  var $this = $("this");

  if ($(e.target).attr("letter") === "m") {
    mCounter++;
  }

  if (mCounter > 0 && eCounter < 1 && nCounter < 1) {
    if ($(e.target).attr("letter") === "e") {
      eCounter++;
    } else if (
      $(e.target).attr("letter") === "u" ||
      $(e.target).attr("letter") === "n"
    ) {
      mCounter = 0;
      $(".message").html("Tried the right order ?</p>");
    }
  }

  if (mCounter > 0 && eCounter > 0 && nCounter < 1) {
    if ($(e.target).attr("letter") === "n") {
      nCounter++;
    } else if ($(e.target).attr("letter") === "u") {
      eCounter = 0;mCounter = 0;

      $(".message").html("Tried the right order ?</p>");
    }
  }

  if (mCounter > 0 && eCounter > 0 && nCounter > 0) {
    if ($(e.target).attr("letter") === "u") {
      uCounter++;
      $(".menu").addClass("appear");
    }
  }

});