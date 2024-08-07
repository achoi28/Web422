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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Container,Nav,Navbar!=!react-bootstrap */ \"__barrel_optimize__?names=Container,Nav,Navbar!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _useAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useAuth */ \"./src/useAuth.js\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search */ \"./src/components/search.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useAuth__WEBPACK_IMPORTED_MODULE_3__, _search__WEBPACK_IMPORTED_MODULE_4__]);\n([_useAuth__WEBPACK_IMPORTED_MODULE_3__, _search__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nconst Layout = ({ children })=>{\n    const { logout, user, isAuthenticated } = (0,_useAuth__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n    const [authStatus, setAuthStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(isAuthenticated);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (false) {}\n        const handleStorageChange = ()=>{\n            setAuthStatus(isAuthenticated);\n        };\n        window.addEventListener(\"storage\", handleStorageChange);\n        return ()=>{\n            window.removeEventListener(\"storage\", handleStorageChange);\n        };\n    }, [\n        isAuthenticated\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar, {\n                className: \"navbar\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar.Brand, {\n                            href: \"/\",\n                            children: \"Exchange Rates App\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\layout.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar.Toggle, {\n                            \"aria-controls\": \"basic-navbar-nav\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\layout.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar.Collapse, {\n                            id: \"basic-navbar-nav\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Nav, {\n                                    className: \"me-auto\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {\n                                            icon: \"home\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\layout.js\",\n                                            lineNumber: 35,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Nav.Link, {\n                                            as: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),\n                                            href: \"/\",\n                                            children: \"Home\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\layout.js\",\n                                            lineNumber: 37,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Nav.Link, {\n                                            as: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),\n                                            href: \"/about\",\n                                            children: \"About\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\layout.js\",\n                                            lineNumber: 38,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        authStatus ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {\n                                                    icon: \"favorite\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\layout.js\",\n                                                    lineNumber: 42,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Nav.Link, {\n                                                    as: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),\n                                                    href: \"/favourites\",\n                                                    children: \"Favorites\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\layout.js\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Nav.Link, {\n                                                    href: \"#\",\n                                                    onClick: (e)=>{\n                                                        e.preventDefault();\n                                                        logout();\n                                                        alert(\"you are signed out\");\n                                                    },\n                                                    children: \"Sign out\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\layout.js\",\n                                                    lineNumber: 44,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Nav.Link, {\n                                                    as: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),\n                                                    href: \"/login\",\n                                                    children: \"Login\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\layout.js\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Nav.Link, {\n                                                    as: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),\n                                                    href: \"/register\",\n                                                    children: \"Register\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\layout.js\",\n                                                    lineNumber: 50,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\layout.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Nav, {\n                                    className: \"ms-auto\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {\n                                            icon: \"fa-solid fa-magnifying-glass\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\layout.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_search__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\layout.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\layout.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\layout.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\layout.js\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\layout.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: \"main-content\",\n                    children: children\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\layout.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\layout.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUN0QjtBQUM0QjtBQUNwQjtBQUNQO0FBQ21DO0FBQ2pFLE1BQU1VLFNBQVMsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDMUIsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsZUFBZSxFQUFFLEdBQUdQLGlEQUFPQTtJQUNqRCxNQUFNLENBQUNRLFlBQVlDLGNBQWMsR0FBR2QsK0NBQVFBLENBQUNZO0lBRTdDYixnREFBU0EsQ0FBQztRQUNSLElBQUksS0FBa0IsRUFBYSxFQUVsQztRQUVELE1BQU1nQixzQkFBc0I7WUFDMUJELGNBQWNGO1FBQ2hCO1FBRUFJLE9BQU9DLGdCQUFnQixDQUFDLFdBQVdGO1FBRW5DLE9BQU87WUFDTEMsT0FBT0UsbUJBQW1CLENBQUMsV0FBV0g7UUFDeEM7SUFDRixHQUFHO1FBQUNIO0tBQWdCO0lBRXBCLHFCQUNFOzswQkFDRSw4REFBQ1IsK0ZBQU1BO2dCQUFDZSxXQUFVOzBCQUNsQiw0RUFBQ2pCLGtHQUFTQTs7c0NBQ04sOERBQUNFLCtGQUFNQSxDQUFDZ0IsS0FBSzs0QkFBQ0MsTUFBSztzQ0FBSTs7Ozs7O3NDQUN2Qiw4REFBQ2pCLCtGQUFNQSxDQUFDa0IsTUFBTTs0QkFBQ0MsaUJBQWM7Ozs7OztzQ0FDN0IsOERBQUNuQiwrRkFBTUEsQ0FBQ29CLFFBQVE7NEJBQUNDLElBQUc7OzhDQUNsQiw4REFBQ3RCLDRGQUFHQTtvQ0FBQ2dCLFdBQVU7O3NEQUNmLDhEQUFDWiwyRUFBZUE7NENBQUNtQixNQUFLOzs7Ozs7c0RBRXBCLDhEQUFDdkIsNEZBQUdBLENBQUNGLElBQUk7NENBQUMwQixJQUFJMUIsa0RBQUlBOzRDQUFFb0IsTUFBSztzREFBSTs7Ozs7O3NEQUM3Qiw4REFBQ2xCLDRGQUFHQSxDQUFDRixJQUFJOzRDQUFDMEIsSUFBSTFCLGtEQUFJQTs0Q0FBRW9CLE1BQUs7c0RBQVM7Ozs7Ozt3Q0FDakNSLDJCQUNDOzs4REFFRSw4REFBQ04sMkVBQWVBO29EQUFDbUIsTUFBSzs7Ozs7OzhEQUN0Qiw4REFBQ3ZCLDRGQUFHQSxDQUFDRixJQUFJO29EQUFDMEIsSUFBSTFCLGtEQUFJQTtvREFBRW9CLE1BQUs7OERBQWM7Ozs7Ozs4REFDdkMsOERBQUNsQiw0RkFBR0EsQ0FBQ0YsSUFBSTtvREFBQ29CLE1BQUs7b0RBQUlPLFNBQVMsQ0FBQ0M7d0RBQVFBLEVBQUVDLGNBQWM7d0RBQUlwQjt3REFBVXFCLE1BQU07b0RBQXNCOzhEQUFHOzs7Ozs7O3lFQUdwRzs7OERBQ0UsOERBQUM1Qiw0RkFBR0EsQ0FBQ0YsSUFBSTtvREFBQzBCLElBQUkxQixrREFBSUE7b0RBQUVvQixNQUFLOzhEQUFTOzs7Ozs7OERBRWxDLDhEQUFDbEIsNEZBQUdBLENBQUNGLElBQUk7b0RBQUMwQixJQUFJMUIsa0RBQUlBO29EQUFFb0IsTUFBSzs4REFBWTs7Ozs7Ozs7Ozs7Ozs7OENBSTNDLDhEQUFDbEIsNEZBQUdBO29DQUFDZ0IsV0FBVTs7c0RBQ2YsOERBQUNaLDJFQUFlQTs0Q0FBQ21CLE1BQUs7Ozs7OztzREFDcEIsOERBQUNwQiwrQ0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS2YsOERBQUNKLGtHQUFTQTswQkFDUiw0RUFBQzhCO29CQUFLYixXQUFVOzhCQUNiVjs7Ozs7Ozs7Ozs7OztBQUtYO0FBRUEsaUVBQWVELE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvbGF5b3V0LmpzP2IwMTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgTmF2LCBOYXZiYXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vdXNlQXV0aCc7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9zZWFyY2gnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgeyBsb2dvdXQsIHVzZXIsIGlzQXV0aGVudGljYXRlZCB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IFthdXRoU3RhdHVzLCBzZXRBdXRoU3RhdHVzXSA9IHVzZVN0YXRlKGlzQXV0aGVudGljYXRlZCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgc2V0QXV0aFN0YXR1cyhpc0F1dGhlbnRpY2F0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN0b3JhZ2VDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgIHNldEF1dGhTdGF0dXMoaXNBdXRoZW50aWNhdGVkKTtcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCBoYW5kbGVTdG9yYWdlQ2hhbmdlKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIGhhbmRsZVN0b3JhZ2VDaGFuZ2UpO1xyXG4gICAgfTtcclxuICB9LCBbaXNBdXRoZW50aWNhdGVkXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TmF2YmFyIGNsYXNzTmFtZT0nbmF2YmFyJz5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9cIj5FeGNoYW5nZSBSYXRlcyBBcHA8L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgLz5cclxuICAgICAgICAgIDxOYXZiYXIuQ29sbGFwc2UgaWQ9XCJiYXNpYy1uYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWUtYXV0b1wiPlxyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJob21lXCIgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPE5hdi5MaW5rIGFzPXtMaW5rfSBocmVmPVwiL1wiPkhvbWU8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgIDxOYXYuTGluayBhcz17TGlua30gaHJlZj1cIi9hYm91dFwiPkFib3V0PC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICB7YXV0aFN0YXR1cyA/IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiZmF2b3JpdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgYXM9e0xpbmt9IGhyZWY9XCIvZmF2b3VyaXRlc1wiPkZhdm9yaXRlczwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgbG9nb3V0KCk7IGFsZXJ0KCd5b3UgYXJlIHNpZ25lZCBvdXQnKSB9fT5TaWduIG91dDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGFzPXtMaW5rfSBocmVmPVwiL2xvZ2luXCI+TG9naW48L05hdi5MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGFzPXtMaW5rfSBocmVmPVwiL3JlZ2lzdGVyXCI+UmVnaXN0ZXI8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXMtYXV0b1wiPlxyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJmYS1zb2xpZCBmYS1tYWduaWZ5aW5nLWdsYXNzXCIgLz5cclxuICAgICAgICAgICAgICA8U2VhcmNoIC8+XHJcbiAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvTmF2YmFyPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsIkNvbnRhaW5lciIsIk5hdiIsIk5hdmJhciIsInVzZUF1dGgiLCJTZWFyY2giLCJGb250QXdlc29tZUljb24iLCJMYXlvdXQiLCJjaGlsZHJlbiIsImxvZ291dCIsInVzZXIiLCJpc0F1dGhlbnRpY2F0ZWQiLCJhdXRoU3RhdHVzIiwic2V0QXV0aFN0YXR1cyIsImhhbmRsZVN0b3JhZ2VDaGFuZ2UiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsYXNzTmFtZSIsIkJyYW5kIiwiaHJlZiIsIlRvZ2dsZSIsImFyaWEtY29udHJvbHMiLCJDb2xsYXBzZSIsImlkIiwiaWNvbiIsImFzIiwib25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/layout.js\n");

