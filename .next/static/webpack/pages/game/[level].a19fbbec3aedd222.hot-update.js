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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_Button_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Container,Typography!=!@mui/material */ \"__barrel_optimize__?names=Box,Button,Container,Typography!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/constants */ \"./src/services/constants.ts\");\n/* harmony import */ var _services_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/helpers */ \"./src/services/helpers.ts\");\n/* harmony import */ var _services_hooks_useBelow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/hooks/useBelow */ \"./src/services/hooks/useBelow.ts\");\n/* harmony import */ var _GameCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GameCard */ \"./src/components/Game/GameCard/index.ts\");\n/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GameBoard */ \"./src/components/Game/GameBoard/index.ts\");\n// External imports\n\nvar _s = $RefreshSig$();\n\n\n\n// Internal imports\n\n\n\n\n\nconst DELAY_RESET_SELECTION = 1000;\nconst TIME_TO_PLAY = 60;\nconst Game = (param)=>{\n    let { difficulty = \"easy\", id = 0 } = param;\n    _s();\n    const isMobile = (0,_services_hooks_useBelow__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"sm\");\n    // Import the rows, columns and options from the gameDifficulties object\n    const { rows, columns, options, rowsMobile, columnsMobile } = _services_constants__WEBPACK_IMPORTED_MODULE_3__.gameDifficulties[difficulty];\n    const actualRows = isMobile ? rowsMobile : rows;\n    const actualColumns = isMobile ? columnsMobile : columns;\n    // States\n    const [uncoveredMatrix, setUncoveredMatrix] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>(0,_services_helpers__WEBPACK_IMPORTED_MODULE_4__.createInitialStateMatrix)(actualRows, actualColumns));\n    const [el1, setEl1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [el2, setEl2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [countDown, setCountDown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(TIME_TO_PLAY);\n    const [startGame, setStartGame] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [moves, setMoves] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [remainingPairs, setRemainingPairs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(options);\n    const timerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const truthState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,_services_helpers__WEBPACK_IMPORTED_MODULE_4__.createTruthStateMatrix)(options, actualRows, actualColumns), [\n        actualRows,\n        actualColumns,\n        options,\n        id\n    ]);\n    const handleCompareTwoSelectedCardsEffect = ()=>{\n        if (el1 && el2) {\n            if (truthState[el1[0]][el1[1]] === truthState[el2[0]][el2[1]]) {\n                setRemainingPairs((prev)=>prev - 1);\n                setUncoveredMatrix((prev)=>{\n                    const newMatrix = [\n                        ...prev\n                    ];\n                    newMatrix[el1[0]][el1[1]] = true;\n                    newMatrix[el2[0]][el2[1]] = true;\n                    return newMatrix;\n                });\n            }\n            // Reset the current Selected values after 1s\n            setTimeout(()=>{\n                setEl1(null);\n                setEl2(null);\n            }, DELAY_RESET_SELECTION);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        handleCompareTwoSelectedCardsEffect();\n    }, [\n        el1,\n        el2,\n        truthState\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (startGame) {\n            timerRef.current = setInterval(()=>{\n                setCountDown((prev)=>prev - 1);\n            }, 1000);\n        }\n        return ()=>{\n            if (timerRef.current) clearInterval(timerRef.current);\n        };\n    }, [\n        startGame\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (countDown === 0) {\n            if (timerRef.current) clearInterval(timerRef.current);\n            setResult(\"lost\");\n        }\n        if (uncoveredMatrix.every((row)=>row.every((cell)=>cell))) {\n            if (timerRef.current) clearInterval(timerRef.current);\n            setResult(\"won\");\n        }\n    }, [\n        countDown,\n        uncoveredMatrix\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (id > 0) {\n            setUncoveredMatrix(()=>(0,_services_helpers__WEBPACK_IMPORTED_MODULE_4__.createInitialStateMatrix)(actualRows, actualColumns));\n            setEl1(null);\n            setEl2(null);\n            setCountDown(TIME_TO_PLAY);\n            setStartGame(false);\n            setResult(null);\n            setMoves(0);\n            setRemainingPairs(options);\n        }\n    }, [\n        id,\n        actualColumns,\n        actualRows,\n        options\n    ]);\n    const handleClick = (rowIndex, cellIndex)=>{\n        if (uncoveredMatrix[rowIndex][cellIndex]) return;\n        if (el1 !== null && el1[0] === rowIndex && el1[1] === cellIndex) return;\n        if (el1 === null) {\n            setEl1([\n                rowIndex,\n                cellIndex\n            ]);\n        } else if (el2 === null) {\n            setMoves((prev)=>prev + 1);\n            setEl2([\n                rowIndex,\n                cellIndex\n            ]);\n        }\n    };\n    const beginGame = ()=>{\n        setStartGame(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__.Container, {\n        maxWidth: \"sm\",\n        sx: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            minHeight: \"100vh\",\n            gap: 0\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: [\n                        difficulty.toUpperCase(),\n                        \" Memory Game\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\jason\\\\Dev\\\\f0teMZN74Ox0l6PwTNZl\\\\src\\\\components\\\\Game\\\\Game.tsx\",\n                    lineNumber: 138,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jason\\\\Dev\\\\f0teMZN74Ox0l6PwTNZl\\\\src\\\\components\\\\Game\\\\Game.tsx\",\n                lineNumber: 137,\n                columnNumber: 7\n            }, undefined),\n            startGame && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GameBoard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                countDown: countDown,\n                moves: moves,\n                remainingPairs: remainingPairs,\n                result: result,\n                id: id\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jason\\\\Dev\\\\f0teMZN74Ox0l6PwTNZl\\\\src\\\\components\\\\Game\\\\Game.tsx\",\n                lineNumber: 142,\n                columnNumber: 9\n            }, undefined),\n            startGame && !result && truthState.map((row, rowIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                    display: \"flex\",\n                    gap: 1,\n                    sx: {\n                        mb: 1\n                    },\n                    children: row.map((cell, cellIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GameCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            rowIndex: rowIndex,\n                            cellIndex: cellIndex,\n                            uncovered: uncoveredMatrix[rowIndex][cellIndex] || el1 !== null && rowIndex === el1[0] && cellIndex === el1[1] || el2 !== null && rowIndex === el2[0] && cellIndex === el2[1],\n                            imageId: cell,\n                            onClick: handleClick\n                        }, cellIndex, false, {\n                            fileName: \"C:\\\\Users\\\\jason\\\\Dev\\\\f0teMZN74Ox0l6PwTNZl\\\\src\\\\components\\\\Game\\\\Game.tsx\",\n                            lineNumber: 155,\n                            columnNumber: 15\n                        }, undefined))\n                }, rowIndex, false, {\n                    fileName: \"C:\\\\Users\\\\jason\\\\Dev\\\\f0teMZN74Ox0l6PwTNZl\\\\src\\\\components\\\\Game\\\\Game.tsx\",\n                    lineNumber: 153,\n                    columnNumber: 11\n                }, undefined)),\n            !startGame && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                variant: \"contained\",\n                onClick: beginGame,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                    variant: \"h3\",\n                    color: \"white\",\n                    children: \"Start Game\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jason\\\\Dev\\\\f0teMZN74Ox0l6PwTNZl\\\\src\\\\components\\\\Game\\\\Game.tsx\",\n                    lineNumber: 174,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jason\\\\Dev\\\\f0teMZN74Ox0l6PwTNZl\\\\src\\\\components\\\\Game\\\\Game.tsx\",\n                lineNumber: 173,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jason\\\\Dev\\\\f0teMZN74Ox0l6PwTNZl\\\\src\\\\components\\\\Game\\\\Game.tsx\",\n        lineNumber: 126,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Game, \"L2O9tAvGDWNqzgS52qrsYe/2GnU=\", false, function() {\n    return [\n        _services_hooks_useBelow__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Game;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bWUvR2FtZS50c3g/OGRlNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHRlcm5hbCBpbXBvcnRzXG5pbXBvcnQgeyBGQywgdXNlTWVtbywgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIsIEJveCwgQnV0dG9uLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuLy8gSW50ZXJuYWwgaW1wb3J0c1xuaW1wb3J0IHsgZ2FtZURpZmZpY3VsdGllcyB9IGZyb20gXCJAL3NlcnZpY2VzL2NvbnN0YW50c1wiO1xuaW1wb3J0IHtcbiAgY3JlYXRlSW5pdGlhbFN0YXRlTWF0cml4LFxuICBjcmVhdGVUcnV0aFN0YXRlTWF0cml4LFxufSBmcm9tIFwiQC9zZXJ2aWNlcy9oZWxwZXJzXCI7XG5pbXBvcnQgdXNlQmVsb3cgZnJvbSBcIkAvc2VydmljZXMvaG9va3MvdXNlQmVsb3dcIjtcbmltcG9ydCBHYW1lQ2FyZCBmcm9tIFwiLi9HYW1lQ2FyZFwiO1xuaW1wb3J0IEdhbWVCb2FyZCBmcm9tIFwiLi9HYW1lQm9hcmRcIjtcblxudHlwZSBHYW1lUHJvcHMgPSB7XG4gIGRpZmZpY3VsdHk/OiBcImVhc3lcIiB8IFwibWVkaXVtXCIgfCBcImhhcmRcIjtcbiAgaWQ/OiBudW1iZXI7XG59O1xuXG5jb25zdCBERUxBWV9SRVNFVF9TRUxFQ1RJT04gPSAxMDAwO1xuY29uc3QgVElNRV9UT19QTEFZID0gNjA7XG5cbmNvbnN0IEdhbWU6IEZDPEdhbWVQcm9wcz4gPSAoeyBkaWZmaWN1bHR5ID0gXCJlYXN5XCIsIGlkID0gMCB9KSA9PiB7XG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlQmVsb3coXCJzbVwiKTtcbiAgLy8gSW1wb3J0IHRoZSByb3dzLCBjb2x1bW5zIGFuZCBvcHRpb25zIGZyb20gdGhlIGdhbWVEaWZmaWN1bHRpZXMgb2JqZWN0XG4gIGNvbnN0IHsgcm93cywgY29sdW1ucywgb3B0aW9ucywgcm93c01vYmlsZSwgY29sdW1uc01vYmlsZSB9ID1cbiAgICBnYW1lRGlmZmljdWx0aWVzW2RpZmZpY3VsdHldO1xuICBjb25zdCBhY3R1YWxSb3dzID0gaXNNb2JpbGUgPyByb3dzTW9iaWxlIDogcm93cztcbiAgY29uc3QgYWN0dWFsQ29sdW1ucyA9IGlzTW9iaWxlID8gY29sdW1uc01vYmlsZSA6IGNvbHVtbnM7XG5cbiAgLy8gU3RhdGVzXG4gIGNvbnN0IFt1bmNvdmVyZWRNYXRyaXgsIHNldFVuY292ZXJlZE1hdHJpeF0gPSB1c2VTdGF0ZSgoKSA9PlxuICAgIGNyZWF0ZUluaXRpYWxTdGF0ZU1hdHJpeChhY3R1YWxSb3dzLCBhY3R1YWxDb2x1bW5zKVxuICApO1xuICBjb25zdCBbZWwxLCBzZXRFbDFdID0gdXNlU3RhdGU8bnVtYmVyW10gfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2VsMiwgc2V0RWwyXSA9IHVzZVN0YXRlPG51bWJlcltdIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtjb3VudERvd24sIHNldENvdW50RG93bl0gPSB1c2VTdGF0ZShUSU1FX1RPX1BMQVkpO1xuICBjb25zdCBbc3RhcnRHYW1lLCBzZXRTdGFydEdhbWVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGU8XCJ3b25cIiB8IFwibG9zdFwiIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFttb3Zlcywgc2V0TW92ZXNdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtyZW1haW5pbmdQYWlycywgc2V0UmVtYWluaW5nUGFpcnNdID0gdXNlU3RhdGUob3B0aW9ucyk7XG4gIGNvbnN0IHRpbWVyUmVmID0gdXNlUmVmPE5vZGVKUy5UaW1lb3V0IHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgdHJ1dGhTdGF0ZSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gY3JlYXRlVHJ1dGhTdGF0ZU1hdHJpeChvcHRpb25zLCBhY3R1YWxSb3dzLCBhY3R1YWxDb2x1bW5zKSxcbiAgICBbYWN0dWFsUm93cywgYWN0dWFsQ29sdW1ucywgb3B0aW9ucywgaWRdXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlQ29tcGFyZVR3b1NlbGVjdGVkQ2FyZHNFZmZlY3QgPSAoKSA9PiB7XG4gICAgaWYgKGVsMSAmJiBlbDIpIHtcbiAgICAgIGlmICh0cnV0aFN0YXRlW2VsMVswXV1bZWwxWzFdXSA9PT0gdHJ1dGhTdGF0ZVtlbDJbMF1dW2VsMlsxXV0pIHtcbiAgICAgICAgc2V0UmVtYWluaW5nUGFpcnMoKHByZXYpID0+IHByZXYgLSAxKTtcbiAgICAgICAgc2V0VW5jb3ZlcmVkTWF0cml4KChwcmV2KSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3TWF0cml4ID0gWy4uLnByZXZdO1xuICAgICAgICAgIG5ld01hdHJpeFtlbDFbMF1dW2VsMVsxXV0gPSB0cnVlO1xuICAgICAgICAgIG5ld01hdHJpeFtlbDJbMF1dW2VsMlsxXV0gPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBuZXdNYXRyaXg7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgLy8gUmVzZXQgdGhlIGN1cnJlbnQgU2VsZWN0ZWQgdmFsdWVzIGFmdGVyIDFzXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0RWwxKG51bGwpO1xuICAgICAgICBzZXRFbDIobnVsbCk7XG4gICAgICB9LCBERUxBWV9SRVNFVF9TRUxFQ1RJT04pO1xuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaGFuZGxlQ29tcGFyZVR3b1NlbGVjdGVkQ2FyZHNFZmZlY3QoKTtcbiAgfSwgW2VsMSwgZWwyLCB0cnV0aFN0YXRlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3RhcnRHYW1lKSB7XG4gICAgICB0aW1lclJlZi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRDb3VudERvd24oKHByZXYpID0+IHByZXYgLSAxKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHRpbWVyUmVmLmN1cnJlbnQpIGNsZWFySW50ZXJ2YWwodGltZXJSZWYuY3VycmVudCk7XG4gICAgfTtcbiAgfSwgW3N0YXJ0R2FtZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNvdW50RG93biA9PT0gMCkge1xuICAgICAgaWYgKHRpbWVyUmVmLmN1cnJlbnQpIGNsZWFySW50ZXJ2YWwodGltZXJSZWYuY3VycmVudCk7XG4gICAgICBzZXRSZXN1bHQoXCJsb3N0XCIpO1xuICAgIH1cbiAgICBpZiAodW5jb3ZlcmVkTWF0cml4LmV2ZXJ5KChyb3cpID0+IHJvdy5ldmVyeSgoY2VsbCkgPT4gY2VsbCkpKSB7XG4gICAgICBpZiAodGltZXJSZWYuY3VycmVudCkgY2xlYXJJbnRlcnZhbCh0aW1lclJlZi5jdXJyZW50KTtcbiAgICAgIHNldFJlc3VsdChcIndvblwiKTtcbiAgICB9XG4gIH0sIFtjb3VudERvd24sIHVuY292ZXJlZE1hdHJpeF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlkID4gMCkge1xuICAgICAgc2V0VW5jb3ZlcmVkTWF0cml4KCgpID0+XG4gICAgICAgIGNyZWF0ZUluaXRpYWxTdGF0ZU1hdHJpeChhY3R1YWxSb3dzLCBhY3R1YWxDb2x1bW5zKVxuICAgICAgKTtcbiAgICAgIHNldEVsMShudWxsKTtcbiAgICAgIHNldEVsMihudWxsKTtcbiAgICAgIHNldENvdW50RG93bihUSU1FX1RPX1BMQVkpO1xuICAgICAgc2V0U3RhcnRHYW1lKGZhbHNlKTtcbiAgICAgIHNldFJlc3VsdChudWxsKTtcbiAgICAgIHNldE1vdmVzKDApO1xuICAgICAgc2V0UmVtYWluaW5nUGFpcnMob3B0aW9ucyk7XG4gICAgfVxuICB9LCBbaWQsIGFjdHVhbENvbHVtbnMsIGFjdHVhbFJvd3MsIG9wdGlvbnNdKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChyb3dJbmRleDogbnVtYmVyLCBjZWxsSW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGlmICh1bmNvdmVyZWRNYXRyaXhbcm93SW5kZXhdW2NlbGxJbmRleF0pIHJldHVybjtcbiAgICBpZiAoZWwxICE9PSBudWxsICYmIGVsMVswXSA9PT0gcm93SW5kZXggJiYgZWwxWzFdID09PSBjZWxsSW5kZXgpIHJldHVybjtcbiAgICBpZiAoZWwxID09PSBudWxsKSB7XG4gICAgICBzZXRFbDEoW3Jvd0luZGV4LCBjZWxsSW5kZXhdKTtcbiAgICB9IGVsc2UgaWYgKGVsMiA9PT0gbnVsbCkge1xuICAgICAgc2V0TW92ZXMoKHByZXYpID0+IHByZXYgKyAxKTtcbiAgICAgIHNldEVsMihbcm93SW5kZXgsIGNlbGxJbmRleF0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBiZWdpbkdhbWUgPSAoKSA9PiB7XG4gICAgc2V0U3RhcnRHYW1lKHRydWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lclxuICAgICAgbWF4V2lkdGg9XCJzbVwiXG4gICAgICBzeD17e1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIG1pbkhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICBnYXA6IDAsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e2RpZmZpY3VsdHkudG9VcHBlckNhc2UoKX0gTWVtb3J5IEdhbWU8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgey8qIFJlbmRlciB0aGUgdGFibGUgKi99XG4gICAgICB7c3RhcnRHYW1lICYmIChcbiAgICAgICAgPEdhbWVCb2FyZFxuICAgICAgICAgIGNvdW50RG93bj17Y291bnREb3dufVxuICAgICAgICAgIG1vdmVzPXttb3Zlc31cbiAgICAgICAgICByZW1haW5pbmdQYWlycz17cmVtYWluaW5nUGFpcnN9XG4gICAgICAgICAgcmVzdWx0PXtyZXN1bHR9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtzdGFydEdhbWUgJiZcbiAgICAgICAgIXJlc3VsdCAmJlxuICAgICAgICB0cnV0aFN0YXRlLm1hcCgocm93LCByb3dJbmRleCkgPT4gKFxuICAgICAgICAgIDxCb3gga2V5PXtyb3dJbmRleH0gZGlzcGxheT1cImZsZXhcIiBnYXA9ezF9IHN4PXt7IG1iOiAxIH19PlxuICAgICAgICAgICAge3Jvdy5tYXAoKGNlbGwsIGNlbGxJbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8R2FtZUNhcmRcbiAgICAgICAgICAgICAgICBrZXk9e2NlbGxJbmRleH1cbiAgICAgICAgICAgICAgICByb3dJbmRleD17cm93SW5kZXh9XG4gICAgICAgICAgICAgICAgY2VsbEluZGV4PXtjZWxsSW5kZXh9XG4gICAgICAgICAgICAgICAgdW5jb3ZlcmVkPXtcbiAgICAgICAgICAgICAgICAgIHVuY292ZXJlZE1hdHJpeFtyb3dJbmRleF1bY2VsbEluZGV4XSB8fFxuICAgICAgICAgICAgICAgICAgKGVsMSAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICByb3dJbmRleCA9PT0gZWwxWzBdICYmXG4gICAgICAgICAgICAgICAgICAgIGNlbGxJbmRleCA9PT0gZWwxWzFdKSB8fFxuICAgICAgICAgICAgICAgICAgKGVsMiAhPT0gbnVsbCAmJiByb3dJbmRleCA9PT0gZWwyWzBdICYmIGNlbGxJbmRleCA9PT0gZWwyWzFdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbWFnZUlkPXtjZWxsfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICkpfVxuICAgICAgeyFzdGFydEdhbWUgJiYgKFxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtiZWdpbkdhbWV9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGNvbG9yPVwid2hpdGVcIj5cbiAgICAgICAgICAgIFN0YXJ0IEdhbWVcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iXSwibmFtZXMiOlsidXNlTWVtbyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQ29udGFpbmVyIiwiQm94IiwiQnV0dG9uIiwiVHlwb2dyYXBoeSIsIkhlYWQiLCJnYW1lRGlmZmljdWx0aWVzIiwiY3JlYXRlSW5pdGlhbFN0YXRlTWF0cml4IiwiY3JlYXRlVHJ1dGhTdGF0ZU1hdHJpeCIsInVzZUJlbG93IiwiR2FtZUNhcmQiLCJHYW1lQm9hcmQiLCJERUxBWV9SRVNFVF9TRUxFQ1RJT04iLCJUSU1FX1RPX1BMQVkiLCJHYW1lIiwiZGlmZmljdWx0eSIsImlkIiwiaXNNb2JpbGUiLCJyb3dzIiwiY29sdW1ucyIsIm9wdGlvbnMiLCJyb3dzTW9iaWxlIiwiY29sdW1uc01vYmlsZSIsImFjdHVhbFJvd3MiLCJhY3R1YWxDb2x1bW5zIiwidW5jb3ZlcmVkTWF0cml4Iiwic2V0VW5jb3ZlcmVkTWF0cml4IiwiZWwxIiwic2V0RWwxIiwiZWwyIiwic2V0RWwyIiwiY291bnREb3duIiwic2V0Q291bnREb3duIiwic3RhcnRHYW1lIiwic2V0U3RhcnRHYW1lIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwibW92ZXMiLCJzZXRNb3ZlcyIsInJlbWFpbmluZ1BhaXJzIiwic2V0UmVtYWluaW5nUGFpcnMiLCJ0aW1lclJlZiIsInRydXRoU3RhdGUiLCJoYW5kbGVDb21wYXJlVHdvU2VsZWN0ZWRDYXJkc0VmZmVjdCIsInByZXYiLCJuZXdNYXRyaXgiLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImV2ZXJ5Iiwicm93IiwiY2VsbCIsImhhbmRsZUNsaWNrIiwicm93SW5kZXgiLCJjZWxsSW5kZXgiLCJiZWdpbkdhbWUiLCJtYXhXaWR0aCIsInN4IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJtaW5IZWlnaHQiLCJnYXAiLCJ0aXRsZSIsInRvVXBwZXJDYXNlIiwibWFwIiwibWIiLCJ1bmNvdmVyZWQiLCJpbWFnZUlkIiwib25DbGljayIsInZhcmlhbnQiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Game/Game.tsx\n"));

/***/ })

});