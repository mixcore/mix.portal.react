(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+GRb":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOCALE_LANGUAGE; });
var LOCALE_LANGUAGE = 'LOCALE_LANGUAGE';

//# sourceURL=webpack:///./src/configs/constants/index.ts?`)},"+ego":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/style/css.js
var css = __webpack_require__("Hd6r");

// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 2 modules
var config_provider = __webpack_require__("wEI+");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// EXTERNAL MODULE: ./node_modules/@lingui/react/esm/index.js + 2 modules
var esm = __webpack_require__("hcDE");

// EXTERNAL MODULE: ./src/hooks/index.ts + 3 modules
var hooks = __webpack_require__("eZYV");

// EXTERNAL MODULE: ./src/utils/context.ts
var context = __webpack_require__("Nlet");

// EXTERNAL MODULE: ./src/utils/request.ts
var request = __webpack_require__("sy1d");

// EXTERNAL MODULE: ./src/services/index.ts + 2 modules
var services = __webpack_require__("CLrh");

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js
var createForOfIteratorHelper = __webpack_require__("rAM+");

// EXTERNAL MODULE: ./node_modules/lodash/cloneDeep.js
var cloneDeep = __webpack_require__("BkRI");
var cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep);

// EXTERNAL MODULE: ./node_modules/path-to-regexp/dist.es2015/index.js
var dist_es2015 = __webpack_require__("hNau");

// CONCATENATED MODULE: ./src/utils/index.ts



/**
 * Query objects that specify keys and values in an array where all values are objects.
 * @param   {array}         array   An array where all values are objects, like [{key:1},{key:2}].
 * @param   {string}        key     The key of the object that needs to be queried.
 * @param   {string}        value   The value of the object that needs to be queried.
 * @return  {object|undefined}   Return frist object when query success.
 */

function queryArray(array, key, value) {
  if (!Array.isArray(array)) {
    return;
  }

  return array.find(function (_) {
    return _[key] === value;
  });
}
/**
 * Convert an array to a tree-structured array.
 * @param   {array}     array     The Array need to Converted.
 * @param   {string}    id        The alias of the unique ID of the object in the array.
 * @param   {string}    parentId       The alias of the parent ID of the object in the array.
 * @param   {string}    children  The alias of children of the object in the array.
 * @return  {array}    Return a tree-structured array.
 */

function arrayToTree(array) {
  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
  var parentId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'pid';
  var children = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'children';
  var result = [];
  var hash = {};

  var data = cloneDeep_default()(array);

  data.forEach(function (item, index) {
    hash[data[index][id]] = data[index];
  });
  data.forEach(function (item) {
    var hashParent = hash[item[parentId]];

    if (hashParent) {
      !hashParent[children] && (hashParent[children] = []);
      hashParent[children].push(item);
    } else {
      result.push(item);
    }
  });
  return result;
}
/**
 * Query which layout should be used for the current path based on the configuration.
 * @param   {layouts}     layouts   Layout configuration.
 * @param   {pathname}    pathname  Path name to be queried.
 * @return  {string}   Return frist object when query success.
 */

