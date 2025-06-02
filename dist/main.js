/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/button-group/buttonGroup.ts":
/*!****************************************************!*\
  !*** ./src/components/button-group/buttonGroup.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonGroup: () => (/* binding */ ButtonGroup)
/* harmony export */ });
class ButtonGroup {
    constructor(children) {
        this.children = children;
    }
    render() {
        const container = document.createElement('div');
        container.className = 'button-group-container';
        this.children.forEach(child => container.appendChild(child));
        return container;
    }
}


/***/ }),

/***/ "./src/components/buttons/clear-button/ClearButton.ts":
/*!************************************************************!*\
  !*** ./src/components/buttons/clear-button/ClearButton.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./src/components/buttons/generate-button/generateButton.ts":
/*!******************************************************************!*\
  !*** ./src/components/buttons/generate-button/generateButton.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenerateButton: () => (/* binding */ GenerateButton)
/* harmony export */ });
class GenerateButton {
    constructor({ label, onClick, className = '' }) {
        this.label = label;
        this.onClick = onClick;
        this.className = className;
    }
    render() {
        const buttonElement = document.createElement('button');
        buttonElement.className = `btn-generate ${this.className}`.trim();
        buttonElement.textContent = this.label;
        buttonElement.addEventListener('click', this.onClick);
        return buttonElement;
    }
}


/***/ }),

/***/ "./src/components/buttons/toggle-button/toggleButton.ts":
/*!**************************************************************!*\
  !*** ./src/components/buttons/toggle-button/toggleButton.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./src/components/column-layout/ColumnLayout.ts":
/*!******************************************************!*\
  !*** ./src/components/column-layout/ColumnLayout.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColumnLayout: () => (/* binding */ ColumnLayout)
/* harmony export */ });
class ColumnLayout {
    constructor({ leftContent, rightContent, className = '', leftColumnClassName = '', rightColumnClassName = '', children }) {
        this.leftContent = leftContent;
        this.rightContent = rightContent;
        this.className = className;
        this.children = children;
        this.leftColumnClassName = leftColumnClassName;
        this.rightColumnClassName = rightColumnClassName;
    }
    createColumn(content) {
        const column = document.createElement('div');
        content.forEach(item => {
            column.appendChild(item);
        });
        return column;
    }
    render() {
        const columnLayoutContainer = document.createElement('div');
        columnLayoutContainer.className = `layout ${this.className}`.trim();
        const leftColumn = this.createColumn(this.leftContent);
        leftColumn.className = `layout__column layout__column--left ${this.leftColumnClassName}`.trim();
        const rightColumn = this.createColumn(this.rightContent);
        rightColumn.className = `layout__column layout__column--right ${this.rightColumnClassName}`.trim();
        columnLayoutContainer.appendChild(leftColumn);
        columnLayoutContainer.appendChild(rightColumn);
        if (this.children) {
            this.children.forEach(child => {
                columnLayoutContainer.appendChild(child);
            });
        }
        return columnLayoutContainer;
    }
}


/***/ }),

/***/ "./src/components/header/header.ts":
/*!*****************************************!*\
  !*** ./src/components/header/header.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./src/components/main-section/MainSection.ts":
/*!****************************************************!*\
  !*** ./src/components/main-section/MainSection.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainSection: () => (/* binding */ MainSection)
/* harmony export */ });
class MainSection {
    constructor({ className = '', children }) {
        this.className = className;
        this.children = children;
    }
    render() {
        const conteinerElement = document.createElement('div');
        conteinerElement.className = `main-section ${this.className}`;
        this.children.forEach(child => {
            conteinerElement.appendChild(child);
        });
        return conteinerElement;
    }
}


/***/ }),

/***/ "./src/components/page-container/PageContainer.ts":
/*!********************************************************!*\
  !*** ./src/components/page-container/PageContainer.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageContainer: () => (/* binding */ PageContainer)
/* harmony export */ });
class PageContainer {
    constructor(className = '') {
        this.className = className;
    }
    render(parentElement) {
        const containerElement = document.createElement('div');
        containerElement.className = `page-container ${this.className}`.trim();
        parentElement.appendChild(containerElement);
        return containerElement;
    }
}


