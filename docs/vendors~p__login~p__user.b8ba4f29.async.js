(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"1hJj":function(module,exports,__webpack_require__){eval(`var MapCache = __webpack_require__("e4Nc"),
    setCacheAdd = __webpack_require__("ftKO"),
    setCacheHas = __webpack_require__("3A9y");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to \`SetCache\`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


//# sourceURL=webpack:///./node_modules/lodash/_SetCache.js?`)},"3A9y":function(module,exports){eval(`/**
 * Checks if \`value\` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns \`true\` if \`value\` is found, else \`false\`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


//# sourceURL=webpack:///./node_modules/lodash/_setCacheHas.js?`)},"7fqy":function(module,exports){eval(`/**
 * Converts \`map\` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


//# sourceURL=webpack:///./node_modules/lodash/_mapToArray.js?`)},HDyB:function(module,exports,__webpack_require__){eval(`var Symbol = __webpack_require__("nmnc"),
    Uint8Array = __webpack_require__("JHRd"),
    eq = __webpack_require__("ljhN"),
    equalArrays = __webpack_require__("or5M"),
    mapToArray = __webpack_require__("7fqy"),
    setToArray = __webpack_require__("rEGp");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** \`Object#toString\` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of \`baseIsEqualDeep\` for comparing objects of
 * the same \`toStringTag\`.
 *
 * **Note:** This function only supports comparing values with tags of
 * \`Boolean\`, \`Date\`, \`Error\`, \`Number\`, \`RegExp\`, or \`String\`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The \`toStringTag\` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See \`baseIsEqual\` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed \`object\` and \`other\` objects.
 * @returns {boolean} Returns \`true\` if the objects are equivalent, else \`false\`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to \`1\` or \`0\` and dates to milliseconds.
      // Invalid dates are coerced to \`NaN\`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


//# sourceURL=webpack:///./node_modules/lodash/_equalByTag.js?`)},QoRX:function(module,exports){eval(`/**
 * A specialized version of \`_.some\` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns \`true\` if any element passes the predicate check,
 *  else \`false\`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


//# sourceURL=webpack:///./node_modules/lodash/_arraySome.js?`)},"Y+p1":function(module,exports,__webpack_require__){eval(`var baseIsEqual = __webpack_require__("wF/u");

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, \`Object\` objects, regexes,
 * sets, strings, symbols, and typed arrays. \`Object\` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. \`===\`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns \`true\` if the values are equivalent, else \`false\`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


//# sourceURL=webpack:///./node_modules/lodash/isEqual.js?`)},cuOD:function(module,exports,__webpack_require__){"use strict";eval(`

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _scrollbar = __webpack_require__("nikJ");

var _scrollbar2 = _interopRequireDefault(_scrollbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _scrollbar2.default;
module.exports = exports['default'];

//# sourceURL=webpack:///./node_modules/react-perfect-scrollbar/lib/index.js?`)},e5cp:function(module,exports,__webpack_require__){eval(`var Stack = __webpack_require__("fmRc"),
    equalArrays = __webpack_require__("or5M"),
    equalByTag = __webpack_require__("HDyB"),
    equalObjects = __webpack_require__("seXi"),
    getTag = __webpack_require__("QqLw"),
    isArray = __webpack_require__("Z0cm"),
    isBuffer = __webpack_require__("DSRE"),
    isTypedArray = __webpack_require__("c6wG");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** \`Object#toString\` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of \`baseIsEqual\` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See \`baseIsEqual\` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed \`object\` and \`other\` objects.
 * @returns {boolean} Returns \`true\` if the objects are equivalent, else \`false\`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


//# sourceURL=webpack:///./node_modules/lodash/_baseIsEqualDeep.js?`)},ftKO:function(module,exports){eval(`/** Used to stand-in for \`undefined\` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds \`value\` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


//# sourceURL=webpack:///./node_modules/lodash/_setCacheAdd.js?`)},kVbL:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/react-perfect-scrollbar/dist/css/styles.css?`)},"l+S1":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/SearchOutlined.js
// This icon file is generated automatically.
var SearchOutlined_SearchOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, "name": "search", "theme": "outlined" };
/* harmony default export */ var asn_SearchOutlined = (SearchOutlined_SearchOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__("6VBw");

// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/SearchOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_SearchOutlined_SearchOutlined = function SearchOutlined(props, ref) {
  return /*#__PURE__*/react["createElement"](AntdIcon["a" /* default */], Object.assign({}, props, {
    ref: ref,
    icon: asn_SearchOutlined
  }));
};

icons_SearchOutlined_SearchOutlined.displayName = 'SearchOutlined';
/* harmony default export */ var icons_SearchOutlined = __webpack_exports__["a"] = (/*#__PURE__*/react["forwardRef"](icons_SearchOutlined_SearchOutlined));

//# sourceURL=webpack:///./node_modules/@ant-design/icons/es/icons/SearchOutlined.js_+_1_modules?`)},nikJ:function(module,exports,__webpack_require__){"use strict";eval(`

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("q1tI");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("17x9");

var _perfectScrollbar = __webpack_require__("t/UT");

var _perfectScrollbar2 = _interopRequireDefault(_perfectScrollbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var handlerNameByEvent = {
  'ps-scroll-y': 'onScrollY',
  'ps-scroll-x': 'onScrollX',
  'ps-scroll-up': 'onScrollUp',
  'ps-scroll-down': 'onScrollDown',
  'ps-scroll-left': 'onScrollLeft',
  'ps-scroll-right': 'onScrollRight',
  'ps-y-reach-start': 'onYReachStart',
  'ps-y-reach-end': 'onYReachEnd',
  'ps-x-reach-start': 'onXReachStart',
  'ps-x-reach-end': 'onXReachEnd'
};
Object.freeze(handlerNameByEvent);

var ScrollBar = function (_Component) {
  _inherits(ScrollBar, _Component);

  function ScrollBar(props) {
    _classCallCheck(this, ScrollBar);

    var _this = _possibleConstructorReturn(this, (ScrollBar.__proto__ || Object.getPrototypeOf(ScrollBar)).call(this, props));

    _this.handleRef = _this.handleRef.bind(_this);
    _this._handlerByEvent = {};
    return _this;
  }

  _createClass(ScrollBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.option) {
        console.warn('react-perfect-scrollbar: the "option" prop has been deprecated in favor of "options"');
      }

      this._ps = new _perfectScrollbar2.default(this._container, this.props.options || this.props.option);
      // hook up events
      this._updateEventHook();
      this._updateClassName();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      this._updateEventHook(prevProps);

      this.updateScroll();

      if (prevProps.className !== this.props.className) {
        this._updateClassName();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this2 = this;

      // unhook up evens
      Object.keys(this._handlerByEvent).forEach(function (key) {
        var value = _this2._handlerByEvent[key];

        if (value) {
          _this2._container.removeEventListener(key, value, false);
        }
      });
      this._handlerByEvent = {};
      this._ps.destroy();
      this._ps = null;
    }
  }, {
    key: '_updateEventHook',
    value: function _updateEventHook() {
      var _this3 = this;

      var prevProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // hook up events
      Object.keys(handlerNameByEvent).forEach(function (key) {
        var callback = _this3.props[handlerNameByEvent[key]];
        var prevCallback = prevProps[handlerNameByEvent[key]];
        if (callback !== prevCallback) {
          if (prevCallback) {
            var prevHandler = _this3._handlerByEvent[key];
            _this3._container.removeEventListener(key, prevHandler, false);
            _this3._handlerByEvent[key] = null;
          }
          if (callback) {
            var handler = function handler() {
              return callback(_this3._container);
            };
            _this3._container.addEventListener(key, handler, false);
            _this3._handlerByEvent[key] = handler;
          }
        }
      });
    }
  }, {
    key: '_updateClassName',
    value: function _updateClassName() {
      var className = this.props.className;


      var psClassNames = this._container.className.split(' ').filter(function (name) {
        return name.match(/^ps([-_].+|)$/);
      }).join(' ');

      if (this._container) {
        this._container.className = 'scrollbar-container' + (className ? ' ' + className : '') + (psClassNames ? ' ' + psClassNames : '');
      }
    }
  }, {
    key: 'updateScroll',
    value: function updateScroll() {
      this.props.onSync(this._ps);
    }
  }, {
    key: 'handleRef',
    value: function handleRef(ref) {
      this._container = ref;
      this.props.containerRef(ref);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          option = _props.option,
          options = _props.options,
          containerRef = _props.containerRef,
          onScrollY = _props.onScrollY,
          onScrollX = _props.onScrollX,
          onScrollUp = _props.onScrollUp,
          onScrollDown = _props.onScrollDown,
          onScrollLeft = _props.onScrollLeft,
          onScrollRight = _props.onScrollRight,
          onYReachStart = _props.onYReachStart,
          onYReachEnd = _props.onYReachEnd,
          onXReachStart = _props.onXReachStart,
          onXReachEnd = _props.onXReachEnd,
          component = _props.component,
          onSync = _props.onSync,
          children = _props.children,
          remainProps = _objectWithoutProperties(_props, ['className', 'style', 'option', 'options', 'containerRef', 'onScrollY', 'onScrollX', 'onScrollUp', 'onScrollDown', 'onScrollLeft', 'onScrollRight', 'onYReachStart', 'onYReachEnd', 'onXReachStart', 'onXReachEnd', 'component', 'onSync', 'children']);

      var Comp = component;

      return _react2.default.createElement(
        Comp,
        _extends({ style: style, ref: this.handleRef }, remainProps),
        children
      );
    }
  }]);

  return ScrollBar;
}(_react.Component);

exports.default = ScrollBar;


ScrollBar.defaultProps = {
  className: '',
  style: undefined,
  option: undefined,
  options: undefined,
  containerRef: function containerRef() {},
  onScrollY: undefined,
  onScrollX: undefined,
  onScrollUp: undefined,
  onScrollDown: undefined,
  onScrollLeft: undefined,
  onScrollRight: undefined,
  onYReachStart: undefined,
  onYReachEnd: undefined,
  onXReachStart: undefined,
  onXReachEnd: undefined,
  onSync: function onSync(ps) {
    return ps.update();
  },
  component: 'div'
};

ScrollBar.propTypes = {
  children: _propTypes.PropTypes.node.isRequired,
  className: _propTypes.PropTypes.string,
  style: _propTypes.PropTypes.object,
  option: _propTypes.PropTypes.object,
  options: _propTypes.PropTypes.object,
  containerRef: _propTypes.PropTypes.func,
  onScrollY: _propTypes.PropTypes.func,
  onScrollX: _propTypes.PropTypes.func,
  onScrollUp: _propTypes.PropTypes.func,
  onScrollDown: _propTypes.PropTypes.func,
  onScrollLeft: _propTypes.PropTypes.func,
  onScrollRight: _propTypes.PropTypes.func,
  onYReachStart: _propTypes.PropTypes.func,
  onYReachEnd: _propTypes.PropTypes.func,
  onXReachStart: _propTypes.PropTypes.func,
  onXReachEnd: _propTypes.PropTypes.func,
  onSync: _propTypes.PropTypes.func,
  component: _propTypes.PropTypes.string
};
module.exports = exports['default'];

//# sourceURL=webpack:///./node_modules/react-perfect-scrollbar/lib/scrollbar.js?`)},or5M:function(module,exports,__webpack_require__){eval(`var SetCache = __webpack_require__("1hJj"),
    arraySome = __webpack_require__("QoRX"),
    cacheHas = __webpack_require__("xYSL");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of \`baseIsEqualDeep\` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See \`baseIsEqual\` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed \`array\` and \`other\` objects.
 * @returns {boolean} Returns \`true\` if the arrays are equivalent, else \`false\`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


//# sourceURL=webpack:///./node_modules/lodash/_equalArrays.js?`)},rEGp:function(module,exports){eval(`/**
 * Converts \`set\` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


//# sourceURL=webpack:///./node_modules/lodash/_setToArray.js?`)},seXi:function(module,exports,__webpack_require__){eval(`var getAllKeys = __webpack_require__("qZTm");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of \`baseIsEqualDeep\` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See \`baseIsEqual\` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed \`object\` and \`other\` objects.
 * @returns {boolean} Returns \`true\` if the objects are equivalent, else \`false\`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non \`Object\` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


//# sourceURL=webpack:///./node_modules/lodash/_equalObjects.js?`)},"t/UT":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/*!\r
 * perfect-scrollbar v1.5.0\r
 * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors\r
 * Licensed under MIT\r
 */\r