function queryLayout(layouts, pathname) {
  var result = 'public';

  var isMatch = function isMatch(regepx) {
    return regepx instanceof RegExp ? regepx.test(pathname) : Object(dist_es2015["a" /* pathToRegexp */])(regepx).exec(pathname);
  };

  var _iterator = Object(createForOfIteratorHelper["a" /* default */])(layouts),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      var include = false;
      var exlude = false;

      if (item.include) {
        var _iterator2 = Object(createForOfIteratorHelper["a" /* default */])(item.include),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var regepx = _step2.value;

            if (isMatch(regepx)) {
              include = true;
              break;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      if (include && item.exlude) {
        var _iterator3 = Object(createForOfIteratorHelper["a" /* default */])(item.exlude),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _regepx = _step3.value;

            if (isMatch(_regepx)) {
              exlude = true;
              break;
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }

      if (include && !exlude) {
        result = item.name;
        break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return result;
}
// EXTERNAL MODULE: ./src/configs/index.ts + 2 modules
var configs = __webpack_require__("nxO9");

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("nKUr");

// CONCATENATED MODULE: ./src/layouts/PublicLayout.tsx




var PublicLayout_PublicLayout = function PublicLayout(props) {
  return /*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"], {
    children: props.children
  });
};

/* harmony default export */ var layouts_PublicLayout = (PublicLayout_PublicLayout);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("tJVT");

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("k1fw");

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("PpiC");

// EXTERNAL MODULE: ./node_modules/@ant-design/pro-layout/es/utils/getMenuData.js
var getMenuData = __webpack_require__("Qv07");

// EXTERNAL MODULE: ./node_modules/@ant-design/pro-layout/es/index.js + 149 modules
var es = __webpack_require__("Hx5s");

// EXTERNAL MODULE: ./node_modules/umi/node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__("QttV");

// CONCATENATED MODULE: ./src/defaultSettings.ts
var defaultSettings = {
  navTheme: 'light',
  primaryColor: '#006EFF'
};
/* harmony default export */ var src_defaultSettings = (defaultSettings);
// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/style/css.js
var style_css = __webpack_require__("aIZi");

// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/index.js
var dropdown = __webpack_require__("jsC+");

// EXTERNAL MODULE: ./node_modules/antd/es/avatar/style/css.js + 1 modules
var avatar_style_css = __webpack_require__("xpQY");

// EXTERNAL MODULE: ./node_modules/antd/es/avatar/index.js + 5 modules
var avatar = __webpack_require__("Tckk");

// EXTERNAL MODULE: ./node_modules/antd/es/menu/style/css.js
var menu_style_css = __webpack_require__("2WkQ");

// EXTERNAL MODULE: ./node_modules/antd/es/menu/index.js + 3 modules
var menu = __webpack_require__("BvKs");

// EXTERNAL MODULE: ./src/layouts/PrimaryLayout/index.less?modules
var PrimaryLayoutmodules = __webpack_require__("VAR/");
var PrimaryLayoutmodules_default = /*#__PURE__*/__webpack_require__.n(PrimaryLayoutmodules);

// CONCATENATED MODULE: ./src/layouts/PrimaryLayout/HeaderRightContent.tsx















var SubMenu = menu["a" /* default */].SubMenu;

var HeaderRightContent_NotFoundPage = function NotFoundPage() {
  var _useConfig = Object(hooks["b" /* useConfig */])(),
      locale = _useConfig.language,
      setLanguage = _useConfig.setLanguage,
      userInfo = _useConfig.userInfo;

  var currentLanguage = configs["d" /* language */][locale];
  var history = Object(hooks["c" /* useHistory */])();

  var _useRequest = Object(hooks["f" /* useRequest */])(services["b" /* logoutUser */], {
    manual: true,
    onSuccess: function onSuccess() {
      return history.push('/login');
    }
  }),
      runLogoutUser = _useRequest.run;

  return /*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime["jsx"])(dropdown["a" /* default */], {
      overlay: /*#__PURE__*/Object(jsx_runtime["jsx"])(menu["a" /* default */], {
        selectedKeys: [currentLanguage.value],
        onClick: function onClick(data) {
          setLanguage(data.key);
        },
        children: configs["e" /* languages */].map(function (item) {
          return /*#__PURE__*/Object(jsx_runtime["jsxs"])(menu["a" /* default */].Item, {
            children: [/*#__PURE__*/Object(jsx_runtime["jsx"])(avatar["a" /* default */], {
              size: "small",
              style: {
                marginRight: 8
              },
              src: item.flag
            }), item.value]
          }, item.key);
        })
      }),
      children: /*#__PURE__*/Object(jsx_runtime["jsx"])("div", {
        className: PrimaryLayoutmodules_default.a.headerButton,
        children: /*#__PURE__*/Object(jsx_runtime["jsx"])(avatar["a" /* default */], {
          size: "small",
          src: currentLanguage.flag
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime["jsx"])(menu["a" /* default */], {
      mode: "horizontal",
      children: /*#__PURE__*/Object(jsx_runtime["jsx"])(SubMenu, {
        title: /*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"], {
          children: [/*#__PURE__*/Object(jsx_runtime["jsx"])("span", {
            style: {
              color: '#999',
              marginRight: 4
            },
            children: /*#__PURE__*/Object(jsx_runtime["jsx"])(esm["b" /* Trans */], {
              id: "Hi,"
            })
          }), /*#__PURE__*/Object(jsx_runtime["jsx"])("span", {
            children: userInfo === null || userInfo === void 0 ? void 0 : userInfo.username
          }), /*#__PURE__*/Object(jsx_runtime["jsx"])(avatar["a" /* default */], {
            style: {
              marginLeft: 8
            },
            src: userInfo === null || userInfo === void 0 ? void 0 : userInfo.avatar
          })]
        }),
        children: /*#__PURE__*/Object(jsx_runtime["jsx"])(menu["a" /* default */].Item, {
          onClick: function onClick() {
            return runLogoutUser();
          },
          children: /*#__PURE__*/Object(jsx_runtime["jsx"])(esm["b" /* Trans */], {
            id: "Sign out"
          })
        }, "SignOut")
      })
    }, "user")]
  });
};

/* harmony default export */ var HeaderRightContent = (HeaderRightContent_NotFoundPage);
// CONCATENATED MODULE: ./src/layouts/PrimaryLayout/index.tsx













var PrimaryLayout_renderMenuItem = function renderMenuItem(menus) {
  return menus.map(function (_ref) {
    var icon = _ref.icon,
        children = _ref.children,
        item = Object(objectWithoutProperties["a" /* default */])(_ref, ["icon", "children"]);

    return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, item), {}, {
      icon: icon && configs["f" /* menuIcon */][icon],
      children: children && renderMenuItem(children)
    });
  });
};

