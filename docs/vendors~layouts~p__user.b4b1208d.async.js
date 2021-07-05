(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/9aa":function(module,exports,__webpack_require__){eval(`var baseGetTag = __webpack_require__("NykK"),
    isObjectLike = __webpack_require__("ExA7");

/** \`Object#toString\` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if \`value\` is classified as a \`Symbol\` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns \`true\` if \`value\` is a symbol, else \`false\`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


//# sourceURL=webpack:///./node_modules/lodash/isSymbol.js?`)},"1j5w":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ SubMenu; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ es_MenuItem; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ es_MenuItem; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ MenuItemGroup; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Divider; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* binding */ es_useFullPath; });

// UNUSED EXPORTS: MenuItemGroup

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("rePB");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("VTBJ");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__("KQm4");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("ODXe");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("Ff2n");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/shallowequal/index.js
var shallowequal = __webpack_require__("Gytx");
var shallowequal_default = /*#__PURE__*/__webpack_require__.n(shallowequal);

// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__("6cGi");

// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__("Kwbf");

// EXTERNAL MODULE: ./node_modules/rc-overflow/es/index.js + 4 modules
var es = __webpack_require__("8z13");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("1OyB");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("vuIU");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__("Ji7U");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 1 modules
var createSuper = __webpack_require__("LK+K");

// EXTERNAL MODULE: ./node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__("4IlW");

// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__("bT9E");

// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMemo.js
var useMemo = __webpack_require__("YrtM");

// CONCATENATED MODULE: ./node_modules/rc-menu/es/context/MenuContext.js





var MenuContext = /*#__PURE__*/react["createContext"](null);

function mergeProps(origin, target) {
  var clone = Object(objectSpread2["a" /* default */])({}, origin);

  Object.keys(target).forEach(function (key) {
    var value = target[key];

    if (value !== undefined) {
      clone[key] = value;
    }
  });
  return clone;
}

function InheritableContextProvider(_ref) {
  var children = _ref.children,
      locked = _ref.locked,
      restProps = Object(objectWithoutProperties["a" /* default */])(_ref, ["children", "locked"]);

  var context = react["useContext"](MenuContext);
  var inheritableContext = Object(useMemo["a" /* default */])(function () {
    return mergeProps(context, restProps);
  }, [context, restProps], function (prev, next) {
    return !locked && (prev[0] !== next[0] || !shallowequal_default()(prev[1], next[1]));
  });
  return /*#__PURE__*/react["createElement"](MenuContext.Provider, {
    value: inheritableContext
  }, children);
}
// CONCATENATED MODULE: ./node_modules/rc-menu/es/hooks/useActive.js


function useActive(eventKey, disabled, onMouseEnter, onMouseLeave) {
  var _React$useContext = react["useContext"](MenuContext),
      activeKey = _React$useContext.activeKey,
      onActive = _React$useContext.onActive,
      onInactive = _React$useContext.onInactive;

  var ret = {
    active: activeKey === eventKey
  }; // Skip when disabled

  if (!disabled) {
    ret.onMouseEnter = function (domEvent) {
      onMouseEnter === null || onMouseEnter === void 0 ? void 0 : onMouseEnter({
        key: eventKey,
        domEvent: domEvent
      });
      onActive(eventKey);
    };

    ret.onMouseLeave = function (domEvent) {
      onMouseLeave === null || onMouseLeave === void 0 ? void 0 : onMouseLeave({
        key: eventKey,
        domEvent: domEvent
      });
      onInactive(eventKey);
    };
  }

  return ret;
}
// CONCATENATED MODULE: ./node_modules/rc-menu/es/utils/warnUtil.js


/**
 * \`onClick\` event return \`info.item\` which point to react node directly.
 * We should warning this since it will not work on FC.
 */

function warnItemProp(_ref) {
  var item = _ref.item,
      restInfo = Object(objectWithoutProperties["a" /* default */])(_ref, ["item"]);

  Object.defineProperty(restInfo, 'item', {
    get: function get() {
      Object(warning["a" /* default */])(false, '\`info.item\` is deprecated since we will move to function component that not provides React Node instance in future.');
      return item;
    }
  });
  return restInfo;
}
// CONCATENATED MODULE: ./node_modules/rc-menu/es/Icon.js


function Icon(_ref) {
  var icon = _ref.icon,
      props = _ref.props,
      children = _ref.children;
  var iconNode;

  if (typeof icon === 'function') {
    iconNode = /*#__PURE__*/react["createElement"](icon, Object(objectSpread2["a" /* default */])({}, props));
  } else {
    // Compatible for origin definition
    iconNode = icon;
  }

  return iconNode || children || null;
}
// CONCATENATED MODULE: ./node_modules/rc-menu/es/hooks/useDirectionStyle.js


function useDirectionStyle(level) {
  var _React$useContext = react["useContext"](MenuContext),
      mode = _React$useContext.mode,
      rtl = _React$useContext.rtl,
      inlineIndent = _React$useContext.inlineIndent;

  if (mode !== 'inline') {
    return null;
  }

  var len = level;
  return rtl ? {
    paddingRight: len * inlineIndent
  } : {
    paddingLeft: len * inlineIndent
  };
}
// CONCATENATED MODULE: ./node_modules/rc-menu/es/context/PathContext.js


var EmptyList = [];
var PathRegisterContext = /*#__PURE__*/react["createContext"](null);
function useMeasure() {
  return react["useContext"](PathRegisterContext);
} // ========================= Path Tracker ==========================

var PathTrackerContext = /*#__PURE__*/react["createContext"](EmptyList);
function useFullPath(eventKey) {
  var parentKeyPath = react["useContext"](PathTrackerContext);
  return react["useMemo"](function () {
    return eventKey !== undefined ? [].concat(Object(toConsumableArray["a" /* default */])(parentKeyPath), [eventKey]) : parentKeyPath;
  }, [parentKeyPath, eventKey]);
}
var PathUserContext = /*#__PURE__*/react["createContext"](null);
// CONCATENATED MODULE: ./node_modules/rc-menu/es/context/IdContext.js

var IdContext = /*#__PURE__*/react["createContext"](null);
function getMenuId(uuid, eventKey) {
  if (uuid === undefined) {
    return null;
  }

  return "".concat(uuid, "-").concat(eventKey);
}
/**
 * Get \`data-menu-id\`
 */

function useMenuId(eventKey) {
  var id = react["useContext"](IdContext);
  return getMenuId(id, eventKey);
}
// CONCATENATED MODULE: ./node_modules/rc-menu/es/MenuItem.js





















 // Since Menu event provide the \`info.item\` which point to the MenuItem node instance.
// We have to use class component here.
// This should be removed from doc & api in future.

var MenuItem_LegacyMenuItem = /*#__PURE__*/function (_React$Component) {
  Object(inherits["a" /* default */])(LegacyMenuItem, _React$Component);

  var _super = Object(createSuper["a" /* default */])(LegacyMenuItem);

  function LegacyMenuItem() {
    Object(classCallCheck["a" /* default */])(this, LegacyMenuItem);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(LegacyMenuItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          attribute = _this$props.attribute,
          elementRef = _this$props.elementRef,
          restProps = Object(objectWithoutProperties["a" /* default */])(_this$props, ["title", "attribute", "elementRef"]);

      var passedProps = Object(omit["a" /* default */])(restProps, ['eventKey']);
      Object(warning["a" /* default */])(!attribute, '\`attribute\` of Menu.Item is deprecated. Please pass attribute directly.');
      return /*#__PURE__*/react["createElement"](es["a" /* default */].Item, Object(esm_extends["a" /* default */])({}, attribute, {
        title: typeof title === 'string' ? title : undefined
      }, passedProps, {
        ref: elementRef
      }));
    }
  }]);

  return LegacyMenuItem;
}(react["Component"]);
/**
 * Real Menu Item component
 */


var MenuItem_InternalMenuItem = function InternalMenuItem(props) {
  var _classNames;

  var style = props.style,
      className = props.className,
      eventKey = props.eventKey,
      warnKey = props.warnKey,
      disabled = props.disabled,
      itemIcon = props.itemIcon,
      children = props.children,
      role = props.role,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      onClick = props.onClick,
      onKeyDown = props.onKeyDown,
      onFocus = props.onFocus,
      restProps = Object(objectWithoutProperties["a" /* default */])(props, ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"]);

  var domDataId = useMenuId(eventKey);

  var _React$useContext = react["useContext"](MenuContext),
      prefixCls = _React$useContext.prefixCls,
      onItemClick = _React$useContext.onItemClick,
      contextDisabled = _React$useContext.disabled,
      overflowDisabled = _React$useContext.overflowDisabled,
      contextItemIcon = _React$useContext.itemIcon,
      selectedKeys = _React$useContext.selectedKeys,
      onActive = _React$useContext.onActive;

  var itemCls = "".concat(prefixCls, "-item");
  var legacyMenuItemRef = react["useRef"]();
  var elementRef = react["useRef"]();
  var mergedDisabled = contextDisabled || disabled;
  var connectedKeys = useFullPath(eventKey); // ================================ Warn ================================

  if (false) {} // ============================= Info =============================


  var getEventInfo = function getEventInfo(e) {
    return {
      key: eventKey,
      // Note: For legacy code is reversed which not like other antd component
      keyPath: Object(toConsumableArray["a" /* default */])(connectedKeys).reverse(),
      item: legacyMenuItemRef.current,
      domEvent: e
    };
  }; // ============================= Icon =============================


  var mergedItemIcon = itemIcon || contextItemIcon; // ============================ Active ============================

  var _useActive = useActive(eventKey, mergedDisabled, onMouseEnter, onMouseLeave),
      active = _useActive.active,
      activeProps = Object(objectWithoutProperties["a" /* default */])(_useActive, ["active"]); // ============================ Select ============================


  var selected = selectedKeys.includes(eventKey); // ======================== DirectionStyle ========================

  var directionStyle = useDirectionStyle(connectedKeys.length); // ============================ Events ============================

  var onInternalClick = function onInternalClick(e) {
    if (mergedDisabled) {
      return;
    }

    var info = getEventInfo(e);
    onClick === null || onClick === void 0 ? void 0 : onClick(warnItemProp(info));
    onItemClick(info);
  };

  var onInternalKeyDown = function onInternalKeyDown(e) {
    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);

    if (e.which === KeyCode["a" /* default */].ENTER) {
      var info = getEventInfo(e); // Legacy. Key will also trigger click event

      onClick === null || onClick === void 0 ? void 0 : onClick(warnItemProp(info));
      onItemClick(info);
    }
  };
  /**
   * Used for accessibility. Helper will focus element without key board.
   * We should manually trigger an active
   */


  var onInternalFocus = function onInternalFocus(e) {
    onActive(eventKey);
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
  }; // ============================ Render ============================


  var optionRoleProps = {};

  if (props.role === 'option') {
    optionRoleProps['aria-selected'] = selected;
  }

  return /*#__PURE__*/react["createElement"](MenuItem_LegacyMenuItem, Object(esm_extends["a" /* default */])({
    ref: legacyMenuItemRef,
    elementRef: elementRef,
    role: role === null ? 'none' : role || 'menuitem',
    tabIndex: disabled ? null : -1,
    "data-menu-id": overflowDisabled && domDataId ? null : domDataId
  }, restProps, activeProps, optionRoleProps, {
    component: "li",
    "aria-disabled": disabled,
    style: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, directionStyle), style),
    className: classnames_default()(itemCls, (_classNames = {}, Object(defineProperty["a" /* default */])(_classNames, "".concat(itemCls, "-active"), active), Object(defineProperty["a" /* default */])(_classNames, "".concat(itemCls, "-selected"), selected), Object(defineProperty["a" /* default */])(_classNames, "".concat(itemCls, "-disabled"), mergedDisabled), _classNames), className),
    onClick: onInternalClick,
    onKeyDown: onInternalKeyDown,
    onFocus: onInternalFocus
  }), children, /*#__PURE__*/react["createElement"](Icon, {
    props: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, props), {}, {
      isSelected: selected
    }),
    icon: mergedItemIcon
  }));
};

function MenuItem(props) {
  var eventKey = props.eventKey; // ==================== Record KeyPath ====================

  var measure = useMeasure();
  var connectedKeyPath = useFullPath(eventKey); // eslint-disable-next-line consistent-return

  react["useEffect"](function () {
    if (measure) {
      measure.registerPath(eventKey, connectedKeyPath);
      return function () {
        measure.unregisterPath(eventKey, connectedKeyPath);
      };
    }
  }, [connectedKeyPath]);

  if (measure) {
    return null;
  } // ======================== Render ========================


  return /*#__PURE__*/react["createElement"](MenuItem_InternalMenuItem, props);
}

/* harmony default export */ var es_MenuItem = (MenuItem);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__("Zm9Q");

// CONCATENATED MODULE: ./node_modules/rc-menu/es/utils/nodeUtil.js



function parseChildren(children, keyPath) {
  return Object(toArray["a" /* default */])(children).map(function (child, index) {
    if ( /*#__PURE__*/react["isValidElement"](child)) {
      var _child$props$eventKey, _child$props;

      var key = child.key;
      var eventKey = (_child$props$eventKey = (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.eventKey) !== null && _child$props$eventKey !== void 0 ? _child$props$eventKey : key;
      var emptyKey = eventKey === null || eventKey === undefined;

      if (emptyKey) {
        eventKey = "tmp_key-".concat([].concat(Object(toConsumableArray["a" /* default */])(keyPath), [index]).join('-'));
      }

      var cloneProps = {
        key: eventKey,
        eventKey: eventKey
      };

      if (false) {}

      return /*#__PURE__*/react["cloneElement"](child, cloneProps);
    }

    return child;
  });
}
// CONCATENATED MODULE: ./node_modules/rc-menu/es/hooks/useMemoCallback.js

/**
 * Cache callback function that always return same ref instead.
 * This is used for context optimization.
 */

function useMemoCallback(func) {
  var funRef = react["useRef"](func);
  funRef.current = func;
  var callback = react["useCallback"](function () {
    var _funRef$current;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_funRef$current = funRef.current) === null || _funRef$current === void 0 ? void 0 : _funRef$current.call.apply(_funRef$current, [funRef].concat(args));
  }, []);
  return func ? callback : undefined;
}
// CONCATENATED MODULE: ./node_modules/rc-menu/es/SubMenu/SubMenuList.js






var SubMenuList_InternalSubMenuList = function InternalSubMenuList(_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      restProps = Object(objectWithoutProperties["a" /* default */])(_ref, ["className", "children"]);

  var _React$useContext = react["useContext"](MenuContext),
      prefixCls = _React$useContext.prefixCls,
      mode = _React$useContext.mode;

  return /*#__PURE__*/react["createElement"]("ul", Object(esm_extends["a" /* default */])({
    className: classnames_default()(prefixCls, "".concat(prefixCls, "-sub"), "".concat(prefixCls, "-").concat(mode === 'inline' ? 'inline' : 'vertical'), className)
  }, restProps, {
    "data-menu-list": true,
    ref: ref
  }), children);
};

var SubMenuList = /*#__PURE__*/react["forwardRef"](SubMenuList_InternalSubMenuList);
SubMenuList.displayName = 'SubMenuList';
/* harmony default export */ var SubMenu_SubMenuList = (SubMenuList);
// EXTERNAL MODULE: ./node_modules/rc-trigger/es/index.js + 15 modules
var rc_trigger_es = __webpack_require__("uciX");

// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__("wgJM");

// CONCATENATED MODULE: ./node_modules/rc-menu/es/placements.js
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var placements = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 7]
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0]
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0]
  }
};
var placementsRtl = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 7]
  },
  rightTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0]
  },
  leftTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0]
  }
};
/* harmony default export */ var es_placements = (placements);
// CONCATENATED MODULE: ./node_modules/rc-menu/es/utils/motionUtil.js
function getMotion(mode, motion, defaultMotions) {
  if (motion) {
    return motion;
  }

  if (defaultMotions) {
    return defaultMotions[mode] || defaultMotions.other;
  }

  return undefined;
}
// CONCATENATED MODULE: ./node_modules/rc-menu/es/SubMenu/PopupTrigger.js










var popupPlacementMap = {
  horizontal: 'bottomLeft',
  vertical: 'rightTop',
  'vertical-left': 'rightTop',
  'vertical-right': 'leftTop'
};
function PopupTrigger(_ref) {
  var prefixCls = _ref.prefixCls,
      visible = _ref.visible,
      children = _ref.children,
      popup = _ref.popup,
      popupClassName = _ref.popupClassName,
      popupOffset = _ref.popupOffset,
      disabled = _ref.disabled,
      mode = _ref.mode,
      onVisibleChange = _ref.onVisibleChange;

  var _React$useContext = react["useContext"](MenuContext),
      getPopupContainer = _React$useContext.getPopupContainer,
      rtl = _React$useContext.rtl,
      subMenuOpenDelay = _React$useContext.subMenuOpenDelay,
      subMenuCloseDelay = _React$useContext.subMenuCloseDelay,
      builtinPlacements = _React$useContext.builtinPlacements,
      triggerSubMenuAction = _React$useContext.triggerSubMenuAction,
      forceSubMenuRender = _React$useContext.forceSubMenuRender,
      motion = _React$useContext.motion,
      defaultMotions = _React$useContext.defaultMotions;

  var _React$useState = react["useState"](false),
      _React$useState2 = Object(slicedToArray["a" /* default */])(_React$useState, 2),
      innerVisible = _React$useState2[0],
      setInnerVisible = _React$useState2[1];

  var placement = rtl ? Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, placementsRtl), builtinPlacements) : Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, placements), builtinPlacements);
  var popupPlacement = popupPlacementMap[mode];
  var targetMotion = getMotion(mode, motion, defaultMotions);

  var mergedMotion = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, targetMotion), {}, {
    leavedClassName: "".concat(prefixCls, "-hidden"),
    removeOnLeave: false,
    motionAppear: true
  }); // Delay to change visible


  var visibleRef = react["useRef"]();
  react["useEffect"](function () {
    visibleRef.current = Object(raf["a" /* default */])(function () {
      setInnerVisible(visible);
    });
    return function () {
      raf["a" /* default */].cancel(visibleRef.current);
    };
  }, [visible]);
  return /*#__PURE__*/react["createElement"](rc_trigger_es["a" /* default */], {
    prefixCls: prefixCls,
    popupClassName: classnames_default()("".concat(prefixCls, "-popup"), Object(defineProperty["a" /* default */])({}, "".concat(prefixCls, "-rtl"), rtl), popupClassName),
    stretch: mode === 'horizontal' ? 'minWidth' : null,
    getPopupContainer: getPopupContainer,
    builtinPlacements: placement,
    popupPlacement: popupPlacement,
    popupVisible: innerVisible,
    popup: popup,
    popupAlign: popupOffset && {
      offset: popupOffset
    },
    action: disabled ? [] : [triggerSubMenuAction],
    mouseEnterDelay: subMenuOpenDelay,
    mouseLeaveDelay: subMenuCloseDelay,
    onPopupVisibleChange: onVisibleChange,
    forceRender: forceSubMenuRender,
    popupMotion: mergedMotion
  }, children);
}
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 12 modules
var rc_motion_es = __webpack_require__("8XRh");

// CONCATENATED MODULE: ./node_modules/rc-menu/es/SubMenu/InlineSubMenuList.js