\r
function get(element) {\r
  return getComputedStyle(element);\r
}\r
\r
function set(element, obj) {\r
  for (var key in obj) {\r
    var val = obj[key];\r
    if (typeof val === 'number') {\r
      val = val + "px";\r
    }\r
    element.style[key] = val;\r
  }\r
  return element;\r
}\r
\r
function div(className) {\r
  var div = document.createElement('div');\r
  div.className = className;\r
  return div;\r
}\r
\r
var elMatches =\r
  typeof Element !== 'undefined' &&\r
  (Element.prototype.matches ||\r
    Element.prototype.webkitMatchesSelector ||\r
    Element.prototype.mozMatchesSelector ||\r
    Element.prototype.msMatchesSelector);\r
\r
function matches(element, query) {\r
  if (!elMatches) {\r
    throw new Error('No element matching method supported');\r
  }\r
\r
  return elMatches.call(element, query);\r
}\r
\r
function remove(element) {\r
  if (element.remove) {\r
    element.remove();\r
  } else {\r
    if (element.parentNode) {\r
      element.parentNode.removeChild(element);\r
    }\r
  }\r
}\r
\r
function queryChildren(element, selector) {\r
  return Array.prototype.filter.call(element.children, function (child) { return matches(child, selector); }\r
  );\r
}\r
\r
var cls = {\r
  main: 'ps',\r
  rtl: 'ps__rtl',\r
  element: {\r
    thumb: function (x) { return ("ps__thumb-" + x); },\r
    rail: function (x) { return ("ps__rail-" + x); },\r
    consuming: 'ps__child--consume',\r
  },\r
  state: {\r
    focus: 'ps--focus',\r
    clicking: 'ps--clicking',\r
    active: function (x) { return ("ps--active-" + x); },\r
    scrolling: function (x) { return ("ps--scrolling-" + x); },\r
  },\r
};\r
\r
/*\r
 * Helper methods\r
 */\r