/***/ }),

/***/ "./src/components/search.js":
/*!**********************************!*\
  !*** ./src/components/search.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__]);\naxios__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// components/SearchCrypto.js\n\n\n\n\nconst Search = ()=>{\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSearch = async (e)=>{\n        e.preventDefault();\n        setError(null);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/crypto\");\n            const cryptos = response.data.data;\n            const crypto = cryptos.find((c)=>c.name.toLowerCase() === query.toLowerCase());\n            if (crypto) {\n                router.push(`/crypto/${crypto.id}`);\n            } else {\n                setError(\"Cryptocurrency not found\");\n            }\n        } catch (err) {\n            console.error(\"Error searching for cryptocurrency:\", err);\n            setError(\"An error occurred while searching for the cryptocurrency\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"search-container\",\n                onSubmit: handleSearch,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"search\",\n                        className: \"search-input\",\n                        placeholder: \"Search for a cryptocurrency\",\n                        value: query,\n                        onChange: (e)=>setQuery(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\search.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"search-btn\",\n                        type: \"submit\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fas fa-search\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\search.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\search.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\search.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: error\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\search.js\",\n                lineNumber: 55,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\search.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWFyY2guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2QkFBNkI7O0FBQ0k7QUFDTztBQUNkO0FBSTFCLE1BQU1HLFNBQVM7SUFDYixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU1RLFNBQVNQLHNEQUFTQTtJQUt4QixNQUFNUSxlQUFlLE9BQU9DO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2hCSixTQUFTO1FBRVQsSUFBSTtZQUNGLE1BQU1LLFdBQVcsTUFBTVYsaURBQVMsQ0FBQztZQUNqQyxNQUFNWSxVQUFVRixTQUFTRyxJQUFJLENBQUNBLElBQUk7WUFFbEMsTUFBTUMsU0FBU0YsUUFBUUcsSUFBSSxDQUFDLENBQUNDLElBQU1BLEVBQUVDLElBQUksQ0FBQ0MsV0FBVyxPQUFPaEIsTUFBTWdCLFdBQVc7WUFFN0UsSUFBSUosUUFBUTtnQkFDVlIsT0FBT2EsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFTCxPQUFPTSxFQUFFLENBQUMsQ0FBQztZQUNwQyxPQUFPO2dCQUNMZixTQUFTO1lBQ1g7UUFDRixFQUFFLE9BQU9nQixLQUFLO1lBQ1pDLFFBQVFsQixLQUFLLENBQUMsdUNBQXVDaUI7WUFDckRoQixTQUFTO1FBQ1g7SUFDRjtJQUlBLHFCQUNFLDhEQUFDa0I7OzBCQUNDLDhEQUFDQztnQkFBS0MsV0FBVTtnQkFBbUJDLFVBQVVuQjs7a0NBQzNDLDhEQUFDb0I7d0JBQ0NDLE1BQUs7d0JBQ0xYLE1BQUs7d0JBQ0xRLFdBQVU7d0JBQ1ZJLGFBQVk7d0JBQ1pDLE9BQU81Qjt3QkFDUDZCLFVBQVUsQ0FBQ3ZCLElBQU1MLFNBQVNLLEVBQUV3QixNQUFNLENBQUNGLEtBQUs7Ozs7OztrQ0FFMUMsOERBQUNHO3dCQUFPUixXQUFVO3dCQUFhRyxNQUFLO2tDQUNsQyw0RUFBQ007NEJBQUVULFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSWhCckIsdUJBQVMsOERBQUMrQjswQkFBRy9COzs7Ozs7Ozs7Ozs7QUFJcEI7QUFFQSxpRUFBZUgsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9zcmMvY29tcG9uZW50cy9zZWFyY2guanM/OWRmMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL1NlYXJjaENyeXB0by5qc1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcblxyXG5jb25zdCBTZWFyY2ggPSAoKSA9PiB7XHJcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblxyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldEVycm9yKG51bGwpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2NyeXB0bycpO1xyXG4gICAgICBjb25zdCBjcnlwdG9zID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xyXG5cclxuICAgICAgY29uc3QgY3J5cHRvID0gY3J5cHRvcy5maW5kKChjKSA9PiBjLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gcXVlcnkudG9Mb3dlckNhc2UoKSk7XHJcblxyXG4gICAgICBpZiAoY3J5cHRvKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9jcnlwdG8vJHtjcnlwdG8uaWR9YCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0RXJyb3IoJ0NyeXB0b2N1cnJlbmN5IG5vdCBmb3VuZCcpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2VhcmNoaW5nIGZvciBjcnlwdG9jdXJyZW5jeTonLCBlcnIpO1xyXG4gICAgICBzZXRFcnJvcignQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgc2VhcmNoaW5nIGZvciB0aGUgY3J5cHRvY3VycmVuY3knKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9J3NlYXJjaC1jb250YWluZXInIG9uU3VibWl0PXtoYW5kbGVTZWFyY2h9PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT0nc2VhcmNoJ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPSdzZWFyY2gtaW5wdXQnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgYSBjcnlwdG9jdXJyZW5jeVwiXHJcbiAgICAgICAgICB2YWx1ZT17cXVlcnl9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdzZWFyY2gtYnRuJyB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhcyBmYS1zZWFyY2gnPjwvaT5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICBcclxuICAgICAgPC9mb3JtPlxyXG4gICAgICB7ZXJyb3IgJiYgPHA+e2Vycm9yfTwvcD59XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImF4aW9zIiwiU2VhcmNoIiwicXVlcnkiLCJzZXRRdWVyeSIsImVycm9yIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJoYW5kbGVTZWFyY2giLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImdldCIsImNyeXB0b3MiLCJkYXRhIiwiY3J5cHRvIiwiZmluZCIsImMiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJwdXNoIiwiaWQiLCJlcnIiLCJjb25zb2xlIiwiZGl2IiwiZm9ybSIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIiwiaSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/search.js\n");

/***/ }),