function InlineSubMenuList(_ref) {
  var id = _ref.id,
      open = _ref.open,
      keyPath = _ref.keyPath,
      children = _ref.children;
  var fixedMode = 'inline';

  var _React$useContext = react["useContext"](MenuContext),
      prefixCls = _React$useContext.prefixCls,
      forceSubMenuRender = _React$useContext.forceSubMenuRender,
      motion = _React$useContext.motion,
      defaultMotions = _React$useContext.defaultMotions,
      mode = _React$useContext.mode; // Always use latest mode check


  var sameModeRef = react["useRef"](false);
  sameModeRef.current = mode === fixedMode; // We record \`destroy\` mark here since when mode change from \`inline\` to others.
  // The inline list should remove when motion end.

  var _React$useState = react["useState"](!sameModeRef.current),
      _React$useState2 = Object(slicedToArray["a" /* default */])(_React$useState, 2),
      destroy = _React$useState2[0],
      setDestroy = _React$useState2[1];

  var mergedOpen = sameModeRef.current ? open : false; // ================================= Effect =================================
  // Reset destroy state when mode change back

  react["useEffect"](function () {
    if (sameModeRef.current) {
      setDestroy(false);
    }
  }, [mode]); // ================================= Render =================================

  var mergedMotion = Object(objectSpread2["a" /* default */])({}, getMotion(fixedMode, motion, defaultMotions)); // No need appear since nest inlineCollapse changed


  if (keyPath.length > 1) {
    mergedMotion.motionAppear = false;
  } // Hide inline list when mode changed and motion end


  var originOnVisibleChanged = mergedMotion.onVisibleChanged;

  mergedMotion.onVisibleChanged = function (newVisible) {
    if (!sameModeRef.current && !newVisible) {
      setDestroy(true);
    }

    return originOnVisibleChanged === null || originOnVisibleChanged === void 0 ? void 0 : originOnVisibleChanged(newVisible);
  };

  if (destroy) {
    return null;
  }

  return /*#__PURE__*/react["createElement"](InheritableContextProvider, {
    mode: fixedMode,
    locked: !sameModeRef.current
  }, /*#__PURE__*/react["createElement"](rc_motion_es["b" /* default */], Object(esm_extends["a" /* default */])({
    visible: mergedOpen
  }, mergedMotion, {
    forceRender: forceSubMenuRender,
    removeOnLeave: false,
    leavedClassName: "".concat(prefixCls, "-hidden")
  }), function (_ref2) {
    var motionClassName = _ref2.className,
        motionStyle = _ref2.style;
    return /*#__PURE__*/react["createElement"](SubMenu_SubMenuList, {
      id: id,
      className: motionClassName,
      style: motionStyle
    }, children);
  }));
}
// CONCATENATED MODULE: ./node_modules/rc-menu/es/SubMenu/index.js






















var SubMenu_InternalSubMenu = function InternalSubMenu(props) {
  var _classNames;

  var style = props.style,
      className = props.className,
      title = props.title,
      eventKey = props.eventKey,
      warnKey = props.warnKey,
      disabled = props.disabled,
      internalPopupClose = props.internalPopupClose,
      children = props.children,
      itemIcon = props.itemIcon,
      expandIcon = props.expandIcon,
      popupClassName = props.popupClassName,
      popupOffset = props.popupOffset,
      onClick = props.onClick,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      onTitleClick = props.onTitleClick,
      onTitleMouseEnter = props.onTitleMouseEnter,
      onTitleMouseLeave = props.onTitleMouseLeave,
      restProps = Object(objectWithoutProperties["a" /* default */])(props, ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"]);

  var domDataId = useMenuId(eventKey);

  var _React$useContext = react["useContext"](MenuContext),
      prefixCls = _React$useContext.prefixCls,
      mode = _React$useContext.mode,
      openKeys = _React$useContext.openKeys,
      contextDisabled = _React$useContext.disabled,
      overflowDisabled = _React$useContext.overflowDisabled,
      activeKey = _React$useContext.activeKey,
      selectedKeys = _React$useContext.selectedKeys,
      contextItemIcon = _React$useContext.itemIcon,
      contextExpandIcon = _React$useContext.expandIcon,
      onItemClick = _React$useContext.onItemClick,
      onOpenChange = _React$useContext.onOpenChange,
      onActive = _React$useContext.onActive;

  var _React$useContext2 = react["useContext"](PathUserContext),
      isSubPathKey = _React$useContext2.isSubPathKey;

  var connectedPath = useFullPath();
  var subMenuPrefixCls = "".concat(prefixCls, "-submenu");
  var mergedDisabled = contextDisabled || disabled;
  var elementRef = react["useRef"]();
  var popupRef = react["useRef"](); // ================================ Warn ================================

  if (false) {} // ================================ Icon ================================


  var mergedItemIcon = itemIcon || contextItemIcon;
  var mergedExpandIcon = expandIcon || contextExpandIcon; // ================================ Open ================================

  var originOpen = openKeys.includes(eventKey);
  var open = !overflowDisabled && originOpen; // =============================== Select ===============================

  var childrenSelected = isSubPathKey(selectedKeys, eventKey); // =============================== Active ===============================

  var _useActive = useActive(eventKey, mergedDisabled, onTitleMouseEnter, onTitleMouseLeave),
      active = _useActive.active,
      activeProps = Object(objectWithoutProperties["a" /* default */])(_useActive, ["active"]); // Fallback of active check to avoid hover on menu title or disabled item


  var _React$useState = react["useState"](false),
      _React$useState2 = Object(slicedToArray["a" /* default */])(_React$useState, 2),
      childrenActive = _React$useState2[0],
      setChildrenActive = _React$useState2[1];

  var triggerChildrenActive = function triggerChildrenActive(newActive) {
    if (!mergedDisabled) {
      setChildrenActive(newActive);
    }
  };

  var onInternalMouseEnter = function onInternalMouseEnter(domEvent) {
    triggerChildrenActive(true);
    onMouseEnter === null || onMouseEnter === void 0 ? void 0 : onMouseEnter({
      key: eventKey,
      domEvent: domEvent
    });
  };

  var onInternalMouseLeave = function onInternalMouseLeave(domEvent) {
    triggerChildrenActive(false);
    onMouseLeave === null || onMouseLeave === void 0 ? void 0 : onMouseLeave({
      key: eventKey,
      domEvent: domEvent
    });
  };

  var mergedActive = react["useMemo"](function () {
    if (active) {
      return active;
    }

    if (mode !== 'inline') {
      return childrenActive || isSubPathKey([activeKey], eventKey);
    }

    return false;
  }, [mode, active, activeKey, childrenActive, eventKey, isSubPathKey]); // ========================== DirectionStyle ==========================

  var directionStyle = useDirectionStyle(connectedPath.length); // =============================== Events ===============================
  // >>>> Title click

  var onInternalTitleClick = function onInternalTitleClick(e) {
    // Skip if disabled
    if (mergedDisabled) {
      return;
    }

    onTitleClick === null || onTitleClick === void 0 ? void 0 : onTitleClick({
      key: eventKey,
      domEvent: e
    }); // Trigger open by click when mode is \`inline\`

    if (mode === 'inline') {
      onOpenChange(eventKey, !originOpen);
    }
  }; // >>>> Context for children click


  var onMergedItemClick = useMemoCallback(function (info) {
    onClick === null || onClick === void 0 ? void 0 : onClick(warnItemProp(info));
    onItemClick(info);
  }); // >>>>> Visible change

  var onPopupVisibleChange = function onPopupVisibleChange(newVisible) {
    if (mode !== 'inline') {
      onOpenChange(eventKey, newVisible);
    }
  };
  /**
   * Used for accessibility. Helper will focus element without key board.
   * We should manually trigger an active
   */


  var onInternalFocus = function onInternalFocus() {
    onActive(eventKey);
  }; // =============================== Render ===============================


  var popupId = domDataId && "".concat(domDataId, "-popup"); // >>>>> Title

  var titleNode = /*#__PURE__*/react["createElement"]("div", Object(esm_extends["a" /* default */])({
    role: "menuitem",
    style: directionStyle,
    className: "".concat(subMenuPrefixCls, "-title"),
    tabIndex: mergedDisabled ? null : -1,
    ref: elementRef,
    title: typeof title === 'string' ? title : null,
    "data-menu-id": overflowDisabled && domDataId ? null : domDataId,
    "aria-expanded": open,
    "aria-haspopup": true,
    "aria-controls": popupId,
    "aria-disabled": mergedDisabled,
    onClick: onInternalTitleClick,
    onFocus: onInternalFocus
  }, activeProps), title, /*#__PURE__*/react["createElement"](Icon, {
    icon: mode !== 'horizontal' ? mergedExpandIcon : null,
    props: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, props), {}, {
      isOpen: open,
      // [Legacy] Not sure why need this mark
      isSubMenu: true
    })
  }, /*#__PURE__*/react["createElement"]("i", {
    className: "".concat(subMenuPrefixCls, "-arrow")
  }))); // Cache mode if it change to \`inline\` which do not have popup motion

  var triggerModeRef = react["useRef"](mode);

  if (mode !== 'inline') {
    triggerModeRef.current = connectedPath.length > 1 ? 'vertical' : mode;
  }

  if (!overflowDisabled) {
    var triggerMode = triggerModeRef.current; // Still wrap with Trigger here since we need avoid react re-mount dom node
    // Which makes motion failed

    titleNode = /*#__PURE__*/react["createElement"](PopupTrigger, {
      mode: triggerMode,
      prefixCls: subMenuPrefixCls,
      visible: !internalPopupClose && open && mode !== 'inline',
      popupClassName: popupClassName,
      popupOffset: popupOffset,
      popup: /*#__PURE__*/react["createElement"](InheritableContextProvider // Special handle of horizontal mode
      , {
        mode: triggerMode === 'horizontal' ? 'vertical' : triggerMode
      }, /*#__PURE__*/react["createElement"](SubMenu_SubMenuList, {
        id: popupId,
        ref: popupRef
      }, children)),
      disabled: mergedDisabled,
      onVisibleChange: onPopupVisibleChange
    }, titleNode);
  } // >>>>> Render


  return /*#__PURE__*/react["createElement"](InheritableContextProvider, {
    onItemClick: onMergedItemClick,
    mode: mode === 'horizontal' ? 'vertical' : mode,
    itemIcon: mergedItemIcon,
    expandIcon: mergedExpandIcon
  }, /*#__PURE__*/react["createElement"](es["a" /* default */].Item, Object(esm_extends["a" /* default */])({
    role: "none"
  }, restProps, {
    component: "li",
    style: style,
    className: classnames_default()(subMenuPrefixCls, "".concat(subMenuPrefixCls, "-").concat(mode), className, (_classNames = {}, Object(defineProperty["a" /* default */])(_classNames, "".concat(subMenuPrefixCls, "-open"), open), Object(defineProperty["a" /* default */])(_classNames, "".concat(subMenuPrefixCls, "-active"), mergedActive), Object(defineProperty["a" /* default */])(_classNames, "".concat(subMenuPrefixCls, "-selected"), childrenSelected), Object(defineProperty["a" /* default */])(_classNames, "".concat(subMenuPrefixCls, "-disabled"), mergedDisabled), _classNames)),
    onMouseEnter: onInternalMouseEnter,
    onMouseLeave: onInternalMouseLeave
  }), titleNode, !overflowDisabled && /*#__PURE__*/react["createElement"](InlineSubMenuList, {
    id: popupId,
    open: open,
    keyPath: connectedPath
  }, children)));
};