var scrollingClassTimeout = { x: null, y: null };\r
\r
function addScrollingClass(i, x) {\r
  var classList = i.element.classList;\r
  var className = cls.state.scrolling(x);\r
\r
  if (classList.contains(className)) {\r
    clearTimeout(scrollingClassTimeout[x]);\r
  } else {\r
    classList.add(className);\r
  }\r
}\r
\r
function removeScrollingClass(i, x) {\r
  scrollingClassTimeout[x] = setTimeout(\r
    function () { return i.isAlive && i.element.classList.remove(cls.state.scrolling(x)); },\r
    i.settings.scrollingThreshold\r
  );\r
}\r
\r
function setScrollingClassInstantly(i, x) {\r
  addScrollingClass(i, x);\r
  removeScrollingClass(i, x);\r
}\r
\r
var EventElement = function EventElement(element) {\r
  this.element = element;\r
  this.handlers = {};\r
};\r
\r
var prototypeAccessors = { isEmpty: { configurable: true } };\r
\r
EventElement.prototype.bind = function bind (eventName, handler) {\r
  if (typeof this.handlers[eventName] === 'undefined') {\r
    this.handlers[eventName] = [];\r
  }\r
  this.handlers[eventName].push(handler);\r
  this.element.addEventListener(eventName, handler, false);\r
};\r
\r
EventElement.prototype.unbind = function unbind (eventName, target) {\r
    var this$1 = this;\r
\r
  this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {\r
    if (target && handler !== target) {\r
      return true;\r
    }\r
    this$1.element.removeEventListener(eventName, handler, false);\r
    return false;\r
  });\r
};\r
\r
EventElement.prototype.unbindAll = function unbindAll () {\r
  for (var name in this.handlers) {\r
    this.unbind(name);\r
  }\r
};\r
\r
prototypeAccessors.isEmpty.get = function () {\r
    var this$1 = this;\r
\r
  return Object.keys(this.handlers).every(\r
    function (key) { return this$1.handlers[key].length === 0; }\r
  );\r
};\r
\r
Object.defineProperties( EventElement.prototype, prototypeAccessors );\r
\r
var EventManager = function EventManager() {\r
  this.eventElements = [];\r
};\r
\r
EventManager.prototype.eventElement = function eventElement (element) {\r
  var ee = this.eventElements.filter(function (ee) { return ee.element === element; })[0];\r
  if (!ee) {\r
    ee = new EventElement(element);\r
    this.eventElements.push(ee);\r
  }\r
  return ee;\r
};\r
\r
EventManager.prototype.bind = function bind (element, eventName, handler) {\r
  this.eventElement(element).bind(eventName, handler);\r
};\r
\r
EventManager.prototype.unbind = function unbind (element, eventName, handler) {\r
  var ee = this.eventElement(element);\r
  ee.unbind(eventName, handler);\r
\r
  if (ee.isEmpty) {\r
    // remove\r
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);\r
  }\r
};\r
\r
EventManager.prototype.unbindAll = function unbindAll () {\r
  this.eventElements.forEach(function (e) { return e.unbindAll(); });\r
  this.eventElements = [];\r
};\r
\r
EventManager.prototype.once = function once (element, eventName, handler) {\r
  var ee = this.eventElement(element);\r
  var onceHandler = function (evt) {\r
    ee.unbind(eventName, onceHandler);\r
    handler(evt);\r
  };\r
  ee.bind(eventName, onceHandler);\r
};\r
\r
function createEvent(name) {\r
  if (typeof window.CustomEvent === 'function') {\r
    return new CustomEvent(name);\r
  } else {\r
    var evt = document.createEvent('CustomEvent');\r
    evt.initCustomEvent(name, false, false, undefined);\r
    return evt;\r
  }\r
}\r
\r
function processScrollDiff(\r
  i,\r
  axis,\r
  diff,\r
  useScrollingClass,\r
  forceFireReachEvent\r
) {\r
  if ( useScrollingClass === void 0 ) useScrollingClass = true;\r
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;\r
\r
  var fields;\r
  if (axis === 'top') {\r
    fields = [\r
      'contentHeight',\r
      'containerHeight',\r
      'scrollTop',\r
      'y',\r
      'up',\r
      'down' ];\r
  } else if (axis === 'left') {\r
    fields = [\r
      'contentWidth',\r
      'containerWidth',\r
      'scrollLeft',\r
      'x',\r
      'left',\r
      'right' ];\r
  } else {\r
    throw new Error('A proper axis should be provided');\r
  }\r
\r
  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);\r
}\r
\r
function processScrollDiff$1(\r
  i,\r
  diff,\r
  ref,\r
  useScrollingClass,\r
  forceFireReachEvent\r
) {\r
  var contentHeight = ref[0];\r
  var containerHeight = ref[1];\r
  var scrollTop = ref[2];\r
  var y = ref[3];\r
  var up = ref[4];\r
  var down = ref[5];\r
  if ( useScrollingClass === void 0 ) useScrollingClass = true;\r
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;\r
\r
  var element = i.element;\r
\r
  // reset reach\r
  i.reach[y] = null;\r
\r
  // 1 for subpixel rounding\r
  if (element[scrollTop] < 1) {\r
    i.reach[y] = 'start';\r
  }\r
\r
  // 1 for subpixel rounding\r
  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {\r
    i.reach[y] = 'end';\r
  }\r
\r
  if (diff) {\r
    element.dispatchEvent(createEvent(("ps-scroll-" + y)));\r
\r
    if (diff < 0) {\r
      element.dispatchEvent(createEvent(("ps-scroll-" + up)));\r
    } else if (diff > 0) {\r
      element.dispatchEvent(createEvent(("ps-scroll-" + down)));\r
    }\r
\r
    if (useScrollingClass) {\r
      setScrollingClassInstantly(i, y);\r
    }\r
  }\r
\r
  if (i.reach[y] && (diff || forceFireReachEvent)) {\r
    element.dispatchEvent(createEvent(("ps-" + y + "-reach-" + (i.reach[y]))));\r
  }\r
}\r
\r
function toInt(x) {\r
  return parseInt(x, 10) || 0;\r
}\r
\r
function isEditable(el) {\r
  return (\r
    matches(el, 'input,[contenteditable]') ||\r
    matches(el, 'select,[contenteditable]') ||\r
    matches(el, 'textarea,[contenteditable]') ||\r
    matches(el, 'button,[contenteditable]')\r
  );\r
}\r
\r
function outerWidth(element) {\r
  var styles = get(element);\r
  return (\r
    toInt(styles.width) +\r
    toInt(styles.paddingLeft) +\r
    toInt(styles.paddingRight) +\r
    toInt(styles.borderLeftWidth) +\r
    toInt(styles.borderRightWidth)\r
  );\r
}\r
\r
var env = {\r
  isWebKit:\r
    typeof document !== 'undefined' &&\r
    'WebkitAppearance' in document.documentElement.style,\r
  supportsTouch:\r
    typeof window !== 'undefined' &&\r
    ('ontouchstart' in window ||\r
      ('maxTouchPoints' in window.navigator &&\r
        window.navigator.maxTouchPoints > 0) ||\r
      (window.DocumentTouch && document instanceof window.DocumentTouch)),\r
  supportsIePointer:\r
    typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,\r
  isChrome:\r
    typeof navigator !== 'undefined' &&\r
    /Chrome/i.test(navigator && navigator.userAgent),\r
};\r
\r
function updateGeometry(i) {\r
  var element = i.element;\r
  var roundedScrollTop = Math.floor(element.scrollTop);\r
  var rect = element.getBoundingClientRect();\r
\r
  i.containerWidth = Math.ceil(rect.width);\r
  i.containerHeight = Math.ceil(rect.height);\r
  i.contentWidth = element.scrollWidth;\r
  i.contentHeight = element.scrollHeight;\r
\r
  if (!element.contains(i.scrollbarXRail)) {\r
    // clean up and append\r
    queryChildren(element, cls.element.rail('x')).forEach(function (el) { return remove(el); }\r
    );\r
    element.appendChild(i.scrollbarXRail);\r
  }\r
  if (!element.contains(i.scrollbarYRail)) {\r
    // clean up and append\r
    queryChildren(element, cls.element.rail('y')).forEach(function (el) { return remove(el); }\r
    );\r
    element.appendChild(i.scrollbarYRail);\r
  }\r
\r
  if (\r
    !i.settings.suppressScrollX &&\r
    i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth\r
  ) {\r
    i.scrollbarXActive = true;\r
    i.railXWidth = i.containerWidth - i.railXMarginWidth;\r
    i.railXRatio = i.containerWidth / i.railXWidth;\r
    i.scrollbarXWidth = getThumbSize(\r
      i,\r
      toInt((i.railXWidth * i.containerWidth) / i.contentWidth)\r
    );\r
    i.scrollbarXLeft = toInt(\r
      ((i.negativeScrollAdjustment + element.scrollLeft) *\r
        (i.railXWidth - i.scrollbarXWidth)) /\r
        (i.contentWidth - i.containerWidth)\r
    );\r
  } else {\r
    i.scrollbarXActive = false;\r
  }\r
\r
  if (\r
    !i.settings.suppressScrollY &&\r
    i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight\r
  ) {\r
    i.scrollbarYActive = true;\r
    i.railYHeight = i.containerHeight - i.railYMarginHeight;\r
    i.railYRatio = i.containerHeight / i.railYHeight;\r
    i.scrollbarYHeight = getThumbSize(\r
      i,\r
      toInt((i.railYHeight * i.containerHeight) / i.contentHeight)\r
    );\r
    i.scrollbarYTop = toInt(\r
      (roundedScrollTop * (i.railYHeight - i.scrollbarYHeight)) /\r
        (i.contentHeight - i.containerHeight)\r
    );\r
  } else {\r
    i.scrollbarYActive = false;\r
  }\r
\r
  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {\r
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;\r
  }\r
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {\r
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;\r
  }\r
\r
  updateCss(element, i);\r
\r
  if (i.scrollbarXActive) {\r
    element.classList.add(cls.state.active('x'));\r
  } else {\r
    element.classList.remove(cls.state.active('x'));\r
    i.scrollbarXWidth = 0;\r
    i.scrollbarXLeft = 0;\r
    element.scrollLeft = i.isRtl === true ? i.contentWidth : 0;\r
  }\r
  if (i.scrollbarYActive) {\r
    element.classList.add(cls.state.active('y'));\r
  } else {\r
    element.classList.remove(cls.state.active('y'));\r
    i.scrollbarYHeight = 0;\r
    i.scrollbarYTop = 0;\r
    element.scrollTop = 0;\r
  }\r
}\r
\r
function getThumbSize(i, thumbSize) {\r
  if (i.settings.minScrollbarLength) {\r
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);\r
  }\r
  if (i.settings.maxScrollbarLength) {\r
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);\r
  }\r
  return thumbSize;\r
}\r
\r
function updateCss(element, i) {\r
  var xRailOffset = { width: i.railXWidth };\r
  var roundedScrollTop = Math.floor(element.scrollTop);\r
\r
  if (i.isRtl) {\r
    xRailOffset.left =\r
      i.negativeScrollAdjustment +\r
      element.scrollLeft +\r
      i.containerWidth -\r
      i.contentWidth;\r
  } else {\r
    xRailOffset.left = element.scrollLeft;\r
  }\r
  if (i.isScrollbarXUsingBottom) {\r
    xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;\r
  } else {\r
    xRailOffset.top = i.scrollbarXTop + roundedScrollTop;\r
  }\r
  set(i.scrollbarXRail, xRailOffset);\r
\r
  var yRailOffset = { top: roundedScrollTop, height: i.railYHeight };\r
  if (i.isScrollbarYUsingRight) {\r
    if (i.isRtl) {\r
      yRailOffset.right =\r
        i.contentWidth -\r
        (i.negativeScrollAdjustment + element.scrollLeft) -\r
        i.scrollbarYRight -\r
        i.scrollbarYOuterWidth -\r
        9;\r
    } else {\r
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;\r
    }\r
  } else {\r
    if (i.isRtl) {\r
      yRailOffset.left =\r
        i.negativeScrollAdjustment +\r
        element.scrollLeft +\r
        i.containerWidth * 2 -\r
        i.contentWidth -\r
        i.scrollbarYLeft -\r
        i.scrollbarYOuterWidth;\r
    } else {\r
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;\r
    }\r
  }\r
  set(i.scrollbarYRail, yRailOffset);\r
\r
  set(i.scrollbarX, {\r
    left: i.scrollbarXLeft,\r
    width: i.scrollbarXWidth - i.railBorderXWidth,\r
  });\r
  set(i.scrollbarY, {\r
    top: i.scrollbarYTop,\r
    height: i.scrollbarYHeight - i.railBorderYWidth,\r
  });\r
}\r
\r
function clickRail(i) {\r
  var element = i.element;\r
\r
  i.event.bind(i.scrollbarY, 'mousedown', function (e) { return e.stopPropagation(); });\r
  i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {\r
    var positionTop =\r
      e.pageY -\r
      window.pageYOffset -\r
      i.scrollbarYRail.getBoundingClientRect().top;\r
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;\r
\r
    i.element.scrollTop += direction * i.containerHeight;\r
    updateGeometry(i);\r
\r
    e.stopPropagation();\r
  });\r
