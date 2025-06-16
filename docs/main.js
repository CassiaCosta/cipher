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

/***/ "./src/components/accordion/Accordion.ts":
/*!***********************************************!*\
  !*** ./src/components/accordion/Accordion.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

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
/* harmony import */ var _assets_icons_clear_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/icons/clear-icon.svg */ "./src/assets/icons/clear-icon.svg");

class ClearButton {
    constructor({ elements, className = '', onClearText, onClearShift }) {
        this.elements = elements;
        this.className = className;
        this.onClearText = onClearText;
        this.onClearShift = onClearShift;
    }
    render() {
        const buttonElement = document.createElement('button');
        buttonElement.className = `btn-clear ${this.className}`.trim();
        const labelElement = document.createElement('span');
        labelElement.textContent = 'Limpar';
        buttonElement.appendChild(labelElement);
        const imgClearBtn = document.createElement('img');
        imgClearBtn.src = _assets_icons_clear_icon_svg__WEBPACK_IMPORTED_MODULE_0__;
        buttonElement.appendChild(imgClearBtn);
        buttonElement.addEventListener('click', () => {
            console.log('Limpar clicado');
            this.clearElements();
            this.onClearText();
            this.onClearShift();
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

/***/ "./src/components/description/TextSection.ts":
/*!***************************************************!*\
  !*** ./src/components/description/TextSection.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextSection: () => (/* binding */ TextSection)
/* harmony export */ });
class TextSection {
    constructor(paragraphs) {
        this.paragraphs = paragraphs;
    }
    render() {
        const container = document.createElement('div');
        container.className = 'text-section';
        this.paragraphs.forEach(text => {
            const p = document.createElement('p');
            p.textContent = text;
            container.appendChild(p);
        });
        return container;
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

/***/ "./src/components/modal/modal.ts":
/*!***************************************!*\
  !*** ./src/components/modal/modal.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
        document.body.classList.add('modal-open');
        return overlay;
    }
    close() {
        if (this.modalElement && this.modalElement.parentNode) {
            this.modalElement.parentNode.removeChild(this.modalElement);
        }
        document.body.classList.remove('modal-open');
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
            imageElement.className = `image-page ${this.props.className}`.trim();
        }
        return imageElement;
    }
}


/***/ }),

/***/ "./src/components/section-card/SectionCard.ts":
/*!****************************************************!*\
  !*** ./src/components/section-card/SectionCard.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SectionCard: () => (/* binding */ SectionCard)
/* harmony export */ });
class SectionCard {
    constructor(children = []) {
        this.children = children;
    }
    render() {
        const card = document.createElement('div');
        card.className = 'section-card';
        this.children.forEach(child => {
            if (typeof child === 'string') {
                card.appendChild(document.createTextNode(child));
            }
            else {
                card.appendChild(child);
            }
        });
        return card;
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
        const valueDisplay = document.createElement('span');
        wrapper.className = 'slider';
        sliderContainer.className = `slider__container ${this.className}`.trim();
        labelElement.className = 'slider__label-element';
        valueDisplay.className = 'slider__value-display';
        valueDisplay.textContent = this.value.toString();
        labelElement.textContent = `${this.label || ''}: `;
        labelElement.appendChild(valueDisplay);
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
            valueDisplay.textContent = value.toString();
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
    constructor({ id = '', className = '', placeholder = '', onChange }) {
        this.id = id;
        this.className = className;
        this.placeholder = placeholder;
        this.onChange = onChange;
    }
    render() {
        const inputElement = document.createElement('textarea');
        inputElement.id = this.id;
        inputElement.className = `text-input ${this.className}`.trim();
        inputElement.placeholder = this.placeholder;
        inputElement.addEventListener('input', (event) => {
            const target = event.target;
            if (this.onChange) {
                this.onChange(target.value);
            }
        });
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
    constructor(level = 1, title, children = []) {
        this.level = level;
        this.title = title;
        this.children = children;
    }
    render() {
        const titleContainer = document.createElement('div');
        titleContainer.className = 'title-page';
        const headingTag = `h${this.level}`;
        const titlePage = document.createElement(headingTag);
        titlePage.textContent = this.title;
        titleContainer.appendChild(titlePage);
        this.children.forEach(child => {
            if (typeof child === 'string') {
                titleContainer.appendChild(document.createTextNode(child));
            }
            else {
                titleContainer.appendChild(child);
            }
        });
        return titleContainer;
    }
}


/***/ }),

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