var PrimaryLayout_PrimaryLayout = function PrimaryLayout(props) {
  var location = Object(hooks["e" /* useLocation */])();

  var _useState = Object(react["useState"])(src_defaultSettings),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 1),
      settings = _useState2[0];

  var _useState3 = Object(react["useState"])([]),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      openKeys = _useState4[0],
      setOpenKeys = _useState4[1];

  var _useState5 = Object(react["useState"])(['/']),
      _useState6 = Object(slicedToArray["a" /* default */])(_useState5, 2),
      selectedKeys = _useState6[0],
      setSelectedKeys = _useState6[1];

  var pathname = location.pathname;

  var _useMemo = Object(react["useMemo"])(function () {
    return Object(getMenuData["a" /* default */])(configs["g" /* menus */]);
  }, []),
      breadcrumbMap = _useMemo.breadcrumbMap,
      menuData = _useMemo.menuData;

  Object(react["useEffect"])(function () {
    var select = breadcrumbMap.get(pathname);

    if (select) {
      setOpenKeys(select['pro_layout_parentKeys']);
      setSelectedKeys([select['key']]);
    }
  }, [breadcrumbMap, pathname]);
  var menuDataRender = Object(react["useCallback"])(function () {
    return PrimaryLayout_renderMenuItem(menuData);
  }, [menuData]);
  var menuItemRender = Object(react["useCallback"])(function (menuItemProps, defaultDom) {
    if (menuItemProps.isUrl || !menuItemProps.path) {
      return defaultDom;
    }

    return /*#__PURE__*/Object(jsx_runtime["jsx"])(react_router_dom["a" /* Link */], {
      to: menuItemProps.path,
      children: defaultDom
    });
  }, []);
  var handleOnOpenChange = Object(react["useCallback"])(function (keys) {
    return setOpenKeys(keys);
  }, []);
  var menuProps = Object(react["useMemo"])(function () {
    return {
      selectedKeys: selectedKeys,
      openKeys: openKeys,
      onOpenChange: handleOnOpenChange
    };
  }, [handleOnOpenChange, openKeys, selectedKeys]);
  return /*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime["jsx"])(es["a" /* default */], Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, settings), {}, {
      title: configs["c" /* config */].title,
      logo: configs["c" /* config */].logo,
      menuDataRender: menuDataRender,
      menuItemRender: menuItemRender,
      menuProps: menuProps,
      rightContentRender: function rightContentRender() {
        return /*#__PURE__*/Object(jsx_runtime["jsx"])(HeaderRightContent, {});
      },
      children: props.children
    }))
  });
};

/* harmony default export */ var layouts_PrimaryLayout = (PrimaryLayout_PrimaryLayout);
// EXTERNAL MODULE: ./src/layouts/BaseLayout.less
var layouts_BaseLayout = __webpack_require__("3IEG");

// CONCATENATED MODULE: ./src/layouts/BaseLayout.tsx








var LayoutMap = {
  primary: layouts_PrimaryLayout,
  public: layouts_PublicLayout
};

var BaseLayout_BaseLayout = function BaseLayout(props) {
  var location = Object(hooks["e" /* useLocation */])();
  var Container = LayoutMap[queryLayout(configs["c" /* config */].layouts, location.pathname)];
  return /*#__PURE__*/Object(jsx_runtime["jsx"])(Container, {
    children: props.children
  });
};

