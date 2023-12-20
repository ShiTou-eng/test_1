"use strict";
var searchData = null,
  loadSearchData = function (a) {
    $.get(window.ioApp.baseUrl + "/search.json", function (t) {
      searchData = t;
      try {
        "de" !== window.ioApp.lang &&
          searchData.splice(
            searchData.findIndex(function (t) {
              return "schuelerkrypto" === t.id;
            }),
            1
          );
      } catch (t) {
        console.warn(
          "failed to remove schuelerkrypto from searchData, maybe incompatibility: ",
          t
        );
      }
      a();
    });
  };
function occurrences(t, a, e) {
  if (((t += ""), (a += "").length <= 0)) return t.length + 1;
  for (var n = 0, r = 0, s = e ? 1 : a.length; 0 <= (r = t.indexOf(a, r)); )
    ++n, (r += s);
  return n;
}
$("#search-input").on("focus", function () {
  var t = this;
  if (null !== searchData) return !1;
  $("#search-icon").attr("class", "fa fa-spin fa-refresh"),
    $(this).attr("placeholder", window.translations.searchMessages.downloading),
    loadSearchData(function () {
      $("#search-icon").attr("class", "fa fa-search"),
        $(t).attr("placeholder", window.translations.searchMessages.enterTerm);
    });
});
var getPoints = function (t, a, e) {
    return occurrences(t, a) * e;
  },
  search = function (i) {
    var n, c;
    null != searchData
      ? ((i = i.trim()),
        (n = []),
        searchData.forEach(function (e) {
          e.items.forEach(function (t) {
            (t.title = t.title.trim()),
              (t.content = t.content.trim()),
              (t.categoryName = e.name),
              (t.categoryId = e.id);
            var a = 0;
            (a += getPoints(t.title.toLowerCase(), i.toLowerCase(), 5)),
              0 <
                (a += getPoints(t.content.toLowerCase(), i.toLowerCase(), 2)) &&
                ((t.points = a), n.push(t));
          });
        }),
        n.sort(function (t, a) {
          return a.points - t.points;
        }),
        (c = ""),
        n.forEach(function (t) {
          (t.title = t.title.trim()), (t.content = t.content.trim());
          var a = t.content.toLowerCase().indexOf(i.toLowerCase()),
            e = 50 < a ? a - 50 : 0,
            n = 100 + e,
            r = t.content.substring(e, n);
          0 < e && (r = "..." + r.trim());
          var s = new RegExp("(" + i + ")", "gi"),
            o = t.title.replace(s, "<mark>$1</mark>"),
            r = r.replace(s, "<mark>$1</mark>");
          (c += '\t\t\t<li class="list-group-item p-0">\n'),
            (c +=
              '\t\t\t\t<a href="' +
              t.url +
              '" class="' +
              t.categoryId +
              '">\n'),
            (c +=
              "\t\t\t\t\t<div>" +
              o +
              '<span class="' +
              t.categoryId +
              '-color small ml-1">(' +
              t.categoryId +
              ")</span></div>\n"),
            (c +=
              '\t\t\t\t\t<div class="text-muted small">' + r + "...</div>\n"),
            (c += "\t\t\t\t</a>\n"),
            (c += "\t\t\t</li>\n");
        }),
        (c += "\t\t</ul>\n"),
        (c += "\t</div>\n"),
        (c += "</div>\n"),
        "" == n.length &&
          (c =
            '<div class="text-center p-3 small">' +
            window.translations.searchMessages.nothingFound +
            "</div>"),
        "" == i && (c = ""),
        $("#search-results").html(c))
      : alert(window.translations.searchMessages.downloading);
  };
$("#search-input").on("input", function () {
  search($(this).val());
});
