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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_Button_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Container,Typography!=!@mui/material */ \"__barrel_optimize__?names=Box,Button,Container,Typography!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/constants */ \"./src/services/constants.ts\");\n/* harmony import */ var _services_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/helpers */ \"./src/services/helpers.ts\");\n/* harmony import */ var _services_hooks_useBelow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/hooks/useBelow */ \"./src/services/hooks/useBelow.ts\");\n/* harmony import */ var _GameCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GameCard */ \"./src/components/Game/GameCard/index.ts\");\n/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GameBoard */ \"./src/components/Game/GameBoard/index.ts\");\n// External imports\n\nvar _s = $RefreshSig$();\n\n\n\n// Internal imports\n\n\n\n\n\nconst DELAY_RESET_SELECTION = 1000;\nconst TIME_TO_PLAY = 60;\nconst Game = (param)=>{\n    let { difficulty = \"easy\", id = 0 } = param;\n    _s();\n    const isMobile = (0,_services_hooks_useBelow__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"sm\");\n    // Import the rows, columns and options from the gameDifficulties object\n    const { rows, columns, options, rowsMobile, columnsMobile } = _services_constants__WEBPACK_IMPORTED_MODULE_3__.gameDifficulties[difficulty];\n    const actualRows = isMobile ? rowsMobile : rows;\n    const actualColumns = isMobile ? columnsMobile : columns;\n    // States\n    const [uncoveredMatrix, setUncoveredMatrix] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>(0,_services_helpers__WEBPACK_IMPORTED_MODULE_4__.createInitialStateMatrix)(actualRows, actualColumns));\n    const [el1, setEl1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [el2, setEl2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [countDown, setCountDown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(TIME_TO_PLAY);\n    const [startGame, setStartGame] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [moves, setMoves] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [remainingPairs, setRemainingPairs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(options);\n    const timerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const truthState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,_services_helpers__WEBPACK_IMPORTED_MODULE_4__.createTruthStateMatrix)(options, actualRows, actualColumns), [\n        actualRows,\n        actualColumns,\n        options,\n        id\n    ]);\n    /**\n   * This effect will compare the two selected cards and if they are equal\n   */ const handleCompareTwoSelectedCardsEffect = ()=>{\n        if (el1 && el2) {\n            if (truthState[el1[0]][el1[1]] === truthState[el2[0]][el2[1]]) {\n                setRemainingPairs((prev)=>prev - 1);\n                setUncoveredMatrix((prev)=>{\n                    const newMatrix = [\n                        ...prev\n                    ];\n                    newMatrix[el1[0]][el1[1]] = true;\n                    newMatrix[el2[0]][el2[1]] = true;\n                    return newMatrix;\n                });\n            }\n            // Reset the current Selected values after 1s\n            setTimeout(()=>{\n                setEl1(null);\n                setEl2(null);\n            }, DELAY_RESET_SELECTION);\n        }\n    };\n    /**\n   * This effect will start the countdown\n   */ const handleCountDownEffect = ()=>{\n        if (startGame) {\n            timerRef.current = setInterval(()=>{\n                setCountDown((prev)=>prev - 1);\n            }, 1000);\n        }\n    };\n    /**\n   * This effect will check if the game is over\n   */ const handleEndGameEffect = ()=>{\n        if (countDown === 0) {\n            if (timerRef.current) clearInterval(timerRef.current);\n            setResult(\"lost\");\n        }\n        if (uncoveredMatrix.every((row)=>row.every((cell)=>cell))) {\n            if (timerRef.current) clearInterval(timerRef.current);\n            setResult(\"won\");\n        }\n    };\n    /**\n   * \n   */ const handleResetGameEffect = ()=>{\n        if (id > 0) {\n            setUncoveredMatrix(()=>(0,_services_helpers__WEBPACK_IMPORTED_MODULE_4__.createInitialStateMatrix)(actualRows, actualColumns));\n            setEl1(null);\n            setEl2(null);\n            setCountDown(TIME_TO_PLAY);\n            setStartGame(false);\n            setResult(null);\n            setMoves(0);\n            setRemainingPairs(options);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        handleCompareTwoSelectedCardsEffect();\n    }, [\n        el1,\n        el2,\n        truthState\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        handleCountDownEffect();\n        return ()=>{\n            if (timerRef.current) clearInterval(timerRef.current);\n        };\n    }, [\n        startGame\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        handleEndGameEffect();\n    }, [\n        countDown,\n        uncoveredMatrix\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        handleResetGameEffect();\n    }, [\n        id,\n        actualColumns,\n        actualRows,\n        options\n    ]);\n    const handleClick = (rowIndex, cellIndex)=>{\n        if (uncoveredMatrix[rowIndex][cellIndex]) return;\n        if (el1 !== null && el1[0] === rowIndex && el1[1] === cellIndex) return;\n        if (el1 === null) {\n            setEl1([\n                rowIndex,\n                cellIndex\n            ]);\n        } else if (el2 === null) {\n            setMoves((prev)=>prev + 1);\n            setEl2([\n                rowIndex,\n                cellIndex\n            ]);\n        }\n    };\n    const beginGame = ()=>{\n        setStartGame(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__.Container, {\n        maxWidth: \"sm\",\n        sx: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            minHeight: \"100vh\",\n            gap: 0\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: [\n                        difficulty.toUpperCase(),\n                        \" Memory Game\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\jason\\\\Dev\\\\f0teMZN74Ox0l6PwTNZl\\\\src\\\\components\\\\Game\\\\Game.tsx\",\n                    lineNumber: 162,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jason\\\\Dev\\\\f0teMZN74Ox0l6PwTNZl\\\\src\\\\components\\\\Game\\\\Game.tsx\",\n                lineNumber: 161,\n                columnNumber: 7\n            }, undefined),\n            startGame && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GameBoard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                countDown: countDown,\n                moves: moves,\n                remainingPairs: remainingPairs,\n                result: result,\n                id: id\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jason\\\\Dev\\\\f0teMZN74Ox0l6PwTNZl\\\\src\\\\components\\\\Game\\\\Game.tsx\",\n                lineNumber: 166,\n                columnNumber: 9\n            }, undefined),\n            startGame && !result && truthState.map((row, rowIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                    display: \"flex\",\n                    gap: 1,\n                    sx: {\n                        mb: 1\n                    },\n                    children: row.map((cell, cellIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GameCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            rowIndex: rowIndex,\n                            cellIndex: cellIndex,\n                            uncovered: uncoveredMatrix[rowIndex][cellIndex] || el1 !== null && rowIndex === el1[0] && cellIndex === el1[1] || el2 !== null && rowIndex === el2[0] && cellIndex === el2[1],\n                            imageId: cell,\n                            onClick: handleClick\n                        }, cellIndex, false, {\n                            fileName: \"C:\\\\Users\\\\jason\\\\Dev\\\\f0teMZN74Ox0l6PwTNZl\\\\src\\\\components\\\\Game\\\\Game.tsx\",\n                            lineNumber: 179,\n                            columnNumber: 15\n                        }, undefined))\n                }, rowIndex, false, {\n                    fileName: \"C:\\\\Users\\\\jason\\\\Dev\\\\f0teMZN74Ox0l6PwTNZl\\\\src\\\\components\\\\Game\\\\Game.tsx\",\n                    lineNumber: 177,\n                    columnNumber: 11\n                }, undefined)),\n            !startGame && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                variant: \"contained\",\n                onClick: beginGame,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                    variant: \"h3\",\n                    color: \"white\",\n                    children: \"Start Game\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jason\\\\Dev\\\\f0teMZN74Ox0l6PwTNZl\\\\src\\\\components\\\\Game\\\\Game.tsx\",\n                    lineNumber: 198,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jason\\\\Dev\\\\f0teMZN74Ox0l6PwTNZl\\\\src\\\\components\\\\Game\\\\Game.tsx\",\n                lineNumber: 197,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jason\\\\Dev\\\\f0teMZN74Ox0l6PwTNZl\\\\src\\\\components\\\\Game\\\\Game.tsx\",\n        lineNumber: 150,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Game, \"L2O9tAvGDWNqzgS52qrsYe/2GnU=\", false, function() {\n    return [\n        _services_hooks_useBelow__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Game;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0JBQUtDLE9BQU07OEJBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2pEO0dBckxNOUQ7O1FBQ2FMLGdFQUFRQTs7O0tBRHJCSztBQXVMTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9HYW1lL0dhbWUudHN4PzhkZTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXh0ZXJuYWwgaW1wb3J0c1xuaW1wb3J0IHsgRkMsIHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBCb3gsIEJ1dHRvbiwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbi8vIEludGVybmFsIGltcG9ydHNcbmltcG9ydCB7IGdhbWVEaWZmaWN1bHRpZXMgfSBmcm9tIFwiQC9zZXJ2aWNlcy9jb25zdGFudHNcIjtcbmltcG9ydCB7XG4gIGNyZWF0ZUluaXRpYWxTdGF0ZU1hdHJpeCxcbiAgY3JlYXRlVHJ1dGhTdGF0ZU1hdHJpeCxcbn0gZnJvbSBcIkAvc2VydmljZXMvaGVscGVyc1wiO1xuaW1wb3J0IHVzZUJlbG93IGZyb20gXCJAL3NlcnZpY2VzL2hvb2tzL3VzZUJlbG93XCI7XG5pbXBvcnQgR2FtZUNhcmQgZnJvbSBcIi4vR2FtZUNhcmRcIjtcbmltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vR2FtZUJvYXJkXCI7XG5cbnR5cGUgR2FtZVByb3BzID0ge1xuICBkaWZmaWN1bHR5PzogXCJlYXN5XCIgfCBcIm1lZGl1bVwiIHwgXCJoYXJkXCI7XG4gIGlkPzogbnVtYmVyO1xufTtcblxuY29uc3QgREVMQVlfUkVTRVRfU0VMRUNUSU9OID0gMTAwMDtcbmNvbnN0IFRJTUVfVE9fUExBWSA9IDYwO1xuXG5jb25zdCBHYW1lOiBGQzxHYW1lUHJvcHM+ID0gKHsgZGlmZmljdWx0eSA9IFwiZWFzeVwiLCBpZCA9IDAgfSkgPT4ge1xuICBjb25zdCBpc01vYmlsZSA9IHVzZUJlbG93KFwic21cIik7XG4gIC8vIEltcG9ydCB0aGUgcm93cywgY29sdW1ucyBhbmQgb3B0aW9ucyBmcm9tIHRoZSBnYW1lRGlmZmljdWx0aWVzIG9iamVjdFxuICBjb25zdCB7IHJvd3MsIGNvbHVtbnMsIG9wdGlvbnMsIHJvd3NNb2JpbGUsIGNvbHVtbnNNb2JpbGUgfSA9XG4gICAgZ2FtZURpZmZpY3VsdGllc1tkaWZmaWN1bHR5XTtcbiAgY29uc3QgYWN0dWFsUm93cyA9IGlzTW9iaWxlID8gcm93c01vYmlsZSA6IHJvd3M7XG4gIGNvbnN0IGFjdHVhbENvbHVtbnMgPSBpc01vYmlsZSA/IGNvbHVtbnNNb2JpbGUgOiBjb2x1bW5zO1xuXG4gIC8vIFN0YXRlc1xuICBjb25zdCBbdW5jb3ZlcmVkTWF0cml4LCBzZXRVbmNvdmVyZWRNYXRyaXhdID0gdXNlU3RhdGUoKCkgPT5cbiAgICBjcmVhdGVJbml0aWFsU3RhdGVNYXRyaXgoYWN0dWFsUm93cywgYWN0dWFsQ29sdW1ucylcbiAgKTtcbiAgY29uc3QgW2VsMSwgc2V0RWwxXSA9IHVzZVN0YXRlPG51bWJlcltdIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtlbDIsIHNldEVsMl0gPSB1c2VTdGF0ZTxudW1iZXJbXSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbY291bnREb3duLCBzZXRDb3VudERvd25dID0gdXNlU3RhdGUoVElNRV9UT19QTEFZKTtcbiAgY29uc3QgW3N0YXJ0R2FtZSwgc2V0U3RhcnRHYW1lXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlPFwid29uXCIgfCBcImxvc3RcIiB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbbW92ZXMsIHNldE1vdmVzXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbcmVtYWluaW5nUGFpcnMsIHNldFJlbWFpbmluZ1BhaXJzXSA9IHVzZVN0YXRlKG9wdGlvbnMpO1xuICBjb25zdCB0aW1lclJlZiA9IHVzZVJlZjxOb2RlSlMuVGltZW91dCB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IHRydXRoU3RhdGUgPSB1c2VNZW1vKFxuICAgICgpID0+IGNyZWF0ZVRydXRoU3RhdGVNYXRyaXgob3B0aW9ucywgYWN0dWFsUm93cywgYWN0dWFsQ29sdW1ucyksXG4gICAgW2FjdHVhbFJvd3MsIGFjdHVhbENvbHVtbnMsIG9wdGlvbnMsIGlkXVxuICApO1xuXG4gIC8qKlxuICAgKiBUaGlzIGVmZmVjdCB3aWxsIGNvbXBhcmUgdGhlIHR3byBzZWxlY3RlZCBjYXJkcyBhbmQgaWYgdGhleSBhcmUgZXF1YWxcbiAgICovXG4gIGNvbnN0IGhhbmRsZUNvbXBhcmVUd29TZWxlY3RlZENhcmRzRWZmZWN0ID0gKCkgPT4ge1xuICAgIGlmIChlbDEgJiYgZWwyKSB7XG4gICAgICBpZiAodHJ1dGhTdGF0ZVtlbDFbMF1dW2VsMVsxXV0gPT09IHRydXRoU3RhdGVbZWwyWzBdXVtlbDJbMV1dKSB7XG4gICAgICAgIHNldFJlbWFpbmluZ1BhaXJzKChwcmV2KSA9PiBwcmV2IC0gMSk7XG4gICAgICAgIHNldFVuY292ZXJlZE1hdHJpeCgocHJldikgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld01hdHJpeCA9IFsuLi5wcmV2XTtcbiAgICAgICAgICBuZXdNYXRyaXhbZWwxWzBdXVtlbDFbMV1dID0gdHJ1ZTtcbiAgICAgICAgICBuZXdNYXRyaXhbZWwyWzBdXVtlbDJbMV1dID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gbmV3TWF0cml4O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vIFJlc2V0IHRoZSBjdXJyZW50IFNlbGVjdGVkIHZhbHVlcyBhZnRlciAxc1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldEVsMShudWxsKTtcbiAgICAgICAgc2V0RWwyKG51bGwpO1xuICAgICAgfSwgREVMQVlfUkVTRVRfU0VMRUNUSU9OKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBlZmZlY3Qgd2lsbCBzdGFydCB0aGUgY291bnRkb3duXG4gICAqL1xuICBjb25zdCBoYW5kbGVDb3VudERvd25FZmZlY3QgPSAoKSA9PiB7XG4gICAgaWYgKHN0YXJ0R2FtZSkge1xuICAgICAgdGltZXJSZWYuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2V0Q291bnREb3duKChwcmV2KSA9PiBwcmV2IC0gMSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBlZmZlY3Qgd2lsbCBjaGVjayBpZiB0aGUgZ2FtZSBpcyBvdmVyXG4gICAqL1xuICBjb25zdCBoYW5kbGVFbmRHYW1lRWZmZWN0ID0gKCkgPT4ge1xuICAgIGlmIChjb3VudERvd24gPT09IDApIHtcbiAgICAgIGlmICh0aW1lclJlZi5jdXJyZW50KSBjbGVhckludGVydmFsKHRpbWVyUmVmLmN1cnJlbnQpO1xuICAgICAgc2V0UmVzdWx0KFwibG9zdFwiKTtcbiAgICB9XG4gICAgaWYgKHVuY292ZXJlZE1hdHJpeC5ldmVyeSgocm93KSA9PiByb3cuZXZlcnkoKGNlbGwpID0+IGNlbGwpKSkge1xuICAgICAgaWYgKHRpbWVyUmVmLmN1cnJlbnQpIGNsZWFySW50ZXJ2YWwodGltZXJSZWYuY3VycmVudCk7XG4gICAgICBzZXRSZXN1bHQoXCJ3b25cIik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgY29uc3QgaGFuZGxlUmVzZXRHYW1lRWZmZWN0ID0gKCkgPT4ge1xuICAgIGlmIChpZCA+IDApIHtcbiAgICAgIHNldFVuY292ZXJlZE1hdHJpeCgoKSA9PlxuICAgICAgICBjcmVhdGVJbml0aWFsU3RhdGVNYXRyaXgoYWN0dWFsUm93cywgYWN0dWFsQ29sdW1ucylcbiAgICAgICk7XG4gICAgICBzZXRFbDEobnVsbCk7XG4gICAgICBzZXRFbDIobnVsbCk7XG4gICAgICBzZXRDb3VudERvd24oVElNRV9UT19QTEFZKTtcbiAgICAgIHNldFN0YXJ0R2FtZShmYWxzZSk7XG4gICAgICBzZXRSZXN1bHQobnVsbCk7XG4gICAgICBzZXRNb3ZlcygwKTtcbiAgICAgIHNldFJlbWFpbmluZ1BhaXJzKG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaGFuZGxlQ29tcGFyZVR3b1NlbGVjdGVkQ2FyZHNFZmZlY3QoKTtcbiAgfSwgW2VsMSwgZWwyLCB0cnV0aFN0YXRlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBoYW5kbGVDb3VudERvd25FZmZlY3QoKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHRpbWVyUmVmLmN1cnJlbnQpIGNsZWFySW50ZXJ2YWwodGltZXJSZWYuY3VycmVudCk7XG4gICAgfTtcbiAgfSwgW3N0YXJ0R2FtZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaGFuZGxlRW5kR2FtZUVmZmVjdCgpXG4gIH0sIFtjb3VudERvd24sIHVuY292ZXJlZE1hdHJpeF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaGFuZGxlUmVzZXRHYW1lRWZmZWN0KCk7XG4gIH0sIFtpZCwgYWN0dWFsQ29sdW1ucywgYWN0dWFsUm93cywgb3B0aW9uc10pO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKHJvd0luZGV4OiBudW1iZXIsIGNlbGxJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKHVuY292ZXJlZE1hdHJpeFtyb3dJbmRleF1bY2VsbEluZGV4XSkgcmV0dXJuO1xuICAgIGlmIChlbDEgIT09IG51bGwgJiYgZWwxWzBdID09PSByb3dJbmRleCAmJiBlbDFbMV0gPT09IGNlbGxJbmRleCkgcmV0dXJuO1xuICAgIGlmIChlbDEgPT09IG51bGwpIHtcbiAgICAgIHNldEVsMShbcm93SW5kZXgsIGNlbGxJbmRleF0pO1xuICAgIH0gZWxzZSBpZiAoZWwyID09PSBudWxsKSB7XG4gICAgICBzZXRNb3ZlcygocHJldikgPT4gcHJldiArIDEpO1xuICAgICAgc2V0RWwyKFtyb3dJbmRleCwgY2VsbEluZGV4XSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGJlZ2luR2FtZSA9ICgpID0+IHtcbiAgICBzZXRTdGFydEdhbWUodHJ1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyXG4gICAgICBtYXhXaWR0aD1cInNtXCJcbiAgICAgIHN4PXt7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgbWluSGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICAgIGdhcDogMCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57ZGlmZmljdWx0eS50b1VwcGVyQ2FzZSgpfSBNZW1vcnkgR2FtZTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7LyogUmVuZGVyIHRoZSB0YWJsZSAqL31cbiAgICAgIHtzdGFydEdhbWUgJiYgKFxuICAgICAgICA8R2FtZUJvYXJkXG4gICAgICAgICAgY291bnREb3duPXtjb3VudERvd259XG4gICAgICAgICAgbW92ZXM9e21vdmVzfVxuICAgICAgICAgIHJlbWFpbmluZ1BhaXJzPXtyZW1haW5pbmdQYWlyc31cbiAgICAgICAgICByZXN1bHQ9e3Jlc3VsdH1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge3N0YXJ0R2FtZSAmJlxuICAgICAgICAhcmVzdWx0ICYmXG4gICAgICAgIHRydXRoU3RhdGUubWFwKChyb3csIHJvd0luZGV4KSA9PiAoXG4gICAgICAgICAgPEJveCBrZXk9e3Jvd0luZGV4fSBkaXNwbGF5PVwiZmxleFwiIGdhcD17MX0gc3g9e3sgbWI6IDEgfX0+XG4gICAgICAgICAgICB7cm93Lm1hcCgoY2VsbCwgY2VsbEluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxHYW1lQ2FyZFxuICAgICAgICAgICAgICAgIGtleT17Y2VsbEluZGV4fVxuICAgICAgICAgICAgICAgIHJvd0luZGV4PXtyb3dJbmRleH1cbiAgICAgICAgICAgICAgICBjZWxsSW5kZXg9e2NlbGxJbmRleH1cbiAgICAgICAgICAgICAgICB1bmNvdmVyZWQ9e1xuICAgICAgICAgICAgICAgICAgdW5jb3ZlcmVkTWF0cml4W3Jvd0luZGV4XVtjZWxsSW5kZXhdIHx8XG4gICAgICAgICAgICAgICAgICAoZWwxICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgIHJvd0luZGV4ID09PSBlbDFbMF0gJiZcbiAgICAgICAgICAgICAgICAgICAgY2VsbEluZGV4ID09PSBlbDFbMV0pIHx8XG4gICAgICAgICAgICAgICAgICAoZWwyICE9PSBudWxsICYmIHJvd0luZGV4ID09PSBlbDJbMF0gJiYgY2VsbEluZGV4ID09PSBlbDJbMV0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGltYWdlSWQ9e2NlbGx9XG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKSl9XG4gICAgICB7IXN0YXJ0R2FtZSAmJiAoXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2JlZ2luR2FtZX0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgY29sb3I9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgU3RhcnQgR2FtZVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiJdLCJuYW1lcyI6WyJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJDb250YWluZXIiLCJCb3giLCJCdXR0b24iLCJUeXBvZ3JhcGh5IiwiSGVhZCIsImdhbWVEaWZmaWN1bHRpZXMiLCJjcmVhdGVJbml0aWFsU3RhdGVNYXRyaXgiLCJjcmVhdGVUcnV0aFN0YXRlTWF0cml4IiwidXNlQmVsb3ciLCJHYW1lQ2FyZCIsIkdhbWVCb2FyZCIsIkRFTEFZX1JFU0VUX1NFTEVDVElPTiIsIlRJTUVfVE9fUExBWSIsIkdhbWUiLCJkaWZmaWN1bHR5IiwiaWQiLCJpc01vYmlsZSIsInJvd3MiLCJjb2x1bW5zIiwib3B0aW9ucyIsInJvd3NNb2JpbGUiLCJjb2x1bW5zTW9iaWxlIiwiYWN0dWFsUm93cyIsImFjdHVhbENvbHVtbnMiLCJ1bmNvdmVyZWRNYXRyaXgiLCJzZXRVbmNvdmVyZWRNYXRyaXgiLCJlbDEiLCJzZXRFbDEiLCJlbDIiLCJzZXRFbDIiLCJjb3VudERvd24iLCJzZXRDb3VudERvd24iLCJzdGFydEdhbWUiLCJzZXRTdGFydEdhbWUiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJtb3ZlcyIsInNldE1vdmVzIiwicmVtYWluaW5nUGFpcnMiLCJzZXRSZW1haW5pbmdQYWlycyIsInRpbWVyUmVmIiwidHJ1dGhTdGF0ZSIsImhhbmRsZUNvbXBhcmVUd29TZWxlY3RlZENhcmRzRWZmZWN0IiwicHJldiIsIm5ld01hdHJpeCIsInNldFRpbWVvdXQiLCJoYW5kbGVDb3VudERvd25FZmZlY3QiLCJjdXJyZW50Iiwic2V0SW50ZXJ2YWwiLCJoYW5kbGVFbmRHYW1lRWZmZWN0IiwiY2xlYXJJbnRlcnZhbCIsImV2ZXJ5Iiwicm93IiwiY2VsbCIsImhhbmRsZVJlc2V0R2FtZUVmZmVjdCIsImhhbmRsZUNsaWNrIiwicm93SW5kZXgiLCJjZWxsSW5kZXgiLCJiZWdpbkdhbWUiLCJtYXhXaWR0aCIsInN4IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJtaW5IZWlnaHQiLCJnYXAiLCJ0aXRsZSIsInRvVXBwZXJDYXNlIiwibWFwIiwibWIiLCJ1bmNvdmVyZWQiLCJpbWFnZUlkIiwib25DbGljayIsInZhcmlhbnQiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Game/Game.tsx\n"));

/***/ })

});