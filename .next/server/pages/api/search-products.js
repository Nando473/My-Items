"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/search-products";
exports.ids = ["pages/api/search-products"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/search-products.js":
/*!**************************************!*\
  !*** ./pages/api/search-products.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../prisma/client */ \"(api)/./prisma/client.js\");\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            // Lógica para buscar productos en la tabla \"product\"\n            const products = await _prisma_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].product.findMany();\n            res.status(200).json({\n                products\n            });\n        } catch (error) {\n            res.status(500).json({\n                error: \"Error al buscar productos\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            error: \"M\\xe9todo no permitido\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VhcmNoLXByb2R1Y3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlDO0FBRTFCLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUM1QyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssT0FBTztRQUN4QixJQUFJO1lBQ0YscURBQXFEO1lBQ3JELE1BQU1DLFdBQVcsTUFBTUwsOERBQWMsQ0FBQ08sUUFBUTtZQUU5Q0osSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUo7WUFBUztRQUNsQyxFQUFFLE9BQU9LLE9BQU87WUFDZFAsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUE0QjtRQUM1RDtJQUNGLE9BQU87UUFDTFAsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXNCO0lBQ3REO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXNlLW15aXRlbXMvLi9wYWdlcy9hcGkvc2VhcmNoLXByb2R1Y3RzLmpzPzdiMWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi9wcmlzbWEvY2xpZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIEzDs2dpY2EgcGFyYSBidXNjYXIgcHJvZHVjdG9zIGVuIGxhIHRhYmxhIFwicHJvZHVjdFwiXHJcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgcHJpc21hLnByb2R1Y3QuZmluZE1hbnkoKTtcclxuXHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcHJvZHVjdHMgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnRXJyb3IgYWwgYnVzY2FyIHByb2R1Y3RvcycgfSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6ICdNw6l0b2RvIG5vIHBlcm1pdGlkbycgfSk7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJwcm9kdWN0cyIsInByb2R1Y3QiLCJmaW5kTWFueSIsInN0YXR1cyIsImpzb24iLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/search-products.js\n");

/***/ }),

/***/ "(api)/./prisma/client.js":
/*!**************************!*\
  !*** ./prisma/client.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wcmlzbWEvY2xpZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxJQUFJQztBQUVKLElBQUlDLEtBQXlCLEVBQWMsRUFFMUMsTUFBTTtJQUNMLElBQUksQ0FBQ0MsT0FBT0YsTUFBTSxFQUFFO1FBQ2xCRSxPQUFPRixNQUFNLEdBQUcsSUFBSUQsd0RBQVlBO0lBQ2xDO0lBQ0FDLFNBQVNFLE9BQU9GLE1BQU07QUFDeEI7QUFFQSxpRUFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jhc2UtbXlpdGVtcy8uL3ByaXNtYS9jbGllbnQuanM/YjE2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcblxyXG5sZXQgcHJpc21hO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcclxuICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcbn0gZWxzZSB7XHJcbiAgaWYgKCFnbG9iYWwucHJpc21hKSB7XHJcbiAgICBnbG9iYWwucHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG4gIH1cclxuICBwcmlzbWEgPSBnbG9iYWwucHJpc21hO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsInByb2Nlc3MiLCJnbG9iYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./prisma/client.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/search-products.js"));
module.exports = __webpack_exports__;

})();