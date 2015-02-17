'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
function getDecimals(n) {
  n = n + '';
  var i = n.indexOf('.');
  return (i == -1) ? 0 : n.length - i - 1;
}

function getVF(n, opt_precision) {
  var v = opt_precision;

  if (undefined === v) {
    v = Math.min(getDecimals(n), 3);
  }

  var base = Math.pow(10, v);
  var f = ((n * base) | 0) % base;
  return {v: v, f: f};
}

$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "BN",
      "AN"
    ],
    "DAY": [
      "Sùndei",
      "Mūndei",
      "Fódei",
      "Suidei",
      "Mǔkdei",
      "Gùmdei",
      "Tóudei"
    ],
    "MONTH": [
       "de-1-monŧ",
       "de-2-monŧ",
       "de-3-monŧ",
       "de-4-monŧ",
       "de-5-monŧ",
       "de-6-monŧ",
       "de-7-monŧ",
       "de-8-monŧ",
       "de-9-monŧ",
      "de-10-monŧ",
      "de-11-monŧ",
      "de-12-monŧ"
    ],
    "SHORTDAY": [
      "Sù",
      "Mū",
      "Fó",
      "Su",
      "Mǔ",
      "Gù",
      "Tó"
    ],
    "SHORTMONTH": [
      " 1m",
      " 2m",
      " 3m",
      " 4m",
      " 5m",
      " 6m",
      " 7m",
      " 8m",
      " 9m",
      "10m",
      "11m",
      "12m"
    ],
    "fullDate": "y MMMM d, EEEE.",
    "longDate": "y MMMM d",
    "medium": "y MMM d h:mm:ss a",
    "mediumDate": "y MMM d",
    "mediumTime": "hh:mm:ss a",
    "short": "yy/MM/dd hh:mm a",
    "shortDate": "yy/MM/dd",
    "shortTime": "hh:mm a"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "Kr",
    "DECIMAL_SEP": ".",
    "GROUP_SEP": ",",
    "PATTERNS": [
      {
        "gSize": 3,
        "lgSize": 3,
        "maxFrac": 3,
        "minFrac": 0,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "",
        "posPre": "",
        "posSuf": ""
      },
      {
        "gSize": 3,
        "lgSize": 3,
        "maxFrac": 2,
        "minFrac": 2,
        "minInt": 1,
        "negPre": "\u00a4-",
        "negSuf": "",
        "posPre": "\u00a4",
        "posSuf": ""
      }
    ]
  },
  "id": "bb-bk",
  "pluralCat": function(n, opt_precision) {  var i = n | 0;  var vf = getVF(n, opt_precision);  if (i == 1 && vf.v == 0) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);
