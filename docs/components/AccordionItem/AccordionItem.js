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
/*!******************************************************************!*\
  !*** ./src/components/accordion/accordion-item/AccordionItem.ts ***!
  \******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccordionItem: () => (/* binding */ AccordionItem)
/* harmony export */ });
class AccordionItem {
    constructor(props) {
        this.isOpen = false;
        this.props = props;
        this.container = this.createItem();
    }
    createItem() {
        const item = document.createElement('div');
        item.className = 'accordion__item';
        const header = document.createElement('div');
        header.className = 'accordion__header';
        header.addEventListener('click', () => this.props.onToggle());
        this.iconWrapper = document.createElement('span');
        this.iconWrapper.className = 'accordion__icon';
        this.iconWrapper.innerHTML = `
            <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.25 22.5L18.75 15L11.25 7.5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
        `;
        const titleEl = document.createElement('span');
        titleEl.className = 'accordion__title';
        titleEl.textContent = this.props.title;
        header.appendChild(this.iconWrapper);
        header.appendChild(titleEl);
        item.appendChild(header);
        this.content = document.createElement('div');
        this.content.className = 'accordion__content';
        const innerContent = document.createElement('div');
        innerContent.className = 'accordion__content-inner';
        innerContent.textContent = this.props.content;
        this.content.appendChild(innerContent);
        item.appendChild(this.content);
        return item;
    }
    open() {
        if (this.isOpen)
            return;
        this.isOpen = true;
        this.container.classList.add('accordion__item--open');
    }
    close() {
        if (!this.isOpen)
            return;
        this.isOpen = false;
        this.container.classList.remove('accordion__item--open');
    }
    render() {
        return this.container;
    }
}

/******/ })()
;
//# sourceMappingURL=AccordionItem.js.map