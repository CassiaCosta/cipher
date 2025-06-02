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
/*!******************************************************!*\
  !*** ./src/components/column-layout/ColumnLayout.ts ***!
  \******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColumnLayout: () => (/* binding */ ColumnLayout)
/* harmony export */ });
class ColumnLayout {
    constructor({ leftContent, rightContent, className = '', leftColumnClassName = '', rightColumnClassName = '', children }) {
        this.leftContent = leftContent;
        this.rightContent = rightContent;
        this.className = className;
        this.children = children;
        this.leftColumnClassName = leftColumnClassName;
        this.rightColumnClassName = rightColumnClassName;
    }
    createColumn(content) {
        const column = document.createElement('div');
        content.forEach(item => {
            column.appendChild(item);
        });
        return column;
    }
    render() {
        const columnLayoutContainer = document.createElement('div');
        columnLayoutContainer.className = `layout ${this.className}`.trim();
        const leftColumn = this.createColumn(this.leftContent);
        leftColumn.className = `layout__column layout__column--left ${this.leftColumnClassName}`.trim();
        const rightColumn = this.createColumn(this.rightContent);
        rightColumn.className = `layout__column layout__column--right ${this.rightColumnClassName}`.trim();
        columnLayoutContainer.appendChild(leftColumn);
        columnLayoutContainer.appendChild(rightColumn);
        if (this.children) {
            this.children.forEach(child => {
                columnLayoutContainer.appendChild(child);
            });
        }
        return columnLayoutContainer;
    }
}

/******/ })()
;
//# sourceMappingURL=ColumnLayout.js.map