/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ var __webpack_modules__ = {
    /***/ './node_modules/css-loader/dist/cjs.js!./src/style.css':
      /*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n.container {\r\n  max-width: 1200px;\r\n  height: 100vh;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #ffffff;\r\n}\r\n\r\n.calculator {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 60px);\r\n  /* padding: 5px; */\r\n  background-color: #494848;\r\n  border-radius: 10px;\r\n  box-shadow: 5px 5px 20px rgba(38, 38, 38);\r\n  border: 1px solid black;\r\n}\r\n\r\n.calcDisplay {\r\n  grid-column: span 4;\r\n  text-align: right;\r\n  font-size: 30px;\r\n  font-weight: 100;\r\n  padding: 10px;\r\n  border: none;\r\n  height: 60px;\r\n  border-radius: 10px 10px 0 0;\r\n  background-color: #5f5f5f;\r\n  color: #f2f2f2;\r\n}\r\n\r\n.btn {\r\n  border: 1px solid gray;\r\n  height: 50px;\r\n  font-size: 22px;\r\n  color: #f2f2f2;\r\n  background-color: #959595;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn:nth-last-child(3) {\r\n  border-bottom-left-radius: 10px;\r\n}\r\n\r\n.btn:last-child {\r\n  border-bottom-right-radius: 10px;\r\n}\r\n\r\n.btn-sign {\r\n  background-color: #e28a0e;\r\n}\r\n\r\n.btn-action {\r\n  background-color: #737373;\r\n}\r\n\r\n.btn-zero {\r\n  grid-column: span 2;\r\n}\r\n`, ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://intern-practise/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}',
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/api.js':
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        eval(
          '{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += "}";\n      }\n      if (item[2]) {\n        content += "}";\n      }\n      if (item[4]) {\n        content += "}";\n      }\n      return content;\n    }).join("");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://intern-practise/./node_modules/css-loader/dist/runtime/api.js?\n}',
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/noSourceMaps.js':
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
      /***/ (module) => {
        eval(
          '{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://intern-practise/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}',
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        eval(
          '{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://intern-practise/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}',
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/insertBySelector.js':
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        eval(
          '{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://intern-practise/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}',
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/insertStyleElement.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        eval(
          '{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://intern-practise/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}',
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js':
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://intern-practise/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}',
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/styleDomAPI.js':
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        eval(
          '{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n  var needLayer = typeof obj.layer !== "undefined";\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += "}";\n  }\n  if (obj.media) {\n    css += "}";\n  }\n  if (obj.supports) {\n    css += "}";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === "undefined") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://intern-practise/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}',
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/styleTagTransform.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        eval(
          '{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://intern-practise/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}',
        );

        /***/
      },

    /***/ './src/actions.js':
      /*!************************!*\
  !*** ./src/actions.js ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appendNumber: () => (/* binding */ appendNumber),\n/* harmony export */   calculate: () => (/* binding */ calculate),\n/* harmony export */   changeSign: () => (/* binding */ changeSign),\n/* harmony export */   clearAll: () => (/* binding */ clearAll),\n/* harmony export */   getPercent: () => (/* binding */ getPercent),\n/* harmony export */   setOperation: () => (/* binding */ setOperation)\n/* harmony export */ });\n/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.js */ \"./src/state.js\");\n\r\n\r\n//manual math functions\r\nfunction plus(a, b) {\r\n  return a + b;\r\n}\r\nfunction minus(a, b) {\r\n  return a - b;\r\n}\r\nfunction multiply(a, b) {\r\n  return a * b;\r\n}\r\nfunction divide(a, b) {\r\n  if (b === 0) return 'error';\r\n  return a / b;\r\n}\r\n\r\n// calculation logic\r\nfunction appendNumber(n) {\r\n  let value = (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentValue)();\r\n\r\n  if (value === '0' && n !== '.') {\r\n    value = '';\r\n  }\r\n  if (n === '.' && value.includes('.')) return;\r\n\r\n  (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.setCurrentValue)(value + n);\r\n}\r\n\r\nfunction setOperation(op) {\r\n  const currentOp = (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.getOperation)();\r\n\r\n  if (currentOp !== null) {\r\n    calculate();\r\n  }\r\n\r\n  (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.setPreviousValue)(parseFloat((0,_state_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentValue)()));\r\n  (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.setOperationValue)(op);\r\n  (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.setCurrentValue)('0');\r\n}\r\n\r\nfunction calculate() {\r\n  const op = (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.getOperation)();\r\n  const prev = (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.getPreviousValue)();\r\n\r\n  if (op === null || prev === null) return;\r\n\r\n  const a = prev;\r\n  const b = parseFloat((0,_state_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentValue)());\r\n  let result;\r\n\r\n  switch (op) {\r\n    case '+':\r\n      result = plus(a, b);\r\n      break;\r\n    case '-':\r\n      result = minus(a, b);\r\n      break;\r\n    case '*':\r\n      result = multiply(a, b);\r\n      break;\r\n    case '/':\r\n      result = divide(a, b);\r\n      break;\r\n  }\r\n\r\n  (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.setCurrentValue)(String(result));\r\n  (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.setOperationValue)(null);\r\n  (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.setPreviousValue)(null);\r\n}\r\n\r\nfunction changeSign() {\r\n  const value = (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentValue)();\r\n  if (value === '0') return;\r\n\r\n  (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.setCurrentValue)(value.startsWith('-') ? value.slice(1) : '-' + value);\r\n}\r\n\r\nfunction getPercent() {\r\n  const value = parseFloat((0,_state_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentValue)());\r\n  (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.setCurrentValue)(String(value / 100));\r\n}\r\n\r\nfunction clearAll() {\r\n  (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.resetState)();\r\n}\r\n\n\n//# sourceURL=webpack://intern-practise/./src/actions.js?\n}",
        );

        /***/
      },

    /***/ './src/index.js':
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/ui.js");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");\n\r\n\r\n\r\ndocument.addEventListener(\'DOMContentLoaded\', () => {\r\n  (0,_ui__WEBPACK_IMPORTED_MODULE_0__.createCalculateUI)();\r\n});\r\n\n\n//# sourceURL=webpack://intern-practise/./src/index.js?\n}',
        );

        /***/
      },

    /***/ './src/state.js':
      /*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCurrentValue: () => (/* binding */ getCurrentValue),\n/* harmony export */   getOperation: () => (/* binding */ getOperation),\n/* harmony export */   getPreviousValue: () => (/* binding */ getPreviousValue),\n/* harmony export */   resetState: () => (/* binding */ resetState),\n/* harmony export */   setCurrentValue: () => (/* binding */ setCurrentValue),\n/* harmony export */   setOperationValue: () => (/* binding */ setOperationValue),\n/* harmony export */   setPreviousValue: () => (/* binding */ setPreviousValue)\n/* harmony export */ });\nlet currentValue = '0';\r\nlet previousValue = null;\r\nlet currentOperation = null;\r\n\r\nfunction getCurrentValue() {\r\n  return currentValue;\r\n}\r\n\r\nfunction setCurrentValue(value) {\r\n  currentValue = value;\r\n}\r\n\r\nfunction getPreviousValue() {\r\n  return previousValue;\r\n}\r\n\r\nfunction setPreviousValue(value) {\r\n  previousValue = value;\r\n}\r\n\r\nfunction getOperation() {\r\n  return currentOperation;\r\n}\r\n\r\nfunction setOperationValue(op) {\r\n  currentOperation = op;\r\n}\r\n\r\nfunction resetState() {\r\n  currentValue = '0';\r\n  previousValue = null;\r\n  currentOperation = null;\r\n}\r\n\n\n//# sourceURL=webpack://intern-practise/./src/state.js?\n}",
        );

        /***/
      },

    /***/ './src/style.css':
      /*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://intern-practise/./src/style.css?\n}',
        );

        /***/
      },

    /***/ './src/ui.js':
      /*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCalculateUI: () => (/* binding */ createCalculateUI)\n/* harmony export */ });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"./src/actions.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ \"./src/state.js\");\n\r\n\r\n\r\nfunction createCalculateUI() {\r\n  const container = document.querySelector('.container');\r\n  const calculator = document.createElement('div');\r\n  calculator.classList.add('calculator');\r\n  container.appendChild(calculator);\r\n\r\n  const display = document.createElement('input');\r\n  display.value = (0,_state__WEBPACK_IMPORTED_MODULE_1__.getCurrentValue)();\r\n  display.readOnly = true;\r\n  display.id = 'calc-display';\r\n  display.classList.add('calcDisplay');\r\n  calculator.appendChild(display);\r\n\r\n  function updateDisplay() {\r\n    display.value = (0,_state__WEBPACK_IMPORTED_MODULE_1__.getCurrentValue)();\r\n  }\r\n\r\n  function makeButton(text, onClick, className = '') {\r\n    const btn = document.createElement('button');\r\n    btn.textContent = text;\r\n    btn.className = `btn ${className}`;\r\n    btn.onclick = () => {\r\n      onClick();\r\n      updateDisplay();\r\n    };\r\n    calculator.appendChild(btn);\r\n  }\r\n\r\n  // Buttons create\r\n  makeButton('C', _actions__WEBPACK_IMPORTED_MODULE_0__.clearAll, 'btn-action');\r\n  makeButton('+/-', _actions__WEBPACK_IMPORTED_MODULE_0__.changeSign, 'btn-action');\r\n  makeButton('%', _actions__WEBPACK_IMPORTED_MODULE_0__.getPercent, 'btn-action');\r\n  makeButton('/', () => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.setOperation)('/'), 'btn-sign');\r\n  ['7', '8', '9'].forEach((n) => makeButton(n, () => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.appendNumber)(n)));\r\n  makeButton('×', () => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.setOperation)('*'), 'btn-sign');\r\n  ['4', '5', '6'].forEach((n) => makeButton(n, () => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.appendNumber)(n)));\r\n  makeButton('-', () => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.setOperation)('-'), 'btn-sign');\r\n  ['1', '2', '3'].forEach((n) => makeButton(n, () => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.appendNumber)(n)));\r\n  makeButton('+', () => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.setOperation)('+'), 'btn-sign');\r\n\r\n  makeButton('0', () => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.appendNumber)('0'), 'btn-zero');\r\n  makeButton('.', () => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.appendNumber)('.'));\r\n  makeButton('=', _actions__WEBPACK_IMPORTED_MODULE_0__.calculate, 'btn-sign');\r\n}\r\n\n\n//# sourceURL=webpack://intern-practise/./src/ui.js?\n}",
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module['default']
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__('./src/index.js');
  /******/
  /******/
})();
