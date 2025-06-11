export class TitlePage {
    private level: number;
    private title: string;
    private children: (HTMLElement | string)[];

    constructor(level = 1, title: string, children: (HTMLElement | string)[] = []) {
        this.level = level;
        this.title = title;
        this.children = children;
    }
    
    render(): HTMLElement {
        const titleContainer = document.createElement('div');
        titleContainer.className = 'title-page';

        const headingTag = `h${this.level}`;
        const titlePage = document.createElement(headingTag);
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