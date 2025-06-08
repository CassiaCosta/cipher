/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*******************************************!*\
  !*** ./src/components/title/TitlePage.ts ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TitlePage: () => (/* binding */ TitlePage)
/* harmony export */ });
class TitlePage {
    constructor(title, children = []) {
        this.title = title;
        this.children = children;
    }
    render() {
        const titleContainer = document.createElement('div');
        titleContainer.className = 'title-page';
        const titlePage = document.createElement('h1');
        titlePage.textContent = this.title;
        titleContainer.appendChild(titlePage);
        this.children.forEach(child => {
            if (typeof child === 'string') {
                titleContainer.appendChild(document.createTextNode(child));
            }
            else {
                titleContainer.appendChild(child);
            }
        });
        return titleContainer;
    }
}

/******/ })()
;
//# sourceMappingURL=TitlePage.js.map