/***/ "./src/firebase.js":
/*!*************************!*\
  !*** ./src/firebase.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst API_KEY = \"AIzaSyDMQdm0ajy8qWSbDQaIR79_TwqJ52UgxrU\";\nconst firebaseConfig = {\n    apiKey: API_KEY,\n    authDomain: \"webserver-17338.firebaseapp.com\",\n    projectId: \"webserver-17338\",\n    storageBucket: \"webserver-17338.appspot.com\",\n    messagingSenderId: \"581777767329\",\n    appId: \"1:581777767329:web:f730df70f5a0ea02a3a9e0\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmlyZWJhc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNkM7QUFDTDtBQUNVO0FBRWxELE1BQU1HLFVBQVVDLHlDQUFvQztBQUVwRCxNQUFNRyxpQkFBaUI7SUFDckJDLFFBQVFMO0lBQ1JNLFlBQVk7SUFDWkMsV0FBVztJQUNYQyxlQUFlO0lBQ2ZDLG1CQUFtQjtJQUNuQkMsT0FBTztBQUNUO0FBRUEsTUFBTUMsTUFBTWQsMkRBQWFBLENBQUNPO0FBQ25CLE1BQU1RLE9BQU9kLHNEQUFPQSxDQUFDYSxLQUFLO0FBQzFCLE1BQU1FLEtBQUtkLGdFQUFZQSxDQUFDWSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9maXJlYmFzZS5qcz82N2Q4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcblxyXG5jb25zdCBBUElfS0VZID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfS0VZO1xyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBBUElfS0VZLFxyXG4gIGF1dGhEb21haW46ICd3ZWJzZXJ2ZXItMTczMzguZmlyZWJhc2VhcHAuY29tJyxcclxuICBwcm9qZWN0SWQ6ICd3ZWJzZXJ2ZXItMTczMzgnLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6ICd3ZWJzZXJ2ZXItMTczMzguYXBwc3BvdC5jb20nLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiAnNTgxNzc3NzY3MzI5JyxcclxuICBhcHBJZDogJzE6NTgxNzc3NzY3MzI5OndlYjpmNzMwZGY3MGY1YTBlYTAyYTNhOWUwJyxcclxufTtcclxuXHJcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG5leHBvcnQgY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTtcclxuZXhwb3J0IGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XHJcbiJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXV0aCIsImdldEZpcmVzdG9yZSIsIkFQSV9LRVkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfS0VZIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJhcHAiLCJhdXRoIiwiZGIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/firebase.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/layout */ \"./src/components/layout.js\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout__WEBPACK_IMPORTED_MODULE_3__]);\n_components_layout__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 9,\n            columnNumber: 10\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QztBQUNoQjtBQUNXO0FBQ007QUFFaEMsU0FBU0MsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsRCxxQkFDRSw4REFBQ0gsMERBQU1BO2tCQUNGLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBR2pDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9sYXlvdXQnO1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybihcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/useAuth.js":