function SubMenu(props) {
  var eventKey = props.eventKey,
      children = props.children;
  var connectedKeyPath = useFullPath(eventKey);
  var childList = parseChildren(children, connectedKeyPath); // ==================== Record KeyPath ====================

  var measure = useMeasure(); // eslint-disable-next-line consistent-return

  react["useEffect"](function () {
    if (measure) {
      measure.registerPath(eventKey, connectedKeyPath);
      return function () {
        measure.unregisterPath(eventKey, connectedKeyPath);
      };
    }
  }, [connectedKeyPath]);
  var renderNode; // ======================== Render ========================

  if (measure) {
    renderNode = childList;
  } else {
    renderNode = /*#__PURE__*/react["createElement"](SubMenu_InternalSubMenu, props, childList);
  }

  return /*#__PURE__*/react["createElement"](PathTrackerContext.Provider, {
    value: connectedKeyPath
  }, renderNode);
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/isVisible.js
var isVisible = __webpack_require__("x/xZ");

// CONCATENATED MODULE: ./node_modules/rc-util/es/Dom/focus.js



function focusable(node) {
  var includePositive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (Object(isVisible["a" /* default */])(node)) {
    var nodeName = node.nodeName.toLowerCase();
    var isFocusableElement = // Focusable element
    ['input', 'select', 'textarea', 'button'].includes(nodeName) || // Editable element
    node.isContentEditable || // Anchor with href element
    nodeName === 'a' && !!node.getAttribute('href'); // Get tabIndex

    var tabIndexAttr = node.getAttribute('tabindex');
    var tabIndexNum = Number(tabIndexAttr); // Parse as number if validate

    var tabIndex = null;

    if (tabIndexAttr && !Number.isNaN(tabIndexNum)) {
      tabIndex = tabIndexNum;
    } else if (isFocusableElement && tabIndex === null) {
      tabIndex = 0;
    } // Block focusable if disabled


    if (isFocusableElement && node.disabled) {
      tabIndex = null;
    }

    return tabIndex !== null && (tabIndex >= 0 || includePositive && tabIndex < 0);
  }

  return false;
}

function getFocusNodeList(node) {
  var includePositive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var res = Object(toConsumableArray["a" /* default */])(node.querySelectorAll('*')).filter(function (child) {
    return focusable(child, includePositive);
  });

  if (focusable(node, includePositive)) {
    res.unshift(node);
  }

  return res;
}
var lastFocusElement = null;
/** @deprecated Do not use since this may failed when used in async */

function saveLastFocusNode() {
  lastFocusElement = document.activeElement;
}
/** @deprecated Do not use since this may failed when used in async */

function clearLastFocusNode() {
  lastFocusElement = null;
}
/** @deprecated Do not use since this may failed when used in async */

function backLastFocusNode() {
  if (lastFocusElement) {
    try {
      // \u5143\u7D20\u53EF\u80FD\u5DF2\u7ECF\u88AB\u79FB\u52A8\u4E86
      lastFocusElement.focus();
      /* eslint-disable no-empty */
    } catch (e) {// empty
    }
    /* eslint-enable no-empty */

  }
}
function limitTabRange(node, e) {
  if (e.keyCode === 9) {
    var tabNodeList = getFocusNodeList(node);
    var lastTabNode = tabNodeList[e.shiftKey ? 0 : tabNodeList.length - 1];
    var leavingTab = lastTabNode === document.activeElement || node === document.activeElement;

    if (leavingTab) {
      var target = tabNodeList[e.shiftKey ? tabNodeList.length - 1 : 0];
      target.focus();
      e.preventDefault();
    }
  }
}
// CONCATENATED MODULE: ./node_modules/rc-menu/es/hooks/useAccessibility.js





 // destruct to reduce minify size

var LEFT = KeyCode["a" /* default */].LEFT,
    RIGHT = KeyCode["a" /* default */].RIGHT,
    UP = KeyCode["a" /* default */].UP,
    DOWN = KeyCode["a" /* default */].DOWN,
    ENTER = KeyCode["a" /* default */].ENTER,
    ESC = KeyCode["a" /* default */].ESC;
var ArrowKeys = [UP, DOWN, LEFT, RIGHT];

function getOffset(mode, isRootLevel, isRtl, which) {
  var _inline, _horizontal, _vertical, _offsets$;

  var prev = 'prev';
  var next = 'next';
  var children = 'children';
  var parent = 'parent'; // Inline enter is special that we use unique operation

  if (mode === 'inline' && which === ENTER) {
    return {
      inlineTrigger: true
    };
  }

  var inline = (_inline = {}, Object(defineProperty["a" /* default */])(_inline, UP, prev), Object(defineProperty["a" /* default */])(_inline, DOWN, next), _inline);
  var horizontal = (_horizontal = {}, Object(defineProperty["a" /* default */])(_horizontal, LEFT, isRtl ? next : prev), Object(defineProperty["a" /* default */])(_horizontal, RIGHT, isRtl ? prev : next), Object(defineProperty["a" /* default */])(_horizontal, DOWN, children), Object(defineProperty["a" /* default */])(_horizontal, ENTER, children), _horizontal);
  var vertical = (_vertical = {}, Object(defineProperty["a" /* default */])(_vertical, UP, prev), Object(defineProperty["a" /* default */])(_vertical, DOWN, next), Object(defineProperty["a" /* default */])(_vertical, ENTER, children), Object(defineProperty["a" /* default */])(_vertical, ESC, parent), Object(defineProperty["a" /* default */])(_vertical, LEFT, isRtl ? children : parent), Object(defineProperty["a" /* default */])(_vertical, RIGHT, isRtl ? parent : children), _vertical);
  var offsets = {
    inline: inline,
    horizontal: horizontal,
    vertical: vertical,
    inlineSub: inline,
    horizontalSub: vertical,
    verticalSub: vertical
  };
  var type = (_offsets$ = offsets["".concat(mode).concat(isRootLevel ? '' : 'Sub')]) === null || _offsets$ === void 0 ? void 0 : _offsets$[which];

  switch (type) {
    case prev:
      return {
        offset: -1,
        sibling: true
      };

    case next:
      return {
        offset: 1,
        sibling: true
      };

    case parent:
      return {
        offset: -1,
        sibling: false
      };

    case children:
      return {
        offset: 1,
        sibling: false
      };

    default:
      return null;
  }
}

function findContainerUL(element) {
  var current = element;

  while (current) {
    if (current.getAttribute('data-menu-list')) {
      return current;
    }

    current = current.parentElement;
  } // Normally should not reach this line

  /* istanbul ignore next */


  return null;
}
/**
 * Find focused element within element set provided
 */


function getFocusElement(activeElement, elements) {
  var current = activeElement || document.activeElement;

  while (current) {
    if (elements.has(current)) {
      return current;
    }

    current = current.parentElement;
  }

  return null;
}
/**
 * Get focusable elements from the element set under provided container
 */


function getFocusableElements(container, elements) {
  var list = getFocusNodeList(container, true);
  return list.filter(function (ele) {
    return elements.has(ele);
  });
}

function getNextFocusElement(parentQueryContainer, elements, focusMenuElement) {
  var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

  // Key on the menu item will not get validate parent container
  if (!parentQueryContainer) {
    return null;
  } // List current level menu item elements


  var sameLevelFocusableMenuElementList = getFocusableElements(parentQueryContainer, elements); // Find next focus index

  var count = sameLevelFocusableMenuElementList.length;
  var focusIndex = sameLevelFocusableMenuElementList.findIndex(function (ele) {
    return focusMenuElement === ele;
  });

  if (offset < 0) {
    if (focusIndex === -1) {
      focusIndex = count - 1;
    } else {
      focusIndex -= 1;
    }
  } else if (offset > 0) {
    focusIndex += 1;
  }

  focusIndex = (focusIndex + count) % count; // Focus menu item

  return sameLevelFocusableMenuElementList[focusIndex];
}

function useAccessibility(mode, activeKey, isRtl, id, containerRef, getKeys, getKeyPath, triggerActiveKey, triggerAccessibilityOpen, originOnKeyDown) {
  var rafRef = react["useRef"]();
  var activeRef = react["useRef"]();
  activeRef.current = activeKey;

  var cleanRaf = function cleanRaf() {
    raf["a" /* default */].cancel(rafRef.current);
  };

  react["useEffect"](function () {
    return function () {
      cleanRaf();
    };
  }, []);
  return function (e) {
    var which = e.which;

    if ([].concat(ArrowKeys, [ENTER, ESC]).includes(which)) {
      // Convert key to elements
      var elements;
      var key2element;
      var element2key; // >>> Wrap as function since we use raf for some case

      var refreshElements = function refreshElements() {
        elements = new Set();
        key2element = new Map();
        element2key = new Map();
        var keys = getKeys();
        keys.forEach(function (key) {
          var element = document.querySelector("[data-menu-id='".concat(getMenuId(id, key), "']"));

          if (element) {
            elements.add(element);
            element2key.set(element, key);
            key2element.set(key, element);
          }
        });
        return elements;
      };

      refreshElements(); // First we should find current focused MenuItem/SubMenu element

      var activeElement = key2element.get(activeKey);
      var focusMenuElement = getFocusElement(activeElement, elements);
      var focusMenuKey = element2key.get(focusMenuElement);
      var offsetObj = getOffset(mode, getKeyPath(focusMenuKey, true).length === 1, isRtl, which); // Some mode do not have fully arrow operation like inline

      if (!offsetObj) {
        return;
      } // Arrow prevent default to avoid page scroll


      if (ArrowKeys.includes(which)) {
        e.preventDefault();
      }

      var tryFocus = function tryFocus(menuElement) {
        if (menuElement) {
          var focusTargetElement = menuElement; // Focus to link instead of menu item if possible

          var link = menuElement.querySelector('a');

          if (link === null || link === void 0 ? void 0 : link.getAttribute('href')) {
            focusTargetElement = link;
          }

          var targetKey = element2key.get(menuElement);
          triggerActiveKey(targetKey);
          /**
           * Do not \`useEffect\` here since \`tryFocus\` may trigger async
           * which makes React sync update the \`activeKey\`
           * that force render before \`useRef\` set the next activeKey
           */

          cleanRaf();
          rafRef.current = Object(raf["a" /* default */])(function () {
            if (activeRef.current === targetKey) {
              focusTargetElement.focus();
            }
          });
        }
      };

      if (offsetObj.sibling || !focusMenuElement) {
        // ========================== Sibling ==========================
        // Find walkable focus menu element container
        var parentQueryContainer;

        if (!focusMenuElement || mode === 'inline') {
          parentQueryContainer = containerRef.current;
        } else {
          parentQueryContainer = findContainerUL(focusMenuElement);
        } // Get next focus element


        var targetElement = getNextFocusElement(parentQueryContainer, elements, focusMenuElement, offsetObj.offset); // Focus menu item

        tryFocus(targetElement); // ======================= InlineTrigger =======================
      } else if (offsetObj.inlineTrigger) {
        // Inline trigger no need switch to sub menu item
        triggerAccessibilityOpen(focusMenuKey); // =========================== Level ===========================
      } else if (offsetObj.offset > 0) {
        triggerAccessibilityOpen(focusMenuKey, true);
        cleanRaf();
        rafRef.current = Object(raf["a" /* default */])(function () {
          // Async should resync elements
          refreshElements();
          var controlId = focusMenuElement.getAttribute('aria-controls');
          var subQueryContainer = document.getElementById(controlId); // Get sub focusable menu item

          var targetElement = getNextFocusElement(subQueryContainer, elements); // Focus menu item

          tryFocus(targetElement);
        }, 5);
      } else if (offsetObj.offset < 0) {
        var keyPath = getKeyPath(focusMenuKey, true);
        var parentKey = keyPath[keyPath.length - 2];
        var parentMenuElement = key2element.get(parentKey); // Focus menu item

        triggerAccessibilityOpen(parentKey, false);
        tryFocus(parentMenuElement);
      }
    } // Pass origin key down event


    originOnKeyDown === null || originOnKeyDown === void 0 ? void 0 : originOnKeyDown(e);
  };
}
// CONCATENATED MODULE: ./node_modules/rc-menu/es/hooks/useUUID.js



var uniquePrefix = Math.random().toFixed(5).toString().slice(2);
var internalId = 0;
function useUUID(id) {
  var _useMergedState = Object(useMergedState["a" /* default */])(id, {
    value: id
  }),
      _useMergedState2 = Object(slicedToArray["a" /* default */])(_useMergedState, 2),
      uuid = _useMergedState2[0],
      setUUID = _useMergedState2[1];

  react["useEffect"](function () {
    internalId += 1;
    var newId =  false ? undefined : "".concat(uniquePrefix, "-").concat(internalId);
    setUUID("rc-menu-uuid-".concat(newId));
  }, []);
  return uuid;
}
// CONCATENATED MODULE: ./node_modules/rc-menu/es/utils/timeUtil.js
function nextSlice(callback) {
  /* istanbul ignore next */
  Promise.resolve().then(callback);
}
// CONCATENATED MODULE: ./node_modules/rc-menu/es/hooks/useKeyRecords.js






var PATH_SPLIT = '__RC_UTIL_PATH_SPLIT__';

var getPathStr = function getPathStr(keyPath) {
  return keyPath.join(PATH_SPLIT);
};

var getPathKeys = function getPathKeys(keyPathStr) {
  return keyPathStr.split(PATH_SPLIT);
};

var OVERFLOW_KEY = 'rc-menu-more';
function useKeyRecords() {
  var _React$useState = react["useState"]({}),
      _React$useState2 = Object(slicedToArray["a" /* default */])(_React$useState, 2),
      internalForceUpdate = _React$useState2[1];

  var key2pathRef = Object(react["useRef"])(new Map());
  var path2keyRef = Object(react["useRef"])(new Map());

  var _React$useState3 = react["useState"]([]),
      _React$useState4 = Object(slicedToArray["a" /* default */])(_React$useState3, 2),
      overflowKeys = _React$useState4[0],
      setOverflowKeys = _React$useState4[1];

  var updateRef = Object(react["useRef"])(0);
  var destroyRef = Object(react["useRef"])(false);

  var forceUpdate = function forceUpdate() {
    if (!destroyRef.current) {
      internalForceUpdate({});
    }
  };

  var registerPath = Object(react["useCallback"])(function (key, keyPath) {
    // Warning for invalidate or duplicated \`key\`
    if (false) {} // Fill map


    var connectedPath = getPathStr(keyPath);
    path2keyRef.current.set(connectedPath, key);
    key2pathRef.current.set(key, connectedPath);
    updateRef.current += 1;
    var id = updateRef.current;
    nextSlice(function () {
      if (id === updateRef.current) {
        forceUpdate();
      }
    });
  }, []);
  var unregisterPath = Object(react["useCallback"])(function (key, keyPath) {
    var connectedPath = getPathStr(keyPath);
    path2keyRef.current.delete(connectedPath);
    key2pathRef.current.delete(key);
  }, []);
  var refreshOverflowKeys = Object(react["useCallback"])(function (keys) {
    setOverflowKeys(keys);
  }, []);
  var getKeyPath = Object(react["useCallback"])(function (eventKey, includeOverflow) {
    var fullPath = key2pathRef.current.get(eventKey) || '';
    var keys = getPathKeys(fullPath);

    if (includeOverflow && overflowKeys.includes(keys[0])) {
      keys.unshift(OVERFLOW_KEY);
    }

    return keys;
  }, [overflowKeys]);
  var isSubPathKey = Object(react["useCallback"])(function (pathKeys, eventKey) {
    return pathKeys.some(function (pathKey) {
      var pathKeyList = getKeyPath(pathKey, true);
      return pathKeyList.includes(eventKey);
    });
  }, [getKeyPath]);

  var getKeys = function getKeys() {
    var keys = Object(toConsumableArray["a" /* default */])(key2pathRef.current.keys());

    if (overflowKeys.length) {
      keys.push(OVERFLOW_KEY);
    }

    return keys;
  };
  /**
   * Find current key related child path keys
   */


  var getSubPathKeys = Object(react["useCallback"])(function (key) {
    var connectedPath = "".concat(key2pathRef.current.get(key)).concat(PATH_SPLIT);
    var pathKeys = new Set();

    Object(toConsumableArray["a" /* default */])(path2keyRef.current.keys()).forEach(function (pathKey) {
      if (pathKey.startsWith(connectedPath)) {
        pathKeys.add(path2keyRef.current.get(pathKey));
      }
    });

    return pathKeys;
  }, []);
  react["useEffect"](function () {
    return function () {
      destroyRef.current = true;
    };
  }, []);
  return {
    // Register
    registerPath: registerPath,
    unregisterPath: unregisterPath,
    refreshOverflowKeys: refreshOverflowKeys,
    // Util
    isSubPathKey: isSubPathKey,
    getKeyPath: getKeyPath,
    getKeys: getKeys,
    getSubPathKeys: getSubPathKeys
  };
}
// CONCATENATED MODULE: ./node_modules/rc-menu/es/Menu.js























/**
 * Menu modify after refactor:
 * ## Add
 * - disabled
 *
 * ## Remove
 * - openTransitionName
 * - openAnimation
 * - onDestroy
 * - siderCollapsed: Seems antd do not use this prop (Need test in antd)
 * - collapsedWidth: Seems this logic should be handle by antd Layout.Sider
 */
// optimize for render

var EMPTY_LIST = [];

var Menu_Menu = function Menu(props) {
  var _childList$, _classNames;

  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-menu' : _props$prefixCls,
      style = props.style,
      className = props.className,
      _props$tabIndex = props.tabIndex,
      tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
      children = props.children,
      direction = props.direction,
      id = props.id,
      _props$mode = props.mode,
      mode = _props$mode === void 0 ? 'vertical' : _props$mode,
      inlineCollapsed = props.inlineCollapsed,
      disabled = props.disabled,
      disabledOverflow = props.disabledOverflow,
      _props$subMenuOpenDel = props.subMenuOpenDelay,
      subMenuOpenDelay = _props$subMenuOpenDel === void 0 ? 0.1 : _props$subMenuOpenDel,
      _props$subMenuCloseDe = props.subMenuCloseDelay,
      subMenuCloseDelay = _props$subMenuCloseDe === void 0 ? 0.1 : _props$subMenuCloseDe,
      forceSubMenuRender = props.forceSubMenuRender,
      defaultOpenKeys = props.defaultOpenKeys,
      openKeys = props.openKeys,
      activeKey = props.activeKey,
      defaultActiveFirst = props.defaultActiveFirst,
      _props$selectable = props.selectable,
      selectable = _props$selectable === void 0 ? true : _props$selectable,
      _props$multiple = props.multiple,
      multiple = _props$multiple === void 0 ? false : _props$multiple,
      defaultSelectedKeys = props.defaultSelectedKeys,
      selectedKeys = props.selectedKeys,
      onSelect = props.onSelect,
      onDeselect = props.onDeselect,
      _props$inlineIndent = props.inlineIndent,
      inlineIndent = _props$inlineIndent === void 0 ? 24 : _props$inlineIndent,
      motion = props.motion,
      defaultMotions = props.defaultMotions,
      _props$triggerSubMenu = props.triggerSubMenuAction,
      triggerSubMenuAction = _props$triggerSubMenu === void 0 ? 'hover' : _props$triggerSubMenu,
      builtinPlacements = props.builtinPlacements,
      itemIcon = props.itemIcon,
      expandIcon = props.expandIcon,
      _props$overflowedIndi = props.overflowedIndicator,
      overflowedIndicator = _props$overflowedIndi === void 0 ? '...' : _props$overflowedIndi,
      overflowedIndicatorPopupClassName = props.overflowedIndicatorPopupClassName,
      getPopupContainer = props.getPopupContainer,
      onClick = props.onClick,
      onOpenChange = props.onOpenChange,
      onKeyDown = props.onKeyDown,
      openAnimation = props.openAnimation,
      openTransitionName = props.openTransitionName,
      restProps = Object(objectWithoutProperties["a" /* default */])(props, ["prefixCls", "style", "className", "tabIndex", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "overflowedIndicatorPopupClassName", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName"]);

  var childList = parseChildren(children, EMPTY_LIST);

  var _React$useState = react["useState"](false),
      _React$useState2 = Object(slicedToArray["a" /* default */])(_React$useState, 2),
      mounted = _React$useState2[0],
      setMounted = _React$useState2[1];

  var containerRef = react["useRef"]();
  var uuid = useUUID(id);
  var isRtl = direction === 'rtl'; // ========================= Warn =========================

  if (false) {} // ========================= Mode =========================


  var _React$useMemo = react["useMemo"](function () {
    if ((mode === 'inline' || mode === 'vertical') && inlineCollapsed) {
      return ['vertical', inlineCollapsed];
    }

    return [mode, false];
  }, [mode, inlineCollapsed]),
      _React$useMemo2 = Object(slicedToArray["a" /* default */])(_React$useMemo, 2),
      mergedMode = _React$useMemo2[0],
      mergedInlineCollapsed = _React$useMemo2[1]; // ====================== Responsive ======================


  var _React$useState3 = react["useState"](0),
      _React$useState4 = Object(slicedToArray["a" /* default */])(_React$useState3, 2),
      lastVisibleIndex = _React$useState4[0],
      setLastVisibleIndex = _React$useState4[1];

  var allVisible = lastVisibleIndex >= childList.length - 1 || mergedMode !== 'horizontal' || disabledOverflow; // ========================= Open =========================

  var _useMergedState = Object(useMergedState["a" /* default */])(defaultOpenKeys, {
    value: openKeys,
    postState: function postState(keys) {
      return keys || EMPTY_LIST;
    }
  }),
      _useMergedState2 = Object(slicedToArray["a" /* default */])(_useMergedState, 2),
      mergedOpenKeys = _useMergedState2[0],
      setMergedOpenKeys = _useMergedState2[1];

  var triggerOpenKeys = function triggerOpenKeys(keys) {
    setMergedOpenKeys(keys);
    onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(keys);
  }; // >>>>> Cache & Reset open keys when inlineCollapsed changed


  var _React$useState5 = react["useState"](mergedOpenKeys),
      _React$useState6 = Object(slicedToArray["a" /* default */])(_React$useState5, 2),
      inlineCacheOpenKeys = _React$useState6[0],
      setInlineCacheOpenKeys = _React$useState6[1];

  var isInlineMode = mergedMode === 'inline';
  var mountRef = react["useRef"](false); // Cache

  react["useEffect"](function () {
    if (isInlineMode) {
      setInlineCacheOpenKeys(mergedOpenKeys);
    }
  }, [mergedOpenKeys]); // Restore

  react["useEffect"](function () {
    if (!mountRef.current) {
      mountRef.current = true;
      return;
    }

    if (isInlineMode) {
      setMergedOpenKeys(inlineCacheOpenKeys);
    } else {
      // Trigger open event in case its in control
      triggerOpenKeys(EMPTY_LIST);
    }
  }, [isInlineMode]); // ========================= Path =========================

  var _useKeyRecords = useKeyRecords(),
      registerPath = _useKeyRecords.registerPath,
      unregisterPath = _useKeyRecords.unregisterPath,
      refreshOverflowKeys = _useKeyRecords.refreshOverflowKeys,
      isSubPathKey = _useKeyRecords.isSubPathKey,
      getKeyPath = _useKeyRecords.getKeyPath,
      getKeys = _useKeyRecords.getKeys,
      getSubPathKeys = _useKeyRecords.getSubPathKeys;

  var registerPathContext = react["useMemo"](function () {
    return {
      registerPath: registerPath,
      unregisterPath: unregisterPath
    };
  }, [registerPath, unregisterPath]);
  var pathUserContext = react["useMemo"](function () {
    return {
      isSubPathKey: isSubPathKey
    };
  }, [isSubPathKey]);
  react["useEffect"](function () {
    refreshOverflowKeys(allVisible ? EMPTY_LIST : childList.slice(lastVisibleIndex + 1).map(function (child) {
      return child.key;
    }));
  }, [lastVisibleIndex, allVisible]); // ======================== Active ========================

  var _useMergedState3 = Object(useMergedState["a" /* default */])(activeKey || defaultActiveFirst && ((_childList$ = childList[0]) === null || _childList$ === void 0 ? void 0 : _childList$.key), {
    value: activeKey
  }),
      _useMergedState4 = Object(slicedToArray["a" /* default */])(_useMergedState3, 2),
      mergedActiveKey = _useMergedState4[0],
      setMergedActiveKey = _useMergedState4[1];

  var onActive = useMemoCallback(function (key) {
    setMergedActiveKey(key);
  });
  var onInactive = useMemoCallback(function () {
    setMergedActiveKey(undefined);
  }); // ======================== Select ========================
  // >>>>> Select keys

  var _useMergedState5 = Object(useMergedState["a" /* default */])(defaultSelectedKeys || [], {
    value: selectedKeys,
    // Legacy convert key to array
    postState: function postState(keys) {
      if (Array.isArray(keys)) {
        return keys;
      }

      if (keys === null || keys === undefined) {
        return EMPTY_LIST;
      }

      return [keys];
    }
  }),
      _useMergedState6 = Object(slicedToArray["a" /* default */])(_useMergedState5, 2),
      mergedSelectKeys = _useMergedState6[0],
      setMergedSelectKeys = _useMergedState6[1]; // >>>>> Trigger select


  var triggerSelection = function triggerSelection(info) {
    if (selectable) {
      // Insert or Remove
      var targetKey = info.key;
      var exist = mergedSelectKeys.includes(targetKey);
      var newSelectKeys;

      if (multiple) {
        if (exist) {
          newSelectKeys = mergedSelectKeys.filter(function (key) {
            return key !== targetKey;
          });
        } else {
          newSelectKeys = [].concat(Object(toConsumableArray["a" /* default */])(mergedSelectKeys), [targetKey]);
        }
      } else {
        newSelectKeys = [targetKey];
      }

      setMergedSelectKeys(newSelectKeys); // Trigger event

      var selectInfo = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, info), {}, {
        selectedKeys: newSelectKeys
      });

      if (exist) {
        onDeselect === null || onDeselect === void 0 ? void 0 : onDeselect(selectInfo);
      } else {
        onSelect === null || onSelect === void 0 ? void 0 : onSelect(selectInfo);
      }
    } // Whatever selectable, always close it


    if (!multiple && mergedOpenKeys.length && mergedMode !== 'inline') {
      triggerOpenKeys(EMPTY_LIST);
    }
  }; // ========================= Open =========================

  /**
   * Click for item. SubMenu do not have selection status
   */


  var onInternalClick = useMemoCallback(function (info) {
    onClick === null || onClick === void 0 ? void 0 : onClick(warnItemProp(info));
    triggerSelection(info);
  });
  var onInternalOpenChange = useMemoCallback(function (key, open) {
    var newOpenKeys = mergedOpenKeys.filter(function (k) {
      return k !== key;
    });

    if (open) {
      newOpenKeys.push(key);
    } else if (mergedMode !== 'inline') {
      // We need find all related popup to close
      var subPathKeys = getSubPathKeys(key);
      newOpenKeys = newOpenKeys.filter(function (k) {
        return !subPathKeys.has(k);
      });
    }

    if (!shallowequal_default()(mergedOpenKeys, newOpenKeys)) {
      triggerOpenKeys(newOpenKeys);
    }
  });
  var getInternalPopupContainer = useMemoCallback(getPopupContainer); // ==================== Accessibility =====================

  var triggerAccessibilityOpen = function triggerAccessibilityOpen(key, open) {
    var nextOpen = open !== null && open !== void 0 ? open : !mergedOpenKeys.includes(key);
    onInternalOpenChange(key, nextOpen);
  };

  var onInternalKeyDown = useAccessibility(mergedMode, mergedActiveKey, isRtl, uuid, containerRef, getKeys, getKeyPath, setMergedActiveKey, triggerAccessibilityOpen, onKeyDown); // ======================== Effect ========================

  react["useEffect"](function () {
    setMounted(true);
  }, []); // ======================== Render ========================
  // >>>>> Children

  var wrappedChildList = mergedMode !== 'horizontal' || disabledOverflow ? childList : // Need wrap for overflow dropdown that do not response for open
  childList.map(function (child, index) {
    return (
      /*#__PURE__*/
      // Always wrap provider to avoid sub node re-mount
      react["createElement"](InheritableContextProvider, {
        key: child.key,
        overflowDisabled: index > lastVisibleIndex
      }, child)
    );
  }); // >>>>> Container

  var container = /*#__PURE__*/react["createElement"](es["a" /* default */], Object(esm_extends["a" /* default */])({
    id: id,
    ref: containerRef,
    prefixCls: "".concat(prefixCls, "-overflow"),
    component: "ul",
    itemComponent: es_MenuItem,
    className: classnames_default()(prefixCls, "".concat(prefixCls, "-root"), "".concat(prefixCls, "-").concat(mergedMode), className, (_classNames = {}, Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-inline-collapsed"), mergedInlineCollapsed), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-rtl"), isRtl), _classNames)),
    dir: direction,
    style: style,
    role: "menu",
    tabIndex: tabIndex,
    data: wrappedChildList,
    renderRawItem: function renderRawItem(node) {
      return node;
    },
    renderRawRest: function renderRawRest(omitItems) {
      // We use origin list since wrapped list use context to prevent open
      var len = omitItems.length;
      var originOmitItems = len ? childList.slice(-len) : null;
      return /*#__PURE__*/react["createElement"](SubMenu, {
        eventKey: OVERFLOW_KEY,
        title: overflowedIndicator,
        disabled: allVisible,
        internalPopupClose: len === 0,
        popupClassName: overflowedIndicatorPopupClassName
      }, originOmitItems);
    },
    maxCount: mergedMode !== 'horizontal' || disabledOverflow ? es["a" /* default */].INVALIDATE : es["a" /* default */].RESPONSIVE,
    ssr: "full",
    "data-menu-list": true,
    onVisibleChange: function onVisibleChange(newLastIndex) {
      setLastVisibleIndex(newLastIndex);
    },
    onKeyDown: onInternalKeyDown
  }, restProps)); // >>>>> Render

  return /*#__PURE__*/react["createElement"](IdContext.Provider, {
    value: uuid
  }, /*#__PURE__*/react["createElement"](InheritableContextProvider, {
    prefixCls: prefixCls,
    mode: mergedMode,
    openKeys: mergedOpenKeys,
    rtl: isRtl // Disabled
    ,
    disabled: disabled // Motion
    ,
    motion: mounted ? motion : null,
    defaultMotions: mounted ? defaultMotions : null // Active
    ,
    activeKey: mergedActiveKey,
    onActive: onActive,
    onInactive: onInactive // Selection
    ,
    selectedKeys: mergedSelectKeys // Level
    ,
    inlineIndent: inlineIndent // Popup
    ,
    subMenuOpenDelay: subMenuOpenDelay,
    subMenuCloseDelay: subMenuCloseDelay,
    forceSubMenuRender: forceSubMenuRender,
    builtinPlacements: builtinPlacements,
    triggerSubMenuAction: triggerSubMenuAction,
    getPopupContainer: getInternalPopupContainer // Icon
    ,
    itemIcon: itemIcon,
    expandIcon: expandIcon // Events
    ,
    onItemClick: onInternalClick,
    onOpenChange: onInternalOpenChange
  }, /*#__PURE__*/react["createElement"](PathUserContext.Provider, {
    value: pathUserContext
  }, container), /*#__PURE__*/react["createElement"]("div", {
    style: {
      display: 'none'
    },
    "aria-hidden": true
  }, /*#__PURE__*/react["createElement"](PathRegisterContext.Provider, {
    value: registerPathContext
  }, childList))));
};

