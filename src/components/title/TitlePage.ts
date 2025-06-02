export class TitlePage {
    private title: string;

    constructor(title: string) {
        this.title = title;
    }
    
    render(): HTMLElement {
        const titleContainer = document.createElement('div');
        titleContainer.className = 'title-page';

        const titlePage = document.createElement('h1');
        titlePage.textContent = this.title;

        titleContainer.appendChild(titlePage);
        
        return titleContainer;
    }
}