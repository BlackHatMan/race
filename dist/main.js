/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/flag.png */ \"./src/assets/flag.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"button {\\n  width: 100px;\\n  border: 1px solid black;\\n  border-radius: 10px;\\n  cursor: pointer;\\n  margin: 5px;\\n}\\ninput {\\n  margin: 0 5px;\\n}\\nspan {\\n  margin: 0 20px;\\n  font-size: 20px;\\n  font-weight: 900;\\n  color: burlywood;\\n}\\nh1 {\\n  margin: 7px;\\n}\\nh3 {\\n  margin: 5px;\\n}\\n.garage {\\n  border-bottom: 3px dashed black;\\n}\\n.track {\\n  display: flex;\\n}\\n.main-control {\\n  max-width: 400px;\\n}\\n.controls {\\n  display: flex;\\n  align-items: center;\\n  padding: 0 5px;\\n}\\n\\n.btn {\\n  width: 30px;\\n  height: 30px;\\n  color: red;\\n  font-size: 18px;\\n  font-weight: 700;\\n}\\n.btn:disabled {\\n  background-color: grey;\\n}\\n.car-container {\\n  position: relative;\\n  height: 35px;\\n  width: 85%;\\n}\\n.car {\\n  position: absolute;\\n}\\n.car-img {\\n  height: 50px;\\n  width: 70px;\\n}\\n.finish {\\n  position: absolute;\\n  width: 30px;\\n  background-size: cover;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  height: 30px;\\n  right: calc(10% + 25px);\\n  bottom: 5px;\\n}\\n.winnerPopup {\\n  position: absolute;\\n  z-index: 100;\\n  top: 45%;\\n  left: 35%;\\n  font-size: 32px;\\n  font-weight: 900;\\n  color: red;\\n  text-shadow: 1px 1px 2px black, 0 0 1em red;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://race/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://race/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://race/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://race/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://race/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://race/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://race/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://race/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://race/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://race/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://race/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst Main_1 = __webpack_require__(/*! ./js/Main */ \"./src/js/Main.ts\");\r\n__webpack_require__(/*! ./style.css */ \"./src/style.css\");\r\nconst App = new Main_1.default();\r\nApp.render();\r\n\n\n//# sourceURL=webpack://race/./src/index.ts?");

/***/ }),

/***/ "./src/js/Car.ts":
/*!***********************!*\
  !*** ./src/js/Car.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst carSvg_1 = __webpack_require__(/*! ../assets/carSvg */ \"./src/assets/carSvg.js\");\r\nclass Car {\r\n    constructor(color) {\r\n        this.car = document.createElement('div');\r\n        this.car.classList.add('car');\r\n        this.car.style.fill = color;\r\n        this.car.innerHTML = (0, carSvg_1.default)();\r\n    }\r\n    createCar() {\r\n        return this.car;\r\n    }\r\n    changeColor(color) {\r\n        this.car.style.fill = color;\r\n    }\r\n}\r\nexports[\"default\"] = Car;\r\n\n\n//# sourceURL=webpack://race/./src/js/Car.ts?");

/***/ }),