/* harmony default export */ var es_Menu = (Menu_Menu);
// CONCATENATED MODULE: ./node_modules/rc-menu/es/MenuItemGroup.js









var MenuItemGroup_InternalMenuItemGroup = function InternalMenuItemGroup(_ref) {
  var className = _ref.className,
      title = _ref.title,
      eventKey = _ref.eventKey,
      children = _ref.children,
      restProps = Object(objectWithoutProperties["a" /* default */])(_ref, ["className", "title", "eventKey", "children"]);

  var _React$useContext = react["useContext"](MenuContext),
      prefixCls = _React$useContext.prefixCls;

  var groupPrefixCls = "".concat(prefixCls, "-item-group");
  return /*#__PURE__*/react["createElement"]("li", Object(esm_extends["a" /* default */])({}, restProps, {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    className: classnames_default()(groupPrefixCls, className)
  }), /*#__PURE__*/react["createElement"]("div", {
    className: "".concat(groupPrefixCls, "-title"),
    title: typeof title === 'string' ? title : undefined
  }, title), /*#__PURE__*/react["createElement"]("ul", {
    className: "".concat(groupPrefixCls, "-list")
  }, children));
};

function MenuItemGroup(_ref2) {
  var children = _ref2.children,
      props = Object(objectWithoutProperties["a" /* default */])(_ref2, ["children"]);

  var connectedKeyPath = useFullPath(props.eventKey);
  var childList = parseChildren(children, connectedKeyPath);
  var measure = useMeasure();

  if (measure) {
    return childList;
  }

  return /*#__PURE__*/react["createElement"](MenuItemGroup_InternalMenuItemGroup, Object(omit["a" /* default */])(props, ['warnKey']), childList);
}
// CONCATENATED MODULE: ./node_modules/rc-menu/es/Divider.js




function Divider(_ref) {
  var className = _ref.className,
      style = _ref.style;

  var _React$useContext = react["useContext"](MenuContext),
      prefixCls = _React$useContext.prefixCls;

  var measure = useMeasure();

  if (measure) {
    return null;
  }

  return /*#__PURE__*/react["createElement"]("li", {
    className: classnames_default()("".concat(prefixCls, "-item-divider"), className),
    style: style
  });
}
// CONCATENATED MODULE: ./node_modules/rc-menu/es/index.js






/** @private Only used for antd internal. Do not use in your production. */

var es_useFullPath = useFullPath;

var ExportMenu = es_Menu;
ExportMenu.Item = es_MenuItem;
ExportMenu.SubMenu = SubMenu;
ExportMenu.ItemGroup = MenuItemGroup;
ExportMenu.Divider = Divider;
/* harmony default export */ var rc_menu_es = __webpack_exports__["f"] = (ExportMenu);

//# sourceURL=webpack:///./node_modules/rc-menu/es/index.js_+_24_modules?`)},"4IlW":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */
var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,

  /**
   * BACKSPACE
   */
  BACKSPACE: 8,

  /**
   * TAB
   */
  TAB: 9,

  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,

  /**
   * ENTER
   */
  ENTER: 13,

  /**
   * SHIFT
   */
  SHIFT: 16,

  /**
   * CTRL
   */
  CTRL: 17,

  /**
   * ALT
   */
  ALT: 18,

  /**
   * PAUSE
   */
  PAUSE: 19,

  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,

  /**
   * ESC
   */
  ESC: 27,

  /**
   * SPACE
   */
  SPACE: 32,

  /**
   * PAGE_UP
   */
  PAGE_UP: 33,

  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,

  /**
   * END
   */
  END: 35,

  /**
   * HOME
   */
  HOME: 36,

  /**
   * LEFT
   */
  LEFT: 37,

  /**
   * UP
   */
  UP: 38,

  /**
   * RIGHT
   */
  RIGHT: 39,

  /**
   * DOWN
   */
  DOWN: 40,

  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,

  /**
   * INSERT
   */
  INSERT: 45,

  /**
   * DELETE
   */
  DELETE: 46,

  /**
   * ZERO
   */
  ZERO: 48,

  /**
   * ONE
   */
  ONE: 49,

  /**
   * TWO
   */
  TWO: 50,

  /**
   * THREE
   */
  THREE: 51,

  /**
   * FOUR
   */
  FOUR: 52,

  /**
   * FIVE
   */
  FIVE: 53,

  /**
   * SIX
   */
  SIX: 54,

  /**
   * SEVEN
   */
  SEVEN: 55,

  /**
   * EIGHT
   */
  EIGHT: 56,

  /**
   * NINE
   */
  NINE: 57,

  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,

  /**
   * A
   */
  A: 65,

  /**
   * B
   */
  B: 66,

  /**
   * C
   */
  C: 67,

  /**
   * D
   */
  D: 68,

  /**
   * E
   */
  E: 69,

  /**
   * F
   */
  F: 70,

  /**
   * G
   */
  G: 71,

  /**
   * H
   */
  H: 72,

  /**
   * I
   */
  I: 73,

  /**
   * J
   */
  J: 74,

  /**
   * K
   */
  K: 75,

  /**
   * L
   */
  L: 76,

  /**
   * M
   */
  M: 77,

  /**
   * N
   */
  N: 78,

  /**
   * O
   */
  O: 79,

  /**
   * P
   */
  P: 80,

  /**
   * Q
   */
  Q: 81,

  /**
   * R
   */
  R: 82,

  /**
   * S
   */
  S: 83,

  /**
   * T
   */
  T: 84,

  /**
   * U
   */
  U: 85,

  /**
   * V
   */
  V: 86,

  /**
   * W
   */
  W: 87,

  /**
   * X
   */
  X: 88,

  /**
   * Y
   */
  Y: 89,

  /**
   * Z
   */
  Z: 90,

  /**
   * META
   */
  META: 91,

  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,

  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,

  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,

  /**
   * NUM_ONE
   */
  NUM_ONE: 97,

  /**
   * NUM_TWO
   */
  NUM_TWO: 98,

  /**
   * NUM_THREE
   */
  NUM_THREE: 99,

  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,

  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,

  /**
   * NUM_SIX
   */
  NUM_SIX: 102,

  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,

  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,

  /**
   * NUM_NINE
   */
  NUM_NINE: 105,

  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,

  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,

  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,

  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,

  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,

  /**
   * F1
   */
  F1: 112,

  /**
   * F2
   */
  F2: 113,

  /**
   * F3
   */
  F3: 114,

  /**
   * F4
   */
  F4: 115,

  /**
   * F5
   */
  F5: 116,

  /**
   * F6
   */
  F6: 117,

  /**
   * F7
   */
  F7: 118,

  /**
   * F8
   */
  F8: 119,

  /**
   * F9
   */
  F9: 120,

  /**
   * F10
   */
  F10: 121,

  /**
   * F11
   */
  F11: 122,

  /**
   * F12
   */
  F12: 123,

  /**
   * NUMLOCK
   */
  NUMLOCK: 144,

  /**
   * SEMICOLON
   */
  SEMICOLON: 186,

  /**
   * DASH
   */
  DASH: 189,

  /**
   * EQUALS
   */
  EQUALS: 187,

  /**
   * COMMA
   */
  COMMA: 188,

  /**
   * PERIOD
   */
  PERIOD: 190,

  /**
   * SLASH
   */
  SLASH: 191,

  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,

  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,

  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,

  /**
   * BACKSLASH
   */
  BACKSLASH: 220,

  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,

  /**
   * WIN_KEY
   */
  WIN_KEY: 224,

  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,

  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================

  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    var keyCode = e.keyCode;

    if (e.altKey && !e.ctrlKey || e.metaKey || // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    } // The following keys are quite harmless, even in combination with
    // CTRL, ALT or SHIFT.


    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;

      default:
        return true;
    }
  },

  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }

    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }

    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    } // Safari sends zero key code for non-latin characters.


    if (window.navigator.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
      return true;
    }

    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;

      default:
        return false;
    }
  }
};
/* harmony default export */ __webpack_exports__["a"] = (KeyCode);

//# sourceURL=webpack:///./node_modules/rc-util/es/KeyCode.js?`)},"5OYt":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ODXe");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_responsiveObserve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ACnJ");




function useBreakpoint() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      screens = _useState2[0],
      setScreens = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var token = _util_responsiveObserve__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].subscribe(function (supportScreens) {
      setScreens(supportScreens);
    });
    return function () {
      return _util_responsiveObserve__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].unsubscribe(token);
    };
  }, []);
  return screens;
}

/* harmony default export */ __webpack_exports__["a"] = (useBreakpoint);

//# sourceURL=webpack:///./node_modules/antd/es/grid/hooks/useBreakpoint.js?`)},"5bA4":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/LeftOutlined.js
// This icon file is generated automatically.
var LeftOutlined_LeftOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, "name": "left", "theme": "outlined" };
/* harmony default export */ var asn_LeftOutlined = (LeftOutlined_LeftOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__("6VBw");

// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/LeftOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_LeftOutlined_LeftOutlined = function LeftOutlined(props, ref) {
  return /*#__PURE__*/react["createElement"](AntdIcon["a" /* default */], Object.assign({}, props, {
    ref: ref,
    icon: asn_LeftOutlined
  }));
};

icons_LeftOutlined_LeftOutlined.displayName = 'LeftOutlined';
/* harmony default export */ var icons_LeftOutlined = __webpack_exports__["a"] = (/*#__PURE__*/react["forwardRef"](icons_LeftOutlined_LeftOutlined));

//# sourceURL=webpack:///./node_modules/@ant-design/icons/es/icons/LeftOutlined.js_+_1_modules?`)},"7Lfq":function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/antd/es/dropdown/style/index.css?`)},"8Skl":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/DownOutlined.js
// This icon file is generated automatically.
var DownOutlined_DownOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, "name": "down", "theme": "outlined" };
/* harmony default export */ var asn_DownOutlined = (DownOutlined_DownOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__("6VBw");

// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/DownOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_DownOutlined_DownOutlined = function DownOutlined(props, ref) {
  return /*#__PURE__*/react["createElement"](AntdIcon["a" /* default */], Object.assign({}, props, {
    ref: ref,
    icon: asn_DownOutlined
  }));
};

icons_DownOutlined_DownOutlined.displayName = 'DownOutlined';
/* harmony default export */ var icons_DownOutlined = __webpack_exports__["a"] = (/*#__PURE__*/react["forwardRef"](icons_DownOutlined_DownOutlined));

//# sourceURL=webpack:///./node_modules/@ant-design/icons/es/icons/DownOutlined.js_+_1_modules?`)},"8z13":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("VTBJ");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("ODXe");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("Ff2n");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/rc-resize-observer/es/index.js
var es = __webpack_require__("t23M");

// CONCATENATED MODULE: ./node_modules/rc-overflow/es/Item.js





 // Use shared variable to save bundle size

var UNDEFINED = undefined;

function InternalItem(props, ref) {
  var prefixCls = props.prefixCls,
      invalidate = props.invalidate,
      item = props.item,
      renderItem = props.renderItem,
      responsive = props.responsive,
      registerSize = props.registerSize,
      itemKey = props.itemKey,
      className = props.className,
      style = props.style,
      children = props.children,
      display = props.display,
      order = props.order,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      restProps = Object(objectWithoutProperties["a" /* default */])(props, ["prefixCls", "invalidate", "item", "renderItem", "responsive", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"]);

  var mergedHidden = responsive && !display; // ================================ Effect ================================

  function internalRegisterSize(width) {
    registerSize(itemKey, width);
  }

  react["useEffect"](function () {
    return function () {
      internalRegisterSize(null);
    };
  }, []); // ================================ Render ================================

  var childNode = renderItem && item !== UNDEFINED ? renderItem(item) : children;
  var overflowStyle;

  if (!invalidate) {
    overflowStyle = {
      opacity: mergedHidden ? 0 : 1,
      height: mergedHidden ? 0 : UNDEFINED,
      overflowY: mergedHidden ? 'hidden' : UNDEFINED,
      order: responsive ? order : UNDEFINED,
      pointerEvents: mergedHidden ? 'none' : UNDEFINED,
      position: mergedHidden ? 'absolute' : UNDEFINED
    };
  }

  var overflowProps = {};

  if (mergedHidden) {
    overflowProps['aria-hidden'] = true;
  }

  var itemNode = /*#__PURE__*/react["createElement"](Component, Object(esm_extends["a" /* default */])({
    className: classnames_default()(!invalidate && prefixCls, className),
    style: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, overflowStyle), style)
  }, overflowProps, restProps, {
    ref: ref
  }), childNode);

  if (responsive) {
    itemNode = /*#__PURE__*/react["createElement"](es["a" /* default */], {
      onResize: function onResize(_ref) {
        var offsetWidth = _ref.offsetWidth;
        internalRegisterSize(offsetWidth);
      }
    }, itemNode);
  }

  return itemNode;
}

var Item = /*#__PURE__*/react["forwardRef"](InternalItem);
Item.displayName = 'Item';
/* harmony default export */ var es_Item = (Item);
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__("wgJM");

// CONCATENATED MODULE: ./node_modules/rc-overflow/es/hooks/useBatchFrameState.js



/**
 * State generate. Return a \`setState\` but it will flush all state with one render to save perf.
 * This is not a realization of \`unstable_batchedUpdates\`.
 */

function useBatchFrameState() {
  var _useState = Object(react["useState"])({}),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      forceUpdate = _useState2[1];

  var statesRef = Object(react["useRef"])([]);
  var destroyRef = Object(react["useRef"])(false);
  var walkingIndex = 0;
  var beforeFrameId = 0;
  Object(react["useEffect"])(function () {
    return function () {
      destroyRef.current = true;
    };
  }, []);

  function createState(defaultValue) {
    var myIndex = walkingIndex;
    walkingIndex += 1; // Fill value if not exist yet

    if (statesRef.current.length < myIndex + 1) {
      statesRef.current[myIndex] = defaultValue;
    } // Return filled as \`setState\`


    var value = statesRef.current[myIndex];

    function setValue(val) {
      statesRef.current[myIndex] = typeof val === 'function' ? val(statesRef.current[myIndex]) : val;
      raf["a" /* default */].cancel(beforeFrameId); // Flush with batch

      beforeFrameId = Object(raf["a" /* default */])(function () {
        if (!destroyRef.current) {
          forceUpdate({});
        }
      });
    }

    return [value, setValue];
  }

  return createState;
}
// CONCATENATED MODULE: ./node_modules/rc-overflow/es/RawItem.js







var RawItem_InternalRawItem = function InternalRawItem(props, ref) {
  var context = react["useContext"](OverflowContext); // Render directly when context not provided

  if (!context) {
    var _props$component = props.component,
        Component = _props$component === void 0 ? 'div' : _props$component,
        _restProps = Object(objectWithoutProperties["a" /* default */])(props, ["component"]);

    return /*#__PURE__*/react["createElement"](Component, Object(esm_extends["a" /* default */])({}, _restProps, {
      ref: ref
    }));
  }

  var contextClassName = context.className,
      restContext = Object(objectWithoutProperties["a" /* default */])(context, ["className"]);

  var className = props.className,
      restProps = Object(objectWithoutProperties["a" /* default */])(props, ["className"]); // Do not pass context to sub item to avoid multiple measure


  return /*#__PURE__*/react["createElement"](OverflowContext.Provider, {
    value: null
  }, /*#__PURE__*/react["createElement"](es_Item, Object(esm_extends["a" /* default */])({
    ref: ref,
    className: classnames_default()(contextClassName, className)
  }, restContext, restProps)));
};

