interface GenerateButtonProps {
    label: string;
    onClick: () => void;
    className?: string;
}

export class GenerateButton {
    private label: string;
    private onClick: () => void;
    private className?: string;

    constructor({ label, onClick, className = ''}: GenerateButtonProps) {
        this.label = label;
        this.onClick = onClick;
        this.className = className;
    }

    render(): HTMLElement {
        const buttonElement = document.createElement('button');
        buttonElement.className = `btn-generate ${this.className}`.trim();
        buttonElement.textContent = this.label;
        buttonElement.addEventListener('click', this.onClick);

        return buttonElement;
    }
}