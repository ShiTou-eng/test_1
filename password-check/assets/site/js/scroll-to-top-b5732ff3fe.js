"use strict";
window.addEventListener("load", function () {
  var o = $("#back-to-top-btn");
  $(window).scroll(function () {
    300 < $(window).scrollTop() ? o.addClass("show") : o.removeClass("show");
  }),
    o.on("click", function (o) {
      o.preventDefault(), $("html, body").animate({ scrollTop: 0 }, "300");
    });
});