/***/ "./src/pages/about/AboutPage.ts":
/*!**************************************!*\
  !*** ./src/pages/about/AboutPage.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutPage: () => (/* binding */ AboutPage)
/* harmony export */ });
/* harmony import */ var _components_main_section_MainSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/main-section/MainSection */ "./src/components/main-section/MainSection.ts");
/* harmony import */ var _components_column_layout_ColumnLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/column-layout/ColumnLayout */ "./src/components/column-layout/ColumnLayout.ts");
/* harmony import */ var _components_title_TitlePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/title/TitlePage */ "./src/components/title/TitlePage.ts");
/* harmony import */ var _components_description_TextSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/description/TextSection */ "./src/components/description/TextSection.ts");
/* harmony import */ var _components_section_card_SectionCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/section-card/SectionCard */ "./src/components/section-card/SectionCard.ts");





class AboutPage {
    render() {
        const subtitle = new _components_title_TitlePage__WEBPACK_IMPORTED_MODULE_2__.TitlePage(2, "Sobre");
        const aboutParagraphs = [
            'Os métodos clássicos de criptografia referem-se às técnicas e algoritmos de cifragem desenvolvidos antes da era dos computadores, usados para proteger mensagens ao longo da história. Esses métodos envolvem a transformação do texto simples em um texto cifrado, de maneira que apenas aqueles que conhecem a chave de cifragem possam entender a mensagem original.'
        ];
        const description = new _components_description_TextSection__WEBPACK_IMPORTED_MODULE_3__.TextSection(aboutParagraphs);
        const textCard = [
            'Este projeto foi criado com o objetivo de oferecer uma experiência interativa sobre a Cifra de César, uma das técnicas de criptografia mais antigas e conhecidas. O projeto permite que os usuários experimentem o processo de criptografia e descriptografia usando a Cifra de César, explorando como as mensagens podem ser codificadas e decodificadas de forma simples. Com uma interface intuitiva, o projeto é ideal para iniciantes que desejam ter um primeiro contato prático com a criptografia, sem a necessidade de mergulhar em explicações técnicas complexas.'
        ];
        const titleCard = new _components_title_TitlePage__WEBPACK_IMPORTED_MODULE_2__.TitlePage(3, 'Objetivo do projeto:');
        const descriptionCard = new _components_description_TextSection__WEBPACK_IMPORTED_MODULE_3__.TextSection(textCard);
        const sectionCard = new _components_section_card_SectionCard__WEBPACK_IMPORTED_MODULE_4__.SectionCard([
            titleCard.render(),
            descriptionCard.render()
        ]);
        const layout = new _components_column_layout_ColumnLayout__WEBPACK_IMPORTED_MODULE_1__.ColumnLayout({
            leftContent: [subtitle.render(), description.render()],
            rightContent: [sectionCard.render()],
            className: 'first-layout',
            // leftColumnClassName: 'first-layout__column--left',
            // rightColumnClassName: 'first-layout__column--right',
            // children: [imagePage.render()]
        });
        const section = new _components_main_section_MainSection__WEBPACK_IMPORTED_MODULE_0__.MainSection({
            className: 'bg-light',
            children: [layout.render()]
        });
        return section.render();
    }
}


/***/ }),

/***/ "./src/pages/classic/ClassicPage.ts":
/*!******************************************!*\
  !*** ./src/pages/classic/ClassicPage.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClassicPage: () => (/* binding */ ClassicPage)
/* harmony export */ });
/* harmony import */ var _components_main_section_MainSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/main-section/MainSection */ "./src/components/main-section/MainSection.ts");
/* harmony import */ var _components_column_layout_ColumnLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/column-layout/ColumnLayout */ "./src/components/column-layout/ColumnLayout.ts");
/* harmony import */ var _components_title_TitlePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/title/TitlePage */ "./src/components/title/TitlePage.ts");
/* harmony import */ var _components_description_TextSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/description/TextSection */ "./src/components/description/TextSection.ts");
/* harmony import */ var _components_section_card_SectionCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/section-card/SectionCard */ "./src/components/section-card/SectionCard.ts");
/* harmony import */ var _components_render_image_render_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/render-image/render-image */ "./src/components/render-image/render-image.ts");
/* harmony import */ var _assets_images_cf_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/cf.png */ "./src/assets/images/cf.png");







