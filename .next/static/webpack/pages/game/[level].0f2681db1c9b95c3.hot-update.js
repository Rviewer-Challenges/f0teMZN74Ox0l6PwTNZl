"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/game/[level]",{

/***/ "./src/components/Game/Game.tsx":
/*!**************************************!*\
  !*** ./src/components/Game/Game.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_Button_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Container,Typography!=!@mui/material */ \"__barrel_optimize__?names=Box,Button,Container,Typography!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/constants */ \"./src/services/constants.ts\");\n/* harmony import */ var _services_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/helpers */ \"./src/services/helpers.ts\");\n/* harmony import */ var _services_hooks_useBelow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/hooks/useBelow */ \"./src/services/hooks/useBelow.ts\");\n/* harmony import */ var _GameCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GameCard */ \"./src/components/Game/GameCard/index.ts\");\n/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GameBoard */ \"./src/components/Game/GameBoard/index.ts\");\n// External imports\n\nvar _s = $RefreshSig$();\n\n\n\n// Internal imports\n\n\n\n\n\nconst DELAY_RESET_SELECTION = 1000;\nconst TIME_TO_PLAY = 60;\nconst Game = (param)=>{\n    let { difficulty = \"easy\", id = 0 } = param;\n    _s();\n    const isMobile = (0,_services_hooks_useBelow__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"sm\");\n    // Import the rows, columns and options from the gameDifficulties object\n    const { rows, columns, options, rowsMobile, columnsMobile } = _services_constants__WEBPACK_IMPORTED_MODULE_3__.gameDifficulties[difficulty];\n    const actualRows = isMobile ? rowsMobile : rows;\n    const actualColumns = isMobile ? columnsMobile : columns;\n    // States\n    const [uncoveredMatrix, setUncoveredMatrix] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>(0,_services_helpers__WEBPACK_IMPORTED_MODULE_4__.createInitialStateMatrix)(actualRows, actualColumns));\n    const [el1, setEl1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [el2, setEl2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [countDown, setCountDown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(TIME_TO_PLAY);\n    const [startGame, setStartGame] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [moves, setMoves] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [remainingPairs, setRemainingPairs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(options);\n    const timerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const truthState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,_services_helpers__WEBPACK_IMPORTED_MODULE_4__.createTruthStateMatrix)(options, actualRows, actualColumns), [\n        actualRows,\n        actualColumns,\n        options,\n        id\n    ]);\n    const handleCardSelectionEffect = ()=>{\n        if (el1 && el2) {\n            if (truthState[el1[0]][el1[1]] === truthState[el2[0]][el2[1]]) {\n                setRemainingPairs((prev)=>prev - 1);\n                setUncoveredMatrix((prev)=>{\n                    const newMatrix = [\n                        ...prev\n                    ];\n                    newMatrix[el1[0]][el1[1]] = true;\n                    newMatrix[el2[0]][el2[1]] = true;\n                    return newMatrix;\n                });\n            }\n            // Reset the current Selected values after 1s\n            setTimeout(()=>{\n                setEl1(null);\n                setEl2(null);\n            }, DELAY_RESET_SELECTION);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (el1 && el2) {\n            if (truthState[el1[0]][el1[1]] === truthState[el2[0]][el2[1]]) {\n                setRemainingPairs((prev)=>prev - 1);\n                setUncoveredMatrix((prev)=>{\n                    const newMatrix = [\n                        ...prev\n                    ];\n                    newMatrix[el1[0]][el1[1]] = true;\n                    newMatrix[el2[0]][el2[1]] = true;\n                    return newMatrix;\n                });\n            }\n            // Reset the current Selected values after 1s\n            setTimeout(()=>{\n                setEl1(null);\n                setEl2(null);\n            }, DELAY_RESET_SELECTION);\n        }\n    }, [\n        el1,\n        el2,\n        setEl1,\n        setEl2,\n        truthState,\n        setUncoveredMatrix\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (startGame) {\n            timerRef.current = setInterval(()=>{\n                setCountDown((prev)=>prev - 1);\n            }, 1000);\n        }\n        return ()=>{\n            if (timerRef.current) clearInterval(timerRef.current);\n        };\n    }, [\n        startGame\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (countDown === 0) {\n            if (timerRef.current) clearInterval(timerRef.current);\n            setResult(\"lost\");\n        }\n        if (uncoveredMatrix.every((row)=>row.every((cell)=>cell))) {\n            if (timerRef.current) clearInterval(timerRef.current);\n            setResult(\"won\");\n        }\n    }, [\n        countDown,\n        uncoveredMatrix\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (id > 0) {\n            setUncoveredMatrix(()=>(0,_services_helpers__WEBPACK_IMPORTED_MODULE_4__.createInitialStateMatrix)(actualRows, actualColumns));\n            setEl1(null);\n            setEl2(null);\n            setCountDown(TIME_TO_PLAY);\n            setStartGame(false);\n            setResult(null);\n            setMoves(0);\n            setRemainingPairs(options);\n        }\n    }, [\n        id,\n        actualColumns,\n        actualRows,\n        options\n    ]);\n    const handleClick = (rowIndex, cellIndex)=>{\n        if (uncoveredMatrix[rowIndex][cellIndex]) return;\n        if (el1 !== null && el1[0] === rowIndex && el1[1] === cellIndex) return;\n        if (el1 === null) {\n            setEl1([\n                rowIndex,\n                cellIndex\n            ]);\n        } else if (el2 === null) {\n            setMoves((prev)=>prev + 1);\n            setEl2([\n                rowIndex,\n                cellIndex\n            ]);\n        }\n    };\n    const beginGame = ()=>{\n        setStartGame(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__.Container, {\n        maxWidth: \"sm\",\n        sx: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            minHeight: \"100vh\",\n            gap: 0\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: [\n                        difficulty.toUpperCase(),\n                        \" Memory Game\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\jason\\\\Dev\\\\f0teMZN74Ox0l6PwTNZl\\\\src\\\\components\\\\Game\\\\Game.tsx\",\n                    lineNumber: 153,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jason\\\\Dev\\\\f0teMZN74Ox0l6PwTNZl\\\\src\\\\components\\\\Game\\\\Game.tsx\",\n                lineNumber: 152,\n                columnNumber: 7\n            }, undefined),\n            startGame && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GameBoard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                countDown: countDown,\n                moves: moves,\n                remainingPairs: remainingPairs,\n                result: result,\n                id: id\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jason\\\\Dev\\\\f0teMZN74Ox0l6PwTNZl\\\\src\\\\components\\\\Game\\\\Game.tsx\",\n                lineNumber: 157,\n                columnNumber: 9\n            }, undefined),\n            startGame && !result && truthState.map((row, rowIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                    display: \"flex\",\n                    gap: 1,\n                    sx: {\n                        mb: 1\n                    },\n                    children: row.map((cell, cellIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GameCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            rowIndex: rowIndex,\n                            cellIndex: cellIndex,\n                            uncovered: uncoveredMatrix[rowIndex][cellIndex] || el1 !== null && rowIndex === el1[0] && cellIndex === el1[1] || el2 !== null && rowIndex === el2[0] && cellIndex === el2[1],\n                            imageId: cell,\n                            onClick: handleClick\n                        }, cellIndex, false, {\n                            fileName: \"C:\\\\Users\\\\jason\\\\Dev\\\\f0teMZN74Ox0l6PwTNZl\\\\src\\\\components\\\\Game\\\\Game.tsx\",\n                            lineNumber: 170,\n                            columnNumber: 15\n                        }, undefined))\n                }, rowIndex, false, {\n                    fileName: \"C:\\\\Users\\\\jason\\\\Dev\\\\f0teMZN74Ox0l6PwTNZl\\\\src\\\\components\\\\Game\\\\Game.tsx\",\n                    lineNumber: 168,\n                    columnNumber: 11\n                }, undefined)),\n            !startGame && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                variant: \"contained\",\n                onClick: beginGame,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                    variant: \"h3\",\n                    color: \"white\",\n                    children: \"Start Game\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jason\\\\Dev\\\\f0teMZN74Ox0l6PwTNZl\\\\src\\\\components\\\\Game\\\\Game.tsx\",\n                    lineNumber: 189,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jason\\\\Dev\\\\f0teMZN74Ox0l6PwTNZl\\\\src\\\\components\\\\Game\\\\Game.tsx\",\n                lineNumber: 188,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jason\\\\Dev\\\\f0teMZN74Ox0l6PwTNZl\\\\src\\\\components\\\\Game\\\\Game.tsx\",\n        lineNumber: 141,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Game, \"L2O9tAvGDWNqzgS52qrsYe/2GnU=\", false, function() {\n    return [\n        _services_hooks_useBelow__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Game;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVVBOzRCQUNWQyxXQUFXQTs0QkFDWGMsV0FDRTVDLGVBQWUsQ0FBQzZCLFNBQVMsQ0FBQ0MsVUFBVSxJQUNuQzVCLFFBQVEsUUFDUDJCLGFBQWEzQixHQUFHLENBQUMsRUFBRSxJQUNuQjRCLGNBQWM1QixHQUFHLENBQUMsRUFBRSxJQUNyQkUsUUFBUSxRQUFReUIsYUFBYXpCLEdBQUcsQ0FBQyxFQUFFLElBQUkwQixjQUFjMUIsR0FBRyxDQUFDLEVBQUU7NEJBRTlEeUMsU0FBU2xCOzRCQUNUbUIsU0FBU2xCOzJCQVhKRTs7Ozs7bUJBSEREOzs7OztZQW1CYixDQUFDckIsMkJBQ0EsOERBQUM5Qix1R0FBTUE7Z0JBQUNxRSxTQUFRO2dCQUFZRCxTQUFTZjswQkFDbkMsNEVBQUNwRCwyR0FBVUE7b0JBQUNvRSxTQUFRO29CQUFLQyxPQUFNOzhCQUFROzs7Ozs7Ozs7Ozs7Ozs7OztBQU9qRDtHQTVLTTNEOztRQUNhTCxnRUFBUUE7OztLQURyQks7QUE4S04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvR2FtZS9HYW1lLnRzeD84ZGU2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4dGVybmFsIGltcG9ydHNcbmltcG9ydCB7IEZDLCB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgQm94LCBCdXR0b24sIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG4vLyBJbnRlcm5hbCBpbXBvcnRzXG5pbXBvcnQgeyBnYW1lRGlmZmljdWx0aWVzIH0gZnJvbSBcIkAvc2VydmljZXMvY29uc3RhbnRzXCI7XG5pbXBvcnQge1xuICBjcmVhdGVJbml0aWFsU3RhdGVNYXRyaXgsXG4gIGNyZWF0ZVRydXRoU3RhdGVNYXRyaXgsXG59IGZyb20gXCJAL3NlcnZpY2VzL2hlbHBlcnNcIjtcbmltcG9ydCB1c2VCZWxvdyBmcm9tIFwiQC9zZXJ2aWNlcy9ob29rcy91c2VCZWxvd1wiO1xuaW1wb3J0IEdhbWVDYXJkIGZyb20gXCIuL0dhbWVDYXJkXCI7XG5pbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuL0dhbWVCb2FyZFwiO1xuXG50eXBlIEdhbWVQcm9wcyA9IHtcbiAgZGlmZmljdWx0eT86IFwiZWFzeVwiIHwgXCJtZWRpdW1cIiB8IFwiaGFyZFwiO1xuICBpZD86IG51bWJlcjtcbn07XG5cbmNvbnN0IERFTEFZX1JFU0VUX1NFTEVDVElPTiA9IDEwMDA7XG5jb25zdCBUSU1FX1RPX1BMQVkgPSA2MDtcblxuY29uc3QgR2FtZTogRkM8R2FtZVByb3BzPiA9ICh7IGRpZmZpY3VsdHkgPSBcImVhc3lcIiwgaWQgPSAwIH0pID0+IHtcbiAgY29uc3QgaXNNb2JpbGUgPSB1c2VCZWxvdyhcInNtXCIpO1xuICAvLyBJbXBvcnQgdGhlIHJvd3MsIGNvbHVtbnMgYW5kIG9wdGlvbnMgZnJvbSB0aGUgZ2FtZURpZmZpY3VsdGllcyBvYmplY3RcbiAgY29uc3QgeyByb3dzLCBjb2x1bW5zLCBvcHRpb25zLCByb3dzTW9iaWxlLCBjb2x1bW5zTW9iaWxlIH0gPVxuICAgIGdhbWVEaWZmaWN1bHRpZXNbZGlmZmljdWx0eV07XG4gIGNvbnN0IGFjdHVhbFJvd3MgPSBpc01vYmlsZSA/IHJvd3NNb2JpbGUgOiByb3dzO1xuICBjb25zdCBhY3R1YWxDb2x1bW5zID0gaXNNb2JpbGUgPyBjb2x1bW5zTW9iaWxlIDogY29sdW1ucztcblxuICAvLyBTdGF0ZXNcbiAgY29uc3QgW3VuY292ZXJlZE1hdHJpeCwgc2V0VW5jb3ZlcmVkTWF0cml4XSA9IHVzZVN0YXRlKCgpID0+XG4gICAgY3JlYXRlSW5pdGlhbFN0YXRlTWF0cml4KGFjdHVhbFJvd3MsIGFjdHVhbENvbHVtbnMpXG4gICk7XG4gIGNvbnN0IFtlbDEsIHNldEVsMV0gPSB1c2VTdGF0ZTxudW1iZXJbXSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbZWwyLCBzZXRFbDJdID0gdXNlU3RhdGU8bnVtYmVyW10gfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2NvdW50RG93biwgc2V0Q291bnREb3duXSA9IHVzZVN0YXRlKFRJTUVfVE9fUExBWSk7XG4gIGNvbnN0IFtzdGFydEdhbWUsIHNldFN0YXJ0R2FtZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZTxcIndvblwiIHwgXCJsb3N0XCIgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW21vdmVzLCBzZXRNb3Zlc10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3JlbWFpbmluZ1BhaXJzLCBzZXRSZW1haW5pbmdQYWlyc10gPSB1c2VTdGF0ZShvcHRpb25zKTtcbiAgY29uc3QgdGltZXJSZWYgPSB1c2VSZWY8Tm9kZUpTLlRpbWVvdXQgfCBudWxsPihudWxsKTtcblxuICBjb25zdCB0cnV0aFN0YXRlID0gdXNlTWVtbyhcbiAgICAoKSA9PiBjcmVhdGVUcnV0aFN0YXRlTWF0cml4KG9wdGlvbnMsIGFjdHVhbFJvd3MsIGFjdHVhbENvbHVtbnMpLFxuICAgIFthY3R1YWxSb3dzLCBhY3R1YWxDb2x1bW5zLCBvcHRpb25zLCBpZF1cbiAgKTtcblxuICBjb25zdCBoYW5kbGVDYXJkU2VsZWN0aW9uRWZmZWN0ID0gKCkgPT4ge1xuICAgIGlmIChlbDEgJiYgZWwyKSB7XG4gICAgICBpZiAodHJ1dGhTdGF0ZVtlbDFbMF1dW2VsMVsxXV0gPT09IHRydXRoU3RhdGVbZWwyWzBdXVtlbDJbMV1dKSB7XG4gICAgICAgIHNldFJlbWFpbmluZ1BhaXJzKChwcmV2KSA9PiBwcmV2IC0gMSk7XG4gICAgICAgIHNldFVuY292ZXJlZE1hdHJpeCgocHJldikgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld01hdHJpeCA9IFsuLi5wcmV2XTtcbiAgICAgICAgICBuZXdNYXRyaXhbZWwxWzBdXVtlbDFbMV1dID0gdHJ1ZTtcbiAgICAgICAgICBuZXdNYXRyaXhbZWwyWzBdXVtlbDJbMV1dID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gbmV3TWF0cml4O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vIFJlc2V0IHRoZSBjdXJyZW50IFNlbGVjdGVkIHZhbHVlcyBhZnRlciAxc1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldEVsMShudWxsKTtcbiAgICAgICAgc2V0RWwyKG51bGwpO1xuICAgICAgfSwgREVMQVlfUkVTRVRfU0VMRUNUSU9OKTtcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChlbDEgJiYgZWwyKSB7XG4gICAgICBpZiAodHJ1dGhTdGF0ZVtlbDFbMF1dW2VsMVsxXV0gPT09IHRydXRoU3RhdGVbZWwyWzBdXVtlbDJbMV1dKSB7XG4gICAgICAgIHNldFJlbWFpbmluZ1BhaXJzKChwcmV2KSA9PiBwcmV2IC0gMSk7XG4gICAgICAgIHNldFVuY292ZXJlZE1hdHJpeCgocHJldikgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld01hdHJpeCA9IFsuLi5wcmV2XTtcbiAgICAgICAgICBuZXdNYXRyaXhbZWwxWzBdXVtlbDFbMV1dID0gdHJ1ZTtcbiAgICAgICAgICBuZXdNYXRyaXhbZWwyWzBdXVtlbDJbMV1dID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gbmV3TWF0cml4O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vIFJlc2V0IHRoZSBjdXJyZW50IFNlbGVjdGVkIHZhbHVlcyBhZnRlciAxc1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldEVsMShudWxsKTtcbiAgICAgICAgc2V0RWwyKG51bGwpO1xuICAgICAgfSwgREVMQVlfUkVTRVRfU0VMRUNUSU9OKTtcbiAgICB9XG4gIH0sIFtlbDEsIGVsMiwgc2V0RWwxLCBzZXRFbDIsIHRydXRoU3RhdGUsIHNldFVuY292ZXJlZE1hdHJpeF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHN0YXJ0R2FtZSkge1xuICAgICAgdGltZXJSZWYuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2V0Q291bnREb3duKChwcmV2KSA9PiBwcmV2IC0gMSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmICh0aW1lclJlZi5jdXJyZW50KSBjbGVhckludGVydmFsKHRpbWVyUmVmLmN1cnJlbnQpO1xuICAgIH07XG4gIH0sIFtzdGFydEdhbWVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb3VudERvd24gPT09IDApIHtcbiAgICAgIGlmICh0aW1lclJlZi5jdXJyZW50KSBjbGVhckludGVydmFsKHRpbWVyUmVmLmN1cnJlbnQpO1xuICAgICAgc2V0UmVzdWx0KFwibG9zdFwiKTtcbiAgICB9XG4gICAgaWYgKHVuY292ZXJlZE1hdHJpeC5ldmVyeSgocm93KSA9PiByb3cuZXZlcnkoKGNlbGwpID0+IGNlbGwpKSkge1xuICAgICAgaWYgKHRpbWVyUmVmLmN1cnJlbnQpIGNsZWFySW50ZXJ2YWwodGltZXJSZWYuY3VycmVudCk7XG4gICAgICBzZXRSZXN1bHQoXCJ3b25cIik7XG4gICAgfVxuICB9LCBbY291bnREb3duLCB1bmNvdmVyZWRNYXRyaXhdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpZCA+IDApIHtcbiAgICAgIHNldFVuY292ZXJlZE1hdHJpeCgoKSA9PlxuICAgICAgICBjcmVhdGVJbml0aWFsU3RhdGVNYXRyaXgoYWN0dWFsUm93cywgYWN0dWFsQ29sdW1ucylcbiAgICAgICk7XG4gICAgICBzZXRFbDEobnVsbCk7XG4gICAgICBzZXRFbDIobnVsbCk7XG4gICAgICBzZXRDb3VudERvd24oVElNRV9UT19QTEFZKTtcbiAgICAgIHNldFN0YXJ0R2FtZShmYWxzZSk7XG4gICAgICBzZXRSZXN1bHQobnVsbCk7XG4gICAgICBzZXRNb3ZlcygwKTtcbiAgICAgIHNldFJlbWFpbmluZ1BhaXJzKG9wdGlvbnMpO1xuICAgIH1cbiAgfSwgW2lkLCBhY3R1YWxDb2x1bW5zLCBhY3R1YWxSb3dzLCBvcHRpb25zXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAocm93SW5kZXg6IG51bWJlciwgY2VsbEluZGV4OiBudW1iZXIpID0+IHtcbiAgICBpZiAodW5jb3ZlcmVkTWF0cml4W3Jvd0luZGV4XVtjZWxsSW5kZXhdKSByZXR1cm47XG4gICAgaWYgKGVsMSAhPT0gbnVsbCAmJiBlbDFbMF0gPT09IHJvd0luZGV4ICYmIGVsMVsxXSA9PT0gY2VsbEluZGV4KSByZXR1cm47XG4gICAgaWYgKGVsMSA9PT0gbnVsbCkge1xuICAgICAgc2V0RWwxKFtyb3dJbmRleCwgY2VsbEluZGV4XSk7XG4gICAgfSBlbHNlIGlmIChlbDIgPT09IG51bGwpIHtcbiAgICAgIHNldE1vdmVzKChwcmV2KSA9PiBwcmV2ICsgMSk7XG4gICAgICBzZXRFbDIoW3Jvd0luZGV4LCBjZWxsSW5kZXhdKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYmVnaW5HYW1lID0gKCkgPT4ge1xuICAgIHNldFN0YXJ0R2FtZSh0cnVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXJcbiAgICAgIG1heFdpZHRoPVwic21cIlxuICAgICAgc3g9e3tcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICBtaW5IZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgICAgZ2FwOiAwLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntkaWZmaWN1bHR5LnRvVXBwZXJDYXNlKCl9IE1lbW9yeSBHYW1lPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHsvKiBSZW5kZXIgdGhlIHRhYmxlICovfVxuICAgICAge3N0YXJ0R2FtZSAmJiAoXG4gICAgICAgIDxHYW1lQm9hcmRcbiAgICAgICAgICBjb3VudERvd249e2NvdW50RG93bn1cbiAgICAgICAgICBtb3Zlcz17bW92ZXN9XG4gICAgICAgICAgcmVtYWluaW5nUGFpcnM9e3JlbWFpbmluZ1BhaXJzfVxuICAgICAgICAgIHJlc3VsdD17cmVzdWx0fVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7c3RhcnRHYW1lICYmXG4gICAgICAgICFyZXN1bHQgJiZcbiAgICAgICAgdHJ1dGhTdGF0ZS5tYXAoKHJvdywgcm93SW5kZXgpID0+IChcbiAgICAgICAgICA8Qm94IGtleT17cm93SW5kZXh9IGRpc3BsYXk9XCJmbGV4XCIgZ2FwPXsxfSBzeD17eyBtYjogMSB9fT5cbiAgICAgICAgICAgIHtyb3cubWFwKChjZWxsLCBjZWxsSW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPEdhbWVDYXJkXG4gICAgICAgICAgICAgICAga2V5PXtjZWxsSW5kZXh9XG4gICAgICAgICAgICAgICAgcm93SW5kZXg9e3Jvd0luZGV4fVxuICAgICAgICAgICAgICAgIGNlbGxJbmRleD17Y2VsbEluZGV4fVxuICAgICAgICAgICAgICAgIHVuY292ZXJlZD17XG4gICAgICAgICAgICAgICAgICB1bmNvdmVyZWRNYXRyaXhbcm93SW5kZXhdW2NlbGxJbmRleF0gfHxcbiAgICAgICAgICAgICAgICAgIChlbDEgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgcm93SW5kZXggPT09IGVsMVswXSAmJlxuICAgICAgICAgICAgICAgICAgICBjZWxsSW5kZXggPT09IGVsMVsxXSkgfHxcbiAgICAgICAgICAgICAgICAgIChlbDIgIT09IG51bGwgJiYgcm93SW5kZXggPT09IGVsMlswXSAmJiBjZWxsSW5kZXggPT09IGVsMlsxXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW1hZ2VJZD17Y2VsbH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApKX1cbiAgICAgIHshc3RhcnRHYW1lICYmIChcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17YmVnaW5HYW1lfT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBjb2xvcj1cIndoaXRlXCI+XG4gICAgICAgICAgICBTdGFydCBHYW1lXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIl0sIm5hbWVzIjpbInVzZU1lbW8iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkNvbnRhaW5lciIsIkJveCIsIkJ1dHRvbiIsIlR5cG9ncmFwaHkiLCJIZWFkIiwiZ2FtZURpZmZpY3VsdGllcyIsImNyZWF0ZUluaXRpYWxTdGF0ZU1hdHJpeCIsImNyZWF0ZVRydXRoU3RhdGVNYXRyaXgiLCJ1c2VCZWxvdyIsIkdhbWVDYXJkIiwiR2FtZUJvYXJkIiwiREVMQVlfUkVTRVRfU0VMRUNUSU9OIiwiVElNRV9UT19QTEFZIiwiR2FtZSIsImRpZmZpY3VsdHkiLCJpZCIsImlzTW9iaWxlIiwicm93cyIsImNvbHVtbnMiLCJvcHRpb25zIiwicm93c01vYmlsZSIsImNvbHVtbnNNb2JpbGUiLCJhY3R1YWxSb3dzIiwiYWN0dWFsQ29sdW1ucyIsInVuY292ZXJlZE1hdHJpeCIsInNldFVuY292ZXJlZE1hdHJpeCIsImVsMSIsInNldEVsMSIsImVsMiIsInNldEVsMiIsImNvdW50RG93biIsInNldENvdW50RG93biIsInN0YXJ0R2FtZSIsInNldFN0YXJ0R2FtZSIsInJlc3VsdCIsInNldFJlc3VsdCIsIm1vdmVzIiwic2V0TW92ZXMiLCJyZW1haW5pbmdQYWlycyIsInNldFJlbWFpbmluZ1BhaXJzIiwidGltZXJSZWYiLCJ0cnV0aFN0YXRlIiwiaGFuZGxlQ2FyZFNlbGVjdGlvbkVmZmVjdCIsInByZXYiLCJuZXdNYXRyaXgiLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImV2ZXJ5Iiwicm93IiwiY2VsbCIsImhhbmRsZUNsaWNrIiwicm93SW5kZXgiLCJjZWxsSW5kZXgiLCJiZWdpbkdhbWUiLCJtYXhXaWR0aCIsInN4IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJtaW5IZWlnaHQiLCJnYXAiLCJ0aXRsZSIsInRvVXBwZXJDYXNlIiwibWFwIiwibWIiLCJ1bmNvdmVyZWQiLCJpbWFnZUlkIiwib25DbGljayIsInZhcmlhbnQiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Game/Game.tsx\n"));

/***/ })

});