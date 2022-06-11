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
},{"_css_loader":"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/nouislider/dist/nouislider.js":[function(require,module,exports) {
var define;
var global = arguments[3];
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.noUiSlider = {}));
})(this, (function (exports) { 'use strict';

    exports.PipsMode = void 0;
    (function (PipsMode) {
        PipsMode["Range"] = "range";
        PipsMode["Steps"] = "steps";
        PipsMode["Positions"] = "positions";
        PipsMode["Count"] = "count";
        PipsMode["Values"] = "values";
    })(exports.PipsMode || (exports.PipsMode = {}));
    exports.PipsType = void 0;
    (function (PipsType) {
        PipsType[PipsType["None"] = -1] = "None";
        PipsType[PipsType["NoValue"] = 0] = "NoValue";
        PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
        PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
    })(exports.PipsType || (exports.PipsType = {}));
    //region Helper Methods
    function isValidFormatter(entry) {
        return isValidPartialFormatter(entry) && typeof entry.from === "function";
    }
    function isValidPartialFormatter(entry) {
        // partial formatters only need a to function and not a from function
        return typeof entry === "object" && typeof entry.to === "function";
    }
    function removeElement(el) {
        el.parentElement.removeChild(el);
    }
    function isSet(value) {
        return value !== null && value !== undefined;
    }
    // Bindable version
    function preventDefault(e) {
        e.preventDefault();
    }
    // Removes duplicates from an array.
    function unique(array) {
        return array.filter(function (a) {
            return !this[a] ? (this[a] = true) : false;
        }, {});
    }
    // Round a value to the closest 'to'.
    function closest(value, to) {
        return Math.round(value / to) * to;
    }
    // Current position of an element relative to the document.
    function offset(elem, orientation) {
        var rect = elem.getBoundingClientRect();
        var doc = elem.ownerDocument;
        var docElem = doc.documentElement;
        var pageOffset = getPageOffset(doc);
        // getBoundingClientRect contains left scroll in Chrome on Android.
        // I haven't found a feature detection that proves this. Worst case
        // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
        if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
            pageOffset.x = 0;
        }
        return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
    }
    // Checks whether a value is numerical.
    function isNumeric(a) {
        return typeof a === "number" && !isNaN(a) && isFinite(a);
    }
    // Sets a class and removes it after [duration] ms.
    function addClassFor(element, className, duration) {
        if (duration > 0) {
            addClass(element, className);
            setTimeout(function () {
                removeClass(element, className);
            }, duration);
        }
    }
    // Limits a value to 0 - 100
    function limit(a) {
        return Math.max(Math.min(a, 100), 0);
    }
    // Wraps a variable as an array, if it isn't one yet.
    // Note that an input array is returned by reference!
    function asArray(a) {
        return Array.isArray(a) ? a : [a];
    }
    // Counts decimals
    function countDecimals(numStr) {
        numStr = String(numStr);
        var pieces = numStr.split(".");
        return pieces.length > 1 ? pieces[1].length : 0;
    }
    // http://youmightnotneedjquery.com/#add_class
    function addClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.add(className);
        }
        else {
            el.className += " " + className;
        }
    }
    // http://youmightnotneedjquery.com/#remove_class
    function removeClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.remove(className);
        }
        else {
            el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
    }
    // https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
    function hasClass(el, className) {
        return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
    function getPageOffset(doc) {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
        var x = supportPageOffset
            ? window.pageXOffset
            : isCSS1Compat
                ? doc.documentElement.scrollLeft
                : doc.body.scrollLeft;
        var y = supportPageOffset
            ? window.pageYOffset
            : isCSS1Compat
                ? doc.documentElement.scrollTop
                : doc.body.scrollTop;
        return {
            x: x,
            y: y,
        };
    }
    // we provide a function to compute constants instead
    // of accessing window.* as soon as the module needs it
    // so that we do not compute anything if not needed
    function getActions() {
        // Determine the events to bind. IE11 implements pointerEvents without
        // a prefix, which breaks compatibility with the IE10 implementation.
        return window.navigator.pointerEnabled
            ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup",
            }
            : window.navigator.msPointerEnabled
                ? {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp",
                }
                : {
                    start: "mousedown touchstart",
                    move: "mousemove touchmove",
                    end: "mouseup touchend",
                };
    }
    // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
    // Issue #785
    function getSupportsPassive() {
        var supportsPassive = false;
        /* eslint-disable */
        try {
            var opts = Object.defineProperty({}, "passive", {
                get: function () {
                    supportsPassive = true;
                },
            });
            // @ts-ignore
            window.addEventListener("test", null, opts);
        }
        catch (e) { }
        /* eslint-enable */
        return supportsPassive;
    }
    function getSupportsTouchActionNone() {
        return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
    }
    //endregion
    //region Range Calculation
    // Determine the size of a sub-range in relation to a full range.
    function subRangeRatio(pa, pb) {
        return 100 / (pb - pa);
    }
    // (percentage) How many percent is this value of this range?
    function fromPercentage(range, value, startRange) {
        return (value * 100) / (range[startRange + 1] - range[startRange]);
    }
    // (percentage) Where is this value on this range?
    function toPercentage(range, value) {
        return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
    }
    // (value) How much is this percentage on this range?
    function isPercentage(range, value) {
        return (value * (range[1] - range[0])) / 100 + range[0];
    }
    function getJ(value, arr) {
        var j = 1;
        while (value >= arr[j]) {
            j += 1;
        }
        return j;
    }
    // (percentage) Input a value, find where, on a scale of 0-100, it applies.
    function toStepping(xVal, xPct, value) {
        if (value >= xVal.slice(-1)[0]) {
            return 100;
        }
        var j = getJ(value, xVal);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
    }
    // (value) Input a percentage, find where it is on the specified range.
    function fromStepping(xVal, xPct, value) {
        // There is no range group that fits 100
        if (value >= 100) {
            return xVal.slice(-1)[0];
        }
        var j = getJ(value, xPct);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
    }
    // (percentage) Get the step that applies at a certain value.
    function getStep(xPct, xSteps, snap, value) {
        if (value === 100) {
            return value;
        }
        var j = getJ(value, xPct);
        var a = xPct[j - 1];
        var b = xPct[j];
        // If 'snap' is set, steps are used as fixed points on the slider.
        if (snap) {
            // Find the closest position, a or b.
            if (value - a > (b - a) / 2) {
                return b;
            }
            return a;
        }
        if (!xSteps[j - 1]) {
            return value;
        }
        return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
    }
    //endregion
    //region Spectrum
    var Spectrum = /** @class */ (function () {
        function Spectrum(entry, snap, singleStep) {
            this.xPct = [];
            this.xVal = [];
            this.xSteps = [];
            this.xNumSteps = [];
            this.xHighestCompleteStep = [];
            this.xSteps = [singleStep || false];
            this.xNumSteps = [false];
            this.snap = snap;
            var index;
            var ordered = [];
            // Map the object keys to an array.
            Object.keys(entry).forEach(function (index) {
                ordered.push([asArray(entry[index]), index]);
            });
            // Sort all entries by value (numeric sort).
            ordered.sort(function (a, b) {
                return a[0][0] - b[0][0];
            });
            // Convert all entries to subranges.
            for (index = 0; index < ordered.length; index++) {
                this.handleEntryPoint(ordered[index][1], ordered[index][0]);
            }
            // Store the actual step values.
            // xSteps is sorted in the same order as xPct and xVal.
            this.xNumSteps = this.xSteps.slice(0);
            // Convert all numeric steps to the percentage of the subrange they represent.
            for (index = 0; index < this.xNumSteps.length; index++) {
                this.handleStepPoint(index, this.xNumSteps[index]);
            }
        }
        Spectrum.prototype.getDistance = function (value) {
            var distances = [];
            for (var index = 0; index < this.xNumSteps.length - 1; index++) {
                distances[index] = fromPercentage(this.xVal, value, index);
            }
            return distances;
        };
        // Calculate the percentual distance over the whole scale of ranges.
        // direction: 0 = backwards / 1 = forwards
        Spectrum.prototype.getAbsoluteDistance = function (value, distances, direction) {
            var xPct_index = 0;
            // Calculate range where to start calculation
            if (value < this.xPct[this.xPct.length - 1]) {
                while (value > this.xPct[xPct_index + 1]) {
                    xPct_index++;
                }
            }
            else if (value === this.xPct[this.xPct.length - 1]) {
                xPct_index = this.xPct.length - 2;
            }
            // If looking backwards and the value is exactly at a range separator then look one range further
            if (!direction && value === this.xPct[xPct_index + 1]) {
                xPct_index++;
            }
            if (distances === null) {
                distances = [];
            }
            var start_factor;
            var rest_factor = 1;
            var rest_rel_distance = distances[xPct_index];
            var range_pct = 0;
            var rel_range_distance = 0;
            var abs_distance_counter = 0;
            var range_counter = 0;
            // Calculate what part of the start range the value is
            if (direction) {
                start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
            }
            else {
                start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
            }
            // Do until the complete distance across ranges is calculated
            while (rest_rel_distance > 0) {
                // Calculate the percentage of total range
                range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
                // Detect if the margin, padding or limit is larger then the current range and calculate
                if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                    // If larger then take the percentual distance of the whole range
                    rel_range_distance = range_pct * start_factor;
                    // Rest factor of relative percentual distance still to be calculated
                    rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                    // Set start factor to 1 as for next range it does not apply.
                    start_factor = 1;
                }
                else {
                    // If smaller or equal then take the percentual distance of the calculate percentual part of that range
                    rel_range_distance = ((distances[xPct_index + range_counter] * range_pct) / 100) * rest_factor;
                    // No rest left as the rest fits in current range
                    rest_factor = 0;
                }
                if (direction) {
                    abs_distance_counter = abs_distance_counter - rel_range_distance;
                    // Limit range to first range when distance becomes outside of minimum range
                    if (this.xPct.length + range_counter >= 1) {
                        range_counter--;
                    }
                }
                else {
                    abs_distance_counter = abs_distance_counter + rel_range_distance;
                    // Limit range to last range when distance becomes outside of maximum range
                    if (this.xPct.length - range_counter >= 1) {
                        range_counter++;
                    }
                }
                // Rest of relative percentual distance still to be calculated
                rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
            }
            return value + abs_distance_counter;
        };
        Spectrum.prototype.toStepping = function (value) {
            value = toStepping(this.xVal, this.xPct, value);
            return value;
        };
        Spectrum.prototype.fromStepping = function (value) {
            return fromStepping(this.xVal, this.xPct, value);
        };
        Spectrum.prototype.getStep = function (value) {
            value = getStep(this.xPct, this.xSteps, this.snap, value);
            return value;
        };
        Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
            var j = getJ(value, this.xPct);
            // When at the top or stepping down, look at the previous sub-range
            if (value === 100 || (isDown && value === this.xPct[j - 1])) {
                j = Math.max(j - 1, 1);
            }
            return (this.xVal[j] - this.xVal[j - 1]) / size;
        };
        Spectrum.prototype.getNearbySteps = function (value) {
            var j = getJ(value, this.xPct);
            return {
                stepBefore: {
                    startValue: this.xVal[j - 2],
                    step: this.xNumSteps[j - 2],
                    highestStep: this.xHighestCompleteStep[j - 2],
                },
                thisStep: {
                    startValue: this.xVal[j - 1],
                    step: this.xNumSteps[j - 1],
                    highestStep: this.xHighestCompleteStep[j - 1],
                },
                stepAfter: {
                    startValue: this.xVal[j],
                    step: this.xNumSteps[j],
                    highestStep: this.xHighestCompleteStep[j],
                },
            };
        };
        Spectrum.prototype.countStepDecimals = function () {
            var stepDecimals = this.xNumSteps.map(countDecimals);
            return Math.max.apply(null, stepDecimals);
        };
        Spectrum.prototype.hasNoSize = function () {
            return this.xVal[0] === this.xVal[this.xVal.length - 1];
        };
        // Outside testing
        Spectrum.prototype.convert = function (value) {
            return this.getStep(this.toStepping(value));
        };
        Spectrum.prototype.handleEntryPoint = function (index, value) {
            var percentage;
            // Covert min/max syntax to 0 and 100.
            if (index === "min") {
                percentage = 0;
            }
            else if (index === "max") {
                percentage = 100;
            }
            else {
                percentage = parseFloat(index);
            }
            // Check for correct input.
            if (!isNumeric(percentage) || !isNumeric(value[0])) {
                throw new Error("noUiSlider: 'range' value isn't numeric.");
            }
            // Store values.
            this.xPct.push(percentage);
            this.xVal.push(value[0]);
            var value1 = Number(value[1]);
            // NaN will evaluate to false too, but to keep
            // logging clear, set step explicitly. Make sure
            // not to override the 'step' setting with false.
            if (!percentage) {
                if (!isNaN(value1)) {
                    this.xSteps[0] = value1;
                }
            }
            else {
                this.xSteps.push(isNaN(value1) ? false : value1);
            }
            this.xHighestCompleteStep.push(0);
        };
        Spectrum.prototype.handleStepPoint = function (i, n) {
            // Ignore 'false' stepping.
            if (!n) {
                return;
            }
            // Step over zero-length ranges (#948);
            if (this.xVal[i] === this.xVal[i + 1]) {
                this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
                return;
            }
            // Factor to range ratio
            this.xSteps[i] =
                fromPercentage([this.xVal[i], this.xVal[i + 1]], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
            var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
            var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
            var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
            this.xHighestCompleteStep[i] = step;
        };
        return Spectrum;
    }());
    //endregion
    //region Options
    /*	Every input option is tested and parsed. This will prevent
        endless validation in internal methods. These tests are
        structured with an item for every option available. An
        option can be marked as required by setting the 'r' flag.
        The testing function is provided with three arguments:
            - The provided value for the option;
            - A reference to the options object;
            - The name for the option;

        The testing function returns false when an error is detected,
        or true when everything is OK. It can also modify the option
        object, to make sure all values can be correctly looped elsewhere. */
    //region Defaults
    var defaultFormatter = {
        to: function (value) {
            return value === undefined ? "" : value.toFixed(2);
        },
        from: Number,
    };
    var cssClasses = {
        target: "target",
        base: "base",
        origin: "origin",
        handle: "handle",
        handleLower: "handle-lower",
        handleUpper: "handle-upper",
        touchArea: "touch-area",
        horizontal: "horizontal",
        vertical: "vertical",
        background: "background",
        connect: "connect",
        connects: "connects",
        ltr: "ltr",
        rtl: "rtl",
        textDirectionLtr: "txt-dir-ltr",
        textDirectionRtl: "txt-dir-rtl",
        draggable: "draggable",
        drag: "state-drag",
        tap: "state-tap",
        active: "active",
        tooltip: "tooltip",
        pips: "pips",
        pipsHorizontal: "pips-horizontal",
        pipsVertical: "pips-vertical",
        marker: "marker",
        markerHorizontal: "marker-horizontal",
        markerVertical: "marker-vertical",
        markerNormal: "marker-normal",
        markerLarge: "marker-large",
        markerSub: "marker-sub",
        value: "value",
        valueHorizontal: "value-horizontal",
        valueVertical: "value-vertical",
        valueNormal: "value-normal",
        valueLarge: "value-large",
        valueSub: "value-sub",
    };
    // Namespaces of internal event listeners
    var INTERNAL_EVENT_NS = {
        tooltips: ".__tooltips",
        aria: ".__aria",
    };
    //endregion
    function testStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'step' is not numeric.");
        }
        // The step option can still be used to set stepping
        // for linear sliders. Overwritten if set in 'range'.
        parsed.singleStep = entry;
    }
    function testKeyboardPageMultiplier(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
        }
        parsed.keyboardPageMultiplier = entry;
    }
    function testKeyboardMultiplier(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
        }
        parsed.keyboardMultiplier = entry;
    }
    function testKeyboardDefaultStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
        }
        parsed.keyboardDefaultStep = entry;
    }
    function testRange(parsed, entry) {
        // Filter incorrect input.
        if (typeof entry !== "object" || Array.isArray(entry)) {
            throw new Error("noUiSlider: 'range' is not an object.");
        }
        // Catch missing start or end.
        if (entry.min === undefined || entry.max === undefined) {
            throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
        }
        parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
    }
    function testStart(parsed, entry) {
        entry = asArray(entry);
        // Validate input. Values aren't tested, as the public .val method
        // will always provide a valid location.
        if (!Array.isArray(entry) || !entry.length) {
            throw new Error("noUiSlider: 'start' option is incorrect.");
        }
        // Store the number of handles.
        parsed.handles = entry.length;
        // When the slider is initialized, the .val method will
        // be called with the start options.
        parsed.start = entry;
    }
    function testSnap(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'snap' option must be a boolean.");
        }
        // Enforce 100% stepping within subranges.
        parsed.snap = entry;
    }
    function testAnimate(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'animate' option must be a boolean.");
        }
        // Enforce 100% stepping within subranges.
        parsed.animate = entry;
    }
    function testAnimationDuration(parsed, entry) {
        if (typeof entry !== "number") {
            throw new Error("noUiSlider: 'animationDuration' option must be a number.");
        }
        parsed.animationDuration = entry;
    }
    function testConnect(parsed, entry) {
        var connect = [false];
        var i;
        // Map legacy options
        if (entry === "lower") {
            entry = [true, false];
        }
        else if (entry === "upper") {
            entry = [false, true];
        }
        // Handle boolean options
        if (entry === true || entry === false) {
            for (i = 1; i < parsed.handles; i++) {
                connect.push(entry);
            }
            connect.push(false);
        }
        // Reject invalid input
        else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
            throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
        }
        else {
            connect = entry;
        }
        parsed.connect = connect;
    }
    function testOrientation(parsed, entry) {
        // Set orientation to an a numerical value for easy
        // array selection.
        switch (entry) {
            case "horizontal":
                parsed.ort = 0;
                break;
            case "vertical":
                parsed.ort = 1;
                break;
            default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
        }
    }
    function testMargin(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'margin' option must be numeric.");
        }
        // Issue #582
        if (entry === 0) {
            return;
        }
        parsed.margin = parsed.spectrum.getDistance(entry);
    }
    function testLimit(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'limit' option must be numeric.");
        }
        parsed.limit = parsed.spectrum.getDistance(entry);
        if (!parsed.limit || parsed.handles < 2) {
            throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
        }
    }
    function testPadding(parsed, entry) {
        var index;
        if (!isNumeric(entry) && !Array.isArray(entry)) {
            throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        }
        if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
            throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        }
        if (entry === 0) {
            return;
        }
        if (!Array.isArray(entry)) {
            entry = [entry, entry];
        }
        // 'getDistance' returns false for invalid values.
        parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];
        for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
            // last "range" can't contain step size as it is purely an endpoint.
            if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
                throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
            }
        }
        var totalPadding = entry[0] + entry[1];
        var firstValue = parsed.spectrum.xVal[0];
        var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
        if (totalPadding / (lastValue - firstValue) > 1) {
            throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
        }
    }
    function testDirection(parsed, entry) {
        // Set direction as a numerical value for easy parsing.
        // Invert connection for RTL sliders, so that the proper
        // handles get the connect/background classes.
        switch (entry) {
            case "ltr":
                parsed.dir = 0;
                break;
            case "rtl":
                parsed.dir = 1;
                break;
            default:
                throw new Error("noUiSlider: 'direction' option was not recognized.");
        }
    }
    function testBehaviour(parsed, entry) {
        // Make sure the input is a string.
        if (typeof entry !== "string") {
            throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
        }
        // Check if the string contains any keywords.
        // None are required.
        var tap = entry.indexOf("tap") >= 0;
        var drag = entry.indexOf("drag") >= 0;
        var fixed = entry.indexOf("fixed") >= 0;
        var snap = entry.indexOf("snap") >= 0;
        var hover = entry.indexOf("hover") >= 0;
        var unconstrained = entry.indexOf("unconstrained") >= 0;
        var dragAll = entry.indexOf("drag-all") >= 0;
        var smoothSteps = entry.indexOf("smooth-steps") >= 0;
        if (fixed) {
            if (parsed.handles !== 2) {
                throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
            }
            // Use margin to enforce fixed state
            testMargin(parsed, parsed.start[1] - parsed.start[0]);
        }
        if (unconstrained && (parsed.margin || parsed.limit)) {
            throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
        }
        parsed.events = {
            tap: tap || snap,
            drag: drag,
            dragAll: dragAll,
            smoothSteps: smoothSteps,
            fixed: fixed,
            snap: snap,
            hover: hover,
            unconstrained: unconstrained,
        };
    }
    function testTooltips(parsed, entry) {
        if (entry === false) {
            return;
        }
        if (entry === true || isValidPartialFormatter(entry)) {
            parsed.tooltips = [];
            for (var i = 0; i < parsed.handles; i++) {
                parsed.tooltips.push(entry);
            }
        }
        else {
            entry = asArray(entry);
            if (entry.length !== parsed.handles) {
                throw new Error("noUiSlider: must pass a formatter for all handles.");
            }
            entry.forEach(function (formatter) {
                if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) {
                    throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
                }
            });
            parsed.tooltips = entry;
        }
    }
    function testHandleAttributes(parsed, entry) {
        if (entry.length !== parsed.handles) {
            throw new Error("noUiSlider: must pass a attributes for all handles.");
        }
        parsed.handleAttributes = entry;
    }
    function testAriaFormat(parsed, entry) {
        if (!isValidPartialFormatter(entry)) {
            throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
        }
        parsed.ariaFormat = entry;
    }
    function testFormat(parsed, entry) {
        if (!isValidFormatter(entry)) {
            throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
        }
        parsed.format = entry;
    }
    function testKeyboardSupport(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
        }
        parsed.keyboardSupport = entry;
    }
    function testDocumentElement(parsed, entry) {
        // This is an advanced option. Passed values are used without validation.
        parsed.documentElement = entry;
    }
    function testCssPrefix(parsed, entry) {
        if (typeof entry !== "string" && entry !== false) {
            throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
        }
        parsed.cssPrefix = entry;
    }
    function testCssClasses(parsed, entry) {
        if (typeof entry !== "object") {
            throw new Error("noUiSlider: 'cssClasses' must be an object.");
        }
        if (typeof parsed.cssPrefix === "string") {
            parsed.cssClasses = {};
            Object.keys(entry).forEach(function (key) {
                parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
            });
        }
        else {
            parsed.cssClasses = entry;
        }
    }
    // Test all developer settings and parse to assumption-safe values.
    function testOptions(options) {
        // To prove a fix for #537, freeze options here.
        // If the object is modified, an error will be thrown.
        // Object.freeze(options);
        var parsed = {
            margin: null,
            limit: null,
            padding: null,
            animate: true,
            animationDuration: 300,
            ariaFormat: defaultFormatter,
            format: defaultFormatter,
        };
        // Tests are executed in the order they are presented here.
        var tests = {
            step: { r: false, t: testStep },
            keyboardPageMultiplier: { r: false, t: testKeyboardPageMultiplier },
            keyboardMultiplier: { r: false, t: testKeyboardMultiplier },
            keyboardDefaultStep: { r: false, t: testKeyboardDefaultStep },
            start: { r: true, t: testStart },
            connect: { r: true, t: testConnect },
            direction: { r: true, t: testDirection },
            snap: { r: false, t: testSnap },
            animate: { r: false, t: testAnimate },
            animationDuration: { r: false, t: testAnimationDuration },
            range: { r: true, t: testRange },
            orientation: { r: false, t: testOrientation },
            margin: { r: false, t: testMargin },
            limit: { r: false, t: testLimit },
            padding: { r: false, t: testPadding },
            behaviour: { r: true, t: testBehaviour },
            ariaFormat: { r: false, t: testAriaFormat },
            format: { r: false, t: testFormat },
            tooltips: { r: false, t: testTooltips },
            keyboardSupport: { r: true, t: testKeyboardSupport },
            documentElement: { r: false, t: testDocumentElement },
            cssPrefix: { r: true, t: testCssPrefix },
            cssClasses: { r: true, t: testCssClasses },
            handleAttributes: { r: false, t: testHandleAttributes },
        };
        var defaults = {
            connect: false,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal",
            keyboardSupport: true,
            cssPrefix: "noUi-",
            cssClasses: cssClasses,
            keyboardPageMultiplier: 5,
            keyboardMultiplier: 1,
            keyboardDefaultStep: 10,
        };
        // AriaFormat defaults to regular format, if any.
        if (options.format && !options.ariaFormat) {
            options.ariaFormat = options.format;
        }
        // Run all options through a testing mechanism to ensure correct
        // input. It should be noted that options might get modified to
        // be handled properly. E.g. wrapping integers in arrays.
        Object.keys(tests).forEach(function (name) {
            // If the option isn't set, but it is required, throw an error.
            if (!isSet(options[name]) && defaults[name] === undefined) {
                if (tests[name].r) {
                    throw new Error("noUiSlider: '" + name + "' is required.");
                }
                return;
            }
            tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
        });
        // Forward pips options
        parsed.pips = options.pips;
        // All recent browsers accept unprefixed transform.
        // We need -ms- for IE9 and -webkit- for older Android;
        // Assume use of -webkit- if unprefixed and -ms- are not supported.
        // https://caniuse.com/#feat=transforms2d
        var d = document.createElement("div");
        var msPrefix = d.style.msTransform !== undefined;
        var noPrefix = d.style.transform !== undefined;
        parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
        // Pips don't move, so we can place them using left/top.
        var styles = [
            ["left", "top"],
            ["right", "bottom"],
        ];
        parsed.style = styles[parsed.dir][parsed.ort];
        return parsed;
    }
    //endregion
    function scope(target, options, originalOptions) {
        var actions = getActions();
        var supportsTouchActionNone = getSupportsTouchActionNone();
        var supportsPassive = supportsTouchActionNone && getSupportsPassive();
        // All variables local to 'scope' are prefixed with 'scope_'
        // Slider DOM Nodes
        var scope_Target = target;
        var scope_Base;
        var scope_Handles;
        var scope_Connects;
        var scope_Pips;
        var scope_Tooltips;
        // Slider state values
        var scope_Spectrum = options.spectrum;
        var scope_Values = [];
        var scope_Locations = [];
        var scope_HandleNumbers = [];
        var scope_ActiveHandlesCount = 0;
        var scope_Events = {};
        // Document Nodes
        var scope_Document = target.ownerDocument;
        var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
        var scope_Body = scope_Document.body;
        // For horizontal sliders in standard ltr documents,
        // make .noUi-origin overflow to the left so the document doesn't scroll.
        var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
        // Creates a node, adds it to target, returns the new node.
        function addNodeTo(addTarget, className) {
            var div = scope_Document.createElement("div");
            if (className) {
                addClass(div, className);
            }
            addTarget.appendChild(div);
            return div;
        }
        // Append a origin to the base
        function addOrigin(base, handleNumber) {
            var origin = addNodeTo(base, options.cssClasses.origin);
            var handle = addNodeTo(origin, options.cssClasses.handle);
            addNodeTo(handle, options.cssClasses.touchArea);
            handle.setAttribute("data-handle", String(handleNumber));
            if (options.keyboardSupport) {
                // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
                // 0 = focusable and reachable
                handle.setAttribute("tabindex", "0");
                handle.addEventListener("keydown", function (event) {
                    return eventKeydown(event, handleNumber);
                });
            }
            if (options.handleAttributes !== undefined) {
                var attributes_1 = options.handleAttributes[handleNumber];
                Object.keys(attributes_1).forEach(function (attribute) {
                    handle.setAttribute(attribute, attributes_1[attribute]);
                });
            }
            handle.setAttribute("role", "slider");
            handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
            if (handleNumber === 0) {
                addClass(handle, options.cssClasses.handleLower);
            }
            else if (handleNumber === options.handles - 1) {
                addClass(handle, options.cssClasses.handleUpper);
            }
            return origin;
        }
        // Insert nodes for connect elements
        function addConnect(base, add) {
            if (!add) {
                return false;
            }
            return addNodeTo(base, options.cssClasses.connect);
        }
        // Add handles to the slider base.
        function addElements(connectOptions, base) {
            var connectBase = addNodeTo(base, options.cssClasses.connects);
            scope_Handles = [];
            scope_Connects = [];
            scope_Connects.push(addConnect(connectBase, connectOptions[0]));
            // [::::O====O====O====]
            // connectOptions = [0, 1, 1, 1]
            for (var i = 0; i < options.handles; i++) {
                // Keep a list of all added handles.
                scope_Handles.push(addOrigin(base, i));
                scope_HandleNumbers[i] = i;
                scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
            }
        }
        // Initialize a single slider.
        function addSlider(addTarget) {
            // Apply classes and data to the target.
            addClass(addTarget, options.cssClasses.target);
            if (options.dir === 0) {
                addClass(addTarget, options.cssClasses.ltr);
            }
            else {
                addClass(addTarget, options.cssClasses.rtl);
            }
            if (options.ort === 0) {
                addClass(addTarget, options.cssClasses.horizontal);
            }
            else {
                addClass(addTarget, options.cssClasses.vertical);
            }
            var textDirection = getComputedStyle(addTarget).direction;
            if (textDirection === "rtl") {
                addClass(addTarget, options.cssClasses.textDirectionRtl);
            }
            else {
                addClass(addTarget, options.cssClasses.textDirectionLtr);
            }
            return addNodeTo(addTarget, options.cssClasses.base);
        }
        function addTooltip(handle, handleNumber) {
            if (!options.tooltips || !options.tooltips[handleNumber]) {
                return false;
            }
            return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
        }
        function isSliderDisabled() {
            return scope_Target.hasAttribute("disabled");
        }
        // Disable the slider dragging if any handle is disabled
        function isHandleDisabled(handleNumber) {
            var handleOrigin = scope_Handles[handleNumber];
            return handleOrigin.hasAttribute("disabled");
        }
        function removeTooltips() {
            if (scope_Tooltips) {
                removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
                scope_Tooltips.forEach(function (tooltip) {
                    if (tooltip) {
                        removeElement(tooltip);
                    }
                });
                scope_Tooltips = null;
            }
        }
        // The tooltips option is a shorthand for using the 'update' event.
        function tooltips() {
            removeTooltips();
            // Tooltips are added with options.tooltips in original order.
            scope_Tooltips = scope_Handles.map(addTooltip);
            bindEvent("update" + INTERNAL_EVENT_NS.tooltips, function (values, handleNumber, unencoded) {
                if (!scope_Tooltips || !options.tooltips) {
                    return;
                }
                if (scope_Tooltips[handleNumber] === false) {
                    return;
                }
                var formattedValue = values[handleNumber];
                if (options.tooltips[handleNumber] !== true) {
                    formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                }
                scope_Tooltips[handleNumber].innerHTML = formattedValue;
            });
        }
        function aria() {
            removeEvent("update" + INTERNAL_EVENT_NS.aria);
            bindEvent("update" + INTERNAL_EVENT_NS.aria, function (values, handleNumber, unencoded, tap, positions) {
                // Update Aria Values for all handles, as a change in one changes min and max values for the next.
                scope_HandleNumbers.forEach(function (index) {
                    var handle = scope_Handles[index];
                    var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                    var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                    var now = positions[index];
                    // Formatted value for display
                    var text = String(options.ariaFormat.to(unencoded[index]));
                    // Map to slider range values
                    min = scope_Spectrum.fromStepping(min).toFixed(1);
                    max = scope_Spectrum.fromStepping(max).toFixed(1);
                    now = scope_Spectrum.fromStepping(now).toFixed(1);
                    handle.children[0].setAttribute("aria-valuemin", min);
                    handle.children[0].setAttribute("aria-valuemax", max);
                    handle.children[0].setAttribute("aria-valuenow", now);
                    handle.children[0].setAttribute("aria-valuetext", text);
                });
            });
        }
        function getGroup(pips) {
            // Use the range.
            if (pips.mode === exports.PipsMode.Range || pips.mode === exports.PipsMode.Steps) {
                return scope_Spectrum.xVal;
            }
            if (pips.mode === exports.PipsMode.Count) {
                if (pips.values < 2) {
                    throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
                }
                // Divide 0 - 100 in 'count' parts.
                var interval = pips.values - 1;
                var spread = 100 / interval;
                var values = [];
                // List these parts and have them handled as 'positions'.
                while (interval--) {
                    values[interval] = interval * spread;
                }
                values.push(100);
                return mapToRange(values, pips.stepped);
            }
            if (pips.mode === exports.PipsMode.Positions) {
                // Map all percentages to on-range values.
                return mapToRange(pips.values, pips.stepped);
            }
            if (pips.mode === exports.PipsMode.Values) {
                // If the value must be stepped, it needs to be converted to a percentage first.
                if (pips.stepped) {
                    return pips.values.map(function (value) {
                        // Convert to percentage, apply step, return to value.
                        return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                    });
                }
                // Otherwise, we can simply use the values.
                return pips.values;
            }
            return []; // pips.mode = never
        }
        function mapToRange(values, stepped) {
            return values.map(function (value) {
                return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
            });
        }
        function generateSpread(pips) {
            function safeIncrement(value, increment) {
                // Avoid floating point variance by dropping the smallest decimal places.
                return Number((value + increment).toFixed(7));
            }
            var group = getGroup(pips);
            var indexes = {};
            var firstInRange = scope_Spectrum.xVal[0];
            var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
            var ignoreFirst = false;
            var ignoreLast = false;
            var prevPct = 0;
            // Create a copy of the group, sort it and filter away all duplicates.
            group = unique(group.slice().sort(function (a, b) {
                return a - b;
            }));
            // Make sure the range starts with the first element.
            if (group[0] !== firstInRange) {
                group.unshift(firstInRange);
                ignoreFirst = true;
            }
            // Likewise for the last one.
            if (group[group.length - 1] !== lastInRange) {
                group.push(lastInRange);
                ignoreLast = true;
            }
            group.forEach(function (current, index) {
                // Get the current step and the lower + upper positions.
                var step;
                var i;
                var q;
                var low = current;
                var high = group[index + 1];
                var newPct;
                var pctDifference;
                var pctPos;
                var type;
                var steps;
                var realSteps;
                var stepSize;
                var isSteps = pips.mode === exports.PipsMode.Steps;
                // When using 'steps' mode, use the provided steps.
                // Otherwise, we'll step on to the next subrange.
                if (isSteps) {
                    step = scope_Spectrum.xNumSteps[index];
                }
                // Default to a 'full' step.
                if (!step) {
                    step = high - low;
                }
                // If high is undefined we are at the last subrange. Make sure it iterates once (#1088)
                if (high === undefined) {
                    high = low;
                }
                // Make sure step isn't 0, which would cause an infinite loop (#654)
                step = Math.max(step, 0.0000001);
                // Find all steps in the subrange.
                for (i = low; i <= high; i = safeIncrement(i, step)) {
                    // Get the percentage value for the current step,
                    // calculate the size for the subrange.
                    newPct = scope_Spectrum.toStepping(i);
                    pctDifference = newPct - prevPct;
                    steps = pctDifference / (pips.density || 1);
                    realSteps = Math.round(steps);
                    // This ratio represents the amount of percentage-space a point indicates.
                    // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
                    // Round the percentage offset to an even number, then divide by two
                    // to spread the offset on both sides of the range.
                    stepSize = pctDifference / realSteps;
                    // Divide all points evenly, adding the correct number to this subrange.
                    // Run up to <= so that 100% gets a point, event if ignoreLast is set.
                    for (q = 1; q <= realSteps; q += 1) {
                        // The ratio between the rounded value and the actual size might be ~1% off.
                        // Correct the percentage offset by the number of points
                        // per subrange. density = 1 will result in 100 points on the
                        // full range, 2 for 50, 4 for 25, etc.
                        pctPos = prevPct + q * stepSize;
                        indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
                    }
                    // Determine the point type.
                    type = group.indexOf(i) > -1 ? exports.PipsType.LargeValue : isSteps ? exports.PipsType.SmallValue : exports.PipsType.NoValue;
                    // Enforce the 'ignoreFirst' option by overwriting the type for 0.
                    if (!index && ignoreFirst && i !== high) {
                        type = 0;
                    }
                    if (!(i === high && ignoreLast)) {
                        // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
                        indexes[newPct.toFixed(5)] = [i, type];
                    }
                    // Update the percentage count.
                    prevPct = newPct;
                }
            });
            return indexes;
        }
        function addMarking(spread, filterFunc, formatter) {
            var _a, _b;
            var element = scope_Document.createElement("div");
            var valueSizeClasses = (_a = {},
                _a[exports.PipsType.None] = "",
                _a[exports.PipsType.NoValue] = options.cssClasses.valueNormal,
                _a[exports.PipsType.LargeValue] = options.cssClasses.valueLarge,
                _a[exports.PipsType.SmallValue] = options.cssClasses.valueSub,
                _a);
            var markerSizeClasses = (_b = {},
                _b[exports.PipsType.None] = "",
                _b[exports.PipsType.NoValue] = options.cssClasses.markerNormal,
                _b[exports.PipsType.LargeValue] = options.cssClasses.markerLarge,
                _b[exports.PipsType.SmallValue] = options.cssClasses.markerSub,
                _b);
            var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
            var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
            addClass(element, options.cssClasses.pips);
            addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
            function getClasses(type, source) {
                var a = source === options.cssClasses.value;
                var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
                var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
                return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
            }
            function addSpread(offset, value, type) {
                // Apply the filter function, if it is set.
                type = filterFunc ? filterFunc(value, type) : type;
                if (type === exports.PipsType.None) {
                    return;
                }
                // Add a marker for every point
                var node = addNodeTo(element, false);
                node.className = getClasses(type, options.cssClasses.marker);
                node.style[options.style] = offset + "%";
                // Values are only appended for points marked '1' or '2'.
                if (type > exports.PipsType.NoValue) {
                    node = addNodeTo(element, false);
                    node.className = getClasses(type, options.cssClasses.value);
                    node.setAttribute("data-value", String(value));
                    node.style[options.style] = offset + "%";
                    node.innerHTML = String(formatter.to(value));
                }
            }
            // Append all points.
            Object.keys(spread).forEach(function (offset) {
                addSpread(offset, spread[offset][0], spread[offset][1]);
            });
            return element;
        }
        function removePips() {
            if (scope_Pips) {
                removeElement(scope_Pips);
                scope_Pips = null;
            }
        }
        function pips(pips) {
            // Fix #669
            removePips();
            var spread = generateSpread(pips);
            var filter = pips.filter;
            var format = pips.format || {
                to: function (value) {
                    return String(Math.round(value));
                },
            };
            scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
            return scope_Pips;
        }
        // Shorthand for base dimensions.
        function baseSize() {
            var rect = scope_Base.getBoundingClientRect();
            var alt = ("offset" + ["Width", "Height"][options.ort]);
            return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
        }
        // Handler for attaching events trough a proxy.
        function attachEvent(events, element, callback, data) {
            // This function can be used to 'filter' events to the slider.
            // element is a node, not a nodeList
            var method = function (event) {
                var e = fixEvent(event, data.pageOffset, data.target || element);
                // fixEvent returns false if this event has a different target
                // when handling (multi-) touch events;
                if (!e) {
                    return false;
                }
                // doNotReject is passed by all end events to make sure released touches
                // are not rejected, leaving the slider "stuck" to the cursor;
                if (isSliderDisabled() && !data.doNotReject) {
                    return false;
                }
                // Stop if an active 'tap' transition is taking place.
                if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
                    return false;
                }
                // Ignore right or middle clicks on start #454
                if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
                    return false;
                }
                // Ignore right or middle clicks on start #454
                if (data.hover && e.buttons) {
                    return false;
                }
                // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
                // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
                // touch-action: manipulation, but that allows panning, which breaks
                // sliders after zooming/on non-responsive pages.
                // See: https://bugs.webkit.org/show_bug.cgi?id=133112
                if (!supportsPassive) {
                    e.preventDefault();
                }
                e.calcPoint = e.points[options.ort];
                // Call the event handler with the event [ and additional data ].
                callback(e, data);
                return;
            };
            var methods = [];
            // Bind a closure on the target for every event type.
            events.split(" ").forEach(function (eventName) {
                element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
                methods.push([eventName, method]);
            });
            return methods;
        }
        // Provide a clean event with standardized offset values.
        function fixEvent(e, pageOffset, eventTarget) {
            // Filter the event to register the type, which can be
            // touch, mouse or pointer. Offset changes need to be
            // made on an event specific basis.
            var touch = e.type.indexOf("touch") === 0;
            var mouse = e.type.indexOf("mouse") === 0;
            var pointer = e.type.indexOf("pointer") === 0;
            var x = 0;
            var y = 0;
            // IE10 implemented pointer events with a prefix;
            if (e.type.indexOf("MSPointer") === 0) {
                pointer = true;
            }
            // Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with
            // the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore
            // events that have no touches or buttons associated with them. (#1057, #1079, #1095)
            if (e.type === "mousedown" && !e.buttons && !e.touches) {
                return false;
            }
            // The only thing one handle should be concerned about is the touches that originated on top of it.
            if (touch) {
                // Returns true if a touch originated on the target.
                var isTouchOnTarget = function (checkTouch) {
                    var target = checkTouch.target;
                    return (target === eventTarget ||
                        eventTarget.contains(target) ||
                        (e.composed && e.composedPath().shift() === eventTarget));
                };
                // In the case of touchstart events, we need to make sure there is still no more than one
                // touch on the target so we look amongst all touches.
                if (e.type === "touchstart") {
                    var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                    // Do not support more than one touch per handle.
                    if (targetTouches.length > 1) {
                        return false;
                    }
                    x = targetTouches[0].pageX;
                    y = targetTouches[0].pageY;
                }
                else {
                    // In the other cases, find on changedTouches is enough.
                    var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                    // Cancel if the target touch has not moved.
                    if (!targetTouch) {
                        return false;
                    }
                    x = targetTouch.pageX;
                    y = targetTouch.pageY;
                }
            }
            pageOffset = pageOffset || getPageOffset(scope_Document);
            if (mouse || pointer) {
                x = e.clientX + pageOffset.x;
                y = e.clientY + pageOffset.y;
            }
            e.pageOffset = pageOffset;
            e.points = [x, y];
            e.cursor = mouse || pointer; // Fix #435
            return e;
        }
        // Translate a coordinate in the document to a percentage on the slider
        function calcPointToPercentage(calcPoint) {
            var location = calcPoint - offset(scope_Base, options.ort);
            var proposal = (location * 100) / baseSize();
            // Clamp proposal between 0% and 100%
            // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
            // are used (e.g. contained handles feature)
            proposal = limit(proposal);
            return options.dir ? 100 - proposal : proposal;
        }
        // Find handle closest to a certain percentage on the slider
        function getClosestHandle(clickedPosition) {
            var smallestDifference = 100;
            var handleNumber = false;
            scope_Handles.forEach(function (handle, index) {
                // Disabled handles are ignored
                if (isHandleDisabled(index)) {
                    return;
                }
                var handlePosition = scope_Locations[index];
                var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
                // Initial state
                var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
                // Difference with this handle is smaller than the previously checked handle
                var isCloser = differenceWithThisHandle < smallestDifference;
                var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
                if (isCloser || isCloserAfter || clickAtEdge) {
                    handleNumber = index;
                    smallestDifference = differenceWithThisHandle;
                }
            });
            return handleNumber;
        }
        // Fire 'end' when a mouse or pen leaves the document.
        function documentLeave(event, data) {
            if (event.type === "mouseout" &&
                event.target.nodeName === "HTML" &&
                event.relatedTarget === null) {
                eventEnd(event, data);
            }
        }
        // Handle movement on document for handle and range drag.
        function eventMove(event, data) {
            // Fix #498
            // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
            // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
            // IE9 has .buttons and .which zero on mousemove.
            // Firefox breaks the spec MDN defines.
            if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
                return eventEnd(event, data);
            }
            // Check if we are moving up or down
            var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
            // Convert the movement into a percentage of the slider width/height
            var proposal = (movement * 100) / data.baseSize;
            moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
        }
        // Unbind move events on document, call callbacks.
        function eventEnd(event, data) {
            // The handle is no longer active, so remove the class.
            if (data.handle) {
                removeClass(data.handle, options.cssClasses.active);
                scope_ActiveHandlesCount -= 1;
            }
            // Unbind the move and end events, which are added on 'start'.
            data.listeners.forEach(function (c) {
                scope_DocumentElement.removeEventListener(c[0], c[1]);
            });
            if (scope_ActiveHandlesCount === 0) {
                // Remove dragging class.
                removeClass(scope_Target, options.cssClasses.drag);
                setZindex();
                // Remove cursor styles and text-selection events bound to the body.
                if (event.cursor) {
                    scope_Body.style.cursor = "";
                    scope_Body.removeEventListener("selectstart", preventDefault);
                }
            }
            if (options.events.smoothSteps) {
                data.handleNumbers.forEach(function (handleNumber) {
                    setHandle(handleNumber, scope_Locations[handleNumber], true, true, false, false);
                });
                data.handleNumbers.forEach(function (handleNumber) {
                    fireEvent("update", handleNumber);
                });
            }
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("change", handleNumber);
                fireEvent("set", handleNumber);
                fireEvent("end", handleNumber);
            });
        }
        // Bind move events on document.
        function eventStart(event, data) {
            // Ignore event if any handle is disabled
            if (data.handleNumbers.some(isHandleDisabled)) {
                return;
            }
            var handle;
            if (data.handleNumbers.length === 1) {
                var handleOrigin = scope_Handles[data.handleNumbers[0]];
                handle = handleOrigin.children[0];
                scope_ActiveHandlesCount += 1;
                // Mark the handle as 'active' so it can be styled.
                addClass(handle, options.cssClasses.active);
            }
            // A drag should never propagate up to the 'tap' event.
            event.stopPropagation();
            // Record the event listeners.
            var listeners = [];
            // Attach the move and end events.
            var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
                // The event target has changed so we need to propagate the original one so that we keep
                // relying on it to extract target touches.
                target: event.target,
                handle: handle,
                connect: data.connect,
                listeners: listeners,
                startCalcPoint: event.calcPoint,
                baseSize: baseSize(),
                pageOffset: event.pageOffset,
                handleNumbers: data.handleNumbers,
                buttonsProperty: event.buttons,
                locations: scope_Locations.slice(),
            });
            var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers,
            });
            var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers,
            });
            // We want to make sure we pushed the listeners in the listener list rather than creating
            // a new one as it has already been passed to the event handlers.
            listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
            // Text selection isn't an issue on touch devices,
            // so adding cursor styles can be skipped.
            if (event.cursor) {
                // Prevent the 'I' cursor and extend the range-drag cursor.
                scope_Body.style.cursor = getComputedStyle(event.target).cursor;
                // Mark the target with a dragging state.
                if (scope_Handles.length > 1) {
                    addClass(scope_Target, options.cssClasses.drag);
                }
                // Prevent text selection when dragging the handles.
                // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
                // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
                // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
                // The 'cursor' flag is false.
                // See: http://caniuse.com/#search=selectstart
                scope_Body.addEventListener("selectstart", preventDefault, false);
            }
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("start", handleNumber);
            });
        }
        // Move closest handle to tapped location.
        function eventTap(event) {
            // The tap event shouldn't propagate up
            event.stopPropagation();
            var proposal = calcPointToPercentage(event.calcPoint);
            var handleNumber = getClosestHandle(proposal);
            // Tackle the case that all handles are 'disabled'.
            if (handleNumber === false) {
                return;
            }
            // Flag the slider as it is now in a transitional state.
            // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
            if (!options.events.snap) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }
            setHandle(handleNumber, proposal, true, true);
            setZindex();
            fireEvent("slide", handleNumber, true);
            fireEvent("update", handleNumber, true);
            if (!options.events.snap) {
                fireEvent("change", handleNumber, true);
                fireEvent("set", handleNumber, true);
            }
            else {
                eventStart(event, { handleNumbers: [handleNumber] });
            }
        }
        // Fires a 'hover' event for a hovered mouse/pen position.
        function eventHover(event) {
            var proposal = calcPointToPercentage(event.calcPoint);
            var to = scope_Spectrum.getStep(proposal);
            var value = scope_Spectrum.fromStepping(to);
            Object.keys(scope_Events).forEach(function (targetEvent) {
                if ("hover" === targetEvent.split(".")[0]) {
                    scope_Events[targetEvent].forEach(function (callback) {
                        callback.call(scope_Self, value);
                    });
                }
            });
        }
        // Handles keydown on focused handles
        // Don't move the document when pressing arrow keys on focused handles
        function eventKeydown(event, handleNumber) {
            if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
                return false;
            }
            var horizontalKeys = ["Left", "Right"];
            var verticalKeys = ["Down", "Up"];
            var largeStepKeys = ["PageDown", "PageUp"];
            var edgeKeys = ["Home", "End"];
            if (options.dir && !options.ort) {
                // On an right-to-left slider, the left and right keys act inverted
                horizontalKeys.reverse();
            }
            else if (options.ort && !options.dir) {
                // On a top-to-bottom slider, the up and down keys act inverted
                verticalKeys.reverse();
                largeStepKeys.reverse();
            }
            // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
            var key = event.key.replace("Arrow", "");
            var isLargeDown = key === largeStepKeys[0];
            var isLargeUp = key === largeStepKeys[1];
            var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
            var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
            var isMin = key === edgeKeys[0];
            var isMax = key === edgeKeys[1];
            if (!isDown && !isUp && !isMin && !isMax) {
                return true;
            }
            event.preventDefault();
            var to;
            if (isUp || isDown) {
                var direction = isDown ? 0 : 1;
                var steps = getNextStepsForHandle(handleNumber);
                var step = steps[direction];
                // At the edge of a slider, do nothing
                if (step === null) {
                    return false;
                }
                // No step set, use the default of 10% of the sub-range
                if (step === false) {
                    step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
                }
                if (isLargeUp || isLargeDown) {
                    step *= options.keyboardPageMultiplier;
                }
                else {
                    step *= options.keyboardMultiplier;
                }
                // Step over zero-length ranges (#948);
                step = Math.max(step, 0.0000001);
                // Decrement for down steps
                step = (isDown ? -1 : 1) * step;
                to = scope_Values[handleNumber] + step;
            }
            else if (isMax) {
                // End key
                to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
            }
            else {
                // Home key
                to = options.spectrum.xVal[0];
            }
            setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
            fireEvent("slide", handleNumber);
            fireEvent("update", handleNumber);
            fireEvent("change", handleNumber);
            fireEvent("set", handleNumber);
            return false;
        }
        // Attach events to several slider parts.
        function bindSliderEvents(behaviour) {
            // Attach the standard drag event to the handles.
            if (!behaviour.fixed) {
                scope_Handles.forEach(function (handle, index) {
                    // These events are only bound to the visual handle
                    // element, not the 'real' origin element.
                    attachEvent(actions.start, handle.children[0], eventStart, {
                        handleNumbers: [index],
                    });
                });
            }
            // Attach the tap event to the slider base.
            if (behaviour.tap) {
                attachEvent(actions.start, scope_Base, eventTap, {});
            }
            // Fire hover events
            if (behaviour.hover) {
                attachEvent(actions.move, scope_Base, eventHover, {
                    hover: true,
                });
            }
            // Make the range draggable.
            if (behaviour.drag) {
                scope_Connects.forEach(function (connect, index) {
                    if (connect === false || index === 0 || index === scope_Connects.length - 1) {
                        return;
                    }
                    var handleBefore = scope_Handles[index - 1];
                    var handleAfter = scope_Handles[index];
                    var eventHolders = [connect];
                    var handlesToDrag = [handleBefore, handleAfter];
                    var handleNumbersToDrag = [index - 1, index];
                    addClass(connect, options.cssClasses.draggable);
                    // When the range is fixed, the entire range can
                    // be dragged by the handles. The handle in the first
                    // origin will propagate the start event upward,
                    // but it needs to be bound manually on the other.
                    if (behaviour.fixed) {
                        eventHolders.push(handleBefore.children[0]);
                        eventHolders.push(handleAfter.children[0]);
                    }
                    if (behaviour.dragAll) {
                        handlesToDrag = scope_Handles;
                        handleNumbersToDrag = scope_HandleNumbers;
                    }
                    eventHolders.forEach(function (eventHolder) {
                        attachEvent(actions.start, eventHolder, eventStart, {
                            handles: handlesToDrag,
                            handleNumbers: handleNumbersToDrag,
                            connect: connect,
                        });
                    });
                });
            }
        }
        // Attach an event to this slider, possibly including a namespace
        function bindEvent(namespacedEvent, callback) {
            scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
            scope_Events[namespacedEvent].push(callback);
            // If the event bound is 'update,' fire it immediately for all handles.
            if (namespacedEvent.split(".")[0] === "update") {
                scope_Handles.forEach(function (a, index) {
                    fireEvent("update", index);
                });
            }
        }
        function isInternalNamespace(namespace) {
            return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
        }
        // Undo attachment of event
        function removeEvent(namespacedEvent) {
            var event = namespacedEvent && namespacedEvent.split(".")[0];
            var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
            Object.keys(scope_Events).forEach(function (bind) {
                var tEvent = bind.split(".")[0];
                var tNamespace = bind.substring(tEvent.length);
                if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
                    // only delete protected internal event if intentional
                    if (!isInternalNamespace(tNamespace) || namespace === tNamespace) {
                        delete scope_Events[bind];
                    }
                }
            });
        }
        // External event handling
        function fireEvent(eventName, handleNumber, tap) {
            Object.keys(scope_Events).forEach(function (targetEvent) {
                var eventType = targetEvent.split(".")[0];
                if (eventName === eventType) {
                    scope_Events[targetEvent].forEach(function (callback) {
                        callback.call(
                        // Use the slider public API as the scope ('this')
                        scope_Self, 
                        // Return values as array, so arg_1[arg_2] is always valid.
                        scope_Values.map(options.format.to), 
                        // Handle index, 0 or 1
                        handleNumber, 
                        // Un-formatted slider values
                        scope_Values.slice(), 
                        // Event is fired by tap, true or false
                        tap || false, 
                        // Left offset of the handle, in relation to the slider
                        scope_Locations.slice(), 
                        // add the slider public API to an accessible parameter when this is unavailable
                        scope_Self);
                    });
                }
            });
        }
        // Split out the handle positioning logic so the Move event can use it, too
        function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue, smoothSteps) {
            var distance;
            // For sliders with multiple handles, limit movement to the other handle.
            // Apply the margin option by adding it to the handle positions.
            if (scope_Handles.length > 1 && !options.events.unconstrained) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
                    to = Math.max(to, distance);
                }
                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
                    to = Math.min(to, distance);
                }
            }
            // The limit option has the opposite effect, limiting handles to a
            // maximum distance from another. Limit must be > 0, as otherwise
            // handles would be unmovable.
            if (scope_Handles.length > 1 && options.limit) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
                    to = Math.min(to, distance);
                }
                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
                    to = Math.max(to, distance);
                }
            }
            // The padding option keeps the handles a certain distance from the
            // edges of the slider. Padding must be > 0.
            if (options.padding) {
                if (handleNumber === 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
                    to = Math.max(to, distance);
                }
                if (handleNumber === scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
                    to = Math.min(to, distance);
                }
            }
            if (!smoothSteps) {
                to = scope_Spectrum.getStep(to);
            }
            // Limit percentage to the 0 - 100 range
            to = limit(to);
            // Return false if handle can't move
            if (to === reference[handleNumber] && !getValue) {
                return false;
            }
            return to;
        }
        // Uses slider orientation to create CSS rules. a = base value;
        function inRuleOrder(v, a) {
            var o = options.ort;
            return (o ? a : v) + ", " + (o ? v : a);
        }
        // Moves handle(s) by a percentage
        // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
        function moveHandles(upward, proposal, locations, handleNumbers, connect) {
            var proposals = locations.slice();
            // Store first handle now, so we still have it in case handleNumbers is reversed
            var firstHandle = handleNumbers[0];
            var smoothSteps = options.events.smoothSteps;
            var b = [!upward, upward];
            var f = [upward, !upward];
            // Copy handleNumbers so we don't change the dataset
            handleNumbers = handleNumbers.slice();
            // Check to see which handle is 'leading'.
            // If that one can't move the second can't either.
            if (upward) {
                handleNumbers.reverse();
            }
            // Step 1: get the maximum percentage that any of the handles can move
            if (handleNumbers.length > 1) {
                handleNumbers.forEach(function (handleNumber, o) {
                    var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false, smoothSteps);
                    // Stop if one of the handles can't move.
                    if (to === false) {
                        proposal = 0;
                    }
                    else {
                        proposal = to - proposals[handleNumber];
                        proposals[handleNumber] = to;
                    }
                });
            }
            // If using one handle, check backward AND forward
            else {
                b = f = [true];
            }
            var state = false;
            // Step 2: Try to set the handles with the found percentage
            handleNumbers.forEach(function (handleNumber, o) {
                state =
                    setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o], false, smoothSteps) || state;
            });
            // Step 3: If a handle moved, fire events
            if (state) {
                handleNumbers.forEach(function (handleNumber) {
                    fireEvent("update", handleNumber);
                    fireEvent("slide", handleNumber);
                });
                // If target is a connect, then fire drag event
                if (connect != undefined) {
                    fireEvent("drag", firstHandle);
                }
            }
        }
        // Takes a base value and an offset. This offset is used for the connect bar size.
        // In the initial design for this feature, the origin element was 1% wide.
        // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
        // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
        function transformDirection(a, b) {
            return options.dir ? 100 - a - b : a;
        }
        // Updates scope_Locations and scope_Values, updates visual state
        function updateHandlePosition(handleNumber, to) {
            // Update locations.
            scope_Locations[handleNumber] = to;
            // Convert the value to the slider stepping/range.
            scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
            var translation = transformDirection(to, 0) - scope_DirOffset;
            var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
            scope_Handles[handleNumber].style[options.transformRule] = translateRule;
            updateConnect(handleNumber);
            updateConnect(handleNumber + 1);
        }
        // Handles before the slider middle are stacked later = higher,
        // Handles after the middle later is lower
        // [[7] [8] .......... | .......... [5] [4]
        function setZindex() {
            scope_HandleNumbers.forEach(function (handleNumber) {
                var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                scope_Handles[handleNumber].style.zIndex = String(zIndex);
            });
        }
        // Test suggested values and apply margin, step.
        // if exactInput is true, don't run checkHandlePosition, then the handle can be placed in between steps (#436)
        function setHandle(handleNumber, to, lookBackward, lookForward, exactInput, smoothSteps) {
            if (!exactInput) {
                to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false, smoothSteps);
            }
            if (to === false) {
                return false;
            }
            updateHandlePosition(handleNumber, to);
            return true;
        }
        // Updates style attribute for connect nodes
        function updateConnect(index) {
            // Skip connects set to false
            if (!scope_Connects[index]) {
                return;
            }
            var l = 0;
            var h = 100;
            if (index !== 0) {
                l = scope_Locations[index - 1];
            }
            if (index !== scope_Connects.length - 1) {
                h = scope_Locations[index];
            }
            // We use two rules:
            // 'translate' to change the left/top offset;
            // 'scale' to change the width of the element;
            // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
            var connectWidth = h - l;
            var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
            var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
            scope_Connects[index].style[options.transformRule] =
                translateRule + " " + scaleRule;
        }
        // Parses value passed to .set method. Returns current value if not parse-able.
        function resolveToValue(to, handleNumber) {
            // Setting with null indicates an 'ignore'.
            // Inputting 'false' is invalid.
            if (to === null || to === false || to === undefined) {
                return scope_Locations[handleNumber];
            }
            // If a formatted number was passed, attempt to decode it.
            if (typeof to === "number") {
                to = String(to);
            }
            to = options.format.from(to);
            if (to !== false) {
                to = scope_Spectrum.toStepping(to);
            }
            // If parsing the number failed, use the current value.
            if (to === false || isNaN(to)) {
                return scope_Locations[handleNumber];
            }
            return to;
        }
        // Set the slider value.
        function valueSet(input, fireSetEvent, exactInput) {
            var values = asArray(input);
            var isInit = scope_Locations[0] === undefined;
            // Event fires by default
            fireSetEvent = fireSetEvent === undefined ? true : fireSetEvent;
            // Animation is optional.
            // Make sure the initial values were set before using animated placement.
            if (options.animate && !isInit) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }
            // First pass, without lookAhead but with lookBackward. Values are set from left to right.
            scope_HandleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
            });
            var i = scope_HandleNumbers.length === 1 ? 0 : 1;
            // Spread handles evenly across the slider if the range has no size (min=max)
            if (isInit && scope_Spectrum.hasNoSize()) {
                exactInput = true;
                scope_Locations[0] = 0;
                if (scope_HandleNumbers.length > 1) {
                    var space_1 = 100 / (scope_HandleNumbers.length - 1);
                    scope_HandleNumbers.forEach(function (handleNumber) {
                        scope_Locations[handleNumber] = handleNumber * space_1;
                    });
                }
            }
            // Secondary passes. Now that all base values are set, apply constraints.
            // Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)
            for (; i < scope_HandleNumbers.length; ++i) {
                scope_HandleNumbers.forEach(function (handleNumber) {
                    setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
                });
            }
            setZindex();
            scope_HandleNumbers.forEach(function (handleNumber) {
                fireEvent("update", handleNumber);
                // Fire the event only for handles that received a new value, as per #579
                if (values[handleNumber] !== null && fireSetEvent) {
                    fireEvent("set", handleNumber);
                }
            });
        }
        // Reset slider to initial values
        function valueReset(fireSetEvent) {
            valueSet(options.start, fireSetEvent);
        }
        // Set value for a single handle
        function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
            // Ensure numeric input
            handleNumber = Number(handleNumber);
            if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
                throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
            }
            // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
            // The exactInput argument can be used to ignore slider stepping (#436)
            setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
            fireEvent("update", handleNumber);
            if (fireSetEvent) {
                fireEvent("set", handleNumber);
            }
        }
        // Get the slider value.
        function valueGet(unencoded) {
            if (unencoded === void 0) { unencoded = false; }
            if (unencoded) {
                // return a copy of the raw values
                return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
            }
            var values = scope_Values.map(options.format.to);
            // If only one handle is used, return a single value.
            if (values.length === 1) {
                return values[0];
            }
            return values;
        }
        // Removes classes from the root and empties it.
        function destroy() {
            // remove protected internal listeners
            removeEvent(INTERNAL_EVENT_NS.aria);
            removeEvent(INTERNAL_EVENT_NS.tooltips);
            Object.keys(options.cssClasses).forEach(function (key) {
                removeClass(scope_Target, options.cssClasses[key]);
            });
            while (scope_Target.firstChild) {
                scope_Target.removeChild(scope_Target.firstChild);
            }
            delete scope_Target.noUiSlider;
        }
        function getNextStepsForHandle(handleNumber) {
            var location = scope_Locations[handleNumber];
            var nearbySteps = scope_Spectrum.getNearbySteps(location);
            var value = scope_Values[handleNumber];
            var increment = nearbySteps.thisStep.step;
            var decrement = null;
            // If snapped, directly use defined step value
            if (options.snap) {
                return [
                    value - nearbySteps.stepBefore.startValue || null,
                    nearbySteps.stepAfter.startValue - value || null,
                ];
            }
            // If the next value in this step moves into the next step,
            // the increment is the start of the next step - the current value
            if (increment !== false) {
                if (value + increment > nearbySteps.stepAfter.startValue) {
                    increment = nearbySteps.stepAfter.startValue - value;
                }
            }
            // If the value is beyond the starting point
            if (value > nearbySteps.thisStep.startValue) {
                decrement = nearbySteps.thisStep.step;
            }
            else if (nearbySteps.stepBefore.step === false) {
                decrement = false;
            }
            // If a handle is at the start of a step, it always steps back into the previous step first
            else {
                decrement = value - nearbySteps.stepBefore.highestStep;
            }
            // Now, if at the slider edges, there is no in/decrement
            if (location === 100) {
                increment = null;
            }
            else if (location === 0) {
                decrement = null;
            }
            // As per #391, the comparison for the decrement step can have some rounding issues.
            var stepDecimals = scope_Spectrum.countStepDecimals();
            // Round per #391
            if (increment !== null && increment !== false) {
                increment = Number(increment.toFixed(stepDecimals));
            }
            if (decrement !== null && decrement !== false) {
                decrement = Number(decrement.toFixed(stepDecimals));
            }
            return [decrement, increment];
        }
        // Get the current step size for the slider.
        function getNextSteps() {
            return scope_HandleNumbers.map(getNextStepsForHandle);
        }
        // Updatable: margin, limit, padding, step, range, animate, snap
        function updateOptions(optionsToUpdate, fireSetEvent) {
            // Spectrum is created using the range, snap, direction and step options.
            // 'snap' and 'step' can be updated.
            // If 'snap' and 'step' are not passed, they should remain unchanged.
            var v = valueGet();
            var updateAble = [
                "margin",
                "limit",
                "padding",
                "range",
                "animate",
                "snap",
                "step",
                "format",
                "pips",
                "tooltips",
            ];
            // Only change options that we're actually passed to update.
            updateAble.forEach(function (name) {
                // Check for undefined. null removes the value.
                if (optionsToUpdate[name] !== undefined) {
                    originalOptions[name] = optionsToUpdate[name];
                }
            });
            var newOptions = testOptions(originalOptions);
            // Load new options into the slider state
            updateAble.forEach(function (name) {
                if (optionsToUpdate[name] !== undefined) {
                    options[name] = newOptions[name];
                }
            });
            scope_Spectrum = newOptions.spectrum;
            // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
            options.margin = newOptions.margin;
            options.limit = newOptions.limit;
            options.padding = newOptions.padding;
            // Update pips, removes existing.
            if (options.pips) {
                pips(options.pips);
            }
            else {
                removePips();
            }
            // Update tooltips, removes existing.
            if (options.tooltips) {
                tooltips();
            }
            else {
                removeTooltips();
            }
            // Invalidate the current positioning so valueSet forces an update.
            scope_Locations = [];
            valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
        }
        // Initialization steps
        function setupSlider() {
            // Create the base element, initialize HTML and set classes.
            // Add handles and connect elements.
            scope_Base = addSlider(scope_Target);
            addElements(options.connect, scope_Base);
            // Attach user events.
            bindSliderEvents(options.events);
            // Use the public value method to set the start values.
            valueSet(options.start);
            if (options.pips) {
                pips(options.pips);
            }
            if (options.tooltips) {
                tooltips();
            }
            aria();
        }
        setupSlider();
        var scope_Self = {
            destroy: destroy,
            steps: getNextSteps,
            on: bindEvent,
            off: removeEvent,
            get: valueGet,
            set: valueSet,
            setHandle: valueSetHandle,
            reset: valueReset,
            // Exposed for unit testing, don't use this in your application.
            __moveHandles: function (upward, proposal, handleNumbers) {
                moveHandles(upward, proposal, scope_Locations, handleNumbers);
            },
            options: originalOptions,
            updateOptions: updateOptions,
            target: scope_Target,
            removePips: removePips,
            removeTooltips: removeTooltips,
            getPositions: function () {
                return scope_Locations.slice();
            },
            getTooltips: function () {
                return scope_Tooltips;
            },
            getOrigins: function () {
                return scope_Handles;
            },
            pips: pips, // Issue #594
        };
        return scope_Self;
    }
    // Run the standard initializer
    function initialize(target, originalOptions) {
        if (!target || !target.nodeName) {
            throw new Error("noUiSlider: create requires a single element, got: " + target);
        }
        // Throw an error if the slider was already initialized.
        if (target.noUiSlider) {
            throw new Error("noUiSlider: Slider was already initialized.");
        }
        // Test the options and create the slider environment;
        var options = testOptions(originalOptions);
        var api = scope(target, options, originalOptions);
        target.noUiSlider = api;
        return api;
    }
    var nouislider = {
        // Exposed for unit testing, don't use this in your application.
        __spectrum: Spectrum,
        // A reference to the default classes, allows global changes.
        // Use the cssClasses option for changes to one slider.
        cssClasses: cssClasses,
        create: initialize,
    };

    exports.create = initialize;
    exports.cssClasses = cssClasses;
    exports["default"] = nouislider;

    Object.defineProperty(exports, '__esModule', { value: true });

}));

},{}],"../node_modules/nouislider/dist/nouislider.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/form-elements/form-elements.js":[function(require,module,exports) {
"use strict";

var _airDatepicker = _interopRequireDefault(require("air-datepicker"));

require("air-datepicker/air-datepicker.css");

var _nouislider = _interopRequireDefault(require("nouislider"));

require("nouislider/dist/nouislider.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//air-datapicker
var cal1, cal2, onePicker, calendarInPage;
var apply = {
  content: 'Применить',
  className: 'custom-button',
  onclick: function onclick(daySelect) {
    var date = newDate('1995-07-17');
    daySelect.selectDate(date);
    daySelect.setViewDate(date);
  }
};
cal1 = new _airDatepicker.default('#date-picker-cal1', {
  range: true,
  multipleDatesSeparator: '-',
  inline: false,
  buttons: ['clear', apply],
  onSelect: function onSelect(_ref) {
    var date = _ref.date;
    cal1.upDate({
      minDate: date
    });
  }
});
cal2 = new _airDatepicker.default('#date-picker-cal2', {
  range: true,
  multipleDatesSeparator: '-',
  inline: false,
  buttons: ['clear', apply],
  onSelect: function onSelect(_ref2) {
    var date = _ref2.date;
    cal2.upDate({
      maxDate: date
    });
  }
});
onePicker = new _airDatepicker.default('#one-picker', {
  range: true,
  multipleDatesSeparator: ' - ',
  inline: false,
  buttons: ['clear', apply]
}); //calendar

calendarInPage = new _airDatepicker.default('#calendar', {
  inline: true,
  buttons: ['clear', apply],
  range: true,
  multipleDatesSeparator: '-'
}); //nuUiSlider

var slider = document.getElementById('slider');

_nouislider.default.create(slider, {
  start: [5000, 10000],
  connect: true,
  range: {
    'min': 0,
    'max': 15000
  }
});

var valueNoSlider = [document.querySelector(".js-value-lower"), document.querySelector(".js-value-upper")];
slider.noUiSlider.on("update", function (values, handle) {
  valueNoSlider[handle].innerHTML = Math.round(values[handle]);
}); //dropdown expandble

var dropdownExpandable = document.querySelector(".text-field__expandable-checkbox-list-hidden");
document.addEventListener("click", expandable);

function expandable(e) {
  if (e.target.closest(".js-display-hidden")) {
    dropdownExpandable.classList.toggle(".active-expandble");
    document.querySelector(".js-material-hidden").innerHTML = "expand_less";
  }

  if (!e.target.closest(".js-display-hidden")) {
    document.querySelector(".js-material-hidden").innerHTML = "expand_more";
  }
} //dropdown-quest


var dropdownQuest = document.querySelector(".text-field__block-list-hidden");
document.addEventListener("click", quest);

function quest(event) {
  if (event.target.closest(".js-input-guest")) {
    dropdownQuest.classList.toggle(".active-guest");
    document.querySelector(".js-material-hidden").innerHTML = "expand_less";
    document.querySelector(".text-field__input-guest").style.borderRadius = "4px 4px 0 0";
  } else {
    document.querySelector(".js-material-hidden").innerHTML = "expand_more";
    document.querySelector(".text-field__input-guest").style.borderRadius = "4px";
  }
}
},{"air-datepicker":"../node_modules/air-datepicker/index.es.js","air-datepicker/air-datepicker.css":"../node_modules/air-datepicker/air-datepicker.css","nouislider":"../node_modules/nouislider/dist/nouislider.js","nouislider/dist/nouislider.css":"../node_modules/nouislider/dist/nouislider.css"}],"main.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55571" + '/');

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