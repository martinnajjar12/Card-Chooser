var bgMusic = new Audio();
bgMusic.src = "drums.ogg";

$(document).ready(function() {
  $("#popBg").css("display", "block");
  $("#popBox").css("display", "block");
});

$("#allow").click(function() {
  bgMusic.volume = 0.7;
  bgMusic.play();
  bgMusic.loop = true;
  $("#popBg").css("display", "none");
  $("#popBox").css("display", "none");
});

$("#decline").click(function() {
  $("#popBg").css("display", "none");
  $("#popBox").css("display", "none");
});

var button = new Audio();
button.src = "button-43.ogg";

$(".fa-chevron-circle-right").click(next);
$(".fa-chevron-circle-left").click(previous);

$(document).keyup(event => {
  if (event.which == 39) {
    next();
  } else if (event.which == 37) {
    previous();
  }
});

var x = 0;

function next() {
  button.play();
  if (x < 3) {
    x++;
  }
  switch (x) {
    case 1:
      $(".wrapper").css("display", "none");
      $(".wrapper2").css("display", "block");
      $(".wrapper3").css("display", "none");
      break;

    case 2:
      $(".wrapper").css("display", "none");
      $(".wrapper2").css("display", "none");
      $(".wrapper3").css("display", "block");
      break;
    case 3:
      $(".wrapper").css("display", "block");
      $(".wrapper2").css("display", "none");
      $(".wrapper3").css("display", "none");
      x = 0;
      break;
  }
}

function previous() {
  button.play();
  if (x == 0) {
    x = 3;
  }
  switch (x) {
    case 1:
      $(".wrapper").css("display", "block");
      $(".wrapper2").css("display", "none");
      $(".wrapper3").css("display", "none");
      x--;
      break;
    case 2:
      $(".wrapper").css("display", "none");
      $(".wrapper2").css("display", "block");
      $(".wrapper3").css("display", "none");
      x--;
      break;
    case 3:
      $(".wrapper").css("display", "none");
      $(".wrapper2").css("display", "none");
      $(".wrapper3").css("display", "block");
      x--;
      break;
  }
}
