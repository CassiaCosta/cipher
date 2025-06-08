export class TitlePage {
    private title: string;
    private children: (HTMLElement | string)[];

    constructor(title: string, children: (HTMLElement | string)[] = []) {
        this.title = title;
        this.children = children;
    }
    
    render(): HTMLElement {
        const titleContainer = document.createElement('div');
        titleContainer.className = 'title-page';

        const titlePage = document.createElement('h1');
        titlePage.textContent = this.title;
        titleContainer.appendChild(titlePage);

        this.children.forEach(child => {
            if (typeof child === 'string') {
                titleContainer.appendChild(document.createTextNode(child));
            } else {
                titleContainer.appendChild(child);
            }
        });
        
        return titleContainer;
    }
}