/***/ "./src/js/Controls.ts":
/*!****************************!*\
  !*** ./src/js/Controls.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nclass Controls {\r\n    constructor() {\r\n        this.controls = document.createElement('div');\r\n        this.controls.classList.add('main-control');\r\n        this.modelName = document.createElement('input');\r\n        this.modelName.placeholder = 'enter brand';\r\n        this.modelUpdateName = document.createElement('input');\r\n        this.modelUpdateName.disabled = true;\r\n        this.colorPickerCreate = document.createElement('input');\r\n        this.colorPickerCreate.type = 'color';\r\n        this.colorPickerUpdate = document.createElement('input');\r\n        this.colorPickerUpdate.type = 'color';\r\n        this.btnCreateTrack = document.createElement('button');\r\n        this.btnCreateTrack.textContent = 'CREATE';\r\n        this.btnCreateTrack.addEventListener('click', () => this.createGarage());\r\n        this.btnUpdateTrack = document.createElement('button');\r\n        this.btnUpdateTrack.addEventListener('click', () => this.updateBtn());\r\n        this.btnUpdateTrack.textContent = 'UPDATE';\r\n        this.btnUpdateTrack.disabled = true;\r\n        this.btnStartAll = document.createElement('button');\r\n        this.btnStartAll.textContent = 'RACE';\r\n        this.btnStartAll.addEventListener('click', () => this.startAll());\r\n        this.btnResetAll = document.createElement('button');\r\n        this.btnResetAll.textContent = 'RESET';\r\n        this.btnResetAll.addEventListener('click', () => this.resetAll());\r\n        this.btnResetAll.disabled = true;\r\n        this.btnGenerateRnd = document.createElement('button');\r\n        this.btnGenerateRnd.textContent = 'GENERATE CARS';\r\n        this.controls.appendChild(this.modelName);\r\n        this.controls.appendChild(this.colorPickerCreate);\r\n        this.controls.appendChild(this.btnCreateTrack);\r\n        this.controls.appendChild(this.modelUpdateName);\r\n        this.controls.appendChild(this.colorPickerUpdate);\r\n        this.controls.appendChild(this.btnUpdateTrack);\r\n        this.controls.appendChild(this.btnStartAll);\r\n        this.controls.appendChild(this.btnResetAll);\r\n        this.controls.appendChild(this.btnGenerateRnd);\r\n    }\r\n}\r\nexports[\"default\"] = Controls;\r\n\n\n//# sourceURL=webpack://race/./src/js/Controls.ts?");

/***/ }),

/***/ "./src/js/Garage.ts":
/*!**************************!*\
  !*** ./src/js/Garage.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst Race_1 = __webpack_require__(/*! ./Race */ \"./src/js/Race.ts\");\r\nclass Garage {\r\n    constructor(btnUpdateTrack, modelUpdate, removeGarage, setUpdateId, model, color, id) {\r\n        this.garage = document.createElement('div');\r\n        this.garage.classList.add('garage');\r\n        this.remove = document.createElement('button');\r\n        this.remove.textContent = 'remove';\r\n        this.select = document.createElement('button');\r\n        this.select.textContent = 'select';\r\n        this.title = document.createElement('span');\r\n        this.title.textContent = model;\r\n        this.modelUpdate = modelUpdate;\r\n        this.id = id;\r\n        this.btnUpdateTrack = btnUpdateTrack;\r\n        this.remove.addEventListener('click', () => removeGarage(this.id));\r\n        this.select.addEventListener('click', () => this.updateRace());\r\n        this.select.addEventListener('click', () => setUpdateId(this.id));\r\n        this.removeItemGarage = () => {\r\n            this.garage.remove();\r\n        };\r\n        this.updateCar = (upColor, upName) => {\r\n            if (upName)\r\n                this.title.textContent = upName;\r\n            this.race.changeColor(upColor);\r\n        };\r\n        this.garage.appendChild(this.remove);\r\n        this.garage.appendChild(this.select);\r\n        this.garage.appendChild(this.title);\r\n        this.race = new Race_1.default(color, this.id, model);\r\n    }\r\n    renderGarage() {\r\n        this.garage.appendChild(this.race.renderRace());\r\n        return this.garage;\r\n    }\r\n    updateRace() {\r\n        this.modelUpdate.focus();\r\n        this.modelUpdate.disabled = false;\r\n        this.btnUpdateTrack.disabled = false;\r\n    }\r\n}\r\nexports[\"default\"] = Garage;\r\n\n\n//# sourceURL=webpack://race/./src/js/Garage.ts?");

/***/ }),

