interface ToggleButtonProps {
    onEncode: () => void;
    onDecode: () => void;
}

export class ToggleButton {
    private onEncode: () => void;
    private onDecode: () => void;

    constructor(props: ToggleButtonProps) {
        this.onEncode = props.onEncode;
        this.onDecode = props.onDecode;
    }

    render(): HTMLElement {
        const container = document.createElement('div');
        container.className = 'toggle-button';

        const encodeButton = document.createElement('button');
        encodeButton.textContent = 'Codificar';
        encodeButton.className = 'toggle-button__button toggle-button__encode toggle-button__button--active';
        encodeButton.addEventListener('click', () => {
            this.setActiveButton(encodeButton, decodeButton);
            this.onEncode();
        });

        const decodeButton = document.createElement('button');
        decodeButton.textContent = 'Decodificar';
        decodeButton.className = 'toggle-button__button toggle-button__decode';
        decodeButton.addEventListener('click', () => {
            this.setActiveButton(decodeButton, encodeButton);
            this.onDecode();
        });

        container.appendChild(encodeButton);
        container.appendChild(decodeButton);

        return container;
    }

    private setActiveButton(activeButton: HTMLElement, inactiveButton: HTMLElement): void {
        activeButton.classList.add('toggle-button__button--active');
        inactiveButton.classList.remove('toggle-button__button--active');
    }
}