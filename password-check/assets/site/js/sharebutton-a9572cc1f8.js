"use strict";
var shareBtn = $("#sharebutton"),
  title = document.title,
  text = "",
  url = window.location.href;
navigator.share
  ? shareBtn.click(function () {
      navigator
        .share({ title: title, text: text, url: url })
        .catch(function (t) {
          return alert(error.msg);
        });
    })
  : shareBtn.attr(
      "href",
      "mailto:?subject=".concat(title, "&body=").concat(url)
    );
