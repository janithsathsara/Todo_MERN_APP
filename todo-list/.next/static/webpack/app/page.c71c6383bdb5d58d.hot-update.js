"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/Task.tsx":
/*!*************************************!*\
  !*** ./src/app/components/Task.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_MdDelete_react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=MdDelete!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Task = (props)=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleDelete = ()=>{\n        console.log(props.task._id);\n        fetch(\"http://localhost:4000/TasksData/\".concat(props.task._id), {\n            method: \"DELETE\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((response)=>{\n            if (response.ok) {\n                props.onDelete();\n            } else {\n                console.error(\"Failed to delete task\");\n            }\n        }).catch((error)=>{\n            console.error(\"Failed to delete task\");\n        });\n        window.location.reload();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"heading-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-field strong\",\n                children: props.task.title\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\react\\\\Assignment\\\\todo-list\\\\src\\\\app\\\\components\\\\Task.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-field\",\n                children: props.task.description\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\react\\\\Assignment\\\\todo-list\\\\src\\\\app\\\\components\\\\Task.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"icon\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdDelete_react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdDelete, {\n                    onClick: handleDelete\n                }, void 0, false, {\n                    fileName: \"C:\\\\projects\\\\react\\\\Assignment\\\\todo-list\\\\src\\\\app\\\\components\\\\Task.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\react\\\\Assignment\\\\todo-list\\\\src\\\\app\\\\components\\\\Task.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\projects\\\\react\\\\Assignment\\\\todo-list\\\\src\\\\app\\\\components\\\\Task.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Task, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Task;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task);\nvar _c;\n$RefreshReg$(_c, \"Task\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9UYXNrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFDZ0I7QUFFRTtBQU81QyxNQUFNRyxPQUE0QixDQUFDQzs7SUFDakMsTUFBTUMsU0FBU0gsMERBQVNBO0lBQ3hCLE1BQU1JLGVBQWU7UUFDbkJDLFFBQVFDLEdBQUcsQ0FBQ0osTUFBTUssSUFBSSxDQUFDQyxHQUFHO1FBQzFCQyxNQUFNLG1DQUFrRCxPQUFmUCxNQUFNSyxJQUFJLENBQUNDLEdBQUcsR0FBSTtZQUN6REUsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtRQUNGLEdBQ0dDLElBQUksQ0FBQyxDQUFDQztZQUNMLElBQUlBLFNBQVNDLEVBQUUsRUFBRTtnQkFDZlosTUFBTWEsUUFBUTtZQUNoQixPQUFPO2dCQUNMVixRQUFRVyxLQUFLLENBQUM7WUFDaEI7UUFDRixHQUNDQyxLQUFLLENBQUMsQ0FBQ0Q7WUFDTlgsUUFBUVcsS0FBSyxDQUFDO1FBQ2hCO1FBQ0ZFLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTTtJQUN4QjtJQUNBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUVELFdBQVU7MEJBQXFCcEIsTUFBTUssSUFBSSxDQUFDaUIsS0FBSzs7Ozs7OzBCQUNsRCw4REFBQ0Q7Z0JBQUVELFdBQVU7MEJBQWNwQixNQUFNSyxJQUFJLENBQUNrQixXQUFXOzs7Ozs7MEJBQ2pELDhEQUFDSjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ3ZCLG9GQUFRQTtvQkFBQzJCLFNBQVN0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0I7R0EvQk1IOztRQUNXRCxzREFBU0E7OztLQURwQkM7QUFpQ04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1Rhc2sudHN4P2EyYTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTWREZWxldGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmltcG9ydCB7IElUYXNrIH0gZnJvbSBcIi4uL0ludGVyZmFjZXNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuaW50ZXJmYWNlIFRhc2tQcm9wcyB7XG4gIHRhc2s6IElUYXNrO1xuICBvbkRlbGV0ZTogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgVGFzazogUmVhY3QuRkM8VGFza1Byb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHByb3BzLnRhc2suX2lkKTtcbiAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL1Rhc2tzRGF0YS8ke3Byb3BzLnRhc2suX2lkfWAsIHtcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgcHJvcHMub25EZWxldGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGRlbGV0ZSB0YXNrXCIpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGRlbGV0ZSB0YXNrXCIpO1xuICAgICAgfSk7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZy1jb250YWluZXJcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZmllbGQgc3Ryb25nXCI+e3Byb3BzLnRhc2sudGl0bGV9PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1maWVsZFwiPntwcm9wcy50YXNrLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxuICAgICAgICA8TWREZWxldGUgb25DbGljaz17aGFuZGxlRGVsZXRlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTWREZWxldGUiLCJ1c2VSb3V0ZXIiLCJUYXNrIiwicHJvcHMiLCJyb3V0ZXIiLCJoYW5kbGVEZWxldGUiLCJjb25zb2xlIiwibG9nIiwidGFzayIsIl9pZCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwib25EZWxldGUiLCJlcnJvciIsImNhdGNoIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Task.tsx\n"));

/***/ })

});