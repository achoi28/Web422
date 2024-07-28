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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "__barrel_optimize__?names=Container,Nav,Navbar!=!./node_modules/react-bootstrap/esm/index.js":
/*!****************************************************************************************************!*\
  !*** __barrel_optimize__?names=Container,Nav,Navbar!=!./node_modules/react-bootstrap/esm/index.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Container: () => (/* reexport safe */ _Container__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   Nav: () => (/* reexport safe */ _Nav__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   Navbar: () => (/* reexport safe */ _Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav */ \"./node_modules/react-bootstrap/esm/Nav.js\");\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ \"./node_modules/react-bootstrap/esm/Navbar.js\");\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1Db250YWluZXIsTmF2LE5hdmJhciE9IS4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9lc20vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNrRDtBQUNaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvZXNtL2luZGV4LmpzP2NhNjkiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbnRhaW5lciB9IGZyb20gXCIuL0NvbnRhaW5lclwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIE5hdiB9IGZyb20gXCIuL05hdlwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIE5hdmJhciB9IGZyb20gXCIuL05hdmJhclwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=Container,Nav,Navbar!=!./node_modules/react-bootstrap/esm/index.js\n");

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Container,Nav,Navbar!=!react-bootstrap */ \"__barrel_optimize__?names=Container,Nav,Navbar!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _useAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useAuth */ \"./src/useAuth.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useAuth__WEBPACK_IMPORTED_MODULE_3__]);\n_useAuth__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst Layout = ({ children })=>{\n    const { logout, user } = (0,_useAuth__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n    const [authStatus, setAuthStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (false) {}\n        const handleStorageChange = ()=>{\n            setAuthStatus((0,_useAuth__WEBPACK_IMPORTED_MODULE_3__.isAuthenticated)());\n        };\n        window.addEventListener(\"storage\", handleStorageChange);\n        return ()=>{\n            window.removeEventListener(\"storage\", handleStorageChange);\n        };\n    }, [\n        user\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar, {\n                bg: \"primary\",\n                variant: \"dark\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar.Brand, {\n                            href: \"/\",\n                            children: \"Exchange Rates App\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\Web422-2\\\\src\\\\components\\\\layout.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav, {\n                            className: \"me-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav.Link, {\n                                    as: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),\n                                    href: \"/\",\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\Web422-2\\\\src\\\\components\\\\layout.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav.Link, {\n                                    as: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),\n                                    href: \"/about\",\n                                    children: \"About\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\Web422-2\\\\src\\\\components\\\\layout.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, undefined),\n                                authStatus ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav.Link, {\n                                            as: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),\n                                            href: \"/favourites\",\n                                            children: \"Favorites\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\Web422-2\\\\src\\\\components\\\\layout.js\",\n                                            lineNumber: 36,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav.Link, {\n                                            href: \"#\",\n                                            onClick: (e)=>{\n                                                e.preventDefault();\n                                                logout();\n                                            },\n                                            children: \"Sign out\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\Web422-2\\\\src\\\\components\\\\layout.js\",\n                                            lineNumber: 37,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav.Link, {\n                                            as: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),\n                                            href: \"/login\",\n                                            children: \"Login\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\Web422-2\\\\src\\\\components\\\\layout.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav.Link, {\n                                            as: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),\n                                            href: \"/register\",\n                                            children: \"Register\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\Web422-2\\\\src\\\\components\\\\layout.js\",\n                                            lineNumber: 42,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\Web422-2\\\\src\\\\components\\\\layout.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\Web422-2\\\\src\\\\components\\\\layout.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\Web422-2\\\\src\\\\components\\\\layout.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: \"main-content\",\n                    children: children\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\Web422-2\\\\src\\\\components\\\\layout.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\Web422-2\\\\src\\\\components\\\\layout.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUN0QjtBQUM0QjtBQUNIO0FBRXRELE1BQU1TLFNBQVMsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDMUIsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHTCxpREFBT0E7SUFDaEMsTUFBTSxDQUFDTSxZQUFZQyxjQUFjLEdBQUdaLCtDQUFRQSxDQUFDO0lBRTdDRCxnREFBU0EsQ0FBQztRQUNSLElBQUksS0FBa0IsRUFBYSxFQUVsQztRQUVELE1BQU1jLHNCQUFzQjtZQUMxQkQsY0FBY04seURBQWVBO1FBQy9CO1FBRUFRLE9BQU9DLGdCQUFnQixDQUFDLFdBQVdGO1FBRW5DLE9BQU87WUFDTEMsT0FBT0UsbUJBQW1CLENBQUMsV0FBV0g7UUFDeEM7SUFDRixHQUFHO1FBQUNIO0tBQUs7SUFFVCxxQkFDRTs7MEJBQ0UsOERBQUNOLCtGQUFNQTtnQkFBQ2EsSUFBRztnQkFBVUMsU0FBUTswQkFDM0IsNEVBQUNoQixrR0FBU0E7O3NDQUNSLDhEQUFDRSwrRkFBTUEsQ0FBQ2UsS0FBSzs0QkFBQ0MsTUFBSztzQ0FBSTs7Ozs7O3NDQUN2Qiw4REFBQ2pCLDRGQUFHQTs0QkFBQ2tCLFdBQVU7OzhDQUNiLDhEQUFDbEIsNEZBQUdBLENBQUNGLElBQUk7b0NBQUNxQixJQUFJckIsa0RBQUlBO29DQUFFbUIsTUFBSzs4Q0FBSTs7Ozs7OzhDQUM3Qiw4REFBQ2pCLDRGQUFHQSxDQUFDRixJQUFJO29DQUFDcUIsSUFBSXJCLGtEQUFJQTtvQ0FBRW1CLE1BQUs7OENBQVM7Ozs7OztnQ0FDakNULDJCQUNDOztzREFDRSw4REFBQ1IsNEZBQUdBLENBQUNGLElBQUk7NENBQUNxQixJQUFJckIsa0RBQUlBOzRDQUFFbUIsTUFBSztzREFBYzs7Ozs7O3NEQUN2Qyw4REFBQ2pCLDRGQUFHQSxDQUFDRixJQUFJOzRDQUFDbUIsTUFBSzs0Q0FBSUcsU0FBUyxDQUFDQztnREFBUUEsRUFBRUMsY0FBYztnREFBSWhCOzRDQUFVO3NEQUFHOzs7Ozs7O2lFQUd4RTs7c0RBQ0UsOERBQUNOLDRGQUFHQSxDQUFDRixJQUFJOzRDQUFDcUIsSUFBSXJCLGtEQUFJQTs0Q0FBRW1CLE1BQUs7c0RBQVM7Ozs7OztzREFDbEMsOERBQUNqQiw0RkFBR0EsQ0FBQ0YsSUFBSTs0Q0FBQ3FCLElBQUlyQixrREFBSUE7NENBQUVtQixNQUFLO3NEQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU0vQyw4REFBQ2xCLGtHQUFTQTswQkFDUiw0RUFBQ3dCO29CQUFLTCxXQUFVOzhCQUNiYjs7Ozs7Ozs7Ozs7OztBQUtYO0FBRUEsaUVBQWVELE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvbGF5b3V0LmpzP2IwMTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgTmF2LCBOYXZiYXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyB1c2VBdXRoLCBpc0F1dGhlbnRpY2F0ZWQgfSBmcm9tICcuLi91c2VBdXRoJztcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCB7IGxvZ291dCwgdXNlciB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IFthdXRoU3RhdHVzLCBzZXRBdXRoU3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBzZXRBdXRoU3RhdHVzKGlzQXV0aGVudGljYXRlZCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdG9yYWdlQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICBzZXRBdXRoU3RhdHVzKGlzQXV0aGVudGljYXRlZCgpKTtcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCBoYW5kbGVTdG9yYWdlQ2hhbmdlKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIGhhbmRsZVN0b3JhZ2VDaGFuZ2UpO1xyXG4gICAgfTtcclxuICB9LCBbdXNlcl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5hdmJhciBiZz1cInByaW1hcnlcIiB2YXJpYW50PVwiZGFya1wiPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8TmF2YmFyLkJyYW5kIGhyZWY9XCIvXCI+RXhjaGFuZ2UgUmF0ZXMgQXBwPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1lLWF1dG9cIj5cclxuICAgICAgICAgICAgPE5hdi5MaW5rIGFzPXtMaW5rfSBocmVmPVwiL1wiPkhvbWU8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICA8TmF2LkxpbmsgYXM9e0xpbmt9IGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgIHthdXRoU3RhdHVzID8gKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8TmF2LkxpbmsgYXM9e0xpbmt9IGhyZWY9XCIvZmF2b3VyaXRlc1wiPkZhdm9yaXRlczwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IGxvZ291dCgpOyB9fT5TaWduIG91dDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxOYXYuTGluayBhcz17TGlua30gaHJlZj1cIi9sb2dpblwiPkxvZ2luPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgIDxOYXYuTGluayBhcz17TGlua30gaHJlZj1cIi9yZWdpc3RlclwiPlJlZ2lzdGVyPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L05hdmJhcj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnRcIj5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiQ29udGFpbmVyIiwiTmF2IiwiTmF2YmFyIiwidXNlQXV0aCIsImlzQXV0aGVudGljYXRlZCIsIkxheW91dCIsImNoaWxkcmVuIiwibG9nb3V0IiwidXNlciIsImF1dGhTdGF0dXMiLCJzZXRBdXRoU3RhdHVzIiwiaGFuZGxlU3RvcmFnZUNoYW5nZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYmciLCJ2YXJpYW50IiwiQnJhbmQiLCJocmVmIiwiY2xhc3NOYW1lIiwiYXMiLCJvbkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/layout.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/layout */ \"./src/components/layout.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout__WEBPACK_IMPORTED_MODULE_3__]);\n_components_layout__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\Web422-2\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 8,\n                columnNumber: 10\n            }, this),\n            \";\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\Web422-2\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDaEI7QUFDVztBQUUxQixTQUFTQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELHFCQUNFLDhEQUFDSCwwREFBTUE7OzBCQUNGLDhEQUFDRTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7WUFBSTs7Ozs7OztBQUdyQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IExheW91dCBmcm9tICdAL2NvbXBvbmVudHMvbGF5b3V0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4oXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/useAtom.js":
/*!************************!*\
  !*** ./src/useAtom.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isAuthenticatedAtom: () => (/* binding */ isAuthenticatedAtom),\n/* harmony export */   userAtom: () => (/* binding */ userAtom)\n/* harmony export */ });\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jotai */ \"jotai\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);\njotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// useatoms.js\n\nconst userAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(null);\nconst isAuthenticatedAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)((get)=>!!get(userAtom));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXNlQXRvbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxjQUFjO0FBQ2U7QUFFdEIsTUFBTUMsV0FBV0QsMkNBQUlBLENBQUMsTUFBTTtBQUM1QixNQUFNRSxzQkFBc0JGLDJDQUFJQSxDQUFDLENBQUNHLE1BQVEsQ0FBQyxDQUFDQSxJQUFJRixXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy91c2VBdG9tLmpzPzE2OGQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdXNlYXRvbXMuanNcclxuaW1wb3J0IHsgYXRvbSB9IGZyb20gJ2pvdGFpJztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyQXRvbSA9IGF0b20obnVsbCk7XHJcbmV4cG9ydCBjb25zdCBpc0F1dGhlbnRpY2F0ZWRBdG9tID0gYXRvbSgoZ2V0KSA9PiAhIWdldCh1c2VyQXRvbSkpO1xyXG4iXSwibmFtZXMiOlsiYXRvbSIsInVzZXJBdG9tIiwiaXNBdXRoZW50aWNhdGVkQXRvbSIsImdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/useAtom.js\n");

