/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/toast/Toast.ts":
/*!***************************************!*\
  !*** ./src/components/toast/Toast.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Toast: () => (/* binding */ Toast)
/* harmony export */ });
/* harmony import */ var _assets_icons_check_small_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/icons/check-small-icon.svg */ "./src/assets/icons/check-small-icon.svg");

class Toast {
    constructor({ message, type = 'success', duration = 1000 }) {
        this.message = message;
        this.type = type;
        this.duration = duration;
    }
    render() {
        const toast = document.createElement('div');
        toast.className = `toast toast--${this.type}`;
        const text = document.createElement('span');
        text.className = 'toast__message';
        text.textContent = this.message;
        toast.appendChild(text);
        if (this.type === 'success') {
            const icon = document.createElement('img');
            icon.className = 'toast__icon';
            icon.src = _assets_icons_check_small_icon_svg__WEBPACK_IMPORTED_MODULE_0__;
            toast.appendChild(icon);
        }
        document.body.appendChild(toast);
        setTimeout(() => {
            toast.classList.add('toast--hide');
            toast.addEventListener('transitionend', () => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            });
        }, this.duration);
    }
}


/***/ }),

/***/ "./src/assets/icons/check-small-icon.svg":
/*!***********************************************!*\
  !*** ./src/assets/icons/check-small-icon.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/check-small-icon.svg";

/***/ }),

/***/ "./src/assets/icons/close-icon.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/close-icon.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/close-icon.svg";

/***/ }),

/***/ "./src/assets/icons/copy-icon.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/copy-icon.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/copy-icon.svg";

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
/*!***************************************!*\
  !*** ./src/components/modal/modal.ts ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Modal: () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var _toast_Toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toast/Toast */ "./src/components/toast/Toast.ts");
/* harmony import */ var _assets_icons_close_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/icons/close-icon.svg */ "./src/assets/icons/close-icon.svg");
/* harmony import */ var _assets_icons_copy_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/icons/copy-icon.svg */ "./src/assets/icons/copy-icon.svg");



class Modal {
    constructor({ content }) {
        this.modalElement = null;
        this.content = content;
    }
    render() {
        const overlay = document.createElement('div');
        overlay.className = 'modal';
        const modalBox = document.createElement('div');
        modalBox.className = 'modal__box';
        const closeButton = document.createElement('button');
        const imgCloseBtn = document.createElement('img');
        imgCloseBtn.src = _assets_icons_close_icon_svg__WEBPACK_IMPORTED_MODULE_1__;
        closeButton.className = 'modal__close-button';
        closeButton.onclick = () => this.close();
        closeButton.appendChild(imgCloseBtn);
        const contentEl = document.createElement('p');
        contentEl.className = 'modal__content';
        contentEl.innerText = this.content;
        const copyButton = document.createElement('button');
        const imgCopyBtn = document.createElement('img');
        imgCopyBtn.src = _assets_icons_copy_icon_svg__WEBPACK_IMPORTED_MODULE_2__;
        copyButton.className = 'modal__copy-button';
        copyButton.onclick = () => {
            navigator.clipboard.writeText(this.content).then(() => {
                new _toast_Toast__WEBPACK_IMPORTED_MODULE_0__.Toast({
                    message: 'Copiado',
                    type: 'success'
                }).render();
            }).catch(() => {
                new _toast_Toast__WEBPACK_IMPORTED_MODULE_0__.Toast({
                    message: 'Erro ao copiar!',
                    type: 'error',
                    duration: 3000
                }).render();
            });
        };
        copyButton.appendChild(imgCopyBtn);
        modalBox.appendChild(closeButton);
        modalBox.appendChild(contentEl);
        modalBox.appendChild(copyButton);
        overlay.appendChild(modalBox);
        this.modalElement = overlay;
        return overlay;
    }
    close() {
        if (this.modalElement && this.modalElement.parentNode) {
            this.modalElement.parentNode.removeChild(this.modalElement);
        }
    }
}

/******/ })()
;
//# sourceMappingURL=modal.js.map