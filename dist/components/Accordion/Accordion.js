/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/accordion/accordion-item/AccordionItem.ts":
/*!******************************************************************!*\
  !*** ./src/components/accordion/accordion-item/AccordionItem.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/*!***********************************************!*\
  !*** ./src/components/accordion/Accordion.ts ***!
  \***********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Accordion: () => (/* binding */ Accordion)
/* harmony export */ });
/* harmony import */ var _accordion_item_AccordionItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion-item/AccordionItem */ "./src/components/accordion/accordion-item/AccordionItem.ts");

class Accordion {
    constructor(sections) {
        this.items = [];
        this.openIndex = null;
        this.toggle = (index) => {
            const currentlyOpen = this.openIndex;
            const item = this.items[index];
            if (currentlyOpen === index) {
                item.close();
                this.openIndex = null;
                return;
            }
            if (currentlyOpen !== null) {
                this.items[currentlyOpen].close();
            }
            item.open();
            this.openIndex = index;
            item.render().scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        };
        this.sections = sections;
        this.container = this.createAccordion();
    }
    createAccordion() {
        const container = document.createElement('div');
        container.className = 'accordion';
        this.sections.forEach((section, index) => {
            const item = new _accordion_item_AccordionItem__WEBPACK_IMPORTED_MODULE_0__.AccordionItem({
                title: section.title,
                content: section.content,
                onToggle: () => this.toggle(index),
            });
            this.items.push(item);
            container.appendChild(item.render());
        });
        return container;
    }
    render() {
        return this.container;
    }
}

/******/ })()
;
//# sourceMappingURL=Accordion.js.map