class ClassicPage {
    render() {
        const subtitle = new _components_title_TitlePage__WEBPACK_IMPORTED_MODULE_2__.TitlePage(2, "Método Clássico");
        const classicParagraphs = [
            'Os métodos clássicos de criptografia referem-se às técnicas e algoritmos de cifragem desenvolvidos antes da era dos computadores, usados para proteger mensagens ao longo da história. Esses métodos envolvem a transformação do texto simples em um texto cifrado, de maneira que apenas aqueles que conhecem a chave de cifragem possam entender a mensagem original.'
        ];
        const description = new _components_description_TextSection__WEBPACK_IMPORTED_MODULE_3__.TextSection(classicParagraphs);
        const textCard = [
            'Os métodos clássicos de criptografia referem-se às técnicas e algoritmos de cifragem desenvolvidos antes da era dos computadores, usados para proteger mensagens ao longo da história. Esses métodos envolvem a transformação do texto simples em um texto cifrado, de maneira que apenas aqueles que conhecem a chave de cifragem possam entender a mensagem original.'
        ];
        const titleCard = new _components_title_TitlePage__WEBPACK_IMPORTED_MODULE_2__.TitlePage(3, 'Cifra de César:');
        const descriptionCard = new _components_description_TextSection__WEBPACK_IMPORTED_MODULE_3__.TextSection(textCard);
        const imageCard = new _components_render_image_render_image__WEBPACK_IMPORTED_MODULE_5__.RenderImage({
            src: _assets_images_cf_png__WEBPACK_IMPORTED_MODULE_6__,
            alt: '',
            className: 'section-card__image'
        });
        const sectionCard = new _components_section_card_SectionCard__WEBPACK_IMPORTED_MODULE_4__.SectionCard([
            titleCard.render(),
            descriptionCard.render(),
            imageCard.render()
        ]);
        const layout = new _components_column_layout_ColumnLayout__WEBPACK_IMPORTED_MODULE_1__.ColumnLayout({
            leftContent: [subtitle.render(), description.render()],
            rightContent: [sectionCard.render()],
            className: 'first-layout',
            // leftColumnClassName: 'first-layout__column--left',
            // rightColumnClassName: 'first-layout__column--right',
            // children: [imagePage.render()]
        });
        const section = new _components_main_section_MainSection__WEBPACK_IMPORTED_MODULE_0__.MainSection({
            className: 'bg-light',
            children: [layout.render()]
        });
        return section.render();
    }
}


/***/ }),

/***/ "./src/pages/history/HistoryPage.ts":
/*!******************************************!*\
  !*** ./src/pages/history/HistoryPage.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HistoryPage: () => (/* binding */ HistoryPage)
/* harmony export */ });
/* harmony import */ var _components_main_section_MainSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/main-section/MainSection */ "./src/components/main-section/MainSection.ts");
/* harmony import */ var _components_column_layout_ColumnLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/column-layout/ColumnLayout */ "./src/components/column-layout/ColumnLayout.ts");
/* harmony import */ var _components_title_TitlePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/title/TitlePage */ "./src/components/title/TitlePage.ts");
/* harmony import */ var _components_description_TextSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/description/TextSection */ "./src/components/description/TextSection.ts");
/* harmony import */ var _components_accordion_Accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/accordion/Accordion */ "./src/components/accordion/Accordion.ts");





