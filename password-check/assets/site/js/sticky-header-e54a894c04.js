"use strict";
var navElem,
  headerElem = document.getElementsByTagName("header")[0],
  headerStartPos = headerElem.offsetTop,
  headerHeight = headerElem.offsetHeight,
  headerMargin = parseInt(
    window.getComputedStyle(headerElem).marginTop.replace("px", "")
  );
null == document.getElementById("header-lower") &&
  ((navElem = document.getElementsByTagName("nav")[0]),
  (headerMargin += parseInt(
    window.getComputedStyle(navElem).marginTop.replace("px", "")
  ))),
  (window.onscroll = function () {
    window.pageYOffset >= headerStartPos
      ? (headerElem.classList.add("sticky"),
        (document.querySelector("body > .container").style.marginTop =
          headerHeight + headerMargin + "px"))
      : (headerElem.classList.remove("sticky"),
        (document.querySelector("body > .container").style.marginTop = 0));
  });
