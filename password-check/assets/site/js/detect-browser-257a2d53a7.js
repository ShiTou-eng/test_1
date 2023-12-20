"use strict";
var BrowserDetector = {
  supportedBrowsers: {
    Chrome: 80,
    Firefox: 75,
    IE: 11,
    Edge: 80,
    Opera: 70,
    Safari: 13,
  },
  browserFullNames: {
    IE: "Internet Explorer",
    Edge: "Microsoft Edge",
    Firefox: "Mozilla Firefox",
    Chrome: "Google Chrome",
    Safari: "Apple Safari",
    Opera: "Opera",
  },
  _detectBrowser: function () {
    var e, r, o;
    BrowserDetector.browser =
      ((r = navigator.userAgent),
      (o =
        r.match(
          /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
        ) || []),
      /trident/i.test(o[1])
        ? {
            name: "IE",
            version: (e = /\brv[ :]+(\d+)/g.exec(r) || [])[1] || "",
          }
        : "Chrome" === o[1] && null != (e = r.match(/\b(OPR|Edge)\/(\d+)/))
        ? { name: e[1].replace("OPR", "Opera"), version: e[2] }
        : ((o = o[2]
            ? [o[1], o[2]]
            : [navigator.appName, navigator.appVersion, "-?"]),
          null != (e = r.match(/version\/(\d+)/i)) && o.splice(1, 1, e[1]),
          { name: o[0], version: o[1] }));
  },
  isIE: function () {
    return "IE" === BrowserDetector.browser.name;
  },
  isEdge: function () {
    return "Edge" === BrowserDetector.browser.name;
  },
  isMicrosoft: function () {
    return BrowserDetector.isIE() || BrowserDetector.isEdge();
  },
  isFirefox: function () {
    return "Firefox" === BrowserDetector.browser.name;
  },
  isChrome: function () {
    return "Chrome" === BrowserDetector.browser.name;
  },
  isSafari: function () {
    return "Safari" === BrowserDetector.browser.name;
  },
  isAndroid: function () {
    return /Android/i.test(navigator.userAgent);
  },
  isBlackBerry: function () {
    return /BlackBerry/i.test(navigator.userAgent);
  },
  isWindowsMobile: function () {
    return /IEMobile/i.test(navigator.userAgent);
  },
  isIOS: function () {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  },
  isMobile: function () {
    return (
      BrowserDetector.isAndroid() ||
      BrowserDetector.isBlackBerry() ||
      BrowserDetector.isWindowsMobile() ||
      BrowserDetector.isIOS()
    );
  },
  isSupported: function () {
    return !!(
      BrowserDetector.supportedBrowsers.hasOwnProperty(
        BrowserDetector.browser.name
      ) &&
      +BrowserDetector.browser.version >
        BrowserDetector.supportedBrowsers[BrowserDetector.browser.name]
    );
  },
  getBrowserFullName: function () {
    var e = BrowserDetector.browserFullNames[BrowserDetector.browser.name];
    return void 0 === e ? "Unknown" : e;
  },
};
if ((BrowserDetector._detectBrowser(), !BrowserDetector.isSupported())) {
  var warningClosed = localStorage.getItem(
    "browser-compatibility-warning-closed"
  );
  null == warningClosed &&
    localStorage.setItem("browser-compatibility-warning-closed", !1),
    $("#comp-warn-browser-version").text(
      BrowserDetector.getBrowserFullName() +
        " " +
        BrowserDetector.browser.version
    );
  var updateURL =
    "https://duckduckgo.com/?q=Update+" +
    BrowserDetector.getBrowserFullName().split(" ").join("+");
  switch (BrowserDetector.browser.name) {
    case "Chrome":
      updateURL = "https://www.google.com/chrome/update";
      break;
    case "Firefox":
      updateURL =
        "de" == ioApp.lang
          ? "https://support.mozilla.org/de/kb/firefox-auf-die-letzte-version-aktualisieren"
          : "https://support.mozilla.org/kb/update-firefox-latest-release";
      break;
    case "IE":
    case "Edge":
      updateURL = "https://www.microsoft.com/edge";
      break;
    case "Safari":
      updateURL =
        "de" == ioApp.lang
          ? "https://support.apple.com/de-de/HT204416"
          : "https://support.apple.com/en-us/HT204416";
  }
  $("#comp-warn-update-link").attr("href", updateURL),
    "true" != warningClosed && $("#compatibility-warning").css("display", "");
}
$("#compatibility-warning").on("close.bs.alert", function () {
  localStorage.setItem("browser-compatibility-warning-closed", !0);
});
