"use strict";
var slideDuration = 12e3,
  tickDuration = 30,
  currentTick = 0,
  tickInterval = null,
  pageIdsInControl = [],
  currentSlide = 0,
  lastTick = 0,
  isPaused = !1,
  pageIdsInControl = $(".homePage #slider-controls a")
    .map(function () {
      return $(this).attr("id").replace("-slide-control", "");
    })
    .get(),
  startSlideShow = function () {
    null !== tickInterval && stopSlideShow(),
      activateSlide(pageIdsInControl[currentSlide]),
      (tickInterval = setInterval(function () {
        return (
          updateProgressBar(),
          !isPaused &&
            void (
              slideDuration <= (currentTick += tickDuration) &&
              (++currentSlide >= pageIdsInControl.length && (currentSlide = 0),
              activateSlide(pageIdsInControl[currentSlide]),
              (currentTick = 0))
            )
        );
      }, tickDuration));
  },
  stopSlideShow = function () {
    (currentTick = 0), clearInterval(tickInterval), (tickInterval = null);
  },
  activateSlide = function (e) {
    $("#slider-info-field .slide").removeClass("active"),
      $("#slider-controls a").removeClass("active"),
      $("#slider-downloads a").removeClass("active"),
      $("#" + e + "-slide").addClass("active"),
      $("#" + e + "-slide-control").addClass("active"),
      $("#" + e + "-download-button").addClass("active");
  },
  updateProgressBar = function () {
    $("#slider-progress-bar-container").attr(
      "class",
      pageIdsInControl[currentSlide] + "-slider"
    ),
      $("#slider-progress-bar").css(
        "width",
        (currentTick / slideDuration) * 100 + "%"
      );
  };
$(".homePage #slider-controls a, #slider-downloads a").on(
  "mouseover",
  function () {
    var e = (e = $(this).attr("id").replace("-slide-control", "")).replace(
      "-download-button",
      ""
    );
    (isPaused = !0),
      e !== pageIdsInControl[currentSlide] &&
        ((currentSlide = pageIdsInControl.indexOf(e)),
        stopSlideShow(),
        startSlideShow());
  }
),
  $("#slider-info-field").on("mouseover", function () {
    isPaused = !0;
  }),
  $(".homePage #slider-controls a, #slider-info-field, #slider-downloads a").on(
    "mouseout",
    function () {
      isPaused = !1;
    }
  );
var startPage = pageIdsInControl.indexOf(window.ioApp.areaId);
-1 < startPage && (currentSlide = startPage), startSlideShow();