/***/ "./src/js/Main.ts":
/*!************************!*\
  !*** ./src/js/Main.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst Controls_1 = __webpack_require__(/*! ./Controls */ \"./src/js/Controls.ts\");\r\nconst Garage_1 = __webpack_require__(/*! ./Garage */ \"./src/js/Garage.ts\");\r\nconst api_1 = __webpack_require__(/*! ./api/api */ \"./src/js/api/api.ts\");\r\nclass Main extends Controls_1.default {\r\n    constructor() {\r\n        super();\r\n        this.startAll = () => {\r\n            const arrayTime = this.page.map((el) => el.race.startRace());\r\n            this.btnStartAll.disabled = true;\r\n            Promise.race(arrayTime).then((resolve) => {\r\n                this.winnerPopup.textContent = resolve;\r\n                setTimeout(() => {\r\n                    this.btnResetAll.disabled = false;\r\n                    this.winnerPopup.innerText = '';\r\n                }, 4000);\r\n            });\r\n        };\r\n        this.resetAll = () => __awaiter(this, void 0, void 0, function* () {\r\n            this.btnStartAll.disabled = false;\r\n            const arrayTime = this.page.map((el) => el.race.stopRace());\r\n            yield Promise.all(arrayTime);\r\n        });\r\n        this.createGarage = () => __awaiter(this, void 0, void 0, function* () {\r\n            if (this.modelName.value) {\r\n                const response = yield (0, api_1.createCar)(this.modelName.value, this.colorPickerCreate.value);\r\n                if (this.page.length < 7) {\r\n                    const instGarage = new Garage_1.default(this.btnUpdateTrack, this.modelUpdateName, this.removeGarage, this.setUpdateId, response.name, response.color, response.id);\r\n                    this.wrapper.appendChild(instGarage.renderGarage());\r\n                    this.page.push(instGarage);\r\n                }\r\n                this.modelName.value = '';\r\n                this.countCar.textContent = `GARAGE (${this.totalCount += 1})`;\r\n            }\r\n        });\r\n        this.main = document.createElement('div');\r\n        this.wrapper = document.createElement('div');\r\n        this.main.className = 'main';\r\n        this.main.className = 'main';\r\n        this.countCar = document.createElement('h1');\r\n        this.currentPage = 1;\r\n        this.cachedPage = {};\r\n        this.totalCount;\r\n        this.updateID = 0;\r\n        this.page = [];\r\n        this.winnerPopup = document.createElement('div');\r\n        this.winnerPopup.classList.add('winnerPopup');\r\n        this.prev = document.createElement('button');\r\n        this.next = document.createElement('button');\r\n        this.currentPageLabel = document.createElement('h3');\r\n        this.currentPageLabel.textContent = 'Page # 1';\r\n        this.prev.textContent = 'prev page';\r\n        this.next.textContent = 'next page';\r\n        this.next.addEventListener('click', () => this.nextPage());\r\n        this.prev.addEventListener('click', () => this.prevPage());\r\n        this.main.appendChild(this.controls);\r\n        this.main.appendChild(this.countCar);\r\n        this.main.appendChild(this.winnerPopup);\r\n        this.main.appendChild(this.prev);\r\n        this.main.appendChild(this.next);\r\n        this.main.appendChild(this.currentPageLabel);\r\n        this.main.appendChild(this.wrapper);\r\n        this.removeGarage = (id) => {\r\n            (0, api_1.removeCar)(id);\r\n            this.page.find((el) => el.id === id).removeItemGarage();\r\n            this.page = this.page.filter((el) => el.id !== id);\r\n            this.countCar.textContent = `GARAGE (${this.totalCount -= 1})`;\r\n        };\r\n        this.setUpdateId = (id) => {\r\n            this.updateID = id;\r\n        };\r\n        this.nextPage = () => {\r\n            if (this.currentPage < Math.ceil(this.totalCount / 7)) {\r\n                this.currentPageLabel.textContent = `Page # ${this.currentPage += 1}`;\r\n                this.renderCuretPage(this.currentPage);\r\n            }\r\n        };\r\n        this.prevPage = () => {\r\n            if (this.currentPage > 1) {\r\n                this.currentPageLabel.textContent = `Page # ${this.currentPage -= 1}`;\r\n                this.renderCuretPage(this.currentPage);\r\n            }\r\n        };\r\n        this.updateBtn = () => {\r\n            (0, api_1.updateCar)(this.updateID, this.colorPickerUpdate.value, this.modelUpdateName.value);\r\n            this.page.find((el) => el.id === this.updateID)\r\n                .updateCar(this.colorPickerUpdate.value, this.modelUpdateName.value);\r\n            this.modelUpdateName.value = '';\r\n            this.modelUpdateName.disabled = true;\r\n            this.btnUpdateTrack.disabled = true;\r\n        };\r\n    }\r\n    renderCuretPage(pageNumber) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            this.wrapper.innerHTML = '';\r\n            this.page = [];\r\n            if (this.cachedPage[pageNumber]) {\r\n                this.cachedPage[pageNumber].forEach((garageItem) => this.wrapper\r\n                    .appendChild(garageItem.renderGarage()));\r\n                return;\r\n            }\r\n            const { totalCount, initialData } = yield (0, api_1.getCars)(pageNumber);\r\n            this.totalCount = totalCount;\r\n            initialData.forEach((el) => {\r\n                const instGarage = new Garage_1.default(this.btnUpdateTrack, this.modelUpdateName, this.removeGarage, this.setUpdateId, el.name, el.color, el.id);\r\n                this.page.push(instGarage);\r\n                this.wrapper.appendChild(instGarage.renderGarage());\r\n                this.countCar.textContent = `GARAGE (${this.totalCount})`;\r\n            });\r\n            this.cachedPage[pageNumber] = [...this.page];\r\n            console.log('dsdsd', this.page.length);\r\n        });\r\n    }\r\n    render() {\r\n        this.renderCuretPage(this.currentPage);\r\n        return document.body.appendChild(this.main);\r\n    }\r\n}\r\nexports[\"default\"] = Main;\r\n\n\n//# sourceURL=webpack://race/./src/js/Main.ts?");

