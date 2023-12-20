"use strict";
function _slicedToArray(e, t) {
  return (
    _arrayWithHoles(e) ||
    _iterableToArrayLimit(e, t) ||
    _unsupportedIterableToArray(e, t) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _iterableToArrayLimit(e, t) {
  if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
    var r = [],
      n = !0,
      a = !1,
      o = void 0;
    try {
      for (
        var i, l = e[Symbol.iterator]();
        !(n = (i = l.next()).done) && (r.push(i.value), !t || r.length !== t);
        n = !0
      );
    } catch (e) {
      (a = !0), (o = e);
    } finally {
      try {
        n || null == l.return || l.return();
      } finally {
        if (a) throw o;
      }
    }
    return r;
  }
}
function _arrayWithHoles(e) {
  if (Array.isArray(e)) return e;
}
function _createForOfIteratorHelper(e, t) {
  var r;
  if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
    if (
      Array.isArray(e) ||
      (r = _unsupportedIterableToArray(e)) ||
      (t && e && "number" == typeof e.length)
    ) {
      r && (e = r);
      var n = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
        },
        e: function (e) {
          throw e;
        },
        f: a,
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  var o,
    i = !0,
    l = !1;
  return {
    s: function () {
      r = e[Symbol.iterator]();
    },
    n: function () {
      var e = r.next();
      return (i = e.done), e;
    },
    e: function (e) {
      (l = !0), (o = e);
    },
    f: function () {
      try {
        i || null == r.return || r.return();
      } finally {
        if (l) throw o;
      }
    },
  };
}
function _unsupportedIterableToArray(e, t) {
  if (e) {
    if ("string" == typeof e) return _arrayLikeToArray(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    return (
      "Object" === r && e.constructor && (r = e.constructor.name),
      "Map" === r || "Set" === r
        ? Array.from(e)
        : "Arguments" === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        ? _arrayLikeToArray(e, t)
        : void 0
    );
  }
}
function _arrayLikeToArray(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var loadScript = function (e, t) {
    var r = 1 < arguments.length && void 0 !== t ? t : function () {},
      n = document.createElement("script");
    (n.type = "text/javascript"),
      n.readyState
        ? (n.onreadystatechange = function (e) {
            ("loaded" !== n.readyState && "complete" !== n.readyState) ||
              ((n.onreadystatechange = null), r(e));
          })
        : (n.onload = function (e) {
            r(e);
          }),
      (n.src = e),
      document.head.appendChild(n);
  },
  loadStylesheet = function (e, t) {
    var r = 1 < arguments.length && void 0 !== t ? t : function () {},
      n = document.createElement("link");
    (n.type = "text/css"),
      (n.rel = "stylesheet"),
      n.readyState
        ? (n.onreadystatechange = function (e) {
            ("loaded" !== n.readyState && "complete" !== n.readyState) ||
              ((n.onreadystatechange = null), r(e));
          })
        : (n.onload = function (e) {
            r(e);
          }),
      (n.href = e),
      document.head.appendChild(n);
  },
  epochs = [
    ["year", 31536e3],
    ["month", 2592e3],
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60],
    ["second", 1],
  ],
  getDuration = function (e) {
    var t,
      r = _createForOfIteratorHelper(epochs);
    try {
      for (r.s(); !(t = r.n()).done; ) {
        var n = _slicedToArray(t.value, 2),
          a = n[0],
          o = n[1],
          i = Math.floor(e / o);
        if (1 <= i) return { interval: i, epoch: a };
      }
    } catch (e) {
      r.e(e);
    } finally {
      r.f();
    }
  },
  timeAgo = function (e) {
    var t = Math.floor((new Date() - new Date(e)) / 1e3),
      r = getDuration(t),
      n = r.interval,
      a = r.epoch,
      o = 1 === n ? "" : "s";
    return "".concat(n, " ").concat(a).concat(o, " ago");
  },
  createIconCanvasElem = function (e, t) {
    var r,
      n = 0 < arguments.length && void 0 !== e ? e : 200,
      a = 1 < arguments.length && void 0 !== t ? t : 200,
      o = "icon-generator-canvas";
    document.getElementById(o) ||
      (((r = document.createElement("canvas")).id = o),
      (r.width = n),
      (r.height = a),
      (r.style.display = "none"),
      document.querySelector("body").appendChild(r));
  },
  createDefaultIcon = function (e, t, r, n) {
    createIconCanvasElem(r, n);
    var a = document.getElementById("icon-generator-canvas"),
      o = a.getContext("2d");
    (o.imageSmoothingEnabled = !0),
      o.clearRect(0, 0, a.width, a.height),
      (o.textBaseline = "middle"),
      (o.textAlign = "center");
    var i = new Image(a.width, a.height);
    (i.onload = function () {
      o.drawImage(i, 0, 0, a.width, a.height),
        (o.font = "bold 5rem sans-serif"),
        (o.fillStyle = "black"),
        (o.strokeStyle = ""),
        o.fillText(t.substring(0, 2), a.width / 2, a.height / 2),
        (e.src = a.toDataURL("image/webp"));
    }),
      (i.src = "/assets/cto/plugin-icons/01-cto-icon-template.svg");
  };
