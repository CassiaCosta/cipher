import { PageKey } from "./types/PageKey";
import { HomePage } from "./pages/HomePage";
import { HistoryPage } from "./pages/HistoryPage";
import { ClassicPage } from "./pages/ClassicPage";
import { AboutPage } from "./pages/AboutPage";

export class Router {
    constructor(private main: HTMLElement) {
        window.addEventListener('popstate', () => {
            const hash = window.location.hash.replace('#', '') as PageKey;
            this.navigate(hash || 'home', false);
        });
    }

    navigate(page: PageKey, pushState: boolean = true): void {
        if (page === 'contato') {
            const footer = document.querySelector('footer');

            if (footer) {
                footer.scrollIntoView({ behavior: 'smooth'});
            }

            if (pushState) {
                history.pushState({}, '', '#contato');
            }

            return;
        }

        this.main.innerHTML = '';
        let view: HTMLElement;

        switch (page) {
            case 'home':
                view = new HomePage().render();
                break;
            case 'historia':
                view = new HistoryPage().render();
                break;
            case 'classico':
                view = new ClassicPage().render();
                break;
            case 'sobre':
                view = new AboutPage().render();
                break;
            default:
                view = new HomePage().render();
        }

        this.main.appendChild(view);

        if (pushState) {
            history.pushState({}, '', `#${page}`); // Muda URL
        }
    }
}