/***/ }),

/***/ "./src/js/Race.ts":
/*!************************!*\
  !*** ./src/js/Race.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst Car_1 = __webpack_require__(/*! ./Car */ \"./src/js/Car.ts\");\r\nconst api_1 = __webpack_require__(/*! ./api/api */ \"./src/js/api/api.ts\");\r\nclass Race {\r\n    constructor(color, id, model) {\r\n        this.race = document.createElement('div');\r\n        this.race.classList.add('track');\r\n        this.controls = document.createElement('div');\r\n        this.controls.classList.add('controls');\r\n        this.id = id;\r\n        this.start = document.createElement('button');\r\n        this.stop = document.createElement('button');\r\n        this.start.classList.add('btn', 'start');\r\n        this.stop.classList.add('btn', 'stop');\r\n        this.start.textContent = 'A';\r\n        this.stop.textContent = 'B';\r\n        this.stop.disabled = true;\r\n        this.color = color;\r\n        this.finishTime = '';\r\n        this.controls.appendChild(this.start);\r\n        this.controls.appendChild(this.stop);\r\n        this.race.appendChild(this.controls);\r\n        this.model = model;\r\n        this.car = new Car_1.default(color);\r\n        this.carContainer = document.createElement('div');\r\n        this.carContainer.classList.add('car-container');\r\n        this.finish = document.createElement('div');\r\n        this.finish.className = 'finish';\r\n        this.carContainer.appendChild(this.finish);\r\n        this.carContainer.appendChild(this.car.createCar());\r\n        this.race.appendChild(this.carContainer);\r\n    }\r\n    changeColor(color) {\r\n        this.car.changeColor(color);\r\n    }\r\n    renderRace() {\r\n        this.start.addEventListener('click', () => this.startRace());\r\n        this.stop.addEventListener('click', () => this.stopRace());\r\n        return this.race;\r\n    }\r\n    stopRace() {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            yield (0, api_1.stopEngine)(this.id);\r\n            this.anime.cancel();\r\n            this.start.disabled = false;\r\n            this.stop.disabled = true;\r\n            return new Promise((response) => {\r\n                response();\r\n            });\r\n        });\r\n    }\r\n    startRace() {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            const resp = yield (0, api_1.startEngine)(this.id);\r\n            (0, api_1.startError)(this.id).then((res) => {\r\n                if (res.status === 500) {\r\n                    this.anime.pause();\r\n                }\r\n            });\r\n            const duration = Math.round(resp.distance / resp.velocity);\r\n            this.stop.disabled = false;\r\n            this.start.disabled = true;\r\n            return new Promise((resolve) => {\r\n                this.anime = this.car.car.animate([{ left: 0 }, { left: 'calc(90% - 25px)' }], { duration, fill: 'forwards' });\r\n                this.anime.onfinish = () => {\r\n                    this.finishTime = `Winner ${this.model} time ${this.anime.currentTime / 1000} seconds!!!!!`;\r\n                    resolve(this.finishTime);\r\n                };\r\n            });\r\n        });\r\n    }\r\n}\r\nexports[\"default\"] = Race;\r\n\n\n//# sourceURL=webpack://race/./src/js/Race.ts?");

