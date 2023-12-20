(this.chkPass = function (e) {
  var n = document.getElementById("scorebar"),
    s = document.getElementById("score"),
    t = document.getElementById("complexity"),
    a = 0,
    m = 0,
    d = 0,
    p = 0,
    l = 0,
    o = 0,
    r = 0,
    c = 0,
    u = 0,
    b = 0,
    B = 0,
    i = 0,
    g = 0,
    I = 0,
    y = 0,
    E = 0,
    N = 0,
    h = "",
    L = "",
    C = "",
    M = "",
    T = "&nbsp;&nbsp;&nbsp;&nbsp;0",
    H = "&nbsp;&nbsp;&nbsp;&nbsp;0",
    v = "&nbsp;&nbsp;&nbsp;&nbsp;0",
    f = "&nbsp;&nbsp;&nbsp;&nbsp;0",
    A = "&nbsp;&nbsp;&nbsp;&nbsp;0",
    w = "&nbsp;&nbsp;&nbsp;&nbsp;0",
    S = "&nbsp;&nbsp;&nbsp;&nbsp;0",
    q = "&nbsp;&nbsp;&nbsp;&nbsp;0",
    x = "&nbsp;&nbsp;&nbsp;&nbsp;0",
    R = "&nbsp;&nbsp;&nbsp;&nbsp;0",
    _ = "&nbsp;&nbsp;&nbsp;&nbsp;0",
    k = "&nbsp;&nbsp;&nbsp;&nbsp;0",
    O = "&nbsp;&nbsp;&nbsp;&nbsp;0",
    U = "&nbsp;&nbsp;&nbsp;&nbsp;0",
    P = "Too Short";
  if (document.all);
  else;
  if (e) {
    (a = parseInt(4 * e.length)), (m = e.length);
    for (
      var z = e.replace(/\s+/g, "").split(/\s*/), Z = z.length, G = 0;
      G < Z;
      G++
    ) {
      z[G].match(new RegExp(/[A-Z]/g))
        ? ("" !== h && h + 1 == G && (i++, 0), (h = G), d++)
        : z[G].match(new RegExp(/[a-z]/g))
        ? ("" !== L && L + 1 == G && (g++, 0), (L = G), p++)
        : z[G].match(new RegExp(/[0-9]/g))
        ? (0 < G && G < Z - 1 && r++,
          "" !== C && C + 1 == G && (I++, 0),
          (C = G),
          l++)
        : z[G].match(new RegExp(/[^a-zA-Z0-9_]/g)) &&
          (0 < G && G < Z - 1 && r++,
          "" !== M && M + 1 == G && (0, 0),
          (M = G),
          o++);
      for (var V = !1, W = G; W < Z && 0 == V; W++)
        z[G].toLowerCase() == z[W].toLowerCase() && G != W && (B++, (V = !0));
    }
    for (var j = 0; j < 23; j++) {
      var D = (F = "abcdefghijklmnopqrstuvwxyz".substring(
        j,
        parseInt(j + 3)
      )).strReverse();
      (-1 == e.toLowerCase().indexOf(F) && -1 == e.toLowerCase().indexOf(D)) ||
        (y++, 0);
    }
    for (j = 0; j < 8; j++) {
      var F;
      D = (F = "01234567890".substring(j, parseInt(j + 3))).strReverse();
      (-1 == e.toLowerCase().indexOf(F) && -1 == e.toLowerCase().indexOf(D)) ||
        (E++, 0);
    }
    (document.getElementById("nLengthBonus").innerHTML = "+ " + a),
      0 < d &&
        d < m &&
        ((a = parseInt(a + 2 * (m - d))), (T = "+ " + parseInt(2 * (m - d)))),
      0 < p &&
        p < m &&
        ((a = parseInt(a + 2 * (m - p))), (H = "+ " + parseInt(2 * (m - p)))),
      0 < l &&
        l < m &&
        ((a = parseInt(a + 4 * l)), (v = "+ " + parseInt(4 * l))),
      0 < o && ((a = parseInt(a + 6 * o)), (f = "+ " + parseInt(6 * o))),
      0 < r && ((a = parseInt(a + 2 * r)), (A = "+ " + parseInt(2 * r))),
      (document.getElementById("nAlphaUCBonus").innerHTML = T),
      (document.getElementById("nAlphaLCBonus").innerHTML = H),
      (document.getElementById("nNumberBonus").innerHTML = v),
      (document.getElementById("nSymbolBonus").innerHTML = f),
      (document.getElementById("nMidCharBonus").innerHTML = A),
      (0 < p || 0 < d) &&
        0 === o &&
        0 === l &&
        ((a = parseInt(a - m)), (S = "- " + (u = m))),
      0 === p &&
        0 === d &&
        0 === o &&
        0 < l &&
        ((a = parseInt(a - m)), (q = "- " + (b = m))),
      0 < B && ((a = parseInt(a - 3 * B)), (x = "- " + 3 * B)),
      0 < i && ((a = parseInt(a - 2 * i)), (R = "- " + parseInt(2 * i))),
      0 < g && ((a = parseInt(a - 2 * g)), (_ = "- " + parseInt(2 * g))),
      0 < I && ((a = parseInt(a - 2 * I)), (k = "- " + parseInt(2 * I))),
      0 < y && ((a = parseInt(a - 3 * y)), (O = "- " + parseInt(3 * y))),
      0 < E && ((a = parseInt(a - 3 * E)), (U = "- " + parseInt(3 * E))),
      (document.getElementById("nAlphasOnlyBonus").innerHTML = S),
      (document.getElementById("nNumbersOnlyBonus").innerHTML = q),
      (document.getElementById("nRepCharBonus").innerHTML = x),
      (document.getElementById("nConsecAlphaUCBonus").innerHTML = R),
      (document.getElementById("nConsecAlphaLCBonus").innerHTML = _),
      (document.getElementById("nConsecNumberBonus").innerHTML = k),
      (document.getElementById("nSeqAlphaBonus").innerHTML = O),
      (document.getElementById("nSeqNumberBonus").innerHTML = U);
    for (
      var J = ["nLength", "nAlphaUC", "nAlphaLC", "nNumber", "nSymbol"],
        K = (ne = [m, d, p, l, o]).length,
        Q = 0;
      Q < K;
      Q++
    ) {
      var X = document.getElementById("div_" + J[Q]),
        Y = document.getElementById(J[Q] + "Bonus");
      if (
        ((document.getElementById(J[Q]).innerHTML = ne[Q]), "nLength" == J[Q])
      )
        var $ = parseInt(7);
      else $ = 0;
      ne[Q] == parseInt($ + 1)
        ? (N++, (X.className = "pass"), (Y.parentNode.className = "pass"))
        : ne[Q] > parseInt($ + 1)
        ? (N++, (X.className = "exceed"), (Y.parentNode.className = "exceed"))
        : ((X.className = "fail"), (Y.parentNode.className = "fail"));
    }
    if (((c = N), 8 <= e.length)) var ee = 3;
    else ee = 4;
    ee < c && ((a = parseInt(a + 2 * c)), (w = "+ " + parseInt(2 * c))),
      (document.getElementById("nRequirementsBonus").innerHTML = w);
    for (
      J = ["nMidChar", "nRequirements"], K = (ne = [r, c]).length, Q = 0;
      Q < K;
      Q++
    ) {
      (X = document.getElementById("div_" + J[Q])),
        (Y = document.getElementById(J[Q] + "Bonus"));
      if (
        ((document.getElementById(J[Q]).innerHTML = ne[Q]),
        "nRequirements" == J[Q])
      )
        $ = ee;
      else $ = 0;
      ne[Q] == parseInt($ + 1)
        ? ((X.className = "pass"), (Y.parentNode.className = "pass"))
        : ne[Q] > parseInt($ + 1)
        ? ((X.className = "exceed"), (Y.parentNode.className = "exceed"))
        : ((X.className = "fail"), (Y.parentNode.className = "fail"));
    }
    var ne;
    for (
      J = [
        "nAlphasOnly",
        "nNumbersOnly",
        "nRepChar",
        "nConsecAlphaUC",
        "nConsecAlphaLC",
        "nConsecNumber",
        "nSeqAlpha",
        "nSeqNumber",
      ],
        K = (ne = [u, b, B, i, g, I, y, E]).length,
        Q = 0;
      Q < K;
      Q++
    ) {
      (X = document.getElementById("div_" + J[Q])),
        (Y = document.getElementById(J[Q] + "Bonus"));
      (document.getElementById(J[Q]).innerHTML = ne[Q]),
        0 < ne[Q]
          ? ((X.className = "warn"), (Y.parentNode.className = "warn"))
          : ((X.className = "pass"), (Y.parentNode.className = "pass"));
    }
    100 < a ? (a = 100) : a < 0 && (a = 0),
      "Passwort" == "password"
        ? 0 <= a && a < 20
          ? (P = "Sehr schwach")
          : 20 <= a && a < 40
          ? (P = "Schwach")
          : 40 <= a && a < 60
          ? (P = "Gut")
          : 60 <= a && a < 80
          ? (P = "Stark")
          : 80 <= a && a <= 100 && (P = "Sehr stark")
        : 0 <= a && a < 20
        ? (P = "Very Weak")
        : 20 <= a && a < 40
        ? (P = "Weak")
        : 40 <= a && a < 60
        ? (P = "Good")
        : 60 <= a && a < 80
        ? (P = "Strong")
        : 80 <= a && a <= 100 && (P = "Very Strong"),
      (n.style.backgroundPosition = "-" + parseInt(4 * a) + "px"),
      (n.style.height = "15px"),
      (s.innerHTML = a + "%"),
      (t.innerHTML = P);
  } else {
    initPwdChk(),
      (s.innerHTML = a + "%"),
      "Passwort" == "password" && (P = "Zu kurz"),
      (t.innerHTML = P);
  }
}),
  (this.togPwdMask = function () {
    var e = document.getElementById("passwordPwd"),
      n = document.getElementById("passwordTxt");
    document.getElementById("mask").checked
      ? ((e.value = n.value), (e.className = ""), (n.className = "hide"))
      : ((n.value = e.value), (e.className = "hide"), (n.className = ""));
  }),
  (this.initPwdChk = function (e) {
    (document.getElementById("nLength").innerHTML = "0"),
      (document.getElementById("nAlphaUC").innerHTML = "0"),
      (document.getElementById("nAlphaLC").innerHTML = "0"),
      (document.getElementById("nNumber").innerHTML = "0"),
      (document.getElementById("nSymbol").innerHTML = "0"),
      (document.getElementById("nMidChar").innerHTML = "0"),
      (document.getElementById("nRequirements").innerHTML = "0"),
      (document.getElementById("nAlphasOnly").innerHTML = "0"),
      (document.getElementById("nNumbersOnly").innerHTML = "0"),
      (document.getElementById("nRepChar").innerHTML = "0"),
      (document.getElementById("nConsecAlphaUC").innerHTML = "0"),
      (document.getElementById("nConsecAlphaLC").innerHTML = "0"),
      (document.getElementById("nConsecNumber").innerHTML = "0"),
      (document.getElementById("nSeqAlpha").innerHTML = "0"),
      (document.getElementById("nSeqNumber").innerHTML = "0"),
      (document.getElementById("nLengthBonus").innerHTML =
        "&nbsp;&nbsp;&nbsp;&nbsp;0"),
      (document.getElementById("nAlphaUCBonus").innerHTML =
        "&nbsp;&nbsp;&nbsp;&nbsp;0"),
      (document.getElementById("nAlphaLCBonus").innerHTML =
        "&nbsp;&nbsp;&nbsp;&nbsp;0"),
      (document.getElementById("nNumberBonus").innerHTML =
        "&nbsp;&nbsp;&nbsp;&nbsp;0"),
      (document.getElementById("nSymbolBonus").innerHTML =
        "&nbsp;&nbsp;&nbsp;&nbsp;0"),
      (document.getElementById("nMidCharBonus").innerHTML =
        "&nbsp;&nbsp;&nbsp;&nbsp;0"),
      (document.getElementById("nRequirementsBonus").innerHTML =
        "&nbsp;&nbsp;&nbsp;&nbsp;0"),
      (document.getElementById("nAlphasOnlyBonus").innerHTML =
        "&nbsp;&nbsp;&nbsp;&nbsp;0"),
      (document.getElementById("nNumbersOnlyBonus").innerHTML =
        "&nbsp;&nbsp;&nbsp;&nbsp;0"),
      (document.getElementById("nRepCharBonus").innerHTML =
        "&nbsp;&nbsp;&nbsp;&nbsp;0"),
      (document.getElementById("nConsecAlphaUCBonus").innerHTML =
        "&nbsp;&nbsp;&nbsp;&nbsp;0"),
      (document.getElementById("nConsecAlphaLCBonus").innerHTML =
        "&nbsp;&nbsp;&nbsp;&nbsp;0"),
      (document.getElementById("nConsecNumberBonus").innerHTML =
        "&nbsp;&nbsp;&nbsp;&nbsp;0"),
      (document.getElementById("nSeqAlphaBonus").innerHTML =
        "&nbsp;&nbsp;&nbsp;&nbsp;0"),
      (document.getElementById("nSeqNumberBonus").innerHTML =
        "&nbsp;&nbsp;&nbsp;&nbsp;0"),
      (document.getElementById("nLengthBonus").parentNode.className = "fail"),
      (document.getElementById("nAlphaUCBonus").parentNode.className = "fail"),
      (document.getElementById("nAlphaLCBonus").parentNode.className = "fail"),
      (document.getElementById("nNumberBonus").parentNode.className = "fail"),
      (document.getElementById("nSymbolBonus").parentNode.className = "fail"),
      (document.getElementById("nMidCharBonus").parentNode.className = "fail"),
      (document.getElementById("nRequirementsBonus").parentNode.className =
        "fail"),
      (document.getElementById("nAlphasOnlyBonus").parentNode.className =
        "pass"),
      (document.getElementById("nNumbersOnlyBonus").parentNode.className =
        "pass"),
      (document.getElementById("nRepCharBonus").parentNode.className = "pass"),
      (document.getElementById("nConsecAlphaUCBonus").parentNode.className =
        "pass"),
      (document.getElementById("nConsecAlphaLCBonus").parentNode.className =
        "pass"),
      (document.getElementById("nConsecNumberBonus").parentNode.className =
        "pass"),
      (document.getElementById("nSeqAlphaBonus").parentNode.className = "pass"),
      (document.getElementById("nSeqNumberBonus").parentNode.className =
        "pass"),
      (document.getElementById("div_nLength").className = "fail"),
      (document.getElementById("div_nAlphaUC").className = "fail"),
      (document.getElementById("div_nAlphaLC").className = "fail"),
      (document.getElementById("div_nNumber").className = "fail"),
      (document.getElementById("div_nSymbol").className = "fail"),
      (document.getElementById("div_nMidChar").className = "fail"),
      (document.getElementById("div_nRequirements").className = "fail"),
      (document.getElementById("div_nAlphasOnly").className = "pass"),
      (document.getElementById("div_nNumbersOnly").className = "pass"),
      (document.getElementById("div_nRepChar").className = "pass"),
      (document.getElementById("div_nConsecAlphaUC").className = "pass"),
      (document.getElementById("div_nConsecAlphaLC").className = "pass"),
      (document.getElementById("div_nConsecNumber").className = "pass"),
      (document.getElementById("div_nSeqAlpha").className = "pass"),
      (document.getElementById("div_nSeqNumber").className = "pass"),
      (document.getElementById("passwordPwd").value = ""),
      (document.getElementById("passwordTxt").value = ""),
      (document.getElementById("scorebar").style.backgroundPosition = "0"),
      (document.getElementById("scorebar").style.height = "15px"),
      e &&
        ((document.getElementById("passwordPwd").className = ""),
        (document.getElementById("passwordTxt").className = "hide"),
        (document.getElementById("mask").checked = !0));
  }),
  (String.prototype.strReverse = function () {
    for (var e = "", n = 0; n < this.length; n++) e = this.charAt(n) + e;
    return e;
  });
