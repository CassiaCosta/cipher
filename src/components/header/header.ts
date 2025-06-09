export class Header {
    private headerElement: HTMLElement;
    private hamburgerIcon: HTMLElement | null;

    constructor() {
        this.headerElement = document.createElement('header');
        this.headerElement.className = 'header';
        
        this.appendTemplate(this.headerElement, this.createTemplate());

        this.hamburgerIcon = this.headerElement.querySelector('#menu-icon');

        this.addEventListeners();
    }

    private createTemplate(): string {
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
            </div>`
    }

    private appendTemplate(parent: HTMLElement, template: string): void {
        const range = document.createRange();
        const fragment = range.createContextualFragment(template);

        parent.appendChild(fragment);
    }

    private addEventListeners(): void {
        if (this.hamburgerIcon) {
            this.hamburgerIcon.addEventListener('click', this.toggleMenu.bind(this));
        }
    }

    private toggleMenu(): void {
        if (this.hamburgerIcon) {
            const navbarMenu = this.headerElement.querySelector('#navbar-menu');

            this.hamburgerIcon.classList.toggle('header__menu-icon--open');
            if (navbarMenu) {
                navbarMenu.classList.toggle('header__navbar-menu--visible');
            }
        }
    }

    setNavLinks(links: {name: string, url: string}[]): void {
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

            // const listItems = ulNavElement.querySelectorAll('li');
            
            // listItems.forEach(li => {
            //     const element = li as HTMLElement;
            //     const currentWidth = element.offsetWidth;

            //     li.style.width = `${currentWidth + 30}px`;
            // });
        }
    }

    render(container: HTMLElement): void {
        container.insertBefore(this.headerElement, container.firstChild);
    }
}