/***/ }),

/***/ "./src/js/api/api.ts":
/*!***************************!*\
  !*** ./src/js/api/api.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.startError = exports.stopEngine = exports.startEngine = exports.getCars = exports.updateCar = exports.removeCar = exports.createCar = void 0;\r\nconst createCar = (name, color) => __awaiter(void 0, void 0, void 0, function* () {\r\n    const car = {\r\n        name,\r\n        color,\r\n    };\r\n    const response = yield fetch('http://127.0.0.1:3000/garage', {\r\n        method: 'POST',\r\n        headers: {\r\n            'Content-Type': 'application/json',\r\n        },\r\n        body: JSON.stringify(car),\r\n    });\r\n    const data = yield response.json();\r\n    return data;\r\n});\r\nexports.createCar = createCar;\r\nconst removeCar = (id) => __awaiter(void 0, void 0, void 0, function* () {\r\n    yield fetch(`http://127.0.0.1:3000/garage/${id}`, { method: 'DELETE' });\r\n});\r\nexports.removeCar = removeCar;\r\nconst updateCar = (id, color, name) => __awaiter(void 0, void 0, void 0, function* () {\r\n    const car = {\r\n        color,\r\n        name,\r\n    };\r\n    yield fetch(`http://127.0.0.1:3000/garage/${id}`, {\r\n        method: 'PATCH',\r\n        headers: {\r\n            'Content-Type': 'application/json',\r\n        },\r\n        body: JSON.stringify(car),\r\n    });\r\n});\r\nexports.updateCar = updateCar;\r\nconst getCars = (page) => __awaiter(void 0, void 0, void 0, function* () {\r\n    const response = yield fetch(`http://127.0.0.1:3000/garage?_page=${page}&_limit=7`);\r\n    const totalCount = Number.parseInt(response.headers.get('X-Total-Count'), 10);\r\n    const initialData = yield response.json();\r\n    return { totalCount, initialData };\r\n});\r\nexports.getCars = getCars;\r\nconst startEngine = (id) => __awaiter(void 0, void 0, void 0, function* () {\r\n    const resp = yield fetch(`http://127.0.0.1:3000/engine?id=${id}&status=started`, {\r\n        method: 'PATCH',\r\n    });\r\n    const data = yield resp.json();\r\n    return data;\r\n});\r\nexports.startEngine = startEngine;\r\nconst stopEngine = (id) => __awaiter(void 0, void 0, void 0, function* () {\r\n    const resp = yield fetch(`http://127.0.0.1:3000/engine?id=${id}&status=stopped`, {\r\n        method: 'PATCH',\r\n    });\r\n    const data = yield resp.json();\r\n    return data;\r\n});\r\nexports.stopEngine = stopEngine;\r\nconst startError = (id) => __awaiter(void 0, void 0, void 0, function* () {\r\n    const data = fetch(`http://127.0.0.1:3000/engine?id=${id}&status=drive`, {\r\n        method: 'PATCH',\r\n    });\r\n    return data;\r\n});\r\nexports.startError = startError;\r\n\n\n//# sourceURL=webpack://race/./src/js/api/api.ts?");

/***/ }),

