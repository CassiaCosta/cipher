export class ButtonGroup {
    private children: HTMLElement[];

    constructor(children: HTMLElement[]) {
        this.children = children;
    }

    render():HTMLElement {
        const container = document.createElement('div');
        container.className = 'button-group-container';

        this.children.forEach(child => container.appendChild(child));

        return container;
    }
}