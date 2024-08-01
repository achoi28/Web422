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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Container,Nav,Navbar!=!react-bootstrap */ \"__barrel_optimize__?names=Container,Nav,Navbar!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _useAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useAuth */ \"./src/useAuth.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useAuth__WEBPACK_IMPORTED_MODULE_3__]);\n_useAuth__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst Layout = ({ children })=>{\n    const { logout, user, isAuthenticated } = (0,_useAuth__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n    const [authStatus, setAuthStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(isAuthenticated);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (false) {}\n        const handleStorageChange = ()=>{\n            setAuthStatus(isAuthenticated);\n        };\n        window.addEventListener(\"storage\", handleStorageChange);\n        return ()=>{\n            window.removeEventListener(\"storage\", handleStorageChange);\n        };\n    }, [\n        isAuthenticated\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar, {\n                bg: \"primary\",\n                variant: \"dark\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar.Brand, {\n                            href: \"/\",\n                            children: \"Exchange Rates App\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\A\\\\Web422\\\\src\\\\components\\\\layout.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav, {\n                            className: \"me-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav.Link, {\n                                    as: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),\n                                    href: \"/\",\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\A\\\\Web422\\\\src\\\\components\\\\layout.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav.Link, {\n                                    as: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),\n                                    href: \"/about\",\n                                    children: \"About\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\A\\\\Web422\\\\src\\\\components\\\\layout.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, undefined),\n                                authStatus ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav.Link, {\n                                            as: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),\n                                            href: \"/favourites\",\n                                            children: \"Favorites\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\A\\\\Web422\\\\src\\\\components\\\\layout.js\",\n                                            lineNumber: 36,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav.Link, {\n                                            href: \"#\",\n                                            onClick: (e)=>{\n                                                e.preventDefault();\n                                                logout();\n                                                alert(\"you are signed out\");\n                                            },\n                                            children: \"Sign out\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\A\\\\Web422\\\\src\\\\components\\\\layout.js\",\n                                            lineNumber: 37,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav.Link, {\n                                            as: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),\n                                            href: \"/login\",\n                                            children: \"Login\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\A\\\\Web422\\\\src\\\\components\\\\layout.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav.Link, {\n                                            as: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),\n                                            href: \"/register\",\n                                            children: \"Register\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\A\\\\Web422\\\\src\\\\components\\\\layout.js\",\n                                            lineNumber: 42,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\A\\\\Web422\\\\src\\\\components\\\\layout.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\A\\\\Web422\\\\src\\\\components\\\\layout.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\A\\\\Web422\\\\src\\\\components\\\\layout.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: \"main-content\",\n                    children: children\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\A\\\\Web422\\\\src\\\\components\\\\layout.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\A\\\\Web422\\\\src\\\\components\\\\layout.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUN0QjtBQUM0QjtBQUNwQjtBQUVyQyxNQUFNUSxTQUFTLENBQUMsRUFBRUMsUUFBUSxFQUFFO0lBQzFCLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLGVBQWUsRUFBRSxHQUFHTCxpREFBT0E7SUFDakQsTUFBTSxDQUFDTSxZQUFZQyxjQUFjLEdBQUdaLCtDQUFRQSxDQUFDVTtJQUU3Q1gsZ0RBQVNBLENBQUM7UUFDUixJQUFJLEtBQWtCLEVBQWEsRUFFbEM7UUFFRCxNQUFNYyxzQkFBc0I7WUFDMUJELGNBQWNGO1FBQ2hCO1FBRUFJLE9BQU9DLGdCQUFnQixDQUFDLFdBQVdGO1FBRW5DLE9BQU87WUFDTEMsT0FBT0UsbUJBQW1CLENBQUMsV0FBV0g7UUFDeEM7SUFDRixHQUFHO1FBQUNIO0tBQWdCO0lBRXBCLHFCQUNFOzswQkFDRSw4REFBQ04sK0ZBQU1BO2dCQUFDYSxJQUFHO2dCQUFVQyxTQUFROzBCQUMzQiw0RUFBQ2hCLGtHQUFTQTs7c0NBQ1IsOERBQUNFLCtGQUFNQSxDQUFDZSxLQUFLOzRCQUFDQyxNQUFLO3NDQUFJOzs7Ozs7c0NBQ3ZCLDhEQUFDakIsNEZBQUdBOzRCQUFDa0IsV0FBVTs7OENBQ2IsOERBQUNsQiw0RkFBR0EsQ0FBQ0YsSUFBSTtvQ0FBQ3FCLElBQUlyQixrREFBSUE7b0NBQUVtQixNQUFLOzhDQUFJOzs7Ozs7OENBQzdCLDhEQUFDakIsNEZBQUdBLENBQUNGLElBQUk7b0NBQUNxQixJQUFJckIsa0RBQUlBO29DQUFFbUIsTUFBSzs4Q0FBUzs7Ozs7O2dDQUNqQ1QsMkJBQ0M7O3NEQUNFLDhEQUFDUiw0RkFBR0EsQ0FBQ0YsSUFBSTs0Q0FBQ3FCLElBQUlyQixrREFBSUE7NENBQUVtQixNQUFLO3NEQUFjOzs7Ozs7c0RBQ3ZDLDhEQUFDakIsNEZBQUdBLENBQUNGLElBQUk7NENBQUNtQixNQUFLOzRDQUFJRyxTQUFTLENBQUNDO2dEQUFRQSxFQUFFQyxjQUFjO2dEQUFJakI7Z0RBQVVrQixNQUFNOzRDQUFzQjtzREFBRzs7Ozs7OztpRUFHcEc7O3NEQUNFLDhEQUFDdkIsNEZBQUdBLENBQUNGLElBQUk7NENBQUNxQixJQUFJckIsa0RBQUlBOzRDQUFFbUIsTUFBSztzREFBUzs7Ozs7O3NEQUNsQyw4REFBQ2pCLDRGQUFHQSxDQUFDRixJQUFJOzRDQUFDcUIsSUFBSXJCLGtEQUFJQTs0Q0FBRW1CLE1BQUs7c0RBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTS9DLDhEQUFDbEIsa0dBQVNBOzBCQUNSLDRFQUFDeUI7b0JBQUtOLFdBQVU7OEJBQ2JkOzs7Ozs7Ozs7Ozs7O0FBS1g7QUFFQSxpRUFBZUQsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQuanM/YjAxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBOYXYsIE5hdmJhciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi91c2VBdXRoJztcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCB7IGxvZ291dCwgdXNlciwgaXNBdXRoZW50aWNhdGVkIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgW2F1dGhTdGF0dXMsIHNldEF1dGhTdGF0dXNdID0gdXNlU3RhdGUoaXNBdXRoZW50aWNhdGVkKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBzZXRBdXRoU3RhdHVzKGlzQXV0aGVudGljYXRlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3RvcmFnZUNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgc2V0QXV0aFN0YXR1cyhpc0F1dGhlbnRpY2F0ZWQpO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIGhhbmRsZVN0b3JhZ2VDaGFuZ2UpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgaGFuZGxlU3RvcmFnZUNoYW5nZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtpc0F1dGhlbnRpY2F0ZWRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxOYXZiYXIgYmc9XCJwcmltYXJ5XCIgdmFyaWFudD1cImRhcmtcIj5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiL1wiPkV4Y2hhbmdlIFJhdGVzIEFwcDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtZS1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxOYXYuTGluayBhcz17TGlua30gaHJlZj1cIi9cIj5Ib21lPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgPE5hdi5MaW5rIGFzPXtMaW5rfSBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICB7YXV0aFN0YXR1cyA/IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPE5hdi5MaW5rIGFzPXtMaW5rfSBocmVmPVwiL2Zhdm91cml0ZXNcIj5GYXZvcml0ZXM8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCIgb25DbGljaz17KGUpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpOyBsb2dvdXQoKTsgYWxlcnQoJ3lvdSBhcmUgc2lnbmVkIG91dCcpIH19PlNpZ24gb3V0PC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPE5hdi5MaW5rIGFzPXtMaW5rfSBocmVmPVwiL2xvZ2luXCI+TG9naW48L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgPE5hdi5MaW5rIGFzPXtMaW5rfSBocmVmPVwiL3JlZ2lzdGVyXCI+UmVnaXN0ZXI8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvTmF2YmFyPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJDb250YWluZXIiLCJOYXYiLCJOYXZiYXIiLCJ1c2VBdXRoIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJsb2dvdXQiLCJ1c2VyIiwiaXNBdXRoZW50aWNhdGVkIiwiYXV0aFN0YXR1cyIsInNldEF1dGhTdGF0dXMiLCJoYW5kbGVTdG9yYWdlQ2hhbmdlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJiZyIsInZhcmlhbnQiLCJCcmFuZCIsImhyZWYiLCJjbGFzc05hbWUiLCJhcyIsIm9uQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/layout.js\n");

