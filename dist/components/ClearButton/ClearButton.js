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
/*!************************************************************!*\
  !*** ./src/components/buttons/clear-button/ClearButton.ts ***!
  \************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClearButton: () => (/* binding */ ClearButton)
/* harmony export */ });
class ClearButton {
    constructor({ elements, label = 'Limpar', icon, className = '' }) {
        this.elements = elements;
        this.label = label;
        this.icon = icon;
        this.className = className;
    }
    render() {
        const buttonElement = document.createElement('button');
        buttonElement.className = `btn-clear ${this.className}`.trim();
        if (this.label) {
            const labelElement = document.createTextNode(`${this.label} `);
            buttonElement.appendChild(labelElement);
        }
        if (this.icon) {
            if (this.icon.trim().startsWith('<svg')) {
                buttonElement.innerHTML += this.icon;
            }
            else {
                const iconElement = document.createElement('i');
                iconElement.className = this.icon;
                buttonElement.appendChild(iconElement);
            }
        }
        buttonElement.addEventListener('click', () => {
            console.log('Limpar clicado');
            this.clearElements();
        });
        return buttonElement;
    }
    clearElements() {
        this.elements.forEach((element) => {
            const targetElement = typeof element === 'string' ? document.getElementById(element) : element;
            if (targetElement) {
                if (targetElement instanceof HTMLInputElement) {
                    if (targetElement.type === 'range') {
                        targetElement.value = targetElement.min || '0';
                    }
                    else {
                        targetElement.value = '';
                    }
                    targetElement.dispatchEvent(new Event('input'));
                }
                else if (targetElement instanceof HTMLTextAreaElement) {
                    targetElement.value = '';
                }
                else if (targetElement instanceof HTMLSelectElement) {
                    targetElement.selectedIndex = 0;
                }
            }
        });
    }
}

/******/ })()
;
//# sourceMappingURL=ClearButton.js.map