"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./src/pages/register.js":
/*!*******************************!*\
  !*** ./src/pages/register.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useAuth */ \"./src/useAuth.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emailjs/browser */ \"./node_modules/@emailjs/browser/es/index.js\");\n/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/login.module.css */ \"./src/styles/login.module.css\");\n/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst RegisterPage = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [confirmPassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { register, isAuthenticated } = (0,_useAuth__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        if (password !== confirmPassword) {\n            setError(\"Passwords do not match\");\n            return;\n        }\n        try {\n            setError(null);\n            await register({\n                email,\n                password\n            });\n            // EmailJS send email\n            sendEmail(email);\n            router.push(\"/\");\n        } catch (err) {\n            setError(\"Error during registration\");\n        }\n    };\n    const sendEmail = (userEmail)=>{\n        const templateParams = {\n            to_name: userEmail,\n            from_name: \"Web422\",\n            message: \"Thank you for registering with our service!\"\n        };\n        _emailjs_browser__WEBPACK_IMPORTED_MODULE_4__[\"default\"].send(\"service_mr6igic\", \"template_sty3ogm\", templateParams).then((response)=>{\n            console.log(\"SUCCESS!\", response.status, response.text);\n        }, (err)=>{\n            console.log(\"FAILED...\", err);\n        });\n    };\n    if (isAuthenticated) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Registered successfully!\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\pages\\\\register.js\",\n            lineNumber: 51,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"background\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"shape\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://cdn.brandfetch.io/ethereum.org/w/400/h/400\",\n                            style: {\n                                width: \"250px\",\n                                height: \"250px\",\n                                borderRadius: \"50%\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\pages\\\\register.js\",\n                            lineNumber: 57,\n                            columnNumber: 32\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\pages\\\\register.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"shape\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://cdn.brandfetch.io/bitcoin.org/w/400/h/400\",\n                            style: {\n                                width: \"250px\",\n                                height: \"250px\",\n                                borderRadius: \"50%\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\pages\\\\register.js\",\n                            lineNumber: 65,\n                            columnNumber: 32\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\pages\\\\register.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\pages\\\\register.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"form\",\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Register Information\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\pages\\\\register.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"username\",\n                        type: \"email\",\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value),\n                        placeholder: \"Email\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\pages\\\\register.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"password1\",\n                        type: \"password\",\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value),\n                        placeholder: \"Password\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\pages\\\\register.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"password2\",\n                        type: \"password\",\n                        value: confirmPassword,\n                        onChange: (e)=>setConfirmPassword(e.target.value),\n                        placeholder: \"Confirm Password\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\pages\\\\register.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"loginButton\",\n                        type: \"submit\",\n                        children: \"Register\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\pages\\\\register.js\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\pages\\\\register.js\",\n                        lineNumber: 99,\n                        columnNumber: 19\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/login\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Already have an account? Log in\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\pages\\\\register.js\",\n                                lineNumber: 101,\n                                columnNumber: 28\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\pages\\\\register.js\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\pages\\\\register.js\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\pages\\\\register.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(RegisterPage, \"36a8caEt3iSeQOuxpJrUtDRZZ7I=\", false, function() {\n    return [\n        _useAuth__WEBPACK_IMPORTED_MODULE_2__.useAuth,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = RegisterPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegisterPage);\nvar _c;\n$RefreshReg$(_c, \"RegisterPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUs5QjtHQW5HTTlCOztRQUlrQ0gsNkNBQU9BO1FBRTlCQyxrREFBU0E7OztLQU5wQkU7QUFxR04sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdGVyLmpzP2I0YzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi91c2VBdXRoJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgZW1haWxqcyBmcm9tICdAZW1haWxqcy9icm93c2VyJztcclxuaW1wb3J0IFwiQC9zdHlsZXMvbG9naW4ubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgUmVnaXN0ZXJQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjb25maXJtUGFzc3dvcmQsIHNldENvbmZpcm1QYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgeyByZWdpc3RlciwgaXNBdXRoZW50aWNhdGVkIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChwYXNzd29yZCAhPT0gY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICAgIHNldEVycm9yKCdQYXNzd29yZHMgZG8gbm90IG1hdGNoJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIHNldEVycm9yKG51bGwpO1xyXG4gICAgICBhd2FpdCByZWdpc3Rlcih7IGVtYWlsLCBwYXNzd29yZCB9KTtcclxuXHJcbiAgICAgIC8vIEVtYWlsSlMgc2VuZCBlbWFpbFxyXG4gICAgICBzZW5kRW1haWwoZW1haWwpO1xyXG5cclxuICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzZXRFcnJvcignRXJyb3IgZHVyaW5nIHJlZ2lzdHJhdGlvbicpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNlbmRFbWFpbCA9ICh1c2VyRW1haWwpID0+IHtcclxuICAgIGNvbnN0IHRlbXBsYXRlUGFyYW1zID0ge1xyXG4gICAgICB0b19uYW1lOiB1c2VyRW1haWwsIC8vIFRoaXMgc2hvdWxkIG1hdGNoIHRoZSB2YXJpYWJsZSBuYW1lIGluIHlvdXIgdGVtcGxhdGVcclxuICAgICAgZnJvbV9uYW1lOiAnV2ViNDIyJywgXHJcbiAgICAgIG1lc3NhZ2U6ICdUaGFuayB5b3UgZm9yIHJlZ2lzdGVyaW5nIHdpdGggb3VyIHNlcnZpY2UhJ1xyXG4gICAgfTtcclxuICBcclxuICAgIGVtYWlsanMuc2VuZCgnc2VydmljZV9tcjZpZ2ljJywgJ3RlbXBsYXRlX3N0eTNvZ20nLCB0ZW1wbGF0ZVBhcmFtcylcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NVQ0NFU1MhJywgcmVzcG9uc2Uuc3RhdHVzLCByZXNwb25zZS50ZXh0KTtcclxuICAgICAgfSwgKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdGQUlMRUQuLi4nLCBlcnIpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG4gIFxyXG5cclxuICBpZiAoaXNBdXRoZW50aWNhdGVkKSB7XHJcbiAgICByZXR1cm4gPHA+UmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHkhPC9wPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXBlXCI+PGltZyBcclxuICAgICAgICAgIHNyYz17J2h0dHBzOi8vY2RuLmJyYW5kZmV0Y2guaW8vZXRoZXJldW0ub3JnL3cvNDAwL2gvNDAwJ31cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnMjUwcHgnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcyNTBweCcsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJSdcclxuICAgICAgICAgIH19Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXBlXCI+PGltZyBcclxuICAgICAgICAgIHNyYz17J2h0dHBzOi8vY2RuLmJyYW5kZmV0Y2guaW8vYml0Y29pbi5vcmcvdy80MDAvaC80MDAnfVxyXG4gICAgICAgICAgc3R5bGU9e3sgXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMjUwcHgnLCBcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMjUwcHgnLCBcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyBcclxuICAgICAgICAgIH19IFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGgzPlJlZ2lzdGVyIEluZm9ybWF0aW9uPC9oMz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGlkPSd1c2VybmFtZSdcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBpZD0ncGFzc3dvcmQxJ1xyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGlkPSdwYXNzd29yZDInXHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgdmFsdWU9e2NvbmZpcm1QYXNzd29yZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29uZmlybVBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBQYXNzd29yZFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImxvZ2luQnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPlJlZ2lzdGVyPC9idXR0b24+XHJcbiAgICAgICAge2Vycm9yICYmIDxwPntlcnJvcn08L3A+fVxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YSBocmVmPVwiL2xvZ2luXCI+PHA+QWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/IExvZyBpbjwvcD48L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlclBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUF1dGgiLCJ1c2VSb3V0ZXIiLCJlbWFpbGpzIiwiUmVnaXN0ZXJQYWdlIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJzZXRDb25maXJtUGFzc3dvcmQiLCJyZWdpc3RlciIsImlzQXV0aGVudGljYXRlZCIsImVycm9yIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZW5kRW1haWwiLCJwdXNoIiwiZXJyIiwidXNlckVtYWlsIiwidGVtcGxhdGVQYXJhbXMiLCJ0b19uYW1lIiwiZnJvbV9uYW1lIiwibWVzc2FnZSIsInNlbmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwidGV4dCIsInAiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiZm9ybSIsIm9uU3VibWl0IiwiaDMiLCJpbnB1dCIsImlkIiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/register.js\n"));

/***/ })

});