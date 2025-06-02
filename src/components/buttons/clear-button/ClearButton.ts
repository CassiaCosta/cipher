import clearIcon from '../../../assets/icons/clear-icon.svg';

interface ClearButtonProps {
    elements: (string | HTMLElement)[];
    className?: string;
    onClearText: () => void;
    onClearShift: () => void;
}

export class ClearButton {
    private elements: (string | HTMLElement)[];
    private className: string;
    private onClearText: () => void;
    private onClearShift: () => void;

    constructor({ elements, className = '', onClearText, onClearShift }: ClearButtonProps) {
        this.elements = elements;
        this.className = className;
        this.onClearText = onClearText;
        this.onClearShift = onClearShift;
    }

    render(): HTMLElement {
        const buttonElement = document.createElement('button');
        buttonElement.className = `btn-clear ${this.className}`.trim();

        const labelElement = document.createElement('span');
        labelElement.textContent = 'Limpar';
        buttonElement.appendChild(labelElement);

        const imgClearBtn = document.createElement('img');
        imgClearBtn.src = clearIcon;
        buttonElement.appendChild(imgClearBtn);

        buttonElement.addEventListener('click', () => {
            console.log('Limpar clicado');            
            this.clearElements();
            this.onClearText();
            this.onClearShift();
        });

        return buttonElement;
    }

    private clearElements(): void {
        this.elements.forEach((element) => {
            const targetElement = typeof element === 'string' ? document.getElementById(element) : element;

            if (targetElement) {
                if (targetElement instanceof HTMLInputElement) {
                    if (targetElement.type === 'range') {
                        targetElement.value = targetElement.min || '0';
                    } else {
                        targetElement.value = '';
                    }

                    targetElement.dispatchEvent(new Event('input'));
                } else if (targetElement instanceof HTMLTextAreaElement) {
                    targetElement.value = '';
                } else if (targetElement instanceof HTMLSelectElement) {
                    targetElement.selectedIndex = 0;
                }
            }
        })
    }
}