/***/ }),

/***/ "./src/components/render-image/render-image.ts":
/*!*****************************************************!*\
  !*** ./src/components/render-image/render-image.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RenderImage: () => (/* binding */ RenderImage)
/* harmony export */ });
class RenderImage {
    constructor(props) {
        this.props = props;
    }
    render() {
        const imageElement = document.createElement('img');
        imageElement.src = this.props.src;
        imageElement.alt = this.props.alt;
        if (this.props.className) {
            imageElement.className = this.props.className;
        }
        return imageElement;
    }
}


/***/ }),

/***/ "./src/components/slider-input/SliderInput.ts":
/*!****************************************************!*\
  !*** ./src/components/slider-input/SliderInput.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./src/components/text-input/TextInput.ts":
/*!************************************************!*\
  !*** ./src/components/text-input/TextInput.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextInput: () => (/* binding */ TextInput)
/* harmony export */ });
class TextInput {
    constructor({ id = '', className = '', placeholder = '' }) {
        this.id = id;
        this.className = className;
        this.placeholder = placeholder;
    }
    render() {
        const inputElement = document.createElement('textarea');
        inputElement.id = this.id;
        inputElement.className = `text-input ${this.className}`.trim();
        inputElement.placeholder = this.placeholder;
        return inputElement;
    }
}


/***/ }),

/***/ "./src/components/title/TitlePage.ts":
/*!*******************************************!*\
  !*** ./src/components/title/TitlePage.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TitlePage: () => (/* binding */ TitlePage)
/* harmony export */ });
class TitlePage {
    constructor(title) {
        this.title = title;
    }
    render() {
        const titleContainer = document.createElement('div');
        titleContainer.className = 'title-page';
        const titlePage = document.createElement('h1');
        titlePage.textContent = this.title;
        titleContainer.appendChild(titlePage);
        return titleContainer;
    }
}


/***/ }),

/***/ "./src/assets/images/img.jpg":
/*!***********************************!*\
  !*** ./src/assets/images/img.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/img.jpg";

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
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _assets_images_img_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/img.jpg */ "./src/assets/images/img.jpg");
/* harmony import */ var _components_page_container_PageContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/page-container/PageContainer */ "./src/components/page-container/PageContainer.ts");
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header */ "./src/components/header/header.ts");
/* harmony import */ var _components_main_section_MainSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main-section/MainSection */ "./src/components/main-section/MainSection.ts");
/* harmony import */ var _components_text_input_TextInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/text-input/TextInput */ "./src/components/text-input/TextInput.ts");
/* harmony import */ var _components_slider_input_SliderInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/slider-input/SliderInput */ "./src/components/slider-input/SliderInput.ts");
/* harmony import */ var _components_buttons_toggle_button_toggleButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/buttons/toggle-button/toggleButton */ "./src/components/buttons/toggle-button/toggleButton.ts");
/* harmony import */ var _components_buttons_generate_button_generateButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/buttons/generate-button/generateButton */ "./src/components/buttons/generate-button/generateButton.ts");
/* harmony import */ var _components_buttons_clear_button_ClearButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/buttons/clear-button/ClearButton */ "./src/components/buttons/clear-button/ClearButton.ts");
/* harmony import */ var _components_button_group_buttonGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/button-group/buttonGroup */ "./src/components/button-group/buttonGroup.ts");
/* harmony import */ var _components_column_layout_ColumnLayout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/column-layout/ColumnLayout */ "./src/components/column-layout/ColumnLayout.ts");
/* harmony import */ var _components_title_TitlePage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/title/TitlePage */ "./src/components/title/TitlePage.ts");
/* harmony import */ var _components_render_image_render_image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/render-image/render-image */ "./src/components/render-image/render-image.ts");














