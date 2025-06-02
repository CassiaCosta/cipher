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
/*!**************************************************************!*\
  !*** ./src/components/buttons/toggle-button/toggleButton.ts ***!
  \**************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToggleButton: () => (/* binding */ ToggleButton)
/* harmony export */ });
class ToggleButton {
    constructor(props) {
        this.onEncode = props.onEncode;
        this.onDecode = props.onDecode;
    }
    render() {
        const container = document.createElement('div');
        container.className = 'toggle-button';
        const encodeButton = document.createElement('button');
        encodeButton.textContent = 'Codificar';
        encodeButton.className = 'toggle-button__button toggle-button__encode toggle-button__button--active';
        encodeButton.addEventListener('click', () => {
            this.setActiveButton(encodeButton, decodeButton);
            this.onEncode();
        });
        const decodeButton = document.createElement('button');
        decodeButton.textContent = 'Decodificar';
        decodeButton.className = 'toggle-button__button toggle-button__decode';
        decodeButton.addEventListener('click', () => {
            this.setActiveButton(decodeButton, encodeButton);
            this.onDecode();
        });
        container.appendChild(encodeButton);
        container.appendChild(decodeButton);
        return container;
    }
    setActiveButton(activeButton, inactiveButton) {
        activeButton.classList.add('toggle-button__button--active');
        inactiveButton.classList.remove('toggle-button__button--active');
    }
}

/******/ })()
;
//# sourceMappingURL=toggleButton.js.map