/*!************************!*\
  !*** ./src/useAuth.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firebase */ \"./src/firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__]);\n([_firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst useAuth = ()=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    const [authStatus, setAuthStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged)(_firebase__WEBPACK_IMPORTED_MODULE_2__.auth, (user)=>{\n            if (user) {\n                setUser(user);\n                setAuthStatus(true);\n            } else {\n                setUser(null);\n                setAuthStatus(false);\n            }\n        });\n        return ()=>unsubscribe();\n    }, []);\n    const register = async ({ email, password })=>{\n        try {\n            const userCredential = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.createUserWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_2__.auth, email, password);\n            setUser(userCredential.user);\n            setAuthStatus(true);\n            router.push(\"/\");\n        } catch (error) {\n            console.error(\"Error during registration:\", error);\n            throw error;\n        }\n    };\n    const login = async ({ email, password })=>{\n        try {\n            const userCredential = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_2__.auth, email, password);\n            setUser(userCredential.user);\n            setAuthStatus(true);\n            router.push(\"/\");\n        } catch (error) {\n            console.error(\"Error during login:\", error);\n            throw error;\n        }\n    };\n    const logout = async ()=>{\n        try {\n            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signOut)(_firebase__WEBPACK_IMPORTED_MODULE_2__.auth);\n            setUser(null);\n            setAuthStatus(false);\n            router.push(\"/login\");\n        } catch (error) {\n            console.error(\"Error during logout:\", error);\n            throw error;\n        }\n    };\n    return {\n        user,\n        register,\n        login,\n        logout,\n        isAuthenticated: authStatus\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXNlQXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0o7QUFDTjtBQUNzRjtBQUVqSCxNQUFNUSxVQUFVO0lBQ3JCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNXLFlBQVlDLGNBQWMsR0FBR1osK0NBQVFBLENBQUM7SUFDN0MsTUFBTWEsU0FBU1gsc0RBQVNBO0lBRXhCRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1hLGNBQWNQLGlFQUFrQkEsQ0FBQ0osMkNBQUlBLEVBQUUsQ0FBQ007WUFDNUMsSUFBSUEsTUFBTTtnQkFDUkMsUUFBUUQ7Z0JBQ1JHLGNBQWM7WUFDaEIsT0FBTztnQkFDTEYsUUFBUTtnQkFDUkUsY0FBYztZQUNoQjtRQUNGO1FBRUEsT0FBTyxJQUFNRTtJQUNmLEdBQUcsRUFBRTtJQUVMLE1BQU1DLFdBQVcsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRTtRQUN6QyxJQUFJO1lBQ0YsTUFBTUMsaUJBQWlCLE1BQU1kLDZFQUE4QkEsQ0FBQ0QsMkNBQUlBLEVBQUVhLE9BQU9DO1lBQ3pFUCxRQUFRUSxlQUFlVCxJQUFJO1lBQzNCRyxjQUFjO1lBQ2RDLE9BQU9NLElBQUksQ0FBQztRQUNkLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsOEJBQThCQTtZQUM1QyxNQUFNQTtRQUNSO0lBQ0Y7SUFFQSxNQUFNRSxRQUFRLE9BQU8sRUFBRU4sS0FBSyxFQUFFQyxRQUFRLEVBQUU7UUFDdEMsSUFBSTtZQUNGLE1BQU1DLGlCQUFpQixNQUFNYix5RUFBMEJBLENBQUNGLDJDQUFJQSxFQUFFYSxPQUFPQztZQUNyRVAsUUFBUVEsZUFBZVQsSUFBSTtZQUMzQkcsY0FBYztZQUNkQyxPQUFPTSxJQUFJLENBQUM7UUFDZCxFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLHVCQUF1QkE7WUFDckMsTUFBTUE7UUFDUjtJQUNGO0lBRUEsTUFBTUcsU0FBUztRQUNiLElBQUk7WUFDRixNQUFNakIsc0RBQU9BLENBQUNILDJDQUFJQTtZQUNsQk8sUUFBUTtZQUNSRSxjQUFjO1lBQ2RDLE9BQU9NLElBQUksQ0FBQztRQUNkLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtZQUN0QyxNQUFNQTtRQUNSO0lBQ0Y7SUFFQSxPQUFPO1FBQ0xYO1FBQ0FNO1FBQ0FPO1FBQ0FDO1FBQ0FDLGlCQUFpQmI7SUFDbkI7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy91c2VBdXRoLmpzPzJhY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi9maXJlYmFzZSc7XHJcbmltcG9ydCB7IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCwgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQsIHNpZ25PdXQsIG9uQXV0aFN0YXRlQ2hhbmdlZCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2F1dGhTdGF0dXMsIHNldEF1dGhTdGF0dXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXIpID0+IHtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICBzZXRVc2VyKHVzZXIpO1xyXG4gICAgICAgIHNldEF1dGhTdGF0dXModHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0VXNlcihudWxsKTtcclxuICAgICAgICBzZXRBdXRoU3RhdHVzKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCByZWdpc3RlciA9IGFzeW5jICh7IGVtYWlsLCBwYXNzd29yZCB9KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1c2VyQ3JlZGVudGlhbCA9IGF3YWl0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgICBzZXRVc2VyKHVzZXJDcmVkZW50aWFsLnVzZXIpO1xyXG4gICAgICBzZXRBdXRoU3RhdHVzKHRydWUpO1xyXG4gICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIHJlZ2lzdHJhdGlvbjonLCBlcnJvcik7XHJcbiAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKHsgZW1haWwsIHBhc3N3b3JkIH0pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXJDcmVkZW50aWFsID0gYXdhaXQgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKTtcclxuICAgICAgc2V0VXNlcih1c2VyQ3JlZGVudGlhbC51c2VyKTtcclxuICAgICAgc2V0QXV0aFN0YXR1cyh0cnVlKTtcclxuICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBsb2dpbjonLCBlcnJvcik7XHJcbiAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IHNpZ25PdXQoYXV0aCk7XHJcbiAgICAgIHNldFVzZXIobnVsbCk7XHJcbiAgICAgIHNldEF1dGhTdGF0dXMoZmFsc2UpO1xyXG4gICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgbG9nb3V0OicsIGVycm9yKTtcclxuICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHVzZXIsXHJcbiAgICByZWdpc3RlcixcclxuICAgIGxvZ2luLFxyXG4gICAgbG9nb3V0LFxyXG4gICAgaXNBdXRoZW50aWNhdGVkOiBhdXRoU3RhdHVzLFxyXG4gIH07XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImF1dGgiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25PdXQiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VBdXRoIiwidXNlciIsInNldFVzZXIiLCJhdXRoU3RhdHVzIiwic2V0QXV0aFN0YXR1cyIsInJvdXRlciIsInVuc3Vic2NyaWJlIiwicmVnaXN0ZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwidXNlckNyZWRlbnRpYWwiLCJwdXNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9naW4iLCJsb2dvdXQiLCJpc0F1dGhlbnRpY2F0ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/useAuth.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-bootstrap","vendor-chunks/react-toastify","vendor-chunks/bootstrap"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();