/* harmony default export */ var src_layouts_BaseLayout = (BaseLayout_BaseLayout);
// CONCATENATED MODULE: ./src/layouts/index.tsx











var layouts_Layout = function Layout(props) {
  var _useIntlProvider = Object(hooks["d" /* useIntlProvider */])(),
      language = _useIntlProvider.language,
      setLanguage = _useIntlProvider.setLanguage,
      i18n = _useIntlProvider.i18n,
      locale = _useIntlProvider.locale;

  var history = Object(hooks["c" /* useHistory */])();

  var _useRequest = Object(hooks["f" /* useRequest */])(services["c" /* queryUserInfo */], {
    onError: function onError(data) {
      if (data.statusCode === 401) {
        history.push('/login');
      }
    }
  }),
      userInfo = _useRequest.data,
      runQueryUserInfo = _useRequest.run,
      loading = _useRequest.loading;

  var globalConfig = {
    language: language,
    setLanguage: setLanguage,
    userInfo: userInfo,
    queryUserInfo: runQueryUserInfo
  };

  if (loading) {
    return /*#__PURE__*/Object(jsx_runtime["jsx"])("div", {
      children: "loading"
    });
  }

  return /*#__PURE__*/Object(jsx_runtime["jsx"])(context["a" /* ConfigContext */].Provider, {
    value: globalConfig,
    children: /*#__PURE__*/Object(jsx_runtime["jsx"])(esm["a" /* I18nProvider */], {
      i18n: i18n,
      children: /*#__PURE__*/Object(jsx_runtime["jsx"])(config_provider["a" /* default */], {
        locale: locale,
        children: /*#__PURE__*/Object(jsx_runtime["jsx"])(hooks["a" /* UseRequestProvider */], {
          value: {
            requestMethod: request["a" /* default */]
          },
          children: /*#__PURE__*/Object(jsx_runtime["jsx"])(src_layouts_BaseLayout, {
            children: props.children
          })
        })
      })
    })
  });
};

/* harmony default export */ var src_layouts = __webpack_exports__["default"] = (layouts_Layout);

//# sourceURL=webpack:///./src/layouts/index.tsx_+_6_modules?`)},"0znj":function(module,exports){eval(`/*eslint-disable*/module.exports={messages:{"Sign in":"Sign in","Username":"Username","Password":"Password"}};

//# sourceURL=webpack:///./src/locales/en/messages.po?`)},"3IEG":function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./src/layouts/BaseLayout.less?`)},"4HoG":function(module,exports){eval(`/*eslint-disable*/module.exports={messages:{"Sign in":"Sign in","Username":"Username","Password":"Password"}};

//# sourceURL=webpack:///./src/locales/zh/messages.po?`)},"52a3":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ config; });

// EXTERNAL MODULE: ./src/configs/constants/index.ts
var constants = __webpack_require__("+GRb");

// EXTERNAL MODULE: ./src/configs/languages/index.ts
var languages = __webpack_require__("vTY6");

// CONCATENATED MODULE: ./src/utils/checkLanguage.ts


var checkLanguage_checkLanguage = function checkLanguage(lang) {
  var navigatorLanguageCodeMap = {
    'zh-CN': 'zh'
  };

  if (Boolean(languages["b" /* language */][navigatorLanguageCodeMap[lang]])) {
    return navigatorLanguageCodeMap[lang];
  }

  if (Boolean(languages["b" /* language */][lang])) {
    return lang;
  }

  return '';
};

/* harmony default export */ var utils_checkLanguage = (checkLanguage_checkLanguage);
// EXTERNAL MODULE: ./node_modules/@lingui/detect-locale/esm/index.js + 2 modules
var esm = __webpack_require__("UFgg");

// CONCATENATED MODULE: ./src/configs/default/index.ts



var language = Object(esm["a" /* detect */])(utils_checkLanguage(Object(esm["d" /* fromUrl */])('lang')), utils_checkLanguage(Object(esm["c" /* fromStorage */])(constants["a" /* LOCALE_LANGUAGE */])), utils_checkLanguage(Object(esm["b" /* fromNavigator */])()), 'en');
var config = {
  title: 'Antd Admin',
  logo: 'logo.svg',
  copyright: 'Ant Design Admin  \xA9 2021 zuiidea',
  language: language,
  apiPrefix: '/api/v1',

  /* Layout configuration, specify which layout to use for route. */
  layouts: [{
    name: 'primary',
    include: [/.*/],
    exlude: [/\\/login/]
  }]
};

