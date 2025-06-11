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
        this.handlerClickOutside = (event) => {
            const target = event.target;
            const isClickInside = this.headerElement.contains(target);
            if (!isClickInside) {
                this.closeMenu();
            }
        };
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
        document.addEventListener('click', this.handlerClickOutside);
    }
    toggleMenu() {
        var _a;
        const navbarMenu = this.headerElement.querySelector('#navbar-menu');
        (_a = this.hamburgerIcon) === null || _a === void 0 ? void 0 : _a.classList.toggle('header__menu-icon--open');
        navbarMenu === null || navbarMenu === void 0 ? void 0 : navbarMenu.classList.toggle('header__navbar-menu--visible');
        // if (this.hamburgerIcon) {
        //     if (navbarMenu) {
        //     }
        // }
    }
    closeMenu() {
        var _a;
        const navbarMenu = this.headerElement.querySelector('#navbar-menu');
        navbarMenu === null || navbarMenu === void 0 ? void 0 : navbarMenu.classList.remove('header__navbar-menu--visible');
        (_a = this.hamburgerIcon) === null || _a === void 0 ? void 0 : _a.classList.remove('header__menu-icon--open');
    }
    setNavLinks(links, onNavigate) {
        const ulNavElement = document.getElementById('menu');
        if (ulNavElement) {
            ulNavElement.innerHTML = '';
            links.forEach(link => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.textContent = link.name;
                a.href = '#';
                a.addEventListener('click', (e) => {
                    e.preventDefault();
                    onNavigate(link.key);
                    this.closeMenu();
                });
                li.appendChild(a);
                ulNavElement.appendChild(li);
            });
            // if (window.innerWidth >= 1024) {
            //     const listItems = ulNavElement.querySelectorAll('li');
            //     listItems.forEach(li => {
            //         const element = li as HTMLElement;
            //         const currentWidth = element.offsetWidth;
            //         li.style.width = `${currentWidth + 30}px`;
            //     });
            // }
        }
    }
    render(container) {
        container.insertBefore(this.headerElement, container.firstChild);
    }
}

/******/ })()
;
//# sourceMappingURL=header.js.map