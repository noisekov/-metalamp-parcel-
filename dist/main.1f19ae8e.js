// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles/style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\fonts\\Montserrat-Bold.eot":[["Montserrat-Bold.70d570c7.eot","fonts/Montserrat-Bold.eot"],"fonts/Montserrat-Bold.eot"],"./..\\fonts\\Montserrat-Bold.woff":[["Montserrat-Bold.73e94c2c.woff","fonts/Montserrat-Bold.woff"],"fonts/Montserrat-Bold.woff"],"./..\\fonts\\Montserrat-Bold.ttf":[["Montserrat-Bold.f3410305.ttf","fonts/Montserrat-Bold.ttf"],"fonts/Montserrat-Bold.ttf"],"./..\\fonts\\Montserrat-Bold.svg":[["Montserrat-Bold.0fff2121.svg","fonts/Montserrat-Bold.svg"],"fonts/Montserrat-Bold.svg"],"./..\\fonts\\Montserrat-Regular.eot":[["Montserrat-Regular.21b801b8.eot","fonts/Montserrat-Regular.eot"],"fonts/Montserrat-Regular.eot"],"./..\\fonts\\Montserrat-Regular.woff":[["Montserrat-Regular.1b35f2ae.woff","fonts/Montserrat-Regular.woff"],"fonts/Montserrat-Regular.woff"],"./..\\fonts\\Montserrat-Regular.ttf":[["Montserrat-Regular.44e710c1.ttf","fonts/Montserrat-Regular.ttf"],"fonts/Montserrat-Regular.ttf"],"./..\\fonts\\Montserrat-Regular.svg":[["Montserrat-Regular.6f6bdac5.svg","fonts/Montserrat-Regular.svg"],"fonts/Montserrat-Regular.svg"],"_css_loader":"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/air-datepicker/air-datepicker.js":[function(require,module,exports) {
var define;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e14) { throw _e14; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e15) { didErr = true; err = _e15; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.AirDatepicker = t() : e.AirDatepicker = t();
}(this, function () {
  return function () {
    "use strict";

    var _$;

    var e = {
      d: function d(t, i) {
        for (var s in i) {
          e.o(i, s) && !e.o(t, s) && Object.defineProperty(t, s, {
            enumerable: !0,
            get: i[s]
          });
        }
      },
      o: function o(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
    },
        t = {};
    e.d(t, {
      default: function _default() {
        return K;
      }
    });
    var i = {
      days: "days",
      months: "months",
      years: "years",
      day: "day",
      month: "month",
      year: "year",
      eventChangeViewDate: "changeViewDate",
      eventChangeCurrentView: "changeCurrentView",
      eventChangeFocusDate: "changeFocusDate",
      eventChangeSelectedDate: "changeSelectedDate",
      eventChangeTime: "changeTime",
      eventChangeLastSelectedDate: "changeLastSelectedDate",
      actionSelectDate: "selectDate",
      actionUnselectDate: "unselectDate",
      cssClassWeekend: "-weekend-"
    },
        s = {
      classes: "",
      inline: !1,
      locale: {
        days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
        daysShort: ["Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"],
        daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        today: "Сегодня",
        clear: "Очистить",
        dateFormat: "dd.MM.yyyy",
        timeFormat: "HH:mm",
        firstDay: 1
      },
      startDate: new Date(),
      firstDay: "",
      weekends: [6, 0],
      dateFormat: "",
      altField: "",
      altFieldDateFormat: "T",
      toggleSelected: !0,
      keyboardNav: !0,
      selectedDates: !1,
      container: "",
      isMobile: !1,
      visible: !1,
      position: "bottom left",
      offset: 12,
      view: i.days,
      minView: i.days,
      showOtherMonths: !0,
      selectOtherMonths: !0,
      moveToOtherMonthsOnSelect: !0,
      showOtherYears: !0,
      selectOtherYears: !0,
      moveToOtherYearsOnSelect: !0,
      minDate: "",
      maxDate: "",
      disableNavWhenOutOfRange: !0,
      multipleDates: !1,
      multipleDatesSeparator: ", ",
      range: !1,
      dynamicRange: !0,
      buttons: !1,
      monthsField: "monthsShort",
      showEvent: "focus",
      autoClose: !1,
      prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
      nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
      navTitles: {
        days: "MMMM, <i>yyyy</i>",
        months: "yyyy",
        years: "yyyy1 - yyyy2"
      },
      timepicker: !1,
      onlyTimepicker: !1,
      dateTimeSeparator: " ",
      timeFormat: "",
      minHours: 0,
      maxHours: 24,
      minMinutes: 0,
      maxMinutes: 59,
      hoursStep: 1,
      minutesStep: 1,
      onSelect: !1,
      onChangeViewDate: !1,
      onChangeView: !1,
      onRenderCell: !1,
      onShow: !1,
      onHide: !1,
      onClickDayName: !1
    };

    function a(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
      return "string" == typeof e ? t.querySelector(e) : e;
    }

    function n() {
      var _n$classList;

      var _ref = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          _ref$tagName = _ref.tagName,
          e = _ref$tagName === void 0 ? "div" : _ref$tagName,
          _ref$className = _ref.className,
          t = _ref$className === void 0 ? "" : _ref$className,
          _ref$innerHtml = _ref.innerHtml,
          i = _ref$innerHtml === void 0 ? "" : _ref$innerHtml,
          _ref$id = _ref.id,
          s = _ref$id === void 0 ? "" : _ref$id,
          _ref$attrs = _ref.attrs,
          a = _ref$attrs === void 0 ? {} : _ref$attrs,
          n = document.createElement(e);

      if (t && (_n$classList = n.classList).add.apply(_n$classList, _toConsumableArray(t.split(" "))), s && (n.id = s), i && (n.innerHTML = i), a) for (var _e in a) {
        n.setAttribute(_e, a[_e]);
      }
      return n;
    }

    function r(e, t) {
      for (var _i = 0, _Object$entries = Object.entries(t); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            _i2 = _Object$entries$_i[0],
            _s = _Object$entries$_i[1];

        e.setAttribute(_i2, _s);
      }

      return e;
    }

    function h(e) {
      return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
    }

    function o(e) {
      var t = e.getHours(),
          i = t % 12 == 0 ? 12 : t % 12;
      return {
        year: e.getFullYear(),
        month: e.getMonth(),
        fullMonth: e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1,
        date: e.getDate(),
        fullDate: e.getDate() < 10 ? "0" + e.getDate() : e.getDate(),
        day: e.getDay(),
        hours: t,
        fullHours: l(t),
        hours12: i,
        fullHours12: l(i),
        minutes: e.getMinutes(),
        fullMinutes: e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes()
      };
    }

    function l(e) {
      return e < 10 ? "0" + e : e;
    }

    function d(e) {
      var t = 10 * Math.floor(e.getFullYear() / 10);
      return [t, t + 9];
    }

    function c() {
      var e = [];

      for (var t = arguments.length, i = new Array(t), s = 0; s < t; s++) {
        i[s] = arguments[s];
      }

      return i.forEach(function (t) {
        if ("object" == _typeof(t)) for (var _i3 in t) {
          t[_i3] && e.push(_i3);
        } else t && e.push(t);
      }), e.join(" ");
    }

    function u(e, t) {
      var _r;

      var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.days;
      if (!e || !t) return !1;
      var a = o(e),
          n = o(t),
          r = (_r = {}, _defineProperty(_r, i.days, a.date === n.date && a.month === n.month && a.year === n.year), _defineProperty(_r, i.months, a.month === n.month && a.year === n.year), _defineProperty(_r, i.years, a.year === n.year), _r);
      return r[s];
    }

    function p(e, t, i) {
      var s = g(e, !1).getTime(),
          a = g(t, !1).getTime();
      return i ? s >= a : s > a;
    }

    function m(e, t) {
      return !p(e, t, !0);
    }

    function g(e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          i = new Date(e.getTime());
      return "boolean" != typeof t || t || D(i), i;
    }

    function D(e) {
      return e.setHours(0, 0, 0, 0), e;
    }

    function v(e, t, i) {
      e.length ? e.forEach(function (e) {
        e.addEventListener(t, i);
      }) : e.addEventListener(t, i);
    }

    function y(e, t) {
      return !(!e || e === document || e instanceof DocumentFragment) && (e.matches(t) ? e : y(e.parentNode, t));
    }

    function f(e, t, i) {
      return e > i ? i : e < t ? t : e;
    }

    function w(e) {
      for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) {
        i[s - 1] = arguments[s];
      }

      return i.filter(function (e) {
        return e;
      }).forEach(function (t) {
        for (var _i4 = 0, _Object$entries2 = Object.entries(t); _i4 < _Object$entries2.length; _i4++) {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i4], 2),
              _i5 = _Object$entries2$_i[0],
              _s2 = _Object$entries2$_i[1];

          if (void 0 !== _s2 && "[object Object]" === _s2.toString()) {
            var _t = void 0 !== e[_i5] ? e[_i5].toString() : void 0,
                _a = _s2.toString(),
                _n2 = Array.isArray(_s2) ? [] : {};

            e[_i5] = e[_i5] ? _t !== _a ? _n2 : e[_i5] : _n2, w(e[_i5], _s2);
          } else e[_i5] = _s2;
        }
      }), e;
    }

    function b(e) {
      var t = e;
      return e instanceof Date || (t = new Date(e)), isNaN(t.getTime()) && (console.log('Unable to convert value "'.concat(e, '" to Date object')), t = !1), t;
    }

    function k(e) {
      var t = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
      return new RegExp("(^|>|" + t + ")(" + e + ")($|<|" + t + ")", "g");
    }

    function C(e, t, i) {
      return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i, e;
    }

    var _ = /*#__PURE__*/function () {
      function _() {
        var _this = this;

        _classCallCheck(this, _);

        var _ref2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = _ref2.type,
            t = _ref2.date,
            i = _ref2.dp,
            s = _ref2.opts,
            a = _ref2.body;

        C(this, "focus", function () {
          _this.$cell.classList.add("-focus-"), _this.focused = !0;
        }), C(this, "removeFocus", function () {
          _this.$cell.classList.remove("-focus-"), _this.focused = !1;
        }), C(this, "select", function () {
          _this.$cell.classList.add("-selected-"), _this.selected = !0;
        }), C(this, "removeSelect", function () {
          _this.$cell.classList.remove("-selected-", "-range-from-", "-range-to-"), _this.selected = !1;
        }), C(this, "onChangeSelectedDate", function () {
          _this.isDisabled || (_this._handleSelectedStatus(), _this.opts.range && _this._handleRangeStatus());
        }), C(this, "onChangeFocusDate", function (e) {
          if (!e) return void (_this.focused && _this.removeFocus());
          var t = u(e, _this.date, _this.type);
          t ? _this.focus() : !t && _this.focused && _this.removeFocus(), _this.opts.range && _this._handleRangeStatus();
        }), C(this, "render", function () {
          return _this.$cell.innerHTML = _this._getHtml(), _this.$cell.adpCell = _this, _this.$cell;
        }), this.type = e, this.singleType = this.type.slice(0, -1), this.date = t, this.dp = i, this.opts = s, this.body = a, this.customData = !1, this.init();
      }

      _createClass(_, [{
        key: "init",
        value: function init() {
          var _this$opts = this.opts,
              e = _this$opts.range,
              t = _this$opts.onRenderCell;
          t && (this.customData = t({
            date: this.date,
            cellType: this.singleType,
            datepicker: this.dp
          })), this._createElement(), this._bindDatepickerEvents(), this._handleInitialFocusStatus(), this.dp.hasSelectedDates && (this._handleSelectedStatus(), e && this._handleRangeStatus());
        }
      }, {
        key: "_bindDatepickerEvents",
        value: function _bindDatepickerEvents() {
          this.dp.on(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.on(i.eventChangeFocusDate, this.onChangeFocusDate);
        }
      }, {
        key: "unbindDatepickerEvents",
        value: function unbindDatepickerEvents() {
          this.dp.off(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.off(i.eventChangeFocusDate, this.onChangeFocusDate);
        }
      }, {
        key: "_createElement",
        value: function _createElement() {
          var _o = o(this.date),
              e = _o.year,
              t = _o.month,
              i = _o.date;

          this.$cell = n({
            className: this._getClassName(),
            attrs: {
              "data-year": e,
              "data-month": t,
              "data-date": i
            }
          });
        }
      }, {
        key: "_getClassName",
        value: function _getClassName() {
          var e, t;

          var s = new Date(),
              _this$opts2 = this.opts,
              a = _this$opts2.selectOtherMonths,
              n = _this$opts2.selectOtherYears,
              _this$dp = this.dp,
              r = _this$dp.minDate,
              h = _this$dp.maxDate,
              _o2 = o(this.date),
              l = _o2.day,
              d = this._isOutOfMinMaxRange(),
              p = null === (e = this.customData) || void 0 === e ? void 0 : e.disabled,
              m = c("air-datepicker-cell", "-".concat(this.singleType, "-"), {
            "-current-": u(s, this.date, this.type),
            "-min-date-": r && u(r, this.date, this.type),
            "-max-date-": h && u(h, this.date, this.type)
          }),
              g = "";

          switch (this.type) {
            case i.days:
              g = c({
                "-weekend-": this.dp.isWeekend(l),
                "-other-month-": this.isOtherMonth,
                "-disabled-": this.isOtherMonth && !a || d || p
              });
              break;

            case i.months:
              g = c({
                "-disabled-": d || p
              });
              break;

            case i.years:
              g = c({
                "-other-decade-": this.isOtherDecade,
                "-disabled-": d || this.isOtherDecade && !n || p
              });
          }

          return c(m, g, null === (t = this.customData) || void 0 === t ? void 0 : t.classes);
        }
      }, {
        key: "_getHtml",
        value: function _getHtml() {
          var e;

          var _o3 = o(this.date),
              t = _o3.year,
              s = _o3.month,
              a = _o3.date,
              _this$opts3 = this.opts,
              n = _this$opts3.showOtherMonths,
              r = _this$opts3.showOtherYears;

          if (null !== (e = this.customData) && void 0 !== e && e.html) return this.customData.html;

          switch (this.type) {
            case i.days:
              return !n && this.isOtherMonth ? "" : a;

            case i.months:
              return this.dp.locale[this.opts.monthsField][s];

            case i.years:
              return !r && this.isOtherDecade ? "" : t;
          }
        }
      }, {
        key: "_isOutOfMinMaxRange",
        value: function _isOutOfMinMaxRange() {
          var _this$dp2 = this.dp,
              e = _this$dp2.minDate,
              t = _this$dp2.maxDate,
              s = this.type,
              a = this.date,
              _o4 = o(a),
              n = _o4.month,
              r = _o4.year,
              h = _o4.date,
              l = s === i.days,
              d = s === i.years,
              c = !!e && new Date(r, d ? e.getMonth() : n, l ? h : e.getDate()),
              u = !!t && new Date(r, d ? t.getMonth() : n, l ? h : t.getDate());

          return e && t ? m(c, e) || p(u, t) : e ? m(c, e) : t ? p(u, t) : void 0;
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.unbindDatepickerEvents();
        }
      }, {
        key: "_handleRangeStatus",
        value: function _handleRangeStatus() {
          var _this$$cell$classList;

          var _this$dp3 = this.dp,
              e = _this$dp3.rangeDateFrom,
              t = _this$dp3.rangeDateTo,
              i = c({
            "-in-range-": e && t && (s = this.date, a = e, n = t, p(s, a) && m(s, n)),
            "-range-from-": e && u(this.date, e, this.type),
            "-range-to-": t && u(this.date, t, this.type)
          });
          var s, a, n;
          this.$cell.classList.remove("-range-from-", "-range-to-", "-in-range-"), i && (_this$$cell$classList = this.$cell.classList).add.apply(_this$$cell$classList, _toConsumableArray(i.split(" ")));
        }
      }, {
        key: "_handleSelectedStatus",
        value: function _handleSelectedStatus() {
          var e = this.dp._checkIfDateIsSelected(this.date, this.type);

          e ? this.select() : !e && this.selected && this.removeSelect();
        }
      }, {
        key: "_handleInitialFocusStatus",
        value: function _handleInitialFocusStatus() {
          u(this.dp.focusDate, this.date, this.type) && this.focus();
        }
      }, {
        key: "isDisabled",
        get: function get() {
          return this.$cell.matches(".-disabled-");
        }
      }, {
        key: "isOtherMonth",
        get: function get() {
          return this.dp.isOtherMonth(this.date);
        }
      }, {
        key: "isOtherDecade",
        get: function get() {
          return this.dp.isOtherDecade(this.date);
        }
      }]);

      return _;
    }();

    function M(e, t, i) {
      return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i, e;
    }

    var $ = (_$ = {}, _defineProperty(_$, i.days, '<div class="air-datepicker-body--day-names"></div>' + '<div class="air-datepicker-body--cells -'.concat(i.days, '-"></div>')), _defineProperty(_$, i.months, '<div class="air-datepicker-body--cells -'.concat(i.months, '-"></div>')), _defineProperty(_$, i.years, '<div class="air-datepicker-body--cells -'.concat(i.years, '-"></div>')), _$);

    var S = /*#__PURE__*/function () {
      function S(e) {
        var _this2 = this;

        _classCallCheck(this, S);

        var t = e.dp,
            s = e.type,
            a = e.opts;
        M(this, "handleClick", function (e) {
          var t = e.target.adpCell;
          if (t.isDisabled) return;
          if (!_this2.dp.isMinViewReached) return void _this2.dp.down();

          var i = _this2.dp._checkIfDateIsSelected(t.date, t.type);

          i ? _this2.dp._handleAlreadySelectedDates(i, t.date) : _this2.dp.selectDate(t.date);
        }), M(this, "handleDayNameClick", function (e) {
          var t = e.target.getAttribute("data-day-index");

          _this2.opts.onClickDayName({
            dayIndex: Number(t),
            datepicker: _this2.dp
          });
        }), M(this, "onChangeCurrentView", function (e) {
          e !== _this2.type ? _this2.hide() : (_this2.show(), _this2.render());
        }), M(this, "onMouseOverCell", function (e) {
          var t = y(e.target, ".air-datepicker-cell");

          _this2.dp.setFocusDate(!!t && t.adpCell.date);
        }), M(this, "onMouseOutCell", function () {
          _this2.dp.setFocusDate(!1);
        }), M(this, "onClickBody", function (e) {
          var t = _this2.opts.onClickDayName,
              i = e.target;
          i.closest(".air-datepicker-cell") && _this2.handleClick(e), t && i.closest(".air-datepicker-body--day-name") && _this2.handleDayNameClick(e);
        }), M(this, "onMouseDown", function (e) {
          _this2.pressed = !0;
          var t = y(e.target, ".air-datepicker-cell"),
              i = t && t.adpCell;
          u(i.date, _this2.dp.rangeDateFrom) && (_this2.rangeFromFocused = !0), u(i.date, _this2.dp.rangeDateTo) && (_this2.rangeToFocused = !0);
        }), M(this, "onMouseMove", function (e) {
          if (!_this2.pressed || !_this2.dp.isMinViewReached) return;
          e.preventDefault();
          var t = y(e.target, ".air-datepicker-cell"),
              i = t && t.adpCell,
              _this2$dp = _this2.dp,
              s = _this2$dp.selectedDates,
              a = _this2$dp.rangeDateTo,
              n = _this2$dp.rangeDateFrom;
          if (!i || i.isDisabled) return;
          var r = i.date;

          if (2 === s.length) {
            if (_this2.rangeFromFocused && !p(r, a)) {
              var _o5 = o(n),
                  _e2 = _o5.hours,
                  _t2 = _o5.minutes;

              r.setHours(_e2), r.setMinutes(_t2), _this2.dp.rangeDateFrom = r, _this2.dp.replaceDate(n, r);
            }

            if (_this2.rangeToFocused && !m(r, n)) {
              var _o6 = o(a),
                  _e3 = _o6.hours,
                  _t3 = _o6.minutes;

              r.setHours(_e3), r.setMinutes(_t3), _this2.dp.rangeDateTo = r, _this2.dp.replaceDate(a, r);
            }
          }
        }), M(this, "onMouseUp", function () {
          _this2.pressed = !1, _this2.rangeFromFocused = !1, _this2.rangeToFocused = !1;
        }), M(this, "onChangeViewDate", function (e, t) {
          if (!_this2.isVisible) return;
          var s = d(e),
              a = d(t);

          switch (_this2.dp.currentView) {
            case i.days:
              if (u(e, t, i.months)) return;
              break;

            case i.months:
              if (u(e, t, i.years)) return;
              break;

            case i.years:
              if (s[0] === a[0] && s[1] === a[1]) return;
          }

          _this2.render();
        }), M(this, "render", function () {
          _this2.destroyCells(), _this2._generateCells(), _this2.cells.forEach(function (e) {
            _this2.$cells.appendChild(e.render());
          });
        }), this.dp = t, this.type = s, this.opts = a, this.cells = [], this.$el = "", this.pressed = !1, this.isVisible = !0, this.init();
      }

      _createClass(S, [{
        key: "init",
        value: function init() {
          this._buildBaseHtml(), this.type === i.days && this.renderDayNames(), this.render(), this._bindEvents(), this._bindDatepickerEvents();
        }
      }, {
        key: "_bindEvents",
        value: function _bindEvents() {
          var _this$opts4 = this.opts,
              e = _this$opts4.range,
              t = _this$opts4.dynamicRange;
          v(this.$el, "mouseover", this.onMouseOverCell), v(this.$el, "mouseout", this.onMouseOutCell), v(this.$el, "click", this.onClickBody), e && t && (v(this.$el, "mousedown", this.onMouseDown), v(this.$el, "mousemove", this.onMouseMove), v(window.document, "mouseup", this.onMouseUp));
        }
      }, {
        key: "_bindDatepickerEvents",
        value: function _bindDatepickerEvents() {
          this.dp.on(i.eventChangeViewDate, this.onChangeViewDate), this.dp.on(i.eventChangeCurrentView, this.onChangeCurrentView);
        }
      }, {
        key: "_buildBaseHtml",
        value: function _buildBaseHtml() {
          this.$el = n({
            className: "air-datepicker-body -".concat(this.type, "-"),
            innerHtml: $[this.type]
          }), this.$names = a(".air-datepicker-body--day-names", this.$el), this.$cells = a(".air-datepicker-body--cells", this.$el);
        }
      }, {
        key: "_getDayNamesHtml",
        value: function _getDayNamesHtml() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.dp.locale.firstDay,
              t = "",
              s = this.dp.isWeekend,
              a = this.opts.onClickDayName,
              n = e,
              r = 0;

          for (; r < 7;) {
            var _c;

            var _e4 = n % 7,
                _h = c("air-datepicker-body--day-name", (_c = {}, _defineProperty(_c, i.cssClassWeekend, s(_e4)), _defineProperty(_c, "-clickable-", !!a), _c)),
                _o7 = this.dp.locale.daysMin[_e4];

            t += '<div class="'.concat(_h, "\" data-day-index='").concat(_e4, "'>").concat(_o7, "</div>"), r++, n++;
          }

          return t;
        }
      }, {
        key: "_getDaysCells",
        value: function _getDaysCells() {
          var _this$dp4 = this.dp,
              e = _this$dp4.viewDate,
              t = _this$dp4.locale.firstDay,
              i = h(e),
              _o8 = o(e),
              s = _o8.year,
              a = _o8.month,
              n = new Date(s, a, 1),
              r = new Date(s, a, i),
              l = n.getDay() - t,
              d = 6 - r.getDay() + t;

          l = l < 0 ? l + 7 : l, d = d > 6 ? d - 7 : d;

          var c = function (e, t) {
            var _o10 = o(e),
                i = _o10.year,
                s = _o10.month,
                a = _o10.date;

            return new Date(i, s, a - t);
          }(n, l),
              u = i + l + d,
              p = c.getDate(),
              _o9 = o(c),
              m = _o9.year,
              g = _o9.month,
              D = 0;

          for (; D < u;) {
            var _e5 = new Date(m, g, p + D);

            this._generateCell(_e5), D++;
          }
        }
      }, {
        key: "_generateCell",
        value: function _generateCell(e) {
          var t = this.type,
              i = this.dp,
              s = this.opts,
              a = new _({
            type: t,
            dp: i,
            opts: s,
            date: e,
            body: this
          });
          return this.cells.push(a), a;
        }
      }, {
        key: "_generateDayCells",
        value: function _generateDayCells() {
          this._getDaysCells();
        }
      }, {
        key: "_generateMonthCells",
        value: function _generateMonthCells() {
          var e = this.dp.parsedViewDate.year,
              t = 0;

          for (; t < 12;) {
            this.cells.push(this._generateCell(new Date(e, t))), t++;
          }
        }
      }, {
        key: "_generateYearCells",
        value: function _generateYearCells() {
          var e = d(this.dp.viewDate),
              t = e[0] - 1,
              i = e[1] + 1,
              s = t;

          for (; s <= i;) {
            this.cells.push(this._generateCell(new Date(s, 0))), s++;
          }
        }
      }, {
        key: "renderDayNames",
        value: function renderDayNames() {
          this.$names.innerHTML = this._getDayNamesHtml();
        }
      }, {
        key: "_generateCells",
        value: function _generateCells() {
          switch (this.type) {
            case i.days:
              this._generateDayCells();

              break;

            case i.months:
              this._generateMonthCells();

              break;

            case i.years:
              this._generateYearCells();

          }
        }
      }, {
        key: "show",
        value: function show() {
          this.isVisible = !0, this.$el.classList.remove("-hidden-");
        }
      }, {
        key: "hide",
        value: function hide() {
          this.isVisible = !1, this.$el.classList.add("-hidden-");
        }
      }, {
        key: "destroyCells",
        value: function destroyCells() {
          this.cells.forEach(function (e) {
            return e.destroy();
          }), this.cells = [], this.$cells.innerHTML = "";
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.destroyCells(), this.dp.off(i.eventChangeViewDate, this.onChangeViewDate), this.dp.off(i.eventChangeCurrentView, this.onChangeCurrentView);
        }
      }]);

      return S;
    }();

    function T(e, t, i) {
      return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i, e;
    }

    var F = /*#__PURE__*/function () {
      function F(e) {
        var _this3 = this;

        _classCallCheck(this, F);

        var t = e.dp,
            i = e.opts;
        T(this, "onClickNav", function (e) {
          var t = y(e.target, ".air-datepicker-nav--action");
          if (!t) return;
          var i = t.dataset.action;

          _this3.dp[i]();
        }), T(this, "onChangeViewDate", function () {
          _this3.render(), _this3._resetNavStatus(), _this3.handleNavStatus();
        }), T(this, "onChangeCurrentView", function () {
          _this3.render(), _this3._resetNavStatus(), _this3.handleNavStatus();
        }), T(this, "onClickNavTitle", function () {
          _this3.dp.isFinalView || _this3.dp.up();
        }), T(this, "update", function () {
          var _this3$opts = _this3.opts,
              e = _this3$opts.prevHtml,
              t = _this3$opts.nextHtml;
          _this3.$prev.innerHTML = e, _this3.$next.innerHTML = t, _this3._resetNavStatus(), _this3.render(), _this3.handleNavStatus();
        }), T(this, "renderDelay", function () {
          setTimeout(_this3.render);
        }), T(this, "render", function () {
          _this3.$title.innerHTML = _this3._getTitle(), function (e, t) {
            for (var _i6 in t) {
              t[_i6] ? e.classList.add(_i6) : e.classList.remove(_i6);
            }
          }(_this3.$title, {
            "-disabled-": _this3.dp.isFinalView
          });
        }), this.dp = t, this.opts = i, this.init();
      }

      _createClass(F, [{
        key: "init",
        value: function init() {
          this._createElement(), this._buildBaseHtml(), this._defineDOM(), this.render(), this.handleNavStatus(), this._bindEvents(), this._bindDatepickerEvents();
        }
      }, {
        key: "_defineDOM",
        value: function _defineDOM() {
          this.$title = a(".air-datepicker-nav--title", this.$el), this.$prev = a('[data-action="prev"]', this.$el), this.$next = a('[data-action="next"]', this.$el);
        }
      }, {
        key: "_bindEvents",
        value: function _bindEvents() {
          this.$el.addEventListener("click", this.onClickNav), this.$title.addEventListener("click", this.onClickNavTitle);
        }
      }, {
        key: "_bindDatepickerEvents",
        value: function _bindDatepickerEvents() {
          this.dp.on(i.eventChangeViewDate, this.onChangeViewDate), this.dp.on(i.eventChangeCurrentView, this.onChangeCurrentView), this.isNavIsFunction && (this.dp.on(i.eventChangeSelectedDate, this.renderDelay), this.dp.opts.timepicker && this.dp.on(i.eventChangeTime, this.render));
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.dp.off(i.eventChangeViewDate, this.onChangeViewDate), this.dp.off(i.eventChangeCurrentView, this.onChangeCurrentView), this.isNavIsFunction && (this.dp.off(i.eventChangeSelectedDate, this.renderDelay), this.dp.opts.timepicker && this.dp.off(i.eventChangeTime, this.render));
        }
      }, {
        key: "_createElement",
        value: function _createElement() {
          this.$el = n({
            tagName: "nav",
            className: "air-datepicker-nav"
          });
        }
      }, {
        key: "_getTitle",
        value: function _getTitle() {
          var e = this.dp,
              t = this.opts,
              i = t.navTitles[e.currentView];
          return "function" == typeof i ? i(e) : e.formatDate(e.viewDate, i);
        }
      }, {
        key: "handleNavStatus",
        value: function handleNavStatus() {
          var e = this.opts.disableNavWhenOutOfRange,
              _this$dp5 = this.dp,
              t = _this$dp5.minDate,
              s = _this$dp5.maxDate;
          if (!t && !s || !e) return;
          var _this$dp$parsedViewDa = this.dp.parsedViewDate,
              a = _this$dp$parsedViewDa.year,
              n = _this$dp$parsedViewDa.month,
              r = !!t && o(t),
              h = !!s && o(s);

          switch (this.dp.currentView) {
            case i.days:
              t && r.month >= n && r.year >= a && this._disableNav("prev"), s && h.month <= n && h.year <= a && this._disableNav("next");
              break;

            case i.months:
              t && r.year >= a && this._disableNav("prev"), s && h.year <= a && this._disableNav("next");
              break;

            case i.years:
              {
                var _e6 = d(this.dp.viewDate);

                t && r.year >= _e6[0] && this._disableNav("prev"), s && h.year <= _e6[1] && this._disableNav("next");
                break;
              }
          }
        }
      }, {
        key: "_disableNav",
        value: function _disableNav(e) {
          a('[data-action="' + e + '"]', this.$el).classList.add("-disabled-");
        }
      }, {
        key: "_resetNavStatus",
        value: function _resetNavStatus() {
          !function (e) {
            var _e$classList2;

            for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) {
              i[s - 1] = arguments[s];
            }

            e.length ? e.forEach(function (e) {
              var _e$classList;

              (_e$classList = e.classList).remove.apply(_e$classList, i);
            }) : (_e$classList2 = e.classList).remove.apply(_e$classList2, i);
          }(this.$el.querySelectorAll(".air-datepicker-nav--action"), "-disabled-");
        }
      }, {
        key: "_buildBaseHtml",
        value: function _buildBaseHtml() {
          var _this$opts5 = this.opts,
              e = _this$opts5.prevHtml,
              t = _this$opts5.nextHtml;
          this.$el.innerHTML = '<div class="air-datepicker-nav--action" data-action="prev">'.concat(e, "</div>") + '<div class="air-datepicker-nav--title"></div>' + '<div class="air-datepicker-nav--action" data-action="next">'.concat(t, "</div>");
        }
      }, {
        key: "isNavIsFunction",
        get: function get() {
          var e = this.opts.navTitles;
          return Object.keys(e).find(function (t) {
            return "function" == typeof e[t];
          });
        }
      }]);

      return F;
    }();

    var V = {
      today: {
        content: function content(e) {
          return e.locale.today;
        },
        onClick: function onClick(e) {
          return e.setViewDate(new Date());
        }
      },
      clear: {
        content: function content(e) {
          return e.locale.clear;
        },
        onClick: function onClick(e) {
          return e.clear();
        }
      }
    };

    var x = /*#__PURE__*/function () {
      function x(e) {
        _classCallCheck(this, x);

        var t = e.dp,
            i = e.opts;
        this.dp = t, this.opts = i, this.init();
      }

      _createClass(x, [{
        key: "init",
        value: function init() {
          this.createElement(), this.render();
        }
      }, {
        key: "createElement",
        value: function createElement() {
          this.$el = n({
            className: "air-datepicker-buttons"
          });
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.$el.parentNode.removeChild(this.$el);
        }
      }, {
        key: "clearHtml",
        value: function clearHtml() {
          return this.$el.innerHTML = "", this;
        }
      }, {
        key: "generateButtons",
        value: function generateButtons() {
          var _this4 = this;

          var e = this.opts.buttons;
          Array.isArray(e) || (e = [e]), e.forEach(function (e) {
            var t = e;
            "string" == typeof e && V[e] && (t = V[e]);

            var i = _this4.createButton(t);

            t.onClick && _this4.attachEventToButton(i, t.onClick), _this4.$el.appendChild(i);
          });
        }
      }, {
        key: "attachEventToButton",
        value: function attachEventToButton(e, t) {
          var _this5 = this;

          e.addEventListener("click", function () {
            t(_this5.dp);
          });
        }
      }, {
        key: "createButton",
        value: function createButton(e) {
          var t = e.content,
              i = e.className,
              _e$tagName = e.tagName,
              s = _e$tagName === void 0 ? "button" : _e$tagName,
              _e$attrs = e.attrs,
              a = _e$attrs === void 0 ? {} : _e$attrs,
              r = "function" == typeof t ? t(this.dp) : t;
          return n({
            tagName: s,
            innerHtml: "<span tabindex='-1'>".concat(r, "</span>"),
            className: c("air-datepicker-button", i),
            attrs: a
          });
        }
      }, {
        key: "render",
        value: function render() {
          this.generateButtons();
        }
      }]);

      return x;
    }();

    function H(e, t, i) {
      return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i, e;
    }

    var L = /*#__PURE__*/function () {
      function L() {
        var _this6 = this;

        _classCallCheck(this, L);

        var _ref3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = _ref3.opts,
            t = _ref3.dp;

        H(this, "toggleTimepickerIsActive", function (e) {
          _this6.dp.timepickerIsActive = e;
        }), H(this, "onChangeSelectedDate", function (e) {
          var t = e.date,
              _e$updateTime = e.updateTime,
              i = _e$updateTime === void 0 ? !1 : _e$updateTime;
          t && (_this6.setMinMaxTime(t), _this6.setCurrentTime(!!i && t), _this6.addTimeToDate(t));
        }), H(this, "onChangeLastSelectedDate", function (e) {
          e && (_this6.setTime(e), _this6.render());
        }), H(this, "onChangeInputRange", function (e) {
          var t = e.target;
          _this6[t.getAttribute("name")] = t.value, _this6.updateText(), _this6.dp.trigger(i.eventChangeTime, {
            hours: _this6.hours,
            minutes: _this6.minutes
          });
        }), H(this, "onMouseEnterLeave", function (e) {
          var t = e.target.getAttribute("name"),
              i = _this6.$minutesText;
          "hours" === t && (i = _this6.$hoursText), i.classList.toggle("-focus-");
        }), H(this, "onFocus", function () {
          _this6.toggleTimepickerIsActive(!0);
        }), H(this, "onBlur", function () {
          _this6.toggleTimepickerIsActive(!1);
        }), this.opts = e, this.dp = t;
        var s = this.dp.locale.timeFormat;
        s && (s.match(k("h")) || s.match(k("hh"))) && (this.ampm = !0), this.init();
      }

      _createClass(L, [{
        key: "init",
        value: function init() {
          this.setTime(this.dp.lastSelectedDate || this.dp.viewDate), this.createElement(), this.buildHtml(), this.defineDOM(), this.render(), this.bindDatepickerEvents(), this.bindDOMEvents();
        }
      }, {
        key: "bindDatepickerEvents",
        value: function bindDatepickerEvents() {
          this.dp.on(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.on(i.eventChangeLastSelectedDate, this.onChangeLastSelectedDate);
        }
      }, {
        key: "bindDOMEvents",
        value: function bindDOMEvents() {
          var e = "input";
          navigator.userAgent.match(/trident/gi) && (e = "change"), v(this.$ranges, e, this.onChangeInputRange), v(this.$ranges, "mouseenter", this.onMouseEnterLeave), v(this.$ranges, "mouseleave", this.onMouseEnterLeave), v(this.$ranges, "focus", this.onFocus), v(this.$ranges, "mousedown", this.onFocus), v(this.$ranges, "blur", this.onBlur);
        }
      }, {
        key: "createElement",
        value: function createElement() {
          this.$el = n({
            className: c("air-datepicker-time", {
              "-am-pm-": this.dp.ampm
            })
          });
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.dp.off(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.off(i.eventChangeLastSelectedDate, this.onChangeLastSelectedDate), this.$el.parentNode.removeChild(this.$el);
        }
      }, {
        key: "buildHtml",
        value: function buildHtml() {
          var e = this.ampm,
              t = this.hours,
              i = this.displayHours,
              s = this.minutes,
              a = this.minHours,
              n = this.minMinutes,
              r = this.maxHours,
              h = this.maxMinutes,
              o = this.dayPeriod,
              _this$opts6 = this.opts,
              d = _this$opts6.hoursStep,
              c = _this$opts6.minutesStep;
          this.$el.innerHTML = '<div class="air-datepicker-time--current">' + '   <span class="air-datepicker-time--current-hours">'.concat(l(i), "</span>") + '   <span class="air-datepicker-time--current-colon">:</span>' + '   <span class="air-datepicker-time--current-minutes">'.concat(l(s), "</span>") + "   ".concat(e ? "<span class='air-datepicker-time--current-ampm'>".concat(o, "</span>") : "") + '</div><div class="air-datepicker-time--sliders">   <div class="air-datepicker-time--row">' + '      <input type="range" name="hours" value="'.concat(t, '" min="').concat(a, '" max="').concat(r, '" step="').concat(d, '"/>') + '   </div>   <div class="air-datepicker-time--row">' + '      <input type="range" name="minutes" value="'.concat(s, '" min="').concat(n, '" max="').concat(h, '" step="').concat(c, '"/>') + "   </div></div>";
        }
      }, {
        key: "defineDOM",
        value: function defineDOM() {
          var _this7 = this;

          var e = function e(_e7) {
            return a(_e7, _this7.$el);
          };

          this.$ranges = this.$el.querySelectorAll('[type="range"]'), this.$hours = e('[name="hours"]'), this.$minutes = e('[name="minutes"]'), this.$hoursText = e(".air-datepicker-time--current-hours"), this.$minutesText = e(".air-datepicker-time--current-minutes"), this.$ampm = e(".air-datepicker-time--current-ampm");
        }
      }, {
        key: "setTime",
        value: function setTime(e) {
          this.setMinMaxTime(e), this.setCurrentTime(e);
        }
      }, {
        key: "addTimeToDate",
        value: function addTimeToDate(e) {
          e && (e.setHours(this.hours), e.setMinutes(this.minutes));
        }
      }, {
        key: "setMinMaxTime",
        value: function setMinMaxTime(e) {
          if (this.setMinMaxTimeFromOptions(), e) {
            var _this$dp6 = this.dp,
                _t4 = _this$dp6.minDate,
                _i7 = _this$dp6.maxDate;
            _t4 && u(e, _t4) && this.setMinTimeFromMinDate(_t4), _i7 && u(e, _i7) && this.setMaxTimeFromMaxDate(_i7);
          }
        }
      }, {
        key: "setCurrentTime",
        value: function setCurrentTime(e) {
          var _ref4 = e ? o(e) : this,
              t = _ref4.hours,
              i = _ref4.minutes;

          this.hours = f(t, this.minHours, this.maxHours), this.minutes = f(i, this.minMinutes, this.maxMinutes);
        }
      }, {
        key: "setMinMaxTimeFromOptions",
        value: function setMinMaxTimeFromOptions() {
          var _this$opts7 = this.opts,
              e = _this$opts7.minHours,
              t = _this$opts7.minMinutes,
              i = _this$opts7.maxHours,
              s = _this$opts7.maxMinutes;
          this.minHours = f(e, 0, 23), this.minMinutes = f(t, 0, 59), this.maxHours = f(i, 0, 23), this.maxMinutes = f(s, 0, 59);
        }
      }, {
        key: "setMinTimeFromMinDate",
        value: function setMinTimeFromMinDate(e) {
          var t = this.dp.lastSelectedDate;
          this.minHours = e.getHours(), t && t.getHours() > e.getHours() ? this.minMinutes = this.opts.minMinutes : this.minMinutes = e.getMinutes();
        }
      }, {
        key: "setMaxTimeFromMaxDate",
        value: function setMaxTimeFromMaxDate(e) {
          var t = this.dp.lastSelectedDate;
          this.maxHours = e.getHours(), t && t.getHours() < e.getHours() ? this.maxMinutes = this.opts.maxMinutes : this.maxMinutes = e.getMinutes();
        }
      }, {
        key: "getDayPeriod",
        value: function getDayPeriod(e, t) {
          var i = e,
              s = Number(e);
          e instanceof Date && (i = o(e), s = Number(i.hours));
          var a = "am";

          if (t || this.ampm) {
            switch (!0) {
              case 12 === s:
              case s > 11:
                a = "pm";
            }

            s = s % 12 == 0 ? 12 : s % 12;
          }

          return {
            hours: s,
            dayPeriod: a
          };
        }
      }, {
        key: "updateSliders",
        value: function updateSliders() {
          r(this.$hours, {
            min: this.minHours,
            max: this.maxHours
          }).value = this.hours, r(this.$minutes, {
            min: this.minMinutes,
            max: this.maxMinutes
          }).value = this.minutes;
        }
      }, {
        key: "updateText",
        value: function updateText() {
          this.$hoursText.innerHTML = l(this.displayHours), this.$minutesText.innerHTML = l(this.minutes), this.ampm && (this.$ampm.innerHTML = this.dayPeriod);
        }
      }, {
        key: "hours",
        get: function get() {
          return this._hours;
        },
        set: function set(e) {
          this._hours = e;

          var _this$getDayPeriod = this.getDayPeriod(e),
              t = _this$getDayPeriod.hours,
              i = _this$getDayPeriod.dayPeriod;

          this.displayHours = t, this.dayPeriod = i;
        }
      }, {
        key: "render",
        value: function render() {
          this.updateSliders(), this.updateText();
        }
      }]);

      return L;
    }();

    function O(e, t, i) {
      return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i, e;
    }

    var A = /*#__PURE__*/function () {
      function A(e) {
        var _this8 = this;

        _classCallCheck(this, A);

        var t = e.dp,
            i = e.opts;
        O(this, "pressedKeys", new Set()), O(this, "hotKeys", new Map([[[["Control", "ArrowRight"], ["Control", "ArrowUp"]], function (e) {
          return e.month++;
        }], [[["Control", "ArrowLeft"], ["Control", "ArrowDown"]], function (e) {
          return e.month--;
        }], [[["Shift", "ArrowRight"], ["Shift", "ArrowUp"]], function (e) {
          return e.year++;
        }], [[["Shift", "ArrowLeft"], ["Shift", "ArrowDown"]], function (e) {
          return e.year--;
        }], [[["Alt", "ArrowRight"], ["Alt", "ArrowUp"]], function (e) {
          return e.year += 10;
        }], [[["Alt", "ArrowLeft"], ["Alt", "ArrowDown"]], function (e) {
          return e.year -= 10;
        }], [["Control", "Shift", "ArrowUp"], function (e, t) {
          return t.up();
        }]])), O(this, "handleHotKey", function (e) {
          var t = _this8.hotKeys.get(e),
              i = o(_this8.getInitialFocusDate());

          t(i, _this8.dp);
          var s = i.year,
              a = i.month,
              n = i.date,
              r = h(new Date(s, a));
          r < n && (n = r);

          var l = _this8.dp.getClampedDate(new Date(s, a, n));

          _this8.dp.setFocusDate(l, {
            viewDateTransition: !0
          });
        }), O(this, "isHotKeyPressed", function () {
          var e = !1,
              t = _this8.pressedKeys.size,
              i = function i(e) {
            return _this8.pressedKeys.has(e);
          };

          var _iterator = _createForOfIteratorHelper(_this8.hotKeys),
              _step;

          try {
            var _loop = function _loop() {
              var _step$value = _slicedToArray(_step.value, 1),
                  s = _step$value[0];

              if (e) return "break";
              if (Array.isArray(s[0])) s.forEach(function (a) {
                e || t !== a.length || (e = a.every(i) && s);
              });else {
                if (t !== s.length) return "continue";
                e = s.every(i) && s;
              }
            };

            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _ret = _loop();

              if (_ret === "break") break;
              if (_ret === "continue") continue;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return e;
        }), O(this, "isArrow", function (e) {
          return e >= 37 && e <= 40;
        }), O(this, "onKeyDown", function (e) {
          var t = e.key,
              i = e.which,
              s = _this8.dp,
              a = _this8.dp.focusDate,
              n = _this8.opts;

          _this8.registerKey(t);

          var r = _this8.isHotKeyPressed();

          if (r) return e.preventDefault(), void _this8.handleHotKey(r);
          if (_this8.isArrow(i)) return e.preventDefault(), void _this8.focusNextCell(t);

          if ("Enter" === t) {
            if (s.currentView !== n.minView) return void s.down();

            if (a) {
              var _e8 = s._checkIfDateIsSelected(a);

              return void (_e8 ? s._handleAlreadySelectedDates(_e8, a) : s.selectDate(a));
            }
          }

          "Escape" === t && _this8.dp.hide();
        }), O(this, "onKeyUp", function (e) {
          _this8.removeKey(e.key);
        }), this.dp = t, this.opts = i, this.init();
      }

      _createClass(A, [{
        key: "init",
        value: function init() {
          this.bindKeyboardEvents();
        }
      }, {
        key: "bindKeyboardEvents",
        value: function bindKeyboardEvents() {
          var e = this.dp.$el;
          e.addEventListener("keydown", this.onKeyDown), e.addEventListener("keyup", this.onKeyUp);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          var e = this.dp.$el;
          e.removeEventListener("keydown", this.onKeyDown), e.removeEventListener("keyup", this.onKeyUp), this.hotKeys = null, this.pressedKeys = null;
        }
      }, {
        key: "getInitialFocusDate",
        value: function getInitialFocusDate() {
          var _this$dp7 = this.dp,
              e = _this$dp7.focusDate,
              t = _this$dp7.currentView,
              s = _this$dp7.selectedDates,
              _this$dp7$parsedViewD = _this$dp7.parsedViewDate,
              a = _this$dp7$parsedViewD.year,
              n = _this$dp7$parsedViewD.month,
              r = e || s[s.length - 1];
          if (!r) switch (t) {
            case i.days:
              r = new Date(a, n, new Date().getDate());
              break;

            case i.months:
              r = new Date(a, n, 1);
              break;

            case i.years:
              r = new Date(a, 0, 1);
          }
          return r;
        }
      }, {
        key: "focusNextCell",
        value: function focusNextCell(e) {
          var t = this.getInitialFocusDate(),
              s = this.dp.currentView,
              a = i.days,
              n = i.months,
              r = i.years,
              h = o(t),
              l = h.year,
              d = h.month,
              c = h.date;

          switch (e) {
            case "ArrowLeft":
              s === a && (c -= 1), s === n && (d -= 1), s === r && (l -= 1);
              break;

            case "ArrowUp":
              s === a && (c -= 7), s === n && (d -= 3), s === r && (l -= 4);
              break;

            case "ArrowRight":
              s === a && (c += 1), s === n && (d += 1), s === r && (l += 1);
              break;

            case "ArrowDown":
              s === a && (c += 7), s === n && (d += 3), s === r && (l += 4);
          }

          var u = this.dp.getClampedDate(new Date(l, d, c));
          this.dp.setFocusDate(u, {
            viewDateTransition: !0
          });
        }
      }, {
        key: "registerKey",
        value: function registerKey(e) {
          this.pressedKeys.add(e);
        }
      }, {
        key: "removeKey",
        value: function removeKey(e) {
          this.pressedKeys.delete(e);
        }
      }]);

      return A;
    }();

    var E = {
      on: function on(e, t) {
        this.__events || (this.__events = {}), this.__events[e] ? this.__events[e].push(t) : this.__events[e] = [t];
      },
      off: function off(e, t) {
        this.__events && this.__events[e] && (this.__events[e] = this.__events[e].filter(function (e) {
          return e !== t;
        }));
      },
      removeAllEvents: function removeAllEvents() {
        this.__events = {};
      },
      trigger: function trigger(e) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) {
          i[s - 1] = arguments[s];
        }

        this.__events && this.__events[e] && this.__events[e].forEach(function (e) {
          e.apply(void 0, i);
        });
      }
    };

    function N(e, t, i) {
      return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i, e;
    }

    var I = "",
        R = "",
        P = "",
        B = !1;

    var K = /*#__PURE__*/function () {
      function K(e, t) {
        var _this9 = this;

        _classCallCheck(this, K);

        var r = this;
        if (N(this, "viewIndexes", [i.days, i.months, i.years]), N(this, "next", function () {
          var _this9$parsedViewDate = _this9.parsedViewDate,
              e = _this9$parsedViewDate.year,
              t = _this9$parsedViewDate.month;

          switch (_this9.currentView) {
            case i.days:
              _this9.setViewDate(new Date(e, t + 1, 1));

              break;

            case i.months:
              _this9.setViewDate(new Date(e + 1, t, 1));

              break;

            case i.years:
              _this9.setViewDate(new Date(e + 10, 0, 1));

          }
        }), N(this, "prev", function () {
          var _this9$parsedViewDate2 = _this9.parsedViewDate,
              e = _this9$parsedViewDate2.year,
              t = _this9$parsedViewDate2.month;

          switch (_this9.currentView) {
            case i.days:
              _this9.setViewDate(new Date(e, t - 1, 1));

              break;

            case i.months:
              _this9.setViewDate(new Date(e - 1, t, 1));

              break;

            case i.years:
              _this9.setViewDate(new Date(e - 10, 0, 1));

          }
        }), N(this, "_finishHide", function () {
          _this9.hideAnimation = !1, _this9._destroyComponents(), _this9.$container.removeChild(_this9.$datepicker);
        }), N(this, "setPosition", function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if ("function" == typeof (e = e || r.opts.position)) return void (r.customHide = e({
            $datepicker: r.$datepicker,
            $target: r.$el,
            $pointer: r.$pointer,
            isViewChange: t,
            done: r._finishHide
          }));
          var i,
              s,
              a = r.opts.isMobile,
              n = r.$el.getBoundingClientRect(),
              h = r.$el.getBoundingClientRect(),
              o = r.$datepicker.offsetParent,
              l = r.$el.offsetParent,
              d = r.$datepicker.getBoundingClientRect(),
              c = e.split(" "),
              u = window.scrollY,
              p = window.scrollX,
              m = r.opts.offset,
              g = c[0],
              D = c[1];
          if (a) r.$datepicker.style.cssText = "left: 50%; top: 50%";else {
            if (o === l && o !== document.body && (h = {
              top: r.$el.offsetTop,
              left: r.$el.offsetLeft,
              width: n.width,
              height: r.$el.offsetHeight
            }, u = 0, p = 0), o !== l && o !== document.body) {
              var _e9 = o.getBoundingClientRect();

              h = {
                top: n.top - _e9.top,
                left: n.left - _e9.left,
                width: n.width,
                height: n.height
              }, u = 0, p = 0;
            }

            switch (g) {
              case "top":
                i = h.top - d.height - m;
                break;

              case "right":
                s = h.left + h.width + m;
                break;

              case "bottom":
                i = h.top + h.height + m;
                break;

              case "left":
                s = h.left - d.width - m;
            }

            switch (D) {
              case "top":
                i = h.top;
                break;

              case "right":
                s = h.left + h.width - d.width;
                break;

              case "bottom":
                i = h.top + h.height - d.height;
                break;

              case "left":
                s = h.left;
                break;

              case "center":
                /left|right/.test(g) ? i = h.top + h.height / 2 - d.height / 2 : s = h.left + h.width / 2 - d.width / 2;
            }

            r.$datepicker.style.cssText = "left: ".concat(s + p, "px; top: ").concat(i + u, "px");
          }
        }), N(this, "_setInputValue", function () {
          var e = _this9.opts,
              t = _this9.$altField,
              i = _this9.locale.dateFormat,
              s = e.altFieldDateFormat,
              a = e.altField;
          a && t && (t.value = _this9._getInputValue(s)), _this9.$el.value = _this9._getInputValue(i);
        }), N(this, "_getInputValue", function (e) {
          var t = _this9.selectedDates,
              i = _this9.opts,
              s = i.multipleDates,
              a = i.multipleDatesSeparator;
          if (!t.length) return "";
          var n = "function" == typeof e,
              r = n ? e(s ? t : t[0]) : t.map(function (t) {
            return _this9.formatDate(t, e);
          });
          return r = n ? r : r.join(a), r;
        }), N(this, "_checkIfDateIsSelected", function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.days,
              s = !1;
          return r.selectedDates.some(function (i) {
            var a = u(e, i, t);
            return s = a && i, a;
          }), s;
        }), N(this, "_scheduleCallAfterTransition", function (e) {
          _this9._cancelScheduledCall(), e && e(!1), _this9._onTransitionEnd = function () {
            e && e(!0);
          }, _this9.$datepicker.addEventListener("transitionend", _this9._onTransitionEnd, {
            once: !0
          });
        }), N(this, "_cancelScheduledCall", function () {
          _this9.$datepicker.removeEventListener("transitionend", _this9._onTransitionEnd);
        }), N(this, "setViewDate", function (e) {
          if (!((e = b(e)) instanceof Date)) return;
          if (u(e, _this9.viewDate)) return;
          var t = _this9.viewDate;
          _this9.viewDate = e;
          var s = _this9.opts.onChangeViewDate;

          if (s) {
            var _this9$parsedViewDate3 = _this9.parsedViewDate,
                _e10 = _this9$parsedViewDate3.month,
                _t5 = _this9$parsedViewDate3.year;
            s({
              month: _e10,
              year: _t5,
              decade: _this9.curDecade
            });
          }

          _this9.trigger(i.eventChangeViewDate, e, t);
        }), N(this, "setFocusDate", function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (!e || (e = b(e)) instanceof Date) && (r.focusDate = e, r.opts.range && e && r._handleRangeOnFocus(), r.trigger(i.eventChangeFocusDate, e, t));
        }), N(this, "setCurrentView", function (e) {
          if (_this9.viewIndexes.includes(e)) {
            if (_this9.currentView = e, _this9.elIsInput && _this9.visible && _this9.setPosition(void 0, !0), _this9.trigger(i.eventChangeCurrentView, e), !_this9.views[e]) {
              var _t6 = _this9.views[e] = new S({
                dp: _this9,
                opts: _this9.opts,
                type: e
              });

              _this9.shouldUpdateDOM && _this9.$content.appendChild(_t6.$el);
            }

            _this9.opts.onChangeView && _this9.opts.onChangeView(e);
          }
        }), N(this, "_updateLastSelectedDate", function (e) {
          _this9.lastSelectedDate = e, _this9.trigger(i.eventChangeLastSelectedDate, e);
        }), N(this, "destroy", function () {
          var _this9$opts = _this9.opts,
              e = _this9$opts.showEvent,
              t = _this9$opts.isMobile,
              i = _this9.$datepicker.parentNode;
          i && i.removeChild(_this9.$datepicker), _this9.$el.removeEventListener(e, _this9._onFocus), _this9.$el.removeEventListener("blur", _this9._onBlur), window.removeEventListener("resize", _this9._onResize), t && _this9._removeMobileAttributes(), _this9.keyboardNav && _this9.keyboardNav.destroy(), _this9.views = null, _this9.nav = null, _this9.$datepicker = null, _this9.opts = null, _this9.$customContainer = null, _this9.viewDate = null, _this9.focusDate = null, _this9.selectedDates = null, _this9.rangeDateFrom = null, _this9.rangeDateTo = null;
        }), N(this, "update", function (e) {
          var t = w({}, _this9.opts);
          w(_this9.opts, e);
          var _this9$opts2 = _this9.opts,
              s = _this9$opts2.timepicker,
              a = _this9$opts2.buttons,
              n = _this9$opts2.range,
              r = _this9$opts2.selectedDates,
              h = _this9$opts2.isMobile,
              o = _this9.visible || _this9.treatAsInline;
          _this9._createMinMaxDates(), _this9._limitViewDateByMaxMinDates(), _this9._handleLocale(), !t.selectedDates && r && _this9.selectDate(r), e.view && _this9.setCurrentView(e.view), _this9._setInputValue(), t.range && !n ? (_this9.rangeDateTo = !1, _this9.rangeDateFrom = !1) : !t.range && n && _this9.selectedDates.length && (_this9.rangeDateFrom = _this9.selectedDates[0], _this9.rangeDateTo = _this9.selectedDates[1]), t.timepicker && !s ? (o && _this9.timepicker.destroy(), _this9.timepicker = !1, _this9.$timepicker.parentNode.removeChild(_this9.$timepicker)) : !t.timepicker && s && _this9._addTimepicker(), !t.buttons && a ? _this9._addButtons() : t.buttons && !a ? (_this9.buttons.destroy(), _this9.$buttons.parentNode.removeChild(_this9.$buttons)) : o && t.buttons && a && _this9.buttons.clearHtml().render(), !t.isMobile && h ? (_this9.treatAsInline || P || _this9._createMobileOverlay(), _this9._addMobileAttributes(), _this9.visible && _this9._showMobileOverlay()) : t.isMobile && !h && (_this9._removeMobileAttributes(), _this9.visible && (P.classList.remove("-active-"), "function" != typeof _this9.opts.position && _this9.setPosition())), o && (_this9.nav.update(), _this9.views[_this9.currentView].render(), _this9.currentView === i.days && _this9.views[_this9.currentView].renderDayNames());
        }), N(this, "isOtherMonth", function (e) {
          var _o11 = o(e),
              t = _o11.month;

          return t !== _this9.parsedViewDate.month;
        }), N(this, "isOtherYear", function (e) {
          var _o12 = o(e),
              t = _o12.year;

          return t !== _this9.parsedViewDate.year;
        }), N(this, "isOtherDecade", function (e) {
          var _o13 = o(e),
              t = _o13.year,
              _d2 = d(_this9.viewDate),
              _d3 = _slicedToArray(_d2, 2),
              i = _d3[0],
              s = _d3[1];

          return t < i || t > s;
        }), N(this, "_onChangeSelectedDate", function (e) {
          var t = e.silent;
          setTimeout(function () {
            _this9._setInputValue(), _this9.opts.onSelect && !t && _this9._triggerOnSelect();
          });
        }), N(this, "_onChangeFocusedDate", function (e) {
          var _ref5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              t = _ref5.viewDateTransition;

          if (!e) return;
          var i = !1;
          t && (i = r.isOtherMonth(e) || r.isOtherYear(e) || r.isOtherDecade(e)), i && r.setViewDate(e);
        }), N(this, "_onChangeTime", function (e) {
          var t = e.hours,
              i = e.minutes,
              s = new Date(),
              a = _this9.lastSelectedDate,
              n = _this9.opts.onSelect,
              r = a;
          a || (r = s);

          var h = _this9.getCell(r, _this9.currentViewSingular),
              o = h && h.adpCell;

          o && o.isDisabled || (r.setHours(t), r.setMinutes(i), a ? (_this9._setInputValue(), n && _this9._triggerOnSelect()) : _this9.selectDate(r));
        }), N(this, "_onFocus", function (e) {
          _this9.visible || _this9.show();
        }), N(this, "_onBlur", function (e) {
          _this9.inFocus || !_this9.visible || _this9.opts.isMobile || _this9.hide();
        }), N(this, "_onMouseDown", function (e) {
          _this9.inFocus = !0;
        }), N(this, "_onMouseUp", function (e) {
          _this9.inFocus = !1, _this9.$el.focus();
        }), N(this, "_onResize", function () {
          _this9.visible && "function" != typeof _this9.opts.position && _this9.setPosition();
        }), N(this, "_onClickOverlay", function () {
          _this9.visible && _this9.hide();
        }), N(this, "isWeekend", function (e) {
          return _this9.opts.weekends.includes(e);
        }), N(this, "getClampedDate", function (e) {
          var t = _this9.minDate,
              i = _this9.maxDate,
              s = e;
          return i && p(e, i) ? s = i : t && m(e, t) && (s = t), s;
        }), this.$el = a(e), !this.$el) return;
        this.$datepicker = n({
          className: "air-datepicker"
        }), this.opts = w({}, s, t), this.$customContainer = !!this.opts.container && a(this.opts.container), this.$altField = a(this.opts.altField || !1), I || (I = a("body"));
        var _this$opts8 = this.opts,
            h = _this$opts8.view,
            l = _this$opts8.startDate;
        l || (this.opts.startDate = new Date()), "INPUT" === this.$el.nodeName && (this.elIsInput = !0), this.inited = !1, this.visible = !1, this.viewDate = b(this.opts.startDate), this.focusDate = !1, this.initialReadonly = this.$el.getAttribute("readonly"), this.customHide = !1, this.currentView = h, this.selectedDates = [], this.views = {}, this.keys = [], this.rangeDateFrom = "", this.rangeDateTo = "", this.timepickerIsActive = !1, this.treatAsInline = this.opts.inline || !this.elIsInput, this.init();
      }

      _createClass(K, [{
        key: "init",
        value: function init() {
          var e = this.opts,
              t = this.treatAsInline,
              _this$opts9 = this.opts,
              i = _this$opts9.inline,
              s = _this$opts9.isMobile,
              a = _this$opts9.selectedDates,
              r = _this$opts9.keyboardNav,
              h = _this$opts9.onlyTimepicker;
          var o;
          B || i || !this.elIsInput || (B = !0, R = n({
            className: o = K.defaultContainerId,
            id: o
          }), I.appendChild(R)), !s || P || t || this._createMobileOverlay(), this._handleLocale(), this._bindSubEvents(), this._createMinMaxDates(), this._limitViewDateByMaxMinDates(), this.elIsInput && (i || this._bindEvents(), r && !h && (this.keyboardNav = new A({
            dp: this,
            opts: e
          }))), a && this.selectDate(a, {
            silent: !0
          }), this.opts.visible && !t && this.show(), s && !t && this.$el.setAttribute("readonly", !0), t && this._createComponents();
        }
      }, {
        key: "_createMobileOverlay",
        value: function _createMobileOverlay() {
          P = n({
            className: "air-datepicker-overlay"
          }), R.appendChild(P);
        }
      }, {
        key: "_createComponents",
        value: function _createComponents() {
          var _this$$datepicker$cla;

          var e = this.opts,
              t = this.treatAsInline,
              _this$opts10 = this.opts,
              i = _this$opts10.inline,
              s = _this$opts10.buttons,
              a = _this$opts10.timepicker,
              n = _this$opts10.position,
              r = _this$opts10.classes,
              h = _this$opts10.onlyTimepicker,
              o = _this$opts10.isMobile;
          this._buildBaseHtml(), this.elIsInput && (i || this._setPositionClasses(n)), !i && this.elIsInput || this.$datepicker.classList.add("-inline-"), r && (_this$$datepicker$cla = this.$datepicker.classList).add.apply(_this$$datepicker$cla, _toConsumableArray(r.split(" "))), h && this.$datepicker.classList.add("-only-timepicker-"), o && !t && this._addMobileAttributes(), this.views[this.currentView] = new S({
            dp: this,
            type: this.currentView,
            opts: e
          }), this.nav = new F({
            dp: this,
            opts: e
          }), a && this._addTimepicker(), s && this._addButtons(), this.$content.appendChild(this.views[this.currentView].$el), this.$nav.appendChild(this.nav.$el);
        }
      }, {
        key: "_destroyComponents",
        value: function _destroyComponents() {
          for (var _e11 in this.views) {
            this.views[_e11].destroy();
          }

          this.views = {}, this.nav.destroy(), this.timepicker && this.timepicker.destroy();
        }
      }, {
        key: "_addMobileAttributes",
        value: function _addMobileAttributes() {
          P.addEventListener("click", this._onClickOverlay), this.$datepicker.classList.add("-is-mobile-"), this.$el.setAttribute("readonly", !0);
        }
      }, {
        key: "_removeMobileAttributes",
        value: function _removeMobileAttributes() {
          P.removeEventListener("click", this._onClickOverlay), this.$datepicker.classList.remove("-is-mobile-"), this.initialReadonly || "" === this.initialReadonly || this.$el.removeAttribute("readonly");
        }
      }, {
        key: "_createMinMaxDates",
        value: function _createMinMaxDates() {
          var _this$opts11 = this.opts,
              e = _this$opts11.minDate,
              t = _this$opts11.maxDate;
          this.minDate = !!e && b(e), this.maxDate = !!t && b(t);
        }
      }, {
        key: "_addTimepicker",
        value: function _addTimepicker() {
          this.$timepicker = n({
            className: "air-datepicker--time"
          }), this.$datepicker.appendChild(this.$timepicker), this.timepicker = new L({
            dp: this,
            opts: this.opts
          }), this.$timepicker.appendChild(this.timepicker.$el);
        }
      }, {
        key: "_addButtons",
        value: function _addButtons() {
          this.$buttons = n({
            className: "air-datepicker--buttons"
          }), this.$datepicker.appendChild(this.$buttons), this.buttons = new x({
            dp: this,
            opts: this.opts
          }), this.$buttons.appendChild(this.buttons.$el);
        }
      }, {
        key: "_bindSubEvents",
        value: function _bindSubEvents() {
          this.on(i.eventChangeSelectedDate, this._onChangeSelectedDate), this.on(i.eventChangeFocusDate, this._onChangeFocusedDate), this.on(i.eventChangeTime, this._onChangeTime);
        }
      }, {
        key: "_buildBaseHtml",
        value: function _buildBaseHtml() {
          var e = this.opts.inline;
          var t, i;
          this.elIsInput ? e ? (t = this.$datepicker, (i = this.$el).parentNode.insertBefore(t, i.nextSibling)) : this.$container.appendChild(this.$datepicker) : this.$el.appendChild(this.$datepicker), this.$datepicker.innerHTML = '<i class="air-datepicker--pointer"></i><div class="air-datepicker--navigation"></div><div class="air-datepicker--content"></div>', this.$content = a(".air-datepicker--content", this.$datepicker), this.$pointer = a(".air-datepicker--pointer", this.$datepicker), this.$nav = a(".air-datepicker--navigation", this.$datepicker);
        }
      }, {
        key: "_handleLocale",
        value: function _handleLocale() {
          var _this$opts12 = this.opts,
              e = _this$opts12.locale,
              t = _this$opts12.dateFormat,
              i = _this$opts12.firstDay,
              s = _this$opts12.timepicker,
              a = _this$opts12.onlyTimepicker,
              n = _this$opts12.timeFormat,
              r = _this$opts12.dateTimeSeparator;
          var h;
          this.locale = (h = e, JSON.parse(JSON.stringify(h))), t && (this.locale.dateFormat = t), void 0 !== n && "" !== n && (this.locale.timeFormat = n);
          var o = this.locale.timeFormat;

          if ("" !== i && (this.locale.firstDay = i), s && "function" != typeof t) {
            var _e12 = o ? r : "";

            this.locale.dateFormat = [this.locale.dateFormat, o || ""].join(_e12);
          }

          a && (this.locale.dateFormat = this.locale.timeFormat);
        }
      }, {
        key: "_setPositionClasses",
        value: function _setPositionClasses(e) {
          var _this$$datepicker$cla2;

          if ("function" == typeof e) return void this.$datepicker.classList.add("-custom-position-");
          var t = (e = e.split(" "))[0],
              i = e[1],
              s = "air-datepicker -".concat(t, "-").concat(i, "- -from-").concat(t, "-");

          (_this$$datepicker$cla2 = this.$datepicker.classList).add.apply(_this$$datepicker$cla2, _toConsumableArray(s.split(" ")));
        }
      }, {
        key: "_bindEvents",
        value: function _bindEvents() {
          this.$el.addEventListener(this.opts.showEvent, this._onFocus), this.$el.addEventListener("blur", this._onBlur), this.$datepicker.addEventListener("mousedown", this._onMouseDown), this.$datepicker.addEventListener("mouseup", this._onMouseUp), window.addEventListener("resize", this._onResize);
        }
      }, {
        key: "_limitViewDateByMaxMinDates",
        value: function _limitViewDateByMaxMinDates() {
          var e = this.viewDate,
              t = this.minDate,
              i = this.maxDate;
          i && p(e, i) && this.setViewDate(i), t && m(e, t) && this.setViewDate(t);
        }
      }, {
        key: "formatDate",
        value: function formatDate() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.viewDate,
              t = arguments.length > 1 ? arguments[1] : void 0;
          if (e = b(e), !(e instanceof Date)) return;
          var i = t,
              s = this.locale,
              a = o(e),
              n = d(e),
              r = K.replacer,
              h = "am";
          this.opts.timepicker && this.timepicker && (h = this.timepicker.getDayPeriod(e).dayPeriod);
          var l = {
            T: e.getTime(),
            m: a.minutes,
            mm: a.fullMinutes,
            h: a.hours12,
            hh: a.fullHours12,
            H: a.hours,
            HH: a.fullHours,
            aa: h,
            AA: h.toUpperCase(),
            E: s.daysShort[a.day],
            EEEE: s.days[a.day],
            d: a.date,
            dd: a.fullDate,
            M: a.month + 1,
            MM: a.fullMonth,
            MMM: s.monthsShort[a.month],
            MMMM: s.months[a.month],
            yy: a.year.toString().slice(-2),
            yyyy: a.year,
            yyyy1: n[0],
            yyyy2: n[1]
          };

          for (var _i8 = 0, _Object$entries3 = Object.entries(l); _i8 < _Object$entries3.length; _i8++) {
            var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i8], 2),
                _e13 = _Object$entries3$_i[0],
                _t7 = _Object$entries3$_i[1];

            i = r(i, k(_e13), _t7);
          }

          return i;
        }
      }, {
        key: "down",
        value: function down(e) {
          this._handleUpDownActions(e, "down");
        }
      }, {
        key: "up",
        value: function up(e) {
          this._handleUpDownActions(e, "up");
        }
      }, {
        key: "selectDate",
        value: function selectDate(e) {
          var _this10 = this;

          var t,
              s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              a = this.currentView,
              n = this.parsedViewDate,
              r = this.selectedDates,
              h = s.updateTime,
              _this$opts13 = this.opts,
              o = _this$opts13.moveToOtherMonthsOnSelect,
              l = _this$opts13.moveToOtherYearsOnSelect,
              d = _this$opts13.multipleDates,
              c = _this$opts13.range,
              u = _this$opts13.autoClose,
              m = r.length;
          if (Array.isArray(e)) return e.forEach(function (e) {
            _this10.selectDate(e, s);
          }), new Promise(function (e) {
            setTimeout(e);
          });

          if ((e = b(e)) instanceof Date) {
            if (a === i.days && e.getMonth() !== n.month && o && (t = new Date(e.getFullYear(), e.getMonth(), 1)), a === i.years && e.getFullYear() !== n.year && l && (t = new Date(e.getFullYear(), 0, 1)), t && this.setViewDate(t), d && !c) {
              if (m === d) return;
              this._checkIfDateIsSelected(e) || r.push(e);
            } else if (c) switch (m) {
              case 1:
                r.push(e), this.rangeDateTo || (this.rangeDateTo = e), p(this.rangeDateFrom, this.rangeDateTo) && (this.rangeDateTo = this.rangeDateFrom, this.rangeDateFrom = e), this.selectedDates = [this.rangeDateFrom, this.rangeDateTo];
                break;

              case 2:
                this.selectedDates = [e], this.rangeDateFrom = e, this.rangeDateTo = "";
                break;

              default:
                this.selectedDates = [e], this.rangeDateFrom = e;
            } else this.selectedDates = [e];

            return this.trigger(i.eventChangeSelectedDate, {
              action: i.actionSelectDate,
              silent: null == s ? void 0 : s.silent,
              date: e,
              updateTime: h
            }), this._updateLastSelectedDate(e), u && !this.timepickerIsActive && this.visible && (d || c ? c && 1 === m && this.hide() : this.hide()), new Promise(function (e) {
              setTimeout(e);
            });
          }
        }
      }, {
        key: "unselectDate",
        value: function unselectDate(e) {
          var _this11 = this;

          var t = this.selectedDates,
              s = this;
          if ((e = b(e)) instanceof Date) return t.some(function (a, n) {
            if (u(a, e)) return t.splice(n, 1), s.selectedDates.length ? s._updateLastSelectedDate(s.selectedDates[s.selectedDates.length - 1]) : (s.rangeDateFrom = "", s.rangeDateTo = "", s._updateLastSelectedDate(!1)), _this11.trigger(i.eventChangeSelectedDate, {
              action: i.actionUnselectDate,
              date: e
            }), !0;
          });
        }
      }, {
        key: "replaceDate",
        value: function replaceDate(e, t) {
          var _this12 = this;

          var s = this.selectedDates.find(function (t) {
            return u(t, e, _this12.currentView);
          }),
              a = this.selectedDates.indexOf(s);
          a < 0 || u(this.selectedDates[a], t, this.currentView) || (this.selectedDates[a] = t, this.trigger(i.eventChangeSelectedDate, {
            action: i.actionSelectDate,
            date: t,
            updateTime: !0
          }), this._updateLastSelectedDate(t));
        }
      }, {
        key: "clear",
        value: function clear() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return this.selectedDates = [], this.rangeDateFrom = !1, this.rangeDateTo = !1, this.trigger(i.eventChangeSelectedDate, {
            action: i.actionUnselectDate,
            silent: e.silent
          }), new Promise(function (e) {
            setTimeout(e);
          });
        }
      }, {
        key: "show",
        value: function show() {
          var _this$opts14 = this.opts,
              e = _this$opts14.onShow,
              t = _this$opts14.isMobile;
          this._cancelScheduledCall(), this.visible || this.hideAnimation || this._createComponents(), this.setPosition(this.opts.position), this.$datepicker.classList.add("-active-"), this.visible = !0, e && this._scheduleCallAfterTransition(e), t && this._showMobileOverlay();
        }
      }, {
        key: "hide",
        value: function hide() {
          var _this13 = this;

          var _this$opts15 = this.opts,
              e = _this$opts15.onHide,
              t = _this$opts15.isMobile,
              i = this._hasTransition();

          this.visible = !1, this.hideAnimation = !0, this.$datepicker.classList.remove("-active-"), this.customHide && this.customHide(), this.elIsInput && this.$el.blur(), this._scheduleCallAfterTransition(function (t) {
            !_this13.customHide && (t && i || !t && !i) && _this13._finishHide(), e && e(t);
          }), t && P.classList.remove("-active-");
        }
      }, {
        key: "_triggerOnSelect",
        value: function _triggerOnSelect() {
          var _this14 = this;

          var e = [],
              t = [],
              i = this.selectedDates,
              s = this.locale,
              _this$opts16 = this.opts,
              a = _this$opts16.onSelect,
              n = _this$opts16.multipleDates,
              r = _this$opts16.range,
              h = n || r,
              o = "function" == typeof s.dateFormat;
          i.length && (e = i.map(g), t = o ? n ? s.dateFormat(e) : e.map(function (e) {
            return s.dateFormat(e);
          }) : e.map(function (e) {
            return _this14.formatDate(e, s.dateFormat);
          })), a({
            date: h ? e : e[0],
            formattedDate: h ? t : t[0],
            datepicker: this
          });
        }
      }, {
        key: "_handleAlreadySelectedDates",
        value: function _handleAlreadySelectedDates(e, t) {
          var _this$opts17 = this.opts,
              i = _this$opts17.range,
              s = _this$opts17.toggleSelected;
          i ? s ? this.unselectDate(t) : 2 !== this.selectedDates.length && this.selectDate(t) : s && this.unselectDate(t), s || this._updateLastSelectedDate(e);
        }
      }, {
        key: "_handleUpDownActions",
        value: function _handleUpDownActions(e, t) {
          if (!((e = b(e || this.focusDate || this.viewDate)) instanceof Date)) return;
          var i = "up" === t ? this.viewIndex + 1 : this.viewIndex - 1;
          i > 2 && (i = 2), i < 0 && (i = 0), this.setViewDate(new Date(e.getFullYear(), e.getMonth(), 1)), this.setCurrentView(this.viewIndexes[i]);
        }
      }, {
        key: "_handleRangeOnFocus",
        value: function _handleRangeOnFocus() {
          1 === this.selectedDates.length && (p(this.selectedDates[0], this.focusDate) ? (this.rangeDateTo = this.selectedDates[0], this.rangeDateFrom = this.focusDate) : (this.rangeDateTo = this.focusDate, this.rangeDateFrom = this.selectedDates[0]));
        }
      }, {
        key: "getCell",
        value: function getCell(e) {
          var _d4;

          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.day;
          if (!((e = b(e)) instanceof Date)) return;

          var _o14 = o(e),
              s = _o14.year,
              a = _o14.month,
              n = _o14.date,
              r = '[data-year="'.concat(s, '"]'),
              h = '[data-month="'.concat(a, '"]'),
              l = '[data-date="'.concat(n, '"]'),
              d = (_d4 = {}, _defineProperty(_d4, i.day, "".concat(r).concat(h).concat(l)), _defineProperty(_d4, i.month, "".concat(r).concat(h)), _defineProperty(_d4, i.year, "".concat(r)), _d4);

          return this.views[this.currentView].$el.querySelector(d[t]);
        }
      }, {
        key: "_showMobileOverlay",
        value: function _showMobileOverlay() {
          P.classList.add("-active-");
        }
      }, {
        key: "_hasTransition",
        value: function _hasTransition() {
          return window.getComputedStyle(this.$datepicker).getPropertyValue("transition-duration").split(", ").reduce(function (e, t) {
            return parseFloat(t) + e;
          }, 0) > 0;
        }
      }, {
        key: "shouldUpdateDOM",
        get: function get() {
          return this.visible || this.treatAsInline;
        }
      }, {
        key: "parsedViewDate",
        get: function get() {
          return o(this.viewDate);
        }
      }, {
        key: "currentViewSingular",
        get: function get() {
          return this.currentView.slice(0, -1);
        }
      }, {
        key: "curDecade",
        get: function get() {
          return d(this.viewDate);
        }
      }, {
        key: "viewIndex",
        get: function get() {
          return this.viewIndexes.indexOf(this.currentView);
        }
      }, {
        key: "isFinalView",
        get: function get() {
          return this.currentView === i.years;
        }
      }, {
        key: "hasSelectedDates",
        get: function get() {
          return this.selectedDates.length > 0;
        }
      }, {
        key: "isMinViewReached",
        get: function get() {
          return this.currentView === this.opts.minView || this.currentView === i.days;
        }
      }, {
        key: "$container",
        get: function get() {
          return this.$customContainer || R;
        }
      }], [{
        key: "replacer",
        value: function replacer(e, t, i) {
          return e.replace(t, function (e, t, s, a) {
            return t + i + a;
          });
        }
      }]);

      return K;
    }();

    var j;
    return N(K, "defaults", s), N(K, "version", "3.2.0"), N(K, "defaultContainerId", "air-datepicker-global-container"), j = K.prototype, Object.assign(j, E), t.default;
  }();
});
},{}],"../node_modules/air-datepicker/index.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _airDatepicker = _interopRequireDefault(require("./air-datepicker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _airDatepicker.default;
exports.default = _default;
},{"./air-datepicker":"../node_modules/air-datepicker/air-datepicker.js"}],"../node_modules/air-datepicker/air-datepicker.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/form-elements/form-elements.js":[function(require,module,exports) {
"use strict";

var _airDatepicker = _interopRequireDefault(require("air-datepicker"));

require("air-datepicker/air-datepicker.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apply = {
  content: 'Применить',
  className: 'custom-button',
  onclick: function onclick() {
    return true;
  }
};
new _airDatepicker.default('#date-picker', {
  range: true,
  multipleDatesSeparator: '-',
  inline: false,
  buttons: [apply, 'clear']
});
},{"air-datepicker":"../node_modules/air-datepicker/index.es.js","air-datepicker/air-datepicker.css":"../node_modules/air-datepicker/air-datepicker.css"}],"main.js":[function(require,module,exports) {
"use strict";

require("./styles/style.scss");

require("./components/form-elements/form-elements");
},{"./styles/style.scss":"styles/style.scss","./components/form-elements/form-elements":"components/form-elements/form-elements.js"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63128" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map