//# sourceURL=webpack:///./src/configs/default/index.ts_+_1_modules?`)},CLrh:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ logoutUser; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ queryUserInfo; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ loginUser; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ queryUserList; });

// UNUSED EXPORTS: queryUser, updateUser, createUser, removeUser, removeUserList

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("k1fw");

// CONCATENATED MODULE: ./src/services/user/index.ts
/* harmony default export */ var user = ({
  queryUserInfo: '/user',
  logoutUser: '/user/logout',
  loginUser: 'POST /user/login',
  queryUser: '/user/:id',
  queryUserList: '/users',
  updateUser: 'Patch /user/:id',
  createUser: 'POST /user',
  removeUser: 'DELETE /user/:id',
  removeUserList: 'POST /users/delete'
});
// EXTERNAL MODULE: ./src/utils/request.ts
var request = __webpack_require__("sy1d");

// EXTERNAL MODULE: ./src/configs/index.ts + 2 modules
var configs = __webpack_require__("nxO9");

// CONCATENATED MODULE: ./src/utils/createService.ts



var createService_createService = function createService(params) {
  var url = params;
  var method = 'GET';
  var paramsArray = params.split(' ');

  if (paramsArray.length === 2) {
    method = paramsArray[0];
    url = paramsArray[1];
  }

  return function (data) {
    return Object(request["a" /* default */])({
      url: configs["c" /* config */].apiPrefix + url,
      data: data,
      method: method
    });
  };
};

/* harmony default export */ var utils_createService = (createService_createService);
// CONCATENATED MODULE: ./src/services/index.ts




var APIs = Object(objectSpread2["a" /* default */])({}, user);

var APIService = {};

for (var key in APIs) {
  APIService[key] = utils_createService(APIs[key]);
}

var logoutUser = APIService.logoutUser,
    queryUser = APIService.queryUser,
    updateUser = APIService.updateUser,
    createUser = APIService.createUser,
    removeUser = APIService.removeUser,
    removeUserList = APIService.removeUserList;

var queryUserInfo = utils_createService(user.queryUserInfo);
var loginUser = utils_createService(user.loginUser);
var queryUserList = utils_createService(user.queryUserList);

//# sourceURL=webpack:///./src/services/index.ts_+_2_modules?`)},Nlet:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nxO9");


var ConfigContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  language: _configs__WEBPACK_IMPORTED_MODULE_1__[/* config */ "c"].language,
  setLanguage: function setLanguage(language) {
    return null;
  },
  userInfo: null,
  queryUserInfo: function queryUserInfo() {
    return null;
  }
});

//# sourceURL=webpack:///./src/utils/context.ts?`)},OBVL:function(module,exports){eval(`/*eslint-disable*/module.exports={messages:{"Sign in":"Sign in","Username":"Username","Password":"Password"}};

//# sourceURL=webpack:///./src/locales/pt-br/messages.po?`)},"VAR/":function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin
module.exports = {"text-overflow":"text-overflow___3dpQH","text-gradient":"text-gradient___2TbAi","background-hover":"background-hover___1Yuxe","backTop":"backTop___zZZd_","content":"content___3OvGh","container":"container___3uhuI","footer":"footer___3kXIq"};

//# sourceURL=webpack:///./src/layouts/PrimaryLayout/index.less?`)},eZYV:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ hooks_useIntlProvider; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ react_router["g" /* useHistory */]; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ react_router["h" /* useLocation */]; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ useRequest; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ umiExports["a" /* UseRequestProvider */]; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ hooks_useConfig; });

// EXTERNAL MODULE: ./node_modules/umi/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__("7AqN");

// EXTERNAL MODULE: ./src/.umi-production/core/umiExports.ts + 16 modules
var umiExports = __webpack_require__("9kvl");

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("tJVT");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// EXTERNAL MODULE: ./src/utils/context.ts
var context = __webpack_require__("Nlet");

// EXTERNAL MODULE: ./src/configs/index.ts + 2 modules
var configs = __webpack_require__("nxO9");

// EXTERNAL MODULE: ./src/i18n.ts
var i18n = __webpack_require__("iMMW");