class HistoryPage {
    render() {
        const subtitle = new _components_title_TitlePage__WEBPACK_IMPORTED_MODULE_2__.TitlePage(2, "História da Criptografia");
        const historyParagraphs = [
            'A criptografia é a arte e ciência de codificar mensagens para proteger informações, e sua história é tão antiga quanto a própria escrita.',
            'Desde tempos remotos, civilizações buscaram formas de ocultar suas comunicações para proteger segredos militares, políticos e comerciais.'
        ];
        const sections = [
            {
                title: 'Origens Antigas',
                content: 'Durante a Idade Média, a criptografia tornou-se mais sofisticada, especialmente nas cortes reais e no âmbito religioso. O Papa Gregório XIII, por exemplo, usava cifras para proteger suas correspondências. Nesse período, surgiram métodos de substituição mais complexos, como a cifra de Vigenère, que empregava um padrão de letras para criar uma chave mais difícil de decifrar.'
            },
            {
                title: 'Criptografia Medieval',
                content: 'Durante a Idade Média, a criptografia tornou-se mais sofisticada, especialmente nas cortes reais e no âmbito religioso. O Papa Gregório XIII, por exemplo, usava cifras para proteger suas correspondências. Nesse período, surgiram métodos de substituição mais complexos, como a cifra de Vigenère, que empregava um padrão de letras para criar uma chave mais difícil de decifrar.'
            },
            {
                title: 'Renascimento e Avanços Científicos',
                content: 'Durante a Idade Média, a criptografia tornou-se mais sofisticada, especialmente nas cortes reais e no âmbito religioso. O Papa Gregório XIII, por exemplo, usava cifras para proteger suas correspondências. Nesse período, surgiram métodos de substituição mais complexos, como a cifra de Vigenère, que empregava um padrão de letras para criar uma chave mais difícil de decifrar.'
            },
            {
                title: 'Criptografia Moderna',
                content: 'Durante a Idade Média, a criptografia tornou-se mais sofisticada, especialmente nas cortes reais e no âmbito religioso. O Papa Gregório XIII, por exemplo, usava cifras para proteger suas correspondências. Nesse período, surgiram métodos de substituição mais complexos, como a cifra de Vigenère, que empregava um padrão de letras para criar uma chave mais difícil de decifrar.'
            },
            {
                title: 'Era Digital',
                content: 'No século XX, com o avanço dos computadores, a criptografia evoluiu rapidamente. O desenvolvimento da criptografia de chave pública, com figuras como Whitfield Diffie e Martin Hellman, revolucionou o campo, tornando a comunicação segura mais acessível. Hoje, a criptografia é um componente essencial na segurança digital, protegendo desde transações financeiras até comunicações pessoais.'
            },
        ];
        const description = new _components_description_TextSection__WEBPACK_IMPORTED_MODULE_3__.TextSection(historyParagraphs);
        const accordion = new _components_accordion_Accordion__WEBPACK_IMPORTED_MODULE_4__.Accordion(sections);
        const layout = new _components_column_layout_ColumnLayout__WEBPACK_IMPORTED_MODULE_1__.ColumnLayout({
            leftContent: [subtitle.render(), description.render()],
            rightContent: [accordion.render()],
            className: 'first-layout',
            leftColumnClassName: 'first-layout__column--left',
            rightColumnClassName: 'first-layout__column--right',
        });
        const section = new _components_main_section_MainSection__WEBPACK_IMPORTED_MODULE_0__.MainSection({
            className: 'bg-light',
            children: [layout.render()]
        });
        return section.render();
    }
}


/***/ }),

/***/ "./src/pages/home/HomePage.ts":
/*!************************************!*\
  !*** ./src/pages/home/HomePage.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePage: () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _components_main_section_MainSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/main-section/MainSection */ "./src/components/main-section/MainSection.ts");
/* harmony import */ var _components_column_layout_ColumnLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/column-layout/ColumnLayout */ "./src/components/column-layout/ColumnLayout.ts");
/* harmony import */ var _components_title_TitlePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/title/TitlePage */ "./src/components/title/TitlePage.ts");
/* harmony import */ var _components_render_image_render_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/render-image/render-image */ "./src/components/render-image/render-image.ts");
/* harmony import */ var _components_text_input_TextInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/text-input/TextInput */ "./src/components/text-input/TextInput.ts");
/* harmony import */ var _components_slider_input_SliderInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/slider-input/SliderInput */ "./src/components/slider-input/SliderInput.ts");
/* harmony import */ var _components_buttons_toggle_button_toggleButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/buttons/toggle-button/toggleButton */ "./src/components/buttons/toggle-button/toggleButton.ts");
/* harmony import */ var _components_buttons_generate_button_generateButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/buttons/generate-button/generateButton */ "./src/components/buttons/generate-button/generateButton.ts");
/* harmony import */ var _components_buttons_clear_button_ClearButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/buttons/clear-button/ClearButton */ "./src/components/buttons/clear-button/ClearButton.ts");
/* harmony import */ var _components_button_group_buttonGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/button-group/buttonGroup */ "./src/components/button-group/buttonGroup.ts");
/* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/modal/modal */ "./src/components/modal/modal.ts");
/* harmony import */ var _components_toast_Toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/toast/Toast */ "./src/components/toast/Toast.ts");
/* harmony import */ var _services_cryptography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/cryptography */ "./src/services/cryptography.ts");
/* harmony import */ var _assets_images_img_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/images/img.jpg */ "./src/assets/images/img.jpg");














