"use strict";
var setTheme = function (e) {
    "light" == e &&
      ((document.getElementById("light-theme-stylesheet").disabled = void 0),
      (document.getElementById("dark-theme-stylesheet").disabled = !0)),
      "dark" == e &&
        ((document.getElementById("light-theme-stylesheet").disabled = !0),
        (document.getElementById("dark-theme-stylesheet").disabled = void 0)),
      document.documentElement.setAttribute("data-theme", e),
      localStorage.setItem("theme", e);
  },
  loadStoredTheme = function () {
    return localStorage.getItem("theme");
  },
  toggleTheme = function () {
    var e = loadStoredTheme();
    "light" == e && setTheme("dark"), "dark" == e && setTheme("light");
  },
  theme = "light";
window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches &&
  (theme = "dark");
var storedTheme = loadStoredTheme();
storedTheme && (theme = storedTheme),
  setTheme(theme)