\r
  i.event.bind(i.scrollbarX, 'mousedown', function (e) { return e.stopPropagation(); });\r
  i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {\r
    var positionLeft =\r
      e.pageX -\r
      window.pageXOffset -\r
      i.scrollbarXRail.getBoundingClientRect().left;\r
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;\r
\r
    i.element.scrollLeft += direction * i.containerWidth;\r
    updateGeometry(i);\r
\r
    e.stopPropagation();\r
  });\r
}\r
\r
function dragThumb(i) {\r
  bindMouseScrollHandler(i, [\r
    'containerWidth',\r
    'contentWidth',\r
    'pageX',\r
    'railXWidth',\r
    'scrollbarX',\r
    'scrollbarXWidth',\r
    'scrollLeft',\r
    'x',\r
    'scrollbarXRail' ]);\r
  bindMouseScrollHandler(i, [\r
    'containerHeight',\r
    'contentHeight',\r
    'pageY',\r
    'railYHeight',\r
    'scrollbarY',\r
    'scrollbarYHeight',\r
    'scrollTop',\r
    'y',\r
    'scrollbarYRail' ]);\r
}\r
\r
function bindMouseScrollHandler(\r
  i,\r
  ref\r
) {\r
  var containerHeight = ref[0];\r
  var contentHeight = ref[1];\r
  var pageY = ref[2];\r
  var railYHeight = ref[3];\r
  var scrollbarY = ref[4];\r
  var scrollbarYHeight = ref[5];\r
  var scrollTop = ref[6];\r
  var y = ref[7];\r
  var scrollbarYRail = ref[8];\r
\r
  var element = i.element;\r
\r
  var startingScrollTop = null;\r
  var startingMousePageY = null;\r
  var scrollBy = null;\r
\r
  function mouseMoveHandler(e) {\r
    if (e.touches && e.touches[0]) {\r
      e[pageY] = e.touches[0].pageY;\r
    }\r
    element[scrollTop] =\r
      startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);\r
    addScrollingClass(i, y);\r
    updateGeometry(i);\r
\r
    e.stopPropagation();\r
    e.preventDefault();\r
  }\r
