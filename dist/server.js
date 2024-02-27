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

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_pages_Home_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/pages/Home.tsx */ \"./src/pages/Home.tsx\");\n\n\n\n\n\n\n//ポートの指定　今回は9000\nconst port = process.env.PORT || 9000;\nconst app = express__WEBPACK_IMPORTED_MODULE_1___default()();\n\n//CSSやJsも読み込ませたいのでstaticを使用\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default()[\"static\"](\".\"));\n\n//react-dom-routerでreact-kiso4を設定しているので\"/react-kiso4/\"に設定\napp.get(\"/react-kiso4/\", (req, res) => {\n  //renderToString()にてHomeコンポーネントをHTMLに変換\n  const htmlElement = react_dom_server__WEBPACK_IMPORTED_MODULE_0___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_src_pages_Home_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"]));\n  //fs.readFileSyncであらかじめ用意したhtmlファイルをtmpに代入\n  const tmp = fs__WEBPACK_IMPORTED_MODULE_3___default().readFileSync(\"./dist/index.html\", \"utf-8\");\n  //htmlファイル内の{{content}}をHomeから変換したHTMLに\n  const html = tmp.replace(\"{{content}}\", htmlElement);\n  //送信\n  res.status(200).send(html);\n});\n\n//ポート9000で開放\napp.listen(port, () => {\n  console.log(\"Server is listening on port \".concat(port));\n});\n\n//# sourceURL=webpack://react-kiso4/./server/index.js?");

/***/ }),

/***/ "./src/pages/Header.tsx":
/*!******************************!*\
  !*** ./src/pages/Header.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//Homeで定義した型をインポート\n\n//Hreaderに定義した型をあて、propsを受け取る\nconst Header = props => {\n  const [response, setResponse] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    usename: undefined,\n    age: undefined\n  });\n\n  //propsが変わるたびに更新\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setResponse(props);\n  }, [props]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"header\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"header__container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"header__title\"\n  }, \"\\u5165\\u529B\\u30C6\\u30B9\\u30C8\"), response.usename !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"header__username\"\n  }, \"name : \", response.usename), response.age !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"header__age\"\n  }, \"age : \", response.age)));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://react-kiso4/./src/pages/Header.tsx?");

/***/ }),

/***/ "./src/pages/Home.tsx":
/*!****************************!*\
  !*** ./src/pages/Home.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"./src/pages/Header.tsx\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n//オブジェクトの型定義\n\n//functionならば:React.FCは不必要\nconst Home = () => {\n  //useFormに定義した型をあてはめる\n  const {\n    register,\n    handleSubmit,\n    reset,\n    formState: {\n      errors\n    }\n  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({\n    reValidateMode: \"onSubmit\",\n    criteriaMode: \"all\"\n  });\n\n  //useStateも同じく\n  const [response, setResponse] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    usename: undefined,\n    age: undefined\n  });\n\n  //真偽値のステートを定義\n  const [boolean, setBoolean] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n\n  //useFormから入力を受け取る場合\n  const onSubmit = data => {\n    setResponse(data);\n    setBoolean(true);\n  };\n\n  //その他関数で返り値無しならvoid型 別に書かなくても問題はない\n  function formReset() {\n    reset();\n    setBoolean(false);\n    setResponse({\n      usename: undefined,\n      age: undefined\n    });\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    usename: response.usename,\n    age: response.age\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"main\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"form\", {\n    className: \"formContainer\",\n    onSubmit: handleSubmit(onSubmit)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"label\", null, \"\\u540D\\u524D\", errors.usename && errors.usename.message, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"input\", _extends({\n    type: \"text\"\n  }, register(\"usename\", {\n    required: {\n      value: true,\n      message: \" : 必須の項目です。\"\n    }\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"label\", null, \"\\u5E74\\u9F62\", errors.age && errors.age.message, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"input\", _extends({\n    type: \"text\"\n  }, register(\"age\", {\n    pattern: {\n      value: /^[A-Za-z0-9]+$/,\n      message: \" : 数字のみの入力をしてください\"\n    },\n    required: {\n      value: true,\n      message: \" : 必須の項目です。\"\n    }\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"input\", {\n    type: \"submit\",\n    value: \"\\u9001\\u4FE1\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"input\", {\n    type: \"button\",\n    value: \"\\u30EA\\u30BB\\u30C3\\u30C8\",\n    onClick: () => formReset()\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"br\", null), boolean ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", {\n    className: \"responseContainer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"h2\", {\n    className: \"responseName\"\n  }, \"\\u540D\\u524D : \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"p\", null, response.usename), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"h2\", {\n    className: \"responseBirthday\"\n  }, \"\\u5E74\\u9F62 : \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"p\", null, response.age), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"br\", null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null)));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://react-kiso4/./src/pages/Home.tsx?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("react-hook-form");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.js");
/******/ 	
/******/ })()
;