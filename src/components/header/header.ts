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

        document.addEventListener('click', this.handlerClickOutside);
    }

    private toggleMenu(): void {
        const navbarMenu = this.headerElement.querySelector('#navbar-menu');
        this.hamburgerIcon?.classList.toggle('header__menu-icon--open');
        navbarMenu?.classList.toggle('header__navbar-menu--visible');
        // if (this.hamburgerIcon) {

        //     if (navbarMenu) {
        //     }
        // }
    }

    private closeMenu(): void {
        const navbarMenu = this.headerElement.querySelector('#navbar-menu');
        navbarMenu?.classList.remove('header__navbar-menu--visible');
        this.hamburgerIcon?.classList.remove('header__menu-icon--open');
    }

    private handlerClickOutside = (event: MouseEvent): void => {
        const target = event.target as HTMLElement;
        const isClickInside = this.headerElement.contains(target);

        if (!isClickInside) {
            this.closeMenu();
        }
    };

    setNavLinks(
        links: { name: string, key: string }[],
        onNavigate: (key: string) => void
    ): void {
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

    render(container: HTMLElement): void {
        container.insertBefore(this.headerElement, container.firstChild);
    }
}