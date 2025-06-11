/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/accordion/AccordionItem.ts":
/*!***************************************************!*\
  !*** ./src/components/accordion/AccordionItem.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccordionItem: () => (/* binding */ AccordionItem)
/* harmony export */ });
/* harmony import */ var _assets_icons_chevron_right_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/icons/chevron-right.svg */ "./src/assets/icons/chevron-right.svg");
/* harmony import */ var _assets_icons_chevron_down_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/icons/chevron-down.svg */ "./src/assets/icons/chevron-down.svg");


class AccordionItem {
    constructor(props) {
        this.props = props;
        this.container = this.createItem();
    }
    createItem() {
        const item = document.createElement('div');
        item.className = 'accordion-item';
        const header = document.createElement('div');
        header.className = 'accordion-header';
        header.addEventListener('click', () => this.props.onToggle());
        const icon = document.createElement('img');
        icon.className = 'accordion-icon';
        icon.src = this.props.isOpen ? _assets_icons_chevron_down_svg__WEBPACK_IMPORTED_MODULE_1__ : _assets_icons_chevron_right_svg__WEBPACK_IMPORTED_MODULE_0__;
        const titleEl = document.createElement('span');
        titleEl.className = 'accordion-title';
        titleEl.textContent = this.props.title;
        header.appendChild(icon);
        header.appendChild(titleEl);
        item.appendChild(header);
        if (this.props.isOpen) {
            const content = document.createElement('div');
            content.className = 'accordion-content';
            content.textContent = this.props.content;
            item.appendChild(content);
        }
        return item;
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
/* harmony import */ var _AccordionItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccordionItem */ "./src/components/accordion/AccordionItem.ts");

class Accordion {
    constructor(sections) {
        this.openIndex = null;
        this.toggle = (index) => {
            if (this.openIndex === index) {
                this.openIndex = null;
            }
            else {
                this.openIndex = index;
            }
            this.render();
        };
        this.sections = sections;
    }
    render() {
        const container = document.createElement('div');
        container.className = 'accordion-container';
        this.sections.forEach((section, index) => {
            const item = new _AccordionItem__WEBPACK_IMPORTED_MODULE_0__.AccordionItem({
                title: section.title,
                content: section.content,
                isOpen: index === this.openIndex,
                onToggle: () => {
                    this.toggle(index);
                    const newRender = this.render();
                    container.replaceWith(newRender);
                }
            });
            container.appendChild(item.render());
        });
        return container;
    }
}

/******/ })()
;
//# sourceMappingURL=Accordion.js.map