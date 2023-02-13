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
exports.id = "pages/projects/[project]";
exports.ids = ["pages/projects/[project]"];
exports.modules = {

/***/ "./src/pages/projects/[project].js":
/*!*****************************************!*\
  !*** ./src/pages/projects/[project].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Post = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { project , name , description , htmllink , technologies  } = router.query;\n    console.log(technologies);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"projectDescription container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"indProjDetails\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-center mt-4\",\n                    children: name\n                }, void 0, false, {\n                    fileName: \"/Users/adityapatel/Desktop/portfolio/src/pages/projects/[project].js\",\n                    lineNumber: 11,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h5 text-secondary\",\n                            style: {\n                                fontStyle: \"italic\"\n                            },\n                            children: \"Description\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adityapatel/Desktop/portfolio/src/pages/projects/[project].js\",\n                            lineNumber: 13,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"/Users/adityapatel/Desktop/portfolio/src/pages/projects/[project].js\",\n                            lineNumber: 14,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: description\n                        }, void 0, false, {\n                            fileName: \"/Users/adityapatel/Desktop/portfolio/src/pages/projects/[project].js\",\n                            lineNumber: 15,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/adityapatel/Desktop/portfolio/src/pages/projects/[project].js\",\n                    lineNumber: 12,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h5 text-secondary\",\n                            style: {\n                                fontStyle: \"italic\"\n                            },\n                            children: \"Technology & Concepts\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adityapatel/Desktop/portfolio/src/pages/projects/[project].js\",\n                            lineNumber: 20,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"/Users/adityapatel/Desktop/portfolio/src/pages/projects/[project].js\",\n                            lineNumber: 21,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/adityapatel/Desktop/portfolio/src/pages/projects/[project].js\",\n                            lineNumber: 22,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/adityapatel/Desktop/portfolio/src/pages/projects/[project].js\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"btn btn-secondary projectVisitLink\",\n                        href: htmllink,\n                        children: [\n                            \"Visit \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"bi bi-box-arrow-up-right ms-1\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adityapatel/Desktop/portfolio/src/pages/projects/[project].js\",\n                                lineNumber: 27,\n                                columnNumber: 93\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adityapatel/Desktop/portfolio/src/pages/projects/[project].js\",\n                        lineNumber: 27,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/adityapatel/Desktop/portfolio/src/pages/projects/[project].js\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/adityapatel/Desktop/portfolio/src/pages/projects/[project].js\",\n            lineNumber: 10,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/adityapatel/Desktop/portfolio/src/pages/projects/[project].js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvamVjdHMvW3Byb2plY3RdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3QztBQUV4QyxNQUFNQyxPQUFPLElBQU07SUFDZixNQUFNQyxTQUFTRixzREFBU0E7SUFDeEIsTUFBTSxFQUFFRyxRQUFPLEVBQUVDLEtBQUksRUFBRUMsWUFBVyxFQUFFQyxTQUFRLEVBQUVDLGFBQVksRUFBQyxHQUFHTCxPQUFPTSxLQUFLO0lBQzFFQyxRQUFRQyxHQUFHLENBQUNIO0lBRVoscUJBQ0ksOERBQUNJO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBb0JSOzs7Ozs7OEJBQ2xDLDhEQUFDTztvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNEOzRCQUFJQyxXQUFVOzRCQUFvQkUsT0FBTztnQ0FBQ0MsV0FBVzs0QkFBUTtzQ0FBRzs7Ozs7O3NDQUNqRSw4REFBQ0M7Ozs7O3NDQUNELDhEQUFDTDtzQ0FDSU47Ozs7Ozs7Ozs7Ozs4QkFHVCw4REFBQ007b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRDs0QkFBSUMsV0FBVTs0QkFBb0JFLE9BQU87Z0NBQUNDLFdBQVc7NEJBQVE7c0NBQUc7Ozs7OztzQ0FDakUsOERBQUNDOzs7OztzQ0FDRCw4REFBQ0w7Ozs7Ozs7Ozs7OzhCQUlMLDhEQUFDQTtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ0s7d0JBQUVMLFdBQVU7d0JBQXFDTSxNQUFNWjs7NEJBQVU7MENBQU0sOERBQUNhO2dDQUFFUCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3pHO0FBQ0EsaUVBQWVYLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvcGFnZXMvcHJvamVjdHMvW3Byb2plY3RdLmpzPzc1ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IFBvc3QgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBwcm9qZWN0LCBuYW1lLCBkZXNjcmlwdGlvbiwgaHRtbGxpbmssIHRlY2hub2xvZ2llc30gPSByb3V0ZXIucXVlcnk7XG4gICAgY29uc29sZS5sb2codGVjaG5vbG9naWVzKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdERlc2NyaXB0aW9uIGNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRQcm9qRGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC00XCI+e25hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtNSc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoNSB0ZXh0LXNlY29uZGFyeScgc3R5bGU9e3tmb250U3R5bGU6ICdpdGFsaWMnfX0+RGVzY3JpcHRpb248L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC01Jz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2g1IHRleHQtc2Vjb25kYXJ5JyBzdHlsZT17e2ZvbnRTdHlsZTogJ2l0YWxpYyd9fT5UZWNobm9sb2d5ICYgQ29uY2VwdHM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtNSc+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nYnRuIGJ0bi1zZWNvbmRhcnkgcHJvamVjdFZpc2l0TGluaycgaHJlZj17aHRtbGxpbmt9PlZpc2l0IDxpIGNsYXNzTmFtZT0nYmkgYmktYm94LWFycm93LXVwLXJpZ2h0IG1zLTEnPjwvaT48L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJQb3N0Iiwicm91dGVyIiwicHJvamVjdCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImh0bWxsaW5rIiwidGVjaG5vbG9naWVzIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJzdHlsZSIsImZvbnRTdHlsZSIsImhyIiwiYSIsImhyZWYiLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/projects/[project].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/projects/[project].js"));
module.exports = __webpack_exports__;

})();