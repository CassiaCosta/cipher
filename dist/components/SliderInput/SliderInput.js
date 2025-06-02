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
/*!****************************************************!*\
  !*** ./src/components/slider-input/SliderInput.ts ***!
  \****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SliderInput: () => (/* binding */ SliderInput)
/* harmony export */ });
class SliderInput {
    constructor({ id, value, min, max, className = '', step = 1, label, onChange }) {
        this.id = id;
        this.value = value;
        this.min = min;
        this.max = max;
        this.className = className;
        this.step = step;
        this.label = label;
        this.onChange = onChange;
    }
    render() {
        const wrapper = document.createElement('div');
        const sliderContainer = document.createElement('div');
        const labelElement = document.createElement('p');
        wrapper.className = 'slider';
        labelElement.className = 'slider__label-element';
        sliderContainer.className = `slider__container ${this.className}`.trim();
        labelElement.textContent = this.label || '';
        const inputElement = document.createElement('input');
        inputElement.type = 'range';
        inputElement.id = this.id;
        inputElement.className = 'slider__input';
        inputElement.min = this.min.toString();
        inputElement.max = this.max.toString();
        inputElement.value = this.value.toString();
        inputElement.step = this.step.toString();
        inputElement.addEventListener('input', (event) => {
            const target = event.target;
            const value = parseInt(target.value, 10);
            if (this.onChange) {
                this.onChange(value);
            }
        });
        sliderContainer.appendChild(inputElement);
        wrapper.appendChild(labelElement);
        wrapper.appendChild(sliderContainer);
        return wrapper;
    }
}

/******/ })()
;
//# sourceMappingURL=SliderInput.js.map