class HomePage {
    constructor() {
        this.currentText = '';
        this.currentShift = 1;
        this.selectedMode = 'encode';
    }
    render() {
        const image = new _components_render_image_render_image__WEBPACK_IMPORTED_MODULE_3__.RenderImage({
            src: _assets_images_img_jpg__WEBPACK_IMPORTED_MODULE_13__,
            alt: '',
            className: 'home-layout__image'
        });
        const titlePage = new _components_title_TitlePage__WEBPACK_IMPORTED_MODULE_2__.TitlePage(1, "Criptografia Clássica", [image.render()]);
        const textInput = new _components_text_input_TextInput__WEBPACK_IMPORTED_MODULE_4__.TextInput({
            id: 'text-input',
            placeholder: 'Digite sua mensagem aqui...',
            onChange: (newText) => (this.currentText = newText)
        });
        const sliderInput = new _components_slider_input_SliderInput__WEBPACK_IMPORTED_MODULE_5__.SliderInput({
            id: 'cipher-offset',
            value: 1,
            min: 1,
            max: 26,
            className: 'custom-slider',
            label: 'Deslocamento',
            onChange: (shift) => {
                console.log(`Deslocamento: ${shift}`);
                this.currentShift = shift;
            }
        });
        const toggleButton = new _components_buttons_toggle_button_toggleButton__WEBPACK_IMPORTED_MODULE_6__.ToggleButton({
            onEncode: () => {
                this.selectedMode = 'encode';
                console.log('Modo selecionado: Codificar');
            },
            onDecode: () => {
                this.selectedMode = 'decode';
                console.log('Modo selecionado: Decodificar');
            }
        });
        const generateButton = new _components_buttons_generate_button_generateButton__WEBPACK_IMPORTED_MODULE_7__.GenerateButton({
            label: 'Gerar',
            onClick: () => {
                if (!this.currentText) {
                    console.log('Nenhum texto inserido!');
                    new _components_toast_Toast__WEBPACK_IMPORTED_MODULE_11__.Toast({
                        message: 'Nenhum texto inserido!',
                        type: 'error',
                        duration: 2000
                    }).render();
                    return;
                }
                let resultText;
                if (this.selectedMode === 'encode') {
                    resultText = (0,_services_cryptography__WEBPACK_IMPORTED_MODULE_12__.caesarCipher)(this.currentText, this.currentShift);
                    console.log('Texto codificado:', resultText);
                }
                else {
                    resultText = (0,_services_cryptography__WEBPACK_IMPORTED_MODULE_12__.caesarCipher)(this.currentText, -this.currentShift);
                    console.log('Texto decodificado:', resultText);
                }
                const modal = new _components_modal_modal__WEBPACK_IMPORTED_MODULE_10__.Modal({ content: resultText });
                document.body.appendChild(modal.render());
            }
        });
        const clearButton = new _components_buttons_clear_button_ClearButton__WEBPACK_IMPORTED_MODULE_8__.ClearButton({
            elements: ['text-input', 'cipher-offset'],
            onClearText: () => {
                this.currentText = '';
                console.log('Variável de texto resetada: ', this.currentText);
            },
            onClearShift: () => {
                this.currentShift = 1;
                console.log('Variável de deslocamento resetada: ', this.currentShift);
            }
        });
        const buttonGroup = new _components_button_group_buttonGroup__WEBPACK_IMPORTED_MODULE_9__.ButtonGroup([
            toggleButton.render(),
            generateButton.render(),
            clearButton.render()
        ]);
        const layout = new _components_column_layout_ColumnLayout__WEBPACK_IMPORTED_MODULE_1__.ColumnLayout({
            leftContent: [titlePage.render()],
            rightContent: [
                textInput.render(),
                sliderInput.render(),
                buttonGroup.render()
            ],
            className: 'home-layout',
            leftColumnClassName: 'home-layout__column--left',
            rightColumnClassName: 'home-layout__column--right',
            // children: [imagePage.render()]
        });
        const section = new _components_main_section_MainSection__WEBPACK_IMPORTED_MODULE_0__.MainSection({
            className: 'bg-dark',
            children: [layout.render()]
        });
        return section.render();
    }
}


/***/ }),

/***/ "./src/router.ts":
/*!***********************!*\
  !*** ./src/router.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Router: () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var _pages_home_HomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/HomePage */ "./src/pages/home/HomePage.ts");
/* harmony import */ var _pages_history_HistoryPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/history/HistoryPage */ "./src/pages/history/HistoryPage.ts");
/* harmony import */ var _pages_classic_ClassicPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/classic/ClassicPage */ "./src/pages/classic/ClassicPage.ts");
/* harmony import */ var _pages_about_AboutPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/about/AboutPage */ "./src/pages/about/AboutPage.ts");