\r
  function mouseUpHandler() {\r
    removeScrollingClass(i, y);\r
    i[scrollbarYRail].classList.remove(cls.state.clicking);\r
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);\r
  }\r
\r
  function bindMoves(e, touchMode) {\r
    startingScrollTop = element[scrollTop];\r
    if (touchMode && e.touches) {\r
      e[pageY] = e.touches[0].pageY;\r
    }\r
    startingMousePageY = e[pageY];\r
    scrollBy =\r
      (i[contentHeight] - i[containerHeight]) /\r
      (i[railYHeight] - i[scrollbarYHeight]);\r
    if (!touchMode) {\r
      i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);\r
      i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);\r
      e.preventDefault();\r
    } else {\r
      i.event.bind(i.ownerDocument, 'touchmove', mouseMoveHandler);\r
    }\r
\r
    i[scrollbarYRail].classList.add(cls.state.clicking);\r
\r
    e.stopPropagation();\r
  }\r
\r
  i.event.bind(i[scrollbarY], 'mousedown', function (e) {\r
    bindMoves(e);\r
  });\r
  i.event.bind(i[scrollbarY], 'touchstart', function (e) {\r
    bindMoves(e, true);\r
  });\r
}\r
\r
function keyboard(i) {\r
  var element = i.element;\r
\r
  var elementHovered = function () { return matches(element, ':hover'); };\r
  var scrollbarFocused = function () { return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus'); };\r
\r
  function shouldPreventDefault(deltaX, deltaY) {\r
    var scrollTop = Math.floor(element.scrollTop);\r
    if (deltaX === 0) {\r
      if (!i.scrollbarYActive) {\r
        return false;\r
      }\r
      if (\r
        (scrollTop === 0 && deltaY > 0) ||\r
        (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)\r
      ) {\r
        return !i.settings.wheelPropagation;\r
      }\r
    }\r
\r
    var scrollLeft = element.scrollLeft;\r
    if (deltaY === 0) {\r
      if (!i.scrollbarXActive) {\r
        return false;\r
      }\r
      if (\r
        (scrollLeft === 0 && deltaX < 0) ||\r
        (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)\r
      ) {\r
        return !i.settings.wheelPropagation;\r
      }\r
    }\r
    return true;\r
  }\r
\r
  i.event.bind(i.ownerDocument, 'keydown', function (e) {\r
    if (\r
      (e.isDefaultPrevented && e.isDefaultPrevented()) ||\r
      e.defaultPrevented\r
    ) {\r
      return;\r
    }\r
\r
    if (!elementHovered() && !scrollbarFocused()) {\r
      return;\r
    }\r
\r
    var activeElement = document.activeElement\r
      ? document.activeElement\r
      : i.ownerDocument.activeElement;\r
    if (activeElement) {\r
      if (activeElement.tagName === 'IFRAME') {\r
        activeElement = activeElement.contentDocument.activeElement;\r
      } else {\r
        // go deeper if element is a webcomponent\r
        while (activeElement.shadowRoot) {\r
          activeElement = activeElement.shadowRoot.activeElement;\r
        }\r
      }\r
      if (isEditable(activeElement)) {\r
        return;\r
      }\r
    }\r
\r
    var deltaX = 0;\r
    var deltaY = 0;\r
\r
    switch (e.which) {\r
      case 37: // left\r
        if (e.metaKey) {\r
          deltaX = -i.contentWidth;\r
        } else if (e.altKey) {\r
          deltaX = -i.containerWidth;\r
        } else {\r
          deltaX = -30;\r
        }\r
        break;\r
      case 38: // up\r
        if (e.metaKey) {\r
          deltaY = i.contentHeight;\r
        } else if (e.altKey) {\r
          deltaY = i.containerHeight;\r
        } else {\r
          deltaY = 30;\r
        }\r
        break;\r
      case 39: // right\r
        if (e.metaKey) {\r
          deltaX = i.contentWidth;\r
        } else if (e.altKey) {\r
          deltaX = i.containerWidth;\r
        } else {\r
          deltaX = 30;\r
        }\r
        break;\r
      case 40: // down\r
        if (e.metaKey) {\r
          deltaY = -i.contentHeight;\r
        } else if (e.altKey) {\r
          deltaY = -i.containerHeight;\r
        } else {\r
          deltaY = -30;\r
        }\r
        break;\r
      case 32: // space bar\r
        if (e.shiftKey) {\r
          deltaY = i.containerHeight;\r
        } else {\r
          deltaY = -i.containerHeight;\r
        }\r
        break;\r
      case 33: // page up\r
        deltaY = i.containerHeight;\r
        break;\r
      case 34: // page down\r
        deltaY = -i.containerHeight;\r
        break;\r
      case 36: // home\r
        deltaY = i.contentHeight;\r
        break;\r
      case 35: // end\r
        deltaY = -i.contentHeight;\r
        break;\r
      default:\r
        return;\r
    }\r
\r
    if (i.settings.suppressScrollX && deltaX !== 0) {\r
      return;\r
    }\r
    if (i.settings.suppressScrollY && deltaY !== 0) {\r
      return;\r
    }\r
\r
    element.scrollTop -= deltaY;\r
    element.scrollLeft += deltaX;\r
    updateGeometry(i);\r
\r
    if (shouldPreventDefault(deltaX, deltaY)) {\r
      e.preventDefault();\r
    }\r
  });\r
}\r
\r
function wheel(i) {\r
  var element = i.element;\r
\r
  function shouldPreventDefault(deltaX, deltaY) {\r
    var roundedScrollTop = Math.floor(element.scrollTop);\r
    var isTop = element.scrollTop === 0;\r
    var isBottom =\r
      roundedScrollTop + element.offsetHeight === element.scrollHeight;\r
    var isLeft = element.scrollLeft === 0;\r
    var isRight =\r
      element.scrollLeft + element.offsetWidth === element.scrollWidth;\r
\r
    var hitsBound;\r
\r
    // pick axis with primary direction\r
    if (Math.abs(deltaY) > Math.abs(deltaX)) {\r
      hitsBound = isTop || isBottom;\r
    } else {\r
      hitsBound = isLeft || isRight;\r
    }\r
\r
    return hitsBound ? !i.settings.wheelPropagation : true;\r
  }\r
\r
  function getDeltaFromEvent(e) {\r
    var deltaX = e.deltaX;\r
    var deltaY = -1 * e.deltaY;\r
\r
    if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {\r
      // OS X Safari\r
      deltaX = (-1 * e.wheelDeltaX) / 6;\r
      deltaY = e.wheelDeltaY / 6;\r
    }\r
\r
    if (e.deltaMode && e.deltaMode === 1) {\r
      // Firefox in deltaMode 1: Line scrolling\r
      deltaX *= 10;\r
      deltaY *= 10;\r
    }\r
\r
    if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {\r
      // IE in some mouse drivers\r
      deltaX = 0;\r
      deltaY = e.wheelDelta;\r
    }\r
\r
    if (e.shiftKey) {\r
      // reverse axis with shift key\r
      return [-deltaY, -deltaX];\r
    }\r
    return [deltaX, deltaY];\r
  }\r
\r
  function shouldBeConsumedByChild(target, deltaX, deltaY) {\r
    // FIXME: this is a workaround for <select> issue in FF and IE #571\r
    if (!env.isWebKit && element.querySelector('select:focus')) {\r
      return true;\r
    }\r
\r
    if (!element.contains(target)) {\r
      return false;\r
    }\r
\r
    var cursor = target;\r
\r
    while (cursor && cursor !== element) {\r
      if (cursor.classList.contains(cls.element.consuming)) {\r
        return true;\r
      }\r
\r
      var style = get(cursor);\r
\r
      // if deltaY && vertical scrollable\r
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {\r
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;\r
        if (maxScrollTop > 0) {\r
          if (\r
            (cursor.scrollTop > 0 && deltaY < 0) ||\r
            (cursor.scrollTop < maxScrollTop && deltaY > 0)\r
          ) {\r
            return true;\r
          }\r
        }\r
      }\r
      // if deltaX && horizontal scrollable\r
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {\r
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;\r
        if (maxScrollLeft > 0) {\r
          if (\r
            (cursor.scrollLeft > 0 && deltaX < 0) ||\r
            (cursor.scrollLeft < maxScrollLeft && deltaX > 0)\r
          ) {\r
            return true;\r
          }\r
        }\r
      }\r
\r
      cursor = cursor.parentNode;\r
    }\r
\r
    return false;\r
  }\r
\r
  function mousewheelHandler(e) {\r
    var ref = getDeltaFromEvent(e);\r
    var deltaX = ref[0];\r
    var deltaY = ref[1];\r
\r
    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {\r
      return;\r
    }\r
\r
    var shouldPrevent = false;\r
    if (!i.settings.useBothWheelAxes) {\r
      // deltaX will only be used for horizontal scrolling and deltaY will\r
      // only be used for vertical scrolling - this is the default\r
      element.scrollTop -= deltaY * i.settings.wheelSpeed;\r
      element.scrollLeft += deltaX * i.settings.wheelSpeed;\r
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {\r
      // only vertical scrollbar is active and useBothWheelAxes option is\r
      // active, so let's scroll vertical bar using both mouse wheel axes\r
      if (deltaY) {\r
        element.scrollTop -= deltaY * i.settings.wheelSpeed;\r
      } else {\r
        element.scrollTop += deltaX * i.settings.wheelSpeed;\r
      }\r
      shouldPrevent = true;\r
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {\r
      // useBothWheelAxes and only horizontal bar is active, so use both\r
      // wheel axes for horizontal bar\r
      if (deltaX) {\r
        element.scrollLeft += deltaX * i.settings.wheelSpeed;\r
      } else {\r
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;\r
      }\r
      shouldPrevent = true;\r
    }\r
\r
    updateGeometry(i);\r
\r
    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);\r
    if (shouldPrevent && !e.ctrlKey) {\r
      e.stopPropagation();\r
      e.preventDefault();\r
    }\r
  }\r
\r
  if (typeof window.onwheel !== 'undefined') {\r
    i.event.bind(element, 'wheel', mousewheelHandler);\r
  } else if (typeof window.onmousewheel !== 'undefined') {\r
    i.event.bind(element, 'mousewheel', mousewheelHandler);\r
  }\r
}\r
\r
function touch(i) {\r
  if (!env.supportsTouch && !env.supportsIePointer) {\r
    return;\r
  }\r
\r
  var element = i.element;\r
\r
  function shouldPrevent(deltaX, deltaY) {\r
    var scrollTop = Math.floor(element.scrollTop);\r
    var scrollLeft = element.scrollLeft;\r
    var magnitudeX = Math.abs(deltaX);\r
    var magnitudeY = Math.abs(deltaY);\r
\r
    if (magnitudeY > magnitudeX) {\r
      // user is perhaps trying to swipe up/down the page\r
\r
      if (\r
        (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||\r
        (deltaY > 0 && scrollTop === 0)\r
      ) {\r
        // set prevent for mobile Chrome refresh\r
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;\r
      }\r
    } else if (magnitudeX > magnitudeY) {\r
      // user is perhaps trying to swipe left/right across the page\r
\r
      if (\r
        (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||\r
        (deltaX > 0 && scrollLeft === 0)\r
      ) {\r
        return true;\r
      }\r
    }\r
\r
    return true;\r
  }\r
\r
  function applyTouchMove(differenceX, differenceY) {\r
    element.scrollTop -= differenceY;\r
    element.scrollLeft -= differenceX;\r
\r
    updateGeometry(i);\r
  }\r
\r
  var startOffset = {};\r
  var startTime = 0;\r
  var speed = {};\r
  var easingLoop = null;\r
\r
  function getTouch(e) {\r
    if (e.targetTouches) {\r
      return e.targetTouches[0];\r
    } else {\r
      // Maybe IE pointer\r
      return e;\r
    }\r
  }\r
\r
  function shouldHandle(e) {\r
    if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {\r
      return false;\r
    }\r
    if (e.targetTouches && e.targetTouches.length === 1) {\r
      return true;\r
    }\r
    if (\r
      e.pointerType &&\r
      e.pointerType !== 'mouse' &&\r
      e.pointerType !== e.MSPOINTER_TYPE_MOUSE\r
    ) {\r
      return true;\r
    }\r
    return false;\r
  }\r
\r
  function touchStart(e) {\r
    if (!shouldHandle(e)) {\r
      return;\r
    }\r
\r
    var touch = getTouch(e);\r
\r
    startOffset.pageX = touch.pageX;\r
    startOffset.pageY = touch.pageY;\r
\r
    startTime = new Date().getTime();\r
\r
    if (easingLoop !== null) {\r
      clearInterval(easingLoop);\r
    }\r
  }\r
\r
  function shouldBeConsumedByChild(target, deltaX, deltaY) {\r
    if (!element.contains(target)) {\r
      return false;\r
    }\r
\r
    var cursor = target;\r
\r
    while (cursor && cursor !== element) {\r
      if (cursor.classList.contains(cls.element.consuming)) {\r
        return true;\r
      }\r
\r
      var style = get(cursor);\r
\r
      // if deltaY && vertical scrollable\r
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {\r
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;\r
        if (maxScrollTop > 0) {\r
          if (\r
            (cursor.scrollTop > 0 && deltaY < 0) ||\r
            (cursor.scrollTop < maxScrollTop && deltaY > 0)\r
          ) {\r
            return true;\r
          }\r
        }\r
      }\r
      // if deltaX && horizontal scrollable\r
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {\r
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;\r
        if (maxScrollLeft > 0) {\r
          if (\r
            (cursor.scrollLeft > 0 && deltaX < 0) ||\r
            (cursor.scrollLeft < maxScrollLeft && deltaX > 0)\r
          ) {\r
            return true;\r
          }\r
        }\r
      }\r
\r
      cursor = cursor.parentNode;\r
    }\r
\r
    return false;\r
  }\r
\r
  function touchMove(e) {\r
    if (shouldHandle(e)) {\r
      var touch = getTouch(e);\r
\r
      var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };\r
\r
      var differenceX = currentOffset.pageX - startOffset.pageX;\r
      var differenceY = currentOffset.pageY - startOffset.pageY;\r
\r
      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {\r
        return;\r
      }\r
\r
      applyTouchMove(differenceX, differenceY);\r
      startOffset = currentOffset;\r
\r
      var currentTime = new Date().getTime();\r
\r
      var timeGap = currentTime - startTime;\r
      if (timeGap > 0) {\r
        speed.x = differenceX / timeGap;\r
        speed.y = differenceY / timeGap;\r
        startTime = currentTime;\r
      }\r
\r
      if (shouldPrevent(differenceX, differenceY)) {\r
        e.preventDefault();\r
      }\r
    }\r
  }\r
  function touchEnd() {\r
    if (i.settings.swipeEasing) {\r
      clearInterval(easingLoop);\r
      easingLoop = setInterval(function() {\r
        if (i.isInitialized) {\r
          clearInterval(easingLoop);\r
          return;\r
        }\r
\r
        if (!speed.x && !speed.y) {\r
          clearInterval(easingLoop);\r
          return;\r
        }\r
\r
        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {\r
          clearInterval(easingLoop);\r
          return;\r
        }\r
\r
        applyTouchMove(speed.x * 30, speed.y * 30);\r
\r
        speed.x *= 0.8;\r
        speed.y *= 0.8;\r
      }, 10);\r
    }\r
  }\r
\r
  if (env.supportsTouch) {\r
    i.event.bind(element, 'touchstart', touchStart);\r
    i.event.bind(element, 'touchmove', touchMove);\r
    i.event.bind(element, 'touchend', touchEnd);\r
  } else if (env.supportsIePointer) {\r
    if (window.PointerEvent) {\r
      i.event.bind(element, 'pointerdown', touchStart);\r
      i.event.bind(element, 'pointermove', touchMove);\r
      i.event.bind(element, 'pointerup', touchEnd);\r
    } else if (window.MSPointerEvent) {\r
      i.event.bind(element, 'MSPointerDown', touchStart);\r
      i.event.bind(element, 'MSPointerMove', touchMove);\r
      i.event.bind(element, 'MSPointerUp', touchEnd);\r
    }\r
  }\r
}\r
\r
var defaultSettings = function () { return ({\r
  handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],\r
  maxScrollbarLength: null,\r
  minScrollbarLength: null,\r
  scrollingThreshold: 1000,\r
  scrollXMarginOffset: 0,\r
  scrollYMarginOffset: 0,\r
  suppressScrollX: false,\r
  suppressScrollY: false,\r
  swipeEasing: true,\r
  useBothWheelAxes: false,\r
  wheelPropagation: true,\r
  wheelSpeed: 1,\r
}); };\r
\r
var handlers = {\r
  'click-rail': clickRail,\r
  'drag-thumb': dragThumb,\r
  keyboard: keyboard,\r
  wheel: wheel,\r
  touch: touch,\r
};\r
\r
var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {\r
  var this$1 = this;\r
  if ( userSettings === void 0 ) userSettings = {};\r
\r
  if (typeof element === 'string') {\r
    element = document.querySelector(element);\r
  }\r
\r
  if (!element || !element.nodeName) {\r
    throw new Error('no element is specified to initialize PerfectScrollbar');\r
  }\r
\r
  this.element = element;\r
\r
  element.classList.add(cls.main);\r
\r
  this.settings = defaultSettings();\r
  for (var key in userSettings) {\r
    this.settings[key] = userSettings[key];\r
  }\r
\r
  this.containerWidth = null;\r
  this.containerHeight = null;\r
  this.contentWidth = null;\r
  this.contentHeight = null;\r
\r
  var focus = function () { return element.classList.add(cls.state.focus); };\r
  var blur = function () { return element.classList.remove(cls.state.focus); };\r
\r
  this.isRtl = get(element).direction === 'rtl';\r
  if (this.isRtl === true) {\r
    element.classList.add(cls.rtl);\r
  }\r
  this.isNegativeScroll = (function () {\r
    var originalScrollLeft = element.scrollLeft;\r
    var result = null;\r
    element.scrollLeft = -1;\r
    result = element.scrollLeft < 0;\r
    element.scrollLeft = originalScrollLeft;\r
    return result;\r
  })();\r
  this.negativeScrollAdjustment = this.isNegativeScroll\r
    ? element.scrollWidth - element.clientWidth\r
    : 0;\r
  this.event = new EventManager();\r
  this.ownerDocument = element.ownerDocument || document;\r
\r
  this.scrollbarXRail = div(cls.element.rail('x'));\r
  element.appendChild(this.scrollbarXRail);\r
  this.scrollbarX = div(cls.element.thumb('x'));\r
  this.scrollbarXRail.appendChild(this.scrollbarX);\r
  this.scrollbarX.setAttribute('tabindex', 0);\r
  this.event.bind(this.scrollbarX, 'focus', focus);\r
  this.event.bind(this.scrollbarX, 'blur', blur);\r
  this.scrollbarXActive = null;\r
  this.scrollbarXWidth = null;\r
  this.scrollbarXLeft = null;\r
  var railXStyle = get(this.scrollbarXRail);\r
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);\r
  if (isNaN(this.scrollbarXBottom)) {\r
    this.isScrollbarXUsingBottom = false;\r
    this.scrollbarXTop = toInt(railXStyle.top);\r
  } else {\r
    this.isScrollbarXUsingBottom = true;\r
  }\r
  this.railBorderXWidth =\r
    toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);\r
  // Set rail to display:block to calculate margins\r
  set(this.scrollbarXRail, { display: 'block' });\r
  this.railXMarginWidth =\r
    toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);\r
  set(this.scrollbarXRail, { display: '' });\r
  this.railXWidth = null;\r
  this.railXRatio = null;\r
