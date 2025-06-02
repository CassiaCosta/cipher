interface MainSectionProps {
    className?: string;
    children: HTMLElement[];
}

export class MainSection {
    private className: string;
    private children: HTMLElement[];

    constructor({ className = '', children }: MainSectionProps) {
        this.className = className;
        this.children = children;
    }

    render(): HTMLElement {
        const conteinerElement = document.createElement('div');
        conteinerElement.className = `main-section ${this.className}`;

        this.children.forEach(child => {
            conteinerElement.appendChild(child);
        });

        return conteinerElement;
    }
}