/***/ }),

/***/ "./src/firebase.js":
/*!*************************!*\
  !*** ./src/firebase.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// firebase.js\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDMQdm0ajy8qWSbDQaIR79_TwqJ52UgxrU\",\n    authDomain: \"webserver-17338.firebaseapp.com\",\n    projectId: \"webserver-17338\",\n    storageBucket: \"webserver-17338.appspot.com\",\n    messagingSenderId: \"581777767329\",\n    appId: \"1:581777767329:web:f730df70f5a0ea02a3a9e0\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmlyZWJhc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsY0FBYztBQUMrQjtBQUNMO0FBRXhDLE1BQU1FLGlCQUFpQjtJQUNyQkMsUUFBUTtJQUNSQyxZQUFZO0lBQ1pDLFdBQVc7SUFDWEMsZUFBZTtJQUNmQyxtQkFBbUI7SUFDbkJDLE9BQU87QUFDVDtBQUVBLE1BQU1DLE1BQU1ULDJEQUFhQSxDQUFDRTtBQUNuQixNQUFNUSxPQUFPVCxzREFBT0EsQ0FBQ1EsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9zcmMvZmlyZWJhc2UuanM/NjdkOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmaXJlYmFzZS5qc1xyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lETVFkbTBhank4cVdTYkRRYUlSNzlfVHdxSjUyVWd4clVcIixcclxuICBhdXRoRG9tYWluOiBcIndlYnNlcnZlci0xNzMzOC5maXJlYmFzZWFwcC5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwid2Vic2VydmVyLTE3MzM4XCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJ3ZWJzZXJ2ZXItMTczMzguYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI1ODE3Nzc3NjczMjlcIixcclxuICBhcHBJZDogXCIxOjU4MTc3Nzc2NzMyOTp3ZWI6ZjczMGRmNzBmNWEwZWEwMmEzYTllMFwiXHJcbn07XHJcblxyXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuZXhwb3J0IGNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XHJcbiJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXV0aCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiYXBwIiwiYXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/firebase.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/layout */ \"./src/components/layout.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout__WEBPACK_IMPORTED_MODULE_3__]);\n_components_layout__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\A\\\\Web422\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 8,\n            columnNumber: 10\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\A\\\\Web422\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDaEI7QUFDVztBQUUxQixTQUFTQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELHFCQUNFLDhEQUFDSCwwREFBTUE7a0JBQ0YsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHakMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbmltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL2xheW91dCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuKFxyXG4gICAgPExheW91dD5cclxuICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/useAuth.js":
