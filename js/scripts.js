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
  
  $("button#dark").click(function(){
    if ($("button#dark").hasClass("btn-dark")) {
      $("button#dark").removeClass("btn-dark");
      $("button#dark").addClass("btn-light");

    } else if ($("button#dark").hasClass("btn-light")) {
      $("button#dark").removeClass("btn-light");
      $("button#dark").addClass("btn-dark");
    }
  });
});