\r
  this.scrollbarYRail = div(cls.element.rail('y'));\r
  element.appendChild(this.scrollbarYRail);\r
  this.scrollbarY = div(cls.element.thumb('y'));\r
  this.scrollbarYRail.appendChild(this.scrollbarY);\r
  this.scrollbarY.setAttribute('tabindex', 0);\r
  this.event.bind(this.scrollbarY, 'focus', focus);\r
  this.event.bind(this.scrollbarY, 'blur', blur);\r
  this.scrollbarYActive = null;\r
  this.scrollbarYHeight = null;\r
  this.scrollbarYTop = null;\r
  var railYStyle = get(this.scrollbarYRail);\r
  this.scrollbarYRight = parseInt(railYStyle.right, 10);\r
  if (isNaN(this.scrollbarYRight)) {\r
    this.isScrollbarYUsingRight = false;\r
    this.scrollbarYLeft = toInt(railYStyle.left);\r
  } else {\r
    this.isScrollbarYUsingRight = true;\r
  }\r
  this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;\r
  this.railBorderYWidth =\r
    toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);\r
  set(this.scrollbarYRail, { display: 'block' });\r
  this.railYMarginHeight =\r
    toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);\r
  set(this.scrollbarYRail, { display: '' });\r
  this.railYHeight = null;\r
  this.railYRatio = null;\r
