(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+B/L":function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/antd/es/menu/style/index.css?`)},"+K+b":function(module,exports,__webpack_require__){eval(`var Uint8Array = __webpack_require__("JHRd");

/**
 * Creates a clone of \`arrayBuffer\`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


//# sourceURL=webpack:///./node_modules/lodash/_cloneArrayBuffer.js?`)},"+L6B":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cIOH");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qCM6");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);



//# sourceURL=webpack:///./node_modules/antd/es/button/style/index.js?`)},"+iFO":function(module,exports,__webpack_require__){eval(`var baseCreate = __webpack_require__("dTAl"),
    getPrototype = __webpack_require__("LcsW"),
    isPrototype = __webpack_require__("6sVZ");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


//# sourceURL=webpack:///./node_modules/lodash/_initCloneObject.js?`)},"0XgM":function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/antd/es/layout/style/index.less?`)},"1+5i":function(module,exports,__webpack_require__){eval(`var baseIsSet = __webpack_require__("w/wX"),
    baseUnary = __webpack_require__("sEf8"),
    nodeUtil = __webpack_require__("mdPL");

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if \`value\` is classified as a \`Set\` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns \`true\` if \`value\` is a set, else \`false\`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


//# sourceURL=webpack:///./node_modules/lodash/isSet.js?`)},"15/o":function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/antd/es/affix/style/index.less?`)},"2W6z":function(module,exports,__webpack_require__){"use strict";eval(`/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "production" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '\`warning(condition, format, ...args)\` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


//# sourceURL=webpack:///./node_modules/warning/warning.js?`)},"2WkQ":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("SchZ");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+B/L");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tooltip_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TfFZ");

 // style dependencies
// deps-lint-skip: layout



//# sourceURL=webpack:///./node_modules/antd/es/menu/style/css.js?`)},"5Dmo":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cIOH");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5YgA");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);



//# sourceURL=webpack:///./node_modules/antd/es/tooltip/style/index.js?`)},"5Tg0":function(module,exports,__webpack_require__){eval(`/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__("Kz5y");

/** Detect free variable \`exports\`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable \`module\`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension \`module.exports\`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  \`buffer\`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("hOG+")(module)))

//# sourceURL=webpack:///./node_modules/lodash/_cloneBuffer.js?`)},"5YgA":function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/antd/es/tooltip/style/index.less?`)},"7Ix3":function(module,exports){eval(`/**
 * This function is like
 * [\`Object.keys\`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


//# sourceURL=webpack:///./node_modules/lodash/_nativeKeysIn.js?`)},"7z/i":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* WEBPACK VAR INJECTION */(function(process) {var isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;

var isBrowser = function isBrowser() {
  if (false) {}

  return typeof window !== 'undefined' && typeof window.document !== 'undefined' && !isNode;
};

/* harmony default export */ __webpack_exports__["a"] = (isBrowser);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("Q2Ig")))

//# sourceURL=webpack:///./node_modules/@ant-design/pro-utils/es/isBrowser/index.js?`)},"9ama":function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/antd/es/tabs/style/index.less?`)},AOa7:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/antd/es/breadcrumb/style/index.less?`)},BkRI:function(module,exports,__webpack_require__){eval(`var baseClone = __webpack_require__("OBhP");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like \`_.clone\` except that it recursively clones \`value\`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


//# sourceURL=webpack:///./node_modules/lodash/cloneDeep.js?`)},C1Nm:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/antd/es/config-provider/style/index.css?`)},"CWI+":function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/antd/es/drawer/style/index.less?`)},DPCm:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/@ant-design/pro-layout/es/components/GlobalFooter/index.less?`)},DnfT:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/@ant-design/pro-layout/es/components/GridContent/GridContent.less?`)},"Dw+G":function(module,exports,__webpack_require__){eval(`var copyObject = __webpack_require__("juv8"),
    keysIn = __webpack_require__("mTTR");

/**
 * The base implementation of \`_.assignIn\` without support for multiple sources
 * or \`customizer\` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns \`object\`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


//# sourceURL=webpack:///./node_modules/lodash/_baseAssignIn.js?`)},EEGq:function(module,exports,__webpack_require__){eval(`var copyObject = __webpack_require__("juv8"),
    getSymbolsIn = __webpack_require__("oCl/");

/**
 * Copies own and inherited symbols of \`source\` to \`object\`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns \`object\`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


//# sourceURL=webpack:///./node_modules/lodash/_copySymbolsIn.js?`)},G6z8:function(module,exports,__webpack_require__){eval(`var baseGetAllKeys = __webpack_require__("fR/l"),
    getSymbolsIn = __webpack_require__("oCl/"),
    keysIn = __webpack_require__("mTTR");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of \`object\`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


//# sourceURL=webpack:///./node_modules/lodash/_getAllKeysIn.js?`)},GOef:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ transformRoute_transformRoute; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ es_getFlatMenus_getFlatMenus; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ es_getMatchMenu_getMatchMenu; });

// EXTERNAL MODULE: ./node_modules/fast-deep-equal/es6/index.js
var es6 = __webpack_require__("n2rz");
var es6_default = /*#__PURE__*/__webpack_require__.n(es6);

// CONCATENATED MODULE: ./node_modules/memoize-one/dist/memoize-one.esm.js
var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ var memoize_one_esm = (memoizeOne);

// CONCATENATED MODULE: ./node_modules/@qixian.cs/path-to-regexp/dist.es2015/index.js
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // \`0-9\`
                (code >= 48 && code <= 57) ||
                    // \`A-Z\`
                    (code >= 65 && code <= 90) ||
                    // \`a-z\`
                    (code >= 97 && code <= 122) ||
                    // \`_\`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \\"?\\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \\"" + token.name + "\\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \\"" + token.name + "\\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \\"" + token.name + "\\" to match \\"" + token.pattern + "\\", but got \\"" + segment + "\\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \\"" + token.name + "\\" to match \\"" + token.pattern + "\\", but got \\"" + segment + "\\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \\"" + token.name + "\\" to be " + typeOfMessage);
        }
        return path;
    };
}
/**
 * Create path match function from \`path-to-regexp\` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
/**
 * Create a path match function from \`path-to-regexp\` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:\${}()[\\]|/\\\\])/g, "\\\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\\((?!\\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using \`/user/:id\`, \`keys\` will
 * contain \`[{ name: 'id', delimiter: '/', optional: false, repeat: false }]\`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@umijs/route-utils/es/sha265.js
/* eslint-disable no-redeclare */

/* eslint-disable no-multi-assign */

/* eslint-disable no-param-reassign */

/* eslint-disable no-return-assign */

/* eslint-disable no-new-wrappers */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable no-var */

/* eslint-disable no-plusplus */

/* eslint-disable prefer-destructuring */

/* eslint-disable @typescript-eslint/naming-convention */

/* eslint-disable block-scoped-var */

/* eslint-disable vars-on-top */

/* eslint-disable no-bitwise */

/* eslint-disable no-cond-assign */

/*
 * A JavaScript implementation of the SHA256 hash function.
 *
 * FILE:	sha256.js
 * VERSION:	0.8
 * AUTHOR:	Christoph Bichlmeier <informatik@zombiearena.de>
 *
 * NOTE: This version is not tested thoroughly!
 *
 * Copyright (c) 2003, Christoph Bichlmeier
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of contributors
 *    may be used to endorse or promote products derived from this software
 *    without specific prior written permission.
 *
 * ======================================================================
 *
 * THIS SOFTWARE IS PROVIDED BY THE AUTHORS ''AS IS'' AND ANY EXPRESS
 * OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHORS OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR
 * BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
 * OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/* SHA256 logical functions */
function rotateRight(n, x) {
  return x >>> n | x << 32 - n;
}

function choice(x, y, z) {
  return x & y ^ ~x & z;
}

function majority(x, y, z) {
  return x & y ^ x & z ^ y & z;
}

function sha256_Sigma0(x) {
  return rotateRight(2, x) ^ rotateRight(13, x) ^ rotateRight(22, x);
}

function sha256_Sigma1(x) {
  return rotateRight(6, x) ^ rotateRight(11, x) ^ rotateRight(25, x);
}

function sha256_sigma0(x) {
  return rotateRight(7, x) ^ rotateRight(18, x) ^ x >>> 3;
}

function sha256_sigma1(x) {
  return rotateRight(17, x) ^ rotateRight(19, x) ^ x >>> 10;
}

function sha256_expand(W, j) {
  return W[j & 0x0f] += sha256_sigma1(W[j + 14 & 0x0f]) + W[j + 9 & 0x0f] + sha256_sigma0(W[j + 1 & 0x0f]);
}
/* Hash constant words K: */


var K256 = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
/* global arrays */

var ihash;
var count;
var buffer;
var sha256_hex_digits = '0123456789abcdef';
/* Add 32-bit integers with 16-bit operations (bug in some JS-interpreters:
overflow) */

function safe_add(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/* Initialise the SHA256 computation */


function sha256_init() {
  ihash = new Array(8);
  count = new Array(2);
  buffer = new Array(64);
  count[0] = count[1] = 0;
  ihash[0] = 0x6a09e667;
  ihash[1] = 0xbb67ae85;
  ihash[2] = 0x3c6ef372;
  ihash[3] = 0xa54ff53a;
  ihash[4] = 0x510e527f;
  ihash[5] = 0x9b05688c;
  ihash[6] = 0x1f83d9ab;
  ihash[7] = 0x5be0cd19;
}
/* Transform a 512-bit message block */


function sha256_transform() {
  var a;
  var b;
  var c;
  var d;
  var e;
  var f;
  var g;
  var h;
  var T1;
  var T2;
  var W = new Array(16);
  /* Initialize registers with the previous intermediate value */

  a = ihash[0];
  b = ihash[1];
  c = ihash[2];
  d = ihash[3];
  e = ihash[4];
  f = ihash[5];
  g = ihash[6];
  h = ihash[7];
  /* make 32-bit words */

  for (var i = 0; i < 16; i++) {
    W[i] = buffer[(i << 2) + 3] | buffer[(i << 2) + 2] << 8 | buffer[(i << 2) + 1] << 16 | buffer[i << 2] << 24;
  }

  for (var j = 0; j < 64; j++) {
    T1 = h + sha256_Sigma1(e) + choice(e, f, g) + K256[j];
    if (j < 16) T1 += W[j];else T1 += sha256_expand(W, j);
    T2 = sha256_Sigma0(a) + majority(a, b, c);
    h = g;
    g = f;
    f = e;
    e = safe_add(d, T1);
    d = c;
    c = b;
    b = a;
    a = safe_add(T1, T2);
  }
  /* Compute the current intermediate hash value */


  ihash[0] += a;
  ihash[1] += b;
  ihash[2] += c;
  ihash[3] += d;
  ihash[4] += e;
  ihash[5] += f;
  ihash[6] += g;
  ihash[7] += h;
}
/* Read the next chunk of data and update the SHA256 computation */


function sha256_update(data, inputLen) {
  var i;
  var index;
  var curpos = 0;
  /* Compute number of bytes mod 64 */

  index = count[0] >> 3 & 0x3f;
  var remainder = inputLen & 0x3f;
  /* Update number of bits */

  if ((count[0] += inputLen << 3) < inputLen << 3) count[1]++;
  count[1] += inputLen >> 29;
  /* Transform as many times as possible */

  for (i = 0; i + 63 < inputLen; i += 64) {
    for (var j = index; j < 64; j++) {
      buffer[j] = data.charCodeAt(curpos++);
    }

    sha256_transform();
    index = 0;
  }
  /* Buffer remaining input */


  for (var _j = 0; _j < remainder; _j++) {
    buffer[_j] = data.charCodeAt(curpos++);
  }
}
/* Finish the computation by operations such as padding */


function sha256_final() {
  var index = count[0] >> 3 & 0x3f;
  buffer[index++] = 0x80;

  if (index <= 56) {
    for (var i = index; i < 56; i++) {
      buffer[i] = 0;
    }
  } else {
    for (var _i = index; _i < 64; _i++) {
      buffer[_i] = 0;
    }

    sha256_transform();

    for (var _i2 = 0; _i2 < 56; _i2++) {
      buffer[_i2] = 0;
    }
  }

  buffer[56] = count[1] >>> 24 & 0xff;
  buffer[57] = count[1] >>> 16 & 0xff;
  buffer[58] = count[1] >>> 8 & 0xff;
  buffer[59] = count[1] & 0xff;
  buffer[60] = count[0] >>> 24 & 0xff;
  buffer[61] = count[0] >>> 16 & 0xff;
  buffer[62] = count[0] >>> 8 & 0xff;
  buffer[63] = count[0] & 0xff;
  sha256_transform();
}
/* Split the internal hash values into an array of bytes */


function sha256_encode_bytes() {
  var j = 0;
  var output = new Array(32);

  for (var i = 0; i < 8; i++) {
    output[j++] = ihash[i] >>> 24 & 0xff;
    output[j++] = ihash[i] >>> 16 & 0xff;
    output[j++] = ihash[i] >>> 8 & 0xff;
    output[j++] = ihash[i] & 0xff;
  }

  return output;
}
/* Get the internal hash as a hex string */


function sha256_encode_hex() {
  var output = new String();

  for (var i = 0; i < 8; i++) {
    for (var j = 28; j >= 0; j -= 4) {
      output += sha256_hex_digits.charAt(ihash[i] >>> j & 0x0f);
    }
  }

  return output;
}
/* Main function: returns a hex string representing the SHA256 value of the
given data */


function digest(data) {
  sha256_init();
  sha256_update(data, data.length);
  sha256_final();
  return sha256_encode_hex();
}

/* harmony default export */ var sha265 = (digest);
// CONCATENATED MODULE: ./node_modules/@umijs/route-utils/es/transformRoute/transformRoute.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function stripQueryStringAndHashFromPath(url) {
  return url.split('?')[0].split('#')[0];
}
var isUrl = function isUrl(path) {
  if (!path.startsWith('http')) {
    return false;
  }

  try {
    var url = new URL(path);
    return !!url;
  } catch (error) {
    return false;
  }
};
var transformRoute_getKeyByPath = function getKeyByPath(item) {
  var path = item.path;

  if (!path || path === '/') {
    // \u5982\u679C\u8FD8\u662F\u6CA1\u6709\uFF0C\u7528\u5BF9\u8C61\u7684hash \u751F\u6210\u4E00\u4E2A
    try {
      return "/".concat(sha265(JSON.stringify(item)));
    } catch (error) {// dom some thing
    }
  }

  return path ? stripQueryStringAndHashFromPath(path) : path;
};
/**
 * \u83B7\u53D6locale\uFF0C\u589E\u52A0\u4E86\u4E00\u4E2A\u529F\u80FD\uFF0C\u5982\u679C locale = false\uFF0C\u5C06\u4E0D\u4F7F\u7528\u56FD\u9645\u5316
 * @param item
 * @param parentName
 */

var getItemLocaleName = function getItemLocaleName(item, parentName) {
  var name = item.name,
      locale = item.locale; // \u5982\u679C\u914D\u7F6E\u4E86 locale \u5E76\u4E14 locale \u4E3A false\u6216 ""

  if ('locale' in item && locale === false || !name) {
    return false;
  }

  return item.locale || "".concat(parentName, ".").concat(name);
};
/**
 * \u5982\u679C\u4E0D\u662F / \u5F00\u5934\u7684\u548C\u7236\u8282\u70B9\u505A\u4E00\u4E0B\u5408\u5E76
 * \u5982\u679C\u662F / \u5F00\u5934\u7684\u4E0D\u4F5C\u4EFB\u4F55\u5904\u7406
 * \u5982\u679C\u662F url \u4E5F\u76F4\u63A5\u8FD4\u56DE
 * @param path
 * @param parentPath
 */


var mergePath = function mergePath() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var parentPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';

  if ((path || parentPath).startsWith('/')) {
    return path;
  }

  if (isUrl(path)) {
    return path;
  }

  return "/".concat(parentPath, "/").concat(path).replace(/\\/\\//g, '/').replace(/\\/\\//g, '/');
}; // bigfish \u7684\u517C\u5BB9\u51C6\u8BDD


var bigfishCompatibleConversions = function bigfishCompatibleConversions(route, props) {
  var _route$menu = route.menu,
      menu = _route$menu === void 0 ? {} : _route$menu,
      indexRoute = route.indexRoute,
      _route$path = route.path,
      path = _route$path === void 0 ? '' : _route$path,
      children = route.children;
  var _menu$name = menu.name,
      name = _menu$name === void 0 ? route.name : _menu$name,
      _menu$icon = menu.icon,
      icon = _menu$icon === void 0 ? route.icon : _menu$icon,
      _menu$hideChildren = menu.hideChildren,
      hideChildren = _menu$hideChildren === void 0 ? route.hideChildren : _menu$hideChildren,
      _menu$flatMenu = menu.flatMenu,
      flatMenu = _menu$flatMenu === void 0 ? route.flatMenu : _menu$flatMenu; // \u517C\u5BB9\u5E73\u94FA\u5F0F\u5199\u6CD5
  // \u62FC\u63A5 childrenRoutes, \u5904\u7406\u5B58\u5728 indexRoute \u65F6\u7684\u903B\u8F91

  var childrenRoutes = indexRoute && // \u5982\u679C\u53EA\u6709 redirect,\u4E0D\u7528\u5904\u7406\u7684
  Object.keys(indexRoute).join(',') !== 'redirect' ? [_objectSpread({
    path: path,
    menu: menu
  }, indexRoute)].concat(children || []) : children; // \u62FC\u63A5\u8FD4\u56DE\u7684 menu \u6570\u636E

  var result = _objectSpread({}, route);

  if (name) {
    result.name = name;
  }

  if (icon) {
    result.icon = icon;
  }

  if (childrenRoutes && childrenRoutes.length) {
    /** \u5728\u83DC\u5355\u4E2D\u9690\u85CF\u5B50\u9879 */
    if (hideChildren) {
      delete result.children;
      return result;
    } // \u9700\u8981\u91CD\u65B0\u8FDB\u884C\u4E00\u6B21


    var routers = formatter(_objectSpread(_objectSpread({}, props), {}, {
      data: childrenRoutes
    }), route);
    /** \u5728\u83DC\u5355\u4E2D\u53EA\u9690\u85CF\u6B64\u9879\uFF0C\u5B50\u9879\u5F80\u4E0A\u63D0\uFF0C\u4ECD\u65E7\u5C55\u793A */

    if (flatMenu) {
      return routers;
    }

    result.children = routers;
  }

  return result;
};
/**
 *
 * @param props
 * @param parent
 */


function formatter(props) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    path: '/'
  };
  var data = props.data,
      formatMessage = props.formatMessage,
      parentName = props.parentName,
      menuLocale = props.locale;

  if (!data || !Array.isArray(data)) {
    return [];
  }

  return data.filter(function (item) {
    if (!item) return false;
    if (item.routes || item.children) return true;
    if (item.path) return true;
    if (item.layout) return true; // \u91CD\u5B9A\u5411

    if (item.redirect) return false;
    return false;
  }).filter(function (item) {
    var _item$menu, _item$menu2;

    // \u662F\u5426\u6CA1\u6709\u6743\u9650\u67E5\u770B
    // \u8FD9\u6837\u5C31\u4E0D\u4F1A\u663E\u793A\uFF0C\u662F\u4E00\u4E2A\u517C\u5BB9\u6027\u7684\u65B9\u5F0F
    if (item.unaccessible) {
      // eslint-disable-next-line no-param-reassign
      delete item.name;
    }

    if ((item === null || item === void 0 ? void 0 : (_item$menu = item.menu) === null || _item$menu === void 0 ? void 0 : _item$menu.name) || (item === null || item === void 0 ? void 0 : item.flatMenu) || (item === null || item === void 0 ? void 0 : (_item$menu2 = item.menu) === null || _item$menu2 === void 0 ? void 0 : _item$menu2.flatMenu)) {
      return true;
    } // \u663E\u793A\u6307\u5B9A\u5728 menu \u4E2D\u9690\u85CF\u8BE5\u9879
    // layout \u63D2\u4EF6\u7684\u529F\u80FD\uFF0C\u5176\u5B9E\u4E0D\u5E94\u8BE5\u5B58\u5728\u7684


    if (item.menu === false) {
      return false;
    }

    return true;
  }).map(function () {
    var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      path: '/'
    };
    var path = mergePath(item.path, parent ? parent.path : '/');
    var name = item.name;
    var locale = getItemLocaleName(item, parentName || 'menu'); // if enableMenuLocale use item.name,
    // close menu international

    var localeName = locale !== false && menuLocale !== false && formatMessage && locale ? formatMessage({
      id: locale,
      defaultMessage: name
    }) : name;

    var _parent$pro_layout_pa = parent.pro_layout_parentKeys,
        pro_layout_parentKeys = _parent$pro_layout_pa === void 0 ? [] : _parent$pro_layout_pa,
        children = parent.children,
        icon = parent.icon,
        flatMenu = parent.flatMenu,
        indexRoute = parent.indexRoute,
        restParent = _objectWithoutProperties(parent, ["pro_layout_parentKeys", "children", "icon", "flatMenu", "indexRoute"]);

    var finallyItem = _objectSpread(_objectSpread(_objectSpread({}, restParent), {}, {
      menu: undefined
    }, item), {}, {
      path: path,
      locale: locale,
      key: item.key || transformRoute_getKeyByPath(_objectSpread(_objectSpread({}, item), {}, {
        path: path
      })),
      routes: null,
      pro_layout_parentKeys: Array.from(new Set([].concat(_toConsumableArray(item.parentKeys || []), _toConsumableArray(pro_layout_parentKeys), ["/".concat(parent.key || '').replace(/\\/\\//g, '/').replace(/\\/\\//g, '/')]))).filter(function (key) {
        return key && key !== '/';
      })
    });

    if (localeName) {
      finallyItem.name = localeName;
    } else {
      delete finallyItem.name;
    }

    if (finallyItem.menu === undefined) {
      delete finallyItem.menu;
    }

    if (item.routes || item.children) {
      var formatterChildren = formatter(_objectSpread(_objectSpread({}, props), {}, {
        data: item.routes || item.children,
        parentName: locale || ''
      }), finallyItem); // Reduce memory usage

      finallyItem.children = formatterChildren && formatterChildren.length > 0 ? formatterChildren : undefined;

      if (!finallyItem.children) {
        delete finallyItem.children;
      }
    }

    return bigfishCompatibleConversions(finallyItem, props);
  }).flat(1);
}

var memoizeOneFormatter = memoize_one_esm(formatter, es6_default.a);
/**
 * \u5220\u9664 hideInMenu \u548C item.name \u4E0D\u5B58\u5728\u7684
 */

var defaultFilterMenuData = function defaultFilterMenuData() {
  var menuData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return menuData.filter(function (item) {
    return item && (item.name || item.children) && !item.hideInMenu && !item.redirect;
  }).map(function (item) {
    if (item.children && Array.isArray(item.children) && !item.hideChildrenInMenu && item.children.some(function (child) {
      return child && !!child.name;
    })) {
      var children = defaultFilterMenuData(item.children);
      if (children.length) return _objectSpread(_objectSpread({}, item), {}, {
        children: children
      });
    }

    return _objectSpread(_objectSpread({}, item), {}, {
      children: undefined
    });
  }).filter(function (item) {
    return item;
  });
};
/**
 * support pathToRegexp get string
 */


var transformRoute_RoutesMap = /*#__PURE__*/function (_Map) {
  _inherits(RoutesMap, _Map);

  var _super = _createSuper(RoutesMap);

  function RoutesMap() {
    _classCallCheck(this, RoutesMap);

    return _super.apply(this, arguments);
  }

  _createClass(RoutesMap, [{
    key: "get",
    value: function get(pathname) {
      var routeValue;

      try {
        // eslint-disable-next-line no-restricted-syntax
        var _iterator = _createForOfIteratorHelper(this.entries()),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = _slicedToArray(_step.value, 2),
                key = _step$value[0],
                value = _step$value[1];

            var path = stripQueryStringAndHashFromPath(key);

            if (!isUrl(key) && pathToRegexp(path, []).test(pathname)) {
              routeValue = value;
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } catch (error) {
        routeValue = undefined;
      }

      return routeValue;
    }
  }]);

  return RoutesMap;
}( /*#__PURE__*/_wrapNativeSuper(Map));
/**
 * \u83B7\u53D6\u9762\u5305\u5C51\u6620\u5C04
 * @param MenuDataItem[] menuData \u83DC\u5355\u914D\u7F6E
 */


var getBreadcrumbNameMap = function getBreadcrumbNameMap(menuData) {
  // Map is used to ensure the order of keys
  var routerMap = new transformRoute_RoutesMap();

  var flattenMenuData = function flattenMenuData(data, parent) {
    data.forEach(function (menuItem) {
      if (menuItem && menuItem.children) {
        flattenMenuData(menuItem.children, menuItem);
      } // Reduce memory usage


      var path = mergePath(menuItem.path, parent ? parent.path : '/');
      routerMap.set(stripQueryStringAndHashFromPath(path), menuItem);
    });
  };

  flattenMenuData(menuData);
  return routerMap;
};

var memoizeOneGetBreadcrumbNameMap = memoize_one_esm(getBreadcrumbNameMap, es6_default.a);

var clearChildren = function clearChildren() {
  var menuData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return menuData.map(function (item) {
    if (item.children && Array.isArray(item.children) && item.children.length > 0) {
      var children = clearChildren(item.children);
      if (children.length) return _objectSpread(_objectSpread({}, item), {}, {
        children: children
      });
    }

    var finallyItem = _objectSpread({}, item);

    delete finallyItem.children;
    return finallyItem;
  }).filter(function (item) {
    return item;
  });
};
/**
 * @param routes \u8DEF\u7531\u914D\u7F6E
 * @param locale \u662F\u5426\u4F7F\u7528\u56FD\u9645\u5316
 * @param formatMessage \u56FD\u9645\u5316\u7684\u7A0B\u5E8F
 * @param ignoreFilter \u662F\u5426\u7B5B\u9009\u6389\u4E0D\u5C55\u793A\u7684 menuItem \u9879\uFF0Cplugin-layout\u9700\u8981\u6240\u6709\u9879\u76EE\u6765\u8BA1\u7B97\u5E03\u5C40\u6837\u5F0F
 * @returns { breadcrumb, menuData}
 */


var transformRoute = function transformRoute(routes, locale, formatMessage, ignoreFilter) {
  var originalMenuData = memoizeOneFormatter({
    data: routes,
    formatMessage: formatMessage,
    locale: locale
  });
  var menuData = ignoreFilter ? clearChildren(originalMenuData) : defaultFilterMenuData(originalMenuData); // Map type used for internal logic

  var breadcrumb = memoizeOneGetBreadcrumbNameMap(originalMenuData);
  return {
    breadcrumb: breadcrumb,
    menuData: menuData
  };
};

/* harmony default export */ var transformRoute_transformRoute = (transformRoute);
// CONCATENATED MODULE: ./node_modules/@umijs/route-utils/es/getFlatMenus/getFlatMenus.js
function getFlatMenus_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function getFlatMenus_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { getFlatMenus_ownKeys(Object(source), true).forEach(function (key) { getFlatMenus_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { getFlatMenus_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function getFlatMenus_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * \u83B7\u53D6\u6253\u5E73\u7684 menuData
 * \u5DF2 path \u4E3A key
 * @param menuData
 */

var getFlatMenus_getFlatMenus = function getFlatMenus() {
  var menuData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var menus = {};
  menuData.forEach(function (item) {
    if (!item || !item.key) {
      return;
    }

    menus[stripQueryStringAndHashFromPath(item.path || item.key || '/')] = getFlatMenus_objectSpread({}, item);
    menus[item.key || item.path || '/'] = getFlatMenus_objectSpread({}, item);

    if (item.children) {
      menus = getFlatMenus_objectSpread(getFlatMenus_objectSpread({}, menus), getFlatMenus(item.children));
    }
  });
  return menus;
};
/* harmony default export */ var es_getFlatMenus_getFlatMenus = (getFlatMenus_getFlatMenus);
// CONCATENATED MODULE: ./node_modules/@umijs/route-utils/es/getMatchMenu/getMatchMenu.js



var getMatchMenu_getMenuMatches = function getMenuMatches() {
  var flatMenuKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var path = arguments.length > 1 ? arguments[1] : undefined;
  var exact = arguments.length > 2 ? arguments[2] : undefined;
  return flatMenuKeys.filter(function (item) {
    if (item === '/' && path === '/') {
      return true;
    }

    if (item !== '/' && item !== '/*' && item && !isUrl(item)) {
      var pathKey = stripQueryStringAndHashFromPath(item);

      try {
        // exact
        if (exact) {
          if (pathToRegexp("".concat(pathKey)).test(path)) {
            return true;
          }
        } // /a


        if (pathToRegexp("".concat(pathKey), []).test(path)) {
          return true;
        } // /a/b/b


        if (pathToRegexp("".concat(pathKey, "/(.*)")).test(path)) {
          return true;
        }
      } catch (error) {// console.log(error, path);
      }
    }

    return false;
  }).sort(function (a, b) {
    // \u5982\u679C\u5B8C\u5168\u5339\u914D\u653E\u5230\u6700\u540E\u9762
    if (a === path) {
      return 10;
    }

    if (b === path) {
      return -10;
    }

    return a.substr(1).split('/').length - b.substr(1).split('/').length;
  });
};
/**
 * \u83B7\u53D6\u5F53\u524D\u7684\u9009\u4E2D\u83DC\u5355\u5217\u8868
 * @param pathname
 * @param menuData
 * @returns MenuDataItem[]
 */

var getMatchMenu_getMatchMenu = function getMatchMenu(pathname, menuData,
/**
 * \u8981\u4E0D\u8981\u5C55\u793A\u5168\u90E8\u7684 key
 */
fullKeys, exact) {
  var flatMenus = es_getFlatMenus_getFlatMenus(menuData);
  var flatMenuKeys = Object.keys(flatMenus);
  var menuPathKeys = getMatchMenu_getMenuMatches(flatMenuKeys, pathname || '/', exact);

  if (!menuPathKeys || menuPathKeys.length < 1) {
    return [];
  }

  if (!fullKeys) {
    menuPathKeys = [menuPathKeys[menuPathKeys.length - 1]];
  }

  return menuPathKeys.map(function (menuPathKey) {
    var menuItem = flatMenus[menuPathKey] || {
      pro_layout_parentKeys: '',
      key: ''
    }; // \u53BB\u91CD

    var map = new Map();
    var parentItems = (menuItem.pro_layout_parentKeys || []).map(function (key) {
      if (map.has(key)) {
        return null;
      }

      map.set(key, true);
      return flatMenus[key];
    }).filter(function (item) {
      return item;
    });

    if (menuItem.key) {
      parentItems.push(menuItem);
    }

    return parentItems;
  }).flat(1);
};
/* harmony default export */ var es_getMatchMenu_getMatchMenu = (getMatchMenu_getMatchMenu);
// CONCATENATED MODULE: ./node_modules/@umijs/route-utils/es/index.js




//# sourceURL=webpack:///./node_modules/@umijs/route-utils/es/index.js_+_6_modules?`)},Gi0A:function(module,exports,__webpack_require__){eval(`var getTag = __webpack_require__("QqLw"),
    isObjectLike = __webpack_require__("ExA7");

/** \`Object#toString\` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of \`_.isMap\` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns \`true\` if \`value\` is a map, else \`false\`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


//# sourceURL=webpack:///./node_modules/lodash/_baseIsMap.js?`)},Hd6r:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("C1Nm");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);


//# sourceURL=webpack:///./node_modules/antd/es/config-provider/style/css.js?`)},Hx5s:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`
// UNUSED EXPORTS: BasicLayout, RouteContext, PageLoading, GridContent, DefaultHeader, TopNavHeader, DefaultFooter, SettingDrawer, getPageTitle, PageHeaderWrapper, getMenuData, PageContainer, FooterToolbar, WaterMark

// EXTERNAL MODULE: ./node_modules/antd/es/style/index.less
var es_style = __webpack_require__("cIOH");

// EXTERNAL MODULE: ./node_modules/antd/es/layout/style/index.less
var layout_style = __webpack_require__("0XgM");

// CONCATENATED MODULE: ./node_modules/antd/es/layout/style/index.js


// EXTERNAL MODULE: ./node_modules/antd/es/layout/layout.js
var layout_layout = __webpack_require__("PKem");

// EXTERNAL MODULE: ./node_modules/antd/es/layout/Sider.js + 3 modules
var Sider = __webpack_require__("ZX9x");

// CONCATENATED MODULE: ./node_modules/antd/es/layout/index.js


var Layout = layout_layout["e" /* default */];
Layout.Header = layout_layout["c" /* Header */];
Layout.Footer = layout_layout["b" /* Footer */];
Layout.Content = layout_layout["a" /* Content */];
Layout.Sider = Sider["b" /* default */];
/* harmony default export */ var es_layout = (Layout);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/style/index.less
var config_provider_style = __webpack_require__("k/Y0");

// CONCATENATED MODULE: ./node_modules/antd/es/config-provider/style/index.js

// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 2 modules
var config_provider = __webpack_require__("wEI+");

// EXTERNAL MODULE: ./node_modules/@ant-design/pro-layout/es/BasicLayout.less
var es_BasicLayout = __webpack_require__("mQwV");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/warning/warning.js
var warning = __webpack_require__("2W6z");
var warning_default = /*#__PURE__*/__webpack_require__.n(warning);

// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__("6cGi");

// CONCATENATED MODULE: ./node_modules/use-media-antd-query/es/useMediaQuery.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function useMediaQuery(mediaQuery) {
  var isSsr = typeof window === 'undefined';

  var _useState = Object(react["useState"])(function () {
    return isSsr ? false : window.matchMedia(mediaQuery).matches;
  }),
      _useState2 = _slicedToArray(_useState, 2),
      matches = _useState2[0],
      setMatches = _useState2[1];

  Object(react["useLayoutEffect"])(function () {
    if (isSsr) {
      return;
    }

    var mediaQueryList = window.matchMedia(mediaQuery);

    var listener = function listener(e) {
      return setMatches(e.matches);
    };

    mediaQueryList.addListener(listener);
    return function () {
      return mediaQueryList.removeListener(listener);
    };
  }, [mediaQuery]);
  return matches;
}
// CONCATENATED MODULE: ./node_modules/use-media-antd-query/es/index.js
function es_slicedToArray(arr, i) { return es_arrayWithHoles(arr) || es_iterableToArrayLimit(arr, i) || es_unsupportedIterableToArray(arr, i) || es_nonIterableRest(); }

function es_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function es_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return es_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return es_arrayLikeToArray(o, minLen); }

function es_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function es_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function es_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var MediaQueryEnum = {
  xs: {
    maxWidth: 575,
    matchMedia: '(max-width: 575px)'
  },
  sm: {
    minWidth: 576,
    maxWidth: 767,
    matchMedia: '(min-width: 576px) and (max-width: 767px)'
  },
  md: {
    minWidth: 768,
    maxWidth: 991,
    matchMedia: '(min-width: 768px) and (max-width: 991px)'
  },
  lg: {
    minWidth: 992,
    maxWidth: 1199,
    matchMedia: '(min-width: 992px) and (max-width: 1199px)'
  },
  xl: {
    minWidth: 1200,
    maxWidth: 1599,
    matchMedia: '(min-width: 1200px) and (max-width: 1599px)'
  },
  xxl: {
    minWidth: 1600,
    matchMedia: '(min-width: 1600px)'
  }
};
/**
 * loop query screen className
 * Array.find will throw a error
 * \`Rendered more hooks than during the previous render.\`
 * So should use Array.forEach
 */

var getScreenClassName = function getScreenClassName() {
  var className = 'md'; // support ssr

  if (typeof window === 'undefined') {
    return className;
  }

  var mediaQueryKey = Object.keys(MediaQueryEnum).find(function (key) {
    var matchMedia = MediaQueryEnum[key].matchMedia;

    if (window.matchMedia(matchMedia).matches) {
      return true;
    }

    return false;
  });
  className = mediaQueryKey;
  return className;
};

var es_useMedia = function useMedia() {
  var isMd = useMediaQuery(MediaQueryEnum.md.matchMedia);
  var isLg = useMediaQuery(MediaQueryEnum.lg.matchMedia);
  var isXxl = useMediaQuery(MediaQueryEnum.xxl.matchMedia);
  var isXl = useMediaQuery(MediaQueryEnum.xl.matchMedia);
  var isSm = useMediaQuery(MediaQueryEnum.sm.matchMedia);
  var isXs = useMediaQuery(MediaQueryEnum.xs.matchMedia);

  var _useState = Object(react["useState"])(getScreenClassName()),
      _useState2 = es_slicedToArray(_useState, 2),
      colSpan = _useState2[0],
      setColSpan = _useState2[1];

  Object(react["useEffect"])(function () {
    if (false) {}

    if (isXxl) {
      setColSpan('xxl');
      return;
    }

    if (isXl) {
      setColSpan('xl');
      return;
    }

    if (isLg) {
      setColSpan('lg');
      return;
    }

    if (isMd) {
      setColSpan('md');
      return;
    }

    if (isSm) {
      setColSpan('sm');
      return;
    }

    if (isXs) {
      setColSpan('xs');
      return;
    }

    setColSpan('md');
  }, [isMd, isLg, isXxl, isXl, isSm, isXs]);
  return colSpan;
};

/* harmony default export */ var es = (es_useMedia);
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-utils/es/useMountMergeState/index.js
function useMountMergeState_slicedToArray(arr, i) { return useMountMergeState_arrayWithHoles(arr) || useMountMergeState_iterableToArrayLimit(arr, i) || useMountMergeState_unsupportedIterableToArray(arr, i) || useMountMergeState_nonIterableRest(); }

function useMountMergeState_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function useMountMergeState_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useMountMergeState_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useMountMergeState_arrayLikeToArray(o, minLen); }

function useMountMergeState_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function useMountMergeState_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function useMountMergeState_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function useMountMergeState(initialState, option) {
  var mountRef = Object(react["useRef"])(false);
  var frame = Object(react["useRef"])(0);
  Object(react["useEffect"])(function () {
    mountRef.current = true;
    return function () {
      mountRef.current = false;
    };
  });

  var _useMergedState = Object(useMergedState["a" /* default */])(initialState, option),
      _useMergedState2 = useMountMergeState_slicedToArray(_useMergedState, 2),
      state = _useMergedState2[0],
      setState = _useMergedState2[1];

  var mountSetState = function mountSetState(prevState) {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(function () {
      if (mountRef.current) {
        setState(prevState);
      }
    });
  };

  return [state, mountSetState];
}

/* harmony default export */ var es_useMountMergeState = (useMountMergeState);
// EXTERNAL MODULE: ./node_modules/fast-deep-equal/es6/react.js
var es6_react = __webpack_require__("tJk1");
var es6_react_default = /*#__PURE__*/__webpack_require__.n(es6_react);

// CONCATENATED MODULE: ./node_modules/@ant-design/pro-utils/es/hooks/useDeepCompareEffect/index.js


var isDeepEqual = es6_react_default.a;

function useDeepCompareMemoize(value) {
  var ref = Object(react["useRef"])(); // it can be done by using useMemo as well
  // but useRef is rather cleaner and easier

  if (!isDeepEqual(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
}

function useDeepCompareEffect(effect) {
  var dependencies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  Object(react["useEffect"])(effect, useDeepCompareMemoize(dependencies));
}

/* harmony default export */ var hooks_useDeepCompareEffect = (useDeepCompareEffect);
// EXTERNAL MODULE: ./node_modules/@ant-design/pro-utils/es/isBrowser/index.js
var isBrowser = __webpack_require__("7z/i");

// CONCATENATED MODULE: ./node_modules/@ant-design/pro-utils/es/hooks/useDocumentTitle/index.js



function useDocumentTitle(titleInfo, appDefaultTitle) {
  var titleText = typeof titleInfo.pageName === 'string' ? titleInfo.title : appDefaultTitle;
  Object(react["useEffect"])(function () {
    if (Object(isBrowser["a" /* default */])() && titleText) {
      document.title = titleText;
    }
  }, [titleInfo.title]);
}

/* harmony default export */ var hooks_useDocumentTitle = (useDocumentTitle);
// CONCATENATED MODULE: ./node_modules/omit.js/es/index.js
function omit(obj, fields) {
  // eslint-disable-next-line prefer-object-spread
  var shallowCopy = Object.assign({}, obj);

  for (var i = 0; i < fields.length; i += 1) {
    var key = fields[i];
    delete shallowCopy[key];
  }

  return shallowCopy;
}

/* harmony default export */ var omit_js_es = (omit);
// CONCATENATED MODULE: ./node_modules/dequal/lite/index.mjs
var has = Object.prototype.hasOwnProperty;

function dequal(foo, bar) {
	var ctor, len;
	if (foo === bar) return true;

	if (foo && bar && (ctor=foo.constructor) === bar.constructor) {
		if (ctor === Date) return foo.getTime() === bar.getTime();
		if (ctor === RegExp) return foo.toString() === bar.toString();

		if (ctor === Array) {
			if ((len=foo.length) === bar.length) {
				while (len-- && dequal(foo[len], bar[len]));
			}
			return len === -1;
		}

		if (!ctor || typeof foo === 'object') {
			len = 0;
			for (ctor in foo) {
				if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
				if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
			}
			return Object.keys(bar).length === len;
		}
	}

	return foo !== foo && bar !== bar;
}

// CONCATENATED MODULE: ./node_modules/swr/esm/libs/hash.js
// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
var table = new WeakMap();
// counter of the key
var counter = 0;
// hashes an array of objects and returns a string
function hash(args) {
    if (!args.length)
        return '';
    var key = 'arg';
    for (var i = 0; i < args.length; ++i) {
        if (args[i] === null) {
            key += '@null';
            continue;
        }
        var _hash = void 0;
        if (typeof args[i] !== 'object' && typeof args[i] !== 'function') {
            // need to consider the case that args[i] is a string:
            // args[i]        _hash
            // "undefined" -> '"undefined"'
            // undefined   -> 'undefined'
            // 123         -> '123'
            // "null"      -> '"null"'
            if (typeof args[i] === 'string') {
                _hash = '"' + args[i] + '"';
            }
            else {
                _hash = String(args[i]);
            }
        }
        else {
            if (!table.has(args[i])) {
                _hash = counter;
                table.set(args[i], counter++);
            }
            else {
                _hash = table.get(args[i]);
            }
        }
        key += '@' + _hash;
    }
    return key;
}

// CONCATENATED MODULE: ./node_modules/swr/esm/cache.js

var cache_Cache = /** @class */ (function () {
    function Cache(initialData) {
        if (initialData === void 0) { initialData = {}; }
        this.cache = new Map(Object.entries(initialData));
        this.subs = [];
    }
    Cache.prototype.get = function (key) {
        var _key = this.serializeKey(key)[0];
        return this.cache.get(_key);
    };
    Cache.prototype.set = function (key, value) {
        var _key = this.serializeKey(key)[0];
        this.cache.set(_key, value);
        this.notify();
    };
    Cache.prototype.keys = function () {
        return Array.from(this.cache.keys());
    };
    Cache.prototype.has = function (key) {
        var _key = this.serializeKey(key)[0];
        return this.cache.has(_key);
    };
    Cache.prototype.clear = function () {
        this.cache.clear();
        this.notify();
    };
    Cache.prototype.delete = function (key) {
        var _key = this.serializeKey(key)[0];
        this.cache.delete(_key);
        this.notify();
    };
    // TODO: introduce namespace for the cache
    Cache.prototype.serializeKey = function (key) {
        var args = null;
        if (typeof key === 'function') {
            try {
                key = key();
            }
            catch (err) {
                // dependencies not ready
                key = '';
            }
        }
        if (Array.isArray(key)) {
            // args array
            args = key;
            key = hash(key);
        }
        else {
            // convert null to ''
            key = String(key || '');
        }
        var errorKey = key ? 'err@' + key : '';
        var isValidatingKey = key ? 'validating@' + key : '';
        return [key, args, errorKey, isValidatingKey];
    };
    Cache.prototype.subscribe = function (listener) {
        var _this = this;
        if (typeof listener !== 'function') {
            throw new Error('Expected the listener to be a function.');
        }
        var isSubscribed = true;
        this.subs.push(listener);
        return function () {
            if (!isSubscribed)
                return;
            isSubscribed = false;
            var index = _this.subs.indexOf(listener);
            if (index > -1) {
                _this.subs[index] = _this.subs[_this.subs.length - 1];
                _this.subs.length--;
            }
        };
    };
    // Notify Cache subscribers about a change in the cache
    Cache.prototype.notify = function () {
        for (var _i = 0, _a = this.subs; _i < _a.length; _i++) {
            var listener = _a[_i];
            listener();
        }
    };
    return Cache;
}());
/* harmony default export */ var cache = (cache_Cache);

// CONCATENATED MODULE: ./node_modules/swr/esm/libs/web-preset.js
/**
 * Due to bug https://bugs.chromium.org/p/chromium/issues/detail?id=678075,
 * it's not reliable to detect if the browser is currently online or offline
 * based on \`navigator.onLine\`.
 * As a work around, we always assume it's online on first load, and change
 * the status upon \`online\` or \`offline\` events.
 */
var online = true;
var isOnline = function () { return online; };
var isDocumentVisible = function () {
    if (typeof document !== 'undefined' &&
        document.visibilityState !== undefined) {
        return document.visibilityState !== 'hidden';
    }
    // always assume it's visible
    return true;
};
var fetcher = function (url) { return fetch(url).then(function (res) { return res.json(); }); };
var registerOnFocus = function (cb) {
    if (typeof window !== 'undefined' &&
        window.addEventListener !== undefined &&
        typeof document !== 'undefined' &&
        document.addEventListener !== undefined) {
        // focus revalidate
        document.addEventListener('visibilitychange', function () { return cb(); }, false);
        window.addEventListener('focus', function () { return cb(); }, false);
    }
};
var registerOnReconnect = function (cb) {
    if (typeof window !== 'undefined' && window.addEventListener !== undefined) {
        // reconnect revalidate
        window.addEventListener('online', function () {
            online = true;
            cb();
        }, false);
        // nothing to revalidate, just update the status
        window.addEventListener('offline', function () { return (online = false); }, false);
    }
};
/* harmony default export */ var web_preset = ({
    isOnline: isOnline,
    isDocumentVisible: isDocumentVisible,
    fetcher: fetcher,
    registerOnFocus: registerOnFocus,
    registerOnReconnect: registerOnReconnect
});

// CONCATENATED MODULE: ./node_modules/swr/esm/config.js
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



// cache
var config_cache = new cache();
// error retry
function onErrorRetry(_, __, config, revalidate, opts) {
    if (!config.isDocumentVisible()) {
        // if it's hidden, stop
        // it will auto revalidate when focus
        return;
    }
    if (typeof config.errorRetryCount === 'number' &&
        opts.retryCount > config.errorRetryCount) {
        return;
    }
    // exponential backoff
    var count = Math.min(opts.retryCount, 8);
    var timeout = ~~((Math.random() + 0.5) * (1 << count)) * config.errorRetryInterval;
    setTimeout(revalidate, timeout, opts);
}
// client side: need to adjust the config
// based on the browser status
// slow connection (<= 70Kbps)
var slowConnection = typeof window !== 'undefined' &&
    // @ts-ignore
    navigator['connection'] &&
    // @ts-ignore
    ['slow-2g', '2g'].indexOf(navigator['connection'].effectiveType) !== -1;
// config
var defaultConfig = __assign({ 
    // events
    onLoadingSlow: function () { }, onSuccess: function () { }, onError: function () { }, onErrorRetry: onErrorRetry, errorRetryInterval: (slowConnection ? 10 : 5) * 1000, focusThrottleInterval: 5 * 1000, dedupingInterval: 2 * 1000, loadingTimeout: (slowConnection ? 5 : 3) * 1000, refreshInterval: 0, revalidateOnFocus: true, revalidateOnReconnect: true, refreshWhenHidden: false, refreshWhenOffline: false, shouldRetryOnError: true, suspense: false, compare: dequal, isPaused: function () { return false; } }, web_preset);

/* harmony default export */ var esm_config = (defaultConfig);

// CONCATENATED MODULE: ./node_modules/swr/esm/env.js

var IS_SERVER = typeof window === 'undefined' ||
    // @ts-ignore
    !!(typeof Deno !== 'undefined' && Deno && Deno.version && Deno.version.deno);
// polyfill for requestAnimationFrame
var rAF = IS_SERVER
    ? null
    : window['requestAnimationFrame']
        ? function (f) { return window['requestAnimationFrame'](f); }
        : function (f) { return setTimeout(f, 1); };
// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
var useIsomorphicLayoutEffect = IS_SERVER ? react["useEffect"] : react["useLayoutEffect"];

// CONCATENATED MODULE: ./node_modules/swr/esm/swr-config-context.js

var SWRConfigContext = Object(react["createContext"])({});
SWRConfigContext.displayName = 'SWRConfigContext';
/* harmony default export */ var swr_config_context = (SWRConfigContext);

// CONCATENATED MODULE: ./node_modules/swr/esm/use-swr.js
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// TODO: use @ts-expect-error




// global state managers
var CONCURRENT_PROMISES = {};
var CONCURRENT_PROMISES_TS = {};
var FOCUS_REVALIDATORS = {};
var RECONNECT_REVALIDATORS = {};
var CACHE_REVALIDATORS = {};
var MUTATION_TS = {};
var MUTATION_END_TS = {};
// generate strictly increasing timestamps
var now = (function () {
    var ts = 0;
    return function () { return ++ts; };
})();
// setup DOM events listeners for \`focus\` and \`reconnect\` actions
if (!IS_SERVER) {
    var revalidate_1 = function (revalidators) {
        if (!esm_config.isDocumentVisible() || !esm_config.isOnline())
            return;
        for (var key in revalidators) {
            if (revalidators[key][0])
                revalidators[key][0]();
        }
    };
    if (typeof esm_config.registerOnFocus === 'function') {
        esm_config.registerOnFocus(function () { return revalidate_1(FOCUS_REVALIDATORS); });
    }
    if (typeof esm_config.registerOnReconnect === 'function') {
        esm_config.registerOnReconnect(function () { return revalidate_1(RECONNECT_REVALIDATORS); });
    }
}
var use_swr_trigger = function (_key, shouldRevalidate) {
    if (shouldRevalidate === void 0) { shouldRevalidate = true; }
    // we are ignoring the second argument which correspond to the arguments
    // the fetcher will receive when key is an array
    var _a = config_cache.serializeKey(_key), key = _a[0], keyErr = _a[2], keyValidating = _a[3];
    if (!key)
        return Promise.resolve();
    var updaters = CACHE_REVALIDATORS[key];
    if (key && updaters) {
        var currentData = config_cache.get(key);
        var currentError = config_cache.get(keyErr);
        var currentIsValidating = config_cache.get(keyValidating);
        var promises = [];
        for (var i = 0; i < updaters.length; ++i) {
            promises.push(updaters[i](shouldRevalidate, currentData, currentError, currentIsValidating, i > 0));
        }
        // return new updated value
        return Promise.all(promises).then(function () { return config_cache.get(key); });
    }
    return Promise.resolve(config_cache.get(key));
};
var broadcastState = function (key, data, error, isValidating) {
    var updaters = CACHE_REVALIDATORS[key];
    if (key && updaters) {
        for (var i = 0; i < updaters.length; ++i) {
            updaters[i](false, data, error, isValidating);
        }
    }
};
var use_swr_mutate = function (_key, _data, shouldRevalidate) {
    if (shouldRevalidate === void 0) { shouldRevalidate = true; }
    return __awaiter(void 0, void 0, void 0, function () {
        var _a, key, keyErr, beforeMutationTs, beforeConcurrentPromisesTs, data, error, isAsyncMutation, err_1, shouldAbort, updaters, promises, i;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = config_cache.serializeKey(_key), key = _a[0], keyErr = _a[2];
                    if (!key)
                        return [2 /*return*/];
                    // if there is no new data to update, let's just revalidate the key
                    if (typeof _data === 'undefined')
                        return [2 /*return*/, use_swr_trigger(_key, shouldRevalidate)
                            // update global timestamps
                        ];
                    // update global timestamps
                    MUTATION_TS[key] = now() - 1;
                    MUTATION_END_TS[key] = 0;
                    beforeMutationTs = MUTATION_TS[key];
                    beforeConcurrentPromisesTs = CONCURRENT_PROMISES_TS[key];
                    isAsyncMutation = false;
                    if (_data && typeof _data === 'function') {
                        // \`_data\` is a function, call it passing current cache value
                        try {
                            _data = _data(config_cache.get(key));
                        }
                        catch (err) {
                            // if \`_data\` function throws an error synchronously, it shouldn't be cached
                            _data = undefined;
                            error = err;
                        }
                    }
                    if (!(_data && typeof _data.then === 'function')) return [3 /*break*/, 5];
                    // \`_data\` is a promise
                    isAsyncMutation = true;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, _data];
                case 2:
                    data = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _b.sent();
                    error = err_1;
                    return [3 /*break*/, 4];
                case 4: return [3 /*break*/, 6];
                case 5:
                    data = _data;
                    _b.label = 6;
                case 6:
                    shouldAbort = function () {
                        // check if other mutations have occurred since we've started this mutation
                        if (beforeMutationTs !== MUTATION_TS[key] ||
                            beforeConcurrentPromisesTs !== CONCURRENT_PROMISES_TS[key]) {
                            if (error)
                                throw error;
                            return true;
                        }
                    };
                    // if there's a race we don't update cache or broadcast change, just return the data
                    if (shouldAbort())
                        return [2 /*return*/, data];
                    if (typeof data !== 'undefined') {
                        // update cached data
                        config_cache.set(key, data);
                    }
                    // always update or reset the error
                    config_cache.set(keyErr, error);
                    // reset the timestamp to mark the mutation has ended
                    MUTATION_END_TS[key] = now() - 1;
                    if (!isAsyncMutation) {
                        // we skip broadcasting if there's another mutation happened synchronously
                        if (shouldAbort())
                            return [2 /*return*/, data];
                    }
                    updaters = CACHE_REVALIDATORS[key];
                    if (updaters) {
                        promises = [];
                        for (i = 0; i < updaters.length; ++i) {
                            promises.push(updaters[i](!!shouldRevalidate, data, error, undefined, i > 0));
                        }
                        // return new updated value
                        return [2 /*return*/, Promise.all(promises).then(function () {
                                if (error)
                                    throw error;
                                return config_cache.get(key);
                            })];
                    }
                    // throw error or return data to be used by caller of mutate
                    if (error)
                        throw error;
                    return [2 /*return*/, data];
            }
        });
    });
};
function useSWR() {
    var _this = this;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var _key = args[0];
    var config = Object.assign({}, esm_config, Object(react["useContext"])(swr_config_context), args.length > 2
        ? args[2]
        : args.length === 2 && typeof args[1] === 'object'
            ? args[1]
            : {});
    // in typescript args.length > 2 is not same as args.lenth === 3
    // we do a safe type assertion here
    // args.length === 3
    var fn = (args.length > 2
        ? args[1]
        : args.length === 2 && typeof args[1] === 'function'
            ? args[1]
            : /**
                  pass fn as null will disable revalidate
                  https://paco.sh/blog/shared-hook-state-with-swr
                */
                args[1] === null
                    ? args[1]
                    : config.fetcher);
    // we assume \`key\` as the identifier of the request
    // \`key\` can change but \`fn\` shouldn't
    // (because \`revalidate\` only depends on \`key\`)
    // \`keyErr\` is the cache key for error objects
    var _a = config_cache.serializeKey(_key), key = _a[0], fnArgs = _a[1], keyErr = _a[2], keyValidating = _a[3];
    var configRef = Object(react["useRef"])(config);
    useIsomorphicLayoutEffect(function () {
        configRef.current = config;
    });
    var willRevalidateOnMount = function () {
        return (config.revalidateOnMount ||
            (!config.initialData && config.revalidateOnMount === undefined));
    };
    var resolveData = function () {
        var cachedData = config_cache.get(key);
        return typeof cachedData === 'undefined' ? config.initialData : cachedData;
    };
    var resolveIsValidating = function () {
        return !!config_cache.get(keyValidating) || (key && willRevalidateOnMount());
    };
    var initialData = resolveData();
    var initialError = config_cache.get(keyErr);
    var initialIsValidating = resolveIsValidating();
    // if a state is accessed (data, error or isValidating),
    // we add the state to dependencies so if the state is
    // updated in the future, we can trigger a rerender
    var stateDependencies = Object(react["useRef"])({
        data: false,
        error: false,
        isValidating: false
    });
    var stateRef = Object(react["useRef"])({
        data: initialData,
        error: initialError,
        isValidating: initialIsValidating
    });
    // display the data label in the React DevTools next to SWR hooks
    Object(react["useDebugValue"])(stateRef.current.data);
    var rerender = Object(react["useState"])({})[1];
    var dispatch = Object(react["useCallback"])(function (payload) {
        var shouldUpdateState = false;
        for (var k in payload) {
            // @ts-ignore
            if (stateRef.current[k] === payload[k]) {
                continue;
            }
            // @ts-ignore
            stateRef.current[k] = payload[k];
            // @ts-ignore
            if (stateDependencies.current[k]) {
                shouldUpdateState = true;
            }
        }
        if (shouldUpdateState) {
            // if component is unmounted, should skip rerender
            // if component is not mounted, should skip rerender
            if (unmountedRef.current || !initialMountedRef.current)
                return;
            rerender({});
        }
    }, 
    // config.suspense isn't allowed to change during the lifecycle
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    // error ref inside revalidate (is last request errored?)
    var unmountedRef = Object(react["useRef"])(false);
    var keyRef = Object(react["useRef"])(key);
    // check if component is mounted in suspense mode
    var initialMountedRef = Object(react["useRef"])(false);
    // do unmount check for callbacks
    var eventsCallback = Object(react["useCallback"])(function (event) {
        var _a;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        if (unmountedRef.current)
            return;
        if (!initialMountedRef.current)
            return;
        if (key !== keyRef.current)
            return;
        // @ts-ignore
        (_a = configRef.current)[event].apply(_a, params);
    }, [key]);
    var boundMutate = Object(react["useCallback"])(function (data, shouldRevalidate) {
        return use_swr_mutate(keyRef.current, data, shouldRevalidate);
    }, []);
    var addRevalidator = function (revalidators, callback) {
        if (!revalidators[key]) {
            revalidators[key] = [callback];
        }
        else {
            revalidators[key].push(callback);
        }
        return function () {
            var keyedRevalidators = revalidators[key];
            var index = keyedRevalidators.indexOf(callback);
            if (index >= 0) {
                // O(1): faster than splice
                keyedRevalidators[index] =
                    keyedRevalidators[keyedRevalidators.length - 1];
                keyedRevalidators.pop();
            }
        };
    };
    // start a revalidation
    var revalidate = Object(react["useCallback"])(function (revalidateOpts) {
        if (revalidateOpts === void 0) { revalidateOpts = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var _a, retryCount, _b, dedupe, loading, shouldDeduping, newData, startAt, newState, err_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!key || !fn)
                            return [2 /*return*/, false];
                        if (unmountedRef.current)
                            return [2 /*return*/, false];
                        if (configRef.current.isPaused())
                            return [2 /*return*/, false];
                        _a = revalidateOpts.retryCount, retryCount = _a === void 0 ? 0 : _a, _b = revalidateOpts.dedupe, dedupe = _b === void 0 ? false : _b;
                        loading = true;
                        shouldDeduping = typeof CONCURRENT_PROMISES[key] !== 'undefined' && dedupe;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 6, , 7]);
                        dispatch({
                            isValidating: true
                        });
                        config_cache.set(keyValidating, true);
                        if (!shouldDeduping) {
                            // also update other hooks
                            broadcastState(key, stateRef.current.data, stateRef.current.error, true);
                        }
                        newData = void 0;
                        startAt = void 0;
                        if (!shouldDeduping) return [3 /*break*/, 3];
                        // there's already an ongoing request,
                        // this one needs to be deduplicated.
                        startAt = CONCURRENT_PROMISES_TS[key];
                        return [4 /*yield*/, CONCURRENT_PROMISES[key]];
                    case 2:
                        newData = _c.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        // if no cache being rendered currently (it shows a blank page),
                        // we trigger the loading slow event.
                        if (config.loadingTimeout && !config_cache.get(key)) {
                            setTimeout(function () {
                                if (loading)
                                    eventsCallback('onLoadingSlow', key, config);
                            }, config.loadingTimeout);
                        }
                        if (fnArgs !== null) {
                            CONCURRENT_PROMISES[key] = fn.apply(void 0, fnArgs);
                        }
                        else {
                            CONCURRENT_PROMISES[key] = fn(key);
                        }
                        CONCURRENT_PROMISES_TS[key] = startAt = now();
                        return [4 /*yield*/, CONCURRENT_PROMISES[key]];
                    case 4:
                        newData = _c.sent();
                        setTimeout(function () {
                            delete CONCURRENT_PROMISES[key];
                            delete CONCURRENT_PROMISES_TS[key];
                        }, config.dedupingInterval);
                        // trigger the success event,
                        // only do this for the original request.
                        eventsCallback('onSuccess', newData, key, config);
                        _c.label = 5;
                    case 5:
                        // if there're other ongoing request(s), started after the current one,
                        // we need to ignore the current one to avoid possible race conditions:
                        //   req1------------------>res1        (current one)
                        //        req2---------------->res2
                        // the request that fired later will always be kept.
                        if (CONCURRENT_PROMISES_TS[key] > startAt) {
                            return [2 /*return*/, false];
                        }
                        // if there're other mutations(s), overlapped with the current revalidation:
                        // case 1:
                        //   req------------------>res
                        //       mutate------>end
                        // case 2:
                        //         req------------>res
                        //   mutate------>end
                        // case 3:
                        //   req------------------>res
                        //       mutate-------...---------->
                        // we have to ignore the revalidation result (res) because it's no longer fresh.
                        // meanwhile, a new revalidation should be triggered when the mutation ends.
                        if (MUTATION_TS[key] &&
                            // case 1
                            (startAt <= MUTATION_TS[key] ||
                                // case 2
                                startAt <= MUTATION_END_TS[key] ||
                                // case 3
                                MUTATION_END_TS[key] === 0)) {
                            dispatch({ isValidating: false });
                            return [2 /*return*/, false];
                        }
                        config_cache.set(keyErr, undefined);
                        config_cache.set(keyValidating, false);
                        newState = {
                            isValidating: false
                        };
                        if (typeof stateRef.current.error !== 'undefined') {
                            // we don't have an error
                            newState.error = undefined;
                        }
                        if (!config.compare(stateRef.current.data, newData)) {
                            // deep compare to avoid extra re-render
                            // data changed
                            newState.data = newData;
                        }
                        if (!config.compare(config_cache.get(key), newData)) {
                            config_cache.set(key, newData);
                        }
                        // merge the new state
                        dispatch(newState);
                        if (!shouldDeduping) {
                            // also update other hooks
                            broadcastState(key, newData, newState.error, false);
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        err_2 = _c.sent();
                        delete CONCURRENT_PROMISES[key];
                        delete CONCURRENT_PROMISES_TS[key];
                        if (configRef.current.isPaused()) {
                            dispatch({
                                isValidating: false
                            });
                            return [2 /*return*/, false];
                        }
                        config_cache.set(keyErr, err_2);
                        // get a new error
                        // don't use deep equal for errors
                        if (stateRef.current.error !== err_2) {
                            // we keep the stale data
                            dispatch({
                                isValidating: false,
                                error: err_2
                            });
                            if (!shouldDeduping) {
                                // also broadcast to update other hooks
                                broadcastState(key, undefined, err_2, false);
                            }
                        }
                        // events and retry
                        eventsCallback('onError', err_2, key, config);
                        if (config.shouldRetryOnError) {
                            // when retrying, we always enable deduping
                            eventsCallback('onErrorRetry', err_2, key, config, revalidate, {
                                retryCount: retryCount + 1,
                                dedupe: true
                            });
                        }
                        return [3 /*break*/, 7];
                    case 7:
                        loading = false;
                        return [2 /*return*/, true];
                }
            });
        });
    }, 
    // dispatch is immutable, and \`eventsCallback\`, \`fnArgs\`, \`keyErr\`, and \`keyValidating\` are based on \`key\`,
    // so we can them from the deps array.
    //
    // FIXME:
    // \`fn\` and \`config\` might be changed during the lifecycle,
    // but they might be changed every render like this.
    // useSWR('key', () => fetch('/api/'), { suspense: true })
    // So we omit the values from the deps array
    // even though it might cause unexpected behaviors.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key]);
    // mounted (client side rendering)
    useIsomorphicLayoutEffect(function () {
        if (!key)
            return undefined;
        // after \`key\` updates, we need to mark it as mounted
        unmountedRef.current = false;
        var isUpdating = initialMountedRef.current;
        initialMountedRef.current = true;
        // after the component is mounted (hydrated),
        // we need to update the data from the cache
        // and trigger a revalidation
        var currentHookData = stateRef.current.data;
        var latestKeyedData = resolveData();
        // update the state if the key changed (not the inital render) or cache updated
        keyRef.current = key;
        if (!config.compare(currentHookData, latestKeyedData)) {
            dispatch({ data: latestKeyedData });
        }
        // revalidate with deduping
        var softRevalidate = function () { return revalidate({ dedupe: true }); };
        // trigger a revalidation
        if (isUpdating || willRevalidateOnMount()) {
            if (typeof latestKeyedData !== 'undefined' && !IS_SERVER) {
                // delay revalidate if there's cache
                // to not block the rendering
                // @ts-ignore it's safe to use requestAnimationFrame in browser
                rAF(softRevalidate);
            }
            else {
                softRevalidate();
            }
        }
        var pending = false;
        var onFocus = function () {
            if (pending || !configRef.current.revalidateOnFocus)
                return;
            pending = true;
            softRevalidate();
            setTimeout(function () { return (pending = false); }, configRef.current.focusThrottleInterval);
        };
        var onReconnect = function () {
            if (configRef.current.revalidateOnReconnect) {
                softRevalidate();
            }
        };
        // register global cache update listener
        var onUpdate = function (shouldRevalidate, updatedData, updatedError, updatedIsValidating, dedupe) {
            if (shouldRevalidate === void 0) { shouldRevalidate = true; }
            if (dedupe === void 0) { dedupe = true; }
            // update hook state
            var newState = {};
            var needUpdate = false;
            if (typeof updatedData !== 'undefined' &&
                !config.compare(stateRef.current.data, updatedData)) {
                newState.data = updatedData;
                needUpdate = true;
            }
            // always update error
            // because it can be \`undefined\`
            if (stateRef.current.error !== updatedError) {
                newState.error = updatedError;
                needUpdate = true;
            }
            if (typeof updatedIsValidating !== 'undefined' &&
                stateRef.current.isValidating !== updatedIsValidating) {
                newState.isValidating = updatedIsValidating;
                needUpdate = true;
            }
            if (needUpdate) {
                dispatch(newState);
            }
            if (shouldRevalidate) {
                if (dedupe) {
                    return softRevalidate();
                }
                else {
                    return revalidate();
                }
            }
            return false;
        };
        var unsubFocus = addRevalidator(FOCUS_REVALIDATORS, onFocus);
        var unsubReconnect = addRevalidator(RECONNECT_REVALIDATORS, onReconnect);
        var unsubUpdate = addRevalidator(CACHE_REVALIDATORS, onUpdate);
        return function () {
            // cleanup
            dispatch = function () { return null; };
            // mark it as unmounted
            unmountedRef.current = true;
            unsubFocus();
            unsubReconnect();
            unsubUpdate();
        };
    }, [key, revalidate]);
    useIsomorphicLayoutEffect(function () {
        var timer = null;
        var tick = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!stateRef.current.error &&
                            (configRef.current.refreshWhenHidden ||
                                configRef.current.isDocumentVisible()) &&
                            (configRef.current.refreshWhenOffline || configRef.current.isOnline()))) return [3 /*break*/, 2];
                        // only revalidate when the page is visible
                        // if API request errored, we stop polling in this round
                        // and let the error retry function handle it
                        return [4 /*yield*/, revalidate({ dedupe: true })];
                    case 1:
                        // only revalidate when the page is visible
                        // if API request errored, we stop polling in this round
                        // and let the error retry function handle it
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        // Read the latest refreshInterval
                        if (configRef.current.refreshInterval && timer) {
                            timer = setTimeout(tick, configRef.current.refreshInterval);
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        if (configRef.current.refreshInterval) {
            timer = setTimeout(tick, configRef.current.refreshInterval);
        }
        return function () {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
        };
    }, [
        config.refreshInterval,
        config.refreshWhenHidden,
        config.refreshWhenOffline,
        revalidate
    ]);
    // suspense
    var latestData;
    var latestError;
    if (config.suspense) {
        // in suspense mode, we can't return empty state
        // (it should be suspended)
        // try to get data and error from cache
        latestData = config_cache.get(key);
        latestError = config_cache.get(keyErr);
        if (typeof latestData === 'undefined') {
            latestData = initialData;
        }
        if (typeof latestError === 'undefined') {
            latestError = initialError;
        }
        if (typeof latestData === 'undefined' &&
            typeof latestError === 'undefined') {
            // need to start the request if it hasn't
            if (!CONCURRENT_PROMISES[key]) {
                // trigger revalidate immediately
                // to get the promise
                // in this revalidate, should not rerender
                revalidate();
            }
            if (CONCURRENT_PROMISES[key] &&
                typeof CONCURRENT_PROMISES[key].then === 'function') {
                // if it is a promise
                throw CONCURRENT_PROMISES[key];
            }
            // it's a value, return it directly (override)
            latestData = CONCURRENT_PROMISES[key];
        }
        if (typeof latestData === 'undefined' && latestError) {
            // in suspense mode, throw error if there's no content
            throw latestError;
        }
    }
    // define returned state
    // can be memorized since the state is a ref
    var memoizedState = Object(react["useMemo"])(function () {
        // revalidate will be deprecated in the 1.x release
        // because mutate() covers the same use case of revalidate().
        // This remains only for backward compatibility
        var state = { revalidate: revalidate, mutate: boundMutate };
        Object.defineProperties(state, {
            error: {
                // \`key\` might be changed in the upcoming hook re-render,
                // but the previous state will stay
                // so we need to match the latest key and data (fallback to \`initialData\`)
                get: function () {
                    stateDependencies.current.error = true;
                    if (config.suspense) {
                        return latestError;
                    }
                    return keyRef.current === key ? stateRef.current.error : initialError;
                },
                enumerable: true
            },
            data: {
                get: function () {
                    stateDependencies.current.data = true;
                    if (config.suspense) {
                        return latestData;
                    }
                    return keyRef.current === key ? stateRef.current.data : initialData;
                },
                enumerable: true
            },
            isValidating: {
                get: function () {
                    stateDependencies.current.isValidating = true;
                    return key ? stateRef.current.isValidating : false;
                },
                enumerable: true
            }
        });
        return state;
        // \`config.suspense\` isn't allowed to change during the lifecycle.
        // \`boundMutate\` is immutable, and the immutability of \`revalidate\` depends on \`key\`
        // so we can omit them from the deps array,
        // but we put it to enable react-hooks/exhaustive-deps rule.
        // \`initialData\` and \`initialError\` are not initial values
        // because they are changed during the lifecycle
        // so we should add them in the deps array.
    }, [
        revalidate,
        initialData,
        initialError,
        boundMutate,
        key,
        config.suspense,
        latestError,
        latestData
    ]);
    return memoizedState;
}
Object.defineProperty(swr_config_context.Provider, 'default', {
    value: esm_config
});
var SWRConfig = swr_config_context.Provider;

/* harmony default export */ var use_swr = (useSWR);

// CONCATENATED MODULE: ./node_modules/swr/esm/use-swr-infinite.js
var use_swr_infinite_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var use_swr_infinite_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// TODO: use @ts-expect-error





function useSWRInfinite() {
    var _this = this;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var getKey = args[0];
    var config = Object.assign({}, esm_config, Object(react["useContext"])(swr_config_context), args.length > 2
        ? args[2]
        : args.length === 2 && typeof args[1] === 'object'
            ? args[1]
            : {});
    // in typescript args.length > 2 is not same as args.lenth === 3
    // we do a safe type assertion here
    // args.length === 3
    var fn = (args.length > 2
        ? args[1]
        : args.length === 2 && typeof args[1] === 'function'
            ? args[1]
            : config.fetcher);
    var _a = config.initialSize, initialSize = _a === void 0 ? 1 : _a, _b = config.revalidateAll, revalidateAll = _b === void 0 ? false : _b, _c = config.persistSize, persistSize = _c === void 0 ? false : _c, extraConfig = __rest(config
    // get the serialized key of the first page
    , ["initialSize", "revalidateAll", "persistSize"]);
    // get the serialized key of the first page
    var firstPageKey = null;
    try {
        ;
        firstPageKey = config_cache.serializeKey(getKey(0, null))[0];
    }
    catch (err) {
        // not ready
    }
    var rerender = Object(react["useState"])({})[1];
    // we use cache to pass extra info (context) to fetcher so it can be globally shared
    // here we get the key of the fetcher context cache
    var contextCacheKey = null;
    if (firstPageKey) {
        contextCacheKey = 'ctx@' + firstPageKey;
    }
    // page size is also cached to share the page data between hooks having the same key
    var pageSizeCacheKey = null;
    if (firstPageKey) {
        pageSizeCacheKey = 'len@' + firstPageKey;
    }
    var didMountRef = Object(react["useRef"])(false);
    var resolvePageSize = Object(react["useCallback"])(function () {
        var cachedPageSize = config_cache.get(pageSizeCacheKey);
        return typeof cachedPageSize !== 'undefined' ? cachedPageSize : initialSize;
    }, [pageSizeCacheKey, initialSize]);
    // keep the last page size to restore it with the persistSize option
    var lastPageSizeRef = Object(react["useRef"])(resolvePageSize());
    // every time the key changes, we reset the page size if it's not persisted
    useIsomorphicLayoutEffect(function () {
        if (!didMountRef.current) {
            didMountRef.current = true;
            return;
        }
        // If the key has been changed, we keep the current page size if persistSize is enabled
        config_cache.set(pageSizeCacheKey, persistSize ? lastPageSizeRef.current : initialSize);
        // initialSize isn't allowed to change during the lifecycle
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [firstPageKey]);
    // keep the data inside a ref
    var dataRef = Object(react["useRef"])();
    // actual swr of all pages
    var swr = use_swr(firstPageKey ? ['inf', firstPageKey] : null, function () { return use_swr_infinite_awaiter(_this, void 0, void 0, function () {
        var _a, originalData, force, data, pageSize, previousPageData, i, _b, pageKey, pageArgs, pageData, shouldFetchPage;
        return use_swr_infinite_generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = config_cache.get(contextCacheKey) || {}, originalData = _a.data, force = _a.force;
                    data = [];
                    pageSize = resolvePageSize();
                    previousPageData = null;
                    i = 0;
                    _c.label = 1;
                case 1:
                    if (!(i < pageSize)) return [3 /*break*/, 8];
                    _b = config_cache.serializeKey(getKey(i, previousPageData)), pageKey = _b[0], pageArgs = _b[1];
                    if (!pageKey) {
                        // pageKey is falsy, stop fetching next pages
                        return [3 /*break*/, 8];
                    }
                    pageData = config_cache.get(pageKey);
                    shouldFetchPage = revalidateAll ||
                        force ||
                        typeof pageData === 'undefined' ||
                        (typeof force === 'undefined' &&
                            i === 0 &&
                            typeof dataRef.current !== 'undefined') ||
                        (originalData && !config.compare(originalData[i], pageData));
                    if (!shouldFetchPage) return [3 /*break*/, 6];
                    if (!(pageArgs !== null)) return [3 /*break*/, 3];
                    return [4 /*yield*/, fn.apply(void 0, pageArgs)];
                case 2:
                    pageData = _c.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, fn(pageKey)];
                case 4:
                    pageData = _c.sent();
                    _c.label = 5;
                case 5:
                    config_cache.set(pageKey, pageData);
                    _c.label = 6;
                case 6:
                    data.push(pageData);
                    previousPageData = pageData;
                    _c.label = 7;
                case 7:
                    ++i;
                    return [3 /*break*/, 1];
                case 8:
                    // once we executed the data fetching based on the context, clear the context
                    config_cache.delete(contextCacheKey);
                    // return the data
                    return [2 /*return*/, data];
            }
        });
    }); }, extraConfig);
    // update dataRef
    useIsomorphicLayoutEffect(function () {
        dataRef.current = swr.data;
    }, [swr.data]);
    var mutate = Object(react["useCallback"])(function (data, shouldRevalidate) {
        if (shouldRevalidate === void 0) { shouldRevalidate = true; }
        if (shouldRevalidate && typeof data !== 'undefined') {
            // we only revalidate the pages that are changed
            var originalData = dataRef.current;
            config_cache.set(contextCacheKey, { data: originalData, force: false });
        }
        else if (shouldRevalidate) {
            // calling \`mutate()\`, we revalidate all pages
            config_cache.set(contextCacheKey, { force: true });
        }
        return swr.mutate(data, shouldRevalidate);
    }, 
    // swr.mutate is always the same reference
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [contextCacheKey]);
    // extend the SWR API
    var setSize = Object(react["useCallback"])(function (arg) {
        var size;
        if (typeof arg === 'function') {
            size = arg(resolvePageSize());
        }
        else if (typeof arg === 'number') {
            size = arg;
        }
        if (typeof size === 'number') {
            config_cache.set(pageSizeCacheKey, size);
            lastPageSizeRef.current = size;
        }
        rerender({});
        return mutate(function (v) { return v; });
    }, 
    // immutability of rerender is guaranteed by React, but react-hooks/exhaustive-deps doesn't recognize it
    // from \`rerender = useState({})[1], so we put rerender here
    [pageSizeCacheKey, resolvePageSize, mutate, rerender]);
    // Use getter functions to avoid unnecessary re-renders caused by triggering all the getters of the returned swr object
    var swrInfinite = { size: resolvePageSize(), setSize: setSize, mutate: mutate };
    Object.defineProperties(swrInfinite, {
        error: {
            get: function () { return swr.error; },
            enumerable: true
        },
        data: {
            get: function () { return swr.data; },
            enumerable: true
        },
        // revalidate will be deprecated in the 1.x release
        // because mutate() covers the same use case of revalidate().
        // This remains only for backward compatibility
        revalidate: {
            get: function () { return swr.revalidate; },
            enumerable: true
        },
        isValidating: {
            get: function () { return swr.isValidating; },
            enumerable: true
        }
    });
    return swrInfinite;
}


// CONCATENATED MODULE: ./node_modules/swr/esm/index.js
// \`useSWR\` and related APIs

/* harmony default export */ var esm = (use_swr);

// \`useSWRInfinite\`

// Cache related, to be replaced by the new APIs


// EXTERNAL MODULE: ./node_modules/@umijs/route-utils/es/index.js + 6 modules
var route_utils_es = __webpack_require__("GOef");

// EXTERNAL MODULE: ./node_modules/@ant-design/pro-layout/es/Header.less
var Header = __webpack_require__("YPDd");

// EXTERNAL MODULE: ./node_modules/@ant-design/pro-layout/es/components/GlobalHeader/index.less
var components_GlobalHeader = __webpack_require__("W3vr");

// EXTERNAL MODULE: ./node_modules/antd/es/menu/style/index.less
var menu_style = __webpack_require__("x54q");

// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/style/index.js
var tooltip_style = __webpack_require__("5Dmo");

// CONCATENATED MODULE: ./node_modules/antd/es/menu/style/index.js

 // style dependencies
// deps-lint-skip: layout


// EXTERNAL MODULE: ./node_modules/antd/es/menu/index.js + 3 modules
var es_menu = __webpack_require__("BvKs");

// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/MenuUnfoldOutlined.js
// This icon file is generated automatically.
var MenuUnfoldOutlined_MenuUnfoldOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z" } }] }, "name": "menu-unfold", "theme": "outlined" };
/* harmony default export */ var asn_MenuUnfoldOutlined = (MenuUnfoldOutlined_MenuUnfoldOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__("6VBw");

// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/MenuUnfoldOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_MenuUnfoldOutlined_MenuUnfoldOutlined = function MenuUnfoldOutlined(props, ref) {
  return /*#__PURE__*/react["createElement"](AntdIcon["a" /* default */], Object.assign({}, props, {
    ref: ref,
    icon: asn_MenuUnfoldOutlined
  }));
};

icons_MenuUnfoldOutlined_MenuUnfoldOutlined.displayName = 'MenuUnfoldOutlined';
/* harmony default export */ var icons_MenuUnfoldOutlined = (/*#__PURE__*/react["forwardRef"](icons_MenuUnfoldOutlined_MenuUnfoldOutlined));
// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/MenuFoldOutlined.js
// This icon file is generated automatically.
var MenuFoldOutlined_MenuFoldOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z" } }] }, "name": "menu-fold", "theme": "outlined" };
/* harmony default export */ var asn_MenuFoldOutlined = (MenuFoldOutlined_MenuFoldOutlined);

// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/MenuFoldOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_MenuFoldOutlined_MenuFoldOutlined = function MenuFoldOutlined(props, ref) {
  return /*#__PURE__*/react["createElement"](AntdIcon["a" /* default */], Object.assign({}, props, {
    ref: ref,
    icon: asn_MenuFoldOutlined
  }));
};

icons_MenuFoldOutlined_MenuFoldOutlined.displayName = 'MenuFoldOutlined';
/* harmony default export */ var icons_MenuFoldOutlined = (/*#__PURE__*/react["forwardRef"](icons_MenuFoldOutlined_MenuFoldOutlined));
// EXTERNAL MODULE: ./node_modules/@ant-design/pro-layout/es/components/SiderMenu/index.less
var components_SiderMenu = __webpack_require__("Re9Q");

// EXTERNAL MODULE: ./node_modules/antd/es/skeleton/style/index.less
var skeleton_style = __webpack_require__("oIFs");

// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/style/index.js


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("rePB");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("U8pU");

// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Title.js


/* eslint-disable jsx-a11y/heading-has-content */



var Title_Title = function Title(_ref) {
  var prefixCls = _ref.prefixCls,
      className = _ref.className,
      width = _ref.width,
      style = _ref.style;
  return /*#__PURE__*/react["createElement"]("h3", {
    className: classnames_default()(prefixCls, className),
    style: Object(esm_extends["a" /* default */])({
      width: width
    }, style)
  });
};

/* harmony default export */ var skeleton_Title = (Title_Title);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__("KQm4");

// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Paragraph.js




var Paragraph_Paragraph = function Paragraph(props) {
  var getWidth = function getWidth(index) {
    var width = props.width,
        _props$rows = props.rows,
        rows = _props$rows === void 0 ? 2 : _props$rows;

    if (Array.isArray(width)) {
      return width[index];
    } // last paragraph


    if (rows - 1 === index) {
      return width;
    }

    return undefined;
  };

  var prefixCls = props.prefixCls,
      className = props.className,
      style = props.style,
      rows = props.rows;

  var rowList = Object(toConsumableArray["a" /* default */])(Array(rows)).map(function (_, index) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      react["createElement"]("li", {
        key: index,
        style: {
          width: getWidth(index)
        }
      })
    );
  });

  return /*#__PURE__*/react["createElement"]("ul", {
    className: classnames_default()(prefixCls, className),
    style: style
  }, rowList);
};

/* harmony default export */ var skeleton_Paragraph = (Paragraph_Paragraph);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js + 1 modules
var config_provider_context = __webpack_require__("H84U");

// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Element.js





var Element_Element = function Element(props) {
  var _classNames, _classNames2;

  var prefixCls = props.prefixCls,
      className = props.className,
      style = props.style,
      size = props.size,
      shape = props.shape;
  var sizeCls = classnames_default()((_classNames = {}, Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _classNames));
  var shapeCls = classnames_default()((_classNames2 = {}, Object(defineProperty["a" /* default */])(_classNames2, "".concat(prefixCls, "-circle"), shape === 'circle'), Object(defineProperty["a" /* default */])(_classNames2, "".concat(prefixCls, "-square"), shape === 'square'), Object(defineProperty["a" /* default */])(_classNames2, "".concat(prefixCls, "-round"), shape === 'round'), _classNames2));
  var sizeStyle = typeof size === 'number' ? {
    width: size,
    height: size,
    lineHeight: "".concat(size, "px")
  } : {};
  return /*#__PURE__*/react["createElement"]("span", {
    className: classnames_default()(prefixCls, sizeCls, shapeCls, className),
    style: Object(esm_extends["a" /* default */])(Object(esm_extends["a" /* default */])({}, sizeStyle), style)
  });
};

/* harmony default export */ var skeleton_Element = (Element_Element);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var es_omit = __webpack_require__("bT9E");

// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Avatar.js








var Avatar_SkeletonAvatar = function SkeletonAvatar(props) {
  var renderSkeletonAvatar = function renderSkeletonAvatar(_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var customizePrefixCls = props.prefixCls,
        className = props.className,
        active = props.active;
    var prefixCls = getPrefixCls('skeleton', customizePrefixCls);
    var otherProps = Object(es_omit["a" /* default */])(props, ['prefixCls']);
    var cls = classnames_default()(prefixCls, "".concat(prefixCls, "-element"), Object(defineProperty["a" /* default */])({}, "".concat(prefixCls, "-active"), active), className);
    return /*#__PURE__*/react["createElement"]("div", {
      className: cls
    }, /*#__PURE__*/react["createElement"](skeleton_Element, Object(esm_extends["a" /* default */])({
      prefixCls: "".concat(prefixCls, "-avatar")
    }, otherProps)));
  };

  return /*#__PURE__*/react["createElement"](config_provider_context["a" /* ConfigConsumer */], null, renderSkeletonAvatar);
};

Avatar_SkeletonAvatar.defaultProps = {
  size: 'default',
  shape: 'circle'
};
/* harmony default export */ var Avatar = (Avatar_SkeletonAvatar);
// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Button.js








var Button_SkeletonButton = function SkeletonButton(props) {
  var renderSkeletonButton = function renderSkeletonButton(_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var customizePrefixCls = props.prefixCls,
        className = props.className,
        active = props.active;
    var prefixCls = getPrefixCls('skeleton', customizePrefixCls);
    var otherProps = Object(es_omit["a" /* default */])(props, ['prefixCls']);
    var cls = classnames_default()(prefixCls, "".concat(prefixCls, "-element"), Object(defineProperty["a" /* default */])({}, "".concat(prefixCls, "-active"), active), className);
    return /*#__PURE__*/react["createElement"]("div", {
      className: cls
    }, /*#__PURE__*/react["createElement"](skeleton_Element, Object(esm_extends["a" /* default */])({
      prefixCls: "".concat(prefixCls, "-button")
    }, otherProps)));
  };

  return /*#__PURE__*/react["createElement"](config_provider_context["a" /* ConfigConsumer */], null, renderSkeletonButton);
};

Button_SkeletonButton.defaultProps = {
  size: 'default'
};
/* harmony default export */ var Button = (Button_SkeletonButton);
// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Input.js








var Input_SkeletonInput = function SkeletonInput(props) {
  var renderSkeletonInput = function renderSkeletonInput(_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var customizePrefixCls = props.prefixCls,
        className = props.className,
        active = props.active;
    var prefixCls = getPrefixCls('skeleton', customizePrefixCls);
    var otherProps = Object(es_omit["a" /* default */])(props, ['prefixCls']);
    var cls = classnames_default()(prefixCls, "".concat(prefixCls, "-element"), Object(defineProperty["a" /* default */])({}, "".concat(prefixCls, "-active"), active), className);
    return /*#__PURE__*/react["createElement"]("div", {
      className: cls
    }, /*#__PURE__*/react["createElement"](skeleton_Element, Object(esm_extends["a" /* default */])({
      prefixCls: "".concat(prefixCls, "-input")
    }, otherProps)));
  };

  return /*#__PURE__*/react["createElement"](config_provider_context["a" /* ConfigConsumer */], null, renderSkeletonInput);
};

Input_SkeletonInput.defaultProps = {
  size: 'default'
};
/* harmony default export */ var Input = (Input_SkeletonInput);
// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Image.js



var Image_path = 'M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z';

var Image_SkeletonImage = function SkeletonImage(props) {
  var renderSkeletonImage = function renderSkeletonImage(_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var customizePrefixCls = props.prefixCls,
        className = props.className,
        style = props.style;
    var prefixCls = getPrefixCls('skeleton', customizePrefixCls);
    var cls = classnames_default()(prefixCls, "".concat(prefixCls, "-element"), className);
    return /*#__PURE__*/react["createElement"]("div", {
      className: cls
    }, /*#__PURE__*/react["createElement"]("div", {
      className: classnames_default()("".concat(prefixCls, "-image"), className),
      style: style
    }, /*#__PURE__*/react["createElement"]("svg", {
      viewBox: "0 0 1098 1024",
      xmlns: "http://www.w3.org/2000/svg",
      className: "".concat(prefixCls, "-image-svg")
    }, /*#__PURE__*/react["createElement"]("path", {
      d: Image_path,
      className: "".concat(prefixCls, "-image-path")
    }))));
  };

  return /*#__PURE__*/react["createElement"](config_provider_context["a" /* ConfigConsumer */], null, renderSkeletonImage);
};

/* harmony default export */ var skeleton_Image = (Image_SkeletonImage);
// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Skeleton.js














function getComponentProps(prop) {
  if (prop && Object(esm_typeof["a" /* default */])(prop) === 'object') {
    return prop;
  }

  return {};
}

function getAvatarBasicProps(hasTitle, hasParagraph) {
  if (hasTitle && !hasParagraph) {
    // Square avatar
    return {
      size: 'large',
      shape: 'square'
    };
  }

  return {
    size: 'large',
    shape: 'circle'
  };
}

function getTitleBasicProps(hasAvatar, hasParagraph) {
  if (!hasAvatar && hasParagraph) {
    return {
      width: '38%'
    };
  }

  if (hasAvatar && hasParagraph) {
    return {
      width: '50%'
    };
  }

  return {};
}

function getParagraphBasicProps(hasAvatar, hasTitle) {
  var basicProps = {}; // Width

  if (!hasAvatar || !hasTitle) {
    basicProps.width = '61%';
  } // Rows


  if (!hasAvatar && hasTitle) {
    basicProps.rows = 3;
  } else {
    basicProps.rows = 2;
  }

  return basicProps;
}

var Skeleton_Skeleton = function Skeleton(props) {
  var renderSkeleton = function renderSkeleton(_ref) {
    var getPrefixCls = _ref.getPrefixCls,
        direction = _ref.direction;
    var customizePrefixCls = props.prefixCls,
        loading = props.loading,
        className = props.className,
        children = props.children,
        avatar = props.avatar,
        title = props.title,
        paragraph = props.paragraph,
        active = props.active,
        round = props.round;
    var prefixCls = getPrefixCls('skeleton', customizePrefixCls);

    if (loading || !('loading' in props)) {
      var _classNames;

      var hasAvatar = !!avatar;
      var hasTitle = !!title;
      var hasParagraph = !!paragraph; // Avatar

      var avatarNode;

      if (hasAvatar) {
        var avatarProps = Object(esm_extends["a" /* default */])(Object(esm_extends["a" /* default */])({
          prefixCls: "".concat(prefixCls, "-avatar")
        }, getAvatarBasicProps(hasTitle, hasParagraph)), getComponentProps(avatar)); // We direct use SkeletonElement as avatar in skeleton internal.


        avatarNode = /*#__PURE__*/react["createElement"]("div", {
          className: "".concat(prefixCls, "-header")
        }, /*#__PURE__*/react["createElement"](skeleton_Element, avatarProps));
      }

      var contentNode;

      if (hasTitle || hasParagraph) {
        // Title
        var $title;

        if (hasTitle) {
          var titleProps = Object(esm_extends["a" /* default */])(Object(esm_extends["a" /* default */])({
            prefixCls: "".concat(prefixCls, "-title")
          }, getTitleBasicProps(hasAvatar, hasParagraph)), getComponentProps(title));

          $title = /*#__PURE__*/react["createElement"](skeleton_Title, titleProps);
        } // Paragraph


        var paragraphNode;

        if (hasParagraph) {
          var paragraphProps = Object(esm_extends["a" /* default */])(Object(esm_extends["a" /* default */])({
            prefixCls: "".concat(prefixCls, "-paragraph")
          }, getParagraphBasicProps(hasAvatar, hasTitle)), getComponentProps(paragraph));

          paragraphNode = /*#__PURE__*/react["createElement"](skeleton_Paragraph, paragraphProps);
        }

        contentNode = /*#__PURE__*/react["createElement"]("div", {
          className: "".concat(prefixCls, "-content")
        }, $title, paragraphNode);
      }

      var cls = classnames_default()(prefixCls, (_classNames = {}, Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-with-avatar"), hasAvatar), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-active"), active), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-round"), round), _classNames), className);
      return /*#__PURE__*/react["createElement"]("div", {
        className: cls
      }, avatarNode, contentNode);
    }

    return children;
  };

  return /*#__PURE__*/react["createElement"](config_provider_context["a" /* ConfigConsumer */], null, renderSkeleton);
};

Skeleton_Skeleton.defaultProps = {
  avatar: false,
  title: true,
  paragraph: true
};
Skeleton_Skeleton.Button = Button;
Skeleton_Skeleton.Avatar = Avatar;
Skeleton_Skeleton.Input = Input;
Skeleton_Skeleton.Image = skeleton_Image;
/* harmony default export */ var skeleton_Skeleton = (Skeleton_Skeleton);
// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/index.js

/* harmony default export */ var skeleton = (skeleton_Skeleton);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("Ff2n");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("VTBJ");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/utils.js + 5 modules
var utils = __webpack_require__("Qi1f");

// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/components/Icon.js





var Icon = /*#__PURE__*/react["forwardRef"](function (props, ref) {
  var className = props.className,
      Component = props.component,
      viewBox = props.viewBox,
      spin = props.spin,
      rotate = props.rotate,
      tabIndex = props.tabIndex,
      onClick = props.onClick,
      children = props.children,
      restProps = Object(objectWithoutProperties["a" /* default */])(props, ["className", "component", "viewBox", "spin", "rotate", "tabIndex", "onClick", "children"]);

  Object(utils["g" /* warning */])(Boolean(Component || children), 'Should have \`component\` prop or \`children\`.');
  Object(utils["f" /* useInsertStyles */])();
  var classString = classnames_default()('anticon', className);
  var svgClassString = classnames_default()({
    'anticon-spin': !!spin
  });
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;

  var innerSvgProps = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, utils["e" /* svgBaseProps */]), {}, {
    className: svgClassString,
    style: svgStyle,
    viewBox: viewBox
  });

  if (!viewBox) {
    delete innerSvgProps.viewBox;
  } // component > children


  var renderInnerNode = function renderInnerNode() {
    if (Component) {
      return /*#__PURE__*/react["createElement"](Component, Object.assign({}, innerSvgProps), children);
    }

    if (children) {
      Object(utils["g" /* warning */])(Boolean(viewBox) || react["Children"].count(children) === 1 && /*#__PURE__*/react["isValidElement"](children) && react["Children"].only(children).type === 'use', 'Make sure that you provide correct \`viewBox\`' + ' prop (default \`0 0 1024 1024\`) to the icon.');
      return /*#__PURE__*/react["createElement"]("svg", Object.assign({}, innerSvgProps, {
        viewBox: viewBox
      }), children);
    }

    return null;
  };

  var iconTabIndex = tabIndex;

  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  return /*#__PURE__*/react["createElement"]("span", Object.assign({
    role: "img"
  }, restProps, {
    ref: ref,
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString
  }), renderInnerNode());
});
Icon.displayName = 'AntdIcon';
/* harmony default export */ var components_Icon = (Icon);
// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/components/IconFont.js



var customCache = new Set();

function isValidCustomScriptUrl(scriptUrl) {
  return Boolean(typeof scriptUrl === 'string' && scriptUrl.length && !customCache.has(scriptUrl));
}

function createScriptUrlElements(scriptUrls) {
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var currentScriptUrl = scriptUrls[index];

  if (isValidCustomScriptUrl(currentScriptUrl)) {
    var script = document.createElement('script');
    script.setAttribute('src', currentScriptUrl);
    script.setAttribute('data-namespace', currentScriptUrl);

    if (scriptUrls.length > index + 1) {
      script.onload = function () {
        createScriptUrlElements(scriptUrls, index + 1);
      };

      script.onerror = function () {
        createScriptUrlElements(scriptUrls, index + 1);
      };
    }

    customCache.add(currentScriptUrl);
    document.body.appendChild(script);
  }
}

function create() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var scriptUrl = options.scriptUrl,
      _options$extraCommonP = options.extraCommonProps,
      extraCommonProps = _options$extraCommonP === void 0 ? {} : _options$extraCommonP;
  /**
   * DOM API required.
   * Make sure in browser environment.
   * The Custom Icon will create a <script/>
   * that loads SVG symbols and insert the SVG Element into the document body.
   */

  if (scriptUrl && typeof document !== 'undefined' && typeof window !== 'undefined' && typeof document.createElement === 'function') {
    if (Array.isArray(scriptUrl)) {
      // \u56E0\u4E3Aiconfont\u8D44\u6E90\u4F1A\u628Asvg\u63D2\u5165before\uFF0C\u6240\u4EE5\u524D\u52A0\u8F7D\u76F8\u540Ctype\u4F1A\u8986\u76D6\u540E\u52A0\u8F7D\uFF0C\u4E3A\u4E86\u6570\u7EC4\u8986\u76D6\u987A\u5E8F\uFF0C\u5012\u53D9\u63D2\u5165
      createScriptUrlElements(scriptUrl.reverse());
    } else {
      createScriptUrlElements([scriptUrl]);
    }
  }

  var Iconfont = /*#__PURE__*/react["forwardRef"](function (props, ref) {
    var type = props.type,
        children = props.children,
        restProps = Object(objectWithoutProperties["a" /* default */])(props, ["type", "children"]); // children > type


    var content = null;

    if (props.type) {
      content = /*#__PURE__*/react["createElement"]("use", {
        xlinkHref: "#".concat(type)
      });
    }

    if (children) {
      content = children;
    }

    return /*#__PURE__*/react["createElement"](components_Icon, Object.assign({}, extraCommonProps, restProps, {
      ref: ref
    }), content);
  });
  Iconfont.displayName = 'Iconfont';
  return Iconfont;
}
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-utils/es/isUrl/index.js
var isUrl = function isUrl(path) {
  if (!path.startsWith('http')) {
    return false;
  }

  try {
    var url = new URL(path);
    return !!url;
  } catch (error) {
    return false;
  }
};

/* harmony default export */ var es_isUrl = (isUrl);
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-utils/es/isImg/index.js
/** \u5224\u65AD\u662F\u5426\u662F\u56FE\u7247\u94FE\u63A5 */
function isImg(path) {
  return /\\w.(png|jpg|jpeg|svg|webp|gif|bmp)$/i.test(path);
}

/* harmony default export */ var es_isImg = (isImg);
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/defaultSettings.js
var defaultSettings = {
  navTheme: 'dark',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: false,
  headerHeight: 48,
  title: 'Ant Design Pro',
  iconfontUrl: '',
  primaryColor: 'daybreak',
  splitMenus: false
};
/* harmony default export */ var es_defaultSettings = (defaultSettings);
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/utils/utils.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getOpenKeysFromMenuData = function getOpenKeysFromMenuData(menuData) {
  return (menuData || []).reduce(function (pre, item) {
    if (item.key) {
      pre.push(item.key);
    }

    if (item.children) {
      var newArray = pre.concat(getOpenKeysFromMenuData(item.children) || []);
      return newArray;
    }

    return pre;
  }, []);
};
var themeConfig = {
  daybreak: 'daybreak',
  '#1890ff': 'daybreak',
  '#F5222D': 'dust',
  '#FA541C': 'volcano',
  '#FAAD14': 'sunset',
  '#13C2C2': 'cyan',
  '#52C41A': 'green',
  '#2F54EB': 'geekblue',
  '#722ED1': 'purple'
};

var invertKeyValues = function invertKeyValues(obj) {
  return Object.keys(obj).reduce(function (acc, key) {
    acc[obj[key]] = key;
    return acc;
  }, {});
};
/**
 * #1890ff -> daybreak
 *
 * @param val
 */


function genThemeToString(val) {
  return val && themeConfig[val] ? themeConfig[val] : undefined;
}
/**
 * Daybreak-> #1890ff
 *
 * @param val
 */

function genStringToTheme(val) {
  var stringConfig = invertKeyValues(themeConfig);
  return val && stringConfig[val] ? stringConfig[val] : val;
}
function clearMenuItem(menusData) {
  return menusData.map(function (item) {
    var finalItem = _objectSpread({}, item);

    if (!finalItem.name || finalItem.hideInMenu) {
      return null;
    }

    if (finalItem && (finalItem === null || finalItem === void 0 ? void 0 : finalItem.children)) {
      if (!finalItem.hideChildrenInMenu && finalItem.children.some(function (child) {
        return child && child.name && !child.hideInMenu;
      })) {
        return _objectSpread(_objectSpread({}, item), {}, {
          children: clearMenuItem(finalItem.children)
        });
      } // children \u4E3A\u7A7A\u5C31\u76F4\u63A5\u5220\u6389


      delete finalItem.children;
    }

    return finalItem;
  }).filter(function (item) {
    return item;
  });
}
// CONCATENATED MODULE: ./node_modules/unstated-next/dist/unstated-next.mjs


function createContainer(useHook) {
  var Context = react.createContext(null);

  function Provider(props) {
    var value = useHook(props.initialState);
    return react.createElement(Context.Provider, {
      value: value
    }, props.children);
  }

  function useContainer() {
    var value = react.useContext(Context);

    if (value === null) {
      throw new Error("Component must be wrapped with <Container.Provider>");
    }

    return value;
  }

  return {
    Provider: Provider,
    useContainer: useContainer
  };
}
function unstated_next_useContainer(container) {
  return container.useContainer();
}


//# sourceMappingURL=unstated-next.mjs.map

// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/SiderMenu/Counter.js
function Counter_slicedToArray(arr, i) { return Counter_arrayWithHoles(arr) || Counter_iterableToArrayLimit(arr, i) || Counter_unsupportedIterableToArray(arr, i) || Counter_nonIterableRest(); }

function Counter_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Counter_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Counter_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Counter_arrayLikeToArray(o, minLen); }

function Counter_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Counter_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Counter_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function useMenuCounter() {
  var _useState = Object(react["useState"])([]),
      _useState2 = Counter_slicedToArray(_useState, 2),
      flatMenuKeys = _useState2[0],
      setFlatMenuKeys = _useState2[1];

  return {
    flatMenuKeys: flatMenuKeys,
    setFlatMenuKeys: setFlatMenuKeys
  };
}

var MenuCounter = createContainer(useMenuCounter);
/* harmony default export */ var Counter = (MenuCounter);
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/SiderMenu/BaseMenu.js





function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || BaseMenu_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return BaseMenu_arrayLikeToArray(arr); }

function BaseMenu_slicedToArray(arr, i) { return BaseMenu_arrayWithHoles(arr) || BaseMenu_iterableToArrayLimit(arr, i) || BaseMenu_unsupportedIterableToArray(arr, i) || BaseMenu_nonIterableRest(); }

function BaseMenu_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function BaseMenu_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return BaseMenu_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return BaseMenu_arrayLikeToArray(o, minLen); }

function BaseMenu_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function BaseMenu_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function BaseMenu_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function BaseMenu_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function BaseMenu_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { BaseMenu_ownKeys(Object(source), true).forEach(function (key) { BaseMenu_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { BaseMenu_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function BaseMenu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }









var SubMenu = es_menu["a" /* default */].SubMenu,
    ItemGroup = es_menu["a" /* default */].ItemGroup;
var IconFont = create({
  scriptUrl: es_defaultSettings.iconfontUrl
}); // Allow menu.js config icon as string or ReactNode
//   icon: 'setting',
//   icon: 'icon-geren' #For Iconfont ,
//   icon: 'http://demo.com/icon.png',
//   icon: '/favicon.png',
//   icon: <Icon type="setting" />,

var BaseMenu_getIcon = function getIcon(icon) {
  var iconPrefixes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'icon-';

  if (typeof icon === 'string' && icon !== '') {
    if (es_isUrl(icon) || es_isImg(icon)) {
      return /*#__PURE__*/react_default.a.createElement(components_Icon, {
        component: function component() {
          return /*#__PURE__*/react_default.a.createElement("img", {
            src: icon,
            alt: "icon",
            className: "ant-pro-sider-menu-icon"
          });
        }
      });
    }

    if (icon.startsWith(iconPrefixes)) {
      return /*#__PURE__*/react_default.a.createElement(IconFont, {
        type: icon
      });
    }
  }

  return icon;
};

var BaseMenu_MenuUtil = function MenuUtil(props) {
  var _this = this;

  _classCallCheck(this, MenuUtil);

  this.props = void 0;

  this.getNavMenuItems = function () {
    var menusData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var isChildren = arguments.length > 1 ? arguments[1] : undefined;
    return menusData.map(function (item) {
      return _this.getSubMenuOrItem(item, isChildren);
    }).filter(function (item) {
      return item;
    });
  };

  this.getSubMenuOrItem = function (item, isChildren) {
    if (Array.isArray(item.children) && item && item.children.length > 0) {
      var name = _this.getIntlName(item);

      var _this$props = _this.props,
          subMenuItemRender = _this$props.subMenuItemRender,
          prefixCls = _this$props.prefixCls,
          menu = _this$props.menu,
          iconPrefixes = _this$props.iconPrefixes; //  get defaultTitle by menuItemRender

      var defaultTitle = item.icon ? /*#__PURE__*/react_default.a.createElement("span", {
        className: "".concat(prefixCls, "-menu-item"),
        title: name
      }, !isChildren && BaseMenu_getIcon(item.icon, iconPrefixes), /*#__PURE__*/react_default.a.createElement("span", {
        className: "".concat(prefixCls, "-menu-item-title")
      }, name)) : /*#__PURE__*/react_default.a.createElement("span", {
        className: "".concat(prefixCls, "-menu-item"),
        title: name
      }, name); // subMenu only title render

      var title = subMenuItemRender ? subMenuItemRender(BaseMenu_objectSpread(BaseMenu_objectSpread({}, item), {}, {
        isUrl: false
      }), defaultTitle) : defaultTitle;
      var MenuComponents = (menu === null || menu === void 0 ? void 0 : menu.type) === 'group' ? ItemGroup : SubMenu;
      return /*#__PURE__*/react_default.a.createElement(MenuComponents, {
        title: title,
        key: item.key || item.path,
        onTitleClick: item.onTitleClick
      }, _this.getNavMenuItems(item.children, true));
    }

    return /*#__PURE__*/react_default.a.createElement(es_menu["a" /* default */].Item, {
      disabled: item.disabled,
      key: item.key || item.path,
      onClick: item.onTitleClick
    }, _this.getMenuItemPath(item, isChildren));
  };

  this.getIntlName = function (item) {
    var name = item.name,
        locale = item.locale;
    var _this$props2 = _this.props,
        menu = _this$props2.menu,
        formatMessage = _this$props2.formatMessage;

    if (locale && (menu === null || menu === void 0 ? void 0 : menu.locale) !== false) {
      return formatMessage === null || formatMessage === void 0 ? void 0 : formatMessage({
        id: locale,
        defaultMessage: name
      });
    }

    return name;
  };

  this.getMenuItemPath = function (item, isChildren) {
    var itemPath = _this.conversionPath(item.path || '/');

    var _this$props3 = _this.props,
        _this$props3$location = _this$props3.location,
        location = _this$props3$location === void 0 ? {
      pathname: '/'
    } : _this$props3$location,
        isMobile = _this$props3.isMobile,
        onCollapse = _this$props3.onCollapse,
        menuItemRender = _this$props3.menuItemRender,
        iconPrefixes = _this$props3.iconPrefixes; // if local is true formatMessage all name\u3002

    var name = _this.getIntlName(item);

    var prefixCls = _this.props.prefixCls;
    var icon = isChildren ? null : BaseMenu_getIcon(item.icon, iconPrefixes);
    var defaultItem = /*#__PURE__*/react_default.a.createElement("span", {
      className: "".concat(prefixCls, "-menu-item")
    }, icon, /*#__PURE__*/react_default.a.createElement("span", {
      className: "".concat(prefixCls, "-menu-item-title")
    }, name));
    var isHttpUrl = es_isUrl(itemPath); // Is it a http link

    if (isHttpUrl) {
      defaultItem = /*#__PURE__*/react_default.a.createElement("span", {
        title: name,
        onClick: function onClick() {
          window.open(itemPath);
        },
        className: "".concat(prefixCls, "-menu-item ").concat(prefixCls, "-menu-item-link")
      }, icon, /*#__PURE__*/react_default.a.createElement("span", {
        className: "".concat(prefixCls, "-menu-item-title")
      }, name));
    }

    if (menuItemRender) {
      var renderItemProps = BaseMenu_objectSpread(BaseMenu_objectSpread({}, item), {}, {
        isUrl: isHttpUrl,
        itemPath: itemPath,
        isMobile: isMobile,
        replace: itemPath === location.pathname,
        onClick: function onClick() {
          return onCollapse && onCollapse(true);
        }
      });

      return menuItemRender(renderItemProps, defaultItem, _this.props);
    }

    return defaultItem;
  };

  this.conversionPath = function (path) {
    if (path && path.indexOf('http') === 0) {
      return path;
    }

    return "/".concat(path || '').replace(/\\/+/g, '/');
  };

  this.props = props;
};
/**
 * \u751F\u6210openKeys \u7684\u5BF9\u8C61\uFF0C\u56E0\u4E3A\u8BBE\u7F6E\u4E86openKeys \u5C31\u4F1A\u53D8\u6210\u53D7\u63A7\uFF0C\u6240\u4EE5\u9700\u8981\u4E00\u4E2A\u7A7A\u5BF9\u8C61
 *
 * @param BaseMenuProps
 */


var getOpenKeysProps = function getOpenKeysProps(openKeys, _ref) {
  var layout = _ref.layout,
      collapsed = _ref.collapsed;
  var openKeysProps = {};

  if (openKeys && !collapsed && ['side', 'mix'].includes(layout || 'mix')) {
    openKeysProps = {
      openKeys: openKeys
    };
  }

  return openKeysProps;
};

var BaseMenu_BaseMenu = function BaseMenu(props) {
  var theme = props.theme,
      mode = props.mode,
      className = props.className,
      handleOpenChange = props.handleOpenChange,
      style = props.style,
      menuData = props.menuData,
      menu = props.menu,
      matchMenuKeys = props.matchMenuKeys,
      iconfontUrl = props.iconfontUrl,
      collapsed = props.collapsed,
      propsSelectedKeys = props.selectedKeys,
      onSelect = props.onSelect,
      propsOpenKeys = props.openKeys; // \u7528\u4E8E\u51CF\u5C11 defaultOpenKeys \u8BA1\u7B97\u7684\u7EC4\u4EF6

  var defaultOpenKeysRef = Object(react["useRef"])([]);

  var _MenuCounter$useConta = Counter.useContainer(),
      flatMenuKeys = _MenuCounter$useConta.flatMenuKeys;

  var _useMountMergeState = es_useMountMergeState(menu === null || menu === void 0 ? void 0 : menu.defaultOpenAll),
      _useMountMergeState2 = BaseMenu_slicedToArray(_useMountMergeState, 2),
      defaultOpenAll = _useMountMergeState2[0],
      setDefaultOpenAll = _useMountMergeState2[1];

  var _useMountMergeState3 = es_useMountMergeState(function () {
    if (menu === null || menu === void 0 ? void 0 : menu.defaultOpenAll) {
      return getOpenKeysFromMenuData(menuData) || [];
    }

    if (propsOpenKeys === false) {
      return false;
    }

    return [];
  }, {
    value: propsOpenKeys === false ? undefined : propsOpenKeys,
    onChange: handleOpenChange
  }),
      _useMountMergeState4 = BaseMenu_slicedToArray(_useMountMergeState3, 2),
      openKeys = _useMountMergeState4[0],
      setOpenKeys = _useMountMergeState4[1];

  var _useMountMergeState5 = es_useMountMergeState([], {
    value: propsSelectedKeys,
    onChange: onSelect ? function (keys) {
      if (onSelect && keys) {
        onSelect(keys);
      }
    } : undefined
  }),
      _useMountMergeState6 = BaseMenu_slicedToArray(_useMountMergeState5, 2),
      selectedKeys = _useMountMergeState6[0],
      setSelectedKeys = _useMountMergeState6[1];

  Object(react["useEffect"])(function () {
    if ((menu === null || menu === void 0 ? void 0 : menu.defaultOpenAll) || propsOpenKeys === false || flatMenuKeys.length) {
      return;
    }

    if (matchMenuKeys) {
      setOpenKeys(matchMenuKeys);
      setSelectedKeys(matchMenuKeys);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [matchMenuKeys.join('-')]);
  Object(react["useEffect"])(function () {
    // reset IconFont
    if (iconfontUrl) {
      IconFont = create({
        scriptUrl: iconfontUrl
      });
    }
  }, [iconfontUrl]);
  Object(react["useEffect"])(function () {
    // if pathname can't match, use the nearest parent's key
    if (matchMenuKeys.join('-') !== (selectedKeys || []).join('-')) {
      setSelectedKeys(matchMenuKeys);
    }

    if (!defaultOpenAll && propsOpenKeys !== false && matchMenuKeys.join('-') !== (openKeys || []).join('-')) {
      var newKeys = matchMenuKeys; // \u5982\u679C\u4E0D\u81EA\u52A8\u5173\u95ED\uFF0C\u6211\u9700\u8981\u628A openKeys \u653E\u8FDB\u53BB

      if ((menu === null || menu === void 0 ? void 0 : menu.autoClose) === false) {
        newKeys = Array.from(new Set([].concat(_toConsumableArray(matchMenuKeys), _toConsumableArray(openKeys || []))));
      }

      setOpenKeys(newKeys);
    } else if (flatMenuKeys.length > 0) setDefaultOpenAll(false); // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [matchMenuKeys.join('-'), collapsed]);
  var openKeysProps = Object(react["useMemo"])(function () {
    return getOpenKeysProps(openKeys, props);
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [openKeys && openKeys.join(','), props.layout, props.collapsed]);

  var _useState = Object(react["useState"])(function () {
    return new BaseMenu_MenuUtil(props);
  }),
      _useState2 = BaseMenu_slicedToArray(_useState, 1),
      menuUtils = _useState2[0];

  if (menu === null || menu === void 0 ? void 0 : menu.loading) {
    return /*#__PURE__*/react_default.a.createElement("div", {
      style: (mode === null || mode === void 0 ? void 0 : mode.includes('inline')) ? {
        padding: 24
      } : {
        marginTop: 16
      }
    }, /*#__PURE__*/react_default.a.createElement(skeleton, {
      active: true,
      title: false,
      paragraph: {
        rows: (mode === null || mode === void 0 ? void 0 : mode.includes('inline')) ? 6 : 1
      }
    }));
  }

  var cls = classnames_default()(className, {
    'top-nav-menu': mode === 'horizontal'
  }); // sync props

  menuUtils.props = props; // \u8FD9\u6B21 openKeys === false \u7684\u65F6\u5019\u7684\u60C5\u51B5\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\u5E2E\u7528\u6237\u9009\u4E2D\u4E00\u6B21
  // \u7B2C\u4E8C\u6B64\u4E0D\u4F1A\u4F7F\u7528\uFF0C\u6240\u4EE5\u7528\u4E86 defaultOpenKeys
  // \u8FD9\u91CC\u8FD4\u56DE null\uFF0C\u662F\u4E3A\u4E86\u8BA9 defaultOpenKeys \u751F\u6548

  if (props.openKeys === false && !props.handleOpenChange) {
    defaultOpenKeysRef.current = matchMenuKeys;
  }

  var finallyData = props.postMenuData ? props.postMenuData(menuData) : menuData;

  if (finallyData && (finallyData === null || finallyData === void 0 ? void 0 : finallyData.length) < 1) {
    return null;
  }

  return /*#__PURE__*/react_default.a.createElement(es_menu["a" /* default */], _extends({}, openKeysProps, {
    key: "Menu",
    mode: mode,
    inlineIndent: 16,
    defaultOpenKeys: defaultOpenKeysRef.current,
    theme: theme,
    selectedKeys: selectedKeys,
    style: style,
    className: cls,
    onOpenChange: setOpenKeys
  }, props.menuProps), menuUtils.getNavMenuItems(finallyData, false));
};

BaseMenu_BaseMenu.defaultProps = {
  postMenuData: function postMenuData(data) {
    return data || [];
  }
};
/* harmony default export */ var SiderMenu_BaseMenu = (BaseMenu_BaseMenu);
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/SiderMenu/SiderMenu.js





function SiderMenu_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function SiderMenu_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SiderMenu_ownKeys(Object(source), true).forEach(function (key) { SiderMenu_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SiderMenu_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SiderMenu_extends() { SiderMenu_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SiderMenu_extends.apply(this, arguments); }

function SiderMenu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var SiderMenu_Sider = es_layout.Sider;
var SiderMenu_defaultRenderLogo = function defaultRenderLogo(logo) {
  if (typeof logo === 'string') {
    return /*#__PURE__*/react_default.a.createElement("img", {
      src: logo,
      alt: "logo"
    });
  }

  if (typeof logo === 'function') {
    return logo();
  }

  return logo;
};
var SiderMenu_defaultRenderLogoAndTitle = function defaultRenderLogoAndTitle(props) {
  var renderKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'menuHeaderRender';
  var logo = props.logo,
      title = props.title,
      layout = props.layout;
  var renderFunction = props[renderKey || ''];

  if (renderFunction === false) {
    return null;
  }

  var logoDom = SiderMenu_defaultRenderLogo(logo);
  var titleDom = /*#__PURE__*/react_default.a.createElement("h1", null, title);

  if (renderFunction) {
    // when collapsed, no render title
    return renderFunction(logoDom, props.collapsed ? null : titleDom, props);
  }

  if (layout === 'mix' && renderKey === 'menuHeaderRender') {
    return null;
  }

  return /*#__PURE__*/react_default.a.createElement("a", null, logoDom, props.collapsed ? null : titleDom);
};
var SiderMenu_defaultRenderCollapsedButton = function defaultRenderCollapsedButton(collapsed) {
  return collapsed ? /*#__PURE__*/react_default.a.createElement(icons_MenuUnfoldOutlined, null) : /*#__PURE__*/react_default.a.createElement(icons_MenuFoldOutlined, null);
};

var SiderMenu_SiderMenu = function SiderMenu(props) {
  var _classNames;

  var collapsed = props.collapsed,
      fixSiderbar = props.fixSiderbar,
      menuFooterRender = props.menuFooterRender,
      _onCollapse = props.onCollapse,
      theme = props.theme,
      siderWidth = props.siderWidth,
      isMobile = props.isMobile,
      onMenuHeaderClick = props.onMenuHeaderClick,
      _props$breakpoint = props.breakpoint,
      breakpoint = _props$breakpoint === void 0 ? 'lg' : _props$breakpoint,
      style = props.style,
      layout = props.layout,
      _props$menuExtraRende = props.menuExtraRender,
      menuExtraRender = _props$menuExtraRende === void 0 ? false : _props$menuExtraRende,
      _props$collapsedButto = props.collapsedButtonRender,
      collapsedButtonRender = _props$collapsedButto === void 0 ? SiderMenu_defaultRenderCollapsedButton : _props$collapsedButto,
      links = props.links,
      menuContentRender = props.menuContentRender,
      prefixCls = props.prefixCls,
      onOpenChange = props.onOpenChange,
      headerHeight = props.headerHeight,
      logoStyle = props.logoStyle;
  var baseClassName = "".concat(prefixCls, "-sider");

  var _MenuCounter$useConta = Counter.useContainer(),
      flatMenuKeys = _MenuCounter$useConta.flatMenuKeys;

  var siderClassName = classnames_default()("".concat(baseClassName), (_classNames = {}, SiderMenu_defineProperty(_classNames, "".concat(baseClassName, "-fixed"), fixSiderbar), SiderMenu_defineProperty(_classNames, "".concat(baseClassName, "-layout-").concat(layout), layout && !isMobile), SiderMenu_defineProperty(_classNames, "".concat(baseClassName, "-light"), theme === 'light'), _classNames));
  var headerDom = SiderMenu_defaultRenderLogoAndTitle(props);
  var extraDom = menuExtraRender && menuExtraRender(props);
  var menuDom = menuContentRender !== false && flatMenuKeys && /*#__PURE__*/react_default.a.createElement(SiderMenu_BaseMenu, SiderMenu_extends({}, props, {
    key: "base-menu",
    mode: "inline",
    handleOpenChange: onOpenChange,
    style: {
      width: '100%'
    },
    className: "".concat(baseClassName, "-menu")
  }));
  var menuRenderDom = menuContentRender ? menuContentRender(props, menuDom) : menuDom;
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, fixSiderbar && /*#__PURE__*/react_default.a.createElement("div", {
    style: SiderMenu_objectSpread({
      width: collapsed ? 48 : siderWidth,
      overflow: 'hidden',
      flex: "0 0 ".concat(collapsed ? 48 : siderWidth, "px"),
      maxWidth: collapsed ? 48 : siderWidth,
      minWidth: collapsed ? 48 : siderWidth,
      transition: "background-color 0.3s, min-width 0.3s, max-width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)"
    }, style)
  }), /*#__PURE__*/react_default.a.createElement(SiderMenu_Sider, {
    collapsible: true,
    trigger: null,
    collapsed: collapsed,
    breakpoint: breakpoint === false ? undefined : breakpoint,
    onCollapse: function onCollapse(collapse) {
      if (isMobile) return;
      _onCollapse === null || _onCollapse === void 0 ? void 0 : _onCollapse(collapse);
    },
    collapsedWidth: 48,
    style: SiderMenu_objectSpread({
      overflow: 'hidden',
      paddingTop: layout === 'mix' && !isMobile ? headerHeight : undefined
    }, style),
    width: siderWidth,
    theme: theme,
    className: siderClassName
  }, headerDom && /*#__PURE__*/react_default.a.createElement("div", {
    className: classnames_default()("".concat(baseClassName, "-logo"), SiderMenu_defineProperty({}, "".concat(baseClassName, "-collapsed"), collapsed)),
    onClick: layout !== 'mix' ? onMenuHeaderClick : undefined,
    id: "logo",
    style: logoStyle
  }, headerDom), extraDom && /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(baseClassName, "-extra ").concat(!headerDom && "".concat(baseClassName, "-extra-no-logo"))
  }, extraDom), /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      overflowX: 'hidden'
    }
  }, menuRenderDom), /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(baseClassName, "-links")
  }, /*#__PURE__*/react_default.a.createElement(es_menu["a" /* default */], {
    theme: theme,
    inlineIndent: 16,
    className: "".concat(baseClassName, "-link-menu"),
    selectedKeys: [],
    openKeys: [],
    mode: "inline"
  }, (links || []).map(function (node, index) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      react_default.a.createElement(es_menu["a" /* default */].Item, {
        className: "".concat(baseClassName, "-link"),
        key: index
      }, node)
    );
  }), collapsedButtonRender && !isMobile && /*#__PURE__*/react_default.a.createElement(es_menu["a" /* default */].Item, {
    className: "".concat(baseClassName, "-collapsed-button"),
    title: false,
    key: "collapsed",
    onClick: function onClick() {
      if (_onCollapse) {
        _onCollapse(!collapsed);
      }
    }
  }, collapsedButtonRender(collapsed)))), menuFooterRender && /*#__PURE__*/react_default.a.createElement("div", {
    className: classnames_default()("".concat(baseClassName, "-footer"), SiderMenu_defineProperty({}, "".concat(baseClassName, "-footer-collapsed"), !collapsed))
  }, menuFooterRender(props))));
};

/* harmony default export */ var components_SiderMenu_SiderMenu = (SiderMenu_SiderMenu);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("1OyB");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("vuIU");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__("Ji7U");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 1 modules
var createSuper = __webpack_require__("LK+K");

// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/findDOMNode.js
var findDOMNode = __webpack_require__("m+aA");

// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__("Zm9Q");

// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var es_warning = __webpack_require__("Kwbf");

// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__("c+Xe");

// EXTERNAL MODULE: ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
var ResizeObserver_es = __webpack_require__("bdgK");

// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/node_modules/rc-resize-observer/es/index.js











var INTERNAL_PREFIX_KEY = 'rc-observer-key'; // Still need to be compatible with React 15, we use class component here

var es_ReactResizeObserver = /*#__PURE__*/function (_React$Component) {
  Object(inherits["a" /* default */])(ReactResizeObserver, _React$Component);

  var _super = Object(createSuper["a" /* default */])(ReactResizeObserver);

  function ReactResizeObserver() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ReactResizeObserver);

    _this = _super.apply(this, arguments);
    _this.resizeObserver = null;
    _this.childNode = null;
    _this.currentElement = null;
    _this.state = {
      width: 0,
      height: 0,
      offsetHeight: 0,
      offsetWidth: 0
    };

    _this.onResize = function (entries) {
      var onResize = _this.props.onResize;
      var target = entries[0].target;

      var _target$getBoundingCl = target.getBoundingClientRect(),
          width = _target$getBoundingCl.width,
          height = _target$getBoundingCl.height;

      var offsetWidth = target.offsetWidth,
          offsetHeight = target.offsetHeight;
      /**
       * Resize observer trigger when content size changed.
       * In most case we just care about element size,
       * let's use \`boundary\` instead of \`contentRect\` here to avoid shaking.
       */

      var fixedWidth = Math.floor(width);
      var fixedHeight = Math.floor(height);

      if (_this.state.width !== fixedWidth || _this.state.height !== fixedHeight || _this.state.offsetWidth !== offsetWidth || _this.state.offsetHeight !== offsetHeight) {
        var size = {
          width: fixedWidth,
          height: fixedHeight,
          offsetWidth: offsetWidth,
          offsetHeight: offsetHeight
        };

        _this.setState(size);

        if (onResize) {
          // defer the callback but not defer to next frame
          Promise.resolve().then(function () {
            onResize(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, size), {}, {
              offsetWidth: offsetWidth,
              offsetHeight: offsetHeight
            }));
          });
        }
      }
    };

    _this.setChildNode = function (node) {
      _this.childNode = node;
    };

    return _this;
  }

  Object(createClass["a" /* default */])(ReactResizeObserver, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.onComponentUpdated();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.onComponentUpdated();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroyObserver();
    }
  }, {
    key: "onComponentUpdated",
    value: function onComponentUpdated() {
      var disabled = this.props.disabled; // Unregister if disabled

      if (disabled) {
        this.destroyObserver();
        return;
      } // Unregister if element changed


      var element = Object(findDOMNode["a" /* default */])(this.childNode || this);
      var elementChanged = element !== this.currentElement;

      if (elementChanged) {
        this.destroyObserver();
        this.currentElement = element;
      }

      if (!this.resizeObserver && element) {
        this.resizeObserver = new ResizeObserver_es["a" /* default */](this.onResize);
        this.resizeObserver.observe(element);
      }
    }
  }, {
    key: "destroyObserver",
    value: function destroyObserver() {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
        this.resizeObserver = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var childNodes = Object(toArray["a" /* default */])(children);

      if (childNodes.length > 1) {
        Object(es_warning["a" /* default */])(false, 'Find more than one child node with \`children\` in ResizeObserver. Will only observe first one.');
      } else if (childNodes.length === 0) {
        Object(es_warning["a" /* default */])(false, '\`children\` of ResizeObserver is empty. Nothing is in observe.');
        return null;
      }

      var childNode = childNodes[0];

      if (react["isValidElement"](childNode) && Object(es_ref["c" /* supportRef */])(childNode)) {
        var ref = childNode.ref;
        childNodes[0] = react["cloneElement"](childNode, {
          ref: Object(es_ref["a" /* composeRef */])(ref, this.setChildNode)
        });
      }

      return childNodes.length === 1 ? childNodes[0] : childNodes.map(function (node, index) {
        if (!react["isValidElement"](node) || 'key' in node && node.key !== null) {
          return node;
        }

        return react["cloneElement"](node, {
          key: "".concat(INTERNAL_PREFIX_KEY, "-").concat(index)
        });
      });
    }
  }]);

  return ReactResizeObserver;
}(react["Component"]);

es_ReactResizeObserver.displayName = 'ResizeObserver';
/* harmony default export */ var rc_resize_observer_es = (es_ReactResizeObserver);
// EXTERNAL MODULE: ./node_modules/@ant-design/pro-layout/es/components/TopNavHeader/index.less
var components_TopNavHeader = __webpack_require__("UPUD");

// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/TopNavHeader/index.js
var _excluded = ["rightContentRender"];

function TopNavHeader_extends() { TopNavHeader_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TopNavHeader_extends.apply(this, arguments); }

function TopNavHeader_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function TopNavHeader_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { TopNavHeader_ownKeys(Object(source), true).forEach(function (key) { TopNavHeader_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { TopNavHeader_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function TopNavHeader_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function TopNavHeader_slicedToArray(arr, i) { return TopNavHeader_arrayWithHoles(arr) || TopNavHeader_iterableToArrayLimit(arr, i) || TopNavHeader_unsupportedIterableToArray(arr, i) || TopNavHeader_nonIterableRest(); }

function TopNavHeader_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function TopNavHeader_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return TopNavHeader_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return TopNavHeader_arrayLikeToArray(o, minLen); }

function TopNavHeader_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function TopNavHeader_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function TopNavHeader_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







/**
 * \u62BD\u79BB\u51FA\u6765\u662F\u4E3A\u4E86\u9632\u6B62 rightSize \u7ECF\u5E38\u6539\u53D8\u5BFC\u81F4\u83DC\u5355 render
 *
 * @param param0
 */

var TopNavHeader_RightContent = function RightContent(_ref) {
  var rightContentRender = _ref.rightContentRender,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useState = Object(react["useState"])('auto'),
      _useState2 = TopNavHeader_slicedToArray(_useState, 2),
      rightSize = _useState2[0],
      setRightSize = _useState2[1];

  return /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      minWidth: rightSize
    }
  }, /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      paddingRight: 8
    }
  }, /*#__PURE__*/react_default.a.createElement(rc_resize_observer_es, {
    onResize: function onResize(_ref2) {
      var width = _ref2.width;
      setRightSize(width);
    }
  }, rightContentRender && /*#__PURE__*/react_default.a.createElement("div", null, rightContentRender(TopNavHeader_objectSpread({}, props))))));
};

var TopNavHeader_TopNavHeader = function TopNavHeader(props) {
  var ref = Object(react["useRef"])(null);
  var theme = props.theme,
      onMenuHeaderClick = props.onMenuHeaderClick,
      contentWidth = props.contentWidth,
      rightContentRender = props.rightContentRender,
      propsClassName = props.className,
      style = props.style,
      layout = props.layout;
  var prefixCls = "".concat(props.prefixCls || 'ant-pro', "-top-nav-header");
  var headerDom = SiderMenu_defaultRenderLogoAndTitle(TopNavHeader_objectSpread(TopNavHeader_objectSpread({}, props), {}, {
    collapsed: false
  }), layout === 'mix' ? 'headerTitleRender' : undefined);
  var className = classnames_default()(prefixCls, propsClassName, {
    light: theme === 'light'
  });
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: className,
    style: style
  }, /*#__PURE__*/react_default.a.createElement("div", {
    ref: ref,
    className: "".concat(prefixCls, "-main ").concat(contentWidth === 'Fixed' ? 'wide' : '')
  }, headerDom && /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(prefixCls, "-main-left"),
    onClick: onMenuHeaderClick
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(prefixCls, "-logo"),
    key: "logo",
    id: "logo"
  }, headerDom)), /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      flex: 1
    },
    className: "".concat(prefixCls, "-menu")
  }, /*#__PURE__*/react_default.a.createElement(SiderMenu_BaseMenu, TopNavHeader_extends({}, props, props.menuProps))), rightContentRender && /*#__PURE__*/react_default.a.createElement(TopNavHeader_RightContent, TopNavHeader_extends({
    rightContentRender: rightContentRender
  }, props))));
};

/* harmony default export */ var es_components_TopNavHeader = (TopNavHeader_TopNavHeader);
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/GlobalHeader/index.js
function GlobalHeader_extends() { GlobalHeader_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return GlobalHeader_extends.apply(this, arguments); }

function GlobalHeader_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function GlobalHeader_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { GlobalHeader_ownKeys(Object(source), true).forEach(function (key) { GlobalHeader_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { GlobalHeader_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function GlobalHeader_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var renderLogo = function renderLogo(menuHeaderRender, logoDom) {
  if (menuHeaderRender === false) {
    return null;
  }

  if (menuHeaderRender) {
    return menuHeaderRender(logoDom, null);
  }

  return logoDom;
};

var GlobalHeader_GlobalHeader = function GlobalHeader(props) {
  var isMobile = props.isMobile,
      logo = props.logo,
      collapsed = props.collapsed,
      onCollapse = props.onCollapse,
      _props$collapsedButto = props.collapsedButtonRender,
      collapsedButtonRender = _props$collapsedButto === void 0 ? SiderMenu_defaultRenderCollapsedButton : _props$collapsedButto,
      rightContentRender = props.rightContentRender,
      menuHeaderRender = props.menuHeaderRender,
      onMenuHeaderClick = props.onMenuHeaderClick,
      propClassName = props.className,
      style = props.style,
      layout = props.layout,
      children = props.children,
      _props$headerTheme = props.headerTheme,
      headerTheme = _props$headerTheme === void 0 ? 'dark' : _props$headerTheme,
      splitMenus = props.splitMenus,
      menuData = props.menuData,
      prefixCls = props.prefixCls;
  var baseClassName = "".concat(prefixCls, "-global-header");
  var className = classnames_default()(propClassName, baseClassName, GlobalHeader_defineProperty({}, "".concat(baseClassName, "-layout-").concat(layout), layout && headerTheme === 'dark'));

  if (layout === 'mix' && !isMobile && splitMenus) {
    var noChildrenMenuData = (menuData || []).map(function (item) {
      return GlobalHeader_objectSpread(GlobalHeader_objectSpread({}, item), {}, {
        children: undefined
      });
    });
    var clearMenuData = clearMenuItem(noChildrenMenuData);
    return /*#__PURE__*/react_default.a.createElement(es_components_TopNavHeader, GlobalHeader_extends({
      mode: "horizontal"
    }, props, {
      splitMenus: false,
      menuData: clearMenuData,
      theme: headerTheme
    }));
  }

  var logoDom = /*#__PURE__*/react_default.a.createElement("span", {
    className: "".concat(baseClassName, "-logo"),
    key: "logo"
  }, /*#__PURE__*/react_default.a.createElement("a", null, SiderMenu_defaultRenderLogo(logo)));
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: className,
    style: GlobalHeader_objectSpread({}, style)
  }, isMobile && renderLogo(menuHeaderRender, logoDom), isMobile && collapsedButtonRender && /*#__PURE__*/react_default.a.createElement("span", {
    className: "".concat(baseClassName, "-collapsed-button"),
    onClick: function onClick() {
      if (onCollapse) {
        onCollapse(!collapsed);
      }
    }
  }, collapsedButtonRender(collapsed)), layout === 'mix' && !isMobile && /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(baseClassName, "-logo"),
    onClick: onMenuHeaderClick
  }, SiderMenu_defaultRenderLogoAndTitle(GlobalHeader_objectSpread(GlobalHeader_objectSpread({}, props), {}, {
    collapsed: false
  }), 'headerTitleRender'))), /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      flex: 1
    }
  }, children), rightContentRender && rightContentRender(props));
};

/* harmony default export */ var es_components_GlobalHeader = (GlobalHeader_GlobalHeader);
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/Header.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




function Header_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Header_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Header_ownKeys(Object(source), true).forEach(function (key) { Header_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Header_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Header_extends() { Header_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Header_extends.apply(this, arguments); }

function Header_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var Header_Header = es_layout.Header;

var Header_HeaderView = /*#__PURE__*/function (_Component) {
  _inherits(HeaderView, _Component);

  var _super = _createSuper(HeaderView);

  function HeaderView() {
    var _this;

    Header_classCallCheck(this, HeaderView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.renderContent = function () {
      var _this$props = _this.props,
          isMobile = _this$props.isMobile,
          onCollapse = _this$props.onCollapse,
          navTheme = _this$props.navTheme,
          layout = _this$props.layout,
          headerRender = _this$props.headerRender,
          headerContentRender = _this$props.headerContentRender;
      var isTop = layout === 'top';
      var clearMenuData = clearMenuItem(_this.props.menuData || []);
      var defaultDom = /*#__PURE__*/react_default.a.createElement(es_components_GlobalHeader, Header_extends({
        onCollapse: onCollapse
      }, _this.props, {
        menuData: clearMenuData
      }), headerContentRender && headerContentRender(_this.props));

      if (isTop && !isMobile) {
        defaultDom = /*#__PURE__*/react_default.a.createElement(es_components_TopNavHeader, Header_extends({
          theme: navTheme,
          mode: "horizontal",
          onCollapse: onCollapse
        }, _this.props, {
          menuData: clearMenuData
        }));
      }

      if (headerRender && typeof headerRender === 'function') {
        return headerRender(_this.props, defaultDom);
      }

      return defaultDom;
    };

    return _this;
  }

  _createClass(HeaderView, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props2 = this.props,
          fixedHeader = _this$props2.fixedHeader,
          layout = _this$props2.layout,
          propsClassName = _this$props2.className,
          style = _this$props2.style,
          navTheme = _this$props2.navTheme,
          collapsed = _this$props2.collapsed,
          siderWidth = _this$props2.siderWidth,
          hasSiderMenu = _this$props2.hasSiderMenu,
          isMobile = _this$props2.isMobile,
          prefixCls = _this$props2.prefixCls,
          headerHeight = _this$props2.headerHeight;
      var needFixedHeader = fixedHeader || layout === 'mix';
      var isTop = layout === 'top';
      var needSettingWidth = needFixedHeader && hasSiderMenu && !isTop && !isMobile;
      var className = classnames_default()(propsClassName, (_classNames = {}, Header_defineProperty(_classNames, "".concat(prefixCls, "-fixed-header"), needFixedHeader), Header_defineProperty(_classNames, "".concat(prefixCls, "-fixed-header-action"), !collapsed), Header_defineProperty(_classNames, "".concat(prefixCls, "-top-menu"), isTop), Header_defineProperty(_classNames, "".concat(prefixCls, "-header-").concat(navTheme), navTheme && layout !== 'mix'), _classNames));
      /** \u8BA1\u7B97\u4FA7\u8FB9\u680F\u7684\u5BBD\u5EA6\uFF0C\u4E0D\u7136\u5BFC\u81F4\u5DE6\u8FB9\u7684\u6837\u5F0F\u4F1A\u51FA\u95EE\u9898 */

      var width = layout !== 'mix' && needSettingWidth ? "calc(100% - ".concat(collapsed ? 48 : siderWidth, "px)") : '100%';
      var right = needFixedHeader ? 0 : undefined;
      return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, needFixedHeader && /*#__PURE__*/react_default.a.createElement(Header_Header, {
        style: {
          height: headerHeight,
          lineHeight: "".concat(headerHeight, "px"),
          background: 'transparent'
        }
      }), /*#__PURE__*/react_default.a.createElement(Header_Header, {
        style: Header_objectSpread({
          padding: 0,
          height: headerHeight,
          lineHeight: "".concat(headerHeight, "px"),
          width: width,
          zIndex: layout === 'mix' ? 100 : 19,
          right: right
        }, style),
        className: className
      }, this.renderContent()));
    }
  }]);

  return HeaderView;
}(react["Component"]);

/* harmony default export */ var es_Header = (Header_HeaderView);
// EXTERNAL MODULE: ./node_modules/@ant-design/pro-layout/node_modules/path-to-regexp/index.js
var path_to_regexp = __webpack_require__("jfsG");
var path_to_regexp_default = /*#__PURE__*/__webpack_require__.n(path_to_regexp);

// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/getPageTitle.js
function getPageTitle_toConsumableArray(arr) { return getPageTitle_arrayWithoutHoles(arr) || getPageTitle_iterableToArray(arr) || getPageTitle_unsupportedIterableToArray(arr) || getPageTitle_nonIterableSpread(); }

function getPageTitle_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function getPageTitle_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return getPageTitle_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return getPageTitle_arrayLikeToArray(o, minLen); }

function getPageTitle_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function getPageTitle_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return getPageTitle_arrayLikeToArray(arr); }

function getPageTitle_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var getPageTitle_matchParamsPath = function matchParamsPath(pathname, breadcrumb, breadcrumbMap) {
  // Internal logic use breadcrumbMap to ensure the order
  // \u5185\u90E8\u903B\u8F91\u4F7F\u7528 breadcrumbMap \u6765\u786E\u4FDD\u67E5\u8BE2\u987A\u5E8F
  if (breadcrumbMap) {
    var pathKey = getPageTitle_toConsumableArray(breadcrumbMap.keys()).find(function (key) {
      return path_to_regexp_default()(key).test(pathname);
    });

    if (pathKey) {
      return breadcrumbMap.get(pathKey);
    }
  } // External uses use breadcrumb
  // \u5916\u90E8\u7528\u6237\u4F7F\u7528 breadcrumb \u53C2\u6570


  if (breadcrumb) {
    var _pathKey = Object.keys(breadcrumb).find(function (key) {
      return path_to_regexp_default()(key).test(pathname);
    });

    if (_pathKey) {
      return breadcrumb[_pathKey];
    }
  }

  return {
    path: ''
  };
};
/**
 * \u83B7\u53D6\u5173\u4E8E pageTitle \u7684\u6240\u6709\u4FE1\u606F\u65B9\u4FBF\u5305\u88C5
 *
 * @param props
 * @param ignoreTitle
 */

var getPageTitleInfo = function getPageTitleInfo(props, ignoreTitle) {
  var _props$pathname = props.pathname,
      pathname = _props$pathname === void 0 ? '/' : _props$pathname,
      breadcrumb = props.breadcrumb,
      breadcrumbMap = props.breadcrumbMap,
      formatMessage = props.formatMessage,
      _props$title = props.title,
      title = _props$title === void 0 ? 'Ant Design Pro' : _props$title,
      _props$menu = props.menu,
      menu = _props$menu === void 0 ? {
    locale: false
  } : _props$menu;
  var pageTitle = ignoreTitle ? '' : title || '';
  var currRouterData = getPageTitle_matchParamsPath(pathname, breadcrumb, breadcrumbMap);

  if (!currRouterData) {
    return {
      title: pageTitle,
      id: '',
      pageName: pageTitle
    };
  }

  var pageName = currRouterData.name;

  if (menu.locale !== false && currRouterData.locale && formatMessage) {
    pageName = formatMessage({
      id: currRouterData.locale || '',
      defaultMessage: currRouterData.name
    });
  }

  if (!pageName) {
    return {
      title: pageTitle,
      id: currRouterData.locale || '',
      pageName: pageTitle
    };
  }

  if (ignoreTitle || !title) {
    return {
      title: pageName,
      id: currRouterData.locale || '',
      pageName: pageName
    };
  }

  return {
    title: "".concat(pageName, " - ").concat(title),
    id: currRouterData.locale || '',
    pageName: pageName
  };
};



var getPageTitle = function getPageTitle(props, ignoreTitle) {
  return getPageTitleInfo(props, ignoreTitle).title;
};

/* harmony default export */ var es_getPageTitle = (getPageTitle);
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/locales/zh-CN/settingDrawer.js
/* harmony default export */ var settingDrawer = ({
  'app.setting.pagestyle': '\u6574\u4F53\u98CE\u683C\u8BBE\u7F6E',
  'app.setting.pagestyle.dark': '\u6697\u8272\u83DC\u5355\u98CE\u683C',
  'app.setting.pagestyle.light': '\u4EAE\u8272\u83DC\u5355\u98CE\u683C',
  'app.setting.content-width': '\u5185\u5BB9\u533A\u57DF\u5BBD\u5EA6',
  'app.setting.content-width.fixed': '\u5B9A\u5BBD',
  'app.setting.content-width.fluid': '\u6D41\u5F0F',
  'app.setting.themecolor': '\u4E3B\u9898\u8272',
  'app.setting.themecolor.dust': '\u8584\u66AE',
  'app.setting.themecolor.volcano': '\u706B\u5C71',
  'app.setting.themecolor.sunset': '\u65E5\u66AE',
  'app.setting.themecolor.cyan': '\u660E\u9752',
  'app.setting.themecolor.green': '\u6781\u5149\u7EFF',
  'app.setting.themecolor.daybreak': '\u62C2\u6653\u84DD\uFF08\u9ED8\u8BA4\uFF09',
  'app.setting.themecolor.geekblue': '\u6781\u5BA2\u84DD',
  'app.setting.themecolor.purple': '\u9171\u7D2B',
  'app.setting.navigationmode': '\u5BFC\u822A\u6A21\u5F0F',
  'app.setting.regionalsettings': '\u5185\u5BB9\u533A\u57DF',
  'app.setting.regionalsettings.header': '\u9876\u680F',
  'app.setting.regionalsettings.menu': '\u83DC\u5355',
  'app.setting.regionalsettings.footer': '\u9875\u811A',
  'app.setting.regionalsettings.menuHeader': '\u83DC\u5355\u5934',
  'app.setting.sidemenu': '\u4FA7\u8FB9\u83DC\u5355\u5E03\u5C40',
  'app.setting.topmenu': '\u9876\u90E8\u83DC\u5355\u5E03\u5C40',
  'app.setting.mixmenu': '\u6DF7\u5408\u83DC\u5355\u5E03\u5C40',
  'app.setting.splitMenus': '\u81EA\u52A8\u5206\u5272\u83DC\u5355',
  'app.setting.fixedheader': '\u56FA\u5B9A Header',
  'app.setting.fixedsidebar': '\u56FA\u5B9A\u4FA7\u8FB9\u83DC\u5355',
  'app.setting.fixedsidebar.hint': '\u4FA7\u8FB9\u83DC\u5355\u5E03\u5C40\u65F6\u53EF\u914D\u7F6E',
  'app.setting.hideheader': '\u4E0B\u6ED1\u65F6\u9690\u85CF Header',
  'app.setting.hideheader.hint': '\u56FA\u5B9A Header \u65F6\u53EF\u914D\u7F6E',
  'app.setting.othersettings': '\u5176\u4ED6\u8BBE\u7F6E',
  'app.setting.weakmode': '\u8272\u5F31\u6A21\u5F0F',
  'app.setting.copy': '\u62F7\u8D1D\u8BBE\u7F6E',
  'app.setting.loading': '\u6B63\u5728\u52A0\u8F7D\u4E3B\u9898',
  'app.setting.copyinfo': '\u62F7\u8D1D\u6210\u529F\uFF0C\u8BF7\u5230 src/defaultSettings.js \u4E2D\u66FF\u6362\u9ED8\u8BA4\u914D\u7F6E',
  'app.setting.production.hint': '\u914D\u7F6E\u680F\u53EA\u5728\u5F00\u53D1\u73AF\u5883\u7528\u4E8E\u9884\u89C8\uFF0C\u751F\u4EA7\u73AF\u5883\u4E0D\u4F1A\u5C55\u73B0\uFF0C\u8BF7\u62F7\u8D1D\u540E\u624B\u52A8\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6'
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/locales/zh-CN.js
function zh_CN_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function zh_CN_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { zh_CN_ownKeys(Object(source), true).forEach(function (key) { zh_CN_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { zh_CN_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function zh_CN_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var zh_CN = (zh_CN_objectSpread({}, settingDrawer));
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/locales/zh-TW/settingDrawer.js
/* harmony default export */ var zh_TW_settingDrawer = ({
  'app.setting.pagestyle': '\u6574\u9AD4\u98A8\u683C\u8A2D\u7F6E',
  'app.setting.pagestyle.dark': '\u6697\u8272\u83DC\u55AE\u98A8\u683C',
  'app.setting.pagestyle.light': '\u4EAE\u8272\u83DC\u55AE\u98A8\u683C',
  'app.setting.content-width': '\u5167\u5BB9\u5340\u57DF\u5BEC\u5EA6',
  'app.setting.content-width.fixed': '\u5B9A\u5BEC',
  'app.setting.content-width.fluid': '\u6D41\u5F0F',
  'app.setting.themecolor': '\u4E3B\u984C\u8272',
  'app.setting.themecolor.dust': '\u8584\u66AE',
  'app.setting.themecolor.volcano': '\u706B\u5C71',
  'app.setting.themecolor.sunset': '\u65E5\u66AE',
  'app.setting.themecolor.cyan': '\u660E\u9752',
  'app.setting.themecolor.green': '\u6975\u5149\u7DA0',
  'app.setting.themecolor.daybreak': '\u62C2\u66C9\u85CD\uFF08\u9ED8\u8A8D\uFF09',
  'app.setting.themecolor.geekblue': '\u6975\u5BA2\u85CD',
  'app.setting.themecolor.purple': '\u91AC\u7D2B',
  'app.setting.navigationmode': '\u5C0E\u822A\u6A21\u5F0F',
  'app.setting.sidemenu': '\u5074\u908A\u83DC\u55AE\u5E03\u5C40',
  'app.setting.topmenu': '\u9802\u90E8\u83DC\u55AE\u5E03\u5C40',
  'app.setting.mixmenu': '\u6DF7\u5408\u83DC\u55AE\u5E03\u5C40',
  'app.setting.splitMenus': '\u81EA\u52A8\u5206\u5272\u83DC\u5355',
  'app.setting.fixedheader': '\u56FA\u5B9A Header',
  'app.setting.fixedsidebar': '\u56FA\u5B9A\u5074\u908A\u83DC\u55AE',
  'app.setting.fixedsidebar.hint': '\u5074\u908A\u83DC\u55AE\u5E03\u5C40\u6642\u53EF\u914D\u7F6E',
  'app.setting.hideheader': '\u4E0B\u6ED1\u6642\u96B1\u85CF Header',
  'app.setting.hideheader.hint': '\u56FA\u5B9A Header \u6642\u53EF\u914D\u7F6E',
  'app.setting.othersettings': '\u5176\u4ED6\u8A2D\u7F6E',
  'app.setting.weakmode': '\u8272\u5F31\u6A21\u5F0F',
  'app.setting.copy': '\u62F7\u8C9D\u8A2D\u7F6E',
  'app.setting.loading': '\u6B63\u5728\u52A0\u8F09\u4E3B\u984C',
  'app.setting.copyinfo': '\u62F7\u8C9D\u6210\u529F\uFF0C\u8ACB\u5230 src/defaultSettings.js \u4E2D\u66FF\u63DB\u9ED8\u8A8D\u914D\u7F6E',
  'app.setting.production.hint': '\u914D\u7F6E\u6B04\u53EA\u5728\u958B\u767C\u74B0\u5883\u7528\u65BC\u9810\u89BD\uFF0C\u751F\u7522\u74B0\u5883\u4E0D\u6703\u5C55\u73FE\uFF0C\u8ACB\u62F7\u8C9D\u5F8C\u624B\u52D5\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6'
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/locales/zh-TW.js
function zh_TW_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function zh_TW_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { zh_TW_ownKeys(Object(source), true).forEach(function (key) { zh_TW_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { zh_TW_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function zh_TW_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var zh_TW = (zh_TW_objectSpread({}, zh_TW_settingDrawer));
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/locales/en-US/settingDrawer.js
/* harmony default export */ var en_US_settingDrawer = ({
  'app.setting.pagestyle': 'Page style setting',
  'app.setting.pagestyle.dark': 'Dark style',
  'app.setting.pagestyle.light': 'Light style',
  'app.setting.content-width': 'Content Width',
  'app.setting.content-width.fixed': 'Fixed',
  'app.setting.content-width.fluid': 'Fluid',
  'app.setting.themecolor': 'Theme Color',
  'app.setting.themecolor.dust': 'Dust Red',
  'app.setting.themecolor.volcano': 'Volcano',
  'app.setting.themecolor.sunset': 'Sunset Orange',
  'app.setting.themecolor.cyan': 'Cyan',
  'app.setting.themecolor.green': 'Polar Green',
  'app.setting.themecolor.daybreak': 'Daybreak Blue (default)',
  'app.setting.themecolor.geekblue': 'Geek Blue',
  'app.setting.themecolor.purple': 'Golden Purple',
  'app.setting.navigationmode': 'Navigation Mode',
  'app.setting.regionalsettings': 'Regional Settings',
  'app.setting.regionalsettings.header': 'Header',
  'app.setting.regionalsettings.menu': 'Menu',
  'app.setting.regionalsettings.footer': 'Footer',
  'app.setting.regionalsettings.menuHeader': 'Menu Header',
  'app.setting.sidemenu': 'Side Menu Layout',
  'app.setting.topmenu': 'Top Menu Layout',
  'app.setting.mixmenu': 'Mix Menu Layout',
  'app.setting.splitMenus': 'Split Menus',
  'app.setting.fixedheader': 'Fixed Header',
  'app.setting.fixedsidebar': 'Fixed Sidebar',
  'app.setting.fixedsidebar.hint': 'Works on Side Menu Layout',
  'app.setting.hideheader': 'Hidden Header when scrolling',
  'app.setting.hideheader.hint': 'Works when Hidden Header is enabled',
  'app.setting.othersettings': 'Other Settings',
  'app.setting.weakmode': 'Weak Mode',
  'app.setting.copy': 'Copy Setting',
  'app.setting.loading': 'Loading theme',
  'app.setting.copyinfo': 'copy success\uFF0Cplease replace defaultSettings in src/models/setting.js',
  'app.setting.production.hint': 'Setting panel shows in development environment only, please manually modify'
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/locales/en-US.js
function en_US_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function en_US_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { en_US_ownKeys(Object(source), true).forEach(function (key) { en_US_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { en_US_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function en_US_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var en_US = (en_US_objectSpread({}, en_US_settingDrawer));
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/locales/it-IT/settingDrawer.js
/* harmony default export */ var it_IT_settingDrawer = ({
  'app.setting.pagestyle': 'Impostazioni di stile',
  'app.setting.pagestyle.dark': 'Tema scuro',
  'app.setting.pagestyle.light': 'Tema chiaro',
  'app.setting.content-width': 'Largezza contenuto',
  'app.setting.content-width.fixed': 'Fissa',
  'app.setting.content-width.fluid': 'Fluida',
  'app.setting.themecolor': 'Colore del tema',
  'app.setting.themecolor.dust': 'Rosso polvere',
  'app.setting.themecolor.volcano': 'Vulcano',
  'app.setting.themecolor.sunset': 'Arancione tramonto',
  'app.setting.themecolor.cyan': 'Ciano',
  'app.setting.themecolor.green': 'Verde polare',
  'app.setting.themecolor.daybreak': 'Blu cielo mattutino (default)',
  'app.setting.themecolor.geekblue': 'Blu geek',
  'app.setting.themecolor.purple': 'Viola dorato',
  'app.setting.navigationmode': 'Modalit\xE0 di navigazione',
  'app.setting.sidemenu': 'Menu laterale',
  'app.setting.topmenu': 'Menu in testata',
  'app.setting.mixmenu': 'Menu misto',
  'app.setting.splitMenus': 'Menu divisi',
  'app.setting.fixedheader': 'Testata fissa',
  'app.setting.fixedsidebar': 'Menu laterale fisso',
  'app.setting.fixedsidebar.hint': 'Solo se selezionato Menu laterale',
  'app.setting.hideheader': 'Nascondi testata durante lo scorrimento',
  'app.setting.hideheader.hint': 'Solo se abilitato Nascondi testata durante lo scorrimento',
  'app.setting.othersettings': 'Altre impostazioni',
  'app.setting.weakmode': 'Inverti colori',
  'app.setting.copy': 'Copia impostazioni',
  'app.setting.loading': 'Carico tema...',
  'app.setting.copyinfo': 'Impostazioni copiate con successo! Incolla il contenuto in config/defaultSettings.js',
  'app.setting.production.hint': 'Questo pannello \xE8 visibile solo durante lo sviluppo. Le impostazioni devono poi essere modificate manulamente'
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/locales/it-IT.js
function it_IT_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function it_IT_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { it_IT_ownKeys(Object(source), true).forEach(function (key) { it_IT_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { it_IT_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function it_IT_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var it_IT = (it_IT_objectSpread({}, it_IT_settingDrawer));
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/locales/index.js





var locales_locales = {
  'zh-CN': zh_CN,
  'zh-TW': zh_TW,
  'en-US': en_US,
  'it-IT': it_IT
};

var locales_getLanguage = function getLanguage() {
  // support ssr
  if (!Object(isBrowser["a" /* default */])()) return 'zh-CN';
  var lang = window.localStorage.getItem('umi_locale');
  return lang || window.g_locale || navigator.language;
};


/* harmony default export */ var es_locales = (function () {
  var gLocale = locales_getLanguage();

  if (locales_locales[gLocale]) {
    return locales_locales[gLocale];
  }

  return locales_locales['zh-CN'];
});
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/GithubOutlined.js + 1 modules
var GithubOutlined = __webpack_require__("oN5p");

// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/CopyrightOutlined.js
// This icon file is generated automatically.
var CopyrightOutlined_CopyrightOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z" } }] }, "name": "copyright", "theme": "outlined" };
/* harmony default export */ var asn_CopyrightOutlined = (CopyrightOutlined_CopyrightOutlined);

// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/CopyrightOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_CopyrightOutlined_CopyrightOutlined = function CopyrightOutlined(props, ref) {
  return /*#__PURE__*/react["createElement"](AntdIcon["a" /* default */], Object.assign({}, props, {
    ref: ref,
    icon: asn_CopyrightOutlined
  }));
};

icons_CopyrightOutlined_CopyrightOutlined.displayName = 'CopyrightOutlined';
/* harmony default export */ var icons_CopyrightOutlined = (/*#__PURE__*/react["forwardRef"](icons_CopyrightOutlined_CopyrightOutlined));
// EXTERNAL MODULE: ./node_modules/@ant-design/pro-layout/es/components/GlobalFooter/index.less
var GlobalFooter = __webpack_require__("DPCm");

// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/GlobalFooter/index.js





/* harmony default export */ var components_GlobalFooter = (function (_ref) {
  var className = _ref.className,
      prefixCls = _ref.prefixCls,
      links = _ref.links,
      copyright = _ref.copyright,
      style = _ref.style;
  var context = Object(react["useContext"])(config_provider["a" /* default */].ConfigContext);
  var baseClassName = context.getPrefixCls(prefixCls || 'pro-global-footer');

  if ((links == null || links === false || Array.isArray(links) && links.length === 0) && (copyright == null || copyright === false)) {
    return null;
  }

  var clsString = classnames_default()(baseClassName, className);
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: clsString,
    style: style
  }, links && /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(baseClassName, "-links")
  }, links.map(function (link) {
    return /*#__PURE__*/react_default.a.createElement("a", {
      key: link.key,
      title: link.key,
      target: link.blankTarget ? '_blank' : '_self',
      href: link.href
    }, link.title);
  })), copyright && /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(baseClassName, "-copyright")
  }, copyright));
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/Footer.js



function Footer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Footer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Footer_ownKeys(Object(source), true).forEach(function (key) { Footer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Footer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Footer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Footer = es_layout.Footer;
var defaultLinks = [{
  key: 'Ant Design Pro',
  title: 'Ant Design Pro',
  href: 'https://pro.ant.design',
  blankTarget: true
}, {
  key: 'github',
  title: /*#__PURE__*/react_default.a.createElement(GithubOutlined["a" /* default */], null),
  href: 'https://github.com/ant-design/ant-design-pro',
  blankTarget: true
}, {
  key: 'Ant Design',
  title: 'Ant Design',
  href: 'https://ant.design',
  blankTarget: true
}];
var defaultCopyright = '2019 \u8682\u8681\u91D1\u670D\u4F53\u9A8C\u6280\u672F\u90E8\u51FA\u54C1';

var Footer_FooterView = function FooterView(_ref) {
  var links = _ref.links,
      copyright = _ref.copyright,
      style = _ref.style,
      className = _ref.className,
      prefixCls = _ref.prefixCls;
  return /*#__PURE__*/react_default.a.createElement(Footer, {
    className: className,
    style: Footer_objectSpread({
      padding: 0
    }, style)
  }, /*#__PURE__*/react_default.a.createElement(components_GlobalFooter, {
    links: links !== undefined ? links : defaultLinks,
    prefixCls: prefixCls,
    copyright: copyright === false ? null : /*#__PURE__*/react_default.a.createElement(react["Fragment"], null, /*#__PURE__*/react_default.a.createElement(icons_CopyrightOutlined, null), " ", copyright || defaultCopyright)
  }));
};

/* harmony default export */ var es_Footer = (Footer_FooterView);
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/RouteContext.js

var routeContext = /*#__PURE__*/Object(react["createContext"])({});
/* harmony default export */ var RouteContext = (routeContext);
// EXTERNAL MODULE: ./node_modules/antd/es/drawer/style/index.less
var drawer_style = __webpack_require__("CWI+");

// CONCATENATED MODULE: ./node_modules/antd/es/drawer/style/index.js
// deps-lint-skip: empty


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("ODXe");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("md7G");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("foSv");

// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__("wgJM");

// EXTERNAL MODULE: ./node_modules/rc-util/es/Portal.js
var Portal = __webpack_require__("QC+M");

// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__("MNnm");

// EXTERNAL MODULE: ./node_modules/rc-util/es/getScrollBarSize.js
var getScrollBarSize = __webpack_require__("qx4F");

// CONCATENATED MODULE: ./node_modules/rc-util/es/setStyle.js
/**
 * Easy to set element style, return previous style
 * IE browser compatible(IE browser doesn't merge overflow style, need to set it separately)
 * https://github.com/ant-design/ant-design/issues/19393
 *
 */
function setStyle(style) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!style) {
    return {};
  }

  var _options$element = options.element,
      element = _options$element === void 0 ? document.body : _options$element;
  var oldStyle = {};
  var styleKeys = Object.keys(style); // IE browser compatible

  styleKeys.forEach(function (key) {
    oldStyle[key] = element.style[key];
  });
  styleKeys.forEach(function (key) {
    element.style[key] = style[key];
  });
  return oldStyle;
}

/* harmony default export */ var es_setStyle = (setStyle);
// CONCATENATED MODULE: ./node_modules/rc-util/es/switchScrollingEffect.js



function isBodyOverflowing() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}

var cacheStyle = {};
/* harmony default export */ var switchScrollingEffect = (function (close) {
  if (!isBodyOverflowing() && !close) {
    return;
  } // https://github.com/ant-design/ant-design/issues/19729


  var scrollingEffectClassName = 'ant-scrolling-effect';
  var scrollingEffectClassNameReg = new RegExp("".concat(scrollingEffectClassName), 'g');
  var bodyClassName = document.body.className;

  if (close) {
    if (!scrollingEffectClassNameReg.test(bodyClassName)) return;
    es_setStyle(cacheStyle);
    cacheStyle = {};
    document.body.className = bodyClassName.replace(scrollingEffectClassNameReg, '').trim();
    return;
  }

  var scrollBarSize = Object(getScrollBarSize["a" /* default */])();

  if (scrollBarSize) {
    cacheStyle = es_setStyle({
      position: 'relative',
      width: "calc(100% - ".concat(scrollBarSize, "px)")
    });

    if (!scrollingEffectClassNameReg.test(bodyClassName)) {
      var addClassName = "".concat(bodyClassName, " ").concat(scrollingEffectClassName);
      document.body.className = addClassName.trim();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/rc-util/es/Dom/scrollLocker.js




var locks = [];
var scrollLocker_scrollingEffectClassName = 'ant-scrolling-effect';
var scrollLocker_scrollingEffectClassNameReg = new RegExp("".concat(scrollLocker_scrollingEffectClassName), 'g');
var uuid = 0; // https://github.com/ant-design/ant-design/issues/19340
// https://github.com/ant-design/ant-design/issues/19332

var scrollLocker_cacheStyle = new Map();

var scrollLocker_ScrollLocker = function ScrollLocker(options) {
  var _this = this;

  Object(classCallCheck["a" /* default */])(this, ScrollLocker);

  this.getContainer = function () {
    var _this$options;

    return (_this$options = _this.options) === null || _this$options === void 0 ? void 0 : _this$options.container;
  }; // if options change...


  this.reLock = function (options) {
    var findLock = locks.find(function (_ref) {
      var target = _ref.target;
      return target === _this.lockTarget;
    });

    if (findLock) {
      _this.unLock();
    }

    _this.options = options;

    if (findLock) {
      findLock.options = options;

      _this.lock();
    }
  };

  this.lock = function () {
    var _this$options3;

    // If lockTarget exist return
    if (locks.some(function (_ref2) {
      var target = _ref2.target;
      return target === _this.lockTarget;
    })) {
      return;
    } // If same container effect, return


    if (locks.some(function (_ref3) {
      var _this$options2;

      var options = _ref3.options;
      return (options === null || options === void 0 ? void 0 : options.container) === ((_this$options2 = _this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.container);
    })) {
      locks = [].concat(Object(toConsumableArray["a" /* default */])(locks), [{
        target: _this.lockTarget,
        options: _this.options
      }]);
      return;
    }

    var scrollBarSize = 0;
    var container = ((_this$options3 = _this.options) === null || _this$options3 === void 0 ? void 0 : _this$options3.container) || document.body;

    if (container === document.body && window.innerWidth - document.documentElement.clientWidth > 0 || container.scrollHeight > container.clientHeight) {
      scrollBarSize = Object(getScrollBarSize["a" /* default */])();
    }

    var containerClassName = container.className;

    if (locks.filter(function (_ref4) {
      var _this$options4;

      var options = _ref4.options;
      return (options === null || options === void 0 ? void 0 : options.container) === ((_this$options4 = _this.options) === null || _this$options4 === void 0 ? void 0 : _this$options4.container);
    }).length === 0) {
      scrollLocker_cacheStyle.set(container, es_setStyle({
        width: "calc(100% - ".concat(scrollBarSize, "px)"),
        overflow: 'hidden',
        overflowX: 'hidden',
        overflowY: 'hidden'
      }, {
        element: container
      }));
    } // https://github.com/ant-design/ant-design/issues/19729


    if (!scrollLocker_scrollingEffectClassNameReg.test(containerClassName)) {
      var addClassName = "".concat(containerClassName, " ").concat(scrollLocker_scrollingEffectClassName);
      container.className = addClassName.trim();
    }

    locks = [].concat(Object(toConsumableArray["a" /* default */])(locks), [{
      target: _this.lockTarget,
      options: _this.options
    }]);
  };

  this.unLock = function () {
    var _this$options5;

    var findLock = locks.find(function (_ref5) {
      var target = _ref5.target;
      return target === _this.lockTarget;
    });
    locks = locks.filter(function (_ref6) {
      var target = _ref6.target;
      return target !== _this.lockTarget;
    });

    if (!findLock || locks.some(function (_ref7) {
      var _findLock$options;

      var options = _ref7.options;
      return (options === null || options === void 0 ? void 0 : options.container) === ((_findLock$options = findLock.options) === null || _findLock$options === void 0 ? void 0 : _findLock$options.container);
    })) {
      return;
    } // Remove Effect


    var container = ((_this$options5 = _this.options) === null || _this$options5 === void 0 ? void 0 : _this$options5.container) || document.body;
    var containerClassName = container.className;
    if (!scrollLocker_scrollingEffectClassNameReg.test(containerClassName)) return;
    es_setStyle(scrollLocker_cacheStyle.get(container), {
      element: container
    });
    scrollLocker_cacheStyle.delete(container);
    container.className = container.className.replace(scrollLocker_scrollingEffectClassNameReg, '').trim();
  }; // eslint-disable-next-line no-plusplus


  this.lockTarget = uuid++;
  this.options = options;
};


// CONCATENATED MODULE: ./node_modules/rc-util/es/PortalWrapper.js







function PortalWrapper_createSuper(Derived) { var hasNativeReflectConstruct = PortalWrapper_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function PortalWrapper_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/* eslint-disable no-underscore-dangle,react/require-default-props */







var openCount = 0;
var supportDom = Object(canUseDom["a" /* default */])();
/** @private Test usage only */

function PortalWrapper_getOpenCount() {
  return  false ? undefined : 0;
} // https://github.com/ant-design/ant-design/issues/19340
// https://github.com/ant-design/ant-design/issues/19332

var cacheOverflow = {};

var PortalWrapper_getParent = function getParent(getContainer) {
  if (!supportDom) {
    return null;
  }

  if (getContainer) {
    if (typeof getContainer === 'string') {
      return document.querySelectorAll(getContainer)[0];
    }

    if (typeof getContainer === 'function') {
      return getContainer();
    }

    if (Object(esm_typeof["a" /* default */])(getContainer) === 'object' && getContainer instanceof window.HTMLElement) {
      return getContainer;
    }
  }

  return document.body;
};

var PortalWrapper_PortalWrapper = /*#__PURE__*/function (_React$Component) {
  Object(inherits["a" /* default */])(PortalWrapper, _React$Component);

  var _super = PortalWrapper_createSuper(PortalWrapper);

  function PortalWrapper(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, PortalWrapper);

    _this = _super.call(this, props);
    _this.componentRef = react["createRef"]();

    _this.updateScrollLocker = function (prevProps) {
      var _ref = prevProps || {},
          prevVisible = _ref.visible;

      var _this$props = _this.props,
          getContainer = _this$props.getContainer,
          visible = _this$props.visible;

      if (visible && visible !== prevVisible && supportDom && PortalWrapper_getParent(getContainer) !== _this.scrollLocker.getContainer()) {
        _this.scrollLocker.reLock({
          container: PortalWrapper_getParent(getContainer)
        });
      }
    };

    _this.updateOpenCount = function (prevProps) {
      var _ref2 = prevProps || {},
          prevVisible = _ref2.visible,
          prevGetContainer = _ref2.getContainer;

      var _this$props2 = _this.props,
          visible = _this$props2.visible,
          getContainer = _this$props2.getContainer; // Update count

      if (visible !== prevVisible && supportDom && PortalWrapper_getParent(getContainer) === document.body) {
        if (visible && !prevVisible) {
          openCount += 1;
        } else if (prevProps) {
          openCount -= 1;
        }
      } // Clean up container if needed


      var getContainerIsFunc = typeof getContainer === 'function' && typeof prevGetContainer === 'function';

      if (getContainerIsFunc ? getContainer.toString() !== prevGetContainer.toString() : getContainer !== prevGetContainer) {
        _this.removeCurrentContainer();
      }
    };

    _this.attachToParent = function () {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (force || _this.container && !_this.container.parentNode) {
        var parent = PortalWrapper_getParent(_this.props.getContainer);

        if (parent) {
          parent.appendChild(_this.container);
          return true;
        }

        return false;
      }

      return true;
    };

    _this.getContainer = function () {
      if (!supportDom) {
        return null;
      }

      if (!_this.container) {
        _this.container = document.createElement('div');

        _this.attachToParent(true);
      }

      _this.setWrapperClassName();

      return _this.container;
    };

    _this.setWrapperClassName = function () {
      var wrapperClassName = _this.props.wrapperClassName;

      if (_this.container && wrapperClassName && wrapperClassName !== _this.container.className) {
        _this.container.className = wrapperClassName;
      }
    };

    _this.removeCurrentContainer = function () {
      var _this$container, _this$container$paren;

      // Portal will remove from \`parentNode\`.
      // Let's handle this again to avoid refactor issue.
      (_this$container = _this.container) === null || _this$container === void 0 ? void 0 : (_this$container$paren = _this$container.parentNode) === null || _this$container$paren === void 0 ? void 0 : _this$container$paren.removeChild(_this.container);
    };
    /**
     * Enhance ./switchScrollingEffect
     * 1. Simulate document body scroll bar with
     * 2. Record body has overflow style and recover when all of PortalWrapper invisible
     * 3. Disable body scroll when PortalWrapper has open
     *
     * @memberof PortalWrapper
     */


    _this.switchScrollingEffect = function () {
      if (openCount === 1 && !Object.keys(cacheOverflow).length) {
        switchScrollingEffect(); // Must be set after switchScrollingEffect

        cacheOverflow = es_setStyle({
          overflow: 'hidden',
          overflowX: 'hidden',
          overflowY: 'hidden'
        });
      } else if (!openCount) {
        es_setStyle(cacheOverflow);
        cacheOverflow = {};
        switchScrollingEffect(true);
      }
    };

    _this.scrollLocker = new scrollLocker_ScrollLocker({
      container: PortalWrapper_getParent(props.getContainer)
    });
    return _this;
  }

  Object(createClass["a" /* default */])(PortalWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.updateOpenCount();

      if (!this.attachToParent()) {
        this.rafId = Object(raf["a" /* default */])(function () {
          _this2.forceUpdate();
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.updateOpenCount(prevProps);
      this.updateScrollLocker(prevProps);
      this.setWrapperClassName();
      this.attachToParent();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props3 = this.props,
          visible = _this$props3.visible,
          getContainer = _this$props3.getContainer;

      if (supportDom && PortalWrapper_getParent(getContainer) === document.body) {
        // \u79BB\u5F00\u65F6\u4E0D\u4F1A render\uFF0C \u5BFC\u5230\u79BB\u5F00\u65F6\u6570\u503C\u4E0D\u53D8\uFF0C\u6539\u7528 func \u3002\u3002
        openCount = visible && openCount ? openCount - 1 : openCount;
      }

      this.removeCurrentContainer();
      raf["a" /* default */].cancel(this.rafId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          children = _this$props4.children,
          forceRender = _this$props4.forceRender,
          visible = _this$props4.visible;
      var portal = null;
      var childProps = {
        getOpenCount: function getOpenCount() {
          return openCount;
        },
        getContainer: this.getContainer,
        switchScrollingEffect: this.switchScrollingEffect,
        scrollLocker: this.scrollLocker
      };

      if (forceRender || visible || this.componentRef.current) {
        portal = /*#__PURE__*/react["createElement"](Portal["a" /* default */], {
          getContainer: this.getContainer,
          ref: this.componentRef
        }, children(childProps));
      }

      return portal;
    }
  }]);

  return PortalWrapper;
}(react["Component"]);

/* harmony default export */ var es_PortalWrapper = (PortalWrapper_PortalWrapper);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("JX7q");

// EXTERNAL MODULE: ./node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__("4IlW");

// CONCATENATED MODULE: ./node_modules/rc-drawer/es/utils.js
function dataToArray(vars) {
  if (Array.isArray(vars)) {
    return vars;
  }

  return [vars];
}
var transitionEndObject = {
  transition: 'transitionend',
  WebkitTransition: 'webkitTransitionEnd',
  MozTransition: 'transitionend',
  OTransition: 'oTransitionEnd otransitionend'
};
var transitionStr = Object.keys(transitionEndObject).filter(function (key) {
  if (typeof document === 'undefined') {
    return false;
  }

  var html = document.getElementsByTagName('html')[0];
  return key in (html ? html.style : {});
})[0];
var transitionEnd = transitionEndObject[transitionStr];
function addEventListener(target, eventType, callback, options) {
  if (target.addEventListener) {
    target.addEventListener(eventType, callback, options);
  } else if (target.attachEvent) {
    // tslint:disable-line
    target.attachEvent("on".concat(eventType), callback); // tslint:disable-line
  }
}
function removeEventListener(target, eventType, callback, options) {
  if (target.removeEventListener) {
    target.removeEventListener(eventType, callback, options);
  } else if (target.attachEvent) {
    // tslint:disable-line
    target.detachEvent("on".concat(eventType), callback); // tslint:disable-line
  }
}
function transformArguments(arg, cb) {
  var result = typeof arg === 'function' ? arg(cb) : arg;

  if (Array.isArray(result)) {
    if (result.length === 2) {
      return result;
    }

    return [result[0], result[1]];
  }

  return [result];
}
var isNumeric = function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
};
var windowIsUndefined = !(typeof window !== 'undefined' && window.document && window.document.createElement);
var getTouchParentScroll = function getTouchParentScroll(root, currentTarget, differX, differY) {
  if (!currentTarget || currentTarget === document || currentTarget instanceof Document) {
    return false;
  } // root \u4E3A drawer-content \u8BBE\u5B9A\u4E86 overflow, \u5224\u65AD\u4E3A root \u7684 parent \u65F6\u7ED3\u675F\u6EDA\u52A8\uFF1B


  if (currentTarget === root.parentNode) {
    return true;
  }

  var isY = Math.max(Math.abs(differX), Math.abs(differY)) === Math.abs(differY);
  var isX = Math.max(Math.abs(differX), Math.abs(differY)) === Math.abs(differX);
  var scrollY = currentTarget.scrollHeight - currentTarget.clientHeight;
  var scrollX = currentTarget.scrollWidth - currentTarget.clientWidth;
  var style = document.defaultView.getComputedStyle(currentTarget);
  var overflowY = style.overflowY === 'auto' || style.overflowY === 'scroll';
  var overflowX = style.overflowX === 'auto' || style.overflowX === 'scroll';
  var y = scrollY && overflowY;
  var x = scrollX && overflowX;

  if (isY && (!y || y && (currentTarget.scrollTop >= scrollY && differY < 0 || currentTarget.scrollTop <= 0 && differY > 0)) || isX && (!x || x && (currentTarget.scrollLeft >= scrollX && differX < 0 || currentTarget.scrollLeft <= 0 && differX > 0))) {
    return getTouchParentScroll(root, currentTarget.parentNode, differX, differY);
  }

  return false;
};
// CONCATENATED MODULE: ./node_modules/rc-drawer/es/DrawerChild.js















var currentDrawer = {};

var DrawerChild_DrawerChild = /*#__PURE__*/function (_React$Component) {
  Object(inherits["a" /* default */])(DrawerChild, _React$Component);

  var _super = Object(createSuper["a" /* default */])(DrawerChild);

  function DrawerChild(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, DrawerChild);

    _this = _super.call(this, props);

    _this.domFocus = function () {
      if (_this.dom) {
        _this.dom.focus();
      }
    };

    _this.removeStartHandler = function (e) {
      if (e.touches.length > 1) {
        return;
      }

      _this.startPos = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    };

    _this.removeMoveHandler = function (e) {
      if (e.changedTouches.length > 1) {
        return;
      }

      var currentTarget = e.currentTarget;
      var differX = e.changedTouches[0].clientX - _this.startPos.x;
      var differY = e.changedTouches[0].clientY - _this.startPos.y;

      if ((currentTarget === _this.maskDom || currentTarget === _this.handlerDom || currentTarget === _this.contentDom && getTouchParentScroll(currentTarget, e.target, differX, differY)) && e.cancelable) {
        e.preventDefault();
      }
    };

    _this.transitionEnd = function (e) {
      var dom = e.target;
      removeEventListener(dom, transitionEnd, _this.transitionEnd);
      dom.style.transition = '';
    };

    _this.onKeyDown = function (e) {
      if (e.keyCode === KeyCode["a" /* default */].ESC) {
        var onClose = _this.props.onClose;
        e.stopPropagation();

        if (onClose) {
          onClose(e);
        }
      }
    };

    _this.onWrapperTransitionEnd = function (e) {
      var _this$props = _this.props,
          open = _this$props.open,
          afterVisibleChange = _this$props.afterVisibleChange;

      if (e.target === _this.contentWrapper && e.propertyName.match(/transform$/)) {
        _this.dom.style.transition = '';

        if (!open && _this.getCurrentDrawerSome()) {
          document.body.style.overflowX = '';

          if (_this.maskDom) {
            _this.maskDom.style.left = '';
            _this.maskDom.style.width = '';
          }
        }

        if (afterVisibleChange) {
          afterVisibleChange(!!open);
        }
      }
    };

    _this.openLevelTransition = function () {
      var _this$props2 = _this.props,
          open = _this$props2.open,
          width = _this$props2.width,
          height = _this$props2.height;

      var _this$getHorizontalBo = _this.getHorizontalBoolAndPlacementName(),
          isHorizontal = _this$getHorizontalBo.isHorizontal,
          placementName = _this$getHorizontalBo.placementName;

      var contentValue = _this.contentDom ? _this.contentDom.getBoundingClientRect()[isHorizontal ? 'width' : 'height'] : 0;
      var value = (isHorizontal ? width : height) || contentValue;

      _this.setLevelAndScrolling(open, placementName, value);
    };

    _this.setLevelTransform = function (open, placementName, value, right) {
      var _this$props3 = _this.props,
          placement = _this$props3.placement,
          levelMove = _this$props3.levelMove,
          duration = _this$props3.duration,
          ease = _this$props3.ease,
          showMask = _this$props3.showMask; // router \u5207\u6362\u65F6\u53EF\u80FD\u4F1A\u5BFC\u81F3\u9875\u9762\u5931\u53BB\u6EDA\u52A8\u6761\uFF0C\u6240\u4EE5\u9700\u8981\u65F6\u65F6\u83B7\u53D6\u3002

      _this.levelDom.forEach(function (dom) {
        dom.style.transition = "transform ".concat(duration, " ").concat(ease);
        addEventListener(dom, transitionEnd, _this.transitionEnd);
        var levelValue = open ? value : 0;

        if (levelMove) {
          var $levelMove = transformArguments(levelMove, {
            target: dom,
            open: open
          });
          levelValue = open ? $levelMove[0] : $levelMove[1] || 0;
        }

        var $value = typeof levelValue === 'number' ? "".concat(levelValue, "px") : levelValue;
        var placementPos = placement === 'left' || placement === 'top' ? $value : "-".concat($value);
        placementPos = showMask && placement === 'right' && right ? "calc(".concat(placementPos, " + ").concat(right, "px)") : placementPos;
        dom.style.transform = levelValue ? "".concat(placementName, "(").concat(placementPos, ")") : '';
      });
    };

    _this.setLevelAndScrolling = function (open, placementName, value) {
      var onChange = _this.props.onChange;

      if (!windowIsUndefined) {
        var right = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth ? Object(getScrollBarSize["a" /* default */])(true) : 0;

        _this.setLevelTransform(open, placementName, value, right);

        _this.toggleScrollingToDrawerAndBody(right);
      }

      if (onChange) {
        onChange(open);
      }
    };

    _this.toggleScrollingToDrawerAndBody = function (right) {
      var _this$props4 = _this.props,
          getContainer = _this$props4.getContainer,
          showMask = _this$props4.showMask,
          open = _this$props4.open;
      var container = getContainer && getContainer(); // \u5904\u7406 body \u6EDA\u52A8

      if (container && container.parentNode === document.body && showMask) {
        var eventArray = ['touchstart'];
        var domArray = [document.body, _this.maskDom, _this.handlerDom, _this.contentDom];

        if (open && document.body.style.overflow !== 'hidden') {
          if (right) {
            _this.addScrollingEffect(right);
          }

          document.body.style.touchAction = 'none'; // \u624B\u673A\u7981\u6EDA

          domArray.forEach(function (item, i) {
            if (!item) {
              return;
            }

            addEventListener(item, eventArray[i] || 'touchmove', i ? _this.removeMoveHandler : _this.removeStartHandler, _this.passive);
          });
        } else if (_this.getCurrentDrawerSome()) {
          document.body.style.touchAction = '';

          if (right) {
            _this.remScrollingEffect(right);
          } // \u6062\u590D\u4E8B\u4EF6


          domArray.forEach(function (item, i) {
            if (!item) {
              return;
            }

            removeEventListener(item, eventArray[i] || 'touchmove', i ? _this.removeMoveHandler : _this.removeStartHandler, _this.passive);
          });
        }
      }
    };

    _this.addScrollingEffect = function (right) {
      var _this$props5 = _this.props,
          placement = _this$props5.placement,
          duration = _this$props5.duration,
          ease = _this$props5.ease;
      var widthTransition = "width ".concat(duration, " ").concat(ease);
      var transformTransition = "transform ".concat(duration, " ").concat(ease);
      _this.dom.style.transition = 'none';

      switch (placement) {
        case 'right':
          _this.dom.style.transform = "translateX(-".concat(right, "px)");
          break;

        case 'top':
        case 'bottom':
          _this.dom.style.width = "calc(100% - ".concat(right, "px)");
          _this.dom.style.transform = 'translateZ(0)';
          break;

        default:
          break;
      }

      clearTimeout(_this.timeout);
      _this.timeout = setTimeout(function () {
        if (_this.dom) {
          _this.dom.style.transition = "".concat(transformTransition, ",").concat(widthTransition);
          _this.dom.style.width = '';
          _this.dom.style.transform = '';
        }
      });
    };

    _this.remScrollingEffect = function (right) {
      var _this$props6 = _this.props,
          placement = _this$props6.placement,
          duration = _this$props6.duration,
          ease = _this$props6.ease;

      if (transitionStr) {
        document.body.style.overflowX = 'hidden';
      }

      _this.dom.style.transition = 'none';
      var heightTransition;
      var widthTransition = "width ".concat(duration, " ").concat(ease);
      var transformTransition = "transform ".concat(duration, " ").concat(ease);

      switch (placement) {
        case 'left':
          {
            _this.dom.style.width = '100%';
            widthTransition = "width 0s ".concat(ease, " ").concat(duration);
            break;
          }

        case 'right':
          {
            _this.dom.style.transform = "translateX(".concat(right, "px)");
            _this.dom.style.width = '100%';
            widthTransition = "width 0s ".concat(ease, " ").concat(duration);

            if (_this.maskDom) {
              _this.maskDom.style.left = "-".concat(right, "px");
              _this.maskDom.style.width = "calc(100% + ".concat(right, "px)");
            }

            break;
          }

        case 'top':
        case 'bottom':
          {
            _this.dom.style.width = "calc(100% + ".concat(right, "px)");
            _this.dom.style.height = '100%';
            _this.dom.style.transform = 'translateZ(0)';
            heightTransition = "height 0s ".concat(ease, " ").concat(duration);
            break;
          }

        default:
          break;
      }

      clearTimeout(_this.timeout);
      _this.timeout = setTimeout(function () {
        if (_this.dom) {
          _this.dom.style.transition = "".concat(transformTransition, ",").concat(heightTransition ? "".concat(heightTransition, ",") : '').concat(widthTransition);
          _this.dom.style.transform = '';
          _this.dom.style.width = '';
          _this.dom.style.height = '';
        }
      });
    };

    _this.getCurrentDrawerSome = function () {
      return !Object.keys(currentDrawer).some(function (key) {
        return currentDrawer[key];
      });
    };

    _this.getLevelDom = function (_ref) {
      var level = _ref.level,
          getContainer = _ref.getContainer;

      if (windowIsUndefined) {
        return;
      }

      var container = getContainer && getContainer();
      var parent = container ? container.parentNode : null;
      _this.levelDom = [];

      if (level === 'all') {
        var children = parent ? Array.prototype.slice.call(parent.children) : [];
        children.forEach(function (child) {
          if (child.nodeName !== 'SCRIPT' && child.nodeName !== 'STYLE' && child.nodeName !== 'LINK' && child !== container) {
            _this.levelDom.push(child);
          }
        });
      } else if (level) {
        dataToArray(level).forEach(function (key) {
          document.querySelectorAll(key).forEach(function (item) {
            _this.levelDom.push(item);
          });
        });
      }
    };

    _this.getHorizontalBoolAndPlacementName = function () {
      var placement = _this.props.placement;
      var isHorizontal = placement === 'left' || placement === 'right';
      var placementName = "translate".concat(isHorizontal ? 'X' : 'Y');
      return {
        isHorizontal: isHorizontal,
        placementName: placementName
      };
    };

    _this.state = {
      _self: Object(assertThisInitialized["a" /* default */])(_this)
    };
    return _this;
  }

  Object(createClass["a" /* default */])(DrawerChild, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!windowIsUndefined) {
        var passiveSupported = false;

        try {
          window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
            get: function get() {
              passiveSupported = true;
              return null;
            }
          }));
        } catch (err) {}

        this.passive = passiveSupported ? {
          passive: false
        } : false;
      }

      var _this$props7 = this.props,
          open = _this$props7.open,
          getContainer = _this$props7.getContainer,
          showMask = _this$props7.showMask;
      var container = getContainer && getContainer();
      this.drawerId = "drawer_id_".concat(Number((Date.now() + Math.random()).toString().replace('.', Math.round(Math.random() * 9).toString())).toString(16));
      this.getLevelDom(this.props);

      if (open) {
        if (container && container.parentNode === document.body) {
          currentDrawer[this.drawerId] = open;
        } // \u9ED8\u8BA4\u6253\u5F00\u72B6\u6001\u65F6\u63A8\u51FA level;


        this.openLevelTransition();
        this.forceUpdate(function () {
          _this2.domFocus();
        });

        if (showMask) {
          var _this$props$scrollLoc;

          (_this$props$scrollLoc = this.props.scrollLocker) === null || _this$props$scrollLoc === void 0 ? void 0 : _this$props$scrollLoc.lock();
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props8 = this.props,
          open = _this$props8.open,
          getContainer = _this$props8.getContainer,
          scrollLocker = _this$props8.scrollLocker,
          showMask = _this$props8.showMask;
      var container = getContainer && getContainer();

      if (open !== prevProps.open) {
        if (container && container.parentNode === document.body) {
          currentDrawer[this.drawerId] = !!open;
        }

        this.openLevelTransition();

        if (open) {
          this.domFocus();

          if (showMask) {
            scrollLocker === null || scrollLocker === void 0 ? void 0 : scrollLocker.lock();
          }
        } else {
          scrollLocker === null || scrollLocker === void 0 ? void 0 : scrollLocker.unLock();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props9 = this.props,
          open = _this$props9.open,
          scrollLocker = _this$props9.scrollLocker;
      delete currentDrawer[this.drawerId];

      if (open) {
        this.setLevelTransform(false);
        document.body.style.touchAction = '';
      }

      scrollLocker === null || scrollLocker === void 0 ? void 0 : scrollLocker.unLock();
    } // tslint:disable-next-line:member-ordering

  }, {
    key: "render",
    value: function render() {
      var _classnames,
          _this3 = this;

      var _this$props10 = this.props,
          className = _this$props10.className,
          children = _this$props10.children,
          style = _this$props10.style,
          width = _this$props10.width,
          height = _this$props10.height,
          defaultOpen = _this$props10.defaultOpen,
          $open = _this$props10.open,
          prefixCls = _this$props10.prefixCls,
          placement = _this$props10.placement,
          level = _this$props10.level,
          levelMove = _this$props10.levelMove,
          ease = _this$props10.ease,
          duration = _this$props10.duration,
          getContainer = _this$props10.getContainer,
          handler = _this$props10.handler,
          onChange = _this$props10.onChange,
          afterVisibleChange = _this$props10.afterVisibleChange,
          showMask = _this$props10.showMask,
          maskClosable = _this$props10.maskClosable,
          maskStyle = _this$props10.maskStyle,
          onClose = _this$props10.onClose,
          onHandleClick = _this$props10.onHandleClick,
          keyboard = _this$props10.keyboard,
          getOpenCount = _this$props10.getOpenCount,
          scrollLocker = _this$props10.scrollLocker,
          contentWrapperStyle = _this$props10.contentWrapperStyle,
          props = Object(objectWithoutProperties["a" /* default */])(_this$props10, ["className", "children", "style", "width", "height", "defaultOpen", "open", "prefixCls", "placement", "level", "levelMove", "ease", "duration", "getContainer", "handler", "onChange", "afterVisibleChange", "showMask", "maskClosable", "maskStyle", "onClose", "onHandleClick", "keyboard", "getOpenCount", "scrollLocker", "contentWrapperStyle"]); // \u9996\u6B21\u6E32\u67D3\u90FD\u5C06\u662F\u5173\u95ED\u72B6\u6001\u3002


      var open = this.dom ? $open : false;
      var wrapperClassName = classnames_default()(prefixCls, (_classnames = {}, Object(defineProperty["a" /* default */])(_classnames, "".concat(prefixCls, "-").concat(placement), true), Object(defineProperty["a" /* default */])(_classnames, "".concat(prefixCls, "-open"), open), Object(defineProperty["a" /* default */])(_classnames, className || '', !!className), Object(defineProperty["a" /* default */])(_classnames, 'no-mask', !showMask), _classnames));

      var _this$getHorizontalBo2 = this.getHorizontalBoolAndPlacementName(),
          placementName = _this$getHorizontalBo2.placementName; // \u767E\u5206\u6BD4\u4E0E\u50CF\u7D20\u52A8\u753B\u4E0D\u540C\u6B65\uFF0C\u7B2C\u4E00\u6B21\u6253\u7528\u540E\u5168\u7528\u50CF\u7D20\u52A8\u753B\u3002
      // const defaultValue = !this.contentDom || !level ? '100%' : \`\${value}px\`;


      var placementPos = placement === 'left' || placement === 'top' ? '-100%' : '100%';
      var transform = open ? '' : "".concat(placementName, "(").concat(placementPos, ")");
      var handlerChildren = handler && /*#__PURE__*/react["cloneElement"](handler, {
        onClick: function onClick(e) {
          if (handler.props.onClick) {
            handler.props.onClick();
          }

          if (onHandleClick) {
            onHandleClick(e);
          }
        },
        ref: function ref(c) {
          _this3.handlerDom = c;
        }
      });
      return /*#__PURE__*/react["createElement"]("div", Object(esm_extends["a" /* default */])({}, Object(es_omit["a" /* default */])(props, ['switchScrollingEffect']), {
        tabIndex: -1,
        className: wrapperClassName,
        style: style,
        ref: function ref(c) {
          _this3.dom = c;
        },
        onKeyDown: open && keyboard ? this.onKeyDown : undefined,
        onTransitionEnd: this.onWrapperTransitionEnd
      }), showMask && /*#__PURE__*/react["createElement"]("div", {
        className: "".concat(prefixCls, "-mask"),
        onClick: maskClosable ? onClose : undefined,
        style: maskStyle,
        ref: function ref(c) {
          _this3.maskDom = c;
        }
      }), /*#__PURE__*/react["createElement"]("div", {
        className: "".concat(prefixCls, "-content-wrapper"),
        style: Object(objectSpread2["a" /* default */])({
          transform: transform,
          msTransform: transform,
          width: isNumeric(width) ? "".concat(width, "px") : width,
          height: isNumeric(height) ? "".concat(height, "px") : height
        }, contentWrapperStyle),
        ref: function ref(c) {
          _this3.contentWrapper = c;
        }
      }, /*#__PURE__*/react["createElement"]("div", {
        className: "".concat(prefixCls, "-content"),
        ref: function ref(c) {
          _this3.contentDom = c;
        },
        onTouchStart: open && showMask ? this.removeStartHandler : undefined // \u8DD1\u7528\u4F8B\u7528
        ,
        onTouchMove: open && showMask ? this.removeMoveHandler : undefined // \u8DD1\u7528\u4F8B\u7528

      }, children), handlerChildren));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, _ref2) {
      var prevProps = _ref2.prevProps,
          _self = _ref2._self;
      var nextState = {
        prevProps: props
      };

      if (prevProps !== undefined) {
        var placement = props.placement,
            level = props.level;

        if (placement !== prevProps.placement) {
          // test \u7684 bug, \u6709\u52A8\u753B\u8FC7\u573A\uFF0C\u5220\u9664 dom
          _self.contentDom = null;
        }

        if (level !== prevProps.level) {
          _self.getLevelDom(props);
        }
      }

      return nextState;
    }
  }]);

  return DrawerChild;
}(react["Component"]);

/* harmony default export */ var es_DrawerChild = (DrawerChild_DrawerChild);
// CONCATENATED MODULE: ./node_modules/rc-drawer/es/DrawerWrapper.js










var DrawerWrapper_DrawerWrapper = /*#__PURE__*/function (_React$Component) {
  Object(inherits["a" /* default */])(DrawerWrapper, _React$Component);

  var _super = Object(createSuper["a" /* default */])(DrawerWrapper);

  function DrawerWrapper(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, DrawerWrapper);

    _this = _super.call(this, props);

    _this.onHandleClick = function (e) {
      var _this$props = _this.props,
          onHandleClick = _this$props.onHandleClick,
          $open = _this$props.open;

      if (onHandleClick) {
        onHandleClick(e);
      }

      if (typeof $open === 'undefined') {
        var _open = _this.state.open;

        _this.setState({
          open: !_open
        });
      }
    };

    _this.onClose = function (e) {
      var _this$props2 = _this.props,
          onClose = _this$props2.onClose,
          open = _this$props2.open;

      if (onClose) {
        onClose(e);
      }

      if (typeof open === 'undefined') {
        _this.setState({
          open: false
        });
      }
    };

    var open = typeof props.open !== 'undefined' ? props.open : !!props.defaultOpen;
    _this.state = {
      open: open
    };

    if ('onMaskClick' in props) {
      console.warn('\`onMaskClick\` are removed, please use \`onClose\` instead.');
    }

    return _this;
  }

  Object(createClass["a" /* default */])(DrawerWrapper, [{
    key: "render",
    value: // tslint:disable-next-line:member-ordering
    function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          defaultOpen = _this$props3.defaultOpen,
          getContainer = _this$props3.getContainer,
          wrapperClassName = _this$props3.wrapperClassName,
          forceRender = _this$props3.forceRender,
          handler = _this$props3.handler,
          props = Object(objectWithoutProperties["a" /* default */])(_this$props3, ["defaultOpen", "getContainer", "wrapperClassName", "forceRender", "handler"]);

      var open = this.state.open; // \u6E32\u67D3\u5728\u5F53\u524D dom \u91CC\uFF1B

      if (!getContainer) {
        return /*#__PURE__*/react["createElement"]("div", {
          className: wrapperClassName,
          ref: function ref(c) {
            _this2.dom = c;
          }
        }, /*#__PURE__*/react["createElement"](es_DrawerChild, Object(esm_extends["a" /* default */])({}, props, {
          open: open,
          handler: handler,
          getContainer: function getContainer() {
            return _this2.dom;
          },
          onClose: this.onClose,
          onHandleClick: this.onHandleClick
        })));
      } // \u5982\u679C\u6709 handler \u4E3A\u5185\u7F6E\u5F3A\u5236\u6E32\u67D3\uFF1B


      var $forceRender = !!handler || forceRender;
      return /*#__PURE__*/react["createElement"](es_PortalWrapper, {
        visible: open,
        forceRender: $forceRender,
        getContainer: getContainer,
        wrapperClassName: wrapperClassName
      }, function (_ref) {
        var visible = _ref.visible,
            afterClose = _ref.afterClose,
            rest = Object(objectWithoutProperties["a" /* default */])(_ref, ["visible", "afterClose"]);

        return (
          /*#__PURE__*/
          // react 15\uFF0CcomponentWillUnmount \u65F6 Portal \u8FD4\u56DE afterClose, visible.
          react["createElement"](es_DrawerChild, Object(esm_extends["a" /* default */])({}, props, rest, {
            open: visible !== undefined ? visible : open,
            afterVisibleChange: afterClose !== undefined ? afterClose : props.afterVisibleChange,
            handler: handler,
            onClose: _this2.onClose,
            onHandleClick: _this2.onHandleClick
          }))
        );
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, _ref2) {
      var prevProps = _ref2.prevProps;
      var newState = {
        prevProps: props
      };

      if (typeof prevProps !== 'undefined' && props.open !== prevProps.open) {
        newState.open = props.open;
      }

      return newState;
    }
  }]);

  return DrawerWrapper;
}(react["Component"]);

DrawerWrapper_DrawerWrapper.defaultProps = {
  prefixCls: 'drawer',
  placement: 'left',
  getContainer: 'body',
  defaultOpen: false,
  level: 'all',
  duration: '.3s',
  ease: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
  onChange: function onChange() {},
  afterVisibleChange: function afterVisibleChange() {},
  handler: /*#__PURE__*/react["createElement"]("div", {
    className: "drawer-handle"
  }, /*#__PURE__*/react["createElement"]("i", {
    className: "drawer-handle-icon"
  })),
  showMask: true,
  maskClosable: true,
  maskStyle: {},
  wrapperClassName: '',
  className: '',
  keyboard: true,
  forceRender: false
};
/* harmony default export */ var es_DrawerWrapper = (DrawerWrapper_DrawerWrapper);
// CONCATENATED MODULE: ./node_modules/rc-drawer/es/index.js
// export this package's api

/* harmony default export */ var rc_drawer_es = (es_DrawerWrapper);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__("4i/N");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/type.js
var _util_type = __webpack_require__("CWQg");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/hooks/useForceUpdate.js
var useForceUpdate = __webpack_require__("hkKa");

// CONCATENATED MODULE: ./node_modules/antd/es/drawer/index.js




var drawer_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};









var DrawerContext = /*#__PURE__*/react["createContext"](null);
var PlacementTypes = Object(_util_type["a" /* tuple */])('top', 'right', 'bottom', 'left');
var defaultPushState = {
  distance: 180
};
var Drawer = /*#__PURE__*/react["forwardRef"](function (_a, ref) {
  var _a$width = _a.width,
      width = _a$width === void 0 ? 256 : _a$width,
      _a$height = _a.height,
      height = _a$height === void 0 ? 256 : _a$height,
      _a$closable = _a.closable,
      closable = _a$closable === void 0 ? true : _a$closable,
      _a$placement = _a.placement,
      placement = _a$placement === void 0 ? 'right' : _a$placement,
      _a$maskClosable = _a.maskClosable,
      maskClosable = _a$maskClosable === void 0 ? true : _a$maskClosable,
      _a$mask = _a.mask,
      mask = _a$mask === void 0 ? true : _a$mask,
      _a$level = _a.level,
      level = _a$level === void 0 ? null : _a$level,
      _a$keyboard = _a.keyboard,
      keyboard = _a$keyboard === void 0 ? true : _a$keyboard,
      _a$push = _a.push,
      _push = _a$push === void 0 ? defaultPushState : _a$push,
      _a$closeIcon = _a.closeIcon,
      closeIcon = _a$closeIcon === void 0 ? /*#__PURE__*/react["createElement"](CloseOutlined["a" /* default */], null) : _a$closeIcon,
      bodyStyle = _a.bodyStyle,
      drawerStyle = _a.drawerStyle,
      prefixCls = _a.prefixCls,
      className = _a.className,
      direction = _a.direction,
      visible = _a.visible,
      children = _a.children,
      zIndex = _a.zIndex,
      destroyOnClose = _a.destroyOnClose,
      style = _a.style,
      title = _a.title,
      headerStyle = _a.headerStyle,
      onClose = _a.onClose,
      footer = _a.footer,
      footerStyle = _a.footerStyle,
      rest = drawer_rest(_a, ["width", "height", "closable", "placement", "maskClosable", "mask", "level", "keyboard", "push", "closeIcon", "bodyStyle", "drawerStyle", "prefixCls", "className", "direction", "visible", "children", "zIndex", "destroyOnClose", "style", "title", "headerStyle", "onClose", "footer", "footerStyle"]);

  var forceUpdate = Object(useForceUpdate["a" /* default */])();

  var _React$useState = react["useState"](false),
      _React$useState2 = Object(slicedToArray["a" /* default */])(_React$useState, 2),
      internalPush = _React$useState2[0],
      setPush = _React$useState2[1];

  var parentDrawer = react["useContext"](DrawerContext);
  var destroyClose = react["useRef"](false);
  react["useEffect"](function () {
    // fix: delete drawer in child and re-render, no push started.
    // <Drawer>{show && <Drawer />}</Drawer>
    if (visible && parentDrawer) {
      parentDrawer.push();
    }

    return function () {
      if (parentDrawer) {
        parentDrawer.pull(); // parentDrawer = null;
      }
    };
  }, []);
  react["useEffect"](function () {
    if (parentDrawer) {
      if (visible) {
        parentDrawer.push();
      } else {
        parentDrawer.pull();
      }
    }
  }, [visible]);
  var operations = react["useMemo"](function () {
    return {
      push: function push() {
        if (_push) {
          setPush(true);
        }
      },
      pull: function pull() {
        if (_push) {
          setPush(false);
        }
      }
    };
  }, [_push]);
  react["useImperativeHandle"](ref, function () {
    return operations;
  }, [operations]);
  var isDestroyOnClose = destroyOnClose && !visible;

  var onDestroyTransitionEnd = function onDestroyTransitionEnd() {
    if (!isDestroyOnClose) {
      return;
    }

    if (!visible) {
      destroyClose.current = true;
      forceUpdate();
    }
  };

  var getOffsetStyle = function getOffsetStyle() {
    // https://github.com/ant-design/ant-design/issues/24287
    if (!visible && !mask) {
      return {};
    }

    var offsetStyle = {};

    if (placement === 'left' || placement === 'right') {
      offsetStyle.width = width;
    } else {
      offsetStyle.height = height;
    }

    return offsetStyle;
  };

  var getRcDrawerStyle = function getRcDrawerStyle() {
    // get drawer push width or height
    var getPushTransform = function getPushTransform(_placement) {
      var distance;

      if (typeof _push === 'boolean') {
        distance = _push ? defaultPushState.distance : 0;
      } else {
        distance = _push.distance;
      }

      distance = parseFloat(String(distance || 0));

      if (_placement === 'left' || _placement === 'right') {
        return "translateX(".concat(_placement === 'left' ? distance : -distance, "px)");
      }

      if (_placement === 'top' || _placement === 'bottom') {
        return "translateY(".concat(_placement === 'top' ? distance : -distance, "px)");
      }
    }; // \u5F53\u65E0 mask \u65F6\uFF0C\u5C06 width \u5E94\u7528\u5230\u5916\u5C42\u5BB9\u5668\u4E0A
    // \u89E3\u51B3 https://github.com/ant-design/ant-design/issues/12401 \u7684\u95EE\u9898


    var offsetStyle = mask ? {} : getOffsetStyle();
    return Object(esm_extends["a" /* default */])(Object(esm_extends["a" /* default */])({
      zIndex: zIndex,
      transform: internalPush ? getPushTransform(placement) : undefined
    }, offsetStyle), style);
  };

  function renderCloseIcon() {
    return closable && /*#__PURE__*/react["createElement"]("button", {
      type: "button",
      onClick: onClose,
      "aria-label": "Close",
      className: "".concat(prefixCls, "-close"),
      style: {
        '--scroll-bar': "".concat(Object(getScrollBarSize["a" /* default */])(), "px")
      }
    }, closeIcon);
  }

  function renderHeader() {
    if (!title && !closable) {
      return null;
    }

    var headerClassName = title ? "".concat(prefixCls, "-header") : "".concat(prefixCls, "-header-no-title");
    return /*#__PURE__*/react["createElement"]("div", {
      className: headerClassName,
      style: headerStyle
    }, title && /*#__PURE__*/react["createElement"]("div", {
      className: "".concat(prefixCls, "-title")
    }, title), closable && renderCloseIcon());
  }

  function renderFooter() {
    if (!footer) {
      return null;
    }

    var footerClassName = "".concat(prefixCls, "-footer");
    return /*#__PURE__*/react["createElement"]("div", {
      className: footerClassName,
      style: footerStyle
    }, footer);
  } // render drawer body dom


  var renderBody = function renderBody() {
    if (destroyClose.current && !visible) {
      return null;
    }

    destroyClose.current = false;
    var containerStyle = {};

    if (isDestroyOnClose) {
      // Increase the opacity transition, delete children after closing.
      containerStyle.opacity = 0;
      containerStyle.transition = 'opacity .3s';
    }

    return /*#__PURE__*/react["createElement"]("div", {
      className: "".concat(prefixCls, "-wrapper-body"),
      style: Object(esm_extends["a" /* default */])(Object(esm_extends["a" /* default */])({}, containerStyle), drawerStyle),
      onTransitionEnd: onDestroyTransitionEnd
    }, renderHeader(), /*#__PURE__*/react["createElement"]("div", {
      className: "".concat(prefixCls, "-body"),
      style: bodyStyle
    }, children), renderFooter());
  };

  var drawerClassName = classnames_default()(Object(defineProperty["a" /* default */])({
    'no-mask': !mask
  }, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
  var offsetStyle = mask ? getOffsetStyle() : {};
  return /*#__PURE__*/react["createElement"](DrawerContext.Provider, {
    value: operations
  }, /*#__PURE__*/react["createElement"](rc_drawer_es, Object(esm_extends["a" /* default */])({
    handler: false
  }, Object(esm_extends["a" /* default */])({
    placement: placement,
    prefixCls: prefixCls,
    maskClosable: maskClosable,
    level: level,
    keyboard: keyboard,
    children: children,
    onClose: onClose
  }, rest), offsetStyle, {
    open: visible,
    showMask: mask,
    style: getRcDrawerStyle(),
    className: drawerClassName
  }), renderBody()));
});
Drawer.displayName = 'Drawer';
var drawer_DrawerWrapper = /*#__PURE__*/react["forwardRef"](function (props, ref) {
  var customizePrefixCls = props.prefixCls,
      customizeGetContainer = props.getContainer;

  var _React$useContext = react["useContext"](config_provider_context["b" /* ConfigContext */]),
      getPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var prefixCls = getPrefixCls('drawer', customizePrefixCls);
  var getContainer = // \u6709\u53EF\u80FD\u4E3A false\uFF0C\u6240\u4EE5\u4E0D\u80FD\u76F4\u63A5\u5224\u65AD
  customizeGetContainer === undefined && getPopupContainer ? function () {
    return getPopupContainer(document.body);
  } : customizeGetContainer;
  return /*#__PURE__*/react["createElement"](Drawer, Object(esm_extends["a" /* default */])({}, props, {
    ref: ref,
    prefixCls: prefixCls,
    getContainer: getContainer,
    direction: direction
  }));
});
drawer_DrawerWrapper.displayName = 'DrawerWrapper';
/* harmony default export */ var drawer = (drawer_DrawerWrapper);
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/SiderMenu/index.js



function components_SiderMenu_extends() { components_SiderMenu_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return components_SiderMenu_extends.apply(this, arguments); }

function components_SiderMenu_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function components_SiderMenu_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { components_SiderMenu_ownKeys(Object(source), true).forEach(function (key) { components_SiderMenu_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { components_SiderMenu_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function components_SiderMenu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var SiderMenu_SiderMenuWrapper = function SiderMenuWrapper(props) {
  var isMobile = props.isMobile,
      menuData = props.menuData,
      siderWidth = props.siderWidth,
      collapsed = props.collapsed,
      onCollapse = props.onCollapse,
      style = props.style,
      className = props.className,
      hide = props.hide,
      getContainer = props.getContainer,
      prefixCls = props.prefixCls,
      matchMenuKeys = props.matchMenuKeys;

  var _MenuCounter$useConta = Counter.useContainer(),
      setFlatMenuKeys = _MenuCounter$useConta.setFlatMenuKeys;

  Object(react["useEffect"])(function () {
    if (!menuData || menuData.length < 1) {
      return function () {
        return null;
      };
    } // \u5F53 menu data \u6539\u53D8\u7684\u65F6\u5019\u91CD\u65B0\u8BA1\u7B97\u8FD9\u4E24\u4E2A\u53C2\u6570


    var newFlatMenus = Object(route_utils_es["a" /* getFlatMenus */])(menuData);
    var animationFrameId = requestAnimationFrame(function () {
      setFlatMenuKeys(Object.keys(newFlatMenus));
    });
    return function () {
      return window.cancelAnimationFrame && window.cancelAnimationFrame(animationFrameId);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchMenuKeys.join('-')]);
  Object(react["useEffect"])(function () {
    if (isMobile === true) {
      onCollapse === null || onCollapse === void 0 ? void 0 : onCollapse(true);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [isMobile]);
  var omitProps = omit_js_es(props, ['className', 'style']);

  if (hide) {
    return null;
  }

  return isMobile ? /*#__PURE__*/react_default.a.createElement(drawer, {
    visible: !collapsed,
    placement: "left",
    className: classnames_default()("".concat(prefixCls, "-drawer-sider"), className),
    onClose: function onClose() {
      return onCollapse === null || onCollapse === void 0 ? void 0 : onCollapse(true);
    },
    style: components_SiderMenu_objectSpread({
      padding: 0,
      height: '100vh'
    }, style),
    getContainer: getContainer,
    width: siderWidth,
    bodyStyle: {
      height: '100vh',
      padding: 0,
      display: 'flex',
      flexDirection: 'row'
    }
  }, /*#__PURE__*/react_default.a.createElement(components_SiderMenu_SiderMenu, components_SiderMenu_extends({}, omitProps, {
    className: classnames_default()("".concat(prefixCls, "-sider"), className),
    collapsed: isMobile ? false : collapsed,
    splitMenus: false
  }))) : /*#__PURE__*/react_default.a.createElement(components_SiderMenu_SiderMenu, components_SiderMenu_extends({
    className: classnames_default()("".concat(prefixCls, "-sider"), className)
  }, omitProps, {
    style: style
  }));
};

/* harmony default export */ var es_components_SiderMenu = (SiderMenu_SiderMenuWrapper);
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/utils/pathTools.js
// /userInfo/2144/id => ['/userInfo','/userInfo/2144,'/userInfo/2144/id']
// eslint-disable-next-line import/prefer-default-export
function urlToList(url) {
  if (!url || url === '/') {
    return ['/'];
  }

  var urlList = url.split('/').filter(function (i) {
    return i;
  });
  return urlList.map(function (urlItem, index) {
    return "/".concat(urlList.slice(0, index + 1).join('/'));
  });
}
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/utils/getBreadcrumbProps.js


 // \u6E32\u67D3Breadcrumb \u5B50\u8282\u70B9
// Render the Breadcrumb child node

var getBreadcrumbProps_defaultItemRender = function defaultItemRender(_ref) {
  var breadcrumbName = _ref.breadcrumbName,
      path = _ref.path;
  return /*#__PURE__*/react_default.a.createElement("a", {
    href: path
  }, breadcrumbName);
};

var renderItemLocal = function renderItemLocal(item, props) {
  var formatMessage = props.formatMessage,
      menu = props.menu;

  if (item.locale && formatMessage && (menu === null || menu === void 0 ? void 0 : menu.locale) !== false) {
    return formatMessage({
      id: item.locale,
      defaultMessage: item.name
    });
  }

  return item.name;
};

var getBreadcrumbProps_getBreadcrumb = function getBreadcrumb(breadcrumbMap, url) {
  var breadcrumbItem = breadcrumbMap.get(url);

  if (!breadcrumbItem) {
    // Find the first matching path in the order defined by route config
    // \u6309\u7167 route config \u5B9A\u4E49\u7684\u987A\u5E8F\u627E\u5230\u7B2C\u4E00\u4E2A\u5339\u914D\u7684\u8DEF\u5F84
    var keys = Array.from(breadcrumbMap.keys()) || [];
    var targetPath = keys.find(function (path) {
      return (// remove ? ,\u4E0D\u7136\u4F1A\u91CD\u590D
        path_to_regexp_default()(path.replace('?', '')).test(url)
      );
    });
    if (targetPath) breadcrumbItem = breadcrumbMap.get(targetPath);
  }

  return breadcrumbItem || {
    path: ''
  };
};
var getBreadcrumbFromProps = function getBreadcrumbFromProps(props) {
  var location = props.location,
      breadcrumbMap = props.breadcrumbMap;
  return {
    location: location,
    breadcrumbMap: breadcrumbMap
  };
};

var getBreadcrumbProps_conversionFromLocation = function conversionFromLocation(routerLocation, breadcrumbMap, props) {
  // Convertor the url to an array
  var pathSnippets = urlToList(routerLocation === null || routerLocation === void 0 ? void 0 : routerLocation.pathname); // Loop data mosaic routing

  var extraBreadcrumbItems = pathSnippets.map(function (url) {
    var currentBreadcrumb = getBreadcrumbProps_getBreadcrumb(breadcrumbMap, url);
    var name = renderItemLocal(currentBreadcrumb, props);
    var hideInBreadcrumb = currentBreadcrumb.hideInBreadcrumb;
    return name && !hideInBreadcrumb ? {
      path: url,
      breadcrumbName: name,
      component: currentBreadcrumb.component
    } : {
      path: '',
      breadcrumbName: ''
    };
  }).filter(function (item) {
    return item && item.path;
  });
  return extraBreadcrumbItems;
};
/** \u5C06\u53C2\u6570\u8F6C\u5316\u4E3A\u9762\u5305\u5C51 Convert parameters into breadcrumbs */


var genBreadcrumbProps = function genBreadcrumbProps(props) {
  var _getBreadcrumbFromPro = getBreadcrumbFromProps(props),
      location = _getBreadcrumbFromPro.location,
      breadcrumbMap = _getBreadcrumbFromPro.breadcrumbMap; // \u6839\u636E location \u751F\u6210 \u9762\u5305\u5C51
  // Generate breadcrumbs based on location


  if (location && location.pathname && breadcrumbMap) {
    return getBreadcrumbProps_conversionFromLocation(location, breadcrumbMap, props);
  }

  return [];
}; // use breadcrumbRender to change routes

var getBreadcrumbProps = function getBreadcrumbProps(props) {
  var breadcrumbRender = props.breadcrumbRender,
      propsItemRender = props.itemRender;
  var routesArray = genBreadcrumbProps(props);
  var itemRender = propsItemRender || getBreadcrumbProps_defaultItemRender;
  var routes = routesArray; // if routes.length =1, don't show it

  if (breadcrumbRender) {
    routes = breadcrumbRender(routes) || [];
  }

  if (routes && routes.length < 2 || breadcrumbRender === false) {
    routes = undefined;
  }

  return {
    routes: routes,
    itemRender: itemRender
  };
};
// EXTERNAL MODULE: ./node_modules/@ant-design/pro-layout/es/utils/getMenuData.js
var getMenuData = __webpack_require__("Qv07");

// EXTERNAL MODULE: ./node_modules/antd/es/spin/style/index.js
var spin_style = __webpack_require__("T2oS");

// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js
var es_spin = __webpack_require__("W9HT");

// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/PageLoading/index.js


var PageLoading_excluded = ["isLoading", "pastDelay", "timedOut", "error", "retry"];

function PageLoading_extends() { PageLoading_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return PageLoading_extends.apply(this, arguments); }

function PageLoading_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = PageLoading_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function PageLoading_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var PageLoading_PageLoading = function PageLoading(_ref) {
  var isLoading = _ref.isLoading,
      pastDelay = _ref.pastDelay,
      timedOut = _ref.timedOut,
      error = _ref.error,
      retry = _ref.retry,
      reset = PageLoading_objectWithoutProperties(_ref, PageLoading_excluded);

  return /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      paddingTop: 100,
      textAlign: 'center'
    }
  }, /*#__PURE__*/react_default.a.createElement(es_spin["a" /* default */], PageLoading_extends({
    size: "large"
  }, reset)));
};

/* harmony default export */ var components_PageLoading = (PageLoading_PageLoading);
// EXTERNAL MODULE: ./node_modules/rc-pagination/es/locale/zh_CN.js
var locale_zh_CN = __webpack_require__("N2Kk");

// CONCATENATED MODULE: ./node_modules/rc-picker/es/locale/zh_CN.js
var zh_CN_locale = {
  locale: 'zh_CN',
  today: '\u4ECA\u5929',
  now: '\u6B64\u523B',
  backToToday: '\u8FD4\u56DE\u4ECA\u5929',
  ok: '\u786E\u5B9A',
  timeSelect: '\u9009\u62E9\u65F6\u95F4',
  dateSelect: '\u9009\u62E9\u65E5\u671F',
  weekSelect: '\u9009\u62E9\u5468',
  clear: '\u6E05\u9664',
  month: '\u6708',
  year: '\u5E74',
  previousMonth: '\u4E0A\u4E2A\u6708 (\u7FFB\u9875\u4E0A\u952E)',
  nextMonth: '\u4E0B\u4E2A\u6708 (\u7FFB\u9875\u4E0B\u952E)',
  monthSelect: '\u9009\u62E9\u6708\u4EFD',
  yearSelect: '\u9009\u62E9\u5E74\u4EFD',
  decadeSelect: '\u9009\u62E9\u5E74\u4EE3',
  yearFormat: 'YYYY\u5E74',
  dayFormat: 'D\u65E5',
  dateFormat: 'YYYY\u5E74M\u6708D\u65E5',
  dateTimeFormat: 'YYYY\u5E74M\u6708D\u65E5 HH\u65F6mm\u5206ss\u79D2',
  previousYear: '\u4E0A\u4E00\u5E74 (Control\u952E\u52A0\u5DE6\u65B9\u5411\u952E)',
  nextYear: '\u4E0B\u4E00\u5E74 (Control\u952E\u52A0\u53F3\u65B9\u5411\u952E)',
  previousDecade: '\u4E0A\u4E00\u5E74\u4EE3',
  nextDecade: '\u4E0B\u4E00\u5E74\u4EE3',
  previousCentury: '\u4E0A\u4E00\u4E16\u7EAA',
  nextCentury: '\u4E0B\u4E00\u4E16\u7EAA'
};
/* harmony default export */ var es_locale_zh_CN = (zh_CN_locale);
// CONCATENATED MODULE: ./node_modules/antd/es/time-picker/locale/zh_CN.js
var locale_zh_CN_locale = {
  placeholder: '\u8BF7\u9009\u62E9\u65F6\u95F4',
  rangePlaceholder: ['\u5F00\u59CB\u65F6\u95F4', '\u7ED3\u675F\u65F6\u95F4']
};
/* harmony default export */ var time_picker_locale_zh_CN = (locale_zh_CN_locale);
// CONCATENATED MODULE: ./node_modules/antd/es/date-picker/locale/zh_CN.js


 // \u7EDF\u4E00\u5408\u5E76\u4E3A\u5B8C\u6574\u7684 Locale

var date_picker_locale_zh_CN_locale = {
  lang: Object(esm_extends["a" /* default */])({
    placeholder: '\u8BF7\u9009\u62E9\u65E5\u671F',
    yearPlaceholder: '\u8BF7\u9009\u62E9\u5E74\u4EFD',
    quarterPlaceholder: '\u8BF7\u9009\u62E9\u5B63\u5EA6',
    monthPlaceholder: '\u8BF7\u9009\u62E9\u6708\u4EFD',
    weekPlaceholder: '\u8BF7\u9009\u62E9\u5468',
    rangePlaceholder: ['\u5F00\u59CB\u65E5\u671F', '\u7ED3\u675F\u65E5\u671F'],
    rangeYearPlaceholder: ['\u5F00\u59CB\u5E74\u4EFD', '\u7ED3\u675F\u5E74\u4EFD'],
    rangeMonthPlaceholder: ['\u5F00\u59CB\u6708\u4EFD', '\u7ED3\u675F\u6708\u4EFD'],
    rangeWeekPlaceholder: ['\u5F00\u59CB\u5468', '\u7ED3\u675F\u5468']
  }, es_locale_zh_CN),
  timePickerLocale: Object(esm_extends["a" /* default */])({}, time_picker_locale_zh_CN)
}; // should add whitespace between char in Button

date_picker_locale_zh_CN_locale.lang.ok = '\u786E \u5B9A'; // All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

/* harmony default export */ var date_picker_locale_zh_CN = (date_picker_locale_zh_CN_locale);
// CONCATENATED MODULE: ./node_modules/antd/es/calendar/locale/zh_CN.js

/* harmony default export */ var calendar_locale_zh_CN = (date_picker_locale_zh_CN);
// CONCATENATED MODULE: ./node_modules/antd/es/locale/zh_CN.js
/* eslint-disable no-template-curly-in-string */




var typeTemplate = '\${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684\${type}';
var localeValues = {
  locale: 'zh-cn',
  Pagination: locale_zh_CN["a" /* default */],
  DatePicker: date_picker_locale_zh_CN,
  TimePicker: time_picker_locale_zh_CN,
  Calendar: calendar_locale_zh_CN,
  // locales for all components
  global: {
    placeholder: '\u8BF7\u9009\u62E9'
  },
  Table: {
    filterTitle: '\u7B5B\u9009',
    filterConfirm: '\u786E\u5B9A',
    filterReset: '\u91CD\u7F6E',
    filterEmptyText: '\u65E0\u7B5B\u9009\u9879',
    selectAll: '\u5168\u9009\u5F53\u9875',
    selectInvert: '\u53CD\u9009\u5F53\u9875',
    selectNone: '\u6E05\u7A7A\u6240\u6709',
    selectionAll: '\u5168\u9009\u6240\u6709',
    sortTitle: '\u6392\u5E8F',
    expand: '\u5C55\u5F00\u884C',
    collapse: '\u5173\u95ED\u884C',
    triggerDesc: '\u70B9\u51FB\u964D\u5E8F',
    triggerAsc: '\u70B9\u51FB\u5347\u5E8F',
    cancelSort: '\u53D6\u6D88\u6392\u5E8F'
  },
  Modal: {
    okText: '\u786E\u5B9A',
    cancelText: '\u53D6\u6D88',
    justOkText: '\u77E5\u9053\u4E86'
  },
  Popconfirm: {
    cancelText: '\u53D6\u6D88',
    okText: '\u786E\u5B9A'
  },
  Transfer: {
    searchPlaceholder: '\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9',
    itemUnit: '\u9879',
    itemsUnit: '\u9879',
    remove: '\u5220\u9664',
    selectCurrent: '\u5168\u9009\u5F53\u9875',
    removeCurrent: '\u5220\u9664\u5F53\u9875',
    selectAll: '\u5168\u9009\u6240\u6709',
    removeAll: '\u5220\u9664\u5168\u90E8',
    selectInvert: '\u53CD\u9009\u5F53\u9875'
  },
  Upload: {
    uploading: '\u6587\u4EF6\u4E0A\u4F20\u4E2D',
    removeFile: '\u5220\u9664\u6587\u4EF6',
    uploadError: '\u4E0A\u4F20\u9519\u8BEF',
    previewFile: '\u9884\u89C8\u6587\u4EF6',
    downloadFile: '\u4E0B\u8F7D\u6587\u4EF6'
  },
  Empty: {
    description: '\u6682\u65E0\u6570\u636E'
  },
  Icon: {
    icon: '\u56FE\u6807'
  },
  Text: {
    edit: '\u7F16\u8F91',
    copy: '\u590D\u5236',
    copied: '\u590D\u5236\u6210\u529F',
    expand: '\u5C55\u5F00'
  },
  PageHeader: {
    back: '\u8FD4\u56DE'
  },
  Form: {
    optional: '\uFF08\u53EF\u9009\uFF09',
    defaultValidateMessages: {
      "default": '\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF\${label}',
      required: '\u8BF7\u8F93\u5165\${label}',
      "enum": '\${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[\${enum}]',
      whitespace: '\${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26',
      date: {
        format: '\${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548',
        parse: '\${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F',
        invalid: '\${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F'
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        "boolean": typeTemplate,
        integer: typeTemplate,
        "float": typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: '\${label}\u987B\u4E3A\${len}\u4E2A\u5B57\u7B26',
        min: '\${label}\u6700\u5C11\${min}\u4E2A\u5B57\u7B26',
        max: '\${label}\u6700\u591A\${max}\u4E2A\u5B57\u7B26',
        range: '\${label}\u987B\u5728\${min}-\${max}\u5B57\u7B26\u4E4B\u95F4'
      },
      number: {
        len: '\${label}\u5FC5\u987B\u7B49\u4E8E\${len}',
        min: '\${label}\u6700\u5C0F\u503C\u4E3A\${min}',
        max: '\${label}\u6700\u5927\u503C\u4E3A\${max}',
        range: '\${label}\u987B\u5728\${min}-\${max}\u4E4B\u95F4'
      },
      array: {
        len: '\u987B\u4E3A\${len}\u4E2A\${label}',
        min: '\u6700\u5C11\${min}\u4E2A\${label}',
        max: '\u6700\u591A\${max}\u4E2A\${label}',
        range: '\${label}\u6570\u91CF\u987B\u5728\${min}-\${max}\u4E4B\u95F4'
      },
      pattern: {
        mismatch: '\${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D\${pattern}'
      }
    }
  },
  Image: {
    preview: '\u9884\u89C8'
  }
};
/* harmony default export */ var antd_es_locale_zh_CN = (localeValues);
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-provider/es/locale/ar_EG.js
/* harmony default export */ var ar_EG = ({
  moneySymbol: '$',
  form: {
    lightFilter: {
      more: '\u0627\u0644\u0645\u0632\u064A\u062F',
      clear: '\u0646\u0638\u0641',
      confirm: '\u062A\u0623\u0643\u064A\u062F',
      itemUnit: '\u0639\u0646\u0627\u0635\u0631'
    }
  },
  tableForm: {
    search: '\u0627\u0628\u062D\u062B',
    reset: '\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646',
    submit: '\u0627\u0631\u0633\u0627\u0644',
    collapsed: '\u0645\u064F\u0642\u0644\u0635',
    expand: '\u0645\u064F\u0648\u0633\u0639',
    inputPlaceholder: '\u0627\u0644\u0631\u062C\u0627\u0621 \u0627\u0644\u0625\u062F\u062E\u0627\u0644',
    selectPlaceholder: '\u0627\u0644\u0631\u062C\u0627\u0621 \u0627\u0644\u0625\u062E\u062A\u064A\u0627\u0631'
  },
  alert: {
    clear: '\u0646\u0638\u0641',
    selected: '\u0645\u062D\u062F\u062F',
    item: '\u0639\u0646\u0635\u0631'
  },
  pagination: {
    total: {
      range: ' ',
      total: '\u0645\u0646',
      item: '\u0639\u0646\u0627\u0635\u0631'
    }
  },
  tableToolBar: {
    leftPin: '\u062B\u0628\u062A \u0639\u0644\u0649 \u0627\u0644\u064A\u0633\u0627\u0631',
    rightPin: '\u062B\u0628\u062A \u0639\u0644\u0649 \u0627\u0644\u064A\u0645\u064A\u0646',
    noPin: '\u0627\u0644\u063A\u0627\u0621 \u0627\u0644\u062A\u062B\u0628\u064A\u062A',
    leftFixedTitle: '\u0644\u0635\u0642 \u0639\u0644\u0649 \u0627\u0644\u064A\u0633\u0627\u0631',
    rightFixedTitle: '\u0644\u0635\u0642 \u0639\u0644\u0649 \u0627\u0644\u064A\u0645\u064A\u0646',
    noFixedTitle: '\u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0625\u0644\u0635\u0627\u0642',
    reset: '\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646',
    columnDisplay: '\u0627\u0644\u0623\u0639\u0645\u062F\u0629 \u0627\u0644\u0645\u0639\u0631\u0648\u0636\u0629',
    columnSetting: '\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A',
    fullScreen: '\u0648\u0636\u0639 \u0643\u0627\u0645\u0644 \u0627\u0644\u0634\u0627\u0634\u0629',
    exitFullScreen: '\u0627\u0644\u062E\u0631\u0648\u062C \u0645\u0646 \u0648\u0636\u0639 \u0643\u0627\u0645\u0644 \u0627\u0644\u0634\u0627\u0634\u0629',
    reload: '\u062A\u062D\u062F\u064A\u062B',
    density: '\u0627\u0644\u0643\u062B\u0627\u0641\u0629',
    densityDefault: '\u0627\u0641\u062A\u0631\u0627\u0636\u064A',
    densityLarger: '\u0623\u0643\u0628\u0631',
    densityMiddle: '\u0648\u0633\u0637',
    densitySmall: '\u0645\u062F\u0645\u062C'
  },
  stepsForm: {
    next: '\u0627\u0644\u062A\u0627\u0644\u064A',
    prev: '\u0627\u0644\u0633\u0627\u0628\u0642'
  }
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-provider/es/locale/zh_CN.js
/* harmony default export */ var pro_provider_es_locale_zh_CN = ({
  moneySymbol: '\uFFE5',
  form: {
    lightFilter: {
      more: '\u66F4\u591A\u7B5B\u9009',
      clear: '\u6E05\u9664',
      confirm: '\u786E\u8BA4',
      itemUnit: '\u9879'
    }
  },
  tableForm: {
    search: '\u67E5\u8BE2',
    reset: '\u91CD\u7F6E',
    submit: '\u63D0\u4EA4',
    collapsed: '\u5C55\u5F00',
    expand: '\u6536\u8D77',
    inputPlaceholder: '\u8BF7\u8F93\u5165',
    selectPlaceholder: '\u8BF7\u9009\u62E9'
  },
  alert: {
    clear: '\u53D6\u6D88\u9009\u62E9',
    selected: '\u5DF2\u9009\u62E9',
    item: '\u9879'
  },
  pagination: {
    total: {
      range: '\u7B2C',
      total: '\u6761/\u603B\u5171',
      item: '\u6761'
    }
  },
  tableToolBar: {
    leftPin: '\u56FA\u5B9A\u5728\u5217\u9996',
    rightPin: '\u56FA\u5B9A\u5728\u5217\u5C3E',
    noPin: '\u4E0D\u56FA\u5B9A',
    leftFixedTitle: '\u56FA\u5B9A\u5728\u5DE6\u4FA7',
    rightFixedTitle: '\u56FA\u5B9A\u5728\u53F3\u4FA7',
    noFixedTitle: '\u4E0D\u56FA\u5B9A',
    reset: '\u91CD\u7F6E',
    columnDisplay: '\u5217\u5C55\u793A',
    columnSetting: '\u5217\u8BBE\u7F6E',
    fullScreen: '\u5168\u5C4F',
    exitFullScreen: '\u9000\u51FA\u5168\u5C4F',
    reload: '\u5237\u65B0',
    density: '\u5BC6\u5EA6',
    densityDefault: '\u6B63\u5E38',
    densityLarger: '\u9ED8\u8BA4',
    densityMiddle: '\u4E2D\u7B49',
    densitySmall: '\u7D27\u51D1'
  },
  editableTable: {
    action: {
      save: '\u4FDD\u5B58',
      cancel: '\u53D6\u6D88',
      delete: '\u5220\u9664'
    }
  },
  switch: {
    open: '\u6253\u5F00',
    close: '\u5173\u95ED'
  }
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-provider/es/locale/en_US.js
/* harmony default export */ var locale_en_US = ({
  moneySymbol: '$',
  form: {
    lightFilter: {
      more: 'More',
      clear: 'Clear',
      confirm: 'Confirm',
      itemUnit: 'Items'
    }
  },
  tableForm: {
    search: 'Query',
    reset: 'Reset',
    submit: 'Submit',
    collapsed: 'Expand',
    expand: 'Collapse',
    inputPlaceholder: 'Please enter',
    selectPlaceholder: 'Please select'
  },
  alert: {
    clear: 'Clear',
    selected: 'Selected',
    item: 'Item'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'of',
      item: 'items'
    }
  },
  tableToolBar: {
    leftPin: 'Pin to left',
    rightPin: 'Pin to right',
    noPin: 'Unpinned',
    leftFixedTitle: 'Fixed the left',
    rightFixedTitle: 'Fixed the right',
    noFixedTitle: 'Not Fixed',
    reset: 'Reset',
    columnDisplay: 'Column Display',
    columnSetting: 'Settings',
    fullScreen: 'Full Screen',
    exitFullScreen: 'Exit Full Screen',
    reload: 'Refresh',
    density: 'Density',
    densityDefault: 'Default',
    densityLarger: 'Larger',
    densityMiddle: 'Middle',
    densitySmall: 'Compact'
  },
  stepsForm: {
    next: 'Next',
    prev: 'Previous',
    submit: 'Finish'
  },
  editableTable: {
    action: {
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete'
    }
  },
  switch: {
    open: 'open',
    close: 'close'
  }
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-provider/es/locale/vi_VN.js
/* harmony default export */ var vi_VN = ({
  moneySymbol: '\u20AB',
  tableForm: {
    search: 'T\xECm ki\u1EBFm',
    reset: 'L\xE0m l\u1EA1i',
    submit: 'G\u1EEDi \u0111i',
    collapsed: 'M\u1EDF r\u1ED9ng',
    expand: 'Thu g\u1ECDn',
    inputPlaceholder: 'nh\u1EADp d\u1EEF li\u1EC7u',
    selectPlaceholder: 'Vui l\xF2ng ch\u1ECDn'
  },
  alert: {
    clear: 'X\xF3a',
    selected: '\u0111\xE3 ch\u1ECDn',
    item: 'm\u1EE5c'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'tr\xEAn',
      item: 'm\u1EB7t h\xE0ng'
    }
  },
  tableToolBar: {
    leftPin: 'Ghim tr\xE1i',
    rightPin: 'Ghim ph\u1EA3i',
    noPin: 'B\u1ECF ghim',
    leftFixedTitle: 'C\u1ED1 \u0111\u1ECBnh tr\xE1i',
    rightFixedTitle: 'C\u1ED1 \u0111\u1ECBnh ph\u1EA3i',
    noFixedTitle: 'Ch\u01B0a c\u1ED1 \u0111\u1ECBnh',
    reset: 'L\xE0m l\u1EA1i',
    columnDisplay: 'C\u1ED9t hi\u1EC3n th\u1ECB',
    columnSetting: 'C\u1EA5u h\xECnh',
    fullScreen: 'Ch\u1EBF \u0111\u1ED9 to\xE0n m\xE0n h\xECnh',
    exitFullScreen: 'Tho\xE1t ch\u1EBF \u0111\u1ED9 to\xE0n m\xE0n h\xECnh',
    reload: 'L\xE0m m\u1EDBi',
    density: 'M\u1EADt \u0111\u1ED9 hi\u1EC3n th\u1ECB',
    densityDefault: 'M\u1EB7c \u0111\u1ECBnh',
    densityLarger: 'M\u1EB7c \u0111\u1ECBnh',
    densityMiddle: 'Trung b\xECnh',
    densitySmall: 'Ch\u1EADt'
  }
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-provider/es/locale/it_IT.js
/* harmony default export */ var locale_it_IT = ({
  moneySymbol: '\u20AC',
  tableForm: {
    search: 'Filtra',
    reset: 'Pulisci',
    submit: 'Invia',
    collapsed: 'Espandi',
    expand: 'Contrai',
    inputPlaceholder: 'Digita',
    selectPlaceholder: 'Seleziona'
  },
  alert: {
    clear: 'Rimuovi',
    selected: 'Selezionati',
    item: 'elementi'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'di',
      item: 'elementi'
    }
  },
  tableToolBar: {
    leftPin: 'Fissa a sinistra',
    rightPin: 'Fissa a destra',
    noPin: 'Ripristina posizione',
    leftFixedTitle: 'Fissato a sinistra',
    rightFixedTitle: 'Fissato a destra',
    noFixedTitle: 'Non fissato',
    reset: 'Ripristina',
    columnDisplay: 'Disposizione colonne',
    columnSetting: 'Impostazioni',
    fullScreen: 'Modalit\xE0 schermo intero',
    exitFullScreen: 'Esci da modalit\xE0 schermo intero',
    reload: 'Ricarica',
    density: 'Grandezza tabella',
    densityLarger: 'Grande',
    densityMiddle: 'Media',
    densitySmall: 'Compatta'
  }
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-provider/es/locale/es_ES.js
/* harmony default export */ var es_ES = ({
  moneySymbol: '\u20AC',
  tableForm: {
    search: 'Buscar',
    reset: 'Limpiar',
    submit: 'Submit',
    collapsed: 'Expandir',
    expand: 'Colapsar',
    inputPlaceholder: 'Ingrese valor',
    selectPlaceholder: 'Seleccione valor'
  },
  alert: {
    clear: 'Limpiar',
    selected: 'Seleccionado',
    item: 'Articulo'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'de',
      item: 'art\xEDculos'
    }
  },
  tableToolBar: {
    leftPin: 'Pin a la izquierda',
    rightPin: 'Pin a la derecha',
    noPin: 'Sin Pin',
    leftFixedTitle: 'Fijado a la izquierda',
    rightFixedTitle: 'Fijado a la derecha',
    noFixedTitle: 'Sin Fijar',
    reset: 'Reiniciar',
    columnDisplay: 'Mostrar Columna',
    columnSetting: 'Configuraci\xF3n',
    fullScreen: 'Pantalla Completa',
    exitFullScreen: 'Salir Pantalla Completa',
    reload: 'Refrescar',
    density: 'Densidad',
    densityDefault: 'Por Defecto',
    densityLarger: 'Largo',
    densityMiddle: 'Medio',
    densitySmall: 'Compacto'
  },
  stepsForm: {
    next: 'Siguiente',
    prev: 'Anterior',
    submit: 'Finalizar'
  }
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-provider/es/locale/ja_JP.js
/* harmony default export */ var ja_JP = ({
  moneySymbol: '\xA5',
  tableForm: {
    search: '\u691C\u7D22',
    reset: '\u30EA\u30BB\u30C3\u30C8',
    submit: '\u63D0\u4EA4',
    collapsed: '\u5C55\u958B',
    expand: '\u53CE\u7D0D',
    inputPlaceholder: '\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044',
    selectPlaceholder: '\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044'
  },
  alert: {
    clear: '\u30AF\u30EA\u30A2',
    selected: '\u9078\u629E\u3057\u305F',
    item: '\u9805\u76EE'
  },
  pagination: {
    total: {
      range: '\u8A18\u4E8B',
      total: '/\u5408\u8A08',
      item: ' '
    }
  },
  tableToolBar: {
    leftPin: '\u5DE6\u306B\u56FA\u5B9A',
    rightPin: '\u53F3\u306B\u56FA\u5B9A',
    noPin: '\u30AD\u30E3\u30F3\u30BB\u30EB',
    leftFixedTitle: '\u5DE6\u306B\u56FA\u5B9A\u3055\u308C\u305F\u9805\u76EE',
    rightFixedTitle: '\u53F3\u306B\u56FA\u5B9A\u3055\u308C\u305F\u9805\u76EE',
    noFixedTitle: '\u56FA\u5B9A\u3055\u308C\u3066\u306A\u3044\u9805\u76EE',
    reset: '\u30EA\u30BB\u30C3\u30C8',
    columnDisplay: '\u8868\u793A\u5217',
    columnSetting: '\u5217\u8868\u793A\u8A2D\u5B9A',
    fullScreen: '\u30D5\u30EB\u30B9\u30AF\u30EA\u30FC\u30F3',
    exitFullScreen: '\u7D42\u4E86',
    reload: '\u66F4\u65B0',
    density: '\u884C\u9AD8',
    densityLarger: '\u9ED8\u8BA4',
    densityMiddle: '\u4E2D',
    densitySmall: '\u5C0F'
  }
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-provider/es/locale/ru_RU.js
/* harmony default export */ var ru_RU = ({
  moneySymbol: '\u20BD',
  form: {
    lightFilter: {
      more: '\u0415\u0449\u0435',
      clear: '\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C',
      confirm: '\u041E\u041A',
      itemUnit: '\u041F\u043E\u0437\u0438\u0446\u0438\u0438'
    }
  },
  tableForm: {
    search: '\u041D\u0430\u0439\u0442\u0438',
    reset: '\u0421\u0431\u0440\u043E\u0441',
    submit: '\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C',
    collapsed: '\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C',
    expand: '\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C',
    inputPlaceholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435',
    selectPlaceholder: '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435'
  },
  alert: {
    clear: '\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C',
    selected: '\u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439',
    item: '\u043F\u0440\u0435\u0434\u043C\u0435\u0442'
  },
  pagination: {
    total: {
      range: ' ',
      total: '\u0438\u0437',
      item: '\u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u0432'
    }
  },
  tableToolBar: {
    leftPin: '\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0441\u043B\u0435\u0432\u0430',
    rightPin: '\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0441\u043F\u0440\u0430\u0432\u0430',
    noPin: '\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C',
    leftFixedTitle: '\u0417\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u043E \u0441\u043B\u0435\u0432\u0430',
    rightFixedTitle: '\u0417\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u043E \u0441\u043F\u0440\u0430\u0432\u0430',
    noFixedTitle: '\u041D\u0435 \u0437\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u043E',
    reset: '\u0421\u0431\u0440\u043E\u0441',
    columnDisplay: '\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0441\u0442\u043E\u043B\u0431\u0446\u0430',
    columnSetting: '\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438',
    fullScreen: '\u041F\u043E\u043B\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D',
    exitFullScreen: '\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u043F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0440\u0435\u0436\u0438\u043C\u0430',
    reload: '\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C',
    density: '\u0420\u0430\u0437\u043C\u0435\u0440',
    densityDefault: '\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E',
    densityLarger: '\u0411\u043E\u043B\u044C\u0448\u043E\u0439',
    densityMiddle: '\u0421\u0440\u0435\u0434\u043D\u0438\u0439',
    densitySmall: '\u0421\u0436\u0430\u0442\u044B\u0439'
  },
  stepsForm: {
    next: '\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439',
    prev: '\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439',
    submit: '\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C'
  },
  editableTable: {
    action: {
      save: '\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C',
      cancel: '\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C',
      delete: '\u0423\u0434\u0430\u043B\u0438\u0442\u044C'
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-provider/es/locale/sr_RS.js
/* harmony default export */ var sr_RS = ({
  moneySymbol: 'RSD',
  form: {
    lightFilter: {
      more: 'Vi\u0161e',
      clear: 'O\u010Disti',
      confirm: 'Potvrdi',
      itemUnit: 'Stavke'
    }
  },
  tableForm: {
    search: 'Prona\u0111i',
    reset: 'Resetuj',
    submit: 'Po\u0161alji',
    collapsed: 'Pro\u0161iri',
    expand: 'Skupi',
    inputPlaceholder: 'Molimo unesite',
    selectPlaceholder: 'Molimo odaberite'
  },
  alert: {
    clear: 'O\u010Disti',
    selected: 'Odabrano',
    item: 'Stavka'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'od',
      item: 'stavki'
    }
  },
  tableToolBar: {
    leftPin: 'Zaka\u010Di levo',
    rightPin: 'Zaka\u010Di desno',
    noPin: 'Nije zaka\u010Deno',
    leftFixedTitle: 'Fiksirano levo',
    rightFixedTitle: 'Fiksirano desno',
    noFixedTitle: 'Nije fiksirano',
    reset: 'Resetuj',
    columnDisplay: 'Prikaz kolona',
    columnSetting: 'Pode\u0161avanja',
    fullScreen: 'Pun ekran',
    exitFullScreen: 'Zatvori pun ekran',
    reload: 'Osve\u017Ei',
    density: 'Veli\u010Dina',
    densityDefault: 'Podrazumevana',
    densityLarger: 'Ve\u0107a',
    densityMiddle: 'Srednja',
    densitySmall: 'Kompaktna'
  },
  stepsForm: {
    next: 'Dalje',
    prev: 'Nazad',
    submit: 'Gotovo'
  },
  editableTable: {
    action: {
      save: 'Sa\u010Duvaj',
      cancel: 'Poni\u0161ti',
      delete: 'Obri\u0161i'
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-provider/es/locale/ms_MY.js
/* harmony default export */ var ms_MY = ({
  moneySymbol: 'RM',
  tableForm: {
    search: 'Cari',
    reset: 'Menetapkan semula',
    submit: 'Hantar',
    collapsed: 'Kembang',
    expand: 'Kuncup',
    inputPlaceholder: 'Sila masuk',
    selectPlaceholder: 'Sila pilih'
  },
  alert: {
    clear: 'Padam',
    selected: 'Dipilih',
    item: 'Item'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'daripada',
      item: 'item'
    }
  },
  tableToolBar: {
    leftPin: 'Pin ke kiri',
    rightPin: 'Pin ke kanan',
    noPin: 'Tidak pin',
    leftFixedTitle: 'Tetap ke kiri',
    rightFixedTitle: 'Tetap ke kanan',
    noFixedTitle: 'Tidak Tetap',
    reset: 'Menetapkan semula',
    columnDisplay: 'Lajur',
    columnSetting: 'Settings',
    fullScreen: 'Full Screen',
    exitFullScreen: 'Keluar Full Screen',
    reload: 'Muat Semula',
    density: 'Densiti',
    densityDefault: 'Biasa',
    densityLarger: 'Besar',
    densityMiddle: 'Tengah',
    densitySmall: 'Kecil'
  }
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-provider/es/locale/zh_TW.js
/* harmony default export */ var locale_zh_TW = ({
  moneySymbol: '\uFFE5',
  tableForm: {
    search: '\u67E5\u8A62',
    reset: '\u91CD\u7F6E',
    submit: '\u63D0\u4EA4',
    collapsed: '\u5C55\u958B',
    expand: '\u6536\u8D77',
    inputPlaceholder: '\u8ACB\u8F38\u5165',
    selectPlaceholder: '\u8ACB\u9078\u64C7'
  },
  alert: {
    clear: '\u53D6\u6D88\u9078\u64C7',
    selected: '\u5DF2\u9078\u64C7',
    item: '\u9805'
  },
  pagination: {
    total: {
      range: '\u7B2C',
      total: '\u689D/\u7E3D\u5171',
      item: '\u689D'
    }
  },
  tableToolBar: {
    leftPin: '\u56FA\u5B9A\u5230\u5DE6\u908A',
    rightPin: '\u56FA\u5B9A\u5230\u53F3\u908A',
    noPin: '\u4E0D\u56FA\u5B9A',
    leftFixedTitle: '\u56FA\u5B9A\u5728\u5DE6\u5074',
    rightFixedTitle: '\u56FA\u5B9A\u5728\u53F3\u5074',
    noFixedTitle: '\u4E0D\u56FA\u5B9A',
    reset: '\u91CD\u7F6E',
    columnDisplay: '\u5217\u5C55\u793A',
    columnSetting: '\u5217\u8A2D\u7F6E',
    fullScreen: '\u5168\u5C4F',
    exitFullScreen: '\u9000\u51FA\u5168\u5C4F',
    reload: '\u5237\u65B0',
    density: '\u5BC6\u5EA6',
    densityDefault: '\u6B63\u5E38',
    densityLarger: '\u9ED8\u8A8D',
    densityMiddle: '\u4E2D\u7B49',
    densitySmall: '\u7DCA\u6E4A'
  }
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-provider/es/locale/fr_FR.js
/* harmony default export */ var fr_FR = ({
  moneySymbol: '\u20AC',
  form: {
    lightFilter: {
      more: 'Plus',
      clear: 'Effacer',
      confirm: 'Confirmer',
      itemUnit: 'Items'
    }
  },
  tableForm: {
    search: 'Rechercher',
    reset: 'R\xE9initialiser',
    submit: 'Envoyer',
    collapsed: 'Agrandir',
    expand: 'R\xE9duire',
    inputPlaceholder: 'Entrer une valeur',
    selectPlaceholder: 'S\xE9lectionner une valeur'
  },
  alert: {
    clear: 'R\xE9initialiser',
    selected: 'S\xE9lectionn\xE9',
    item: 'Item'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'sur',
      item: '\xE9l\xE9ments'
    }
  },
  tableToolBar: {
    leftPin: '\xC9pingler \xE0 gauche',
    rightPin: '\xC9pingler \xE0 gauche',
    noPin: 'Sans \xE9pingle',
    leftFixedTitle: 'Fixer \xE0 gauche',
    rightFixedTitle: 'Fixer \xE0 droite',
    noFixedTitle: 'Non fix\xE9',
    reset: 'R\xE9initialiser',
    columnDisplay: 'Affichage colonne',
    columnSetting: 'R\xE9glages',
    fullScreen: 'Plein \xE9cran',
    exitFullScreen: 'Quitter Plein \xE9cran',
    reload: 'Rafraichir',
    density: 'Densit\xE9',
    densityDefault: 'Par d\xE9faut',
    densityLarger: 'Larger',
    densityMiddle: 'Moyenne',
    densitySmall: 'Compacte'
  },
  stepsForm: {
    next: 'Suivante',
    prev: 'Pr\xE9c\xE9dente',
    submit: 'Finaliser'
  },
  editableTable: {
    action: {
      save: 'Sauvegarder',
      cancel: 'Annuler',
      delete: 'Supprimer'
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-provider/es/locale/pt_BR.js
/* harmony default export */ var pt_BR = ({
  moneySymbol: 'R$',
  form: {
    lightFilter: {
      more: 'Mais',
      clear: 'Limpar',
      confirm: 'Confirmar',
      itemUnit: 'Itens'
    }
  },
  tableForm: {
    search: 'Filtrar',
    reset: 'Limpar',
    submit: 'Confirmar',
    collapsed: 'Expandir',
    expand: 'Colapsar',
    inputPlaceholder: 'Por favor insira',
    selectPlaceholder: 'Por favor selecione'
  },
  alert: {
    clear: 'Limpar',
    selected: 'Selecionado(s)',
    item: 'Item(s)'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'de',
      item: 'items'
    }
  },
  tableToolBar: {
    leftPin: 'Fixar \xE0 esquerda',
    rightPin: 'Fixar \xE0 direita',
    noPin: 'Desfixado',
    leftFixedTitle: 'Fixado \xE0 esquerda',
    rightFixedTitle: 'Fixado \xE0 direita',
    noFixedTitle: 'N\xE3o fixado',
    reset: 'Limpar',
    columnDisplay: 'Mostrar Coluna',
    columnSetting: 'Configura\xE7\xF5es',
    fullScreen: 'Tela Cheia',
    exitFullScreen: 'Sair da Tela Cheia',
    reload: 'Atualizar',
    density: 'Densidade',
    densityDefault: 'Padr\xE3o',
    densityLarger: 'Largo',
    densityMiddle: 'M\xE9dio',
    densitySmall: 'Compacto'
  },
  stepsForm: {
    next: 'Pr\xF3ximo',
    prev: 'Anterior',
    submit: 'Enviar'
  },
  editableTable: {
    action: {
      save: 'Salvar',
      cancel: 'Cancelar',
      delete: 'Apagar'
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-provider/es/locale/ko_KR.js
/* harmony default export */ var ko_KR = ({
  moneySymbol: '\u20A9',
  form: {
    lightFilter: {
      more: '\uB354\uBCF4\uAE30',
      clear: '\uCDE8\uC18C',
      confirm: '\uD655\uC778',
      itemUnit: '\uAC74\uC218'
    }
  },
  tableForm: {
    search: '\uC870\uD68C',
    reset: '\uCD08\uAE30\uD654',
    submit: '\uC81C\uCD9C',
    collapsed: '\uD655\uC7A5',
    expand: '\uB2EB\uAE30',
    inputPlaceholder: '\uC785\uB825\uD574 \uC8FC\uC138\uC694',
    selectPlaceholder: '\uC120\uD0DD\uD574 \uC8FC\uC138\uC694'
  },
  alert: {
    clear: '\uCDE8\uC18C',
    selected: '\uC120\uD0DD',
    item: '\uAC74'
  },
  pagination: {
    total: {
      range: ' ',
      total: '/ \uCD1D',
      item: '\uAC74'
    }
  },
  tableToolBar: {
    leftPin: '\uC67C\uCABD\uC73C\uB85C \uD540',
    rightPin: '\uC624\uB978\uCABD\uC73C\uB85C \uD540',
    noPin: '\uD540 \uC81C\uAC70',
    leftFixedTitle: '\uC67C\uCABD\uC73C\uB85C \uACE0\uC815',
    rightFixedTitle: '\uC624\uB978\uCABD\uC73C\uB85C \uACE0\uC815',
    noFixedTitle: '\uBE44\uACE0\uC815',
    reset: '\uCD08\uAE30\uD654',
    columnDisplay: '\uCEEC\uB7FC \uD45C\uC2DC',
    columnSetting: '\uC124\uC815',
    fullScreen: '\uC804\uCCB4 \uD654\uBA74',
    exitFullScreen: '\uC804\uCCB4 \uD654\uBA74 \uCDE8\uC18C',
    reload: '\uB2E4\uC2DC \uC77D\uAE30',
    density: '\uC5EC\uBC31',
    densityDefault: '\uAE30\uBCF8',
    densityLarger: '\uB9CE\uC740 \uC5EC\uBC31',
    densityMiddle: '\uC911\uAC74 \uC5EC\uBC31',
    densitySmall: '\uC881\uC740 \uC5EC\uBC31'
  },
  stepsForm: {
    next: '\uB2E4\uC74C',
    prev: '\uC774\uC804',
    submit: '\uC885\uB8CC'
  },
  editableTable: {
    action: {
      save: '\uC800\uC7A5',
      cancel: '\uCDE8\uC18C',
      delete: '\uC0AD\uC81C'
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-provider/es/locale/id_ID.js
/* harmony default export */ var id_ID = ({
  moneySymbol: 'RP',
  form: {
    lightFilter: {
      more: 'Lebih',
      clear: 'Hapus',
      confirm: 'Konfirmasi',
      itemUnit: 'Unit'
    }
  },
  tableForm: {
    search: 'Cari',
    reset: 'Atur ulang',
    submit: 'Kirim',
    collapsed: 'Lebih sedikit',
    expand: 'Lebih banyak',
    inputPlaceholder: 'Masukkan pencarian',
    selectPlaceholder: 'Pilih'
  },
  alert: {
    clear: 'Hapus',
    selected: 'Dipilih',
    item: 'Butir'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'Dari',
      item: 'Butir'
    }
  },
  tableToolBar: {
    leftPin: 'Pin kiri',
    rightPin: 'Pin kanan',
    noPin: 'Tidak ada pin',
    leftFixedTitle: 'Rata kiri',
    rightFixedTitle: 'Rata kanan',
    noFixedTitle: 'Tidak tetap',
    reset: 'Atur ulang',
    columnDisplay: 'Tampilan kolom',
    columnSetting: 'Pengaturan',
    fullScreen: 'Layar penuh',
    exitFullScreen: 'Keluar layar penuh',
    reload: 'Atur ulang',
    density: 'Kerapatan',
    densityDefault: 'Standar',
    densityLarger: 'Lebih besar',
    densityMiddle: 'Sedang',
    densitySmall: 'Rapat'
  },
  stepsForm: {
    next: 'Selanjutnya',
    prev: 'Sebelumnya',
    submit: 'Selesai'
  }
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-provider/es/locale/de_DE.js
/* harmony default export */ var de_DE = ({
  moneySymbol: '\u20AC',
  form: {
    lightFilter: {
      more: 'Mehr',
      clear: 'Zur\xFCcksetzen',
      confirm: 'Best\xE4tigen',
      itemUnit: 'Eintr\xE4ge'
    }
  },
  tableForm: {
    search: 'Suchen',
    reset: 'Zur\xFCcksetzen',
    submit: 'Absenden',
    collapsed: 'Zeige mehr',
    expand: 'Zeige weniger',
    inputPlaceholder: 'Bitte eingeben',
    selectPlaceholder: 'Bitte ausw\xE4hlen'
  },
  alert: {
    clear: 'Zur\xFCcksetzen',
    selected: 'Ausgew\xE4hlt',
    item: 'Eintrag'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'von',
      item: 'Eintr\xE4gen'
    }
  },
  tableToolBar: {
    leftPin: 'Links anheften',
    rightPin: 'Rechts anheften',
    noPin: 'Nicht angeheftet',
    leftFixedTitle: 'Links fixiert',
    rightFixedTitle: 'Rechts fixiert',
    noFixedTitle: 'Nicht fixiert',
    reset: 'Zur\xFCcksetzen',
    columnDisplay: 'Angezeigte Reihen',
    columnSetting: 'Einstellungen',
    fullScreen: 'Vollbild',
    exitFullScreen: 'Vollbild verlassen',
    reload: 'Aktualisieren',
    density: 'Abstand',
    densityDefault: 'Standard',
    densityLarger: 'Gr\xF6\xDFer',
    densityMiddle: 'Mittel',
    densitySmall: 'Kompakt'
  },
  stepsForm: {
    next: 'Weiter',
    prev: 'Zur\xFCck',
    submit: 'Abschlie\xDFen'
  }
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-provider/es/locale/fa_IR.js
/* harmony default export */ var fa_IR = ({
  moneySymbol: '\u062A\u0648\u0645\u0627\u0646',
  form: {
    lightFilter: {
      more: '\u0628\u06CC\u0634\u062A\u0631',
      clear: '\u067E\u0627\u06A9 \u06A9\u0631\u062F\u0646',
      confirm: '\u062A\u0627\u06CC\u06CC\u062F',
      itemUnit: '\u0645\u0648\u0631\u062F'
    }
  },
  tableForm: {
    search: '\u062C\u0633\u062A\u062C\u0648',
    reset: '\u0628\u0627\u0632\u0646\u0634\u0627\u0646\u06CC',
    submit: '\u062A\u0627\u06CC\u06CC\u062F',
    collapsed: '\u0646\u0645\u0627\u06CC\u0634 \u0628\u06CC\u0634\u062A\u0631',
    expand: '\u0646\u0645\u0627\u06CC\u0634 \u06A9\u0645\u062A\u0631',
    inputPlaceholder: '\u067E\u06CC\u062F\u0627 \u06A9\u0646\u06CC\u062F',
    selectPlaceholder: '\u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F'
  },
  alert: {
    clear: '\u067E\u0627\u06A9 \u0633\u0627\u0632\u06CC',
    selected: '\u0627\u0646\u062A\u062E\u0627\u0628',
    item: '\u0645\u0648\u0631\u062F'
  },
  pagination: {
    total: {
      range: ' ',
      total: '\u0627\u0632',
      item: '\u0645\u0648\u0631\u062F'
    }
  },
  tableToolBar: {
    leftPin: '\u0633\u0646\u062C\u0627\u0642 \u0628\u0647 \u0686\u067E',
    rightPin: '\u0633\u0646\u062C\u0627\u0642 \u0628\u0647 \u0631\u0627\u0633\u062A',
    noPin: '\u0633\u0646\u062C\u0627\u0642 \u0646\u0634\u062F\u0647',
    leftFixedTitle: '\u062B\u0627\u0628\u062A \u0634\u062F\u0647 \u062F\u0631 \u0686\u067E',
    rightFixedTitle: '\u062B\u0627\u0628\u062A \u0634\u062F\u0647 \u062F\u0631 \u0631\u0627\u0633\u062A',
    noFixedTitle: '\u0634\u0646\u0627\u0648\u0631',
    reset: '\u0628\u0627\u0632\u0646\u0634\u0627\u0646\u06CC',
    columnDisplay: '\u0646\u0645\u0627\u06CC\u0634 \u0647\u0645\u0647',
    columnSetting: '\u062A\u0646\u0638\u06CC\u0645\u0627\u062A',
    fullScreen: '\u062A\u0645\u0627\u0645 \u0635\u0641\u062D\u0647',
    exitFullScreen: '\u062E\u0631\u0648\u062C \u0627\u0632 \u062D\u0627\u0644\u062A \u062A\u0645\u0627\u0645 \u0635\u0641\u062D\u0647',
    reload: '\u062A\u0627\u0632\u0647 \u0633\u0627\u0632\u06CC',
    density: '\u062A\u0631\u0627\u06A9\u0645',
    densityDefault: '\u067E\u06CC\u0634 \u0641\u0631\u0636',
    densityLarger: '\u0628\u0632\u0631\u06AF',
    densityMiddle: '\u0645\u062A\u0648\u0633\u0637',
    densitySmall: '\u06A9\u0648\u0686\u06A9'
  },
  stepsForm: {
    next: '\u0628\u0639\u062F\u06CC',
    prev: '\u0642\u0628\u0644\u06CC',
    submit: '\u0627\u062A\u0645\u0627\u0645'
  },
  editableTable: {
    action: {
      save: '\u0630\u062E\u06CC\u0631\u0647',
      cancel: '\u0644\u063A\u0648',
      delete: '\u062D\u0630\u0641'
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-provider/es/locale/tr_TR.js
/* harmony default export */ var tr_TR = ({
  moneySymbol: '$',
  form: {
    lightFilter: {
      more: 'Daha Fazla',
      clear: 'Temizle',
      confirm: 'Onayla',
      itemUnit: '\xD6\u011Feler'
    }
  },
  tableForm: {
    search: 'Filtrele',
    reset: 'S\u0131f\u0131rla',
    submit: 'G\xF6nder',
    collapsed: 'Daha fazla',
    expand: 'Daha az',
    inputPlaceholder: 'Filtrelemek i\xE7in bir de\u011Fer girin',
    selectPlaceholder: 'Filtrelemek i\xE7in bir de\u011Fer se\xE7in'
  },
  alert: {
    clear: 'Temizle',
    selected: 'Se\xE7ili',
    item: '\xD6\u011Fe'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'Toplam',
      item: '\xD6\u011Fe'
    }
  },
  tableToolBar: {
    leftPin: 'Sola sabitle',
    rightPin: 'Sa\u011Fa sabitle',
    noPin: 'Sabitlemeyi kald\u0131r',
    leftFixedTitle: 'Sola sabitlendi',
    rightFixedTitle: 'Sa\u011Fa sabitlendi',
    noFixedTitle: 'Sabitlenmedi',
    reset: 'S\u0131f\u0131rla',
    columnDisplay: 'Kolon G\xF6r\xFCn\xFCm\xFC',
    columnSetting: 'Ayarlar',
    fullScreen: 'Tam Ekran',
    exitFullScreen: 'Tam Ekrandan \xC7\u0131k',
    reload: 'Yenile',
    density: 'Kal\u0131nl\u0131k',
    densityDefault: 'Varsay\u0131lan',
    densityLarger: 'B\xFCy\xFCk',
    densityMiddle: 'Orta',
    densitySmall: 'K\xFC\xE7\xFCk'
  },
  stepsForm: {
    next: 'S\u0131radaki',
    prev: '\xD6nceki',
    submit: 'G\xF6nder'
  },
  editableTable: {
    action: {
      save: 'Kaydet',
      cancel: 'Vazge\xE7',
      delete: 'Sil'
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-provider/es/locale/pl_PL.js
/* harmony default export */ var pl_PL = ({
  moneySymbol: 'z\u0142',
  form: {
    lightFilter: {
      more: 'Wi\u0119cej',
      clear: 'Wyczy\u015B\u0107',
      confirm: 'Potwierd\u017A',
      itemUnit: 'Ilo\u015B\u0107'
    }
  },
  tableForm: {
    search: 'Szukaj',
    reset: 'Reset',
    submit: 'Zatwierd\u017A',
    collapsed: 'Poka\u017C wiecej',
    expand: 'Poka\u017C mniej',
    inputPlaceholder: 'Prosz\u0119 poda\u0107',
    selectPlaceholder: 'Prosz\u0119 wybra\u0107'
  },
  alert: {
    clear: 'Wyczy\u015B\u0107',
    selected: 'Wybrane',
    item: 'Wpis'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'z',
      item: 'Wpis\xF3w'
    }
  },
  tableToolBar: {
    leftPin: 'Przypnij do lewej',
    rightPin: 'Przypnij do prawej',
    noPin: 'Odepnij',
    leftFixedTitle: 'Przypi\u0119te do lewej',
    rightFixedTitle: 'Przypi\u0119te do prawej',
    noFixedTitle: 'Nieprzypi\u0119te',
    reset: 'Reset',
    columnDisplay: 'Wy\u015Bwietlane wiersze',
    columnSetting: 'Ustawienia',
    fullScreen: 'Pe\u0142en ekran',
    exitFullScreen: 'Zamknij pe\u0142en ekran',
    reload: 'Od\u015Bwie\u017C',
    density: 'Odst\u0119p',
    densityDefault: 'Standard',
    densityLarger: 'Wiekszy',
    densityMiddle: 'Sredni',
    densitySmall: 'Kompaktowy'
  },
  stepsForm: {
    next: 'Weiter',
    prev: 'Zur\xFCck',
    submit: 'Abschlie\xDFen'
  }
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-provider/es/index.js



function es_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function es_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { es_ownKeys(Object(source), true).forEach(function (key) { es_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { es_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function es_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = pro_provider_es_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function pro_provider_es_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return pro_provider_es_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return pro_provider_es_arrayLikeToArray(o, minLen); }

function pro_provider_es_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }























function get(source, path, defaultValue) {
  // a[3].b -> a.3.b
  var paths = path.replace(/\\[(\\d+)\\]/g, '.$1').split('.');
  var result = source;
  var message = defaultValue; // eslint-disable-next-line no-restricted-syntax

  var _iterator = _createForOfIteratorHelper(paths),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var p = _step.value;
      message = Object(result)[p];
      result = Object(result)[p];

      if (message === undefined) {
        return defaultValue;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return message;
}
/**
 * \u521B\u5EFA\u4E00\u4E2A\u64CD\u4F5C\u51FD\u6570
 *
 * @param locale
 * @param localeMap
 */


var createIntl = function createIntl(locale, localeMap) {
  return {
    getMessage: function getMessage(id, defaultMessage) {
      return get(localeMap, id, defaultMessage) || defaultMessage;
    },
    locale: locale
  };
};

var arEGIntl = createIntl('ar_EG', ar_EG);
var zhCNIntl = createIntl('zh_CN', pro_provider_es_locale_zh_CN);
var enUSIntl = createIntl('en_US', locale_en_US);
var viVNIntl = createIntl('vi_VN', vi_VN);
var itITIntl = createIntl('it_IT', locale_it_IT);
var jaJPIntl = createIntl('ja_JP', ja_JP);
var esESIntl = createIntl('es_ES', es_ES);
var ruRUIntl = createIntl('ru_RU', ru_RU);
var srRSIntl = createIntl('sr_RS', sr_RS);
var msMYIntl = createIntl('ms_MY', ms_MY);
var zhTWIntl = createIntl('zh_TW', locale_zh_TW);
var frFRIntl = createIntl('fr_FR', fr_FR);
var ptBRIntl = createIntl('pt_BR', pt_BR);
var koKRIntl = createIntl('ko_KR', ko_KR);
var idIDIntl = createIntl('id_ID', id_ID);
var deDEIntl = createIntl('de_DE', de_DE);
var faIRIntl = createIntl('fa_IR', fa_IR);
var trTRIntl = createIntl('tr_TR', tr_TR);
var plPLIntl = createIntl('pl_PL', pl_PL);
var intlMap = {
  'ar-EG': arEGIntl,
  'zh-CN': zhCNIntl,
  'en-US': enUSIntl,
  'vi-VN': viVNIntl,
  'it-IT': itITIntl,
  'ja-JP': jaJPIntl,
  'es-ES': esESIntl,
  'ru-RU': ruRUIntl,
  'sr-RS': srRSIntl,
  'ms-MY': msMYIntl,
  'zh-TW': zhTWIntl,
  'fr-FR': frFRIntl,
  'pt-BR': ptBRIntl,
  'ko-KR': koKRIntl,
  'id-ID': idIDIntl,
  'de-DE': deDEIntl,
  'fa-IR': faIRIntl,
  'tr-TR': trTRIntl,
  'pl-PL': plPLIntl
};
var intlMapKeys = Object.keys(intlMap);

var ConfigContext = /*#__PURE__*/react_default.a.createContext({
  intl: es_objectSpread(es_objectSpread({}, zhCNIntl), {}, {
    locale: 'default'
  }),
  valueTypeMap: {}
});
var ConfigConsumer = ConfigContext.Consumer,
    ConfigProvider = ConfigContext.Provider;
/**
 * \u6839\u636E antd \u7684 key \u6765\u627E\u5230\u7684 locale \u63D2\u4EF6\u7684 key
 *
 * @param localeKey
 */

var findIntlKeyByAntdLocaleKey = function findIntlKeyByAntdLocaleKey(localeKey) {
  if (!localeKey) {
    return 'zh-CN';
  }

  var localeName = localeKey.toLocaleLowerCase();
  return intlMapKeys.find(function (intlKey) {
    var LowerCaseKey = intlKey.toLocaleLowerCase();
    return LowerCaseKey.includes(localeName);
  });
};
/**
 * \u5982\u679C\u6CA1\u6709\u914D\u7F6E locale\uFF0C\u8FD9\u91CC\u7EC4\u4EF6\u4F1A\u6839\u636E antd \u7684 key \u6765\u81EA\u52A8\u9009\u62E9
 *
 * @param param0
 */


var es_ConfigProviderWrap = function ConfigProviderWrap(_ref) {
  var children = _ref.children;

  var _useContext = Object(react["useContext"])(config_provider["a" /* default */].ConfigContext),
      locale = _useContext.locale; // \u5982\u679C locale \u4E0D\u5B58\u5728\u81EA\u52A8\u6CE8\u5165\u7684 AntdConfigProvider


  var Provider = locale === undefined ? config_provider["a" /* default */] : react_default.a.Fragment;
  return /*#__PURE__*/react_default.a.createElement(ConfigConsumer, null, function (value) {
    var _value$intl;

    var localeName = locale === null || locale === void 0 ? void 0 : locale.locale;
    var key = findIntlKeyByAntdLocaleKey(localeName); // antd \u7684 key \u5B58\u5728\u7684\u65F6\u5019\u4EE5 antd \u7684\u4E3A\u4E3B

    var intl = localeName && ((_value$intl = value.intl) === null || _value$intl === void 0 ? void 0 : _value$intl.locale) === 'default' ? intlMap[key] : value.intl || intlMap[key]; // \u81EA\u52A8\u6CE8\u5165 antd \u7684\u914D\u7F6E

    var configProvider = locale === undefined ? {
      locale: antd_es_locale_zh_CN
    } : {};
    return /*#__PURE__*/react_default.a.createElement(Provider, configProvider, /*#__PURE__*/react_default.a.createElement(ConfigProvider, {
      value: es_objectSpread(es_objectSpread({}, value), {}, {
        intl: intl || zhCNIntl
      })
    }, children));
  });
};


function useIntl() {
  var context = Object(react["useContext"])(ConfigContext);
  return context.intl || zhCNIntl;
}
/* harmony default export */ var pro_provider_es = (ConfigContext);
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/WrapContent.js





var WrapContent_WrapContent = function WrapContent(props) {
  var style = props.style,
      className = props.className,
      children = props.children;
  return /*#__PURE__*/react_default.a.createElement(es_ConfigProviderWrap, null, /*#__PURE__*/react_default.a.createElement(es_layout.Content, {
    className: className,
    style: style
  }, children));
};

/* harmony default export */ var es_WrapContent = (WrapContent_WrapContent);
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/utils/compatibleLayout.js
var compatibleLayout = function compatibleLayout(layout) {
  var layoutEnum = ['sidemenu', 'topmenu'];

  if (layoutEnum.includes(layout)) {
    return layout === null || layout === void 0 ? void 0 : layout.replace('menu', '');
  }

  return layout;
};

/* harmony default export */ var utils_compatibleLayout = (compatibleLayout);
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-utils/es/omitUndefined/index.js
var omitUndefined = function omitUndefined(obj) {
  var newObj = {};
  Object.keys(obj || {}).forEach(function (key) {
    if (obj[key] !== undefined) {
      newObj[key] = obj[key];
    }
  });

  if (Object.keys(newObj).length < 1) {
    return undefined;
  }

  return newObj;
};

/* harmony default export */ var es_omitUndefined = (omitUndefined);
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/utils/useCurrentMenuLayoutProps.js
function useCurrentMenuLayoutProps_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { useCurrentMenuLayoutProps_typeof = function _typeof(obj) { return typeof obj; }; } else { useCurrentMenuLayoutProps_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return useCurrentMenuLayoutProps_typeof(obj); }

function useCurrentMenuLayoutProps_slicedToArray(arr, i) { return useCurrentMenuLayoutProps_arrayWithHoles(arr) || useCurrentMenuLayoutProps_iterableToArrayLimit(arr, i) || useCurrentMenuLayoutProps_unsupportedIterableToArray(arr, i) || useCurrentMenuLayoutProps_nonIterableRest(); }

function useCurrentMenuLayoutProps_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function useCurrentMenuLayoutProps_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useCurrentMenuLayoutProps_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useCurrentMenuLayoutProps_arrayLikeToArray(o, minLen); }

function useCurrentMenuLayoutProps_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function useCurrentMenuLayoutProps_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function useCurrentMenuLayoutProps_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var useCurrentMenuLayoutProps_useCurrentMenuLayoutProps = function useCurrentMenuLayoutProps(currentMenu) {
  var _useState = Object(react["useState"])({}),
      _useState2 = useCurrentMenuLayoutProps_slicedToArray(_useState, 2),
      currentMenuLayoutProps = _useState2[0],
      setCurrentMenuLayoutProps = _useState2[1];

  Object(react["useEffect"])(function () {
    setCurrentMenuLayoutProps(es_omitUndefined({
      // \u6709\u65F6\u5019\u4F1A\u53D8\u6210\u5BF9\u8C61\uFF0C\u662F\u539F\u6765\u7684\u65B9\u5F0F
      layout: useCurrentMenuLayoutProps_typeof(currentMenu.layout) !== 'object' ? currentMenu.layout : undefined,
      navTheme: currentMenu.navTheme,
      menuRender: currentMenu.menuRender,
      footerRender: currentMenu.footerRender,
      menuHeaderRender: currentMenu.menuHeaderRender,
      headerRender: currentMenu.headerRender,
      fixSiderbar: currentMenu.fixSiderbar,
      headerTheme: currentMenu.headerTheme
    }));
  }, [currentMenu.layout, currentMenu.navTheme, currentMenu.menuRender, currentMenu.footerRender, currentMenu.menuHeaderRender, currentMenu.headerRender, currentMenu.fixSiderbar, currentMenu.headerTheme]);
  return currentMenuLayoutProps;
};

/* harmony default export */ var utils_useCurrentMenuLayoutProps = (useCurrentMenuLayoutProps_useCurrentMenuLayoutProps);
// CONCATENATED MODULE: ./node_modules/use-json-comparison/dist/index.esm.js


function index_esm_typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    index_esm_typeof = function (obj) {
      return typeof obj;
    };
  } else {
    index_esm_typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return index_esm_typeof(obj);
}

var getCircularReplacer = function getCircularReplacer() {
  var seen = new WeakSet();
  return function (key, value) {
    if (index_esm_typeof(value) === 'object' && value !== null) {
      if (seen.has(value)) {
        return;
      }

      seen.add(value);
    }

    return value;
  };
};
/**\r
 * \u4E00\u4E2A\u66F4\u52A0\u5B89\u5168\u7684 stringify\uFF0C\u53EF\u4EE5\u89E3\u51B3\u5FAA\u73AF\u4F9D\u8D56\u7684\u95EE\u9898\r
 * @param value\r
 */


var stringify = function stringify(value) {
  return JSON.stringify(value, getCircularReplacer());
};

var jsonCompareEquals = function jsonCompareEquals(value, nextValue) {
  try {
    return stringify(value) === stringify(nextValue);
  } catch (error) {// do something
  }

  return false;
};

function useJsonCompareMemoize(value) {
  var ref = Object(react["useRef"])(''); // it can be done by using useMemo as well
  // but useRef is rather cleaner and easier

  if (!jsonCompareEquals(value, ref.current)) {
    ref.current = JSON.stringify(value, getCircularReplacer());
  }

  return ref.current;
}
function useDeepJSONEffect(effect, dependencies) {
  Object(react["useEffect"])(effect, [useJsonCompareMemoize(dependencies)]);
}

/* harmony default export */ var index_esm = (useDeepJSONEffect);


// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/BasicLayout.js




var BasicLayout_excluded = ["id", "defaultMessage"],
    _excluded2 = ["fixSiderbar", "navTheme", "layout"];

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function BasicLayout_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = BasicLayout_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function BasicLayout_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function BasicLayout_slicedToArray(arr, i) { return BasicLayout_arrayWithHoles(arr) || BasicLayout_iterableToArrayLimit(arr, i) || BasicLayout_unsupportedIterableToArray(arr, i) || BasicLayout_nonIterableRest(); }

function BasicLayout_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function BasicLayout_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return BasicLayout_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return BasicLayout_arrayLikeToArray(o, minLen); }

function BasicLayout_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function BasicLayout_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function BasicLayout_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function BasicLayout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function BasicLayout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { BasicLayout_ownKeys(Object(source), true).forEach(function (key) { BasicLayout_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { BasicLayout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function BasicLayout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function BasicLayout_extends() { BasicLayout_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return BasicLayout_extends.apply(this, arguments); }




























var layoutIndex = 0;

var BasicLayout_headerRender = function headerRender(props, matchMenuKeys) {
  if (props.headerRender === false || props.pure) {
    return null;
  }

  return /*#__PURE__*/react_default.a.createElement(es_Header, BasicLayout_extends({
    matchMenuKeys: matchMenuKeys
  }, props));
};

var BasicLayout_footerRender = function footerRender(props) {
  if (props.footerRender === false || props.pure) {
    return null;
  }

  if (props.footerRender) {
    return props.footerRender(BasicLayout_objectSpread({}, props), /*#__PURE__*/react_default.a.createElement(es_Footer, null));
  }

  return null;
};

var BasicLayout_renderSiderMenu = function renderSiderMenu(props, matchMenuKeys) {
  var layout = props.layout,
      isMobile = props.isMobile,
      openKeys = props.openKeys,
      splitMenus = props.splitMenus,
      menuRender = props.menuRender;

  if (props.menuRender === false || props.pure) {
    return null;
  }

  var menuData = props.menuData;
  /** \u5982\u679C\u662F\u5206\u5272\u83DC\u5355\u6A21\u5F0F\uFF0C\u9700\u8981\u4E13\u95E8\u5B9E\u73B0\u4E00\u4E0B */

  if (splitMenus && (openKeys !== false || layout === 'mix') && !isMobile) {
    var _matchMenuKeys = BasicLayout_slicedToArray(matchMenuKeys, 1),
        key = _matchMenuKeys[0];

    if (key) {
      var _props$menuData, _props$menuData$find;

      menuData = ((_props$menuData = props.menuData) === null || _props$menuData === void 0 ? void 0 : (_props$menuData$find = _props$menuData.find(function (item) {
        return item.key === key;
      })) === null || _props$menuData$find === void 0 ? void 0 : _props$menuData$find.children) || [];
    } else {
      menuData = [];
    }
  } // \u8FD9\u91CC\u8D70\u4E86\u53EF\u4EE5\u5C11\u4E00\u6B21\u5FAA\u73AF


  var clearMenuData = clearMenuItem(menuData || []);

  if (clearMenuData && (clearMenuData === null || clearMenuData === void 0 ? void 0 : clearMenuData.length) < 1 && splitMenus) {
    return null;
  }

  if (layout === 'top' && !isMobile) {
    return /*#__PURE__*/react_default.a.createElement(es_components_SiderMenu, BasicLayout_extends({
      matchMenuKeys: matchMenuKeys
    }, props, {
      hide: true
    }));
  }

  if (menuRender) {
    var defaultDom = /*#__PURE__*/react_default.a.createElement(es_components_SiderMenu, BasicLayout_extends({
      matchMenuKeys: matchMenuKeys
    }, props, {
      // \u8FD9\u91CC\u8D70\u4E86\u53EF\u4EE5\u5C11\u4E00\u6B21\u5FAA\u73AF
      menuData: clearMenuData
    }));
    return menuRender(props, defaultDom);
  }

  return /*#__PURE__*/react_default.a.createElement(es_components_SiderMenu, BasicLayout_extends({
    matchMenuKeys: matchMenuKeys
  }, props, {
    // \u8FD9\u91CC\u8D70\u4E86\u53EF\u4EE5\u5C11\u4E00\u6B21\u5FAA\u73AF
    menuData: clearMenuData
  }));
};

var BasicLayout_defaultPageTitleRender = function defaultPageTitleRender(pageProps, props) {
  var pageTitleRender = props.pageTitleRender;
  var pageTitleInfo = getPageTitleInfo(pageProps);

  if (pageTitleRender === false) {
    return {
      title: props.title || '',
      id: '',
      pageName: ''
    };
  }

  if (pageTitleRender) {
    var title = pageTitleRender(pageProps, pageTitleInfo.title, pageTitleInfo);

    if (typeof title === 'string') {
      return BasicLayout_objectSpread(BasicLayout_objectSpread({}, pageTitleInfo), {}, {
        title: title
      });
    }

    warning_default()(typeof title === 'string', 'pro-layout: renderPageTitle return value should be a string');
  }

  return pageTitleInfo;
};

var getPaddingLeft = function getPaddingLeft(hasLeftPadding, collapsed, siderWidth) {
  if (hasLeftPadding) {
    return collapsed ? 48 : siderWidth;
  }

  return 0;
};
/**
 * \u{1F303} Powerful and easy to use beautiful layout \u{1F3C4}\u200D Support multiple topics and layout types
 *
 * @param props
 */


var BasicLayout_BasicLayout = function BasicLayout(props) {
  var _props$prefixCls, _classNames, _classNames2, _location$pathname;

  var _ref = props || {},
      children = _ref.children,
      propsOnCollapse = _ref.onCollapse,
      _ref$location = _ref.location,
      location = _ref$location === void 0 ? {
    pathname: '/'
  } : _ref$location,
      contentStyle = _ref.contentStyle,
      route = _ref.route,
      defaultCollapsed = _ref.defaultCollapsed,
      style = _ref.style,
      disableContentMargin = _ref.disableContentMargin,
      _ref$siderWidth = _ref.siderWidth,
      siderWidth = _ref$siderWidth === void 0 ? 208 : _ref$siderWidth,
      menu = _ref.menu,
      propsIsChildrenLayout = _ref.isChildrenLayout,
      menuDataRender = _ref.menuDataRender,
      actionRef = _ref.actionRef,
      propsFormatMessage = _ref.formatMessage,
      loading = _ref.loading;

  var context = Object(react["useContext"])(config_provider["a" /* default */].ConfigContext);
  var prefixCls = (_props$prefixCls = props.prefixCls) !== null && _props$prefixCls !== void 0 ? _props$prefixCls : context.getPrefixCls('pro');

  var _useMountMergeState = es_useMountMergeState(false, {
    value: menu === null || menu === void 0 ? void 0 : menu.loading,
    onChange: menu === null || menu === void 0 ? void 0 : menu.onLoadingChange
  }),
      _useMountMergeState2 = BasicLayout_slicedToArray(_useMountMergeState, 2),
      menuLoading = _useMountMergeState2[0],
      setMenuLoading = _useMountMergeState2[1]; // give a default key for swr


  var _useState = Object(react["useState"])(function () {
    layoutIndex += 1;
    return "pro-layout-".concat(layoutIndex);
  }),
      _useState2 = BasicLayout_slicedToArray(_useState, 1),
      defaultId = _useState2[0];

  var formatMessage = Object(react["useCallback"])(function (_ref2) {
    var id = _ref2.id,
        defaultMessage = _ref2.defaultMessage,
        restParams = BasicLayout_objectWithoutProperties(_ref2, BasicLayout_excluded);

    if (propsFormatMessage) {
      return propsFormatMessage(BasicLayout_objectSpread({
        id: id,
        defaultMessage: defaultMessage
      }, restParams));
    }

    var locales = es_locales();
    return locales[id] ? locales[id] : defaultMessage;
  }, [propsFormatMessage]);

  var _useMergedState = Object(useMergedState["a" /* default */])(function () {
    return Object(getMenuData["a" /* default */])((route === null || route === void 0 ? void 0 : route.routes) || [], menu, formatMessage, menuDataRender);
  }),
      _useMergedState2 = BasicLayout_slicedToArray(_useMergedState, 2),
      menuInfoData = _useMergedState2[0],
      setMenuInfoData = _useMergedState2[1];

  var _ref3 = menuInfoData || {},
      _ref3$breadcrumb = _ref3.breadcrumb,
      breadcrumb = _ref3$breadcrumb === void 0 ? {} : _ref3$breadcrumb,
      breadcrumbMap = _ref3.breadcrumbMap,
      _ref3$menuData = _ref3.menuData,
      menuData = _ref3$menuData === void 0 ? [] : _ref3$menuData;

  var swrKey = Object(react["useMemo"])(function () {
    if (!(menu === null || menu === void 0 ? void 0 : menu.params)) return [defaultId];
    return [defaultId, menu === null || menu === void 0 ? void 0 : menu.params];
  }, [defaultId, stringify(menu === null || menu === void 0 ? void 0 : menu.params)]);
  var preData = Object(react["useRef"])(undefined);

  var _useSWR = esm(swrKey, /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, params) {
      var _menu$request;

      var msg;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setMenuLoading(true);
              _context.next = 3;
              return menu === null || menu === void 0 ? void 0 : (_menu$request = menu.request) === null || _menu$request === void 0 ? void 0 : _menu$request.call(menu, params || {}, (route === null || route === void 0 ? void 0 : route.routes) || []);

            case 3:
              msg = _context.sent;
              setMenuLoading(false);
              return _context.abrupt("return", msg);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref4.apply(this, arguments);
    };
  }(), {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
    revalidateOnReconnect: false
  }),
      data = _useSWR.data;

  preData.current = data; // params \u66F4\u65B0\u7684\u65F6\u5019\u91CD\u65B0\u8BF7\u6C42

  Object(react["useEffect"])(function () {
    if (!preData.current) {
      return;
    }

    use_swr_mutate(swrKey); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swrKey]);

  if (actionRef && (menu === null || menu === void 0 ? void 0 : menu.request)) {
    actionRef.current = {
      reload: function reload() {
        use_swr_mutate(swrKey);
      }
    };
  }

  hooks_useDeepCompareEffect(function () {
    if (!(menu === null || menu === void 0 ? void 0 : menu.request) || !(data === null || data === void 0 ? void 0 : data.length)) {
      return;
    }

    var menuDataMap = Object(getMenuData["a" /* default */])(data || (route === null || route === void 0 ? void 0 : route.routes) || [], menu, formatMessage, menuDataRender);
    setMenuInfoData(menuDataMap);
  }, [data, menu === null || menu === void 0 ? void 0 : menu.request, menu === null || menu === void 0 ? void 0 : menu.loading, route === null || route === void 0 ? void 0 : route.routes]);
  var matchMenus = Object(react["useMemo"])(function () {
    return Object(route_utils_es["b" /* getMatchMenu */])(location.pathname || '/', menuData || [], true);
  }, [location.pathname, menuData]);
  var matchMenuKeys = Object(react["useMemo"])(function () {
    return Array.from(new Set(matchMenus.map(function (item) {
      return item.key || item.path || '';
    })));
  }, [matchMenus]); // \u5F53\u524D\u9009\u4E2D\u7684menu\uFF0C\u4E00\u822C\u4E0D\u4F1A\u4E3A\u7A7A

  var currentMenu = matchMenus[matchMenus.length - 1] || {};
  var currentMenuLayoutProps = utils_useCurrentMenuLayoutProps(currentMenu);

  var _props$currentMenuLay = BasicLayout_objectSpread(BasicLayout_objectSpread({}, props), currentMenuLayoutProps),
      fixSiderbar = _props$currentMenuLay.fixSiderbar,
      navTheme = _props$currentMenuLay.navTheme,
      defaultPropsLayout = _props$currentMenuLay.layout,
      rest = BasicLayout_objectWithoutProperties(_props$currentMenuLay, _excluded2);

  var propsLayout = utils_compatibleLayout(defaultPropsLayout);
  var colSize = es();
  var isMobile = (colSize === 'sm' || colSize === 'xs') && !props.disableMobile;
  /** \u5982\u679C menuRender \u4E0D\u5B58\u5728\uFF0C\u53EF\u4EE5\u505A\u4E00\u4E0B\u6027\u80FD\u4F18\u5316 \u53EA\u8981 routers \u6CA1\u6709\u66F4\u65B0\u5C31\u4E0D\u9700\u8981\u91CD\u65B0\u8BA1\u7B97 */

  hooks_useDeepCompareEffect(function () {
    if ((menu === null || menu === void 0 ? void 0 : menu.loading) || (menu === null || menu === void 0 ? void 0 : menu.request)) {
      return function () {
        return null;
      };
    }

    var infoData = Object(getMenuData["a" /* default */])((route === null || route === void 0 ? void 0 : route.routes) || [], menu, formatMessage, menuDataRender); // \u7A0D\u5FAE\u6162\u4E00\u70B9 render\uFF0C\u4E0D\u7136\u4F1A\u9020\u6210\u6027\u80FD\u95EE\u9898\uFF0C\u770B\u8D77\u6765\u50CF\u662F\u83DC\u5355\u7684\u5361\u987F

    var animationFrameId = requestAnimationFrame(function () {
      setMenuInfoData(infoData);
    });
    return function () {
      return window.cancelAnimationFrame && window.cancelAnimationFrame(animationFrameId);
    };
  }, [menu === null || menu === void 0 ? void 0 : menu.loading, menu === null || menu === void 0 ? void 0 : menu.request, route === null || route === void 0 ? void 0 : route.routes, location === null || location === void 0 ? void 0 : location.pathname, menuDataRender]); // If it is a fix menu, calculate padding
  // don't need padding in phone mode

  var hasLeftPadding = propsLayout !== 'top' && !isMobile;

  var _useMergedState3 = Object(useMergedState["a" /* default */])(function () {
    return defaultCollapsed || false;
  }, {
    value: props.collapsed,
    onChange: propsOnCollapse
  }),
      _useMergedState4 = BasicLayout_slicedToArray(_useMergedState3, 2),
      collapsed = _useMergedState4[0],
      onCollapse = _useMergedState4[1]; // Splicing parameters, adding menuData and formatMessage in props


  var defaultProps = omit_js_es(BasicLayout_objectSpread(BasicLayout_objectSpread(BasicLayout_objectSpread({
    prefixCls: prefixCls
  }, props), {}, {
    siderWidth: siderWidth
  }, currentMenuLayoutProps), {}, {
    formatMessage: formatMessage,
    breadcrumb: breadcrumb,
    menu: BasicLayout_objectSpread(BasicLayout_objectSpread({}, menu), {}, {
      loading: menuLoading
    }),
    layout: propsLayout
  }), ['className', 'style', 'breadcrumbRender']); // gen page title

  var pageTitleInfo = BasicLayout_defaultPageTitleRender(BasicLayout_objectSpread(BasicLayout_objectSpread({
    pathname: location.pathname
  }, defaultProps), {}, {
    breadcrumbMap: breadcrumbMap
  }), props); // gen breadcrumbProps, parameter for pageHeader

  var breadcrumbProps = getBreadcrumbProps(BasicLayout_objectSpread(BasicLayout_objectSpread({}, defaultProps), {}, {
    breadcrumbRender: props.breadcrumbRender,
    breadcrumbMap: breadcrumbMap
  })); // render sider dom

  var siderMenuDom = BasicLayout_renderSiderMenu(BasicLayout_objectSpread(BasicLayout_objectSpread({}, defaultProps), {}, {
    menuData: menuData,
    onCollapse: onCollapse,
    isMobile: isMobile,
    theme: (navTheme || 'dark').toLocaleLowerCase().includes('dark') ? 'dark' : 'light',
    collapsed: collapsed
  }), matchMenuKeys); // render header dom

  var headerDom = BasicLayout_headerRender(BasicLayout_objectSpread(BasicLayout_objectSpread({}, defaultProps), {}, {
    hasSiderMenu: !!siderMenuDom,
    menuData: menuData,
    isMobile: isMobile,
    collapsed: collapsed,
    onCollapse: onCollapse,
    theme: (navTheme || 'dark').toLocaleLowerCase().includes('dark') ? 'dark' : 'light'
  }), matchMenuKeys); // render footer dom

  var footerDom = BasicLayout_footerRender(BasicLayout_objectSpread({
    isMobile: isMobile,
    collapsed: collapsed
  }, defaultProps));

  var _useContext = Object(react["useContext"])(RouteContext),
      contextIsChildrenLayout = _useContext.isChildrenLayout; // \u5982\u679C props \u4E2D\u5B9A\u4E49\uFF0C\u4EE5 props \u4E3A\u51C6


  var isChildrenLayout = propsIsChildrenLayout !== undefined ? propsIsChildrenLayout : contextIsChildrenLayout;
  var baseClassName = "".concat(prefixCls, "-basicLayout"); // gen className

  var className = classnames_default()(props.className, 'ant-design-pro', baseClassName, (_classNames = {}, BasicLayout_defineProperty(_classNames, "screen-".concat(colSize), colSize), BasicLayout_defineProperty(_classNames, "".concat(baseClassName, "-top-menu"), propsLayout === 'top'), BasicLayout_defineProperty(_classNames, "".concat(baseClassName, "-is-children"), isChildrenLayout), BasicLayout_defineProperty(_classNames, "".concat(baseClassName, "-fix-siderbar"), fixSiderbar), BasicLayout_defineProperty(_classNames, "".concat(baseClassName, "-").concat(propsLayout), propsLayout), _classNames));
  /** \u8BA1\u7B97 slider \u7684\u5BBD\u5EA6 */

  var leftSiderWidth = getPaddingLeft(!!hasLeftPadding, collapsed, siderWidth); // siderMenuDom \u4E3A\u7A7A\u7684\u65F6\u5019\uFF0C\u4E0D\u9700\u8981 padding

  var genLayoutStyle = {
    position: 'relative'
  }; // if is some layout children, don't need min height

  if (isChildrenLayout || contentStyle && contentStyle.minHeight) {
    genLayoutStyle.minHeight = 0;
  }

  var contentClassName = classnames_default()("".concat(baseClassName, "-content"), (_classNames2 = {}, BasicLayout_defineProperty(_classNames2, "".concat(baseClassName, "-has-header"), headerDom), BasicLayout_defineProperty(_classNames2, "".concat(baseClassName, "-content-disable-margin"), disableContentMargin), _classNames2));
  /** \u9875\u9762\u5207\u6362\u7684\u65F6\u5019\u89E6\u53D1 */

  Object(react["useEffect"])(function () {
    var _props$onPageChange;

    (_props$onPageChange = props.onPageChange) === null || _props$onPageChange === void 0 ? void 0 : _props$onPageChange.call(props, props.location); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, (_location$pathname = location.pathname) === null || _location$pathname === void 0 ? void 0 : _location$pathname.search]);

  var _useState3 = Object(react["useState"])(false),
      _useState4 = BasicLayout_slicedToArray(_useState3, 2),
      hasFooterToolbar = _useState4[0],
      setHasFooterToolbar = _useState4[1];

  hooks_useDocumentTitle(pageTitleInfo, props.title || false);
  return /*#__PURE__*/react_default.a.createElement(Counter.Provider, null, /*#__PURE__*/react_default.a.createElement(RouteContext.Provider, {
    value: BasicLayout_objectSpread(BasicLayout_objectSpread({}, defaultProps), {}, {
      breadcrumb: breadcrumbProps,
      menuData: menuData,
      isMobile: isMobile,
      collapsed: collapsed,
      isChildrenLayout: true,
      title: pageTitleInfo.pageName,
      hasSiderMenu: !!siderMenuDom,
      hasHeader: !!headerDom,
      siderWidth: leftSiderWidth,
      hasFooter: !!footerDom,
      hasFooterToolbar: hasFooterToolbar,
      setHasFooterToolbar: setHasFooterToolbar,
      pageTitleInfo: pageTitleInfo,
      matchMenus: matchMenus,
      matchMenuKeys: matchMenuKeys,
      currentMenu: currentMenu
    })
  }, props.pure ? children : /*#__PURE__*/react_default.a.createElement("div", {
    className: className
  }, /*#__PURE__*/react_default.a.createElement(es_layout, {
    style: BasicLayout_objectSpread({
      minHeight: '100%'
    }, style)
  }, siderMenuDom, /*#__PURE__*/react_default.a.createElement("div", {
    style: genLayoutStyle,
    className: context.getPrefixCls('layout')
  }, headerDom, /*#__PURE__*/react_default.a.createElement(es_WrapContent, BasicLayout_extends({
    isChildrenLayout: isChildrenLayout
  }, rest, {
    className: contentClassName,
    style: contentStyle
  }), loading ? /*#__PURE__*/react_default.a.createElement(components_PageLoading, null) : children), footerDom)))));
};

BasicLayout_BasicLayout.defaultProps = BasicLayout_objectSpread(BasicLayout_objectSpread({
  logo: 'https://gw.alipayobjects.com/zos/antfincdn/PmY%24TNNDBI/logo.svg'
}, es_defaultSettings), {}, {
  location: Object(isBrowser["a" /* default */])() ? window.location : undefined
});
/* harmony default export */ var pro_layout_es_BasicLayout = (BasicLayout_BasicLayout);
// EXTERNAL MODULE: ./node_modules/antd/es/affix/style/index.less
var affix_style = __webpack_require__("15/o");

// CONCATENATED MODULE: ./node_modules/antd/es/affix/style/index.js


// EXTERNAL MODULE: ./node_modules/rc-resize-observer/es/index.js
var node_modules_rc_resize_observer_es = __webpack_require__("t23M");

// CONCATENATED MODULE: ./node_modules/antd/es/_util/throttleByAnimationFrame.js


function throttleByAnimationFrame(fn) {
  var requestId;

  var later = function later(args) {
    return function () {
      requestId = null;
      fn.apply(void 0, Object(toConsumableArray["a" /* default */])(args));
    };
  };

  var throttled = function throttled() {
    if (requestId == null) {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      requestId = Object(raf["a" /* default */])(later(args));
    }
  };

  throttled.cancel = function () {
    return raf["a" /* default */].cancel(requestId);
  };

  return throttled;
}
function throttleByAnimationFrameDecorator() {
  return function throttle(target, key, descriptor) {
    var fn = descriptor.value;
    var definingProperty = false;
    return {
      configurable: true,
      get: function get() {
        // In IE11 calling Object.defineProperty has a side-effect of evaluating the
        // getter for the property which is being replaced. This causes infinite
        // recursion and an "Out of stack space" error.
        // eslint-disable-next-line no-prototype-builtins
        if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
          /* istanbul ignore next */
          return fn;
        }

        var boundFn = throttleByAnimationFrame(fn.bind(this));
        definingProperty = true;
        Object.defineProperty(this, key, {
          value: boundFn,
          configurable: true,
          writable: true
        });
        definingProperty = false;
        return boundFn;
      }
    };
  };
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/addEventListener.js
var Dom_addEventListener = __webpack_require__("zT1h");

// CONCATENATED MODULE: ./node_modules/antd/es/affix/utils.js

function getTargetRect(target) {
  return target !== window ? target.getBoundingClientRect() : {
    top: 0,
    bottom: window.innerHeight
  };
}
function getFixedTop(placeholderReact, targetRect, offsetTop) {
  if (offsetTop !== undefined && targetRect.top > placeholderReact.top - offsetTop) {
    return offsetTop + targetRect.top;
  }

  return undefined;
}
function getFixedBottom(placeholderReact, targetRect, offsetBottom) {
  if (offsetBottom !== undefined && targetRect.bottom < placeholderReact.bottom + offsetBottom) {
    var targetBottomOffset = window.innerHeight - targetRect.bottom;
    return offsetBottom + targetBottomOffset;
  }

  return undefined;
} // ======================== Observer ========================

var TRIGGER_EVENTS = ['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'];
var observerEntities = [];
function getObserverEntities() {
  // Only used in test env. Can be removed if refactor.
  return observerEntities;
}
function addObserveTarget(target, affix) {
  if (!target) return;
  var entity = observerEntities.find(function (item) {
    return item.target === target;
  });

  if (entity) {
    entity.affixList.push(affix);
  } else {
    entity = {
      target: target,
      affixList: [affix],
      eventHandlers: {}
    };
    observerEntities.push(entity); // Add listener

    TRIGGER_EVENTS.forEach(function (eventName) {
      entity.eventHandlers[eventName] = Object(Dom_addEventListener["a" /* default */])(target, eventName, function () {
        entity.affixList.forEach(function (targetAffix) {
          targetAffix.lazyUpdatePosition();
        });
      });
    });
  }
}
function removeObserveTarget(affix) {
  var observerEntity = observerEntities.find(function (oriObserverEntity) {
    var hasAffix = oriObserverEntity.affixList.some(function (item) {
      return item === affix;
    });

    if (hasAffix) {
      oriObserverEntity.affixList = oriObserverEntity.affixList.filter(function (item) {
        return item !== affix;
      });
    }

    return hasAffix;
  });

  if (observerEntity && observerEntity.affixList.length === 0) {
    observerEntities = observerEntities.filter(function (item) {
      return item !== observerEntity;
    }); // Remove listener

    TRIGGER_EVENTS.forEach(function (eventName) {
      var handler = observerEntity.eventHandlers[eventName];

      if (handler && handler.remove) {
        handler.remove();
      }
    });
  }
}
// CONCATENATED MODULE: ./node_modules/antd/es/affix/index.js








var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : Object(esm_typeof["a" /* default */])(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};









function getDefaultTarget() {
  return typeof window !== 'undefined' ? window : null;
}

var AffixStatus;

(function (AffixStatus) {
  AffixStatus[AffixStatus["None"] = 0] = "None";
  AffixStatus[AffixStatus["Prepare"] = 1] = "Prepare";
})(AffixStatus || (AffixStatus = {}));

var affix_Affix = /*#__PURE__*/function (_React$Component) {
  Object(inherits["a" /* default */])(Affix, _React$Component);

  var _super = Object(createSuper["a" /* default */])(Affix);

  function Affix() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Affix);

    _this = _super.apply(this, arguments);
    _this.state = {
      status: AffixStatus.None,
      lastAffix: false,
      prevTarget: null
    };

    _this.getOffsetTop = function () {
      var offsetBottom = _this.props.offsetBottom;
      var offsetTop = _this.props.offsetTop;

      if (offsetBottom === undefined && offsetTop === undefined) {
        offsetTop = 0;
      }

      return offsetTop;
    };

    _this.getOffsetBottom = function () {
      return _this.props.offsetBottom;
    };

    _this.savePlaceholderNode = function (node) {
      _this.placeholderNode = node;
    };

    _this.saveFixedNode = function (node) {
      _this.fixedNode = node;
    }; // =================== Measure ===================


    _this.measure = function () {
      var _this$state = _this.state,
          status = _this$state.status,
          lastAffix = _this$state.lastAffix;
      var onChange = _this.props.onChange;

      var targetFunc = _this.getTargetFunc();

      if (status !== AffixStatus.Prepare || !_this.fixedNode || !_this.placeholderNode || !targetFunc) {
        return;
      }

      var offsetTop = _this.getOffsetTop();

      var offsetBottom = _this.getOffsetBottom();

      var targetNode = targetFunc();

      if (!targetNode) {
        return;
      }

      var newState = {
        status: AffixStatus.None
      };
      var targetRect = getTargetRect(targetNode);
      var placeholderReact = getTargetRect(_this.placeholderNode);
      var fixedTop = getFixedTop(placeholderReact, targetRect, offsetTop);
      var fixedBottom = getFixedBottom(placeholderReact, targetRect, offsetBottom);

      if (fixedTop !== undefined) {
        newState.affixStyle = {
          position: 'fixed',
          top: fixedTop,
          width: placeholderReact.width,
          height: placeholderReact.height
        };
        newState.placeholderStyle = {
          width: placeholderReact.width,
          height: placeholderReact.height
        };
      } else if (fixedBottom !== undefined) {
        newState.affixStyle = {
          position: 'fixed',
          bottom: fixedBottom,
          width: placeholderReact.width,
          height: placeholderReact.height
        };
        newState.placeholderStyle = {
          width: placeholderReact.width,
          height: placeholderReact.height
        };
      }

      newState.lastAffix = !!newState.affixStyle;

      if (onChange && lastAffix !== newState.lastAffix) {
        onChange(newState.lastAffix);
      }

      _this.setState(newState);
    }; // @ts-ignore TS6133


    _this.prepareMeasure = function () {
      // event param is used before. Keep compatible ts define here.
      _this.setState({
        status: AffixStatus.Prepare,
        affixStyle: undefined,
        placeholderStyle: undefined
      }); // Test if \`updatePosition\` called


      if (false) { var onTestUpdatePosition; }
    }; // =================== Render ===================


    _this.render = function () {
      var getPrefixCls = _this.context.getPrefixCls;
      var _this$state2 = _this.state,
          affixStyle = _this$state2.affixStyle,
          placeholderStyle = _this$state2.placeholderStyle;
      var _this$props = _this.props,
          prefixCls = _this$props.prefixCls,
          children = _this$props.children;
      var className = classnames_default()(Object(defineProperty["a" /* default */])({}, getPrefixCls('affix', prefixCls), !!affixStyle));
      var props = Object(es_omit["a" /* default */])(_this.props, ['prefixCls', 'offsetTop', 'offsetBottom', 'target', 'onChange']); // Omit this since \`onTestUpdatePosition\` only works on test.

      if (false) {}

      return /*#__PURE__*/react["createElement"](node_modules_rc_resize_observer_es["a" /* default */], {
        onResize: function onResize() {
          _this.updatePosition();
        }
      }, /*#__PURE__*/react["createElement"]("div", Object(esm_extends["a" /* default */])({}, props, {
        ref: _this.savePlaceholderNode
      }), affixStyle && /*#__PURE__*/react["createElement"]("div", {
        style: placeholderStyle,
        "aria-hidden": "true"
      }), /*#__PURE__*/react["createElement"]("div", {
        className: className,
        ref: _this.saveFixedNode,
        style: affixStyle
      }, /*#__PURE__*/react["createElement"](node_modules_rc_resize_observer_es["a" /* default */], {
        onResize: function onResize() {
          _this.updatePosition();
        }
      }, children))));
    };

    return _this;
  }

  Object(createClass["a" /* default */])(Affix, [{
    key: "getTargetFunc",
    value: function getTargetFunc() {
      var getTargetContainer = this.context.getTargetContainer;
      var target = this.props.target;

      if (target !== undefined) {
        return target;
      }

      return getTargetContainer || getDefaultTarget;
    } // Event handler

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var targetFunc = this.getTargetFunc();

      if (targetFunc) {
        // [Legacy] Wait for parent component ref has its value.
        // We should use target as directly element instead of function which makes element check hard.
        this.timeout = setTimeout(function () {
          addObserveTarget(targetFunc(), _this2); // Mock Event object.

          _this2.updatePosition();
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevTarget = this.state.prevTarget;
      var targetFunc = this.getTargetFunc();
      var newTarget = null;

      if (targetFunc) {
        newTarget = targetFunc() || null;
      }

      if (prevTarget !== newTarget) {
        removeObserveTarget(this);

        if (newTarget) {
          addObserveTarget(newTarget, this); // Mock Event object.

          this.updatePosition();
        } // eslint-disable-next-line react/no-did-update-set-state


        this.setState({
          prevTarget: newTarget
        });
      }

      if (prevProps.offsetTop !== this.props.offsetTop || prevProps.offsetBottom !== this.props.offsetBottom) {
        this.updatePosition();
      }

      this.measure();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
      removeObserveTarget(this);
      this.updatePosition.cancel(); // https://github.com/ant-design/ant-design/issues/22683

      this.lazyUpdatePosition.cancel();
    } // Handle realign logic

  }, {
    key: "updatePosition",
    value: function updatePosition() {
      this.prepareMeasure();
    }
  }, {
    key: "lazyUpdatePosition",
    value: function lazyUpdatePosition() {
      var targetFunc = this.getTargetFunc();
      var affixStyle = this.state.affixStyle; // Check position change before measure to make Safari smooth

      if (targetFunc && affixStyle) {
        var offsetTop = this.getOffsetTop();
        var offsetBottom = this.getOffsetBottom();
        var targetNode = targetFunc();

        if (targetNode && this.placeholderNode) {
          var targetRect = getTargetRect(targetNode);
          var placeholderReact = getTargetRect(this.placeholderNode);
          var fixedTop = getFixedTop(placeholderReact, targetRect, offsetTop);
          var fixedBottom = getFixedBottom(placeholderReact, targetRect, offsetBottom);

          if (fixedTop !== undefined && affixStyle.top === fixedTop || fixedBottom !== undefined && affixStyle.bottom === fixedBottom) {
            return;
          }
        }
      } // Directly call prepare measure since it's already throttled.


      this.prepareMeasure();
    }
  }]);

  return Affix;
}(react["Component"]);

affix_Affix.contextType = config_provider_context["b" /* ConfigContext */];

__decorate([throttleByAnimationFrameDecorator()], affix_Affix.prototype, "updatePosition", null);

__decorate([throttleByAnimationFrameDecorator()], affix_Affix.prototype, "lazyUpdatePosition", null);

/* harmony default export */ var es_affix = (affix_Affix);
// EXTERNAL MODULE: ./node_modules/antd/es/page-header/style/index.less
var page_header_style = __webpack_require__("YV/h");

// EXTERNAL MODULE: ./node_modules/antd/es/breadcrumb/style/index.less
var breadcrumb_style = __webpack_require__("AOa7");

// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/style/index.less
var dropdown_style = __webpack_require__("KAsB");

// EXTERNAL MODULE: ./node_modules/antd/es/button/style/index.js
var button_style = __webpack_require__("+L6B");

// CONCATENATED MODULE: ./node_modules/antd/es/dropdown/style/index.js

 // style dependencies


// CONCATENATED MODULE: ./node_modules/antd/es/breadcrumb/style/index.js

 // style dependencies



// EXTERNAL MODULE: ./node_modules/antd/es/avatar/style/index.less
var avatar_style = __webpack_require__("ifDB");

// EXTERNAL MODULE: ./node_modules/antd/es/popover/style/index.js
var popover_style = __webpack_require__("Q9mQ");

// CONCATENATED MODULE: ./node_modules/antd/es/avatar/style/index.js

 // style dependencies
// deps-lint-skip: grid


// CONCATENATED MODULE: ./node_modules/antd/es/page-header/style/index.js
 // style dependencies



// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/ArrowLeftOutlined.js
// This icon file is generated automatically.
var ArrowLeftOutlined_ArrowLeftOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" } }] }, "name": "arrow-left", "theme": "outlined" };
/* harmony default export */ var asn_ArrowLeftOutlined = (ArrowLeftOutlined_ArrowLeftOutlined);

// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/ArrowLeftOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_ArrowLeftOutlined_ArrowLeftOutlined = function ArrowLeftOutlined(props, ref) {
  return /*#__PURE__*/react["createElement"](AntdIcon["a" /* default */], Object.assign({}, props, {
    ref: ref,
    icon: asn_ArrowLeftOutlined
  }));
};

icons_ArrowLeftOutlined_ArrowLeftOutlined.displayName = 'ArrowLeftOutlined';
/* harmony default export */ var icons_ArrowLeftOutlined = (/*#__PURE__*/react["forwardRef"](icons_ArrowLeftOutlined_ArrowLeftOutlined));
// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/ArrowRightOutlined.js
// This icon file is generated automatically.
var ArrowRightOutlined_ArrowRightOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" } }] }, "name": "arrow-right", "theme": "outlined" };
/* harmony default export */ var asn_ArrowRightOutlined = (ArrowRightOutlined_ArrowRightOutlined);

// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/ArrowRightOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_ArrowRightOutlined_ArrowRightOutlined = function ArrowRightOutlined(props, ref) {
  return /*#__PURE__*/react["createElement"](AntdIcon["a" /* default */], Object.assign({}, props, {
    ref: ref,
    icon: asn_ArrowRightOutlined
  }));
};

icons_ArrowRightOutlined_ArrowRightOutlined.displayName = 'ArrowRightOutlined';
/* harmony default export */ var icons_ArrowRightOutlined = (/*#__PURE__*/react["forwardRef"](icons_ArrowRightOutlined_ArrowRightOutlined));
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DownOutlined.js + 1 modules
var DownOutlined = __webpack_require__("8Skl");

// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/dropdown.js + 1 modules
var dropdown = __webpack_require__("XBQK");

// CONCATENATED MODULE: ./node_modules/antd/es/breadcrumb/BreadcrumbItem.js


var BreadcrumbItem_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






var BreadcrumbItem_BreadcrumbItem = function BreadcrumbItem(_a) {
  var customizePrefixCls = _a.prefixCls,
      _a$separator = _a.separator,
      separator = _a$separator === void 0 ? '/' : _a$separator,
      children = _a.children,
      overlay = _a.overlay,
      dropdownProps = _a.dropdownProps,
      restProps = BreadcrumbItem_rest(_a, ["prefixCls", "separator", "children", "overlay", "dropdownProps"]);

  var _React$useContext = react["useContext"](config_provider_context["b" /* ConfigContext */]),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('breadcrumb', customizePrefixCls);
  /** If overlay is have Wrap a DropDown */

  var renderBreadcrumbNode = function renderBreadcrumbNode(breadcrumbItem) {
    if (overlay) {
      return /*#__PURE__*/react["createElement"](dropdown["a" /* default */], Object(esm_extends["a" /* default */])({
        overlay: overlay,
        placement: "bottomCenter"
      }, dropdownProps), /*#__PURE__*/react["createElement"]("span", {
        className: "".concat(prefixCls, "-overlay-link")
      }, breadcrumbItem, /*#__PURE__*/react["createElement"](DownOutlined["a" /* default */], null)));
    }

    return breadcrumbItem;
  };

  var link;

  if ('href' in restProps) {
    link = /*#__PURE__*/react["createElement"]("a", Object(esm_extends["a" /* default */])({
      className: "".concat(prefixCls, "-link")
    }, restProps), children);
  } else {
    link = /*#__PURE__*/react["createElement"]("span", Object(esm_extends["a" /* default */])({
      className: "".concat(prefixCls, "-link")
    }, restProps), children);
  } // wrap to dropDown


  link = renderBreadcrumbNode(link);

  if (children) {
    return /*#__PURE__*/react["createElement"]("span", null, link, separator && /*#__PURE__*/react["createElement"]("span", {
      className: "".concat(prefixCls, "-separator")
    }, separator));
  }

  return null;
};

BreadcrumbItem_BreadcrumbItem.__ANT_BREADCRUMB_ITEM = true;
/* harmony default export */ var breadcrumb_BreadcrumbItem = (BreadcrumbItem_BreadcrumbItem);
// CONCATENATED MODULE: ./node_modules/antd/es/breadcrumb/BreadcrumbSeparator.js



var BreadcrumbSeparator_BreadcrumbSeparator = function BreadcrumbSeparator(_ref) {
  var children = _ref.children;

  var _React$useContext = react["useContext"](config_provider_context["b" /* ConfigContext */]),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('breadcrumb');
  return /*#__PURE__*/react["createElement"]("span", {
    className: "".concat(prefixCls, "-separator")
  }, children || '/');
};

BreadcrumbSeparator_BreadcrumbSeparator.__ANT_BREADCRUMB_SEPARATOR = true;
/* harmony default export */ var breadcrumb_BreadcrumbSeparator = (BreadcrumbSeparator_BreadcrumbSeparator);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/devWarning.js
var devWarning = __webpack_require__("uaoM");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__("0n0R");

// CONCATENATED MODULE: ./node_modules/antd/es/breadcrumb/Breadcrumb.js




var Breadcrumb_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};











function getBreadcrumbName(route, params) {
  if (!route.breadcrumbName) {
    return null;
  }

  var paramsKeys = Object.keys(params).join('|');
  var name = route.breadcrumbName.replace(new RegExp(":(".concat(paramsKeys, ")"), 'g'), function (replacement, key) {
    return params[key] || replacement;
  });
  return name;
}

function Breadcrumb_defaultItemRender(route, params, routes, paths) {
  var isLastItem = routes.indexOf(route) === routes.length - 1;
  var name = getBreadcrumbName(route, params);
  return isLastItem ? /*#__PURE__*/react["createElement"]("span", null, name) : /*#__PURE__*/react["createElement"]("a", {
    href: "#/".concat(paths.join('/'))
  }, name);
}

var getPath = function getPath(path, params) {
  path = (path || '').replace(/^\\//, '');
  Object.keys(params).forEach(function (key) {
    path = path.replace(":".concat(key), params[key]);
  });
  return path;
};

var Breadcrumb_addChildPath = function addChildPath(paths) {
  var childPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var params = arguments.length > 2 ? arguments[2] : undefined;

  var originalPaths = Object(toConsumableArray["a" /* default */])(paths);

  var path = getPath(childPath, params);

  if (path) {
    originalPaths.push(path);
  }

  return originalPaths;
};

var Breadcrumb_Breadcrumb = function Breadcrumb(_a) {
  var customizePrefixCls = _a.prefixCls,
      _a$separator = _a.separator,
      separator = _a$separator === void 0 ? '/' : _a$separator,
      style = _a.style,
      className = _a.className,
      routes = _a.routes,
      children = _a.children,
      _a$itemRender = _a.itemRender,
      itemRender = _a$itemRender === void 0 ? Breadcrumb_defaultItemRender : _a$itemRender,
      _a$params = _a.params,
      params = _a$params === void 0 ? {} : _a$params,
      restProps = Breadcrumb_rest(_a, ["prefixCls", "separator", "style", "className", "routes", "children", "itemRender", "params"]);

  var _React$useContext = react["useContext"](config_provider_context["b" /* ConfigContext */]),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var crumbs;
  var prefixCls = getPrefixCls('breadcrumb', customizePrefixCls);

  if (routes && routes.length > 0) {
    // generated by route
    var paths = [];
    crumbs = routes.map(function (route) {
      var path = getPath(route.path, params);

      if (path) {
        paths.push(path);
      } // generated overlay by route.children


      var overlay;

      if (route.children && route.children.length) {
        overlay = /*#__PURE__*/react["createElement"](es_menu["a" /* default */], null, route.children.map(function (child) {
          return /*#__PURE__*/react["createElement"](es_menu["a" /* default */].Item, {
            key: child.path || child.breadcrumbName
          }, itemRender(child, params, routes, Breadcrumb_addChildPath(paths, child.path, params)));
        }));
      }

      return /*#__PURE__*/react["createElement"](breadcrumb_BreadcrumbItem, {
        overlay: overlay,
        separator: separator,
        key: path || route.breadcrumbName
      }, itemRender(route, params, routes, paths));
    });
  } else if (children) {
    crumbs = Object(toArray["a" /* default */])(children).map(function (element, index) {
      if (!element) {
        return element;
      }

      Object(devWarning["a" /* default */])(element.type && (element.type.__ANT_BREADCRUMB_ITEM === true || element.type.__ANT_BREADCRUMB_SEPARATOR === true), 'Breadcrumb', "Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children");
      return Object(reactNode["a" /* cloneElement */])(element, {
        separator: separator,
        key: index
      });
    });
  }

  var breadcrumbClassName = classnames_default()(prefixCls, Object(defineProperty["a" /* default */])({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
  return /*#__PURE__*/react["createElement"]("div", Object(esm_extends["a" /* default */])({
    className: breadcrumbClassName,
    style: style
  }, restProps), crumbs);
};

Breadcrumb_Breadcrumb.Item = breadcrumb_BreadcrumbItem;
Breadcrumb_Breadcrumb.Separator = breadcrumb_BreadcrumbSeparator;
/* harmony default export */ var breadcrumb_Breadcrumb = (Breadcrumb_Breadcrumb);
// CONCATENATED MODULE: ./node_modules/antd/es/breadcrumb/index.js

/* harmony default export */ var es_breadcrumb = (breadcrumb_Breadcrumb);
// EXTERNAL MODULE: ./node_modules/antd/es/avatar/index.js + 5 modules
var es_avatar = __webpack_require__("Tckk");

// CONCATENATED MODULE: ./node_modules/antd/es/_util/transButton.js


var transButton_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * Wrap of sub component which need use as Button capacity (like Icon component).
 *
 * This helps accessibility reader to tread as a interactive button to operation.
 */




var inlineStyle = {
  border: 0,
  background: 'transparent',
  padding: 0,
  lineHeight: 'inherit',
  display: 'inline-block'
};
var TransButton = /*#__PURE__*/react["forwardRef"](function (props, ref) {
  var onKeyDown = function onKeyDown(event) {
    var keyCode = event.keyCode;

    if (keyCode === KeyCode["a" /* default */].ENTER) {
      event.preventDefault();
    }
  };

  var onKeyUp = function onKeyUp(event) {
    var keyCode = event.keyCode;
    var onClick = props.onClick;

    if (keyCode === KeyCode["a" /* default */].ENTER && onClick) {
      onClick();
    }
  };

  var style = props.style,
      noStyle = props.noStyle,
      disabled = props.disabled,
      restProps = transButton_rest(props, ["style", "noStyle", "disabled"]);

  var mergedStyle = {};

  if (!noStyle) {
    mergedStyle = Object(esm_extends["a" /* default */])({}, inlineStyle);
  }

  if (disabled) {
    mergedStyle.pointerEvents = 'none';
  }

  mergedStyle = Object(esm_extends["a" /* default */])(Object(esm_extends["a" /* default */])({}, mergedStyle), style);
  return /*#__PURE__*/react["createElement"]("div", Object(esm_extends["a" /* default */])({
    role: "button",
    tabIndex: 0,
    ref: ref
  }, restProps, {
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp,
    style: mergedStyle
  }));
});
/* harmony default export */ var transButton = (TransButton);
// EXTERNAL MODULE: ./node_modules/antd/es/locale-provider/LocaleReceiver.js + 1 modules
var LocaleReceiver = __webpack_require__("YMnH");

// CONCATENATED MODULE: ./node_modules/antd/es/page-header/index.js













var page_header_renderBack = function renderBack(prefixCls, backIcon, onBack) {
  if (!backIcon || !onBack) {
    return null;
  }

  return /*#__PURE__*/react["createElement"](LocaleReceiver["a" /* default */], {
    componentName: "PageHeader"
  }, function (_ref) {
    var back = _ref.back;
    return /*#__PURE__*/react["createElement"]("div", {
      className: "".concat(prefixCls, "-back")
    }, /*#__PURE__*/react["createElement"](transButton, {
      onClick: function onClick(e) {
        onBack === null || onBack === void 0 ? void 0 : onBack(e);
      },
      className: "".concat(prefixCls, "-back-button"),
      "aria-label": back
    }, backIcon));
  });
};

var page_header_renderBreadcrumb = function renderBreadcrumb(breadcrumb) {
  return /*#__PURE__*/react["createElement"](es_breadcrumb, breadcrumb);
};

var page_header_getBackIcon = function getBackIcon(props) {
  var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ltr';

  if (props.backIcon !== undefined) {
    return props.backIcon;
  }

  return direction === 'rtl' ? /*#__PURE__*/react["createElement"](icons_ArrowRightOutlined, null) : /*#__PURE__*/react["createElement"](icons_ArrowLeftOutlined, null);
};

var page_header_renderTitle = function renderTitle(prefixCls, props) {
  var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'ltr';
  var title = props.title,
      avatar = props.avatar,
      subTitle = props.subTitle,
      tags = props.tags,
      extra = props.extra,
      onBack = props.onBack;
  var headingPrefixCls = "".concat(prefixCls, "-heading");
  var hasHeading = title || subTitle || tags || extra; // If there is nothing, return a null

  if (!hasHeading) {
    return null;
  }

  var backIcon = page_header_getBackIcon(props, direction);
  var backIconDom = page_header_renderBack(prefixCls, backIcon, onBack);
  var hasTitle = backIconDom || avatar || hasHeading;
  return /*#__PURE__*/react["createElement"]("div", {
    className: headingPrefixCls
  }, hasTitle && /*#__PURE__*/react["createElement"]("div", {
    className: "".concat(headingPrefixCls, "-left")
  }, backIconDom, avatar && /*#__PURE__*/react["createElement"](es_avatar["a" /* default */], avatar), title && /*#__PURE__*/react["createElement"]("span", {
    className: "".concat(headingPrefixCls, "-title"),
    title: typeof title === 'string' ? title : undefined
  }, title), subTitle && /*#__PURE__*/react["createElement"]("span", {
    className: "".concat(headingPrefixCls, "-sub-title"),
    title: typeof subTitle === 'string' ? subTitle : undefined
  }, subTitle), tags && /*#__PURE__*/react["createElement"]("span", {
    className: "".concat(headingPrefixCls, "-tags")
  }, tags)), extra && /*#__PURE__*/react["createElement"]("span", {
    className: "".concat(headingPrefixCls, "-extra")
  }, extra));
};

var page_header_renderFooter = function renderFooter(prefixCls, footer) {
  if (footer) {
    return /*#__PURE__*/react["createElement"]("div", {
      className: "".concat(prefixCls, "-footer")
    }, footer);
  }

  return null;
};

var page_header_renderChildren = function renderChildren(prefixCls, children) {
  return /*#__PURE__*/react["createElement"]("div", {
    className: "".concat(prefixCls, "-content")
  }, children);
};

var page_header_PageHeader = function PageHeader(props) {
  var _React$useState = react["useState"](false),
      _React$useState2 = Object(slicedToArray["a" /* default */])(_React$useState, 2),
      compact = _React$useState2[0],
      updateCompact = _React$useState2[1];

  var onResize = function onResize(_ref2) {
    var width = _ref2.width;
    updateCompact(width < 768);
  };

  return /*#__PURE__*/react["createElement"](config_provider_context["a" /* ConfigConsumer */], null, function (_ref3) {
    var _classNames;

    var getPrefixCls = _ref3.getPrefixCls,
        pageHeader = _ref3.pageHeader,
        direction = _ref3.direction;
    var customizePrefixCls = props.prefixCls,
        style = props.style,
        footer = props.footer,
        children = props.children,
        breadcrumb = props.breadcrumb,
        breadcrumbRender = props.breadcrumbRender,
        customizeClassName = props.className;
    var ghost = true; // Use \`ghost\` from \`props\` or from \`ConfigProvider\` instead.

    if ('ghost' in props) {
      ghost = props.ghost;
    } else if (pageHeader && 'ghost' in pageHeader) {
      ghost = pageHeader.ghost;
    }

    var prefixCls = getPrefixCls('page-header', customizePrefixCls);

    var getDefaultBreadcrumbDom = function getDefaultBreadcrumbDom() {
      var _a;

      if ((_a = breadcrumb) === null || _a === void 0 ? void 0 : _a.routes) {
        return page_header_renderBreadcrumb(breadcrumb);
      }

      return null;
    };

    var defaultBreadcrumbDom = getDefaultBreadcrumbDom();
    var isBreadcrumbComponent = breadcrumb && 'props' in breadcrumb; //  support breadcrumbRender function

    var breadcrumbRenderDomFromProps = (breadcrumbRender === null || breadcrumbRender === void 0 ? void 0 : breadcrumbRender(props, defaultBreadcrumbDom)) || defaultBreadcrumbDom;
    var breadcrumbDom = isBreadcrumbComponent ? breadcrumb : breadcrumbRenderDomFromProps;
    var className = classnames_default()(prefixCls, customizeClassName, (_classNames = {
      'has-breadcrumb': !!breadcrumbDom,
      'has-footer': !!footer
    }, Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-ghost"), ghost), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-compact"), compact), _classNames));
    return /*#__PURE__*/react["createElement"](node_modules_rc_resize_observer_es["a" /* default */], {
      onResize: onResize
    }, /*#__PURE__*/react["createElement"]("div", {
      className: className,
      style: style
    }, breadcrumbDom, page_header_renderTitle(prefixCls, props, direction), children && page_header_renderChildren(prefixCls, children), page_header_renderFooter(prefixCls, footer)));
  });
};

/* harmony default export */ var page_header = (page_header_PageHeader);
// EXTERNAL MODULE: ./node_modules/antd/es/tabs/style/index.less
var tabs_style = __webpack_require__("9ama");

// CONCATENATED MODULE: ./node_modules/antd/es/tabs/style/index.js


// EXTERNAL MODULE: ./node_modules/rc-util/es/isMobile.js
var es_isMobile = __webpack_require__("5Z9U");

// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useRaf.js



function useRaf(callback) {
  var rafRef = Object(react["useRef"])();
  var removedRef = Object(react["useRef"])(false);

  function trigger() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!removedRef.current) {
      raf["a" /* default */].cancel(rafRef.current);
      rafRef.current = Object(raf["a" /* default */])(function () {
        callback.apply(void 0, args);
      });
    }
  }

  Object(react["useEffect"])(function () {
    return function () {
      removedRef.current = true;
      raf["a" /* default */].cancel(rafRef.current);
    };
  }, []);
  return trigger;
}
function useRafState(defaultState) {
  var batchRef = Object(react["useRef"])([]);

  var _useState = Object(react["useState"])({}),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      forceUpdate = _useState2[1];

  var state = Object(react["useRef"])(typeof defaultState === 'function' ? defaultState() : defaultState);
  var flushUpdate = useRaf(function () {
    var current = state.current;
    batchRef.current.forEach(function (callback) {
      current = callback(current);
    });
    batchRef.current = [];
    state.current = current;
    forceUpdate({});
  });

  function updater(callback) {
    batchRef.current.push(callback);
    flushUpdate();
  }

  return [state.current, updater];
}
// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabNavList/TabNode.js





function TabNode(_ref, ref) {
  var _classNames;

  var prefixCls = _ref.prefixCls,
      id = _ref.id,
      active = _ref.active,
      rtl = _ref.rtl,
      _ref$tab = _ref.tab,
      key = _ref$tab.key,
      tab = _ref$tab.tab,
      disabled = _ref$tab.disabled,
      closeIcon = _ref$tab.closeIcon,
      tabBarGutter = _ref.tabBarGutter,
      tabPosition = _ref.tabPosition,
      closable = _ref.closable,
      renderWrapper = _ref.renderWrapper,
      removeAriaLabel = _ref.removeAriaLabel,
      editable = _ref.editable,
      onClick = _ref.onClick,
      onRemove = _ref.onRemove,
      onFocus = _ref.onFocus;
  var tabPrefix = "".concat(prefixCls, "-tab");
  react["useEffect"](function () {
    return onRemove;
  }, []);
  var nodeStyle = {};

  if (tabPosition === 'top' || tabPosition === 'bottom') {
    nodeStyle[rtl ? 'marginRight' : 'marginLeft'] = tabBarGutter;
  } else {
    nodeStyle.marginTop = tabBarGutter;
  }

  var removable = editable && closable !== false && !disabled;

  function onInternalClick(e) {
    if (disabled) return;
    onClick(e);
  }

  function onRemoveTab(event) {
    event.preventDefault();
    event.stopPropagation();
    editable.onEdit('remove', {
      key: key,
      event: event
    });
  }

  var node = /*#__PURE__*/react["createElement"]("div", {
    key: key,
    ref: ref,
    className: classnames_default()(tabPrefix, (_classNames = {}, Object(defineProperty["a" /* default */])(_classNames, "".concat(tabPrefix, "-with-remove"), removable), Object(defineProperty["a" /* default */])(_classNames, "".concat(tabPrefix, "-active"), active), Object(defineProperty["a" /* default */])(_classNames, "".concat(tabPrefix, "-disabled"), disabled), _classNames)),
    style: nodeStyle,
    onClick: onInternalClick
  }, /*#__PURE__*/react["createElement"]("div", {
    role: "tab",
    "aria-selected": active,
    id: id && "".concat(id, "-tab-").concat(key),
    className: "".concat(tabPrefix, "-btn"),
    "aria-controls": id && "".concat(id, "-panel-").concat(key),
    "aria-disabled": disabled,
    tabIndex: disabled ? null : 0,
    onClick: function onClick(e) {
      e.stopPropagation();
      onInternalClick(e);
    },
    onKeyDown: function onKeyDown(e) {
      if ([KeyCode["a" /* default */].SPACE, KeyCode["a" /* default */].ENTER].includes(e.which)) {
        e.preventDefault();
        onInternalClick(e);
      }
    },
    onFocus: onFocus
  }, tab), removable && /*#__PURE__*/react["createElement"]("button", {
    type: "button",
    "aria-label": removeAriaLabel || 'remove',
    tabIndex: 0,
    className: "".concat(tabPrefix, "-remove"),
    onClick: function onClick(e) {
      e.stopPropagation();
      onRemoveTab(e);
    }
  }, closeIcon || editable.removeIcon || '\xD7'));

  if (renderWrapper) {
    node = renderWrapper(node);
  }

  return node;
}

/* harmony default export */ var TabNavList_TabNode = (/*#__PURE__*/react["forwardRef"](TabNode));
// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useOffsets.js


var DEFAULT_SIZE = {
  width: 0,
  height: 0,
  left: 0,
  top: 0
};
function useOffsets(tabs, tabSizes, holderScrollWidth) {
  return Object(react["useMemo"])(function () {
    var _tabs$;

    var map = new Map();
    var lastOffset = tabSizes.get((_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.key) || DEFAULT_SIZE;
    var rightOffset = lastOffset.left + lastOffset.width;

    for (var i = 0; i < tabs.length; i += 1) {
      var key = tabs[i].key;
      var data = tabSizes.get(key); // Reuse last one when not exist yet

      if (!data) {
        var _tabs;

        data = tabSizes.get((_tabs = tabs[i - 1]) === null || _tabs === void 0 ? void 0 : _tabs.key) || DEFAULT_SIZE;
      }

      var entity = map.get(key) || Object(objectSpread2["a" /* default */])({}, data); // Right


      entity.right = rightOffset - entity.left - entity.width; // Update entity

      map.set(key, entity);
    }

    return map;
  }, [tabs.map(function (tab) {
    return tab.key;
  }).join('_'), tabSizes, holderScrollWidth]);
}
// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useVisibleRange.js

var useVisibleRange_DEFAULT_SIZE = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  right: 0
};
function useVisibleRange(tabOffsets, containerSize, tabContentNodeSize, addNodeSize, _ref) {
  var tabs = _ref.tabs,
      tabPosition = _ref.tabPosition,
      rtl = _ref.rtl;
  var unit;
  var position;
  var transformSize;

  if (['top', 'bottom'].includes(tabPosition)) {
    unit = 'width';
    position = rtl ? 'right' : 'left';
    transformSize = Math.abs(containerSize.left);
  } else {
    unit = 'height';
    position = 'top';
    transformSize = -containerSize.top;
  }

  var basicSize = containerSize[unit];
  var tabContentSize = tabContentNodeSize[unit];
  var addSize = addNodeSize[unit];
  var mergedBasicSize = basicSize;

  if (tabContentSize + addSize > basicSize) {
    mergedBasicSize = basicSize - addSize;
  }

  return Object(react["useMemo"])(function () {
    if (!tabs.length) {
      return [0, 0];
    }

    var len = tabs.length;
    var endIndex = len;

    for (var i = 0; i < len; i += 1) {
      var offset = tabOffsets.get(tabs[i].key) || useVisibleRange_DEFAULT_SIZE;

      if (offset[position] + offset[unit] > transformSize + mergedBasicSize) {
        endIndex = i - 1;
        break;
      }
    }

    var startIndex = 0;

    for (var _i = len - 1; _i >= 0; _i -= 1) {
      var _offset = tabOffsets.get(tabs[_i].key) || useVisibleRange_DEFAULT_SIZE;

      if (_offset[position] < transformSize) {
        startIndex = _i + 1;
        break;
      }
    }

    return [startIndex, endIndex];
  }, [tabOffsets, transformSize, mergedBasicSize, tabPosition, tabs.map(function (tab) {
    return tab.key;
  }).join('_'), rtl]);
}
// EXTERNAL MODULE: ./node_modules/rc-menu/es/index.js + 24 modules
var rc_menu_es = __webpack_require__("1j5w");

// EXTERNAL MODULE: ./node_modules/rc-dropdown/es/index.js + 2 modules
var rc_dropdown_es = __webpack_require__("eDIo");

// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabNavList/AddButton.js


function AddButton(_ref, ref) {
  var prefixCls = _ref.prefixCls,
      editable = _ref.editable,
      locale = _ref.locale,
      style = _ref.style;

  if (!editable || editable.showAdd === false) {
    return null;
  }

  return /*#__PURE__*/react["createElement"]("button", {
    ref: ref,
    type: "button",
    className: "".concat(prefixCls, "-nav-add"),
    style: style,
    "aria-label": (locale === null || locale === void 0 ? void 0 : locale.addAriaLabel) || 'Add tab',
    onClick: function onClick(event) {
      editable.onEdit('add', {
        event: event
      });
    }
  }, editable.addIcon || '+');
}

/* harmony default export */ var TabNavList_AddButton = (/*#__PURE__*/react["forwardRef"](AddButton));
// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabNavList/OperationNode.js










function OperationNode(_ref, ref) {
  var prefixCls = _ref.prefixCls,
      id = _ref.id,
      tabs = _ref.tabs,
      locale = _ref.locale,
      mobile = _ref.mobile,
      _ref$moreIcon = _ref.moreIcon,
      moreIcon = _ref$moreIcon === void 0 ? 'More' : _ref$moreIcon,
      moreTransitionName = _ref.moreTransitionName,
      style = _ref.style,
      className = _ref.className,
      editable = _ref.editable,
      tabBarGutter = _ref.tabBarGutter,
      rtl = _ref.rtl,
      onTabClick = _ref.onTabClick;

  // ======================== Dropdown ========================
  var _useState = Object(react["useState"])(false),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = Object(react["useState"])(null),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      selectedKey = _useState4[0],
      setSelectedKey = _useState4[1];

  var popupId = "".concat(id, "-more-popup");
  var dropdownPrefix = "".concat(prefixCls, "-dropdown");
  var selectedItemId = selectedKey !== null ? "".concat(popupId, "-").concat(selectedKey) : null;
  var dropdownAriaLabel = locale === null || locale === void 0 ? void 0 : locale.dropdownAriaLabel;
  var menu = /*#__PURE__*/react["createElement"](rc_menu_es["f" /* default */], {
    onClick: function onClick(_ref2) {
      var key = _ref2.key,
          domEvent = _ref2.domEvent;
      onTabClick(key, domEvent);
      setOpen(false);
    },
    id: popupId,
    tabIndex: -1,
    role: "listbox",
    "aria-activedescendant": selectedItemId,
    selectedKeys: [selectedKey],
    "aria-label": dropdownAriaLabel !== undefined ? dropdownAriaLabel : 'expanded dropdown'
  }, tabs.map(function (tab) {
    return /*#__PURE__*/react["createElement"](rc_menu_es["d" /* MenuItem */], {
      key: tab.key,
      id: "".concat(popupId, "-").concat(tab.key),
      role: "option",
      "aria-controls": id && "".concat(id, "-panel-").concat(tab.key),
      disabled: tab.disabled
    }, tab.tab);
  }));

  function selectOffset(offset) {
    var enabledTabs = tabs.filter(function (tab) {
      return !tab.disabled;
    });
    var selectedIndex = enabledTabs.findIndex(function (tab) {
      return tab.key === selectedKey;
    }) || 0;
    var len = enabledTabs.length;

    for (var i = 0; i < len; i += 1) {
      selectedIndex = (selectedIndex + offset + len) % len;
      var tab = enabledTabs[selectedIndex];

      if (!tab.disabled) {
        setSelectedKey(tab.key);
        return;
      }
    }
  }

  function onKeyDown(e) {
    var which = e.which;

    if (!open) {
      if ([KeyCode["a" /* default */].DOWN, KeyCode["a" /* default */].SPACE, KeyCode["a" /* default */].ENTER].includes(which)) {
        setOpen(true);
        e.preventDefault();
      }

      return;
    }

    switch (which) {
      case KeyCode["a" /* default */].UP:
        selectOffset(-1);
        e.preventDefault();
        break;

      case KeyCode["a" /* default */].DOWN:
        selectOffset(1);
        e.preventDefault();
        break;

      case KeyCode["a" /* default */].ESC:
        setOpen(false);
        break;

      case KeyCode["a" /* default */].SPACE:
      case KeyCode["a" /* default */].ENTER:
        if (selectedKey !== null) onTabClick(selectedKey, e);
        break;
    }
  } // ========================= Effect =========================


  Object(react["useEffect"])(function () {
    // We use query element here to avoid React strict warning
    var ele = document.getElementById(selectedItemId);

    if (ele && ele.scrollIntoView) {
      ele.scrollIntoView(false);
    }
  }, [selectedKey]);
  Object(react["useEffect"])(function () {
    if (!open) {
      setSelectedKey(null);
    }
  }, [open]); // ========================= Render =========================

  var moreStyle = Object(defineProperty["a" /* default */])({}, rtl ? 'marginRight' : 'marginLeft', tabBarGutter);

  if (!tabs.length) {
    moreStyle.visibility = 'hidden';
    moreStyle.order = 1;
  }

  var overlayClassName = classnames_default()(Object(defineProperty["a" /* default */])({}, "".concat(dropdownPrefix, "-rtl"), rtl));
  var moreNode = mobile ? null : /*#__PURE__*/react["createElement"](rc_dropdown_es["a" /* default */], {
    prefixCls: dropdownPrefix,
    overlay: menu,
    trigger: ['hover'],
    visible: open,
    transitionName: moreTransitionName,
    onVisibleChange: setOpen,
    overlayClassName: overlayClassName,
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1
  }, /*#__PURE__*/react["createElement"]("button", {
    type: "button",
    className: "".concat(prefixCls, "-nav-more"),
    style: moreStyle,
    tabIndex: -1,
    "aria-hidden": "true",
    "aria-haspopup": "listbox",
    "aria-controls": popupId,
    id: "".concat(id, "-more"),
    "aria-expanded": open,
    onKeyDown: onKeyDown
  }, moreIcon));
  return /*#__PURE__*/react["createElement"]("div", {
    className: classnames_default()("".concat(prefixCls, "-nav-operations"), className),
    style: style,
    ref: ref
  }, moreNode, /*#__PURE__*/react["createElement"](TabNavList_AddButton, {
    prefixCls: prefixCls,
    locale: locale,
    editable: editable
  }));
}

/* harmony default export */ var TabNavList_OperationNode = (/*#__PURE__*/react["forwardRef"](OperationNode));
// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabContext.js

/* harmony default export */ var TabContext = (/*#__PURE__*/Object(react["createContext"])(null));
// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useTouchMove.js



var MIN_SWIPE_DISTANCE = 0.1;
var STOP_SWIPE_DISTANCE = 0.01;
var REFRESH_INTERVAL = 20;
var SPEED_OFF_MULTIPLE = Math.pow(0.995, REFRESH_INTERVAL); // ================================= Hook =================================

function useTouchMove(ref, onOffset) {
  var _useState = Object(react["useState"])(),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      touchPosition = _useState2[0],
      setTouchPosition = _useState2[1];

  var _useState3 = Object(react["useState"])(0),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      lastTimestamp = _useState4[0],
      setLastTimestamp = _useState4[1];

  var _useState5 = Object(react["useState"])(0),
      _useState6 = Object(slicedToArray["a" /* default */])(_useState5, 2),
      lastTimeDiff = _useState6[0],
      setLastTimeDiff = _useState6[1];

  var _useState7 = Object(react["useState"])(),
      _useState8 = Object(slicedToArray["a" /* default */])(_useState7, 2),
      lastOffset = _useState8[0],
      setLastOffset = _useState8[1];

  var motionRef = Object(react["useRef"])(); // ========================= Events =========================
  // >>> Touch events

  function onTouchStart(e) {
    var _e$touches$ = e.touches[0],
        screenX = _e$touches$.screenX,
        screenY = _e$touches$.screenY;
    setTouchPosition({
      x: screenX,
      y: screenY
    });
    window.clearInterval(motionRef.current);
  }

  function onTouchMove(e) {
    if (!touchPosition) return;
    e.preventDefault();
    var _e$touches$2 = e.touches[0],
        screenX = _e$touches$2.screenX,
        screenY = _e$touches$2.screenY;
    setTouchPosition({
      x: screenX,
      y: screenY
    });
    var offsetX = screenX - touchPosition.x;
    var offsetY = screenY - touchPosition.y;
    onOffset(offsetX, offsetY);
    var now = Date.now();
    setLastTimestamp(now);
    setLastTimeDiff(now - lastTimestamp);
    setLastOffset({
      x: offsetX,
      y: offsetY
    });
  }

  function onTouchEnd() {
    if (!touchPosition) return;
    setTouchPosition(null);
    setLastOffset(null); // Swipe if needed

    if (lastOffset) {
      var distanceX = lastOffset.x / lastTimeDiff;
      var distanceY = lastOffset.y / lastTimeDiff;
      var absX = Math.abs(distanceX);
      var absY = Math.abs(distanceY); // Skip swipe if low distance

      if (Math.max(absX, absY) < MIN_SWIPE_DISTANCE) return;
      var currentX = distanceX;
      var currentY = distanceY;
      motionRef.current = window.setInterval(function () {
        if (Math.abs(currentX) < STOP_SWIPE_DISTANCE && Math.abs(currentY) < STOP_SWIPE_DISTANCE) {
          window.clearInterval(motionRef.current);
          return;
        }

        currentX *= SPEED_OFF_MULTIPLE;
        currentY *= SPEED_OFF_MULTIPLE;
        onOffset(currentX * REFRESH_INTERVAL, currentY * REFRESH_INTERVAL);
      }, REFRESH_INTERVAL);
    }
  } // >>> Wheel event


  var lastWheelDirectionRef = Object(react["useRef"])();

  function onWheel(e) {
    var deltaX = e.deltaX,
        deltaY = e.deltaY; // Convert both to x & y since wheel only happened on PC

    var mixed = 0;
    var absX = Math.abs(deltaX);
    var absY = Math.abs(deltaY);

    if (absX === absY) {
      mixed = lastWheelDirectionRef.current === 'x' ? deltaX : deltaY;
    } else if (absX > absY) {
      mixed = deltaX;
      lastWheelDirectionRef.current = 'x';
    } else {
      mixed = deltaY;
      lastWheelDirectionRef.current = 'y';
    }

    if (onOffset(-mixed, -mixed)) {
      e.preventDefault();
    }
  } // ========================= Effect =========================


  var touchEventsRef = Object(react["useRef"])(null);
  touchEventsRef.current = {
    onTouchStart: onTouchStart,
    onTouchMove: onTouchMove,
    onTouchEnd: onTouchEnd,
    onWheel: onWheel
  };
  react["useEffect"](function () {
    function onProxyTouchStart(e) {
      touchEventsRef.current.onTouchStart(e);
    }

    function onProxyTouchMove(e) {
      touchEventsRef.current.onTouchMove(e);
    }

    function onProxyTouchEnd(e) {
      touchEventsRef.current.onTouchEnd(e);
    }

    function onProxyWheel(e) {
      touchEventsRef.current.onWheel(e);
    }

    document.addEventListener('touchmove', onProxyTouchMove, {
      passive: false
    });
    document.addEventListener('touchend', onProxyTouchEnd, {
      passive: false
    }); // No need to clean up since element removed

    ref.current.addEventListener('touchstart', onProxyTouchStart, {
      passive: false
    });
    ref.current.addEventListener('wheel', onProxyWheel);
    return function () {
      document.removeEventListener('touchmove', onProxyTouchMove);
      document.removeEventListener('touchend', onProxyTouchEnd);
    };
  }, []);
}
// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useRefs.js


function useRefs() {
  var cacheRefs = Object(react["useRef"])(new Map());

  function getRef(key) {
    if (!cacheRefs.current.has(key)) {
      cacheRefs.current.set(key, /*#__PURE__*/react["createRef"]());
    }

    return cacheRefs.current.get(key);
  }

  function removeRef(key) {
    cacheRefs.current.delete(key);
  }

  return [getRef, removeRef];
}
// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useSyncState.js


function useSyncState(defaultState, onChange) {
  var stateRef = react["useRef"](defaultState);

  var _React$useState = react["useState"]({}),
      _React$useState2 = Object(slicedToArray["a" /* default */])(_React$useState, 2),
      forceUpdate = _React$useState2[1];

  function setState(updater) {
    var newValue = typeof updater === 'function' ? updater(stateRef.current) : updater;

    if (newValue !== stateRef.current) {
      onChange(newValue, stateRef.current);
    }

    stateRef.current = newValue;
    forceUpdate({});
  }

  return [stateRef.current, setState];
}
// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabNavList/index.js





















var TabNavList_ExtraContent = function ExtraContent(_ref) {
  var position = _ref.position,
      prefixCls = _ref.prefixCls,
      extra = _ref.extra;
  if (!extra) return null;
  var content;
  var assertExtra = extra;

  if (position === 'right') {
    content = assertExtra.right || !assertExtra.left && assertExtra || null;
  }

  if (position === 'left') {
    content = assertExtra.left || null;
  }

  return content ? /*#__PURE__*/react["createElement"]("div", {
    className: "".concat(prefixCls, "-extra-content")
  }, content) : null;
};

function TabNavList(props, ref) {
  var _classNames;

  var _React$useContext = react["useContext"](TabContext),
      prefixCls = _React$useContext.prefixCls,
      tabs = _React$useContext.tabs;

  var className = props.className,
      style = props.style,
      id = props.id,
      animated = props.animated,
      activeKey = props.activeKey,
      rtl = props.rtl,
      extra = props.extra,
      editable = props.editable,
      locale = props.locale,
      tabPosition = props.tabPosition,
      tabBarGutter = props.tabBarGutter,
      children = props.children,
      onTabClick = props.onTabClick,
      onTabScroll = props.onTabScroll;
  var tabsWrapperRef = Object(react["useRef"])();
  var tabListRef = Object(react["useRef"])();
  var operationsRef = Object(react["useRef"])();
  var innerAddButtonRef = Object(react["useRef"])();

  var _useRefs = useRefs(),
      _useRefs2 = Object(slicedToArray["a" /* default */])(_useRefs, 2),
      getBtnRef = _useRefs2[0],
      removeBtnRef = _useRefs2[1];

  var tabPositionTopOrBottom = tabPosition === 'top' || tabPosition === 'bottom';

  var _useSyncState = useSyncState(0, function (next, prev) {
    if (tabPositionTopOrBottom && onTabScroll) {
      onTabScroll({
        direction: next > prev ? 'left' : 'right'
      });
    }
  }),
      _useSyncState2 = Object(slicedToArray["a" /* default */])(_useSyncState, 2),
      transformLeft = _useSyncState2[0],
      setTransformLeft = _useSyncState2[1];

  var _useSyncState3 = useSyncState(0, function (next, prev) {
    if (!tabPositionTopOrBottom && onTabScroll) {
      onTabScroll({
        direction: next > prev ? 'top' : 'bottom'
      });
    }
  }),
      _useSyncState4 = Object(slicedToArray["a" /* default */])(_useSyncState3, 2),
      transformTop = _useSyncState4[0],
      setTransformTop = _useSyncState4[1];

  var _useState = Object(react["useState"])(0),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      wrapperScrollWidth = _useState2[0],
      setWrapperScrollWidth = _useState2[1];

  var _useState3 = Object(react["useState"])(0),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      wrapperScrollHeight = _useState4[0],
      setWrapperScrollHeight = _useState4[1];

  var _useState5 = Object(react["useState"])(0),
      _useState6 = Object(slicedToArray["a" /* default */])(_useState5, 2),
      wrapperContentWidth = _useState6[0],
      setWrapperContentWidth = _useState6[1];

  var _useState7 = Object(react["useState"])(0),
      _useState8 = Object(slicedToArray["a" /* default */])(_useState7, 2),
      wrapperContentHeight = _useState8[0],
      setWrapperContentHeight = _useState8[1];

  var _useState9 = Object(react["useState"])(null),
      _useState10 = Object(slicedToArray["a" /* default */])(_useState9, 2),
      wrapperWidth = _useState10[0],
      setWrapperWidth = _useState10[1];

  var _useState11 = Object(react["useState"])(null),
      _useState12 = Object(slicedToArray["a" /* default */])(_useState11, 2),
      wrapperHeight = _useState12[0],
      setWrapperHeight = _useState12[1];

  var _useState13 = Object(react["useState"])(0),
      _useState14 = Object(slicedToArray["a" /* default */])(_useState13, 2),
      addWidth = _useState14[0],
      setAddWidth = _useState14[1];

  var _useState15 = Object(react["useState"])(0),
      _useState16 = Object(slicedToArray["a" /* default */])(_useState15, 2),
      addHeight = _useState16[0],
      setAddHeight = _useState16[1];

  var _useRafState = useRafState(new Map()),
      _useRafState2 = Object(slicedToArray["a" /* default */])(_useRafState, 2),
      tabSizes = _useRafState2[0],
      setTabSizes = _useRafState2[1];

  var tabOffsets = useOffsets(tabs, tabSizes, wrapperScrollWidth); // ========================== Util =========================

  var operationsHiddenClassName = "".concat(prefixCls, "-nav-operations-hidden");
  var transformMin = 0;
  var transformMax = 0;

  if (!tabPositionTopOrBottom) {
    transformMin = Math.min(0, wrapperHeight - wrapperScrollHeight);
    transformMax = 0;
  } else if (rtl) {
    transformMin = 0;
    transformMax = Math.max(0, wrapperScrollWidth - wrapperWidth);
  } else {
    transformMin = Math.min(0, wrapperWidth - wrapperScrollWidth);
    transformMax = 0;
  }

  function alignInRange(value) {
    if (value < transformMin) {
      return transformMin;
    }

    if (value > transformMax) {
      return transformMax;
    }

    return value;
  } // ========================= Mobile ========================


  var touchMovingRef = Object(react["useRef"])();

  var _useState17 = Object(react["useState"])(),
      _useState18 = Object(slicedToArray["a" /* default */])(_useState17, 2),
      lockAnimation = _useState18[0],
      setLockAnimation = _useState18[1];

  function doLockAnimation() {
    setLockAnimation(Date.now());
  }

  function clearTouchMoving() {
    window.clearTimeout(touchMovingRef.current);
  }

  useTouchMove(tabsWrapperRef, function (offsetX, offsetY) {
    function doMove(setState, offset) {
      setState(function (value) {
        var newValue = alignInRange(value + offset);
        return newValue;
      });
    }

    if (tabPositionTopOrBottom) {
      // Skip scroll if place is enough
      if (wrapperWidth >= wrapperScrollWidth) {
        return false;
      }

      doMove(setTransformLeft, offsetX);
    } else {
      if (wrapperHeight >= wrapperScrollHeight) {
        return false;
      }

      doMove(setTransformTop, offsetY);
    }

    clearTouchMoving();
    doLockAnimation();
    return true;
  });
  Object(react["useEffect"])(function () {
    clearTouchMoving();

    if (lockAnimation) {
      touchMovingRef.current = window.setTimeout(function () {
        setLockAnimation(0);
      }, 100);
    }

    return clearTouchMoving;
  }, [lockAnimation]); // ========================= Scroll ========================

  function scrollToTab() {
    var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : activeKey;
    var tabOffset = tabOffsets.get(key) || {
      width: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0
    };

    if (tabPositionTopOrBottom) {
      // ============ Align with top & bottom ============
      var newTransform = transformLeft; // RTL

      if (rtl) {
        if (tabOffset.right < transformLeft) {
          newTransform = tabOffset.right;
        } else if (tabOffset.right + tabOffset.width > transformLeft + wrapperWidth) {
          newTransform = tabOffset.right + tabOffset.width - wrapperWidth;
        }
      } // LTR
      else if (tabOffset.left < -transformLeft) {
          newTransform = -tabOffset.left;
        } else if (tabOffset.left + tabOffset.width > -transformLeft + wrapperWidth) {
          newTransform = -(tabOffset.left + tabOffset.width - wrapperWidth);
        }

      setTransformTop(0);
      setTransformLeft(alignInRange(newTransform));
    } else {
      // ============ Align with left & right ============
      var _newTransform = transformTop;

      if (tabOffset.top < -transformTop) {
        _newTransform = -tabOffset.top;
      } else if (tabOffset.top + tabOffset.height > -transformTop + wrapperHeight) {
        _newTransform = -(tabOffset.top + tabOffset.height - wrapperHeight);
      }

      setTransformLeft(0);
      setTransformTop(alignInRange(_newTransform));
    }
  } // ========================== Tab ==========================
  // Render tab node & collect tab offset


  var _useVisibleRange = useVisibleRange(tabOffsets, {
    width: wrapperWidth,
    height: wrapperHeight,
    left: transformLeft,
    top: transformTop
  }, {
    width: wrapperContentWidth,
    height: wrapperContentHeight
  }, {
    width: addWidth,
    height: addHeight
  }, Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, props), {}, {
    tabs: tabs
  })),
      _useVisibleRange2 = Object(slicedToArray["a" /* default */])(_useVisibleRange, 2),
      visibleStart = _useVisibleRange2[0],
      visibleEnd = _useVisibleRange2[1];

  var tabNodes = tabs.map(function (tab) {
    var key = tab.key;
    return /*#__PURE__*/react["createElement"](TabNavList_TabNode, {
      id: id,
      prefixCls: prefixCls,
      key: key,
      rtl: rtl,
      tab: tab,
      closable: tab.closable,
      editable: editable,
      active: key === activeKey,
      tabPosition: tabPosition,
      tabBarGutter: tabBarGutter,
      renderWrapper: children,
      removeAriaLabel: locale === null || locale === void 0 ? void 0 : locale.removeAriaLabel,
      ref: getBtnRef(key),
      onClick: function onClick(e) {
        onTabClick(key, e);
      },
      onRemove: function onRemove() {
        removeBtnRef(key);
      },
      onFocus: function onFocus() {
        scrollToTab(key);
        doLockAnimation(); // Focus element will make scrollLeft change which we should reset back

        if (!rtl) {
          tabsWrapperRef.current.scrollLeft = 0;
        }

        tabsWrapperRef.current.scrollTop = 0;
      }
    });
  });
  var onListHolderResize = useRaf(function () {
    var _tabsWrapperRef$curre, _tabsWrapperRef$curre2, _innerAddButtonRef$cu, _innerAddButtonRef$cu2, _operationsRef$curren, _operationsRef$curren2, _tabListRef$current, _tabListRef$current2, _operationsRef$curren3;

    // Update wrapper records
    var offsetWidth = ((_tabsWrapperRef$curre = tabsWrapperRef.current) === null || _tabsWrapperRef$curre === void 0 ? void 0 : _tabsWrapperRef$curre.offsetWidth) || 0;
    var offsetHeight = ((_tabsWrapperRef$curre2 = tabsWrapperRef.current) === null || _tabsWrapperRef$curre2 === void 0 ? void 0 : _tabsWrapperRef$curre2.offsetHeight) || 0;
    var newAddWidth = ((_innerAddButtonRef$cu = innerAddButtonRef.current) === null || _innerAddButtonRef$cu === void 0 ? void 0 : _innerAddButtonRef$cu.offsetWidth) || 0;
    var newAddHeight = ((_innerAddButtonRef$cu2 = innerAddButtonRef.current) === null || _innerAddButtonRef$cu2 === void 0 ? void 0 : _innerAddButtonRef$cu2.offsetHeight) || 0;
    var newOperationWidth = ((_operationsRef$curren = operationsRef.current) === null || _operationsRef$curren === void 0 ? void 0 : _operationsRef$curren.offsetWidth) || 0;
    var newOperationHeight = ((_operationsRef$curren2 = operationsRef.current) === null || _operationsRef$curren2 === void 0 ? void 0 : _operationsRef$curren2.offsetHeight) || 0;
    setWrapperWidth(offsetWidth);
    setWrapperHeight(offsetHeight);
    setAddWidth(newAddWidth);
    setAddHeight(newAddHeight);
    var newWrapperScrollWidth = (((_tabListRef$current = tabListRef.current) === null || _tabListRef$current === void 0 ? void 0 : _tabListRef$current.offsetWidth) || 0) - newAddWidth;
    var newWrapperScrollHeight = (((_tabListRef$current2 = tabListRef.current) === null || _tabListRef$current2 === void 0 ? void 0 : _tabListRef$current2.offsetHeight) || 0) - newAddHeight;
    setWrapperScrollWidth(newWrapperScrollWidth);
    setWrapperScrollHeight(newWrapperScrollHeight);
    var isOperationHidden = (_operationsRef$curren3 = operationsRef.current) === null || _operationsRef$curren3 === void 0 ? void 0 : _operationsRef$curren3.className.includes(operationsHiddenClassName);
    setWrapperContentWidth(newWrapperScrollWidth - (isOperationHidden ? 0 : newOperationWidth));
    setWrapperContentHeight(newWrapperScrollHeight - (isOperationHidden ? 0 : newOperationHeight)); // Update buttons records

    setTabSizes(function () {
      var newSizes = new Map();
      tabs.forEach(function (_ref2) {
        var key = _ref2.key;
        var btnNode = getBtnRef(key).current;

        if (btnNode) {
          newSizes.set(key, {
            width: btnNode.offsetWidth,
            height: btnNode.offsetHeight,
            left: btnNode.offsetLeft,
            top: btnNode.offsetTop
          });
        }
      });
      return newSizes;
    });
  }); // ======================== Dropdown =======================

  var startHiddenTabs = tabs.slice(0, visibleStart);
  var endHiddenTabs = tabs.slice(visibleEnd + 1);
  var hiddenTabs = [].concat(Object(toConsumableArray["a" /* default */])(startHiddenTabs), Object(toConsumableArray["a" /* default */])(endHiddenTabs)); // =================== Link & Operations ===================

  var _useState19 = Object(react["useState"])(),
      _useState20 = Object(slicedToArray["a" /* default */])(_useState19, 2),
      inkStyle = _useState20[0],
      setInkStyle = _useState20[1];

  var activeTabOffset = tabOffsets.get(activeKey); // Delay set ink style to avoid remove tab blink

  var inkBarRafRef = Object(react["useRef"])();

  function cleanInkBarRaf() {
    raf["a" /* default */].cancel(inkBarRafRef.current);
  }

  Object(react["useEffect"])(function () {
    var newInkStyle = {};

    if (activeTabOffset) {
      if (tabPositionTopOrBottom) {
        if (rtl) {
          newInkStyle.right = activeTabOffset.right;
        } else {
          newInkStyle.left = activeTabOffset.left;
        }

        newInkStyle.width = activeTabOffset.width;
      } else {
        newInkStyle.top = activeTabOffset.top;
        newInkStyle.height = activeTabOffset.height;
      }
    }

    cleanInkBarRaf();
    inkBarRafRef.current = Object(raf["a" /* default */])(function () {
      setInkStyle(newInkStyle);
    });
    return cleanInkBarRaf;
  }, [activeTabOffset, tabPositionTopOrBottom, rtl]); // ========================= Effect ========================

  Object(react["useEffect"])(function () {
    scrollToTab();
  }, [activeKey, activeTabOffset, tabOffsets, tabPositionTopOrBottom]); // Should recalculate when rtl changed

  Object(react["useEffect"])(function () {
    onListHolderResize();
  }, [rtl, tabBarGutter, activeKey, tabs.map(function (tab) {
    return tab.key;
  }).join('_')]); // ========================= Render ========================

  var hasDropdown = !!hiddenTabs.length;
  var wrapPrefix = "".concat(prefixCls, "-nav-wrap");
  var pingLeft;
  var pingRight;
  var pingTop;
  var pingBottom;

  if (tabPositionTopOrBottom) {
    if (rtl) {
      pingRight = transformLeft > 0;
      pingLeft = transformLeft + wrapperWidth < wrapperScrollWidth;
    } else {
      pingLeft = transformLeft < 0;
      pingRight = -transformLeft + wrapperWidth < wrapperScrollWidth;
    }
  } else {
    pingTop = transformTop < 0;
    pingBottom = -transformTop + wrapperHeight < wrapperScrollHeight;
  }

  return /*#__PURE__*/react["createElement"]("div", {
    ref: ref,
    role: "tablist",
    className: classnames_default()("".concat(prefixCls, "-nav"), className),
    style: style,
    onKeyDown: function onKeyDown() {
      // No need animation when use keyboard
      doLockAnimation();
    }
  }, /*#__PURE__*/react["createElement"](TabNavList_ExtraContent, {
    position: "left",
    extra: extra,
    prefixCls: prefixCls
  }), /*#__PURE__*/react["createElement"](node_modules_rc_resize_observer_es["a" /* default */], {
    onResize: onListHolderResize
  }, /*#__PURE__*/react["createElement"]("div", {
    className: classnames_default()(wrapPrefix, (_classNames = {}, Object(defineProperty["a" /* default */])(_classNames, "".concat(wrapPrefix, "-ping-left"), pingLeft), Object(defineProperty["a" /* default */])(_classNames, "".concat(wrapPrefix, "-ping-right"), pingRight), Object(defineProperty["a" /* default */])(_classNames, "".concat(wrapPrefix, "-ping-top"), pingTop), Object(defineProperty["a" /* default */])(_classNames, "".concat(wrapPrefix, "-ping-bottom"), pingBottom), _classNames)),
    ref: tabsWrapperRef
  }, /*#__PURE__*/react["createElement"](node_modules_rc_resize_observer_es["a" /* default */], {
    onResize: onListHolderResize
  }, /*#__PURE__*/react["createElement"]("div", {
    ref: tabListRef,
    className: "".concat(prefixCls, "-nav-list"),
    style: {
      transform: "translate(".concat(transformLeft, "px, ").concat(transformTop, "px)"),
      transition: lockAnimation ? 'none' : undefined
    }
  }, tabNodes, /*#__PURE__*/react["createElement"](TabNavList_AddButton, {
    ref: innerAddButtonRef,
    prefixCls: prefixCls,
    locale: locale,
    editable: editable,
    style: {
      visibility: hasDropdown ? 'hidden' : null
    }
  }), /*#__PURE__*/react["createElement"]("div", {
    className: classnames_default()("".concat(prefixCls, "-ink-bar"), Object(defineProperty["a" /* default */])({}, "".concat(prefixCls, "-ink-bar-animated"), animated.inkBar)),
    style: inkStyle
  }))))), /*#__PURE__*/react["createElement"](TabNavList_OperationNode, Object(esm_extends["a" /* default */])({}, props, {
    ref: operationsRef,
    prefixCls: prefixCls,
    tabs: hiddenTabs,
    className: !hasDropdown && operationsHiddenClassName
  })), /*#__PURE__*/react["createElement"](TabNavList_ExtraContent, {
    position: "right",
    extra: extra,
    prefixCls: prefixCls
  }));
  /* eslint-enable */
}

/* harmony default export */ var es_TabNavList = (/*#__PURE__*/react["forwardRef"](TabNavList));
// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabPanelList/index.js




function TabPanelList(_ref) {
  var id = _ref.id,
      activeKey = _ref.activeKey,
      animated = _ref.animated,
      tabPosition = _ref.tabPosition,
      rtl = _ref.rtl,
      destroyInactiveTabPane = _ref.destroyInactiveTabPane;

  var _React$useContext = react["useContext"](TabContext),
      prefixCls = _React$useContext.prefixCls,
      tabs = _React$useContext.tabs;

  var tabPaneAnimated = animated.tabPane;
  var activeIndex = tabs.findIndex(function (tab) {
    return tab.key === activeKey;
  });
  return /*#__PURE__*/react["createElement"]("div", {
    className: classnames_default()("".concat(prefixCls, "-content-holder"))
  }, /*#__PURE__*/react["createElement"]("div", {
    className: classnames_default()("".concat(prefixCls, "-content"), "".concat(prefixCls, "-content-").concat(tabPosition), Object(defineProperty["a" /* default */])({}, "".concat(prefixCls, "-content-animated"), tabPaneAnimated)),
    style: activeIndex && tabPaneAnimated ? Object(defineProperty["a" /* default */])({}, rtl ? 'marginRight' : 'marginLeft', "-".concat(activeIndex, "00%")) : null
  }, tabs.map(function (tab) {
    return /*#__PURE__*/react["cloneElement"](tab.node, {
      key: tab.key,
      prefixCls: prefixCls,
      tabKey: tab.key,
      id: id,
      animated: tabPaneAnimated,
      active: tab.key === activeKey,
      destroyInactiveTabPane: destroyInactiveTabPane
    });
  })));
}
// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabPanelList/TabPane.js




function TabPane(_ref) {
  var prefixCls = _ref.prefixCls,
      forceRender = _ref.forceRender,
      className = _ref.className,
      style = _ref.style,
      id = _ref.id,
      active = _ref.active,
      animated = _ref.animated,
      destroyInactiveTabPane = _ref.destroyInactiveTabPane,
      tabKey = _ref.tabKey,
      children = _ref.children;

  var _React$useState = react["useState"](forceRender),
      _React$useState2 = Object(slicedToArray["a" /* default */])(_React$useState, 2),
      visited = _React$useState2[0],
      setVisited = _React$useState2[1];

  react["useEffect"](function () {
    if (active) {
      setVisited(true);
    } else if (destroyInactiveTabPane) {
      setVisited(false);
    }
  }, [active, destroyInactiveTabPane]);
  var mergedStyle = {};

  if (!active) {
    if (animated) {
      mergedStyle.visibility = 'hidden';
      mergedStyle.height = 0;
      mergedStyle.overflowY = 'hidden';
    } else {
      mergedStyle.display = 'none';
    }
  }

  return /*#__PURE__*/react["createElement"]("div", {
    id: id && "".concat(id, "-panel-").concat(tabKey),
    role: "tabpanel",
    tabIndex: active ? 0 : -1,
    "aria-labelledby": id && "".concat(id, "-tab-").concat(tabKey),
    "aria-hidden": !active,
    style: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, mergedStyle), style),
    className: classnames_default()("".concat(prefixCls, "-tabpane"), active && "".concat(prefixCls, "-tabpane-active"), className)
  }, (active || visited || forceRender) && children);
}
// CONCATENATED MODULE: ./node_modules/rc-tabs/es/Tabs.js






// Accessibility https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role










/**
 * Should added antd:
 * - type
 *
 * Removed:
 * - onNextClick
 * - onPrevClick
 * - keyboard
 */
// Used for accessibility

var Tabs_uuid = 0;

function parseTabList(children) {
  return Object(toArray["a" /* default */])(children).map(function (node) {
    if ( /*#__PURE__*/react["isValidElement"](node)) {
      var key = node.key !== undefined ? String(node.key) : undefined;
      return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({
        key: key
      }, node.props), {}, {
        node: node
      });
    }

    return null;
  }).filter(function (tab) {
    return tab;
  });
}

function Tabs(_ref, ref) {
  var _classNames;

  var id = _ref.id,
      _ref$prefixCls = _ref.prefixCls,
      prefixCls = _ref$prefixCls === void 0 ? 'rc-tabs' : _ref$prefixCls,
      className = _ref.className,
      children = _ref.children,
      direction = _ref.direction,
      activeKey = _ref.activeKey,
      defaultActiveKey = _ref.defaultActiveKey,
      editable = _ref.editable,
      _ref$animated = _ref.animated,
      animated = _ref$animated === void 0 ? {
    inkBar: true,
    tabPane: false
  } : _ref$animated,
      _ref$tabPosition = _ref.tabPosition,
      tabPosition = _ref$tabPosition === void 0 ? 'top' : _ref$tabPosition,
      tabBarGutter = _ref.tabBarGutter,
      tabBarStyle = _ref.tabBarStyle,
      tabBarExtraContent = _ref.tabBarExtraContent,
      locale = _ref.locale,
      moreIcon = _ref.moreIcon,
      moreTransitionName = _ref.moreTransitionName,
      destroyInactiveTabPane = _ref.destroyInactiveTabPane,
      renderTabBar = _ref.renderTabBar,
      onChange = _ref.onChange,
      onTabClick = _ref.onTabClick,
      onTabScroll = _ref.onTabScroll,
      restProps = Object(objectWithoutProperties["a" /* default */])(_ref, ["id", "prefixCls", "className", "children", "direction", "activeKey", "defaultActiveKey", "editable", "animated", "tabPosition", "tabBarGutter", "tabBarStyle", "tabBarExtraContent", "locale", "moreIcon", "moreTransitionName", "destroyInactiveTabPane", "renderTabBar", "onChange", "onTabClick", "onTabScroll"]);

  var tabs = parseTabList(children);
  var rtl = direction === 'rtl';
  var mergedAnimated;

  if (animated === false) {
    mergedAnimated = {
      inkBar: false,
      tabPane: false
    };
  } else if (animated === true) {
    mergedAnimated = {
      inkBar: true,
      tabPane: true
    };
  } else {
    mergedAnimated = Object(objectSpread2["a" /* default */])({
      inkBar: true,
      tabPane: false
    }, Object(esm_typeof["a" /* default */])(animated) === 'object' ? animated : {});
  } // ======================== Mobile ========================


  var _useState = Object(react["useState"])(false),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      mobile = _useState2[0],
      setMobile = _useState2[1];

  Object(react["useEffect"])(function () {
    // Only update on the client side
    setMobile(Object(es_isMobile["a" /* default */])());
  }, []); // ====================== Active Key ======================

  var _useMergedState = Object(useMergedState["a" /* default */])(function () {
    var _tabs$;

    return (_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.key;
  }, {
    value: activeKey,
    defaultValue: defaultActiveKey
  }),
      _useMergedState2 = Object(slicedToArray["a" /* default */])(_useMergedState, 2),
      mergedActiveKey = _useMergedState2[0],
      setMergedActiveKey = _useMergedState2[1];

  var _useState3 = Object(react["useState"])(function () {
    return tabs.findIndex(function (tab) {
      return tab.key === mergedActiveKey;
    });
  }),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      activeIndex = _useState4[0],
      setActiveIndex = _useState4[1]; // Reset active key if not exist anymore


  Object(react["useEffect"])(function () {
    var newActiveIndex = tabs.findIndex(function (tab) {
      return tab.key === mergedActiveKey;
    });

    if (newActiveIndex === -1) {
      var _tabs$newActiveIndex;

      newActiveIndex = Math.max(0, Math.min(activeIndex, tabs.length - 1));
      setMergedActiveKey((_tabs$newActiveIndex = tabs[newActiveIndex]) === null || _tabs$newActiveIndex === void 0 ? void 0 : _tabs$newActiveIndex.key);
    }

    setActiveIndex(newActiveIndex);
  }, [tabs.map(function (tab) {
    return tab.key;
  }).join('_'), mergedActiveKey, activeIndex]); // ===================== Accessibility ====================

  var _useMergedState3 = Object(useMergedState["a" /* default */])(null, {
    value: id
  }),
      _useMergedState4 = Object(slicedToArray["a" /* default */])(_useMergedState3, 2),
      mergedId = _useMergedState4[0],
      setMergedId = _useMergedState4[1];

  var mergedTabPosition = tabPosition;

  if (mobile && !['left', 'right'].includes(tabPosition)) {
    mergedTabPosition = 'top';
  } // Async generate id to avoid ssr mapping failed


  Object(react["useEffect"])(function () {
    if (!id) {
      setMergedId("rc-tabs-".concat( false ? undefined : Tabs_uuid));
      Tabs_uuid += 1;
    }
  }, []); // ======================== Events ========================

  function onInternalTabClick(key, e) {
    onTabClick === null || onTabClick === void 0 ? void 0 : onTabClick(key, e);
    setMergedActiveKey(key);
    onChange === null || onChange === void 0 ? void 0 : onChange(key);
  } // ======================== Render ========================


  var sharedProps = {
    id: mergedId,
    activeKey: mergedActiveKey,
    animated: mergedAnimated,
    tabPosition: mergedTabPosition,
    rtl: rtl,
    mobile: mobile
  };
  var tabNavBar;

  var tabNavBarProps = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, sharedProps), {}, {
    editable: editable,
    locale: locale,
    moreIcon: moreIcon,
    moreTransitionName: moreTransitionName,
    tabBarGutter: tabBarGutter,
    onTabClick: onInternalTabClick,
    onTabScroll: onTabScroll,
    extra: tabBarExtraContent,
    style: tabBarStyle,
    panes: children
  });

  if (renderTabBar) {
    tabNavBar = renderTabBar(tabNavBarProps, es_TabNavList);
  } else {
    tabNavBar = /*#__PURE__*/react["createElement"](es_TabNavList, tabNavBarProps);
  }

  return /*#__PURE__*/react["createElement"](TabContext.Provider, {
    value: {
      tabs: tabs,
      prefixCls: prefixCls
    }
  }, /*#__PURE__*/react["createElement"]("div", Object(esm_extends["a" /* default */])({
    ref: ref,
    id: id,
    className: classnames_default()(prefixCls, "".concat(prefixCls, "-").concat(mergedTabPosition), (_classNames = {}, Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-mobile"), mobile), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-editable"), editable), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-rtl"), rtl), _classNames), className)
  }, restProps), tabNavBar, /*#__PURE__*/react["createElement"](TabPanelList, Object(esm_extends["a" /* default */])({
    destroyInactiveTabPane: destroyInactiveTabPane
  }, sharedProps, {
    animated: mergedAnimated
  }))));
}

var ForwardTabs = /*#__PURE__*/react["forwardRef"](Tabs);
ForwardTabs.TabPane = TabPane;
/* harmony default export */ var es_Tabs = (ForwardTabs);
// CONCATENATED MODULE: ./node_modules/rc-tabs/es/index.js



/* harmony default export */ var rc_tabs_es = (es_Tabs);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js + 1 modules
var EllipsisOutlined = __webpack_require__("GZ0F");

// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/PlusOutlined.js
// This icon file is generated automatically.
var PlusOutlined_PlusOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "defs", "attrs": {}, "children": [{ "tag": "style", "attrs": {} }] }, { "tag": "path", "attrs": { "d": "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { "tag": "path", "attrs": { "d": "M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" } }] }, "name": "plus", "theme": "outlined" };
/* harmony default export */ var asn_PlusOutlined = (PlusOutlined_PlusOutlined);

// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/PlusOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_PlusOutlined_PlusOutlined = function PlusOutlined(props, ref) {
  return /*#__PURE__*/react["createElement"](AntdIcon["a" /* default */], Object.assign({}, props, {
    ref: ref,
    icon: asn_PlusOutlined
  }));
};

icons_PlusOutlined_PlusOutlined.displayName = 'PlusOutlined';
/* harmony default export */ var icons_PlusOutlined = (/*#__PURE__*/react["forwardRef"](icons_PlusOutlined_PlusOutlined));
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__("3Nzz");

// CONCATENATED MODULE: ./node_modules/antd/es/tabs/index.js



var tabs_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};











function tabs_Tabs(_a) {
  var type = _a.type,
      className = _a.className,
      propSize = _a.size,
      _onEdit = _a.onEdit,
      hideAdd = _a.hideAdd,
      centered = _a.centered,
      addIcon = _a.addIcon,
      props = tabs_rest(_a, ["type", "className", "size", "onEdit", "hideAdd", "centered", "addIcon"]);

  var customizePrefixCls = props.prefixCls,
      _props$moreIcon = props.moreIcon,
      moreIcon = _props$moreIcon === void 0 ? /*#__PURE__*/react["createElement"](EllipsisOutlined["a" /* default */], null) : _props$moreIcon;

  var _React$useContext = react["useContext"](config_provider_context["b" /* ConfigContext */]),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var prefixCls = getPrefixCls('tabs', customizePrefixCls);
  var editable;

  if (type === 'editable-card') {
    editable = {
      onEdit: function onEdit(editType, _ref) {
        var key = _ref.key,
            event = _ref.event;
        _onEdit === null || _onEdit === void 0 ? void 0 : _onEdit(editType === 'add' ? event : key, editType);
      },
      removeIcon: /*#__PURE__*/react["createElement"](CloseOutlined["a" /* default */], null),
      addIcon: addIcon || /*#__PURE__*/react["createElement"](icons_PlusOutlined, null),
      showAdd: hideAdd !== true
    };
  }

  var rootPrefixCls = getPrefixCls();
  Object(devWarning["a" /* default */])(!('onPrevClick' in props) && !('onNextClick' in props), 'Tabs', '\`onPrevClick\` and \`onNextClick\` has been removed. Please use \`onTabScroll\` instead.');
  return /*#__PURE__*/react["createElement"](SizeContext["b" /* default */].Consumer, null, function (contextSize) {
    var _classNames;

    var size = propSize !== undefined ? propSize : contextSize;
    return /*#__PURE__*/react["createElement"](rc_tabs_es, Object(esm_extends["a" /* default */])({
      direction: direction,
      moreTransitionName: "".concat(rootPrefixCls, "-slide-up")
    }, props, {
      className: classnames_default()((_classNames = {}, Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-").concat(size), size), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-card"), ['card', 'editable-card'].includes(type)), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-editable-card"), type === 'editable-card'), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-centered"), centered), _classNames), className),
      editable: editable,
      moreIcon: moreIcon,
      prefixCls: prefixCls
    }));
  });
}

tabs_Tabs.TabPane = TabPane;
/* harmony default export */ var es_tabs = (tabs_Tabs);
// EXTERNAL MODULE: ./node_modules/@ant-design/pro-layout/es/components/GridContent/GridContent.less
var GridContent_GridContent = __webpack_require__("DnfT");

// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/GridContent/index.js






/**
 * This component can support contentWidth so you don't need to calculate the width
 * contentWidth=Fixed, width will is 1200
 *
 * @param props
 */

var components_GridContent_GridContent = function GridContent(props) {
  var value = Object(react["useContext"])(RouteContext);
  var children = props.children,
      propsContentWidth = props.contentWidth,
      propsClassName = props.className,
      style = props.style;

  var _useContext = Object(react["useContext"])(config_provider["a" /* default */].ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var prefixCls = props.prefixCls || getPrefixCls('pro');
  var contentWidth = propsContentWidth || value.contentWidth;
  var className = "".concat(prefixCls, "-grid-content");
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: classnames_default()(className, propsClassName, {
      wide: contentWidth === 'Fixed'
    }),
    style: style
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(prefixCls, "-grid-content-children")
  }, children));
};

/* harmony default export */ var components_GridContent = (components_GridContent_GridContent);
// EXTERNAL MODULE: ./node_modules/@ant-design/pro-layout/es/components/FooterToolbar/index.less
var components_FooterToolbar = __webpack_require__("rsCp");

// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/FooterToolbar/index.js


var FooterToolbar_excluded = ["children", "className", "extra", "style", "renderContent"];

function FooterToolbar_extends() { FooterToolbar_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return FooterToolbar_extends.apply(this, arguments); }

function FooterToolbar_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function FooterToolbar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { FooterToolbar_ownKeys(Object(source), true).forEach(function (key) { FooterToolbar_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { FooterToolbar_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function FooterToolbar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function FooterToolbar_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = FooterToolbar_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function FooterToolbar_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var FooterToolbar_FooterToolbar = function FooterToolbar(props) {
  var children = props.children,
      className = props.className,
      extra = props.extra,
      style = props.style,
      renderContent = props.renderContent,
      restProps = FooterToolbar_objectWithoutProperties(props, FooterToolbar_excluded);

  var _useContext = Object(react["useContext"])(config_provider["a" /* default */].ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var prefixCls = props.prefixCls || getPrefixCls('pro');
  var baseClassName = "".concat(prefixCls, "-footer-bar");
  var value = Object(react["useContext"])(RouteContext);
  var width = Object(react["useMemo"])(function () {
    var hasSiderMenu = value.hasSiderMenu,
        isMobile = value.isMobile,
        siderWidth = value.siderWidth;

    if (!hasSiderMenu) {
      return undefined;
    } // 0 or undefined


    if (!siderWidth) {
      return '100%';
    }

    return isMobile ? '100%' : "calc(100% - ".concat(siderWidth, "px)");
  }, [value.collapsed, value.hasSiderMenu, value.isMobile, value.siderWidth]);
  var dom = /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(baseClassName, "-left")
  }, extra), /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(baseClassName, "-right")
  }, children));
  /** \u544A\u8BC9 props \u662F\u5426\u5B58\u5728 footerBar */

  Object(react["useEffect"])(function () {
    if (!value || !(value === null || value === void 0 ? void 0 : value.setHasFooterToolbar)) {
      return function () {};
    }

    value === null || value === void 0 ? void 0 : value.setHasFooterToolbar(true);
    return function () {
      var _value$setHasFooterTo;

      value === null || value === void 0 ? void 0 : (_value$setHasFooterTo = value.setHasFooterToolbar) === null || _value$setHasFooterTo === void 0 ? void 0 : _value$setHasFooterTo.call(value, false);
    };
  }, []);
  return /*#__PURE__*/react_default.a.createElement("div", FooterToolbar_extends({
    className: classnames_default()(className, "".concat(baseClassName)),
    style: FooterToolbar_objectSpread({
      width: width
    }, style)
  }, omit_js_es(restProps, ['prefixCls'])), renderContent ? renderContent(FooterToolbar_objectSpread(FooterToolbar_objectSpread(FooterToolbar_objectSpread({}, props), value), {}, {
    leftWidth: width
  }), dom) : dom);
};

/* harmony default export */ var es_components_FooterToolbar = (FooterToolbar_FooterToolbar);
// EXTERNAL MODULE: ./node_modules/@ant-design/pro-layout/es/components/PageContainer/index.less
var components_PageContainer = __webpack_require__("u/V1");

// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/WaterMark/index.js



function WaterMark_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function WaterMark_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { WaterMark_ownKeys(Object(source), true).forEach(function (key) { WaterMark_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { WaterMark_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function WaterMark_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function WaterMark_slicedToArray(arr, i) { return WaterMark_arrayWithHoles(arr) || WaterMark_iterableToArrayLimit(arr, i) || WaterMark_unsupportedIterableToArray(arr, i) || WaterMark_nonIterableRest(); }

function WaterMark_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function WaterMark_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return WaterMark_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return WaterMark_arrayLikeToArray(o, minLen); }

function WaterMark_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function WaterMark_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function WaterMark_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



/**
 * \u8FD4\u56DE\u5F53\u524D\u663E\u793A\u8BBE\u5907\u7684\u7269\u7406\u50CF\u7D20\u5206\u8FA8\u7387\u4E0ECSS\u50CF\u7D20\u5206\u8FA8\u7387\u4E4B\u6BD4
 *
 * @param context
 * @see api \u6709\u4E9B\u5E9F\u5F03\u4E86\uFF0C\u5176\u5B9E\u7C7B\u578B CanvasRenderingContext2D
 */

var getPixelRatio = function getPixelRatio(context) {
  if (!context) {
    return 1;
  }

  var backingStore = context.backingStorePixelRatio || context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
  return (window.devicePixelRatio || 1) / backingStore;
};

var WaterMark_WaterMark = function WaterMark(props) {
  var children = props.children,
      style = props.style,
      className = props.className,
      markStyle = props.markStyle,
      markClassName = props.markClassName,
      _props$zIndex = props.zIndex,
      zIndex = _props$zIndex === void 0 ? 9 : _props$zIndex,
      _props$gapX = props.gapX,
      gapX = _props$gapX === void 0 ? 212 : _props$gapX,
      _props$gapY = props.gapY,
      gapY = _props$gapY === void 0 ? 222 : _props$gapY,
      _props$width = props.width,
      width = _props$width === void 0 ? 120 : _props$width,
      _props$height = props.height,
      height = _props$height === void 0 ? 64 : _props$height,
      _props$rotate = props.rotate,
      rotate = _props$rotate === void 0 ? -22 : _props$rotate,
      image = props.image,
      content = props.content,
      offsetLeft = props.offsetLeft,
      offsetTop = props.offsetTop,
      _props$fontStyle = props.fontStyle,
      fontStyle = _props$fontStyle === void 0 ? 'normal' : _props$fontStyle,
      _props$fontWeight = props.fontWeight,
      fontWeight = _props$fontWeight === void 0 ? 'normal' : _props$fontWeight,
      _props$fontColor = props.fontColor,
      fontColor = _props$fontColor === void 0 ? 'rgba(0,0,0,.15)' : _props$fontColor,
      _props$fontSize = props.fontSize,
      fontSize = _props$fontSize === void 0 ? 16 : _props$fontSize,
      _props$fontFamily = props.fontFamily,
      fontFamily = _props$fontFamily === void 0 ? 'sans-serif' : _props$fontFamily,
      customizePrefixCls = props.prefixCls;

  var _useContext = Object(react["useContext"])(config_provider["a" /* default */].ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var prefixCls = getPrefixCls('pro-layout-watermark', customizePrefixCls);
  var wrapperCls = classnames_default()("".concat(prefixCls, "-wrapper"), className);
  var waterMakrCls = classnames_default()(prefixCls, markClassName);

  var _useState = Object(react["useState"])(''),
      _useState2 = WaterMark_slicedToArray(_useState, 2),
      base64Url = _useState2[0],
      setBase64Url = _useState2[1];

  Object(react["useEffect"])(function () {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var ratio = getPixelRatio(ctx);
    var canvasWidth = "".concat((gapX + width) * ratio, "px");
    var canvasHeight = "".concat((gapY + height) * ratio, "px");
    var canvasOffsetLeft = offsetLeft || gapX / 2;
    var canvasOffsetTop = offsetTop || gapY / 2;
    canvas.setAttribute('width', canvasWidth);
    canvas.setAttribute('height', canvasHeight);

    if (ctx) {
      // \u65CB\u8F6C\u5B57\u7B26 rotate
      ctx.translate(canvasOffsetLeft * ratio, canvasOffsetTop * ratio);
      ctx.rotate(Math.PI / 180 * Number(rotate));
      var markWidth = width * ratio;
      var markHeight = height * ratio;

      if (image) {
        var img = new Image();
        img.crossOrigin = 'anonymous';
        img.referrerPolicy = 'no-referrer';
        img.src = image;

        img.onload = function () {
          ctx.drawImage(img, 0, 0, markWidth, markHeight);
          setBase64Url(canvas.toDataURL());
        };
      } else if (content) {
        var markSize = Number(fontSize) * ratio;
        ctx.font = "".concat(fontStyle, " normal ").concat(fontWeight, " ").concat(markSize, "px/").concat(markHeight, "px ").concat(fontFamily);
        ctx.fillStyle = fontColor;
        ctx.fillText(content, 0, 0);
        setBase64Url(canvas.toDataURL());
      }
    } else {
      // eslint-disable-next-line no-console
      console.error('\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas');
    }
  }, [gapX, gapY, offsetLeft, offsetTop, rotate, fontStyle, fontWeight, width, height, fontFamily, fontColor, image, content, fontSize]);
  return /*#__PURE__*/react_default.a.createElement("div", {
    style: WaterMark_objectSpread({
      position: 'relative'
    }, style),
    className: wrapperCls
  }, children, /*#__PURE__*/react_default.a.createElement("div", {
    className: waterMakrCls,
    style: WaterMark_objectSpread({
      zIndex: zIndex,
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      backgroundSize: "".concat(gapX + width, "px"),
      pointerEvents: 'none',
      backgroundRepeat: 'repeat',
      backgroundImage: "url('".concat(base64Url, "')")
    }, markStyle)
  }));
};

/* harmony default export */ var components_WaterMark = (WaterMark_WaterMark);
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/components/PageContainer/index.js








var PageContainer_excluded = ["title", "content", "pageHeaderRender", "header", "extraContent", "style", "prefixCls"];

function PageContainer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function PageContainer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { PageContainer_ownKeys(Object(source), true).forEach(function (key) { PageContainer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { PageContainer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function PageContainer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function PageContainer_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = PageContainer_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function PageContainer_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PageContainer_extends() { PageContainer_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return PageContainer_extends.apply(this, arguments); }

function PageContainer_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PageContainer_typeof = function _typeof(obj) { return typeof obj; }; } else { PageContainer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PageContainer_typeof(obj); }










function genLoading(spinProps) {
  if (PageContainer_typeof(spinProps) === 'object') {
    return spinProps;
  }

  return {
    spinning: spinProps
  };
}
/**
 * Render Footer tabList In order to be compatible with the old version of the PageHeader basically
 * all the functions are implemented.
 */


var PageContainer_renderFooter = function renderFooter(_ref) {
  var tabList = _ref.tabList,
      tabActiveKey = _ref.tabActiveKey,
      onTabChange = _ref.onTabChange,
      tabBarExtraContent = _ref.tabBarExtraContent,
      tabProps = _ref.tabProps,
      prefixedClassName = _ref.prefixedClassName;

  if (tabList && tabList.length) {
    return /*#__PURE__*/react_default.a.createElement(es_tabs, PageContainer_extends({
      className: "".concat(prefixedClassName, "-tabs"),
      activeKey: tabActiveKey,
      onChange: function onChange(key) {
        if (onTabChange) {
          onTabChange(key);
        }
      },
      tabBarExtraContent: tabBarExtraContent
    }, tabProps), tabList.map(function (item, index) {
      return (
        /*#__PURE__*/
        // eslint-disable-next-line react/no-array-index-key
        react_default.a.createElement(es_tabs.TabPane, PageContainer_extends({}, item, {
          tab: item.tab,
          key: item.key || index
        }))
      );
    }));
  }

  return null;
};

var PageContainer_renderPageHeader = function renderPageHeader(content, extraContent, prefixedClassName) {
  if (!content && !extraContent) {
    return null;
  }

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(prefixedClassName, "-detail")
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(prefixedClassName, "-main")
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(prefixedClassName, "-row")
  }, content && /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(prefixedClassName, "-content")
  }, content), extraContent && /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(prefixedClassName, "-extraContent")
  }, extraContent))));
};

var PageContainer_defaultPageHeaderRender = function defaultPageHeaderRender(props, value) {
  var _breadcrumb$routes;

  var title = props.title,
      content = props.content,
      pageHeaderRender = props.pageHeaderRender,
      header = props.header,
      extraContent = props.extraContent,
      style = props.style,
      prefixCls = props.prefixCls,
      restProps = PageContainer_objectWithoutProperties(props, PageContainer_excluded);

  if (pageHeaderRender === false) {
    return null;
  }

  if (pageHeaderRender) {
    return pageHeaderRender(PageContainer_objectSpread(PageContainer_objectSpread({}, props), value));
  }

  var pageHeaderTitle = title;

  if (!title && title !== false) {
    pageHeaderTitle = value.title;
  }

  var pageHeaderProps = PageContainer_objectSpread(PageContainer_objectSpread(PageContainer_objectSpread({}, value), {}, {
    title: pageHeaderTitle
  }, restProps), {}, {
    footer: PageContainer_renderFooter(PageContainer_objectSpread(PageContainer_objectSpread({}, restProps), {}, {
      prefixedClassName: value.prefixedClassName
    }))
  }, header);

  var breadcrumb = pageHeaderProps.breadcrumb;

  if (['title', 'subTitle', 'breadcrumb', 'extra', 'tags', 'footer', 'avatar', 'backIcon'].every(function (item) {
    return !pageHeaderProps[item];
  }) && (!breadcrumb || !(breadcrumb === null || breadcrumb === void 0 ? void 0 : breadcrumb.itemRender) && !(breadcrumb === null || breadcrumb === void 0 ? void 0 : (_breadcrumb$routes = breadcrumb.routes) === null || _breadcrumb$routes === void 0 ? void 0 : _breadcrumb$routes.length)) && !content && !extraContent) {
    return null;
  }

  return /*#__PURE__*/react_default.a.createElement(page_header, PageContainer_extends({}, pageHeaderProps, {
    breadcrumb: PageContainer_objectSpread(PageContainer_objectSpread({}, pageHeaderProps.breadcrumb), value.breadcrumbProps),
    prefixCls: prefixCls
  }), (header === null || header === void 0 ? void 0 : header.children) || PageContainer_renderPageHeader(content, extraContent, value.prefixedClassName));
};

var PageContainer_PageContainer = function PageContainer(props) {
  var children = props.children,
      _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading,
      style = props.style,
      footer = props.footer,
      affixProps = props.affixProps,
      ghost = props.ghost,
      fixedHeader = props.fixedHeader;
  var value = Object(react["useContext"])(RouteContext);

  var _useContext = Object(react["useContext"])(config_provider["a" /* default */].ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var prefixCls = props.prefixCls || getPrefixCls('pro');
  var prefixedClassName = "".concat(prefixCls, "-page-container");
  var className = classnames_default()(prefixedClassName, props.className, PageContainer_defineProperty({}, "".concat(prefixCls, "-page-container-ghost"), ghost));
  var content = children ? /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(prefixedClassName, "-children-content")
  }, children), value.hasFooterToolbar && /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      height: 48,
      marginTop: 24
    }
  })) : null;
  var pageHeaderDom = PageContainer_defaultPageHeaderRender(props, PageContainer_objectSpread(PageContainer_objectSpread({}, value), {}, {
    prefixCls: undefined,
    prefixedClassName: prefixedClassName
  }));
  var headerDom = pageHeaderDom ? /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(prefixedClassName, "-warp")
  }, pageHeaderDom) : null;

  var renderContent = function renderContent() {
    var spinProps = genLoading(loading);
    var dom = spinProps.spinning ? /*#__PURE__*/react_default.a.createElement(components_PageLoading, spinProps) : content;

    if (props.waterMarkProps || value.waterMarkProps) {
      return /*#__PURE__*/react_default.a.createElement(components_WaterMark, props.waterMarkProps || value.waterMarkProps, dom);
    }

    return dom;
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    style: style,
    className: className
  }, fixedHeader && headerDom ?
  /*#__PURE__*/
  // \u5728 hasHeader \u4E14 fixedHeader \u7684\u60C5\u51B5\u4E0B\uFF0C\u624D\u9700\u8981\u8BBE\u7F6E\u9AD8\u5EA6
  react_default.a.createElement(es_affix, PageContainer_extends({
    offsetTop: value.hasHeader && value.fixedHeader ? value.headerHeight : 0
  }, affixProps), headerDom) : headerDom, /*#__PURE__*/react_default.a.createElement(components_GridContent, null, renderContent()), footer && /*#__PURE__*/react_default.a.createElement(es_components_FooterToolbar, {
    prefixCls: prefixCls
  }, footer));
};

/* harmony default export */ var es_components_PageContainer = (PageContainer_PageContainer);
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/index.js













var PageHeaderWrapper = es_components_PageContainer;

/* harmony default export */ var pro_layout_es = __webpack_exports__["a"] = (pro_layout_es_BasicLayout);

//# sourceURL=webpack:///./node_modules/@ant-design/pro-layout/es/index.js_+_149_modules?`)},KAsB:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/antd/es/dropdown/style/index.less?`)},LcsW:function(module,exports,__webpack_require__){eval(`var overArg = __webpack_require__("kekF");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


//# sourceURL=webpack:///./node_modules/lodash/_getPrototype.js?`)},MrPd:function(module,exports,__webpack_require__){eval(`var baseAssignValue = __webpack_require__("hypo"),
    eq = __webpack_require__("ljhN");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns \`value\` to \`key\` of \`object\` if the existing value is not equivalent
 * using [\`SameValueZero\`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


//# sourceURL=webpack:///./node_modules/lodash/_assignValue.js?`)},O0oS:function(module,exports,__webpack_require__){eval(`var getNative = __webpack_require__("Cwc5");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


//# sourceURL=webpack:///./node_modules/lodash/_defineProperty.js?`)},OBhP:function(module,exports,__webpack_require__){eval(`var Stack = __webpack_require__("fmRc"),
    arrayEach = __webpack_require__("gFfm"),
    assignValue = __webpack_require__("MrPd"),
    baseAssign = __webpack_require__("WwFo"),
    baseAssignIn = __webpack_require__("Dw+G"),
    cloneBuffer = __webpack_require__("5Tg0"),
    copyArray = __webpack_require__("Q1l4"),
    copySymbols = __webpack_require__("VOtZ"),
    copySymbolsIn = __webpack_require__("EEGq"),
    getAllKeys = __webpack_require__("qZTm"),
    getAllKeysIn = __webpack_require__("G6z8"),
    getTag = __webpack_require__("QqLw"),
    initCloneArray = __webpack_require__("yHx3"),
    initCloneByTag = __webpack_require__("wrZu"),
    initCloneObject = __webpack_require__("+iFO"),
    isArray = __webpack_require__("Z0cm"),
    isBuffer = __webpack_require__("DSRE"),
    isMap = __webpack_require__("zEVN"),
    isObject = __webpack_require__("GoyQ"),
    isSet = __webpack_require__("1+5i"),
    keys = __webpack_require__("7GkX"),
    keysIn = __webpack_require__("mTTR");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** \`Object#toString\` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify \`toStringTag\` values supported by \`_.clone\`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of \`_.clone\` and \`_.cloneDeep\` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of \`value\`.
 * @param {Object} [object] The parent object of \`value\`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


//# sourceURL=webpack:///./node_modules/lodash/_baseClone.js?`)},Q1l4:function(module,exports){eval(`/**
 * Copies the values of \`source\` to \`array\`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns \`array\`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


//# sourceURL=webpack:///./node_modules/lodash/_copyArray.js?`)},Q9mQ:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cIOH");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("UADf");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);

 // style dependencies
// deps-lint-skip: tooltip

//# sourceURL=webpack:///./node_modules/antd/es/popover/style/index.js?`)},QcOe:function(module,exports,__webpack_require__){eval(`var isObject = __webpack_require__("GoyQ"),
    isPrototype = __webpack_require__("6sVZ"),
    nativeKeysIn = __webpack_require__("7Ix3");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of \`_.keysIn\` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


//# sourceURL=webpack:///./node_modules/lodash/_baseKeysIn.js?`)},Qv07:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var _umijs_route_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GOef");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function fromEntries(iterable) {
  return _toConsumableArray(iterable).reduce(function (obj, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        val = _ref2[1];

    // eslint-disable-next-line no-param-reassign
    obj[key] = val;
    return obj;
  }, {});
}

/* harmony default export */ __webpack_exports__["a"] = (function (routes, menu, formatMessage, menuDataRender) {
  var _transformRoute = Object(_umijs_route_utils__WEBPACK_IMPORTED_MODULE_0__[/* transformRoute */ "c"])(routes, (menu === null || menu === void 0 ? void 0 : menu.locale) || false, formatMessage, true),
      menuData = _transformRoute.menuData,
      breadcrumb = _transformRoute.breadcrumb;

  if (!menuDataRender) {
    return {
      breadcrumb: fromEntries(breadcrumb),
      breadcrumbMap: breadcrumb,
      menuData: menuData
    };
  }

  var renderData = Object(_umijs_route_utils__WEBPACK_IMPORTED_MODULE_0__[/* transformRoute */ "c"])(menuDataRender(menuData), (menu === null || menu === void 0 ? void 0 : menu.locale) || false, formatMessage, true);
  return {
    breadcrumb: fromEntries(renderData.breadcrumb),
    breadcrumbMap: renderData.breadcrumb,
    menuData: renderData.menuData
  };
});

//# sourceURL=webpack:///./node_modules/@ant-design/pro-layout/es/utils/getMenuData.js?`)},Re9Q:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/@ant-design/pro-layout/es/components/SiderMenu/index.less?`)},T2oS:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cIOH");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YBTB");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);



//# sourceURL=webpack:///./node_modules/antd/es/spin/style/index.js?`)},UADf:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/antd/es/popover/style/index.less?`)},UPUD:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/@ant-design/pro-layout/es/components/TopNavHeader/index.less?`)},VOtZ:function(module,exports,__webpack_require__){eval(`var copyObject = __webpack_require__("juv8"),
    getSymbols = __webpack_require__("MvSz");

/**
 * Copies own symbols of \`source\` to \`object\`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns \`object\`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


//# sourceURL=webpack:///./node_modules/lodash/_copySymbols.js?`)},W3vr:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/@ant-design/pro-layout/es/components/GlobalHeader/index.less?`)},WwFo:function(module,exports,__webpack_require__){eval(`var copyObject = __webpack_require__("juv8"),
    keys = __webpack_require__("7GkX");

/**
 * The base implementation of \`_.assign\` without support for multiple sources
 * or \`customizer\` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns \`object\`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


//# sourceURL=webpack:///./node_modules/lodash/_baseAssign.js?`)},XYm9:function(module,exports,__webpack_require__){eval(`var cloneArrayBuffer = __webpack_require__("+K+b");

/**
 * Creates a clone of \`dataView\`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


//# sourceURL=webpack:///./node_modules/lodash/_cloneDataView.js?`)},YBTB:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/antd/es/spin/style/index.less?`)},YPDd:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/@ant-design/pro-layout/es/Header.less?`)},"YV/h":function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/antd/es/page-header/style/index.less?`)},b2z7:function(module,exports){eval(`/** Used to match \`RegExp\` flags from their coerced string values. */
var reFlags = /\\w*$/;

/**
 * Creates a clone of \`regexp\`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


//# sourceURL=webpack:///./node_modules/lodash/_cloneRegExp.js?`)},dTAl:function(module,exports,__webpack_require__){eval(`var isObject = __webpack_require__("GoyQ");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of \`_.create\` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


//# sourceURL=webpack:///./node_modules/lodash/_baseCreate.js?`)},gFfm:function(module,exports){eval(`/**
 * A specialized version of \`_.forEach\` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns \`array\`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


//# sourceURL=webpack:///./node_modules/lodash/_arrayEach.js?`)},hNau:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* unused harmony export parse */
/* unused harmony export compile */
/* unused harmony export tokensToFunction */
/* unused harmony export match */
/* unused harmony export regexpToFunction */
/* unused harmony export tokensToRegexp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pathToRegexp; });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // \`0-9\`
                (code >= 48 && code <= 57) ||
                    // \`A-Z\`
                    (code >= 65 && code <= 90) ||
                    // \`a-z\`
                    (code >= 97 && code <= 122) ||
                    // \`_\`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \\"?\\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \\"" + token.name + "\\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \\"" + token.name + "\\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \\"" + token.name + "\\" to match \\"" + token.pattern + "\\", but got \\"" + segment + "\\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \\"" + token.name + "\\" to match \\"" + token.pattern + "\\", but got \\"" + segment + "\\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \\"" + token.name + "\\" to be " + typeOfMessage);
        }
        return path;
    };
}
/**
 * Create path match function from \`path-to-regexp\` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
/**
 * Create a path match function from \`path-to-regexp\` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:\${}()[\\]|/\\\\])/g, "\\\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    var groupsRegex = /\\((?:\\?<(.*?)>)?(?!\\?)/g;
    var index = 0;
    var execResult = groupsRegex.exec(path.source);
    while (execResult) {
        keys.push({
            // Use parenthesized substring match if available, index otherwise
            name: execResult[1] || index++,
            prefix: "",
            suffix: "",
            modifier: "",
            pattern: ""
        });
        execResult = groupsRegex.exec(path.source);
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using \`/user/:id\`, \`keys\` will
 * contain \`[{ name: 'id', delimiter: '/', optional: false, repeat: false }]\`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
//# sourceMappingURL=index.js.map

//# sourceURL=webpack:///./node_modules/path-to-regexp/dist.es2015/index.js?`)},hypo:function(module,exports,__webpack_require__){eval(`var defineProperty = __webpack_require__("O0oS");

/**
 * The base implementation of \`assignValue\` and \`assignMergeValue\` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


//# sourceURL=webpack:///./node_modules/lodash/_baseAssignValue.js?`)},ifDB:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/antd/es/avatar/style/index.less?`)},jfsG:function(module,exports){eval(`/**
 * Expose \`pathToRegexp\`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * Default configs.
 */
var DEFAULT_DELIMITER = '/'
var DEFAULT_DELIMITERS = './'

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // ":test(\\\\d+)?" => ["test", "\\d+", undefined, "?"]
  // "(\\\\d+)"  => [undefined, undefined, "\\d+", undefined]
  '(?:\\\\:(\\\\w+)(?:\\\\(((?:\\\\\\\\.|[^\\\\\\\\()])+)\\\\))?|\\\\(((?:\\\\\\\\.|[^\\\\\\\\()])+)\\\\))([+*?])?'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = (options && options.delimiter) || DEFAULT_DELIMITER
  var delimiters = (options && options.delimiters) || DEFAULT_DELIMITERS
  var pathEscaped = false
  var res

  while ((res = PATH_REGEXP.exec(str)) !== null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      pathEscaped = true
      continue
    }

    var prev = ''
    var next = str[index]
    var name = res[2]
    var capture = res[3]
    var group = res[4]
    var modifier = res[5]

    if (!pathEscaped && path.length) {
      var k = path.length - 1

      if (delimiters.indexOf(path[k]) > -1) {
        prev = path[k]
        path = path.slice(0, k)
      }
    }

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
      pathEscaped = false
    }

    var partial = prev !== '' && next !== undefined && next !== prev
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = prev || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prev,
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      pattern: pattern ? escapeGroup(pattern) : '[^' + escapeString(delimiter) + ']+?'
    })
  }

  // Push any remaining characters.
  if (path || index < str.length) {
    tokens.push(path + str.substr(index))
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (data, options) {
    var path = ''
    var encode = (options && options.encode) || encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token
        continue
      }

      var value = data ? data[token.name] : undefined
      var segment

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but got array')
        }

        if (value.length === 0) {
          if (token.optional) continue

          throw new TypeError('Expected "' + token.name + '" to not be empty')
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j], token)

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '"')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        segment = encode(String(value), token)

        if (!matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"')
        }

        path += token.prefix + segment
        continue
      }

      if (token.optional) {
        // Prepend partial segment prefixes.
        if (token.partial) path += token.prefix

        continue
      }

      throw new TypeError('Expected "' + token.name + '" to be ' + (token.repeat ? 'an array' : 'a string'))
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:\${}()[\\]|/\\\\])/g, '\\\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$/()])/g, '\\\\$1')
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {Array=}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  if (!keys) return path

  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\\((?!\\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        pattern: null
      })
    }
  }

  return path
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  return new RegExp('(?:' + parts.join('|') + ')', flags(options))
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}  tokens
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  options = options || {}

  var strict = options.strict
  var start = options.start !== false
  var end = options.end !== false
  var delimiter = escapeString(options.delimiter || DEFAULT_DELIMITER)
  var delimiters = options.delimiters || DEFAULT_DELIMITERS
  var endsWith = [].concat(options.endsWith || []).map(escapeString).concat('$').join('|')
  var route = start ? '^' : ''
  var isEndDelimited = tokens.length === 0

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
      isEndDelimited = i === tokens.length - 1 && delimiters.indexOf(token[token.length - 1]) > -1
    } else {
      var capture = token.repeat
        ? '(?:' + token.pattern + ')(?:' + escapeString(token.delimiter) + '(?:' + token.pattern + '))*'
        : token.pattern

      if (keys) keys.push(token)

      if (token.optional) {
        if (token.partial) {
          route += escapeString(token.prefix) + '(' + capture + ')?'
        } else {
          route += '(?:' + escapeString(token.prefix) + '(' + capture + '))?'
        }
      } else {
        route += escapeString(token.prefix) + '(' + capture + ')'
      }
    }
  }

  if (end) {
    if (!strict) route += '(?:' + delimiter + ')?'

    route += endsWith === '$' ? '$' : '(?=' + endsWith + ')'
  } else {
    if (!strict) route += '(?:' + delimiter + '(?=' + endsWith + '))?'
    if (!isEndDelimited) route += '(?=' + delimiter + '|' + endsWith + ')'
  }

  return new RegExp(route, flags(options))
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using \`/user/:id\`, \`keys\` will
 * contain \`[{ name: 'id', delimiter: '/', optional: false, repeat: false }]\`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {Array=}                keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys)
  }

  if (Array.isArray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), keys, options)
  }

  return stringToRegexp(/** @type {string} */ (path), keys, options)
}


//# sourceURL=webpack:///./node_modules/@ant-design/pro-layout/node_modules/path-to-regexp/index.js?`)},juv8:function(module,exports,__webpack_require__){eval(`var assignValue = __webpack_require__("MrPd"),
    baseAssignValue = __webpack_require__("hypo");

/**
 * Copies properties of \`source\` to \`object\`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns \`object\`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


//# sourceURL=webpack:///./node_modules/lodash/_copyObject.js?`)},"k/Y0":function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/antd/es/config-provider/style/index.less?`)},mQwV:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/@ant-design/pro-layout/es/BasicLayout.less?`)},mTTR:function(module,exports,__webpack_require__){eval(`var arrayLikeKeys = __webpack_require__("b80T"),
    baseKeysIn = __webpack_require__("QcOe"),
    isArrayLike = __webpack_require__("MMmD");

/**
 * Creates an array of the own and inherited enumerable property names of \`object\`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


//# sourceURL=webpack:///./node_modules/lodash/keysIn.js?`)},n2rz:function(module,exports,__webpack_require__){"use strict";eval(`

// do not edit .js files directly - edit src/index.jst


  var envHasBigInt64Array = typeof BigInt64Array !== 'undefined';


module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }


    if ((a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      for (i of a.entries())
        if (!b.has(i[0])) return false;
      for (i of a.entries())
        if (!equal(i[1], b.get(i[0]))) return false;
      return true;
    }

    if ((a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      for (i of a.entries())
        if (!b.has(i[0])) return false;
      return true;
    }

    if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }


    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


//# sourceURL=webpack:///./node_modules/fast-deep-equal/es6/index.js?`)},"oCl/":function(module,exports,__webpack_require__){eval(`var arrayPush = __webpack_require__("CH3K"),
    getPrototype = __webpack_require__("LcsW"),
    getSymbols = __webpack_require__("MvSz"),
    stubArray = __webpack_require__("0ycA");

/* Built-in method references for those with the same name as other \`lodash\` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of \`object\`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


//# sourceURL=webpack:///./node_modules/lodash/_getSymbolsIn.js?`)},oIFs:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/antd/es/skeleton/style/index.less?`)},oN5p:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/GithubOutlined.js
// This icon file is generated automatically.
var GithubOutlined_GithubOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" } }] }, "name": "github", "theme": "outlined" };
/* harmony default export */ var asn_GithubOutlined = (GithubOutlined_GithubOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__("6VBw");

// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/GithubOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_GithubOutlined_GithubOutlined = function GithubOutlined(props, ref) {
  return /*#__PURE__*/react["createElement"](AntdIcon["a" /* default */], Object.assign({}, props, {
    ref: ref,
    icon: asn_GithubOutlined
  }));
};

icons_GithubOutlined_GithubOutlined.displayName = 'GithubOutlined';
/* harmony default export */ var icons_GithubOutlined = __webpack_exports__["a"] = (/*#__PURE__*/react["forwardRef"](icons_GithubOutlined_GithubOutlined));

//# sourceURL=webpack:///./node_modules/@ant-design/icons/es/icons/GithubOutlined.js_+_1_modules?`)},"otv/":function(module,exports,__webpack_require__){eval(`var Symbol = __webpack_require__("nmnc");

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the \`symbol\` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


//# sourceURL=webpack:///./node_modules/lodash/_cloneSymbol.js?`)},qCM6:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/antd/es/button/style/index.less?`)},"rAM+":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createForOfIteratorHelper; });
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Qw5x");

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

//# sourceURL=webpack:///./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js?`)},rsCp:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/@ant-design/pro-layout/es/components/FooterToolbar/index.less?`)},tJk1:function(module,exports,__webpack_require__){"use strict";eval(`

// do not edit .js files directly - edit src/index.jst


  var envHasBigInt64Array = typeof BigInt64Array !== 'undefined';


module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }


    if ((a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      for (i of a.entries())
        if (!b.has(i[0])) return false;
      for (i of a.entries())
        if (!equal(i[1], b.get(i[0]))) return false;
      return true;
    }

    if ((a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      for (i of a.entries())
        if (!b.has(i[0])) return false;
      return true;
    }

    if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }


    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        continue;
      }

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


//# sourceURL=webpack:///./node_modules/fast-deep-equal/es6/react.js?`)},"u/V1":function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/@ant-design/pro-layout/es/components/PageContainer/index.less?`)},"w/wX":function(module,exports,__webpack_require__){eval(`var getTag = __webpack_require__("QqLw"),
    isObjectLike = __webpack_require__("ExA7");

/** \`Object#toString\` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of \`_.isSet\` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns \`true\` if \`value\` is a set, else \`false\`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


//# sourceURL=webpack:///./node_modules/lodash/_baseIsSet.js?`)},wrZu:function(module,exports,__webpack_require__){eval(`var cloneArrayBuffer = __webpack_require__("+K+b"),
    cloneDataView = __webpack_require__("XYm9"),
    cloneRegExp = __webpack_require__("b2z7"),
    cloneSymbol = __webpack_require__("otv/"),
    cloneTypedArray = __webpack_require__("yP5f");

/** \`Object#toString\` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its \`toStringTag\`.
 *
 * **Note:** This function only supports cloning values with tags of
 * \`Boolean\`, \`Date\`, \`Error\`, \`Map\`, \`Number\`, \`RegExp\`, \`Set\`, or \`String\`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The \`toStringTag\` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


//# sourceURL=webpack:///./node_modules/lodash/_initCloneByTag.js?`)},x54q:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/antd/es/menu/style/index.less?`)},yHx3:function(module,exports){eval(`/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by \`RegExp#exec\`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


//# sourceURL=webpack:///./node_modules/lodash/_initCloneArray.js?`)},yP5f:function(module,exports,__webpack_require__){eval(`var cloneArrayBuffer = __webpack_require__("+K+b");

/**
 * Creates a clone of \`typedArray\`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


//# sourceURL=webpack:///./node_modules/lodash/_cloneTypedArray.js?`)},zEVN:function(module,exports,__webpack_require__){eval(`var baseIsMap = __webpack_require__("Gi0A"),
    baseUnary = __webpack_require__("sEf8"),
    nodeUtil = __webpack_require__("mdPL");

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if \`value\` is classified as a \`Map\` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns \`true\` if \`value\` is a map, else \`false\`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


//# sourceURL=webpack:///./node_modules/lodash/isMap.js?`)}}]);
