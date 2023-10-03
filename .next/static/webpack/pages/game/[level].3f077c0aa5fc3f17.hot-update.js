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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_Button_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Container,Typography!=!@mui/material */ \"__barrel_optimize__?names=Box,Button,Container,Typography!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/constants */ \"./src/services/constants.ts\");\n/* harmony import */ var _services_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/helpers */ \"./src/services/helpers.ts\");\n/* harmony import */ var _services_hooks_useBelow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/hooks/useBelow */ \"./src/services/hooks/useBelow.ts\");\n/* harmony import */ var _GameCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GameCard */ \"./src/components/Game/GameCard/index.ts\");\n/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GameBoard */ \"./src/components/Game/GameBoard/index.ts\");\n// External imports\n\nvar _s = $RefreshSig$();\n\n\n\n// Internal imports\n\n\n\n\n\nconst DELAY_RESET_SELECTION = 1000;\nconst TIME_TO_PLAY = 60;\nconst Game = (param)=>{\n    let { difficulty = \"easy\", id = 0 } = param;\n    _s();\n    // See the screen size\n    const isMobile = (0,_services_hooks_useBelow__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"sm\");\n    // Import the rows, columns and options from the gameDifficulties object\n    const { rows, columns, options, rowsMobile, columnsMobile } = _services_constants__WEBPACK_IMPORTED_MODULE_3__.gameDifficulties[difficulty];\n    const actualRows = isMobile ? rowsMobile : rows;\n    const actualColumns = isMobile ? columnsMobile : columns;\n    // Create the discovered state\n    const [uncoveredMatrix, setUncoveredMatrix] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>(0,_services_helpers__WEBPACK_IMPORTED_MODULE_4__.createInitialStateMatrix)(actualRows, actualColumns));\n    const [el1, setEl1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [el2, setEl2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [countDown, setCountDown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(TIME_TO_PLAY);\n    const [startGame, setStartGame] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [moves, setMoves] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [remainingPairs, setRemainingPairs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(options);\n    const timerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const truthState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,_services_helpers__WEBPACK_IMPORTED_MODULE_4__.createTruthStateMatrix)(options, actualRows, actualColumns), [\n        actualRows,\n        actualColumns,\n        options,\n        id\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (el1 && el2) {\n            if (truthState[el1[0]][el1[1]] === truthState[el2[0]][el2[1]]) {\n                setRemainingPairs((prev)=>prev - 1);\n                setUncoveredMatrix((prev)=>{\n                    const newMatrix = [\n                        ...prev\n                    ];\n                    newMatrix[el1[0]][el1[1]] = true;\n                    newMatrix[el2[0]][el2[1]] = true;\n                    return newMatrix;\n                });\n            }\n            // Reset the current Selected values after 1s\n            setTimeout(()=>{\n                setEl1(null);\n                setEl2(null);\n            }, DELAY_RESET_SELECTION);\n        }\n    }, [\n        el1,\n        el2,\n        setEl1,\n        setEl2,\n        truthState,\n        setUncoveredMatrix\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (startGame) {\n            timerRef.current = setInterval(()=>{\n                setCountDown((prev)=>prev - 1);\n            }, 1000);\n        }\n        return ()=>{\n            if (timerRef.current) clearInterval(timerRef.current);\n        };\n    }, [\n        startGame\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (countDown === 0) {\n            if (timerRef.current) clearInterval(timerRef.current);\n            setResult(\"lost\");\n        }\n        if (uncoveredMatrix.every((row)=>row.every((cell)=>cell))) {\n            if (timerRef.current) clearInterval(timerRef.current);\n            setResult(\"won\");\n        }\n    }, [\n        countDown,\n        uncoveredMatrix\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (id > 0) {\n            setUncoveredMatrix(()=>(0,_services_helpers__WEBPACK_IMPORTED_MODULE_4__.createInitialStateMatrix)(actualRows, actualColumns));\n            setEl1(null);\n            setEl2(null);\n            setCountDown(TIME_TO_PLAY);\n            setStartGame(false);\n            setResult(null);\n            setMoves(0);\n            setRemainingPairs(options);\n        }\n    }, [\n        id,\n        actualColumns,\n        actualRows,\n        options\n    ]);\n    const handleClick = (rowIndex, cellIndex)=>{\n        if (uncoveredMatrix[rowIndex][cellIndex]) return;\n        if (el1 !== null && el1[0] === rowIndex && el1[1] === cellIndex) return;\n        if (el1 === null) {\n            setEl1([\n                rowIndex,\n                cellIndex\n            ]);\n        } else if (el2 === null) {\n            setMoves((prev)=>prev + 1);\n            setEl2([\n                rowIndex,\n                cellIndex\n            ]);\n        }\n    };\n    const beginGame = ()=>{\n        setStartGame(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__.Container, {\n        maxWidth: \"sm\",\n        sx: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            minHeight: \"100vh\",\n            gap: 0\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: [\n                        difficulty.toUpperCase(),\n                        \" Memory Game\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\jason\\\\Dev\\\\f0teMZN74Ox0l6PwTNZl\\\\src\\\\components\\\\Game\\\\Game.tsx\",\n                    lineNumber: 135,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jason\\\\Dev\\\\f0teMZN74Ox0l6PwTNZl\\\\src\\\\components\\\\Game\\\\Game.tsx\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, undefined),\n            startGame && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GameBoard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                countDown: countDown,\n                moves: moves,\n                remainingPairs: remainingPairs,\n                result: result,\n                id: id\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jason\\\\Dev\\\\f0teMZN74Ox0l6PwTNZl\\\\src\\\\components\\\\Game\\\\Game.tsx\",\n                lineNumber: 139,\n                columnNumber: 9\n            }, undefined),\n            startGame && !result && truthState.map((row, rowIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                    display: \"flex\",\n                    gap: 1,\n                    sx: {\n                        mb: 1\n                    },\n                    children: row.map((cell, cellIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GameCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            rowIndex: rowIndex,\n                            cellIndex: cellIndex,\n                            uncovered: uncoveredMatrix[rowIndex][cellIndex] || el1 !== null && rowIndex === el1[0] && cellIndex === el1[1] || el2 !== null && rowIndex === el2[0] && cellIndex === el2[1],\n                            imageId: cell,\n                            onClick: handleClick\n                        }, cellIndex, false, {\n                            fileName: \"C:\\\\Users\\\\jason\\\\Dev\\\\f0teMZN74Ox0l6PwTNZl\\\\src\\\\components\\\\Game\\\\Game.tsx\",\n                            lineNumber: 152,\n                            columnNumber: 15\n                        }, undefined))\n                }, rowIndex, false, {\n                    fileName: \"C:\\\\Users\\\\jason\\\\Dev\\\\f0teMZN74Ox0l6PwTNZl\\\\src\\\\components\\\\Game\\\\Game.tsx\",\n                    lineNumber: 150,\n                    columnNumber: 11\n                }, undefined)),\n            !startGame && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                variant: \"contained\",\n                onClick: beginGame,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                    variant: \"h3\",\n                    color: \"white\",\n                    children: \"Start Game\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jason\\\\Dev\\\\f0teMZN74Ox0l6PwTNZl\\\\src\\\\components\\\\Game\\\\Game.tsx\",\n                    lineNumber: 171,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jason\\\\Dev\\\\f0teMZN74Ox0l6PwTNZl\\\\src\\\\components\\\\Game\\\\Game.tsx\",\n                lineNumber: 170,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jason\\\\Dev\\\\f0teMZN74Ox0l6PwTNZl\\\\src\\\\components\\\\Game\\\\Game.tsx\",\n        lineNumber: 123,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Game, \"L2O9tAvGDWNqzgS52qrsYe/2GnU=\", false, function() {\n    return [\n        _services_hooks_useBelow__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Game;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YW1lL0dhbWUudHN4PzhkZTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXh0ZXJuYWwgaW1wb3J0c1xuaW1wb3J0IHsgRkMsIHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBCb3gsIEJ1dHRvbiwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbi8vIEludGVybmFsIGltcG9ydHNcbmltcG9ydCB7IGdhbWVEaWZmaWN1bHRpZXMgfSBmcm9tIFwiQC9zZXJ2aWNlcy9jb25zdGFudHNcIjtcbmltcG9ydCB7XG4gIGNyZWF0ZUluaXRpYWxTdGF0ZU1hdHJpeCxcbiAgY3JlYXRlVHJ1dGhTdGF0ZU1hdHJpeCxcbn0gZnJvbSBcIkAvc2VydmljZXMvaGVscGVyc1wiO1xuaW1wb3J0IHVzZUJlbG93IGZyb20gXCJAL3NlcnZpY2VzL2hvb2tzL3VzZUJlbG93XCI7XG5pbXBvcnQgR2FtZUNhcmQgZnJvbSBcIi4vR2FtZUNhcmRcIjtcbmltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vR2FtZUJvYXJkXCI7XG5cbnR5cGUgR2FtZVByb3BzID0ge1xuICBkaWZmaWN1bHR5PzogXCJlYXN5XCIgfCBcIm1lZGl1bVwiIHwgXCJoYXJkXCI7XG4gIGlkPzogbnVtYmVyO1xufTtcblxuY29uc3QgREVMQVlfUkVTRVRfU0VMRUNUSU9OID0gMTAwMDtcbmNvbnN0IFRJTUVfVE9fUExBWSA9IDYwO1xuXG5jb25zdCBHYW1lOiBGQzxHYW1lUHJvcHM+ID0gKHsgZGlmZmljdWx0eSA9IFwiZWFzeVwiLCBpZCA9IDAgfSkgPT4ge1xuICAvLyBTZWUgdGhlIHNjcmVlbiBzaXplXG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlQmVsb3coXCJzbVwiKTtcbiAgLy8gSW1wb3J0IHRoZSByb3dzLCBjb2x1bW5zIGFuZCBvcHRpb25zIGZyb20gdGhlIGdhbWVEaWZmaWN1bHRpZXMgb2JqZWN0XG4gIGNvbnN0IHsgcm93cywgY29sdW1ucywgb3B0aW9ucywgcm93c01vYmlsZSwgY29sdW1uc01vYmlsZSB9ID1cbiAgICBnYW1lRGlmZmljdWx0aWVzW2RpZmZpY3VsdHldO1xuICBjb25zdCBhY3R1YWxSb3dzID0gaXNNb2JpbGUgPyByb3dzTW9iaWxlIDogcm93cztcbiAgY29uc3QgYWN0dWFsQ29sdW1ucyA9IGlzTW9iaWxlID8gY29sdW1uc01vYmlsZSA6IGNvbHVtbnM7XG5cbiAgLy8gQ3JlYXRlIHRoZSBkaXNjb3ZlcmVkIHN0YXRlXG4gIGNvbnN0IFt1bmNvdmVyZWRNYXRyaXgsIHNldFVuY292ZXJlZE1hdHJpeF0gPSB1c2VTdGF0ZSgoKSA9PlxuICAgIGNyZWF0ZUluaXRpYWxTdGF0ZU1hdHJpeChhY3R1YWxSb3dzLCBhY3R1YWxDb2x1bW5zKVxuICApO1xuICBjb25zdCBbZWwxLCBzZXRFbDFdID0gdXNlU3RhdGU8bnVtYmVyW10gfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2VsMiwgc2V0RWwyXSA9IHVzZVN0YXRlPG51bWJlcltdIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtjb3VudERvd24sIHNldENvdW50RG93bl0gPSB1c2VTdGF0ZShUSU1FX1RPX1BMQVkpO1xuICBjb25zdCBbc3RhcnRHYW1lLCBzZXRTdGFydEdhbWVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGU8XCJ3b25cIiB8IFwibG9zdFwiIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFttb3Zlcywgc2V0TW92ZXNdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtyZW1haW5pbmdQYWlycywgc2V0UmVtYWluaW5nUGFpcnNdID0gdXNlU3RhdGUob3B0aW9ucyk7XG4gIGNvbnN0IHRpbWVyUmVmID0gdXNlUmVmPE5vZGVKUy5UaW1lb3V0IHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgdHJ1dGhTdGF0ZSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gY3JlYXRlVHJ1dGhTdGF0ZU1hdHJpeChvcHRpb25zLCBhY3R1YWxSb3dzLCBhY3R1YWxDb2x1bW5zKSxcbiAgICBbYWN0dWFsUm93cywgYWN0dWFsQ29sdW1ucywgb3B0aW9ucywgaWRdXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZWwxICYmIGVsMikge1xuICAgICAgaWYgKHRydXRoU3RhdGVbZWwxWzBdXVtlbDFbMV1dID09PSB0cnV0aFN0YXRlW2VsMlswXV1bZWwyWzFdXSkge1xuICAgICAgICBzZXRSZW1haW5pbmdQYWlycygocHJldikgPT4gcHJldiAtIDEpO1xuICAgICAgICBzZXRVbmNvdmVyZWRNYXRyaXgoKHByZXYpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdNYXRyaXggPSBbLi4ucHJldl07XG4gICAgICAgICAgbmV3TWF0cml4W2VsMVswXV1bZWwxWzFdXSA9IHRydWU7XG4gICAgICAgICAgbmV3TWF0cml4W2VsMlswXV1bZWwyWzFdXSA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIG5ld01hdHJpeDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvLyBSZXNldCB0aGUgY3VycmVudCBTZWxlY3RlZCB2YWx1ZXMgYWZ0ZXIgMXNcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRFbDEobnVsbCk7XG4gICAgICAgIHNldEVsMihudWxsKTtcbiAgICAgIH0sIERFTEFZX1JFU0VUX1NFTEVDVElPTik7XG4gICAgfVxuICB9LCBbZWwxLCBlbDIsIHNldEVsMSwgc2V0RWwyLCB0cnV0aFN0YXRlLCBzZXRVbmNvdmVyZWRNYXRyaXhdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzdGFydEdhbWUpIHtcbiAgICAgIHRpbWVyUmVmLmN1cnJlbnQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHNldENvdW50RG93bigocHJldikgPT4gcHJldiAtIDEpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAodGltZXJSZWYuY3VycmVudCkgY2xlYXJJbnRlcnZhbCh0aW1lclJlZi5jdXJyZW50KTtcbiAgICB9O1xuICB9LCBbc3RhcnRHYW1lXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY291bnREb3duID09PSAwKSB7XG4gICAgICBpZiAodGltZXJSZWYuY3VycmVudCkgY2xlYXJJbnRlcnZhbCh0aW1lclJlZi5jdXJyZW50KTtcbiAgICAgIHNldFJlc3VsdChcImxvc3RcIik7XG4gICAgfVxuICAgIGlmICh1bmNvdmVyZWRNYXRyaXguZXZlcnkoKHJvdykgPT4gcm93LmV2ZXJ5KChjZWxsKSA9PiBjZWxsKSkpIHtcbiAgICAgIGlmICh0aW1lclJlZi5jdXJyZW50KSBjbGVhckludGVydmFsKHRpbWVyUmVmLmN1cnJlbnQpO1xuICAgICAgc2V0UmVzdWx0KFwid29uXCIpO1xuICAgIH1cbiAgfSwgW2NvdW50RG93biwgdW5jb3ZlcmVkTWF0cml4XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaWQgPiAwKSB7XG4gICAgICBzZXRVbmNvdmVyZWRNYXRyaXgoKCkgPT5cbiAgICAgICAgY3JlYXRlSW5pdGlhbFN0YXRlTWF0cml4KGFjdHVhbFJvd3MsIGFjdHVhbENvbHVtbnMpXG4gICAgICApO1xuICAgICAgc2V0RWwxKG51bGwpO1xuICAgICAgc2V0RWwyKG51bGwpO1xuICAgICAgc2V0Q291bnREb3duKFRJTUVfVE9fUExBWSk7XG4gICAgICBzZXRTdGFydEdhbWUoZmFsc2UpO1xuICAgICAgc2V0UmVzdWx0KG51bGwpO1xuICAgICAgc2V0TW92ZXMoMCk7XG4gICAgICBzZXRSZW1haW5pbmdQYWlycyhvcHRpb25zKTtcbiAgICB9XG4gIH0sIFtpZCwgYWN0dWFsQ29sdW1ucywgYWN0dWFsUm93cywgb3B0aW9uc10pO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKHJvd0luZGV4OiBudW1iZXIsIGNlbGxJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKHVuY292ZXJlZE1hdHJpeFtyb3dJbmRleF1bY2VsbEluZGV4XSkgcmV0dXJuO1xuICAgIGlmIChlbDEgIT09IG51bGwgJiYgZWwxWzBdID09PSByb3dJbmRleCAmJiBlbDFbMV0gPT09IGNlbGxJbmRleCkgcmV0dXJuO1xuICAgIGlmIChlbDEgPT09IG51bGwpIHtcbiAgICAgIHNldEVsMShbcm93SW5kZXgsIGNlbGxJbmRleF0pO1xuICAgIH0gZWxzZSBpZiAoZWwyID09PSBudWxsKSB7XG4gICAgICBzZXRNb3ZlcygocHJldikgPT4gcHJldiArIDEpO1xuICAgICAgc2V0RWwyKFtyb3dJbmRleCwgY2VsbEluZGV4XSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGJlZ2luR2FtZSA9ICgpID0+IHtcbiAgICBzZXRTdGFydEdhbWUodHJ1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyXG4gICAgICBtYXhXaWR0aD1cInNtXCJcbiAgICAgIHN4PXt7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgbWluSGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICAgIGdhcDogMCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57ZGlmZmljdWx0eS50b1VwcGVyQ2FzZSgpfSBNZW1vcnkgR2FtZTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7LyogUmVuZGVyIHRoZSB0YWJsZSAqL31cbiAgICAgIHtzdGFydEdhbWUgJiYgKFxuICAgICAgICA8R2FtZUJvYXJkXG4gICAgICAgICAgY291bnREb3duPXtjb3VudERvd259XG4gICAgICAgICAgbW92ZXM9e21vdmVzfVxuICAgICAgICAgIHJlbWFpbmluZ1BhaXJzPXtyZW1haW5pbmdQYWlyc31cbiAgICAgICAgICByZXN1bHQ9e3Jlc3VsdH1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge3N0YXJ0R2FtZSAmJlxuICAgICAgICAhcmVzdWx0ICYmXG4gICAgICAgIHRydXRoU3RhdGUubWFwKChyb3csIHJvd0luZGV4KSA9PiAoXG4gICAgICAgICAgPEJveCBrZXk9e3Jvd0luZGV4fSBkaXNwbGF5PVwiZmxleFwiIGdhcD17MX0gc3g9e3sgbWI6IDEgfX0+XG4gICAgICAgICAgICB7cm93Lm1hcCgoY2VsbCwgY2VsbEluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxHYW1lQ2FyZFxuICAgICAgICAgICAgICAgIGtleT17Y2VsbEluZGV4fVxuICAgICAgICAgICAgICAgIHJvd0luZGV4PXtyb3dJbmRleH1cbiAgICAgICAgICAgICAgICBjZWxsSW5kZXg9e2NlbGxJbmRleH1cbiAgICAgICAgICAgICAgICB1bmNvdmVyZWQ9e1xuICAgICAgICAgICAgICAgICAgdW5jb3ZlcmVkTWF0cml4W3Jvd0luZGV4XVtjZWxsSW5kZXhdIHx8XG4gICAgICAgICAgICAgICAgICAoZWwxICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgIHJvd0luZGV4ID09PSBlbDFbMF0gJiZcbiAgICAgICAgICAgICAgICAgICAgY2VsbEluZGV4ID09PSBlbDFbMV0pIHx8XG4gICAgICAgICAgICAgICAgICAoZWwyICE9PSBudWxsICYmIHJvd0luZGV4ID09PSBlbDJbMF0gJiYgY2VsbEluZGV4ID09PSBlbDJbMV0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGltYWdlSWQ9e2NlbGx9XG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKSl9XG4gICAgICB7IXN0YXJ0R2FtZSAmJiAoXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2JlZ2luR2FtZX0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgY29sb3I9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgU3RhcnQgR2FtZVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiJdLCJuYW1lcyI6WyJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJDb250YWluZXIiLCJCb3giLCJCdXR0b24iLCJUeXBvZ3JhcGh5IiwiSGVhZCIsImdhbWVEaWZmaWN1bHRpZXMiLCJjcmVhdGVJbml0aWFsU3RhdGVNYXRyaXgiLCJjcmVhdGVUcnV0aFN0YXRlTWF0cml4IiwidXNlQmVsb3ciLCJHYW1lQ2FyZCIsIkdhbWVCb2FyZCIsIkRFTEFZX1JFU0VUX1NFTEVDVElPTiIsIlRJTUVfVE9fUExBWSIsIkdhbWUiLCJkaWZmaWN1bHR5IiwiaWQiLCJpc01vYmlsZSIsInJvd3MiLCJjb2x1bW5zIiwib3B0aW9ucyIsInJvd3NNb2JpbGUiLCJjb2x1bW5zTW9iaWxlIiwiYWN0dWFsUm93cyIsImFjdHVhbENvbHVtbnMiLCJ1bmNvdmVyZWRNYXRyaXgiLCJzZXRVbmNvdmVyZWRNYXRyaXgiLCJlbDEiLCJzZXRFbDEiLCJlbDIiLCJzZXRFbDIiLCJjb3VudERvd24iLCJzZXRDb3VudERvd24iLCJzdGFydEdhbWUiLCJzZXRTdGFydEdhbWUiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJtb3ZlcyIsInNldE1vdmVzIiwicmVtYWluaW5nUGFpcnMiLCJzZXRSZW1haW5pbmdQYWlycyIsInRpbWVyUmVmIiwidHJ1dGhTdGF0ZSIsInByZXYiLCJuZXdNYXRyaXgiLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImV2ZXJ5Iiwicm93IiwiY2VsbCIsImhhbmRsZUNsaWNrIiwicm93SW5kZXgiLCJjZWxsSW5kZXgiLCJiZWdpbkdhbWUiLCJtYXhXaWR0aCIsInN4IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJtaW5IZWlnaHQiLCJnYXAiLCJ0aXRsZSIsInRvVXBwZXJDYXNlIiwibWFwIiwibWIiLCJ1bmNvdmVyZWQiLCJpbWFnZUlkIiwib25DbGljayIsInZhcmlhbnQiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Game/Game.tsx\n"));

/***/ })

});