// EXTERNAL MODULE: ./node_modules/antd/lib/locale/zh_CN.js
var zh_CN = __webpack_require__("SA0R");
var zh_CN_default = /*#__PURE__*/__webpack_require__.n(zh_CN);

// EXTERNAL MODULE: ./node_modules/antd/lib/locale/en_US.js
var en_US = __webpack_require__("ZoOv");
var en_US_default = /*#__PURE__*/__webpack_require__.n(en_US);

// EXTERNAL MODULE: ./node_modules/antd/lib/locale/pt_BR.js
var pt_BR = __webpack_require__("Q3na");
var pt_BR_default = /*#__PURE__*/__webpack_require__.n(pt_BR);

// CONCATENATED MODULE: ./src/hooks/useIntlProvider.ts









var antdLocaleMap = {
  zh_CN: zh_CN_default.a,
  en_US: en_US_default.a,
  pt_BR: pt_BR_default.a
};

var useIntlProvider_useIntlProvider = function useIntlProvider() {
  var _useContext = Object(react["useContext"])(context["a" /* ConfigContext */]),
      language = _useContext.language;

  var _useState = Object(react["useState"])(),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      locale = _useState2[0],
      setLocale = _useState2[1];

  Object(react["useEffect"])(function () {
    setLocale(antdLocaleMap[configs["b" /* antdI18nMap */][language]]);
    localStorage.setItem(configs["a" /* LOCALE_LANGUAGE */], language);
  }, [language]);
  var setLanguage = Object(react["useCallback"])(function (language) {
    if (language !== i18n["a" /* i18n */].locale) {
      localStorage.setItem(configs["a" /* LOCALE_LANGUAGE */], language);
      window.location.reload();
    }
  }, []);
  return {
    language: language,
    setLanguage: setLanguage,
    locale: locale,
    i18n: i18n["a" /* i18n */]
  };
};

/* harmony default export */ var hooks_useIntlProvider = (useIntlProvider_useIntlProvider);
// CONCATENATED MODULE: ./src/hooks/useConfig.ts



var useConfig_useConfig = function useConfig() {
  return Object(react["useContext"])(context["a" /* ConfigContext */]);
};

/* harmony default export */ var hooks_useConfig = (useConfig_useConfig);
// CONCATENATED MODULE: ./src/hooks/useRequest.ts



