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
/* harmony import */ var _assets_icons_chevron_right_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/icons/chevron-right.svg */ "./src/assets/icons/chevron-right.svg");
/* harmony import */ var _assets_icons_chevron_down_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/icons/chevron-down.svg */ "./src/assets/icons/chevron-down.svg");


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
        this.icon = document.createElement('img');
        this.icon.className = 'accordion__icon';
        this.icon.src = _assets_icons_chevron_right_svg__WEBPACK_IMPORTED_MODULE_0__;
        const titleEl = document.createElement('span');
        titleEl.className = 'accordion__title';
        titleEl.textContent = this.props.title;
        header.appendChild(this.icon);
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
        this.isOpen = true;
        this.container.classList.add('accordion__item--open');
        this.icon.src = _assets_icons_chevron_down_svg__WEBPACK_IMPORTED_MODULE_1__;
    }
    close() {
        this.isOpen = false;
        this.container.classList.remove('accordion__item--open');
        this.icon.src = _assets_icons_chevron_right_svg__WEBPACK_IMPORTED_MODULE_0__;
    }
    render() {
        return this.container;
    }
}


/***/ }),

/***/ "./src/assets/icons/chevron-down.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/chevron-down.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/chevron-down.svg";

/***/ }),

/***/ "./src/assets/icons/chevron-right.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/chevron-right.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/chevron-right.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../../";
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
            if (this.openIndex !== null && this.openIndex !== index) {
                this.items[this.openIndex].close();
            }
            if (this.openIndex === index) {
                this.items[index].close();
                this.openIndex = null;
            }
            else {
                this.items[index].open();
                this.openIndex = index;
            }
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
                onToggle: () => this.toggle(index)
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