/***/ }),

/***/ "./src/useAuth.js":
/*!************************!*\
  !*** ./src/useAuth.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isAuthenticated: () => (/* binding */ isAuthenticated),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jotai */ \"jotai\");\n/* harmony import */ var _useAtom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useAtom */ \"./src/useAtom.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ \"jwt-decode\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__, _useAtom__WEBPACK_IMPORTED_MODULE_1__, jwt_decode__WEBPACK_IMPORTED_MODULE_2__]);\n([jotai__WEBPACK_IMPORTED_MODULE_0__, _useAtom__WEBPACK_IMPORTED_MODULE_1__, jwt_decode__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst isBrowser = \"undefined\" !== \"undefined\";\nconst setToken = (token)=>{\n    if (isBrowser) {\n        localStorage.setItem(\"access_token\", token);\n    }\n};\nconst getToken = ()=>{\n    if (isBrowser) {\n        return localStorage.getItem(\"access_token\");\n    }\n    return null;\n};\nconst readToken = ()=>{\n    try {\n        const token = getToken();\n        return token ? (0,jwt_decode__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(token) : null;\n    } catch (err) {\n        console.error(\"Error decoding token:\", err);\n        return null;\n    }\n};\nconst removeToken = ()=>{\n    if (isBrowser) {\n        localStorage.removeItem(\"access_token\");\n    }\n};\nconst isAuthenticated = ()=>{\n    const token = getToken();\n    return token ? true : false;\n};\nconst useAuth = ()=>{\n    const [user, setUser] = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.useAtom)(_useAtom__WEBPACK_IMPORTED_MODULE_1__.userAtom);\n    const [authStatus, setAuthStatus] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(isAuthenticated());\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        setAuthStatus(isAuthenticated());\n    }, [\n        user\n    ]);\n    const login = async ({ email, password })=>{\n        const response = await fetch(\"/api/auth\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                email,\n                password\n            })\n        });\n        if (response.ok) {\n            const result = await response.json();\n            setToken(result.token);\n            setUser(result.user); // Assuming the response contains user data\n            setAuthStatus(true);\n            router.push(\"/\"); // Redirect to home page\n        } else {\n            throw new Error(\"Invalid credentials\");\n        }\n    };\n    const logout = ()=>{\n        setUser(null);\n        removeToken();\n        setAuthStatus(false);\n        router.push(\"/login\"); // Redirect to login page after logout\n    };\n    return {\n        user,\n        login,\n        logout,\n        isAuthenticated: authStatus\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXNlQXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDSztBQUNGO0FBQ0s7QUFDSTtBQUU1QyxNQUFNTSxZQUFZLGdCQUFrQjtBQUVwQyxNQUFNQyxXQUFXLENBQUNDO0lBQ2hCLElBQUlGLFdBQVc7UUFDYkcsYUFBYUMsT0FBTyxDQUFDLGdCQUFnQkY7SUFDdkM7QUFDRjtBQUVBLE1BQU1HLFdBQVc7SUFDZixJQUFJTCxXQUFXO1FBQ2IsT0FBT0csYUFBYUcsT0FBTyxDQUFDO0lBQzlCO0lBQ0EsT0FBTztBQUNUO0FBRUEsTUFBTUMsWUFBWTtJQUNoQixJQUFJO1FBQ0YsTUFBTUwsUUFBUUc7UUFDZCxPQUFPSCxRQUFRTixzREFBU0EsQ0FBQ00sU0FBUztJQUNwQyxFQUFFLE9BQU9NLEtBQUs7UUFDWkMsUUFBUUMsS0FBSyxDQUFDLHlCQUF5QkY7UUFDdkMsT0FBTztJQUNUO0FBQ0Y7QUFFQSxNQUFNRyxjQUFjO0lBQ2xCLElBQUlYLFdBQVc7UUFDYkcsYUFBYVMsVUFBVSxDQUFDO0lBQzFCO0FBQ0Y7QUFFTyxNQUFNQyxrQkFBa0I7SUFDN0IsTUFBTVgsUUFBUUc7SUFDZCxPQUFPSCxRQUFRLE9BQU87QUFDeEIsRUFBRTtBQUVLLE1BQU1ZLFVBQVU7SUFDckIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUd0Qiw4Q0FBT0EsQ0FBQ0MsOENBQVFBO0lBQ3hDLE1BQU0sQ0FBQ3NCLFlBQVlDLGNBQWMsR0FBR25CLCtDQUFRQSxDQUFDYztJQUM3QyxNQUFNTSxTQUFTdEIsc0RBQVNBO0lBRXhCQyxnREFBU0EsQ0FBQztRQUNSb0IsY0FBY0w7SUFDaEIsR0FBRztRQUFDRTtLQUFLO0lBRVQsTUFBTUssUUFBUSxPQUFPLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFO1FBQ3RDLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxhQUFhO1lBQ3hDQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFBRVI7Z0JBQU9DO1lBQVM7UUFDekM7UUFFQSxJQUFJQyxTQUFTTyxFQUFFLEVBQUU7WUFDZixNQUFNQyxTQUFTLE1BQU1SLFNBQVNTLElBQUk7WUFDbEMvQixTQUFTOEIsT0FBTzdCLEtBQUs7WUFDckJjLFFBQVFlLE9BQU9oQixJQUFJLEdBQUcsMkNBQTJDO1lBQ2pFRyxjQUFjO1lBQ2RDLE9BQU9jLElBQUksQ0FBQyxNQUFNLHdCQUF3QjtRQUM1QyxPQUFPO1lBQ0wsTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO0lBQ0Y7SUFFQSxNQUFNQyxTQUFTO1FBQ2JuQixRQUFRO1FBQ1JMO1FBQ0FPLGNBQWM7UUFDZEMsT0FBT2MsSUFBSSxDQUFDLFdBQVcsc0NBQXNDO0lBQy9EO0lBRUEsT0FBTztRQUNMbEI7UUFDQUs7UUFDQWU7UUFDQXRCLGlCQUFpQkk7SUFDbkI7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy91c2VBdXRoLmpzPzJhY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQXRvbSB9IGZyb20gJ2pvdGFpJztcclxuaW1wb3J0IHsgdXNlckF0b20gfSBmcm9tICcuL3VzZUF0b20nO1xyXG5pbXBvcnQgand0RGVjb2RlIGZyb20gJ2p3dC1kZWNvZGUnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcclxuXHJcbmNvbnN0IHNldFRva2VuID0gKHRva2VuKSA9PiB7XHJcbiAgaWYgKGlzQnJvd3Nlcikge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjY2Vzc190b2tlbicsIHRva2VuKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRUb2tlbiA9ICgpID0+IHtcclxuICBpZiAoaXNCcm93c2VyKSB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpO1xyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmNvbnN0IHJlYWRUb2tlbiA9ICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdG9rZW4gPSBnZXRUb2tlbigpO1xyXG4gICAgcmV0dXJuIHRva2VuID8gand0RGVjb2RlKHRva2VuKSA6IG51bGw7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWNvZGluZyB0b2tlbjonLCBlcnIpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgcmVtb3ZlVG9rZW4gPSAoKSA9PiB7XHJcbiAgaWYgKGlzQnJvd3Nlcikge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FjY2Vzc190b2tlbicpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9rZW4gPSBnZXRUb2tlbigpO1xyXG4gIHJldHVybiB0b2tlbiA/IHRydWUgOiBmYWxzZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZUF0b20odXNlckF0b20pO1xyXG4gIGNvbnN0IFthdXRoU3RhdHVzLCBzZXRBdXRoU3RhdHVzXSA9IHVzZVN0YXRlKGlzQXV0aGVudGljYXRlZCgpKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEF1dGhTdGF0dXMoaXNBdXRoZW50aWNhdGVkKCkpO1xyXG4gIH0sIFt1c2VyXSk7XHJcblxyXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKHsgZW1haWwsIHBhc3N3b3JkIH0pID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvYXV0aCcsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSwgLy8gQ29ycmVjdCBwYXlsb2FkIHN0cnVjdHVyZVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgc2V0VG9rZW4ocmVzdWx0LnRva2VuKTtcclxuICAgICAgc2V0VXNlcihyZXN1bHQudXNlcik7IC8vIEFzc3VtaW5nIHRoZSByZXNwb25zZSBjb250YWlucyB1c2VyIGRhdGFcclxuICAgICAgc2V0QXV0aFN0YXR1cyh0cnVlKTtcclxuICAgICAgcm91dGVyLnB1c2goJy8nKTsgLy8gUmVkaXJlY3QgdG8gaG9tZSBwYWdlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY3JlZGVudGlhbHMnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBzZXRVc2VyKG51bGwpO1xyXG4gICAgcmVtb3ZlVG9rZW4oKTtcclxuICAgIHNldEF1dGhTdGF0dXMoZmFsc2UpO1xyXG4gICAgcm91dGVyLnB1c2goJy9sb2dpbicpOyAvLyBSZWRpcmVjdCB0byBsb2dpbiBwYWdlIGFmdGVyIGxvZ291dFxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB1c2VyLFxyXG4gICAgbG9naW4sXHJcbiAgICBsb2dvdXQsXHJcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6IGF1dGhTdGF0dXMsXHJcbiAgfTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZUF0b20iLCJ1c2VyQXRvbSIsImp3dERlY29kZSIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaXNCcm93c2VyIiwic2V0VG9rZW4iLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRUb2tlbiIsImdldEl0ZW0iLCJyZWFkVG9rZW4iLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJyZW1vdmVUb2tlbiIsInJlbW92ZUl0ZW0iLCJpc0F1dGhlbnRpY2F0ZWQiLCJ1c2VBdXRoIiwidXNlciIsInNldFVzZXIiLCJhdXRoU3RhdHVzIiwic2V0QXV0aFN0YXR1cyIsInJvdXRlciIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsInJlc3VsdCIsImpzb24iLCJwdXNoIiwiRXJyb3IiLCJsb2dvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/useAuth.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@restart/hooks/useBreakpoint":