\r
  this.reach = {\r
    x:\r
      element.scrollLeft <= 0\r
        ? 'start'\r
        : element.scrollLeft >= this.contentWidth - this.containerWidth\r
        ? 'end'\r
        : null,\r
    y:\r
      element.scrollTop <= 0\r
        ? 'start'\r
        : element.scrollTop >= this.contentHeight - this.containerHeight\r
        ? 'end'\r
        : null,\r
  };\r
\r
  this.isAlive = true;\r
\r
  this.settings.handlers.forEach(function (handlerName) { return handlers[handlerName](this$1); });\r
\r
  this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only\r
  this.lastScrollLeft = element.scrollLeft; // for onScroll only\r
  this.event.bind(this.element, 'scroll', function (e) { return this$1.onScroll(e); });\r
  updateGeometry(this);\r
};\r
\r
PerfectScrollbar.prototype.update = function update () {\r
  if (!this.isAlive) {\r
    return;\r
  }\r
\r
  // Recalcuate negative scrollLeft adjustment\r
  this.negativeScrollAdjustment = this.isNegativeScroll\r
    ? this.element.scrollWidth - this.element.clientWidth\r
    : 0;\r
\r
  // Recalculate rail margins\r
  set(this.scrollbarXRail, { display: 'block' });\r
  set(this.scrollbarYRail, { display: 'block' });\r
  this.railXMarginWidth =\r
    toInt(get(this.scrollbarXRail).marginLeft) +\r
    toInt(get(this.scrollbarXRail).marginRight);\r
  this.railYMarginHeight =\r
    toInt(get(this.scrollbarYRail).marginTop) +\r
    toInt(get(this.scrollbarYRail).marginBottom);\r
\r
  // Hide scrollbars not to affect scrollWidth and scrollHeight\r
  set(this.scrollbarXRail, { display: 'none' });\r
  set(this.scrollbarYRail, { display: 'none' });\r
\r
  updateGeometry(this);\r
\r
  processScrollDiff(this, 'top', 0, false, true);\r
  processScrollDiff(this, 'left', 0, false, true);\r
\r
  set(this.scrollbarXRail, { display: '' });\r
  set(this.scrollbarYRail, { display: '' });\r
};\r
\r
PerfectScrollbar.prototype.onScroll = function onScroll (e) {\r
  if (!this.isAlive) {\r
    return;\r
  }\r
\r
  updateGeometry(this);\r
  processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);\r
  processScrollDiff(\r
    this,\r
    'left',\r
    this.element.scrollLeft - this.lastScrollLeft\r
  );\r
