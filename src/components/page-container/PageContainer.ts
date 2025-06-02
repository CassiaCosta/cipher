export class PageContainer {
    constructor(private className: string = '') {}

    render(parentElement: HTMLElement): HTMLElement {
        const containerElement = document.createElement('div');
        containerElement.className = `page-container ${this.className}`.trim();

        parentElement.appendChild(containerElement);

        return containerElement;
    }
}