document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('app');
    const mainContainer = document.getElementById('main-content');
    if (appContainer && mainContainer) {
        const pageContainer = new _components_page_container_PageContainer__WEBPACK_IMPORTED_MODULE_2__.PageContainer().render(appContainer);
        while (appContainer.firstChild && appContainer.firstChild !== pageContainer) {
            pageContainer.appendChild(appContainer.firstChild);
        }
        const header = new _components_header_header__WEBPACK_IMPORTED_MODULE_3__.Header();
        header.render(pageContainer);
        header.setNavLinks([
            { name: 'História da Criptografia', url: '' },
            { name: 'Método Clássico', url: '' },
            { name: 'Sobre', url: '' },
            { name: 'Contato', url: '' }
        ]);
        const titlePage = new _components_title_TitlePage__WEBPACK_IMPORTED_MODULE_12__.TitlePage("Criptografia Clássica");
        const textInput = new _components_text_input_TextInput__WEBPACK_IMPORTED_MODULE_5__.TextInput({
            id: 'text-input',
            placeholder: 'Digite aqui...'
        });
        const sliderInput = new _components_slider_input_SliderInput__WEBPACK_IMPORTED_MODULE_6__.SliderInput({
            id: 'cipher-offset',
            value: 1,
            min: 1,
            max: 100,
            className: 'custom-slider',
            label: 'Deslocamento:',
            onChange: (value) => {
                console.log(`Deslocamento: ${value}`);
            }
        });
        const cryptoButtons = new _components_buttons_toggle_button_toggleButton__WEBPACK_IMPORTED_MODULE_7__.ToggleButton({
            onEncode: () => console.log("Codificar clicado"),
            onDecode: () => console.log("Decodificar clicado")
        });
        const generateButton = new _components_buttons_generate_button_generateButton__WEBPACK_IMPORTED_MODULE_8__.GenerateButton({
            label: 'Gerar',
            onClick: () => console.log('Gerar clicado')
        });
        const clearButton = new _components_buttons_clear_button_ClearButton__WEBPACK_IMPORTED_MODULE_9__.ClearButton({
            elements: ['text-input', 'cipher-offset'],
            label: '',
            icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.3333 1.66668V5.66668M15.3333 5.66668H11.3333M15.3333 5.66668L12.24 2.76001C11.5235 2.04315 10.6371 1.51948 9.66346 1.23786C8.68983 0.956237 7.66074 0.925844 6.67219 1.14952C5.68364 1.37319 4.76787 1.84363 4.01031 2.51696C3.25275 3.19028 2.67811 4.04453 2.34 5.00001M0.666666 12.3333V8.33334M0.666666 8.33334H4.66667M0.666666 8.33334L3.76 11.24C4.4765 11.9569 5.36291 12.4805 6.33654 12.7622C7.31016 13.0438 8.33926 13.0742 9.32781 12.8505C10.3164 12.6268 11.2321 12.1564 11.9897 11.4831C12.7472 10.8097 13.3219 9.95549 13.66 9.00001" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`
        });
        const layoutButtonGroup = new _components_button_group_buttonGroup__WEBPACK_IMPORTED_MODULE_10__.ButtonGroup([cryptoButtons.render(), generateButton.render(), clearButton.render()]);
        const imagePage = new _components_render_image_render_image__WEBPACK_IMPORTED_MODULE_13__.RenderImage({
            src: _assets_images_img_jpg__WEBPACK_IMPORTED_MODULE_1__,
            alt: '',
            className: 'image-page first-layout__image'
        });
        const columnLayout = new _components_column_layout_ColumnLayout__WEBPACK_IMPORTED_MODULE_11__.ColumnLayout({
            leftContent: [titlePage.render()],
            rightContent: [textInput.render(), sliderInput.render(), layoutButtonGroup.render()],
            className: 'first-layout',
            leftColumnClassName: 'first-layout__column--left',
            rightColumnClassName: 'first-layout__column--right',
            children: [imagePage.render()]
        });
        const mainSection = new _components_main_section_MainSection__WEBPACK_IMPORTED_MODULE_4__.MainSection({
            className: 'bg-dark',
            children: [columnLayout.render()]
        });
        mainContainer.appendChild(mainSection.render());
    }
    function getScreenSize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        console.log(`Largura da tela: ${width}px, Altura da tela ${height}px`);
    }
    const screenSize = getScreenSize();
});

/******/ })()
;
//# sourceMappingURL=main.js.map