class Router {
    constructor(main) {
        this.main = main;
        window.addEventListener('popstate', () => {
            const hash = window.location.hash.replace('#', '');
            this.navigate(hash || 'home', false);
        });
    }
    navigate(page, pushState = true) {
        if (page === 'contato') {
            const footer = document.querySelector('footer');
            if (footer) {
                footer.scrollIntoView({ behavior: 'smooth' });
            }
            if (pushState) {
                history.pushState({}, '', '#contato');
            }
            return;
        }
        this.main.innerHTML = '';
        let view;
        switch (page) {
            case 'home':
                view = new _pages_home_HomePage__WEBPACK_IMPORTED_MODULE_0__.HomePage().render();
                break;
            case 'historia':
                view = new _pages_history_HistoryPage__WEBPACK_IMPORTED_MODULE_1__.HistoryPage().render();
                break;
            case 'classico':
                view = new _pages_classic_ClassicPage__WEBPACK_IMPORTED_MODULE_2__.ClassicPage().render();
                break;
            case 'sobre':
                view = new _pages_about_AboutPage__WEBPACK_IMPORTED_MODULE_3__.AboutPage().render();
                break;
            default:
                view = new _pages_home_HomePage__WEBPACK_IMPORTED_MODULE_0__.HomePage().render();
        }
        this.main.appendChild(view);
        if (pushState) {
            history.pushState({}, '', `#${page}`); // Muda URL
        }
    }
}


/***/ }),

/***/ "./src/services/cryptography.ts":
/*!**************************************!*\
  !*** ./src/services/cryptography.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   caesarCipher: () => (/* binding */ caesarCipher)
/* harmony export */ });
function caesarCipher(text, shift) {
    const displacementCalc = shift % 65535;
    return text.split('').map(char => {
        if (char === ' ' || char === '\n' || char === '\r')
            return char;
        let code = char.charCodeAt(0);
        let newCode = (code + displacementCalc + 65535) % 65535;
        return String.fromCharCode(newCode);
    }).join('');
}


/***/ }),

/***/ "./src/assets/icons/check-small-icon.svg":
/*!***********************************************!*\
  !*** ./src/assets/icons/check-small-icon.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/check-small-icon.svg";

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

/***/ }),

/***/ "./src/assets/icons/clear-icon.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/clear-icon.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/clear-icon.svg";

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

/***/ }),

/***/ "./src/assets/images/cf.png":
/*!**********************************!*\
  !*** ./src/assets/images/cf.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/cf.png";

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
/* harmony import */ var _components_page_container_PageContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/page-container/PageContainer */ "./src/components/page-container/PageContainer.ts");
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header */ "./src/components/header/header.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ "./src/router.ts");




document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('app');
    const mainContainer = document.getElementById('main-content');
    if (!appContainer || !mainContainer)
        return;
    // Renderiza o layout principal
    const pageContainer = new _components_page_container_PageContainer__WEBPACK_IMPORTED_MODULE_1__.PageContainer().render(appContainer);
    // Garante que o conteúdo atual seja incluído dentro do container
    while (appContainer.firstChild && appContainer.firstChild !== pageContainer) {
        pageContainer.appendChild(appContainer.firstChild);
    }
    const router = new _router__WEBPACK_IMPORTED_MODULE_3__.Router(mainContainer);
    // Cria e renderiza o Header
    const header = new _components_header_header__WEBPACK_IMPORTED_MODULE_2__.Header();
    header.render(pageContainer);
    // Define os links e passa a função de navegação
    header.setNavLinks([
        { name: 'Home', key: 'home' },
        { name: 'História da Criptografia', key: 'historia' },
        { name: 'Método Clássico', key: 'classico' },
        { name: 'Sobre', key: 'sobre' },
        { name: 'Contato', key: 'contato' }
    ], (pageKey) => {
        router.navigate(pageKey);
    });
    const initialPage = (window.location.hash.replace('#', '') || 'home');
    router.navigate(initialPage);
    // function getScreenSize() {
    //     const width = window.innerWidth;
    //     const height = window.innerHeight;
    //     console.log(`Largura da tela: ${width}px, Altura da tela ${height}px`);
    // }
    // const screenSize = getScreenSize();
});

/******/ })()
;
//# sourceMappingURL=main.js.map