\r
  this.lastScrollTop = Math.floor(this.element.scrollTop);\r
  this.lastScrollLeft = this.element.scrollLeft;\r
};\r
\r
PerfectScrollbar.prototype.destroy = function destroy () {\r
  if (!this.isAlive) {\r
    return;\r
  }\r
\r
  this.event.unbindAll();\r
  remove(this.scrollbarX);\r
  remove(this.scrollbarY);\r
  remove(this.scrollbarXRail);\r
  remove(this.scrollbarYRail);\r
  this.removePsClasses();\r
\r
  // unset elements\r
  this.element = null;\r
  this.scrollbarX = null;\r
  this.scrollbarY = null;\r
  this.scrollbarXRail = null;\r
  this.scrollbarYRail = null;\r
\r
  this.isAlive = false;\r
};\r
\r
PerfectScrollbar.prototype.removePsClasses = function removePsClasses () {\r
  this.element.className = this.element.className\r
    .split(' ')\r
    .filter(function (name) { return !name.match(/^ps([-_].+|)$/); })\r
    .join(' ');\r
};\r
\r
/* harmony default export */ __webpack_exports__["default"] = (PerfectScrollbar);\r
//# sourceMappingURL=perfect-scrollbar.esm.js.map\r


//# sourceURL=webpack:///./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js?`)},"wF/u":function(module,exports,__webpack_require__){eval(`var baseIsEqualDeep = __webpack_require__("e5cp"),
    isObjectLike = __webpack_require__("ExA7");

/**
 * The base implementation of \`_.isEqual\` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed \`value\` and \`other\` objects.
 * @returns {boolean} Returns \`true\` if the values are equivalent, else \`false\`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


//# sourceURL=webpack:///./node_modules/lodash/_baseIsEqual.js?`)},xYSL:function(module,exports){eval(`/**
 * Checks if a \`cache\` value for \`key\` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns \`true\` if an entry for \`key\` exists, else \`false\`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


//# sourceURL=webpack:///./node_modules/lodash/_cacheHas.js?`)}}]);