var RawItem = /*#__PURE__*/react["forwardRef"](RawItem_InternalRawItem);
RawItem.displayName = 'RawItem';
/* harmony default export */ var es_RawItem = (RawItem);
// CONCATENATED MODULE: ./node_modules/rc-overflow/es/Overflow.js











var OverflowContext = /*#__PURE__*/react["createContext"](null);
var RESPONSIVE = 'responsive';
var INVALIDATE = 'invalidate';

function defaultRenderRest(omittedItems) {
  return "+ ".concat(omittedItems.length, " ...");
}

function Overflow(props, ref) {
  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-overflow' : _props$prefixCls,
      _props$data = props.data,
      data = _props$data === void 0 ? [] : _props$data,
      renderItem = props.renderItem,
      renderRawItem = props.renderRawItem,
      itemKey = props.itemKey,
      _props$itemWidth = props.itemWidth,
      itemWidth = _props$itemWidth === void 0 ? 10 : _props$itemWidth,
      ssr = props.ssr,
      style = props.style,
      className = props.className,
      maxCount = props.maxCount,
      renderRest = props.renderRest,
      renderRawRest = props.renderRawRest,
      suffix = props.suffix,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      itemComponent = props.itemComponent,
      onVisibleChange = props.onVisibleChange,
      restProps = Object(objectWithoutProperties["a" /* default */])(props, ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"]);

  var createUseState = useBatchFrameState();
  var fullySSR = ssr === 'full';

  var _createUseState = createUseState(null),
      _createUseState2 = Object(slicedToArray["a" /* default */])(_createUseState, 2),
      containerWidth = _createUseState2[0],
      setContainerWidth = _createUseState2[1];

  var mergedContainerWidth = containerWidth || 0;

  var _createUseState3 = createUseState(new Map()),
      _createUseState4 = Object(slicedToArray["a" /* default */])(_createUseState3, 2),
      itemWidths = _createUseState4[0],
      setItemWidths = _createUseState4[1];

  var _createUseState5 = createUseState(0),
      _createUseState6 = Object(slicedToArray["a" /* default */])(_createUseState5, 2),
      prevRestWidth = _createUseState6[0],
      setPrevRestWidth = _createUseState6[1];

  var _createUseState7 = createUseState(0),
      _createUseState8 = Object(slicedToArray["a" /* default */])(_createUseState7, 2),
      restWidth = _createUseState8[0],
      setRestWidth = _createUseState8[1];

  var _createUseState9 = createUseState(0),
      _createUseState10 = Object(slicedToArray["a" /* default */])(_createUseState9, 2),
      suffixWidth = _createUseState10[0],
      setSuffixWidth = _createUseState10[1];

  var _useState = Object(react["useState"])(null),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      suffixFixedStart = _useState2[0],
      setSuffixFixedStart = _useState2[1];

  var _useState3 = Object(react["useState"])(null),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      displayCount = _useState4[0],
      setDisplayCount = _useState4[1];

  var mergedDisplayCount = react["useMemo"](function () {
    if (displayCount === null && fullySSR) {
      return Number.MAX_SAFE_INTEGER;
    }

    return displayCount || 0;
  }, [displayCount, containerWidth]);

  var _useState5 = Object(react["useState"])(false),
      _useState6 = Object(slicedToArray["a" /* default */])(_useState5, 2),
      restReady = _useState6[0],
      setRestReady = _useState6[1];

  var itemPrefixCls = "".concat(prefixCls, "-item"); // Always use the max width to avoid blink

  var mergedRestWidth = Math.max(prevRestWidth, restWidth); // ================================= Data =================================

  var isResponsive = data.length && maxCount === RESPONSIVE;
  var invalidate = maxCount === INVALIDATE;
  /**
   * When is \`responsive\`, we will always render rest node to get the real width of it for calculation
   */

  var showRest = isResponsive || typeof maxCount === 'number' && data.length > maxCount;
  var mergedData = Object(react["useMemo"])(function () {
    var items = data;

    if (isResponsive) {
      if (containerWidth === null && fullySSR) {
        items = data;
      } else {
        items = data.slice(0, Math.min(data.length, mergedContainerWidth / itemWidth));
      }
    } else if (typeof maxCount === 'number') {
      items = data.slice(0, maxCount);
    }

    return items;
  }, [data, itemWidth, containerWidth, maxCount, isResponsive]);
  var omittedItems = Object(react["useMemo"])(function () {
    if (isResponsive) {
      return data.slice(mergedDisplayCount + 1);
    }

    return data.slice(mergedData.length);
  }, [data, mergedData, isResponsive, mergedDisplayCount]); // ================================= Item =================================

  var getKey = Object(react["useCallback"])(function (item, index) {
    var _ref;

    if (typeof itemKey === 'function') {
      return itemKey(item);
    }

    return (_ref = itemKey && (item === null || item === void 0 ? void 0 : item[itemKey])) !== null && _ref !== void 0 ? _ref : index;
  }, [itemKey]);
  var mergedRenderItem = Object(react["useCallback"])(renderItem || function (item) {
    return item;
  }, [renderItem]);

  function updateDisplayCount(count, notReady) {
    setDisplayCount(count);

    if (!notReady) {
      setRestReady(count < data.length - 1);
      onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(count);
    }
  } // ================================= Size =================================


  function onOverflowResize(_, element) {
    setContainerWidth(element.clientWidth);
  }

  function registerSize(key, width) {
    setItemWidths(function (origin) {
      var clone = new Map(origin);

      if (width === null) {
        clone.delete(key);
      } else {
        clone.set(key, width);
      }

      return clone;
    });
  }

  function registerOverflowSize(_, width) {
    setRestWidth(width);
    setPrevRestWidth(restWidth);
  }

  function registerSuffixSize(_, width) {
    setSuffixWidth(width);
  } // ================================ Effect ================================


  function getItemWidth(index) {
    return itemWidths.get(getKey(mergedData[index], index));
  }

  react["useLayoutEffect"](function () {
    if (mergedContainerWidth && mergedRestWidth && mergedData) {
      var totalWidth = suffixWidth;
      var len = mergedData.length;
      var lastIndex = len - 1; // When data count change to 0, reset this since not loop will reach

      if (!len) {
        updateDisplayCount(0);
        setSuffixFixedStart(null);
        return;
      }

      for (var i = 0; i < len; i += 1) {
        var currentItemWidth = getItemWidth(i); // Break since data not ready

        if (currentItemWidth === undefined) {
          updateDisplayCount(i - 1, true);
          break;
        } // Find best match


        totalWidth += currentItemWidth;

        if ( // Only one means \`totalWidth\` is the final width
        lastIndex === 0 && totalWidth <= mergedContainerWidth || // Last two width will be the final width
        i === lastIndex - 1 && totalWidth + getItemWidth(lastIndex) <= mergedContainerWidth) {
          // Additional check if match the end
          updateDisplayCount(lastIndex);
          setSuffixFixedStart(null);
          break;
        } else if (totalWidth + mergedRestWidth > mergedContainerWidth) {
          // Can not hold all the content to show rest
          updateDisplayCount(i - 1);
          setSuffixFixedStart(totalWidth - currentItemWidth - suffixWidth + restWidth);
          break;
        }
      }

      if (suffix && getItemWidth(0) + suffixWidth > mergedContainerWidth) {
        setSuffixFixedStart(null);
      }
    }
  }, [mergedContainerWidth, itemWidths, restWidth, suffixWidth, getKey, mergedData]); // ================================ Render ================================

  var displayRest = restReady && !!omittedItems.length;
  var suffixStyle = {};

  if (suffixFixedStart !== null && isResponsive) {
    suffixStyle = {
      position: 'absolute',
      left: suffixFixedStart,
      top: 0
    };
  }

  var itemSharedProps = {
    prefixCls: itemPrefixCls,
    responsive: isResponsive,
    component: itemComponent,
    invalidate: invalidate
  }; // >>>>> Choice render fun by \`renderRawItem\`

  var internalRenderItemNode = renderRawItem ? function (item, index) {
    var key = getKey(item, index);
    return /*#__PURE__*/react["createElement"](OverflowContext.Provider, {
      key: key,
      value: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, itemSharedProps), {}, {
        order: index,
        item: item,
        itemKey: key,
        registerSize: registerSize,
        display: index <= mergedDisplayCount
      })
    }, renderRawItem(item, index));
  } : function (item, index) {
    var key = getKey(item, index);
    return /*#__PURE__*/react["createElement"](es_Item, Object(esm_extends["a" /* default */])({}, itemSharedProps, {
      order: index,
      key: key,
      item: item,
      renderItem: mergedRenderItem,
      itemKey: key,
      registerSize: registerSize,
      display: index <= mergedDisplayCount
    }));
  }; // >>>>> Rest node

  var restNode;
  var restContextProps = {
    order: displayRest ? mergedDisplayCount : Number.MAX_SAFE_INTEGER,
    className: "".concat(itemPrefixCls, "-rest"),
    registerSize: registerOverflowSize,
    display: displayRest
  };

  if (!renderRawRest) {
    var mergedRenderRest = renderRest || defaultRenderRest;
    restNode = /*#__PURE__*/react["createElement"](es_Item, Object(esm_extends["a" /* default */])({}, itemSharedProps, restContextProps), typeof mergedRenderRest === 'function' ? mergedRenderRest(omittedItems) : mergedRenderRest);
  } else if (renderRawRest) {
    restNode = /*#__PURE__*/react["createElement"](OverflowContext.Provider, {
      value: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, itemSharedProps), restContextProps)
    }, renderRawRest(omittedItems));
  }

  var overflowNode = /*#__PURE__*/react["createElement"](Component, Object(esm_extends["a" /* default */])({
    className: classnames_default()(!invalidate && prefixCls, className),
    style: style,
    ref: ref
  }, restProps), mergedData.map(internalRenderItemNode), showRest ? restNode : null, suffix && /*#__PURE__*/react["createElement"](es_Item, Object(esm_extends["a" /* default */])({}, itemSharedProps, {
    order: mergedDisplayCount,
    className: "".concat(itemPrefixCls, "-suffix"),
    registerSize: registerSuffixSize,
    display: true,
    style: suffixStyle
  }), suffix));

  if (isResponsive) {
    overflowNode = /*#__PURE__*/react["createElement"](es["a" /* default */], {
      onResize: onOverflowResize
    }, overflowNode);
  }

  return overflowNode;
}

var ForwardOverflow = /*#__PURE__*/react["forwardRef"](Overflow);
ForwardOverflow.displayName = 'Overflow';
ForwardOverflow.Item = es_RawItem;
ForwardOverflow.RESPONSIVE = RESPONSIVE;
ForwardOverflow.INVALIDATE = INVALIDATE; // Convert to generic type

/* harmony default export */ var es_Overflow = (ForwardOverflow);
// CONCATENATED MODULE: ./node_modules/rc-overflow/es/index.js

/* harmony default export */ var rc_overflow_es = __webpack_exports__["a"] = (es_Overflow);

//# sourceURL=webpack:///./node_modules/rc-overflow/es/index.js_+_4_modules?`)},BvKs:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("1OyB");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("vuIU");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__("Ji7U");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 1 modules
var createSuper = __webpack_require__("LK+K");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// EXTERNAL MODULE: ./node_modules/rc-menu/es/index.js + 24 modules
var es = __webpack_require__("1j5w");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__("bT9E");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js + 1 modules
var EllipsisOutlined = __webpack_require__("GZ0F");

// CONCATENATED MODULE: ./node_modules/antd/es/menu/MenuContext.js

var MenuContext = /*#__PURE__*/Object(react["createContext"])({
  prefixCls: '',
  firstLevel: true,
  inlineCollapsed: false
});
/* harmony default export */ var menu_MenuContext = (MenuContext);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__("0n0R");

// CONCATENATED MODULE: ./node_modules/antd/es/menu/SubMenu.js








function SubMenu(props) {
  var _a;

  var popupClassName = props.popupClassName,
      icon = props.icon,
      title = props.title;
  var context = react["useContext"](menu_MenuContext);
  var prefixCls = context.prefixCls,
      inlineCollapsed = context.inlineCollapsed,
      antdMenuTheme = context.antdMenuTheme;
  var parentPath = Object(es["g" /* useFullPath */])();
  var titleNode;

  if (!icon) {
    titleNode = inlineCollapsed && !parentPath.length && title && typeof title === 'string' ? /*#__PURE__*/react["createElement"]("div", {
      className: "".concat(prefixCls, "-inline-collapsed-noicon")
    }, title.charAt(0)) : /*#__PURE__*/react["createElement"]("span", {
      className: "".concat(prefixCls, "-title-content")
    }, title);
  } else {
    // inline-collapsed.md demo \u4F9D\u8D56 span \u6765\u9690\u85CF\u6587\u5B57,\u6709 icon \u5C5E\u6027\uFF0C\u5219\u5185\u90E8\u5305\u88F9\u4E00\u4E2A span
    // ref: https://github.com/ant-design/ant-design/pull/23456
    var titleIsSpan = Object(reactNode["b" /* isValidElement */])(title) && title.type === 'span';
    titleNode = /*#__PURE__*/react["createElement"](react["Fragment"], null, Object(reactNode["a" /* cloneElement */])(icon, {
      className: classnames_default()(Object(reactNode["b" /* isValidElement */])(icon) ? (_a = icon.props) === null || _a === void 0 ? void 0 : _a.className : '', "".concat(prefixCls, "-item-icon"))
    }), titleIsSpan ? title : /*#__PURE__*/react["createElement"]("span", {
      className: "".concat(prefixCls, "-title-content")
    }, title));
  }

  return /*#__PURE__*/react["createElement"](menu_MenuContext.Provider, {
    value: Object(esm_extends["a" /* default */])(Object(esm_extends["a" /* default */])({}, context), {
      firstLevel: false
    })
  }, /*#__PURE__*/react["createElement"](es["e" /* SubMenu */], Object(esm_extends["a" /* default */])({}, Object(omit["a" /* default */])(props, ['icon']), {
    title: titleNode,
    popupClassName: classnames_default()(prefixCls, "".concat(prefixCls, "-").concat(antdMenuTheme), popupClassName)
  })));
}

/* harmony default export */ var menu_SubMenu = (SubMenu);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("rePB");

// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__("Zm9Q");

// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 6 modules
var tooltip = __webpack_require__("3S7+");

// EXTERNAL MODULE: ./node_modules/antd/es/layout/Sider.js + 3 modules
var Sider = __webpack_require__("ZX9x");

// CONCATENATED MODULE: ./node_modules/antd/es/menu/MenuItem.js







var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










var MenuItem_MenuItem = /*#__PURE__*/function (_React$Component) {
  Object(inherits["a" /* default */])(MenuItem, _React$Component);

  var _super = Object(createSuper["a" /* default */])(MenuItem);

  function MenuItem() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, MenuItem);

    _this = _super.apply(this, arguments);

    _this.renderItem = function (_ref) {
      var _classNames;

      var siderCollapsed = _ref.siderCollapsed;

      var _a;

      var _this$context = _this.context,
          prefixCls = _this$context.prefixCls,
          firstLevel = _this$context.firstLevel,
          inlineCollapsed = _this$context.inlineCollapsed,
          direction = _this$context.direction;
      var _this$props = _this.props,
          className = _this$props.className,
          children = _this$props.children;

      var _b = _this.props,
          title = _b.title,
          icon = _b.icon,
          danger = _b.danger,
          rest = __rest(_b, ["title", "icon", "danger"]);

      var tooltipTitle = title;

      if (typeof title === 'undefined') {
        tooltipTitle = firstLevel ? children : '';
      } else if (title === false) {
        tooltipTitle = '';
      }

      var tooltipProps = {
        title: tooltipTitle
      };

      if (!siderCollapsed && !inlineCollapsed) {
        tooltipProps.title = null; // Reset \`visible\` to fix control mode tooltip display not correct
        // ref: https://github.com/ant-design/ant-design/issues/16742

        tooltipProps.visible = false;
      }

      var childrenLength = Object(toArray["a" /* default */])(children).length;
      return /*#__PURE__*/react["createElement"](tooltip["a" /* default */], Object(esm_extends["a" /* default */])({}, tooltipProps, {
        placement: direction === 'rtl' ? 'left' : 'right',
        overlayClassName: "".concat(prefixCls, "-inline-collapsed-tooltip")
      }), /*#__PURE__*/react["createElement"](es["b" /* Item */], Object(esm_extends["a" /* default */])({}, rest, {
        className: classnames_default()((_classNames = {}, Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-item-danger"), danger), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-item-only-child"), (icon ? childrenLength + 1 : childrenLength) === 1), _classNames), className),
        title: typeof title === 'string' ? title : undefined
      }), Object(reactNode["a" /* cloneElement */])(icon, {
        className: classnames_default()(Object(reactNode["b" /* isValidElement */])(icon) ? (_a = icon.props) === null || _a === void 0 ? void 0 : _a.className : '', "".concat(prefixCls, "-item-icon"))
      }), _this.renderItemChildren(inlineCollapsed)));
    };

    return _this;
  }

  Object(createClass["a" /* default */])(MenuItem, [{
    key: "renderItemChildren",
    value: function renderItemChildren(inlineCollapsed) {
      var _this$context2 = this.context,
          prefixCls = _this$context2.prefixCls,
          firstLevel = _this$context2.firstLevel;
      var _this$props2 = this.props,
          icon = _this$props2.icon,
          children = _this$props2.children;
      var wrapNode = /*#__PURE__*/react["createElement"]("span", {
        className: "".concat(prefixCls, "-title-content")
      }, children); // inline-collapsed.md demo \u4F9D\u8D56 span \u6765\u9690\u85CF\u6587\u5B57,\u6709 icon \u5C5E\u6027\uFF0C\u5219\u5185\u90E8\u5305\u88F9\u4E00\u4E2A span
      // ref: https://github.com/ant-design/ant-design/pull/23456

      if (!icon || Object(reactNode["b" /* isValidElement */])(children) && children.type === 'span') {
        if (children && inlineCollapsed && firstLevel && typeof children === 'string') {
          return /*#__PURE__*/react["createElement"]("div", {
            className: "".concat(prefixCls, "-inline-collapsed-noicon")
          }, children.charAt(0));
        }
      }

      return wrapNode;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react["createElement"](Sider["a" /* SiderContext */].Consumer, null, this.renderItem);
    }
  }]);

  return MenuItem;
}(react["Component"]);


MenuItem_MenuItem.contextType = menu_MenuContext;
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js + 1 modules
var config_provider_context = __webpack_require__("H84U");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/devWarning.js
var devWarning = __webpack_require__("uaoM");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/motion.js
var motion = __webpack_require__("EXcs");

// CONCATENATED MODULE: ./node_modules/antd/es/menu/index.js






var menu_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};















