export class TextSection {
    private paragraphs: string[];

    constructor(paragraphs: string[]) {
        this.paragraphs = paragraphs;
    }
    
    render(): HTMLElement {
        const container = document.createElement('div');
        container.className = 'text-section';

        this.paragraphs.forEach(text => {
            const p = document.createElement('p');
            p.textContent = text;
            container.appendChild(p);
        })

        return container;
    }
}