/*!***********************************************!*\
  !*** external "@restart/hooks/useBreakpoint" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useBreakpoint");

/***/ }),

/***/ "@restart/hooks/useEventCallback":
/*!**************************************************!*\
  !*** external "@restart/hooks/useEventCallback" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useEventCallback");

/***/ }),

/***/ "@restart/hooks/useMergedRefs":
/*!***********************************************!*\
  !*** external "@restart/hooks/useMergedRefs" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useMergedRefs");

/***/ }),

/***/ "@restart/ui/Anchor":
/*!*************************************!*\
  !*** external "@restart/ui/Anchor" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/Anchor");

/***/ }),

/***/ "@restart/ui/Modal":
/*!************************************!*\
  !*** external "@restart/ui/Modal" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/Modal");

/***/ }),

/***/ "@restart/ui/ModalManager":
/*!*******************************************!*\
  !*** external "@restart/ui/ModalManager" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/ModalManager");

/***/ }),

/***/ "@restart/ui/Nav":
/*!**********************************!*\
  !*** external "@restart/ui/Nav" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/Nav");

/***/ }),

/***/ "@restart/ui/NavItem":
/*!**************************************!*\
  !*** external "@restart/ui/NavItem" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/NavItem");

/***/ }),

/***/ "@restart/ui/SelectableContext":
/*!************************************************!*\
  !*** external "@restart/ui/SelectableContext" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/SelectableContext");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ "dom-helpers/addClass":
/*!***************************************!*\
  !*** external "dom-helpers/addClass" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/addClass");

/***/ }),

/***/ "dom-helpers/css":
/*!**********************************!*\
  !*** external "dom-helpers/css" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/css");

/***/ }),

/***/ "dom-helpers/querySelectorAll":
/*!***********************************************!*\
  !*** external "dom-helpers/querySelectorAll" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/querySelectorAll");

/***/ }),

/***/ "dom-helpers/removeClass":
/*!******************************************!*\
  !*** external "dom-helpers/removeClass" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/removeClass");

/***/ }),

/***/ "dom-helpers/transitionEnd":
/*!********************************************!*\
  !*** external "dom-helpers/transitionEnd" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/transitionEnd");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-extra/lib/all":
/*!*******************************************!*\
  !*** external "prop-types-extra/lib/all" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types-extra/lib/all");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-transition-group/Transition":
/*!****************************************************!*\
  !*** external "react-transition-group/Transition" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group/Transition");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "uncontrollable":
/*!*********************************!*\
  !*** external "uncontrollable" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("uncontrollable");

/***/ }),

/***/ "jotai":
/*!************************!*\
  !*** external "jotai" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("jotai");;

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = import("jwt-decode");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-bootstrap","vendor-chunks/bootstrap"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();