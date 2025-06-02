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
/*!*****************************************!*\
  !*** ./src/components/header/header.ts ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Header: () => (/* binding */ Header)
/* harmony export */ });
class Header {
    constructor() {
        this.headerElement = document.createElement('header');
        this.headerElement.className = 'header';
        this.appendTemplate(this.headerElement, this.createTemplate());
        this.hamburgerIcon = this.headerElement.querySelector('#menu-icon');
        this.addEventListeners();
    }
    createTemplate() {
        return `
            <div class="header__nav-wrapper">
                <div class="header__hamburger-menu">
                    <button id="menu-icon" class="header__menu-icon">
                        <span class="header__icon-line"></span>
                        <span class="header__icon-line"></span>
                        <span class="header__icon-line"></span>
                    </button>
                </div>
                <nav id="navbar-menu" class="header__navbar-menu">
                    <ul id="menu" class="header__menu-list"></ul>
                </nav>
            </div>`;
    }
    appendTemplate(parent, template) {
        const range = document.createRange();
        const fragment = range.createContextualFragment(template);
        parent.appendChild(fragment);
    }
    addEventListeners() {
        if (this.hamburgerIcon) {
            this.hamburgerIcon.addEventListener('click', this.toggleMenu.bind(this));
        }
    }
    toggleMenu() {
        if (this.hamburgerIcon) {
            const navbarMenu = this.headerElement.querySelector('#navbar-menu');
            this.hamburgerIcon.classList.toggle('header__menu-icon--open');
            if (navbarMenu) {
                navbarMenu.classList.toggle('header__navbar-menu--visible');
            }
        }
    }
    setNavLinks(links) {
        const ulNavElement = document.getElementById('menu');
        if (ulNavElement) {
            links.forEach(link => {
                const liNavElement = document.createElement('li');
                const aElement = document.createElement('a');
                aElement.textContent = link.name;
                aElement.href = link.url;
                liNavElement.appendChild(aElement);
                ulNavElement.appendChild(liNavElement);
            });
        }
    }
    render(container) {
        container.insertBefore(this.headerElement, container.firstChild);
    }
}

/******/ })()
;
//# sourceMappingURL=header.js.map