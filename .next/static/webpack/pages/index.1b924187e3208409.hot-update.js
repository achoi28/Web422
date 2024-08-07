"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/cryptoList.js":
/*!**************************************!*\
  !*** ./src/components/cryptoList.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading */ \"./src/components/loading.js\");\n/* harmony import */ var _useAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../useAuth */ \"./src/useAuth.js\");\n/* harmony import */ var _pages_api_favourite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/api/favourite */ \"./src/pages/api/favourite.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n // Ensure this is correctly defined and exported\n\n\nconst CryptoList = ()=>{\n    _s();\n    const { user } = (0,_useAuth__WEBPACK_IMPORTED_MODULE_4__.useAuth)();\n    const [cryptos, setCryptos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [favorites, setFavorites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchFavorites = async ()=>{\n        if (user) {\n            try {\n                const userFavorites = await (0,_pages_api_favourite__WEBPACK_IMPORTED_MODULE_5__.getFavorites)(user.uid);\n                console.log(\"Fetched favorites:\", userFavorites);\n                setFavorites(userFavorites);\n            } catch (error) {\n                console.error(\"Error fetching favorites:\", error);\n            }\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchCryptos = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"/api/crypto\");\n                setCryptos(response.data.data);\n                setIsLoading(false);\n            } catch (error) {\n                console.error(\"Error fetching cryptos:\", error);\n                setError(\"Error fetching cryptocurrency data\");\n                setIsLoading(false);\n            }\n        };\n        fetchCryptos();\n        if (user) {\n            fetchFavorites();\n        }\n    }, [\n        user\n    ]);\n    const handleAddFavorite = async (cryptoId, cryptoName)=>{\n        if (user) {\n            try {\n                console.log(\"Adding \".concat(cryptoName, \" (ID: \").concat(cryptoId, \") to favorites\"));\n                await (0,_pages_api_favourite__WEBPACK_IMPORTED_MODULE_5__.addFavorite)(user.uid, cryptoId, cryptoName);\n                await fetchFavorites();\n                window.alert(\"Added \".concat(cryptoName, \" to Favorites\"));\n            } catch (error) {\n                console.error(\"Error adding favorite:\", error);\n                window.alert(\"Failed to add to Favorites\");\n            }\n        } else {\n            console.log(\"User not logged in\");\n            window.alert(\"Please log in to add favorites\");\n        }\n    };\n    const handleRemoveFavorite = async (cryptoId)=>{\n        if (user) {\n            try {\n                console.log(\"Removing crypto ID \".concat(cryptoId, \" from favorites\"));\n                await (0,_pages_api_favourite__WEBPACK_IMPORTED_MODULE_5__.removeFavorite)(user.uid, cryptoId);\n                await fetchFavorites();\n                window.alert(\"Removed from Favorites\");\n            } catch (error) {\n                console.error(\"Error removing favorite:\", error);\n                window.alert(\"Failed to remove from Favorites\");\n            }\n        } else {\n            console.log(\"User not logged in\");\n            window.alert(\"Please log in to remove favorites\");\n        }\n    };\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\cryptoList.js\",\n            lineNumber: 81,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: error\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\cryptoList.js\",\n            lineNumber: 85,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"crypto-list-page\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Cryptocurrency Listings\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\cryptoList.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"crypto-table\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"#\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\cryptoList.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Logo\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\cryptoList.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Name\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\cryptoList.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Symbol\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\cryptoList.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Price (USD)\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\cryptoList.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"24h Volume\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\cryptoList.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"24h Change\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\cryptoList.js\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Market Cap\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\cryptoList.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Actions\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\cryptoList.js\",\n                                    lineNumber: 102,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\cryptoList.js\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\cryptoList.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: cryptos.map((crypto, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: index + 1\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\cryptoList.js\",\n                                        lineNumber: 108,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: crypto.logo,\n                                            alt: crypto.name,\n                                            className: \"crypto-logo\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\cryptoList.js\",\n                                            lineNumber: 109,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\cryptoList.js\",\n                                        lineNumber: 109,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: crypto.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\cryptoList.js\",\n                                        lineNumber: 110,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: crypto.symbol\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\cryptoList.js\",\n                                        lineNumber: 111,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: [\n                                            \"$\",\n                                            crypto.quote.USD.price.toFixed(2)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\cryptoList.js\",\n                                        lineNumber: 112,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: [\n                                            \"$\",\n                                            crypto.quote.USD.volume_24h.toFixed(2)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\cryptoList.js\",\n                                        lineNumber: 113,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: crypto.quote.USD.percent_change_24h >= 0 ? \"positive-change\" : \"negative-change\",\n                                        children: [\n                                            crypto.quote.USD.percent_change_24h.toFixed(2),\n                                            \"%\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\cryptoList.js\",\n                                        lineNumber: 114,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: [\n                                            \"$\",\n                                            crypto.quote.USD.market_cap.toFixed(2)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\cryptoList.js\",\n                                        lineNumber: 117,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: \"/crypto/\".concat(crypto.id),\n                                                legacyBehavior: true,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    className: \"details-button\",\n                                                    children: \"View\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\cryptoList.js\",\n                                                    lineNumber: 120,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\cryptoList.js\",\n                                                lineNumber: 119,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            user && (favorites.some((favorite)=>favorite.id === crypto.id) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: ()=>handleRemoveFavorite(crypto.id),\n                                                children: \"Remove from Favorites\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\cryptoList.js\",\n                                                lineNumber: 123,\n                                                columnNumber: 19\n                                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: ()=>handleAddFavorite(crypto.id, crypto.name),\n                                                children: \"Add to Favorites\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\cryptoList.js\",\n                                                lineNumber: 125,\n                                                columnNumber: 19\n                                            }, undefined))\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\cryptoList.js\",\n                                        lineNumber: 118,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, crypto.id, true, {\n                                fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\cryptoList.js\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\cryptoList.js\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\cryptoList.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\components\\\\cryptoList.js\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CryptoList, \"XjJXQD5lq/aYBTZfVIjkaVAr8uo=\", false, function() {\n    return [\n        _useAuth__WEBPACK_IMPORTED_MODULE_4__.useAuth\n    ];\n});\n_c = CryptoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CryptoList);\nvar _c;\n$RefreshReg$(_c, \"CryptoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQXFCLE9BQVZoQixPQUFPaUIsRUFBRTtnREFBSUMsY0FBYzswREFDaEQsNEVBQUNDO29EQUFFM0IsV0FBVTs4REFBaUI7Ozs7Ozs7Ozs7OzRDQUUvQjFCLFFBQVNPLENBQUFBLFVBQVUrQyxJQUFJLENBQUNDLENBQUFBLFdBQVlBLFNBQVNKLEVBQUUsS0FBS2pCLE9BQU9pQixFQUFFLGtCQUM1RCw4REFBQ0s7Z0RBQU9DLFNBQVMsSUFBTWxDLHFCQUFxQlcsT0FBT2lCLEVBQUU7MERBQUc7Ozs7OzBFQUV4RCw4REFBQ0s7Z0RBQU9DLFNBQVMsSUFBTXZDLGtCQUFrQmdCLE9BQU9pQixFQUFFLEVBQUVqQixPQUFPTyxJQUFJOzBEQUFHOzs7Ozt5REFDcEU7Ozs7Ozs7OytCQW5CS1AsT0FBT2lCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQjlCO0dBOUhNcEQ7O1FBQ2FKLDZDQUFPQTs7O0tBRHBCSTtBQWdJTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jcnlwdG9MaXN0LmpzPzYzNWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9sb2FkaW5nJzsgLy8gRW5zdXJlIHRoaXMgaXMgY29ycmVjdGx5IGRlZmluZWQgYW5kIGV4cG9ydGVkXHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi91c2VBdXRoJztcclxuaW1wb3J0IHsgYWRkRmF2b3JpdGUsIHJlbW92ZUZhdm9yaXRlLCBnZXRGYXZvcml0ZXMgfSBmcm9tICcuLi9wYWdlcy9hcGkvZmF2b3VyaXRlJztcclxuXHJcbmNvbnN0IENyeXB0b0xpc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgW2NyeXB0b3MsIHNldENyeXB0b3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtmYXZvcml0ZXMsIHNldEZhdm9yaXRlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoRmF2b3JpdGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VyRmF2b3JpdGVzID0gYXdhaXQgZ2V0RmF2b3JpdGVzKHVzZXIudWlkKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnRmV0Y2hlZCBmYXZvcml0ZXM6JywgdXNlckZhdm9yaXRlcyk7XHJcbiAgICAgICAgc2V0RmF2b3JpdGVzKHVzZXJGYXZvcml0ZXMpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGZhdm9yaXRlczonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hDcnlwdG9zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2NyeXB0bycpO1xyXG4gICAgICAgIHNldENyeXB0b3MocmVzcG9uc2UuZGF0YS5kYXRhKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNyeXB0b3M6JywgZXJyb3IpO1xyXG4gICAgICAgIHNldEVycm9yKCdFcnJvciBmZXRjaGluZyBjcnlwdG9jdXJyZW5jeSBkYXRhJyk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaENyeXB0b3MoKTtcclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgIGZldGNoRmF2b3JpdGVzKCk7XHJcbiAgICB9XHJcbiAgfSwgW3VzZXJdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkRmF2b3JpdGUgPSBhc3luYyAoY3J5cHRvSWQsIGNyeXB0b05hbWUpID0+IHtcclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYEFkZGluZyAke2NyeXB0b05hbWV9IChJRDogJHtjcnlwdG9JZH0pIHRvIGZhdm9yaXRlc2ApO1xyXG4gICAgICAgIGF3YWl0IGFkZEZhdm9yaXRlKHVzZXIudWlkLCBjcnlwdG9JZCwgY3J5cHRvTmFtZSk7XHJcbiAgICAgICAgYXdhaXQgZmV0Y2hGYXZvcml0ZXMoKTtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoYEFkZGVkICR7Y3J5cHRvTmFtZX0gdG8gRmF2b3JpdGVzYCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYWRkaW5nIGZhdm9yaXRlOicsIGVycm9yKTtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoJ0ZhaWxlZCB0byBhZGQgdG8gRmF2b3JpdGVzJyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdVc2VyIG5vdCBsb2dnZWQgaW4nKTtcclxuICAgICAgd2luZG93LmFsZXJ0KCdQbGVhc2UgbG9nIGluIHRvIGFkZCBmYXZvcml0ZXMnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSZW1vdmVGYXZvcml0ZSA9IGFzeW5jIChjcnlwdG9JZCkgPT4ge1xyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgUmVtb3ZpbmcgY3J5cHRvIElEICR7Y3J5cHRvSWR9IGZyb20gZmF2b3JpdGVzYCk7XHJcbiAgICAgICAgYXdhaXQgcmVtb3ZlRmF2b3JpdGUodXNlci51aWQsIGNyeXB0b0lkKTtcclxuICAgICAgICBhd2FpdCBmZXRjaEZhdm9yaXRlcygpO1xyXG4gICAgICAgIHdpbmRvdy5hbGVydCgnUmVtb3ZlZCBmcm9tIEZhdm9yaXRlcycpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlbW92aW5nIGZhdm9yaXRlOicsIGVycm9yKTtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoJ0ZhaWxlZCB0byByZW1vdmUgZnJvbSBGYXZvcml0ZXMnKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ1VzZXIgbm90IGxvZ2dlZCBpbicpO1xyXG4gICAgICB3aW5kb3cuYWxlcnQoJ1BsZWFzZSBsb2cgaW4gdG8gcmVtb3ZlIGZhdm9yaXRlcycpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGlmIChpc0xvYWRpbmcpIHtcclxuICAgIHJldHVybiA8TG9hZGluZyAvPjtcclxuICB9XHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgcmV0dXJuIDxwPntlcnJvcn08L3A+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdjcnlwdG8tbGlzdC1wYWdlJz5cclxuICAgICAgPGgxPkNyeXB0b2N1cnJlbmN5IExpc3RpbmdzPC9oMT5cclxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImNyeXB0by10YWJsZVwiPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICA8dGg+TG9nbzwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cclxuICAgICAgICAgICAgPHRoPlN5bWJvbDwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5QcmljZSAoVVNEKTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD4yNGggVm9sdW1lPC90aD5cclxuICAgICAgICAgICAgPHRoPjI0aCBDaGFuZ2U8L3RoPlxyXG4gICAgICAgICAgICA8dGg+TWFya2V0IENhcDwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5BY3Rpb25zPC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7Y3J5cHRvcy5tYXAoKGNyeXB0bywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17Y3J5cHRvLmlkfT5cclxuICAgICAgICAgICAgICA8dGQ+e2luZGV4ICsgMX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD48aW1nIHNyYz17Y3J5cHRvLmxvZ299IGFsdD17Y3J5cHRvLm5hbWV9IGNsYXNzTmFtZT1cImNyeXB0by1sb2dvXCIgLz48L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57Y3J5cHRvLm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e2NyeXB0by5zeW1ib2x9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+JHtjcnlwdG8ucXVvdGUuVVNELnByaWNlLnRvRml4ZWQoMil9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+JHtjcnlwdG8ucXVvdGUuVVNELnZvbHVtZV8yNGgudG9GaXhlZCgyKX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e2NyeXB0by5xdW90ZS5VU0QucGVyY2VudF9jaGFuZ2VfMjRoID49IDAgPyAncG9zaXRpdmUtY2hhbmdlJyA6ICduZWdhdGl2ZS1jaGFuZ2UnfT5cclxuICAgICAgICAgICAgICAgIHtjcnlwdG8ucXVvdGUuVVNELnBlcmNlbnRfY2hhbmdlXzI0aC50b0ZpeGVkKDIpfSVcclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD4ke2NyeXB0by5xdW90ZS5VU0QubWFya2V0X2NhcC50b0ZpeGVkKDIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9jcnlwdG8vJHtjcnlwdG8uaWR9YH0gbGVnYWN5QmVoYXZpb3I+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRldGFpbHMtYnV0dG9uXCI+VmlldzwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIHt1c2VyICYmIChmYXZvcml0ZXMuc29tZShmYXZvcml0ZSA9PiBmYXZvcml0ZS5pZCA9PT0gY3J5cHRvLmlkKSA/IChcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmVGYXZvcml0ZShjcnlwdG8uaWQpfT5SZW1vdmUgZnJvbSBGYXZvcml0ZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQWRkRmF2b3JpdGUoY3J5cHRvLmlkLCBjcnlwdG8ubmFtZSl9PkFkZCB0byBGYXZvcml0ZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyeXB0b0xpc3Q7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiTGluayIsIkxvYWRpbmciLCJ1c2VBdXRoIiwiYWRkRmF2b3JpdGUiLCJyZW1vdmVGYXZvcml0ZSIsImdldEZhdm9yaXRlcyIsIkNyeXB0b0xpc3QiLCJ1c2VyIiwiY3J5cHRvcyIsInNldENyeXB0b3MiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiZmF2b3JpdGVzIiwic2V0RmF2b3JpdGVzIiwiZmV0Y2hGYXZvcml0ZXMiLCJ1c2VyRmF2b3JpdGVzIiwidWlkIiwiY29uc29sZSIsImxvZyIsImZldGNoQ3J5cHRvcyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImhhbmRsZUFkZEZhdm9yaXRlIiwiY3J5cHRvSWQiLCJjcnlwdG9OYW1lIiwid2luZG93IiwiYWxlcnQiLCJoYW5kbGVSZW1vdmVGYXZvcml0ZSIsInAiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJtYXAiLCJjcnlwdG8iLCJpbmRleCIsInRkIiwiaW1nIiwic3JjIiwibG9nbyIsImFsdCIsIm5hbWUiLCJzeW1ib2wiLCJxdW90ZSIsIlVTRCIsInByaWNlIiwidG9GaXhlZCIsInZvbHVtZV8yNGgiLCJwZXJjZW50X2NoYW5nZV8yNGgiLCJtYXJrZXRfY2FwIiwiaHJlZiIsImlkIiwibGVnYWN5QmVoYXZpb3IiLCJhIiwic29tZSIsImZhdm9yaXRlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/cryptoList.js\n"));

/***/ })

});