$(document).ready(function() {
  $("button#green").click(function() {
    if ($("body").hasClass("green-background")) {
      $("body").removeClass();
    } else {
      $("body").removeClass();
      $("body").addClass("green-background");
    }
  });

  $("button#yellow").click(function() {
    if ($("body").hasClass("yellow-background")) {
      $("body").removeClass();
    } else {
      $("body").removeClass();
      $("body").addClass("yellow-background");
    }
  });

  $("button#red").click(function() {
    if ($("body").hasClass("red-background")) {
      $("body").removeClass();
    } else {
      $("body").removeClass();
      $("body").addClass("red-background");
    }
  });
});