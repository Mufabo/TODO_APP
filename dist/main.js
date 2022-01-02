/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("//import './style.css'\n\nif (localStorage.getItem(\"myList\") !== null) {\n    var myList = JSON.parse(localStorage.getItem(\"myList\"));\n    console.log(\"myList loaded\");\n} else {\n    var myList = {};\n    console.log(\"myList created\");\n}\n\nfunction addProject(project){\n    myList[project.title] = project;\n    localStorage.setItem(myList, JSON.stringify(myList));\n}\n\nfunction deleteProject(project){\n    delete myList[project.title];\n    localStorage.setItem(myList, JSON.stringify(myList));\n}\n\nfunction visualizeAddList(){\n    var elem = document.getElementById('add_list');\n    document.getElementById('main').style.display = 'none';\n    elem.style.display = 'inline';\n}\n\nfunction closeAddList(){\n        var elem = document.getElementById('add_list');\n        elem.setAttribute('display', 'none')\n        document.getElementById('main').setAttribute('display', 'inline');\n}\n\n\n\n//# sourceURL=webpack://todo_app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;