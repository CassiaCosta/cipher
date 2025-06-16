export class SectionCard {
    private children: (HTMLElement | string)[];

    constructor(children: (HTMLElement | string)[] = []) {
        this.children = children;
    }

    render(): HTMLElement {
        const card = document.createElement('div');
        card.className = 'section-card';

        this.children.forEach(child => {
            if (typeof child === 'string') {
                card.appendChild(document.createTextNode(child));
            } else {
                card.appendChild(child);
            }
        });

        return card;
    }
}