$(function () {
  /*var waypoint = new Waypoint({
        element: document.getElementById("waypoint"),
        handler: function(direction) {
          console.log("Scrolled to waypoint!");
        },
        offset: 20
      });*/

  var waypoint = new Waypoint({
    element: document.getElementById("Education"),
    handler: function (direction) {
      if (direction == "down") {
        console.log("Scrolled!");
      }
    },
    offset: 20,
  });

  $(".life-scroll").on("click", function () {
    $("html, body").animate({ scrollTop: $("#Education").offset().top }, 1000);
  });

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 300) {
      $(".collapse").css({
        opacity: "1",
      });
    } else {
      $(".collapse").css({
        opacity: "0",
      });
    }
  });

  $(".collapse").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });
}); 