/*!************************!*\
  !*** ./src/useAuth.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firebase */ \"./src/firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__]);\n([_firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// useAuth.js\n\n\n\n\nconst useAuth = ()=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    const [authStatus, setAuthStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged)(_firebase__WEBPACK_IMPORTED_MODULE_2__.auth, (user)=>{\n            if (user) {\n                setUser(user);\n                setAuthStatus(true);\n            } else {\n                setUser(null);\n                setAuthStatus(false);\n            }\n        });\n        return ()=>unsubscribe();\n    }, []);\n    const register = async ({ email, password })=>{\n        try {\n            const userCredential = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.createUserWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_2__.auth, email, password);\n            setUser(userCredential.user);\n            setAuthStatus(true);\n            router.push(\"/\");\n        } catch (error) {\n            console.error(\"Error during registration:\", error);\n            throw error;\n        }\n    };\n    const login = async ({ email, password })=>{\n        try {\n            const userCredential = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_2__.auth, email, password);\n            setUser(userCredential.user);\n            setAuthStatus(true);\n            router.push(\"/\");\n        } catch (error) {\n            console.error(\"Error during login:\", error);\n            throw error;\n        }\n    };\n    const logout = async ()=>{\n        try {\n            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signOut)(_firebase__WEBPACK_IMPORTED_MODULE_2__.auth);\n            setUser(null);\n            setAuthStatus(false);\n            router.push(\"/login\");\n        } catch (error) {\n            console.error(\"Error during logout:\", error);\n            throw error;\n        }\n    };\n    return {\n        user,\n        register,\n        login,\n        logout,\n        isAuthenticated: authStatus\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXNlQXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsYUFBYTtBQUMrQjtBQUNKO0FBQ047QUFDc0Y7QUFFakgsTUFBTVEsVUFBVTtJQUNyQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1YsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDVyxZQUFZQyxjQUFjLEdBQUdaLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU1hLFNBQVNYLHNEQUFTQTtJQUV4QkQsZ0RBQVNBLENBQUM7UUFDUixNQUFNYSxjQUFjUCxpRUFBa0JBLENBQUNKLDJDQUFJQSxFQUFFLENBQUNNO1lBQzVDLElBQUlBLE1BQU07Z0JBQ1JDLFFBQVFEO2dCQUNSRyxjQUFjO1lBQ2hCLE9BQU87Z0JBQ0xGLFFBQVE7Z0JBQ1JFLGNBQWM7WUFDaEI7UUFDRjtRQUVBLE9BQU8sSUFBTUU7SUFDZixHQUFHLEVBQUU7SUFFTCxNQUFNQyxXQUFXLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUU7UUFDekMsSUFBSTtZQUNGLE1BQU1DLGlCQUFpQixNQUFNZCw2RUFBOEJBLENBQUNELDJDQUFJQSxFQUFFYSxPQUFPQztZQUN6RVAsUUFBUVEsZUFBZVQsSUFBSTtZQUMzQkcsY0FBYztZQUNkQyxPQUFPTSxJQUFJLENBQUM7UUFDZCxFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLDhCQUE4QkE7WUFDNUMsTUFBTUE7UUFDUjtJQUNGO0lBRUEsTUFBTUUsUUFBUSxPQUFPLEVBQUVOLEtBQUssRUFBRUMsUUFBUSxFQUFFO1FBQ3RDLElBQUk7WUFDRixNQUFNQyxpQkFBaUIsTUFBTWIseUVBQTBCQSxDQUFDRiwyQ0FBSUEsRUFBRWEsT0FBT0M7WUFDckVQLFFBQVFRLGVBQWVULElBQUk7WUFDM0JHLGNBQWM7WUFDZEMsT0FBT00sSUFBSSxDQUFDO1FBQ2QsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyx1QkFBdUJBO1lBQ3JDLE1BQU1BO1FBQ1I7SUFDRjtJQUVBLE1BQU1HLFNBQVM7UUFDYixJQUFJO1lBQ0YsTUFBTWpCLHNEQUFPQSxDQUFDSCwyQ0FBSUE7WUFDbEJPLFFBQVE7WUFDUkUsY0FBYztZQUNkQyxPQUFPTSxJQUFJLENBQUM7UUFDZCxFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7WUFDdEMsTUFBTUE7UUFDUjtJQUNGO0lBRUEsT0FBTztRQUNMWDtRQUNBTTtRQUNBTztRQUNBQztRQUNBQyxpQkFBaUJiO0lBQ25CO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9zcmMvdXNlQXV0aC5qcz8yYWNhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHVzZUF1dGguanNcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi9maXJlYmFzZSc7XHJcbmltcG9ydCB7IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCwgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQsIHNpZ25PdXQsIG9uQXV0aFN0YXRlQ2hhbmdlZCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2F1dGhTdGF0dXMsIHNldEF1dGhTdGF0dXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXIpID0+IHtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICBzZXRVc2VyKHVzZXIpO1xyXG4gICAgICAgIHNldEF1dGhTdGF0dXModHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0VXNlcihudWxsKTtcclxuICAgICAgICBzZXRBdXRoU3RhdHVzKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCByZWdpc3RlciA9IGFzeW5jICh7IGVtYWlsLCBwYXNzd29yZCB9KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1c2VyQ3JlZGVudGlhbCA9IGF3YWl0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgICBzZXRVc2VyKHVzZXJDcmVkZW50aWFsLnVzZXIpO1xyXG4gICAgICBzZXRBdXRoU3RhdHVzKHRydWUpO1xyXG4gICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIHJlZ2lzdHJhdGlvbjonLCBlcnJvcik7XHJcbiAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKHsgZW1haWwsIHBhc3N3b3JkIH0pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXJDcmVkZW50aWFsID0gYXdhaXQgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKTtcclxuICAgICAgc2V0VXNlcih1c2VyQ3JlZGVudGlhbC51c2VyKTtcclxuICAgICAgc2V0QXV0aFN0YXR1cyh0cnVlKTtcclxuICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBsb2dpbjonLCBlcnJvcik7XHJcbiAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IHNpZ25PdXQoYXV0aCk7XHJcbiAgICAgIHNldFVzZXIobnVsbCk7XHJcbiAgICAgIHNldEF1dGhTdGF0dXMoZmFsc2UpO1xyXG4gICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgbG9nb3V0OicsIGVycm9yKTtcclxuICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHVzZXIsXHJcbiAgICByZWdpc3RlcixcclxuICAgIGxvZ2luLFxyXG4gICAgbG9nb3V0LFxyXG4gICAgaXNBdXRoZW50aWNhdGVkOiBhdXRoU3RhdHVzLFxyXG4gIH07XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImF1dGgiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25PdXQiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VBdXRoIiwidXNlciIsInNldFVzZXIiLCJhdXRoU3RhdHVzIiwic2V0QXV0aFN0YXR1cyIsInJvdXRlciIsInVuc3Vic2NyaWJlIiwicmVnaXN0ZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwidXNlckNyZWRlbnRpYWwiLCJwdXNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9naW4iLCJsb2dvdXQiLCJpc0F1dGhlbnRpY2F0ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/useAuth.js\n");

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