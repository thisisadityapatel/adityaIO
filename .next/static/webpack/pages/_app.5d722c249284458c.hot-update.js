"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Sidenav2.js":
/*!************************************!*\
  !*** ./src/components/Sidenav2.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Sidenav2 = ()=>{\n    _s();\n    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { category  } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"https://api.github.com/users/thisisadityapatel/repos\").then((res)=>res.json()).then((data)=>{\n            setProjects(data);\n            console.log(data);\n        }).catch((err)=>{\n            console.log(err.message);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"offcanvas offcanvas-start\",\n        tabIndex: \"-1\",\n        id: \"sidebarNavExperience\",\n        \"aria-labelledby\": \"sidebarNavExperienceLabels\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"offcanvas-header\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"offcanvas-title text-secondary animate-charcter\",\n                        id: \"offcanvasExampleLabel\",\n                        children: \"Work\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adityapatel/Desktop/adityaIO/src/components/Sidenav2.js\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        className: \"btn navExperienceBackBtn\",\n                        \"data-bs-toggle\": \"offcanvas\",\n                        \"data-bs-target\": \"#sidebarNav1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"bi bi-arrow-left\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adityapatel/Desktop/adityaIO/src/components/Sidenav2.js\",\n                            lineNumber: 29,\n                            columnNumber: 133\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/adityapatel/Desktop/adityaIO/src/components/Sidenav2.js\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adityapatel/Desktop/adityaIO/src/components/Sidenav2.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"offcanvas-body\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    style: {\n                        listStyle: \"none\"\n                    },\n                    className: \"mt-1\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            className: \"text-secondary\",\n                            children: \"Professional Experience\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adityapatel/Desktop/adityaIO/src/components/Sidenav2.js\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            style: {\n                                listStyle: \"none\",\n                                paddingLeft: \"0rem\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/experience/Scotiabank\",\n                                        className: \"btn experienceButton aboutNav\",\n                                        \"data-bs-dismiss\": \"offcanvas\",\n                                        \"data-bs-target\": \"#sidebarNavExperience\",\n                                        children: \"Scotiabank\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adityapatel/Desktop/adityaIO/src/components/Sidenav2.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/adityapatel/Desktop/adityaIO/src/components/Sidenav2.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/experience/Ieee\",\n                                        className: \"btn experienceButton aboutNav\",\n                                        \"data-bs-dismiss\": \"offcanvas\",\n                                        \"data-bs-target\": \"#sidebarNavExperience\",\n                                        children: \"IEEE TMU\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adityapatel/Desktop/adityaIO/src/components/Sidenav2.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/adityapatel/Desktop/adityaIO/src/components/Sidenav2.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/experience/Enactus\",\n                                        className: \"btn experienceButton aboutNav\",\n                                        \"data-bs-dismiss\": \"offcanvas\",\n                                        \"data-bs-target\": \"#sidebarNavExperience\",\n                                        children: \"Enactus TMU\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adityapatel/Desktop/adityaIO/src/components/Sidenav2.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/adityapatel/Desktop/adityaIO/src/components/Sidenav2.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/adityapatel/Desktop/adityaIO/src/components/Sidenav2.js\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            className: \"mt-5 text-secondary\",\n                            children: \"Projects\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adityapatel/Desktop/adityaIO/src/components/Sidenav2.js\",\n                            lineNumber: 51,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            style: {\n                                listStyle: \"none\",\n                                paddingLeft: \"0rem\"\n                            },\n                            children: projects === null || projects === void 0 ? void 0 : projects.map((proj)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: {\n                                            pathname: \"/projects/[project]\",\n                                            query: {\n                                                project: proj.id,\n                                                name: proj.name,\n                                                description: proj === null || proj === void 0 ? void 0 : proj.description,\n                                                htmllink: proj.html_url,\n                                                technologies: proj.topics\n                                            }\n                                        },\n                                        as: \"/projects/\".concat(proj.id),\n                                        className: \"btn experienceButton aboutNav\",\n                                        \"data-bs-dismiss\": \"offcanvas\",\n                                        \"data-bs-target\": \"#sidebarNavExperience\",\n                                        children: proj.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adityapatel/Desktop/adityaIO/src/components/Sidenav2.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 37\n                                    }, undefined)\n                                }, proj.id, false, {\n                                    fileName: \"/Users/adityapatel/Desktop/adityaIO/src/components/Sidenav2.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 33\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/adityapatel/Desktop/adityaIO/src/components/Sidenav2.js\",\n                            lineNumber: 52,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/adityapatel/Desktop/adityaIO/src/components/Sidenav2.js\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/adityapatel/Desktop/adityaIO/src/components/Sidenav2.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adityapatel/Desktop/adityaIO/src/components/Sidenav2.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Sidenav2, \"/Et1t6yi37AA9mMHGVgCiFO/KKY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Sidenav2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidenav2);\nvar _c;\n$RefreshReg$(_c, \"Sidenav2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkM7QUFzRU4sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2lkZW5hdjIuanM/ZDc2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuY29uc3QgU2lkZW5hdjIgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbcHJvamVjdHMsIHNldFByb2plY3RzXSA9IHVzZVN0YXRlKCk7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7Y2F0ZWdvcnl9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvdGhpc2lzYWRpdHlhcGF0ZWwvcmVwb3MnKVxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgc2V0UHJvamVjdHMoZGF0YSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2ZmY2FudmFzIG9mZmNhbnZhcy1zdGFydFwiIHRhYkluZGV4PVwiLTFcIiBpZD1cInNpZGViYXJOYXZFeHBlcmllbmNlXCIgYXJpYS1sYWJlbGxlZGJ5PVwic2lkZWJhck5hdkV4cGVyaWVuY2VMYWJlbHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2ZmY2FudmFzLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJvZmZjYW52YXMtdGl0bGUgdGV4dC1zZWNvbmRhcnkgYW5pbWF0ZS1jaGFyY3RlclwiIGlkPVwib2ZmY2FudmFzRXhhbXBsZUxhYmVsXCI+V29yazwvaDU+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIG5hdkV4cGVyaWVuY2VCYWNrQnRuXCIgZGF0YS1icy10b2dnbGU9XCJvZmZjYW52YXNcIiBkYXRhLWJzLXRhcmdldD1cIiNzaWRlYmFyTmF2MVwiPjxpIGNsYXNzTmFtZT1cImJpIGJpLWFycm93LWxlZnRcIj48L2k+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2ZmY2FudmFzLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3tsaXN0U3R5bGU6J25vbmUnfX0gY2xhc3NOYW1lPVwibXQtMVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnlcIj5Qcm9mZXNzaW9uYWwgRXhwZXJpZW5jZTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e2xpc3RTdHlsZTonbm9uZScsIHBhZGRpbmdMZWZ0OiAnMHJlbSd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayAgaHJlZj1cIi9leHBlcmllbmNlL1Njb3RpYWJhbmtcIiBjbGFzc05hbWU9XCJidG4gZXhwZXJpZW5jZUJ1dHRvbiBhYm91dE5hdlwiIGRhdGEtYnMtZGlzbWlzcz0nb2ZmY2FudmFzJyBkYXRhLWJzLXRhcmdldD0nI3NpZGViYXJOYXZFeHBlcmllbmNlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2NvdGlhYmFua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgIGhyZWY9XCIvZXhwZXJpZW5jZS9JZWVlXCIgY2xhc3NOYW1lPVwiYnRuIGV4cGVyaWVuY2VCdXR0b24gYWJvdXROYXZcIiBkYXRhLWJzLWRpc21pc3M9J29mZmNhbnZhcycgZGF0YS1icy10YXJnZXQ9JyNzaWRlYmFyTmF2RXhwZXJpZW5jZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElFRUUgVE1VXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayAgaHJlZj1cIi9leHBlcmllbmNlL0VuYWN0dXNcIiBjbGFzc05hbWU9XCJidG4gZXhwZXJpZW5jZUJ1dHRvbiBhYm91dE5hdlwiIGRhdGEtYnMtZGlzbWlzcz0nb2ZmY2FudmFzJyBkYXRhLWJzLXRhcmdldD0nI3NpZGViYXJOYXZFeHBlcmllbmNlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW5hY3R1cyBUTVVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibXQtNSB0ZXh0LXNlY29uZGFyeVwiPlByb2plY3RzPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bGlzdFN0eWxlOidub25lJywgcGFkZGluZ0xlZnQ6ICcwcmVtJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm9qZWN0cz8ubWFwKChwcm9qKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cHJvai5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL3Byb2plY3RzL1twcm9qZWN0XVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IHByb2ouaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHByb2oubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb2o/LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sbGluazogcHJvai5odG1sX3VybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVjaG5vbG9naWVzOiBwcm9qLnRvcGljcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAgYXM9e2AvcHJvamVjdHMvJHtwcm9qLmlkfWB9IGNsYXNzTmFtZT1cImJ0biBleHBlcmllbmNlQnV0dG9uIGFib3V0TmF2XCIgZGF0YS1icy1kaXNtaXNzPSdvZmZjYW52YXMnIGRhdGEtYnMtdGFyZ2V0PScjc2lkZWJhck5hdkV4cGVyaWVuY2UnPntwcm9qLm5hbWV9PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlbmF2MlxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiU2lkZW5hdjIiLCJwcm9qZWN0cyIsInNldFByb2plY3RzIiwicm91dGVyIiwiY2F0ZWdvcnkiLCJxdWVyeSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIiwibWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSIsInRhYkluZGV4IiwiaWQiLCJhcmlhLWxhYmVsbGVkYnkiLCJoNSIsImJ1dHRvbiIsInR5cGUiLCJkYXRhLWJzLXRvZ2dsZSIsImRhdGEtYnMtdGFyZ2V0IiwiaSIsInVsIiwic3R5bGUiLCJsaXN0U3R5bGUiLCJwYWRkaW5nTGVmdCIsImxpIiwiaHJlZiIsImRhdGEtYnMtZGlzbWlzcyIsIm1hcCIsInByb2oiLCJwYXRobmFtZSIsInByb2plY3QiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJodG1sbGluayIsImh0bWxfdXJsIiwidGVjaG5vbG9naWVzIiwidG9waWNzIiwiYXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Sidenav2.js\n"));

/***/ })

});