var menu_InternalMenu = /*#__PURE__*/function (_React$Component) {
  Object(inherits["a" /* default */])(InternalMenu, _React$Component);

  var _super = Object(createSuper["a" /* default */])(InternalMenu);

  function InternalMenu(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, InternalMenu);

    _this = _super.call(this, props);

    _this.renderMenu = function (_ref) {
      var getPopupContainer = _ref.getPopupContainer,
          getPrefixCls = _ref.getPrefixCls,
          direction = _ref.direction;
      var rootPrefixCls = getPrefixCls();

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          className = _a.className,
          theme = _a.theme,
          expandIcon = _a.expandIcon,
          restProps = menu_rest(_a, ["prefixCls", "className", "theme", "expandIcon"]);

      var passedProps = Object(omit["a" /* default */])(restProps, ['siderCollapsed', 'collapsedWidth']);

      var inlineCollapsed = _this.getInlineCollapsed();

      var defaultMotions = {
        horizontal: {
          motionName: "".concat(rootPrefixCls, "-slide-up")
        },
        inline: motion["a" /* default */],
        other: {
          motionName: "".concat(rootPrefixCls, "-zoom-big")
        }
      };
      var prefixCls = getPrefixCls('menu', customizePrefixCls);
      var menuClassName = classnames_default()("".concat(prefixCls, "-").concat(theme), className);
      return /*#__PURE__*/react["createElement"](menu_MenuContext.Provider, {
        value: {
          prefixCls: prefixCls,
          inlineCollapsed: inlineCollapsed || false,
          antdMenuTheme: theme,
          direction: direction,
          firstLevel: true
        }
      }, /*#__PURE__*/react["createElement"](es["f" /* default */], Object(esm_extends["a" /* default */])({
        getPopupContainer: getPopupContainer,
        overflowedIndicator: /*#__PURE__*/react["createElement"](EllipsisOutlined["a" /* default */], null),
        overflowedIndicatorPopupClassName: "".concat(prefixCls, "-").concat(theme)
      }, passedProps, {
        inlineCollapsed: inlineCollapsed,
        className: menuClassName,
        prefixCls: prefixCls,
        direction: direction,
        defaultMotions: defaultMotions,
        expandIcon: Object(reactNode["a" /* cloneElement */])(expandIcon, {
          className: "".concat(prefixCls, "-submenu-expand-icon")
        })
      })));
    };

    Object(devWarning["a" /* default */])(!('inlineCollapsed' in props && props.mode !== 'inline'), 'Menu', '\`inlineCollapsed\` should only be used when \`mode\` is inline.');
    Object(devWarning["a" /* default */])(!(props.siderCollapsed !== undefined && 'inlineCollapsed' in props), 'Menu', '\`inlineCollapsed\` not control Menu under Sider. Should set \`collapsed\` on Sider instead.');
    return _this;
  }

  Object(createClass["a" /* default */])(InternalMenu, [{
    key: "getInlineCollapsed",
    value: function getInlineCollapsed() {
      var _this$props = this.props,
          inlineCollapsed = _this$props.inlineCollapsed,
          siderCollapsed = _this$props.siderCollapsed;

      if (siderCollapsed !== undefined) {
        return siderCollapsed;
      }

      return inlineCollapsed;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react["createElement"](config_provider_context["a" /* ConfigConsumer */], null, this.renderMenu);
    }
  }]);

  return InternalMenu;
}(react["Component"]);

menu_InternalMenu.defaultProps = {
  theme: 'light' // or dark

}; // We should keep this as ref-able

var menu_Menu = /*#__PURE__*/function (_React$Component2) {
  Object(inherits["a" /* default */])(Menu, _React$Component2);

  var _super2 = Object(createSuper["a" /* default */])(Menu);

  function Menu() {
    Object(classCallCheck["a" /* default */])(this, Menu);

    return _super2.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(Menu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react["createElement"](Sider["a" /* SiderContext */].Consumer, null, function (context) {
        return /*#__PURE__*/react["createElement"](menu_InternalMenu, Object(esm_extends["a" /* default */])({}, _this2.props, context));
      });
    }
  }]);

  return Menu;
}(react["Component"]);

menu_Menu.Divider = es["a" /* Divider */];
menu_Menu.Item = MenuItem_MenuItem;
menu_Menu.SubMenu = menu_SubMenu;
menu_Menu.ItemGroup = es["c" /* ItemGroup */];
/* harmony default export */ var menu = __webpack_exports__["a"] = (menu_Menu);

//# sourceURL=webpack:///./node_modules/antd/es/menu/index.js_+_3_modules?`)},"Dt+G":function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/antd/es/popover/style/index.css?`)},GJlF:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/antd/es/avatar/style/index.css?`)},GZ0F:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/EllipsisOutlined.js
// This icon file is generated automatically.
var EllipsisOutlined_EllipsisOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, "name": "ellipsis", "theme": "outlined" };
/* harmony default export */ var asn_EllipsisOutlined = (EllipsisOutlined_EllipsisOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__("6VBw");

// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_EllipsisOutlined_EllipsisOutlined = function EllipsisOutlined(props, ref) {
  return /*#__PURE__*/react["createElement"](AntdIcon["a" /* default */], Object.assign({}, props, {
    ref: ref,
    icon: asn_EllipsisOutlined
  }));
};

icons_EllipsisOutlined_EllipsisOutlined.displayName = 'EllipsisOutlined';
/* harmony default export */ var icons_EllipsisOutlined = __webpack_exports__["a"] = (/*#__PURE__*/react["forwardRef"](icons_EllipsisOutlined_EllipsisOutlined));

//# sourceURL=webpack:///./node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js_+_1_modules?`)},Gytx:function(module,exports){eval(`//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


//# sourceURL=webpack:///./node_modules/shallowequal/index.js?`)},N2Kk:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony default export */ __webpack_exports__["a"] = ({
  // Options.jsx
  items_per_page: '\u6761/\u9875',
  jump_to: '\u8DF3\u81F3',
  jump_to_confirm: '\u786E\u5B9A',
  page: '\u9875',
  // Pagination.jsx
  prev_page: '\u4E0A\u4E00\u9875',
  next_page: '\u4E0B\u4E00\u9875',
  prev_5: '\u5411\u524D 5 \u9875',
  next_5: '\u5411\u540E 5 \u9875',
  prev_3: '\u5411\u524D 3 \u9875',
  next_3: '\u5411\u540E 3 \u9875'
});

//# sourceURL=webpack:///./node_modules/rc-pagination/es/locale/zh_CN.js?`)},PKem:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LayoutContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Content; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("KQm4");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rePB");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ODXe");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wx14");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("H84U");





var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




var LayoutContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createContext"]({
  siderHook: {
    addSider: function addSider() {
      return null;
    },
    removeSider: function removeSider() {
      return null;
    }
  }
});

function generator(_ref) {
  var suffixCls = _ref.suffixCls,
      tagName = _ref.tagName,
      displayName = _ref.displayName;
  return function (BasicComponent) {
    var Adapter = function Adapter(props) {
      var _React$useContext = react__WEBPACK_IMPORTED_MODULE_4__["useContext"](_config_provider__WEBPACK_IMPORTED_MODULE_6__[/* ConfigContext */ "b"]),
          getPrefixCls = _React$useContext.getPrefixCls;

      var customizePrefixCls = props.prefixCls;
      var prefixCls = getPrefixCls(suffixCls, customizePrefixCls);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](BasicComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({
        prefixCls: prefixCls,
        tagName: tagName
      }, props));
    };

    Adapter.displayName = displayName;
    return Adapter;
  };
}

var Basic = function Basic(props) {
  var prefixCls = props.prefixCls,
      className = props.className,
      children = props.children,
      tagName = props.tagName,
      others = __rest(props, ["prefixCls", "className", "children", "tagName"]);

  var classString = classnames__WEBPACK_IMPORTED_MODULE_5___default()(prefixCls, className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](tagName, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({
    className: classString
  }, others), children);
};

var BasicLayout = function BasicLayout(props) {
  var _classNames;

  var _React$useContext2 = react__WEBPACK_IMPORTED_MODULE_4__["useContext"](_config_provider__WEBPACK_IMPORTED_MODULE_6__[/* ConfigContext */ "b"]),
      direction = _React$useContext2.direction;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4__["useState"]([]),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_React$useState, 2),
      siders = _React$useState2[0],
      setSiders = _React$useState2[1];

  var prefixCls = props.prefixCls,
      className = props.className,
      children = props.children,
      hasSider = props.hasSider,
      Tag = props.tagName,
      others = __rest(props, ["prefixCls", "className", "children", "hasSider", "tagName"]);

  var classString = classnames__WEBPACK_IMPORTED_MODULE_5___default()(prefixCls, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_classNames, "".concat(prefixCls, "-has-sider"), typeof hasSider === 'boolean' ? hasSider : siders.length > 0), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](LayoutContext.Provider, {
    value: {
      siderHook: {
        addSider: function addSider(id) {
          setSiders(function (prev) {
            return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(prev), [id]);
          });
        },
        removeSider: function removeSider(id) {
          setSiders(function (prev) {
            return prev.filter(function (currentId) {
              return currentId !== id;
            });
          });
        }
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({
    className: classString
  }, others), children));
};

var Layout = generator({
  suffixCls: 'layout',
  tagName: 'section',
  displayName: 'Layout'
})(BasicLayout);
var Header = generator({
  suffixCls: 'layout-header',
  tagName: 'header',
  displayName: 'Header'
})(Basic);
var Footer = generator({
  suffixCls: 'layout-footer',
  tagName: 'footer',
  displayName: 'Footer'
})(Basic);
var Content = generator({
  suffixCls: 'layout-content',
  tagName: 'main',
  displayName: 'Content'
})(Basic);

/* harmony default export */ __webpack_exports__["e"] = (Layout);

//# sourceURL=webpack:///./node_modules/antd/es/layout/layout.js?`)},QIyF:function(module,exports,__webpack_require__){eval(`var root = __webpack_require__("Kz5y");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


//# sourceURL=webpack:///./node_modules/lodash/now.js?`)},QttV:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* unused harmony export BrowserRouter */
/* unused harmony export HashRouter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Link; });
/* unused harmony export NavLink */
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7AqN");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dI71");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YS25");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("zLVn");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("9R94");











/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = Object(history__WEBPACK_IMPORTED_MODULE_3__[/* createBrowserHistory */ "a"])(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__[/* Router */ "c"], {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

if (false) {}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = Object(history__WEBPACK_IMPORTED_MODULE_3__[/* createHashHistory */ "b"])(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__[/* Router */ "c"], {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

if (false) {}

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? Object(history__WEBPACK_IMPORTED_MODULE_3__[/* createLocation */ "c"])(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var forwardRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && ( // ignore everything but left clicks
      !target || target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          navigate();
        }
    }
  }); // React 15 compat


  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  /* eslint-disable-next-line jsx-a11y/anchor-has-content */


  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", props);
});

if (false) {}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref2, ["component", "replace", "to", "innerRef"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__[/* __RouterContext */ "e"].Consumer, null, function (context) {
    !context ?  false ? undefined : Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(false) : void 0;
    var history = context.history;
    var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history.createHref(location) : "";

    var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var method = replace ? history.replace : history.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(component, props);
  });
});

if (false) { var refType, toType; }

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef;

if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


var NavLink = forwardRef$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      sensitive = _ref.sensitive,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      innerRef = _ref.innerRef,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__[/* __RouterContext */ "e"].Consumer, null, function (context) {
    !context ?  false ? undefined : Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(false) : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:\${}()[\\]|/\\\\])/g, "\\\\$1");
    var match = escapedPath ? Object(react_router__WEBPACK_IMPORTED_MODULE_0__[/* matchPath */ "f"])(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      sensitive: sensitive,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
    var style = isActive ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({}, styleProp, {}, activeStyle) : styleProp;

    var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: toLocation
    }, rest); // React 15 compat


    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Link, props);
  });
});

if (false) { var ariaCurrentType; }


//# sourceMappingURL=react-router-dom.js.map


//# sourceURL=webpack:///./node_modules/umi/node_modules/react-router-dom/esm/react-router-dom.js?`)},TO8r:function(module,exports){eval(`/** Used to match a single whitespace character. */
var reWhitespace = /\\s/;

/**
 * Used by \`_.trim\` and \`_.trimEnd\` to get the index of the last non-whitespace
 * character of \`string\`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


//# sourceURL=webpack:///./node_modules/lodash/_trimmedEndIndex.js?`)},Tckk:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`
// UNUSED EXPORTS: Group

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("rePB");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("U8pU");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("ODXe");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/rc-resize-observer/es/index.js
var es = __webpack_require__("t23M");

// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__("c+Xe");

// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js + 1 modules
var context = __webpack_require__("H84U");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/devWarning.js
var devWarning = __webpack_require__("uaoM");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/responsiveObserve.js
var responsiveObserve = __webpack_require__("ACnJ");

// EXTERNAL MODULE: ./node_modules/antd/es/grid/hooks/useBreakpoint.js
var useBreakpoint = __webpack_require__("5OYt");

// CONCATENATED MODULE: ./node_modules/antd/es/avatar/SizeContext.js

var SizeContext = /*#__PURE__*/react["createContext"]('default');
var SizeContext_SizeContextProvider = function SizeContextProvider(_ref) {
  var children = _ref.children,
      size = _ref.size;
  return /*#__PURE__*/react["createElement"](SizeContext.Consumer, null, function (originSize) {
    return /*#__PURE__*/react["createElement"](SizeContext.Provider, {
      value: size || originSize
    }, children);
  });
};
/* harmony default export */ var avatar_SizeContext = (SizeContext);
// CONCATENATED MODULE: ./node_modules/antd/es/avatar/avatar.js





var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};











var avatar_InternalAvatar = function InternalAvatar(props, ref) {
  var _classNames, _classNames2;

  var groupSize = react["useContext"](avatar_SizeContext);

  var _React$useState = react["useState"](1),
      _React$useState2 = Object(slicedToArray["a" /* default */])(_React$useState, 2),
      scale = _React$useState2[0],
      setScale = _React$useState2[1];

  var _React$useState3 = react["useState"](false),
      _React$useState4 = Object(slicedToArray["a" /* default */])(_React$useState3, 2),
      mounted = _React$useState4[0],
      setMounted = _React$useState4[1];

  var _React$useState5 = react["useState"](true),
      _React$useState6 = Object(slicedToArray["a" /* default */])(_React$useState5, 2),
      isImgExist = _React$useState6[0],
      setIsImgExist = _React$useState6[1];

  var avatarNodeRef = react["useRef"]();
  var avatarChildrenRef = react["useRef"]();
  var avatarNodeMergeRef = Object(es_ref["a" /* composeRef */])(ref, avatarNodeRef);

  var _React$useContext = react["useContext"](context["b" /* ConfigContext */]),
      getPrefixCls = _React$useContext.getPrefixCls;

  var setScaleParam = function setScaleParam() {
    if (!avatarChildrenRef.current || !avatarNodeRef.current) {
      return;
    }

    var childrenWidth = avatarChildrenRef.current.offsetWidth; // offsetWidth avoid affecting be transform scale

    var nodeWidth = avatarNodeRef.current.offsetWidth; // denominator is 0 is no meaning

    if (childrenWidth !== 0 && nodeWidth !== 0) {
      var _props$gap = props.gap,
          gap = _props$gap === void 0 ? 4 : _props$gap;

      if (gap * 2 < nodeWidth) {
        setScale(nodeWidth - gap * 2 < childrenWidth ? (nodeWidth - gap * 2) / childrenWidth : 1);
      }
    }
  };

  react["useEffect"](function () {
    setMounted(true);
  }, []);
  react["useEffect"](function () {
    setIsImgExist(true);
    setScale(1);
  }, [props.src]);
  react["useEffect"](function () {
    setScaleParam();
  }, [props.gap]);

  var handleImgLoadError = function handleImgLoadError() {
    var onError = props.onError;
    var errorFlag = onError ? onError() : undefined;

    if (errorFlag !== false) {
      setIsImgExist(false);
    }
  };

  var customizePrefixCls = props.prefixCls,
      shape = props.shape,
      customSize = props.size,
      src = props.src,
      srcSet = props.srcSet,
      icon = props.icon,
      className = props.className,
      alt = props.alt,
      draggable = props.draggable,
      children = props.children,
      others = __rest(props, ["prefixCls", "shape", "size", "src", "srcSet", "icon", "className", "alt", "draggable", "children"]);

  var size = customSize === 'default' ? groupSize : customSize;
  var screens = Object(useBreakpoint["a" /* default */])();
  var responsiveSizeStyle = react["useMemo"](function () {
    if (Object(esm_typeof["a" /* default */])(size) !== 'object') {
      return {};
    }

    var currentBreakpoint = responsiveObserve["b" /* responsiveArray */].find(function (screen) {
      return screens[screen];
    });
    var currentSize = size[currentBreakpoint];
    return currentSize ? {
      width: currentSize,
      height: currentSize,
      lineHeight: "".concat(currentSize, "px"),
      fontSize: icon ? currentSize / 2 : 18
    } : {};
  }, [screens, size]);
  Object(devWarning["a" /* default */])(!(typeof icon === 'string' && icon.length > 2), 'Avatar', "\`icon\` is using ReactNode instead of string naming in v4. Please check \`".concat(icon, "\` at https://ant.design/components/icon"));
  var prefixCls = getPrefixCls('avatar', customizePrefixCls);
  var sizeCls = classnames_default()((_classNames = {}, Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _classNames));
  var hasImageElement = /*#__PURE__*/react["isValidElement"](src);
  var classString = classnames_default()(prefixCls, sizeCls, (_classNames2 = {}, Object(defineProperty["a" /* default */])(_classNames2, "".concat(prefixCls, "-").concat(shape), !!shape), Object(defineProperty["a" /* default */])(_classNames2, "".concat(prefixCls, "-image"), hasImageElement || src && isImgExist), Object(defineProperty["a" /* default */])(_classNames2, "".concat(prefixCls, "-icon"), !!icon), _classNames2), className);
  var sizeStyle = typeof size === 'number' ? {
    width: size,
    height: size,
    lineHeight: "".concat(size, "px"),
    fontSize: icon ? size / 2 : 18
  } : {};
  var childrenToRender;

  if (typeof src === 'string' && isImgExist) {
    childrenToRender = /*#__PURE__*/react["createElement"]("img", {
      src: src,
      draggable: draggable,
      srcSet: srcSet,
      onError: handleImgLoadError,
      alt: alt
    });
  } else if (hasImageElement) {
    childrenToRender = src;
  } else if (icon) {
    childrenToRender = icon;
  } else if (mounted || scale !== 1) {
    var transformString = "scale(".concat(scale, ") translateX(-50%)");
    var childrenStyle = {
      msTransform: transformString,
      WebkitTransform: transformString,
      transform: transformString
    };
    var sizeChildrenStyle = typeof size === 'number' ? {
      lineHeight: "".concat(size, "px")
    } : {};
    childrenToRender = /*#__PURE__*/react["createElement"](es["a" /* default */], {
      onResize: setScaleParam
    }, /*#__PURE__*/react["createElement"]("span", {
      className: "".concat(prefixCls, "-string"),
      ref: function ref(node) {
        avatarChildrenRef.current = node;
      },
      style: Object(esm_extends["a" /* default */])(Object(esm_extends["a" /* default */])({}, sizeChildrenStyle), childrenStyle)
    }, children));
  } else {
    childrenToRender = /*#__PURE__*/react["createElement"]("span", {
      className: "".concat(prefixCls, "-string"),
      style: {
        opacity: 0
      },
      ref: function ref(node) {
        avatarChildrenRef.current = node;
      }
    }, children);
  } // The event is triggered twice from bubbling up the DOM tree.
  // see https://codesandbox.io/s/kind-snow-9lidz


  delete others.onError;
  delete others.gap;
  return /*#__PURE__*/react["createElement"]("span", Object(esm_extends["a" /* default */])({}, others, {
    style: Object(esm_extends["a" /* default */])(Object(esm_extends["a" /* default */])(Object(esm_extends["a" /* default */])({}, sizeStyle), responsiveSizeStyle), others.style),
    className: classString,
    ref: avatarNodeMergeRef
  }), childrenToRender);
};