/***/ "./src/assets/carSvg.js":
/*!******************************!*\
  !*** ./src/assets/carSvg.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst carSvg = () => `<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 20010904//EN\"\n \"http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd\">\n<svg version=\"1.0\"\n  xmlns=\"http://www.w3.org/2000/svg\" class=\"car-img\" viewBox=\"0 0 1280.000000 640.000000\" preserveAspectRatio=\"xMidYMid meet\">\n  <g transform=\"translate(0.000000,640.000000) scale(0.100000,-0.100000)\"   stroke=\"none\">\n    <path d=\"M3565 5336 c-106 -30 -101 -26 -108 -111 -4 -42 -9 -80 -12 -85 -6\n-10 -246 -105 -590 -234 -448 -167 -1052 -415 -1173 -483 -78 -43 -193 -91\n-250 -104 -23 -5 -98 -14 -165 -19 -67 -6 -167 -19 -222 -30 -154 -31 -340\n-49 -563 -57 l-203 -6 -43 -66 c-59 -91 -60 -95 -26 -130 37 -37 38 -65 3\n-150 -25 -62 -27 -78 -31 -256 l-4 -190 -38 -32 c-91 -78 -133 -209 -134 -418\n0 -194 11 -396 26 -482 13 -71 14 -74 72 -122 69 -58 130 -129 158 -184 64\n-126 534 -211 1384 -250 l92 -4 -6 119 c-6 142 8 256 49 383 112 352 394 622\n756 722 90 26 112 28 278 28 165 0 188 -2 278 -27 201 -56 361 -152 504 -302\n140 -145 222 -293 274 -492 21 -79 24 -109 23 -279 -1 -127 -6 -214 -16 -263\nl-15 -73 3006 7 c1653 4 3007 8 3009 9 1 1 -8 37 -20 81 -19 67 -22 105 -22\n259 -1 166 1 187 27 279 117 421 467 736 885 797 119 17 325 7 432 -21 239\n-63 453 -205 601 -399 70 -92 154 -267 185 -386 24 -88 27 -119 27 -260 1\n-116 -4 -181 -16 -234 -10 -41 -16 -75 -15 -76 2 -1 62 2 133 6 266 16 458 45\n525 79 48 24 97 81 127 146 l24 52 -16 157 c-15 152 -15 163 4 284 63 388 50\n680 -35 802 -134 193 -526 336 -1429 519 -737 149 -1322 209 -2033 210 -228 0\n-226 0 -347 85 -187 131 -1045 607 -1471 815 -383 187 -788 281 -1439 332\n-208 17 -1106 16 -1400 0 -121 -7 -314 -19 -430 -27 -302 -22 -286 -22 -341\n10 -140 81 -187 94 -269 71z m1885 -333 c6 -37 38 -238 71 -446 32 -209 66\n-422 75 -474 9 -52 15 -96 13 -97 -11 -9 -1699 29 -1951 44 -206 13 -417 36\n-485 54 -98 26 -198 119 -249 231 -35 75 -36 172 -5 255 17 45 30 61 68 86 83\n54 135 80 253 127 341 136 858 230 1460 267 269 16 270 16 511 18 l227 2 12\n-67z m630 47 c264 -18 777 -110 1029 -186 186 -56 445 -188 756 -387 211 -134\n274 -181 250 -185 -75 -12 -133 -50 -162 -106 -19 -35 -21 -136 -4 -179 l11\n-27 -907 2 -906 3 -59 160 c-110 302 -298 878 -298 916 0 6 95 2 290 -11z\"/>\n    <path d=\"M2633 3125 c-223 -40 -410 -141 -568 -306 -132 -138 -213 -283 -262\n-467 -22 -83 -26 -119 -26 -247 -1 -169 10 -236 65 -382 87 -230 271 -436 493\n-551 85 -44 178 -78 271 -98 107 -23 312 -23 419 1 392 84 699 375 802 761 23\n86 26 120 27 254 1 158 -5 199 -46 330 -98 310 -355 567 -668 669 -150 50\n-354 64 -507 36z m350 -301 c249 -56 457 -247 543 -499 25 -72 28 -95 28 -220\n1 -153 -15 -228 -74 -345 -94 -186 -283 -337 -485 -386 -96 -24 -268 -24 -360\n0 -320 84 -544 355 -562 681 -20 359 209 673 558 765 94 24 253 26 352 4z\"/>\n    <path d=\"M2600 2697 c-36 -13 -85 -36 -109 -51 l-44 -28 116 -115 c81 -82 120\n-114 131 -110 14 6 16 29 16 167 0 186 6 178 -110 137z\"/>\n    <path d=\"M2920 2561 c0 -139 2 -162 16 -168 11 -4 50 28 130 108 l115 114 -28\n22 c-34 28 -138 70 -193 79 l-40 7 0 -162z\"/>\n    <path d=\"M2282 2448 c-28 -36 -92 -191 -92 -225 0 -10 34 -13 165 -13 151 0\n165 1 165 18 0 15 -206 232 -221 232 -4 0 -11 -6 -17 -12z\"/>\n    <path d=\"M3222 2351 c-62 -59 -112 -115 -112 -124 0 -15 17 -17 165 -17 131 0\n165 3 165 13 0 40 -69 205 -95 227 -7 6 -48 -27 -123 -99z\"/>\n    <path d=\"M2781 2332 c-12 -22 11 -62 34 -62 8 0 21 10 29 22 20 28 4 58 -29\n58 -13 0 -29 -8 -34 -18z\"/>\n    <path d=\"M2749 2161 c-32 -33 -37 -67 -14 -110 29 -57 104 -64 151 -14 53 57\n9 153 -71 153 -27 0 -44 -8 -66 -29z\"/>\n    <path d=\"M2570 2125 c-26 -32 13 -81 48 -59 24 16 27 45 6 61 -23 17 -39 16\n-54 -2z\"/>\n    <path d=\"M3006 2124 c-20 -19 -20 -38 -2 -54 23 -19 61 -8 64 18 7 44 -32 67\n-62 36z\"/>\n    <path d=\"M2190 1975 c0 -29 41 -140 72 -194 l31 -53 117 117 c71 71 116 123\n113 131 -4 11 -40 14 -169 14 -141 0 -164 -2 -164 -15z\"/>\n    <path d=\"M3110 1972 c0 -9 51 -68 114 -131 l114 -114 31 54 c30 51 71 165 71\n195 0 11 -31 14 -165 14 -151 0 -165 -1 -165 -18z\"/>\n    <path d=\"M2780 1901 c-7 -15 -5 -24 8 -41 32 -40 85 -4 62 41 -14 25 -56 25\n-70 0z\"/>\n    <path d=\"M2562 1697 c-61 -62 -112 -115 -112 -119 0 -18 208 -108 249 -108 7\n0 11 54 11 164 0 140 -2 165 -16 170 -9 3 -16 6 -17 6 -1 0 -53 -51 -115 -113z\"/>\n    <path d=\"M2933 1803 c-15 -6 -19 -333 -4 -333 46 0 251 88 251 108 0 9 -223\n232 -230 231 -3 0 -11 -3 -17 -6z\"/>\n    <path d=\"M10700 3119 c-390 -84 -696 -376 -797 -759 -31 -117 -41 -292 -24\n-411 33 -227 150 -453 318 -609 267 -250 643 -344 993 -249 117 32 283 118\n380 196 487 396 518 1128 67 1560 -97 93 -166 140 -290 198 -137 64 -235 86\n-407 91 -120 3 -162 0 -240 -17z m445 -313 c238 -81 409 -258 486 -506 30 -96\n33 -289 5 -388 -110 -400 -513 -637 -911 -536 -149 38 -313 147 -402 267 -176\n238 -203 533 -71 797 34 69 60 103 138 180 77 78 111 104 181 139 129 65 207\n81 364 77 109 -3 143 -7 210 -30z\"/>\n    <path d=\"M10703 2700 c-54 -19 -153 -71 -153 -80 0 -3 51 -57 114 -119 80 -80\n119 -112 130 -108 14 5 16 29 16 167 l0 160 -27 -1 c-16 0 -52 -9 -80 -19z\"/>\n    <path d=\"M11020 2561 c0 -139 2 -162 16 -168 22 -8 247 216 234 232 -17 20\n-163 84 -207 91 l-43 7 0 -162z\"/>\n    <path d=\"M10366 2424 c-29 -44 -76 -165 -76 -194 0 -19 7 -20 165 -20 126 0\n165 3 165 13 0 7 -51 63 -114 126 l-114 114 -26 -39z\"/>\n    <path d=\"M11313 2348 c-61 -62 -109 -119 -106 -125 6 -15 333 -19 333 -4 0 45\n-88 241 -108 241 -4 0 -57 -51 -119 -112z\"/>\n    <path d=\"M10882 2338 c-17 -17 -15 -32 7 -52 16 -14 23 -15 41 -6 31 17 24 64\n-10 68 -14 2 -31 -3 -38 -10z\"/>\n    <path d=\"M10846 2159 c-68 -81 17 -194 110 -144 89 48 56 175 -46 175 -30 0\n-44 -6 -64 -31z\"/>\n    <path d=\"M10670 2126 c-19 -23 -8 -61 18 -64 44 -7 67 32 36 62 -19 20 -38 20\n-54 2z\"/>\n    <path d=\"M11106 2127 c-21 -16 -18 -45 7 -61 37 -23 77 35 41 61 -10 7 -21 13\n-24 13 -3 0 -14 -6 -24 -13z\"/>\n    <path d=\"M10290 1970 c0 -29 43 -141 74 -195 l28 -48 116 116 c81 81 113 120\n109 131 -6 14 -29 16 -167 16 -152 0 -160 -1 -160 -20z\"/>\n    <path d=\"M11207 1978 c-3 -7 47 -66 111 -130 l116 -118 27 43 c27 44 79 177\n79 203 0 12 -28 14 -164 14 -122 0 -166 -3 -169 -12z\"/>\n    <path d=\"M10881 1901 c-14 -25 -5 -48 20 -56 27 -9 51 13 47 44 -4 34 -51 43\n-67 12z\"/>\n    <path d=\"M10662 1697 c-61 -62 -112 -115 -112 -119 0 -20 201 -108 247 -108\n10 0 13 34 13 164 0 140 -2 165 -16 170 -9 3 -16 6 -17 6 -1 0 -53 -51 -115\n-113z\"/>\n    <path d=\"M11033 1803 c-10 -3 -13 -47 -13 -169 0 -90 4 -164 8 -164 36 0 186\n61 239 98 16 10 -216 242 -234 235z\"/>\n  </g>\n</svg>`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carSvg);\n\n\n//# sourceURL=webpack://race/./src/assets/carSvg.js?");

/***/ }),

/***/ "./src/assets/flag.png":
/*!*****************************!*\
  !*** ./src/assets/flag.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/flag.png\";\n\n//# sourceURL=webpack://race/./src/assets/flag.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;