var useRequest_useFetch = function useFetch(service, options) {
  var initialData = options.initialData,
      manual = options.manual,
      formatResult = options.formatResult,
      onSuccess = options.onSuccess,
      onError = options.onError;

  var _useState = Object(react["useState"])(false),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react["useState"])(initialData),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

  var _useState5 = Object(react["useState"])(null),
      _useState6 = Object(slicedToArray["a" /* default */])(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var run = Object(react["useCallback"])(function (params) {
    setLoading(true);
    return service(params).then(function (result) {
      var resultData = formatResult ? formatResult(result) : result;
      setData(resultData);
      onSuccess && onSuccess(resultData, params);
    }).catch(function (result) {
      setError(result || new Error());
      onError && onError(result, params);
    }).finally(function () {
      setLoading(false);
    });
  }, [formatResult, onError, onSuccess, service]);
  Object(react["useEffect"])(function () {
    if (manual) {
      return;
    }

    run(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    run: run,
    data: data,
    error: error,
    loading: loading
  };
};

/* harmony default export */ var useRequest = (useRequest_useFetch);
// CONCATENATED MODULE: ./src/hooks/index.ts






//# sourceURL=webpack:///./src/hooks/index.ts_+_3_modules?`)},iMMW:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return i18n; });
/* harmony import */ var _configs_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("52a3");
/* harmony import */ var _lingui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h9vL");
/* harmony import */ var make_plural_plurals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("IvoG");
/* harmony import */ var _locales_zh_messages_po__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4HoG");
/* harmony import */ var _locales_zh_messages_po__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_locales_zh_messages_po__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _locales_en_messages_po__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("0znj");
/* harmony import */ var _locales_en_messages_po__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_locales_en_messages_po__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _locales_pt_br_messages_po__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("OBVL");
/* harmony import */ var _locales_pt_br_messages_po__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_locales_pt_br_messages_po__WEBPACK_IMPORTED_MODULE_5__);






var i18nBase = Object(_lingui_core__WEBPACK_IMPORTED_MODULE_1__[/* setupI18n */ "a"])();
i18nBase.loadLocaleData({
  en: {
    plurals: make_plural_plurals__WEBPACK_IMPORTED_MODULE_2__[/* en */ "a"]
  },
  zh: {
    plurals: make_plural_plurals__WEBPACK_IMPORTED_MODULE_2__[/* zh */ "c"]
  },
  'pt-br': {
    plurals: make_plural_plurals__WEBPACK_IMPORTED_MODULE_2__[/* pt */ "b"]
  }
});
i18nBase.load({
  zh: _locales_zh_messages_po__WEBPACK_IMPORTED_MODULE_3__["messages"],
  en: _locales_en_messages_po__WEBPACK_IMPORTED_MODULE_4__["messages"],
  'pt-br': _locales_pt_br_messages_po__WEBPACK_IMPORTED_MODULE_5__["messages"]
});
i18nBase.activate(_configs_default__WEBPACK_IMPORTED_MODULE_0__[/* config */ "a"].language);
var i18n = i18nBase;

//# sourceURL=webpack:///./src/i18n.ts?`)},nxO9:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ configs_default["a" /* config */]; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ languages["b" /* language */]; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ languages["c" /* languages */]; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ languages["a" /* antdI18nMap */]; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ constants["a" /* LOCALE_LANGUAGE */]; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ configs_menus; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ icon; });

// EXTERNAL MODULE: ./src/i18n.ts
var i18n = __webpack_require__("iMMW");

// CONCATENATED MODULE: ./src/configs/menus/index.ts


/*
 * Note:
 * Menu items with children need to set a key starting with "/"
 * @see https://github.com/umijs/route-utils/blob/master/src/transformRoute/transformRoute.ts#L219
 */
var menus = [{
  path: '/',
  name:
  /*i18n*/
  i18n["a" /* i18n */]._("Dashboard"),
  icon: 'dashboard'
}, {
  path: '/user',
  name:
  /*i18n*/
  i18n["a" /* i18n */]._("User"),
  icon: 'user'
}];
/* harmony default export */ var configs_menus = (menus);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/PayCircleOutlined.js + 1 modules
var PayCircleOutlined = __webpack_require__("HjwJ");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/ShoppingCartOutlined.js + 1 modules
var ShoppingCartOutlined = __webpack_require__("FVke");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CameraOutlined.js + 1 modules
var CameraOutlined = __webpack_require__("80W2");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LineOutlined.js + 1 modules
var LineOutlined = __webpack_require__("KXUm");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CodeOutlined.js + 1 modules
var CodeOutlined = __webpack_require__("su5N");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/AreaChartOutlined.js + 1 modules
var AreaChartOutlined = __webpack_require__("QpHG");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/BarChartOutlined.js + 1 modules
var BarChartOutlined = __webpack_require__("UdsK");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/MessageOutlined.js + 1 modules
var MessageOutlined = __webpack_require__("WhZy");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/TeamOutlined.js + 1 modules
var TeamOutlined = __webpack_require__("creX");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DashboardOutlined.js + 1 modules
var DashboardOutlined = __webpack_require__("/1V0");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/UserOutlined.js + 1 modules
var UserOutlined = __webpack_require__("cJ7L");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/ApiOutlined.js + 1 modules
var ApiOutlined = __webpack_require__("kFgV");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/EditOutlined.js + 1 modules
var EditOutlined = __webpack_require__("G3dp");

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("nKUr");

// CONCATENATED MODULE: ./src/configs/menus/icon.tsx


var menuIcon = {
  'pay-circle-o': /*#__PURE__*/Object(jsx_runtime["jsx"])(PayCircleOutlined["a" /* default */], {}),
  'shopping-cart': /*#__PURE__*/Object(jsx_runtime["jsx"])(ShoppingCartOutlined["a" /* default */], {}),
  'camera-o': /*#__PURE__*/Object(jsx_runtime["jsx"])(CameraOutlined["a" /* default */], {}),
  'line-chart': /*#__PURE__*/Object(jsx_runtime["jsx"])(LineOutlined["a" /* default */], {}),
  'code-o': /*#__PURE__*/Object(jsx_runtime["jsx"])(CodeOutlined["a" /* default */], {}),
  'area-chart': /*#__PURE__*/Object(jsx_runtime["jsx"])(AreaChartOutlined["a" /* default */], {}),
  'bar-chart': /*#__PURE__*/Object(jsx_runtime["jsx"])(BarChartOutlined["a" /* default */], {}),
  message: /*#__PURE__*/Object(jsx_runtime["jsx"])(MessageOutlined["a" /* default */], {}),
  team: /*#__PURE__*/Object(jsx_runtime["jsx"])(TeamOutlined["a" /* default */], {}),
  dashboard: /*#__PURE__*/Object(jsx_runtime["jsx"])(DashboardOutlined["a" /* default */], {}),
  user: /*#__PURE__*/Object(jsx_runtime["jsx"])(UserOutlined["a" /* default */], {}),
  api: /*#__PURE__*/Object(jsx_runtime["jsx"])(ApiOutlined["a" /* default */], {}),
  edit: /*#__PURE__*/Object(jsx_runtime["jsx"])(EditOutlined["a" /* default */], {})
};
/* harmony default export */ var icon = (menuIcon);
// EXTERNAL MODULE: ./src/configs/default/index.ts + 1 modules
var configs_default = __webpack_require__("52a3");

// EXTERNAL MODULE: ./src/configs/languages/index.ts
var languages = __webpack_require__("vTY6");

// EXTERNAL MODULE: ./src/configs/constants/index.ts
var constants = __webpack_require__("+GRb");

// CONCATENATED MODULE: ./src/configs/index.ts







//# sourceURL=webpack:///./src/configs/index.ts_+_2_modules?`)},sy1d:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var D_mixcore_mix_portal_react_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("k1fw");
/* harmony import */ var D_mixcore_mix_portal_react_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tJVT");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);




var transformURL = function transformURL(url, data) {
  if (!data) {
    return {
      url: url,
      data: data
    };
  }

  var cloneData = data;
  var cloneUrl = url;

  try {
    cloneData = JSON.parse(JSON.stringify(data));
  } catch (error) {}

  Object.entries(cloneData).forEach(function (_ref) {
    var _ref2 = Object(D_mixcore_mix_portal_react_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, 1),
        key = _ref2[0];

    var reg = new RegExp("/:".concat(key));

    if (reg.test(cloneUrl)) {
      cloneUrl = cloneUrl.replace("/:".concat(key), "/".concat(cloneData[key]));
      delete cloneData[key];
    }
  });
  return {
    url: cloneUrl,
    data: cloneData
  };
};

var request = function request(config) {
  var params = config;

  if (typeof config === 'object') {
    var axiosConfig = config;

    var _transformURL = transformURL(axiosConfig.url, axiosConfig.data),
        data = _transformURL.data,
        url = _transformURL.url;

    params = Object(D_mixcore_mix_portal_react_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(D_mixcore_mix_portal_react_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, axiosConfig), {}, {
      data: data,
      url: url
    });

    if ((!params.method || params.method.toLocaleUpperCase() === 'GET') && !params.params) {
      params.params = data;
    }
  }

  return axios__WEBPACK_IMPORTED_MODULE_2___default()(params).then(function (response) {
    return Promise.resolve(response.data);
  }).catch(function (error) {
    var response = error.response;
    var message;
    var statusCode = 0;

    if (response && response instanceof Object) {
      var _data = response.data,
          statusText = response.statusText;
      statusCode = response.status;
      message = _data.message || statusText;
    } else {
      message = error.message;
    }

    return Promise.reject({
      statusCode: statusCode,
      message: message
    });
  });
};

/* harmony default export */ __webpack_exports__["a"] = (request);

//# sourceURL=webpack:///./src/utils/request.ts?`)},vTY6:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return language; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return languages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return antdI18nMap; });
/* harmony import */ var D_mixcore_mix_portal_react_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("k1fw");
/* harmony import */ var D_mixcore_mix_portal_react_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tJVT");



/**
 * Countrys flags: https://www.flaticon.com/packs/countrys-flags
 */
var language = {
  en: {
    flag: '/america.svg',
    value: 'English'
  },
  zh: {
    flag: '/china.svg',
    value: '\u7B80\u4F53\u4E2D\u6587'
  },
  'pt-br': {
    flag: '/portugal.svg',
    value: 'Portugu\xEAs'
  }
};
var languages = Object.entries(language).map(function (_ref) {
  var _ref2 = Object(D_mixcore_mix_portal_react_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];

  return Object(D_mixcore_mix_portal_react_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    key: key
  }, value);
});
var antdI18nMap = {
  zh: 'zh_CN',
  en: 'en_US',
  'pt-br': 'pt_BR'
};

//# sourceURL=webpack:///./src/configs/languages/index.ts?`)}}]);