var Avatar = /*#__PURE__*/react["forwardRef"](avatar_InternalAvatar);
Avatar.displayName = 'Avatar';
Avatar.defaultProps = {
  shape: 'circle',
  size: 'default'
};
/* harmony default export */ var avatar = (Avatar);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__("Zm9Q");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__("0n0R");

// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 6 modules
var tooltip = __webpack_require__("3S7+");

// CONCATENATED MODULE: ./node_modules/antd/es/_util/getRenderPropValue.js
var getRenderPropValue = function getRenderPropValue(propValue) {
  if (!propValue) {
    return null;
  }

  var isRenderFunction = typeof propValue === 'function';

  if (isRenderFunction) {
    return propValue();
  }

  return propValue;
};
// EXTERNAL MODULE: ./node_modules/antd/es/_util/motion.js
var motion = __webpack_require__("EXcs");

// CONCATENATED MODULE: ./node_modules/antd/es/popover/index.js


var popover_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






var Popover = /*#__PURE__*/react["forwardRef"](function (_a, ref) {
  var customizePrefixCls = _a.prefixCls,
      title = _a.title,
      content = _a.content,
      otherProps = popover_rest(_a, ["prefixCls", "title", "content"]);

  var _React$useContext = react["useContext"](context["b" /* ConfigContext */]),
      getPrefixCls = _React$useContext.getPrefixCls;

  var getOverlay = function getOverlay(prefixCls) {
    return /*#__PURE__*/react["createElement"](react["Fragment"], null, title && /*#__PURE__*/react["createElement"]("div", {
      className: "".concat(prefixCls, "-title")
    }, getRenderPropValue(title)), /*#__PURE__*/react["createElement"]("div", {
      className: "".concat(prefixCls, "-inner-content")
    }, getRenderPropValue(content)));
  };

  var prefixCls = getPrefixCls('popover', customizePrefixCls);
  var rootPrefixCls = getPrefixCls();
  return /*#__PURE__*/react["createElement"](tooltip["a" /* default */], Object(esm_extends["a" /* default */])({}, otherProps, {
    prefixCls: prefixCls,
    ref: ref,
    overlay: getOverlay(prefixCls),
    transitionName: Object(motion["b" /* getTransitionName */])(rootPrefixCls, 'zoom-big', otherProps.transitionName)
  }));
});
Popover.displayName = 'Popover';
Popover.defaultProps = {
  placement: 'top',
  trigger: 'hover',
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  overlayStyle: {}
};
/* harmony default export */ var popover = (Popover);
// CONCATENATED MODULE: ./node_modules/antd/es/avatar/group.js










var group_Group = function Group(props) {
  var _React$useContext = react["useContext"](context["b" /* ConfigContext */]),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var customizePrefixCls = props.prefixCls,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      maxCount = props.maxCount,
      maxStyle = props.maxStyle,
      size = props.size;
  var prefixCls = getPrefixCls('avatar-group', customizePrefixCls);
  var cls = classnames_default()(prefixCls, Object(defineProperty["a" /* default */])({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
  var children = props.children,
      _props$maxPopoverPlac = props.maxPopoverPlacement,
      maxPopoverPlacement = _props$maxPopoverPlac === void 0 ? 'top' : _props$maxPopoverPlac;
  var childrenWithProps = Object(toArray["a" /* default */])(children).map(function (child, index) {
    return Object(reactNode["a" /* cloneElement */])(child, {
      key: "avatar-key-".concat(index)
    });
  });
  var numOfChildren = childrenWithProps.length;

  if (maxCount && maxCount < numOfChildren) {
    var childrenShow = childrenWithProps.slice(0, maxCount);
    var childrenHidden = childrenWithProps.slice(maxCount, numOfChildren);
    childrenShow.push( /*#__PURE__*/react["createElement"](popover, {
      key: "avatar-popover-key",
      content: childrenHidden,
      trigger: "hover",
      placement: maxPopoverPlacement,
      overlayClassName: "".concat(prefixCls, "-popover")
    }, /*#__PURE__*/react["createElement"](avatar, {
      style: maxStyle
    }, "+".concat(numOfChildren - maxCount))));
    return /*#__PURE__*/react["createElement"](SizeContext_SizeContextProvider, {
      size: size
    }, /*#__PURE__*/react["createElement"]("div", {
      className: cls,
      style: props.style
    }, childrenShow));
  }

  return /*#__PURE__*/react["createElement"](SizeContext_SizeContextProvider, {
    size: size
  }, /*#__PURE__*/react["createElement"]("div", {
    className: cls,
    style: props.style
  }, childrenWithProps));
};

/* harmony default export */ var group = (group_Group);
// CONCATENATED MODULE: ./node_modules/antd/es/avatar/index.js


var avatar_Avatar = avatar;
avatar_Avatar.Group = group;

/* harmony default export */ var es_avatar = __webpack_exports__["a"] = (avatar_Avatar);

//# sourceURL=webpack:///./node_modules/antd/es/avatar/index.js_+_5_modules?`)},UESt:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/RightOutlined.js
// This icon file is generated automatically.
var RightOutlined_RightOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, "name": "right", "theme": "outlined" };
/* harmony default export */ var asn_RightOutlined = (RightOutlined_RightOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__("6VBw");

// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/RightOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_RightOutlined_RightOutlined = function RightOutlined(props, ref) {
  return /*#__PURE__*/react["createElement"](AntdIcon["a" /* default */], Object.assign({}, props, {
    ref: ref,
    icon: asn_RightOutlined
  }));
};

icons_RightOutlined_RightOutlined.displayName = 'RightOutlined';
/* harmony default export */ var icons_RightOutlined = __webpack_exports__["a"] = (/*#__PURE__*/react["forwardRef"](icons_RightOutlined_RightOutlined));

//# sourceURL=webpack:///./node_modules/@ant-design/icons/es/icons/RightOutlined.js_+_1_modules?`)},W9HT:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rePB");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1OyB");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vuIU");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Ji7U");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("LK+K");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rc_util_es_omit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("bT9E");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("sEfC");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("H84U");
/* harmony import */ var _util_type__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("CWQg");
/* harmony import */ var _util_reactNode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("0n0R");







var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};








var SpinSizes = Object(_util_type__WEBPACK_IMPORTED_MODULE_11__[/* tuple */ "a"])('small', 'default', 'large'); // Render indicator

var defaultIndicator = null;

function renderIndicator(prefixCls, props) {
  var indicator = props.indicator;
  var dotClassName = "".concat(prefixCls, "-dot"); // should not be render default indicator when indicator value is null

  if (indicator === null) {
    return null;
  }

  if (Object(_util_reactNode__WEBPACK_IMPORTED_MODULE_12__[/* isValidElement */ "b"])(indicator)) {
    return Object(_util_reactNode__WEBPACK_IMPORTED_MODULE_12__[/* cloneElement */ "a"])(indicator, {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(indicator.props.className, dotClassName)
    });
  }

  if (Object(_util_reactNode__WEBPACK_IMPORTED_MODULE_12__[/* isValidElement */ "b"])(defaultIndicator)) {
    return Object(_util_reactNode__WEBPACK_IMPORTED_MODULE_12__[/* cloneElement */ "a"])(defaultIndicator, {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(defaultIndicator.props.className, dotClassName)
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(dotClassName, "".concat(prefixCls, "-dot-spin"))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("i", {
    className: "".concat(prefixCls, "-dot-item")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("i", {
    className: "".concat(prefixCls, "-dot-item")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("i", {
    className: "".concat(prefixCls, "-dot-item")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("i", {
    className: "".concat(prefixCls, "-dot-item")
  }));
}

function shouldDelay(spinning, delay) {
  return !!spinning && !!delay && !isNaN(Number(delay));
}

var Spin = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Spin, _React$Component);

  var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Spin);

  function Spin(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Spin);

    _this = _super.call(this, props);

    _this.debouncifyUpdateSpinning = function (props) {
      var _ref = props || _this.props,
          delay = _ref.delay;

      if (delay) {
        _this.cancelExistingSpin();

        _this.updateSpinning = lodash_debounce__WEBPACK_IMPORTED_MODULE_9___default()(_this.originalUpdateSpinning, delay);
      }
    };

    _this.updateSpinning = function () {
      var spinning = _this.props.spinning;
      var currentSpinning = _this.state.spinning;

      if (currentSpinning !== spinning) {
        _this.setState({
          spinning: spinning
        });
      }
    };

    _this.renderSpin = function (_ref2) {
      var _classNames;

      var getPrefixCls = _ref2.getPrefixCls,
          direction = _ref2.direction;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          className = _a.className,
          size = _a.size,
          tip = _a.tip,
          wrapperClassName = _a.wrapperClassName,
          style = _a.style,
          restProps = __rest(_a, ["prefixCls", "className", "size", "tip", "wrapperClassName", "style"]);

      var spinning = _this.state.spinning;
      var prefixCls = getPrefixCls('spin', customizePrefixCls);
      var spinClassName = classnames__WEBPACK_IMPORTED_MODULE_7___default()(prefixCls, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_classNames, "".concat(prefixCls, "-spinning"), spinning), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_classNames, "".concat(prefixCls, "-show-text"), !!tip), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className); // fix https://fb.me/react-unknown-prop

      var divProps = Object(rc_util_es_omit__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(restProps, ['spinning', 'delay', 'indicator']);
      var spinElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, divProps, {
        style: style,
        className: spinClassName
      }), renderIndicator(prefixCls, _this.props), tip ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
        className: "".concat(prefixCls, "-text")
      }, tip) : null);

      if (_this.isNestedPattern()) {
        var containerClassName = classnames__WEBPACK_IMPORTED_MODULE_7___default()("".concat(prefixCls, "-container"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, "".concat(prefixCls, "-blur"), spinning));
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, divProps, {
          className: classnames__WEBPACK_IMPORTED_MODULE_7___default()("".concat(prefixCls, "-nested-loading"), wrapperClassName)
        }), spinning && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
          key: "loading"
        }, spinElement), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
          className: containerClassName,
          key: "container"
        }, _this.props.children));
      }

      return spinElement;
    };

    var spinning = props.spinning,
        delay = props.delay;
    var shouldBeDelayed = shouldDelay(spinning, delay);
    _this.state = {
      spinning: spinning && !shouldBeDelayed
    };
    _this.originalUpdateSpinning = _this.updateSpinning;

    _this.debouncifyUpdateSpinning(props);

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Spin, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateSpinning();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.debouncifyUpdateSpinning();
      this.updateSpinning();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cancelExistingSpin();
    }
  }, {
    key: "cancelExistingSpin",
    value: function cancelExistingSpin() {
      var updateSpinning = this.updateSpinning;

      if (updateSpinning && updateSpinning.cancel) {
        updateSpinning.cancel();
      }
    }
  }, {
    key: "isNestedPattern",
    value: function isNestedPattern() {
      return !!(this.props && typeof this.props.children !== 'undefined');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_config_provider__WEBPACK_IMPORTED_MODULE_10__[/* ConfigConsumer */ "a"], null, this.renderSpin);
    }
  }], [{
    key: "setDefaultIndicator",
    value: function setDefaultIndicator(indicator) {
      defaultIndicator = indicator;
    }
  }]);

  return Spin;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Spin.defaultProps = {
  spinning: true,
  size: 'default',
  wrapperClassName: ''
};
/* harmony default export */ __webpack_exports__["a"] = (Spin);

//# sourceURL=webpack:///./node_modules/antd/es/spin/index.js?`)},XBQK:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("rePB");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// EXTERNAL MODULE: ./node_modules/rc-dropdown/es/index.js + 2 modules
var es = __webpack_require__("eDIo");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/RightOutlined.js + 1 modules
var RightOutlined = __webpack_require__("UESt");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("ODXe");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js + 1 modules
var EllipsisOutlined = __webpack_require__("GZ0F");

// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js + 6 modules
var es_button = __webpack_require__("2/Rp");

// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js + 1 modules
var context = __webpack_require__("H84U");

// CONCATENATED MODULE: ./node_modules/antd/es/dropdown/dropdown-button.js



var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};







var ButtonGroup = es_button["a" /* default */].Group;

var dropdown_button_DropdownButton = function DropdownButton(props) {
  var _React$useContext = react["useContext"](context["b" /* ConfigContext */]),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var customizePrefixCls = props.prefixCls,
      type = props.type,
      disabled = props.disabled,
      onClick = props.onClick,
      htmlType = props.htmlType,
      children = props.children,
      className = props.className,
      overlay = props.overlay,
      trigger = props.trigger,
      align = props.align,
      visible = props.visible,
      onVisibleChange = props.onVisibleChange,
      placement = props.placement,
      getPopupContainer = props.getPopupContainer,
      href = props.href,
      _props$icon = props.icon,
      icon = _props$icon === void 0 ? /*#__PURE__*/react["createElement"](EllipsisOutlined["a" /* default */], null) : _props$icon,
      title = props.title,
      buttonsRender = props.buttonsRender,
      mouseEnterDelay = props.mouseEnterDelay,
      mouseLeaveDelay = props.mouseLeaveDelay,
      restProps = __rest(props, ["prefixCls", "type", "disabled", "onClick", "htmlType", "children", "className", "overlay", "trigger", "align", "visible", "onVisibleChange", "placement", "getPopupContainer", "href", "icon", "title", "buttonsRender", "mouseEnterDelay", "mouseLeaveDelay"]);

  var prefixCls = getPrefixCls('dropdown-button', customizePrefixCls);
  var dropdownProps = {
    align: align,
    overlay: overlay,
    disabled: disabled,
    trigger: disabled ? [] : trigger,
    onVisibleChange: onVisibleChange,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    mouseEnterDelay: mouseEnterDelay,
    mouseLeaveDelay: mouseLeaveDelay
  };

  if ('visible' in props) {
    dropdownProps.visible = visible;
  }

  if ('placement' in props) {
    dropdownProps.placement = placement;
  } else {
    dropdownProps.placement = direction === 'rtl' ? 'bottomLeft' : 'bottomRight';
  }

  var leftButton = /*#__PURE__*/react["createElement"](es_button["a" /* default */], {
    type: type,
    disabled: disabled,
    onClick: onClick,
    htmlType: htmlType,
    href: href,
    title: title
  }, children);
  var rightButton = /*#__PURE__*/react["createElement"](es_button["a" /* default */], {
    type: type,
    icon: icon
  });

  var _buttonsRender = buttonsRender([leftButton, rightButton]),
      _buttonsRender2 = Object(slicedToArray["a" /* default */])(_buttonsRender, 2),
      leftButtonToRender = _buttonsRender2[0],
      rightButtonToRender = _buttonsRender2[1];

  return /*#__PURE__*/react["createElement"](ButtonGroup, Object(esm_extends["a" /* default */])({}, restProps, {
    className: classnames_default()(prefixCls, className)
  }), leftButtonToRender, /*#__PURE__*/react["createElement"](dropdown, dropdownProps, rightButtonToRender));
};

dropdown_button_DropdownButton.__ANT_BUTTON = true;
dropdown_button_DropdownButton.defaultProps = {
  type: 'default',
  buttonsRender: function buttonsRender(buttons) {
    return buttons;
  }
};
/* harmony default export */ var dropdown_button = (dropdown_button_DropdownButton);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/devWarning.js
var devWarning = __webpack_require__("uaoM");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/type.js
var _util_type = __webpack_require__("CWQg");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__("0n0R");

// CONCATENATED MODULE: ./node_modules/antd/es/dropdown/dropdown.js











var Placements = Object(_util_type["a" /* tuple */])('topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight');

var dropdown_Dropdown = function Dropdown(props) {
  var _React$useContext = react["useContext"](context["b" /* ConfigContext */]),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var getTransitionName = function getTransitionName() {
    var rootPrefixCls = getPrefixCls();
    var _props$placement = props.placement,
        placement = _props$placement === void 0 ? '' : _props$placement,
        transitionName = props.transitionName;

    if (transitionName !== undefined) {
      return transitionName;
    }

    if (placement.indexOf('top') >= 0) {
      return "".concat(rootPrefixCls, "-slide-down");
    }

    return "".concat(rootPrefixCls, "-slide-up");
  };

  var renderOverlay = function renderOverlay(prefixCls) {
    // rc-dropdown already can process the function of overlay, but we have check logic here.
    // So we need render the element to check and pass back to rc-dropdown.
    var overlay = props.overlay;
    var overlayNode;

    if (typeof overlay === 'function') {
      overlayNode = overlay();
    } else {
      overlayNode = overlay;
    }

    overlayNode = react["Children"].only(typeof overlayNode === 'string' ? /*#__PURE__*/react["createElement"]("span", null, overlayNode) : overlayNode);
    var overlayProps = overlayNode.props; // Warning if use other mode

    Object(devWarning["a" /* default */])(!overlayProps.mode || overlayProps.mode === 'vertical', 'Dropdown', "mode=\\"".concat(overlayProps.mode, "\\" is not supported for Dropdown's Menu.")); // menu cannot be selectable in dropdown defaultly

    var _overlayProps$selecta = overlayProps.selectable,
        selectable = _overlayProps$selecta === void 0 ? false : _overlayProps$selecta,
        expandIcon = overlayProps.expandIcon;
    var overlayNodeExpandIcon = typeof expandIcon !== 'undefined' && /*#__PURE__*/react["isValidElement"](expandIcon) ? expandIcon : /*#__PURE__*/react["createElement"]("span", {
      className: "".concat(prefixCls, "-menu-submenu-arrow")
    }, /*#__PURE__*/react["createElement"](RightOutlined["a" /* default */], {
      className: "".concat(prefixCls, "-menu-submenu-arrow-icon")
    }));
    var fixedModeOverlay = typeof overlayNode.type === 'string' ? overlayNode : Object(reactNode["a" /* cloneElement */])(overlayNode, {
      mode: 'vertical',
      selectable: selectable,
      expandIcon: overlayNodeExpandIcon
    });
    return fixedModeOverlay;
  };

  var getPlacement = function getPlacement() {
    var placement = props.placement;

    if (placement !== undefined) {
      return placement;
    }

    return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
  };

  var arrow = props.arrow,
      customizePrefixCls = props.prefixCls,
      children = props.children,
      trigger = props.trigger,
      disabled = props.disabled,
      getPopupContainer = props.getPopupContainer,
      overlayClassName = props.overlayClassName;
  var prefixCls = getPrefixCls('dropdown', customizePrefixCls);
  var child = react["Children"].only(children);
  var dropdownTrigger = Object(reactNode["a" /* cloneElement */])(child, {
    className: classnames_default()("".concat(prefixCls, "-trigger"), Object(defineProperty["a" /* default */])({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), child.props.className),
    disabled: disabled
  });
  var overlayClassNameCustomized = classnames_default()(overlayClassName, Object(defineProperty["a" /* default */])({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'));
  var triggerActions = disabled ? [] : trigger;
  var alignPoint;

  if (triggerActions && triggerActions.indexOf('contextMenu') !== -1) {
    alignPoint = true;
  }

  return /*#__PURE__*/react["createElement"](es["a" /* default */], Object(esm_extends["a" /* default */])({
    arrow: arrow,
    alignPoint: alignPoint
  }, props, {
    overlayClassName: overlayClassNameCustomized,
    prefixCls: prefixCls,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    transitionName: getTransitionName(),
    trigger: triggerActions,
    overlay: function overlay() {
      return renderOverlay(prefixCls);
    },
    placement: getPlacement()
  }), dropdownTrigger);
};

dropdown_Dropdown.Button = dropdown_button;
dropdown_Dropdown.defaultProps = {
  mouseEnterDelay: 0.15,
  mouseLeaveDelay: 0.1
};
/* harmony default export */ var dropdown = __webpack_exports__["a"] = (dropdown_Dropdown);

//# sourceURL=webpack:///./node_modules/antd/es/dropdown/dropdown.js_+_1_modules?`)},ZX9x:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ SiderContext; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("rePB");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("ODXe");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__("bT9E");

// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/BarsOutlined.js
// This icon file is generated automatically.
var BarsOutlined_BarsOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, "name": "bars", "theme": "outlined" };
/* harmony default export */ var asn_BarsOutlined = (BarsOutlined_BarsOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__("6VBw");

// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/BarsOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_BarsOutlined_BarsOutlined = function BarsOutlined(props, ref) {
  return /*#__PURE__*/react["createElement"](AntdIcon["a" /* default */], Object.assign({}, props, {
    ref: ref,
    icon: asn_BarsOutlined
  }));
};

icons_BarsOutlined_BarsOutlined.displayName = 'BarsOutlined';
/* harmony default export */ var icons_BarsOutlined = (/*#__PURE__*/react["forwardRef"](icons_BarsOutlined_BarsOutlined));
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/RightOutlined.js + 1 modules
var RightOutlined = __webpack_require__("UESt");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LeftOutlined.js + 1 modules
var LeftOutlined = __webpack_require__("5bA4");

// EXTERNAL MODULE: ./node_modules/antd/es/layout/layout.js
var layout = __webpack_require__("PKem");

// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js + 1 modules
var context = __webpack_require__("H84U");

// CONCATENATED MODULE: ./node_modules/antd/es/_util/isNumeric.js
var isNumeric = function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

/* harmony default export */ var _util_isNumeric = (isNumeric);
// CONCATENATED MODULE: ./node_modules/antd/es/layout/Sider.js




var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};











var dimensionMaxMap = {
  xs: '479.98px',
  sm: '575.98px',
  md: '767.98px',
  lg: '991.98px',
  xl: '1199.98px',
  xxl: '1599.98px'
};
var SiderContext = /*#__PURE__*/react["createContext"]({});

var generateId = function () {
  var i = 0;
  return function () {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    i += 1;
    return "".concat(prefix).concat(i);
  };
}();

var Sider = /*#__PURE__*/react["forwardRef"](function (_a, ref) {
  var customizePrefixCls = _a.prefixCls,
      className = _a.className,
      trigger = _a.trigger,
      children = _a.children,
      _a$defaultCollapsed = _a.defaultCollapsed,
      defaultCollapsed = _a$defaultCollapsed === void 0 ? false : _a$defaultCollapsed,
      _a$theme = _a.theme,
      theme = _a$theme === void 0 ? 'dark' : _a$theme,
      _a$style = _a.style,
      style = _a$style === void 0 ? {} : _a$style,
      _a$collapsible = _a.collapsible,
      collapsible = _a$collapsible === void 0 ? false : _a$collapsible,
      _a$reverseArrow = _a.reverseArrow,
      reverseArrow = _a$reverseArrow === void 0 ? false : _a$reverseArrow,
      _a$width = _a.width,
      width = _a$width === void 0 ? 200 : _a$width,
      _a$collapsedWidth = _a.collapsedWidth,
      collapsedWidth = _a$collapsedWidth === void 0 ? 80 : _a$collapsedWidth,
      zeroWidthTriggerStyle = _a.zeroWidthTriggerStyle,
      breakpoint = _a.breakpoint,
      onCollapse = _a.onCollapse,
      onBreakpoint = _a.onBreakpoint,
      props = __rest(_a, ["prefixCls", "className", "trigger", "children", "defaultCollapsed", "theme", "style", "collapsible", "reverseArrow", "width", "collapsedWidth", "zeroWidthTriggerStyle", "breakpoint", "onCollapse", "onBreakpoint"]);

  var _useContext = Object(react["useContext"])(layout["d" /* LayoutContext */]),
      siderHook = _useContext.siderHook;

  var _useState = Object(react["useState"])('collapsed' in props ? props.collapsed : defaultCollapsed),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      collapsed = _useState2[0],
      setCollapsed = _useState2[1];

  var _useState3 = Object(react["useState"])(false),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      below = _useState4[0],
      setBelow = _useState4[1];

  Object(react["useEffect"])(function () {
    if ('collapsed' in props) {
      setCollapsed(props.collapsed);
    }
  }, [props.collapsed]);

  var handleSetCollapsed = function handleSetCollapsed(value, type) {
    if (!('collapsed' in props)) {
      setCollapsed(value);
    }

    onCollapse === null || onCollapse === void 0 ? void 0 : onCollapse(value, type);
  }; // ========================= Responsive =========================


  var responsiveHandlerRef = Object(react["useRef"])();

  responsiveHandlerRef.current = function (mql) {
    setBelow(mql.matches);
    onBreakpoint === null || onBreakpoint === void 0 ? void 0 : onBreakpoint(mql.matches);

    if (collapsed !== mql.matches) {
      handleSetCollapsed(mql.matches, 'responsive');
    }
  };

  Object(react["useEffect"])(function () {
    function responsiveHandler(mql) {
      return responsiveHandlerRef.current(mql);
    }

    var mql;

    if (typeof window !== 'undefined') {
      var _window = window,
          matchMedia = _window.matchMedia;

      if (matchMedia && breakpoint && breakpoint in dimensionMaxMap) {
        mql = matchMedia("(max-width: ".concat(dimensionMaxMap[breakpoint], ")"));

        try {
          mql.addEventListener('change', responsiveHandler);
        } catch (error) {
          mql.addListener(responsiveHandler);
        }

        responsiveHandler(mql);
      }
    }

    return function () {
      try {
        mql === null || mql === void 0 ? void 0 : mql.removeEventListener('change', responsiveHandler);
      } catch (error) {
        mql === null || mql === void 0 ? void 0 : mql.removeListener(responsiveHandler);
      }
    };
  }, []);
  Object(react["useEffect"])(function () {
    var uniqueId = generateId('ant-sider-');
    siderHook.addSider(uniqueId);
    return function () {
      return siderHook.removeSider(uniqueId);
    };
  }, []);

  var toggle = function toggle() {
    handleSetCollapsed(!collapsed, 'clickTrigger');
  };

  var _useContext2 = Object(react["useContext"])(context["b" /* ConfigContext */]),
      getPrefixCls = _useContext2.getPrefixCls;

  var renderSider = function renderSider() {
    var _classNames;

    var prefixCls = getPrefixCls('layout-sider', customizePrefixCls);
    var divProps = Object(omit["a" /* default */])(props, ['collapsed']);
    var rawWidth = collapsed ? collapsedWidth : width; // use "px" as fallback unit for width

    var siderWidth = _util_isNumeric(rawWidth) ? "".concat(rawWidth, "px") : String(rawWidth); // special trigger when collapsedWidth == 0

    var zeroWidthTrigger = parseFloat(String(collapsedWidth || 0)) === 0 ? /*#__PURE__*/react["createElement"]("span", {
      onClick: toggle,
      className: classnames_default()("".concat(prefixCls, "-zero-width-trigger"), "".concat(prefixCls, "-zero-width-trigger-").concat(reverseArrow ? 'right' : 'left')),
      style: zeroWidthTriggerStyle
    }, trigger || /*#__PURE__*/react["createElement"](icons_BarsOutlined, null)) : null;
    var iconObj = {
      expanded: reverseArrow ? /*#__PURE__*/react["createElement"](RightOutlined["a" /* default */], null) : /*#__PURE__*/react["createElement"](LeftOutlined["a" /* default */], null),
      collapsed: reverseArrow ? /*#__PURE__*/react["createElement"](LeftOutlined["a" /* default */], null) : /*#__PURE__*/react["createElement"](RightOutlined["a" /* default */], null)
    };
    var status = collapsed ? 'collapsed' : 'expanded';
    var defaultTrigger = iconObj[status];
    var triggerDom = trigger !== null ? zeroWidthTrigger || /*#__PURE__*/react["createElement"]("div", {
      className: "".concat(prefixCls, "-trigger"),
      onClick: toggle,
      style: {
        width: siderWidth
      }
    }, trigger || defaultTrigger) : null;

    var divStyle = Object(esm_extends["a" /* default */])(Object(esm_extends["a" /* default */])({}, style), {
      flex: "0 0 ".concat(siderWidth),
      maxWidth: siderWidth,
      minWidth: siderWidth,
      width: siderWidth
    });

    var siderCls = classnames_default()(prefixCls, "".concat(prefixCls, "-").concat(theme), (_classNames = {}, Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-collapsed"), !!collapsed), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-has-trigger"), collapsible && trigger !== null && !zeroWidthTrigger), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-below"), !!below), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-zero-width"), parseFloat(siderWidth) === 0), _classNames), className);
    return /*#__PURE__*/react["createElement"]("aside", Object(esm_extends["a" /* default */])({
      className: siderCls
    }, divProps, {
      style: divStyle,
      ref: ref
    }), /*#__PURE__*/react["createElement"]("div", {
      className: "".concat(prefixCls, "-children")
    }, children), collapsible || below && zeroWidthTrigger ? triggerDom : null);
  };

  return /*#__PURE__*/react["createElement"](SiderContext.Provider, {
    value: {
      siderCollapsed: collapsed
    }
  }, renderSider());
});
Sider.displayName = 'Sider';
/* harmony default export */ var layout_Sider = __webpack_exports__["b"] = (Sider);

//# sourceURL=webpack:///./node_modules/antd/es/layout/Sider.js_+_3_modules?`)},aIZi:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("SchZ");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("7Lfq");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("L/Qf");

 // style dependencies



//# sourceURL=webpack:///./node_modules/antd/es/dropdown/style/css.js?`)},eDIo:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("rePB");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("ODXe");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("Ff2n");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// EXTERNAL MODULE: ./node_modules/rc-trigger/es/index.js + 15 modules
var es = __webpack_require__("uciX");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./node_modules/rc-dropdown/es/placements.js
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var targetOffset = [0, 0];
var placements_placements = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  topCenter: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  bottomCenter: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  }
};
/* harmony default export */ var es_placements = (placements_placements);
// CONCATENATED MODULE: ./node_modules/rc-dropdown/es/Dropdown.js








function Dropdown(props, ref) {
  var _props$arrow = props.arrow,
      arrow = _props$arrow === void 0 ? false : _props$arrow,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-dropdown' : _props$prefixCls,
      transitionName = props.transitionName,
      animation = props.animation,
      align = props.align,
      _props$placement = props.placement,
      placement = _props$placement === void 0 ? 'bottomLeft' : _props$placement,
      _props$placements = props.placements,
      placements = _props$placements === void 0 ? es_placements : _props$placements,
      getPopupContainer = props.getPopupContainer,
      showAction = props.showAction,
      hideAction = props.hideAction,
      overlayClassName = props.overlayClassName,
      overlayStyle = props.overlayStyle,
      visible = props.visible,
      _props$trigger = props.trigger,
      trigger = _props$trigger === void 0 ? ['hover'] : _props$trigger,
      otherProps = Object(objectWithoutProperties["a" /* default */])(props, ["arrow", "prefixCls", "transitionName", "animation", "align", "placement", "placements", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "visible", "trigger"]);

  var _React$useState = react["useState"](),
      _React$useState2 = Object(slicedToArray["a" /* default */])(_React$useState, 2),
      triggerVisible = _React$useState2[0],
      setTriggerVisible = _React$useState2[1];

  var mergedVisible = 'visible' in props ? visible : triggerVisible;
  var triggerRef = react["useRef"](null);
  react["useImperativeHandle"](ref, function () {
    return triggerRef.current;
  });

  var getOverlayElement = function getOverlayElement() {
    var overlay = props.overlay;
    var overlayElement;

    if (typeof overlay === 'function') {
      overlayElement = overlay();
    } else {
      overlayElement = overlay;
    }

    return overlayElement;
  };

  var onClick = function onClick(e) {
    var onOverlayClick = props.onOverlayClick;
    var overlayProps = getOverlayElement().props;
    setTriggerVisible(false);

    if (onOverlayClick) {
      onOverlayClick(e);
    }

    if (overlayProps.onClick) {
      overlayProps.onClick(e);
    }
  };

  var onVisibleChange = function onVisibleChange(visible) {
    var onVisibleChange = props.onVisibleChange;
    setTriggerVisible(visible);

    if (typeof onVisibleChange === 'function') {
      onVisibleChange(visible);
    }
  };

  var getMenuElement = function getMenuElement() {
    var overlayElement = getOverlayElement();
    var extraOverlayProps = {
      prefixCls: "".concat(prefixCls, "-menu"),
      onClick: onClick
    };

    if (typeof overlayElement.type === 'string') {
      delete extraOverlayProps.prefixCls;
    }

    return react["createElement"](react["Fragment"], null, arrow && react["createElement"]("div", {
      className: "".concat(prefixCls, "-arrow")
    }), react["cloneElement"](overlayElement, extraOverlayProps));
  };

  var getMenuElementOrLambda = function getMenuElementOrLambda() {
    var overlay = props.overlay;

    if (typeof overlay === 'function') {
      return getMenuElement;
    }

    return getMenuElement();
  };

  var getMinOverlayWidthMatchTrigger = function getMinOverlayWidthMatchTrigger() {
    var minOverlayWidthMatchTrigger = props.minOverlayWidthMatchTrigger,
        alignPoint = props.alignPoint;

    if ('minOverlayWidthMatchTrigger' in props) {
      return minOverlayWidthMatchTrigger;
    }

    return !alignPoint;
  };

  var getOpenClassName = function getOpenClassName() {
    var openClassName = props.openClassName;

    if (openClassName !== undefined) {
      return openClassName;
    }

    return "".concat(prefixCls, "-open");
  };

  var renderChildren = function renderChildren() {
    var children = props.children;
    var childrenProps = children.props ? children.props : {};
    var childClassName = classnames_default()(childrenProps.className, getOpenClassName());
    return triggerVisible && children ? react["cloneElement"](children, {
      className: childClassName
    }) : children;
  };

  var triggerHideAction = hideAction;

  if (!triggerHideAction && trigger.indexOf('contextMenu') !== -1) {
    triggerHideAction = ['click'];
  }

  return react["createElement"](es["a" /* default */], Object.assign({}, otherProps, {
    prefixCls: prefixCls,
    ref: triggerRef,
    popupClassName: classnames_default()(overlayClassName, Object(defineProperty["a" /* default */])({}, "".concat(prefixCls, "-show-arrow"), arrow)),
    popupStyle: overlayStyle,
    builtinPlacements: placements,
    action: trigger,
    showAction: showAction,
    hideAction: triggerHideAction || [],
    popupPlacement: placement,
    popupAlign: align,
    popupTransitionName: transitionName,
    popupAnimation: animation,
    popupVisible: mergedVisible,
    stretch: getMinOverlayWidthMatchTrigger() ? 'minWidth' : '',
    popup: getMenuElementOrLambda(),
    onPopupVisibleChange: onVisibleChange,
    getPopupContainer: getPopupContainer
  }), renderChildren());
}

/* harmony default export */ var es_Dropdown = (react["forwardRef"](Dropdown));
// CONCATENATED MODULE: ./node_modules/rc-dropdown/es/index.js

/* harmony default export */ var rc_dropdown_es = __webpack_exports__["a"] = (es_Dropdown);

//# sourceURL=webpack:///./node_modules/rc-dropdown/es/index.js_+_2_modules?`)},jXQH:function(module,exports,__webpack_require__){eval(`var trimmedEndIndex = __webpack_require__("TO8r");

/** Used to match leading whitespace. */
var reTrimStart = /^\\s+/;

/**
 * The base implementation of \`_.trim\`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


//# sourceURL=webpack:///./node_modules/lodash/_baseTrim.js?`)},"jsC+":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("XBQK");

/* harmony default export */ __webpack_exports__["a"] = (_dropdown__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

//# sourceURL=webpack:///./node_modules/antd/es/dropdown/index.js?`)},qx4F:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getScrollBarSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getTargetScrollBarSize; });
/* eslint-disable no-param-reassign */
var cached;
function getScrollBarSize(fresh) {
  if (typeof document === 'undefined') {
    return 0;
  }

  if (fresh || cached === undefined) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';
    var outer = document.createElement('div');
    var outerStyle = outer.style;
    outerStyle.position = 'absolute';
    outerStyle.top = '0';
    outerStyle.left = '0';
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);
    cached = widthContained - widthScroll;
  }

  return cached;
}

function ensureSize(str) {
  var match = str.match(/^(.*)px$/);
  var value = Number(match === null || match === void 0 ? void 0 : match[1]);
  return Number.isNaN(value) ? getScrollBarSize() : value;
}

function getTargetScrollBarSize(target) {
  if (typeof document === 'undefined' || !target || !(target instanceof Element)) {
    return {
      width: 0,
      height: 0
    };
  }

  var _getComputedStyle = getComputedStyle(target, '::-webkit-scrollbar'),
      width = _getComputedStyle.width,
      height = _getComputedStyle.height;

  return {
    width: ensureSize(width),
    height: ensureSize(height)
  };
}

//# sourceURL=webpack:///./node_modules/rc-util/es/getScrollBarSize.js?`)},sEfC:function(module,exports,__webpack_require__){eval(`var isObject = __webpack_require__("GoyQ"),
    now = __webpack_require__("QIyF"),
    toNumber = __webpack_require__("tLB3");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other \`lodash\` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking \`func\` until after \`wait\`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a \`cancel\` method to cancel
 * delayed \`func\` invocations and a \`flush\` method to immediately invoke them.
 * Provide \`options\` to indicate whether \`func\` should be invoked on the
 * leading and/or trailing edge of the \`wait\` timeout. The \`func\` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last \`func\`
 * invocation.
 *
 * **Note:** If \`leading\` and \`trailing\` options are \`true\`, \`func\` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the \`wait\` timeout.
 *
 * If \`wait\` is \`0\` and \`leading\` is \`false\`, \`func\` invocation is deferred
 * until to the next tick, similar to \`setTimeout\` with a timeout of \`0\`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between \`_.debounce\` and \`_.throttle\`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time \`func\` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke \`sendMail\` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure \`batchLog\` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any \`maxWait\` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the \`maxWait\` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have \`lastArgs\` which means \`func\` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


//# sourceURL=webpack:///./node_modules/lodash/debounce.js?`)},tLB3:function(module,exports,__webpack_require__){eval(`var baseTrim = __webpack_require__("jXQH"),
    isObject = __webpack_require__("GoyQ"),
    isSymbol = __webpack_require__("/9aa");

/** Used as references for various \`Number\` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on \`root\`. */
var freeParseInt = parseInt;

/**
 * Converts \`value\` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


//# sourceURL=webpack:///./node_modules/lodash/toNumber.js?`)},xpQY:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`
// EXTERNAL MODULE: ./node_modules/antd/es/style/index.css
var style = __webpack_require__("SchZ");

// EXTERNAL MODULE: ./node_modules/antd/es/avatar/style/index.css
var avatar_style = __webpack_require__("GJlF");

// EXTERNAL MODULE: ./node_modules/antd/es/popover/style/index.css
var popover_style = __webpack_require__("Dt+G");

// CONCATENATED MODULE: ./node_modules/antd/es/popover/style/css.js

 // style dependencies
// deps-lint-skip: tooltip
// CONCATENATED MODULE: ./node_modules/antd/es/avatar/style/css.js

 // style dependencies
// deps-lint-skip: grid



//# sourceURL=webpack:///./node_modules/antd/es/avatar/style/css.js_+_1_modules?`)}}]);
