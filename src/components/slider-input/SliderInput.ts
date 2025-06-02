interface SliderInputProps {
    id: string;
    value: number;
    min: number;
    max: number;
    className?: string;
    step?: number;
    label?: string;
    onChange?: (value: number) => void;
}

export class SliderInput {
    private id: string;
    private value: number;
    private min: number;
    private max: number;
    private className?: string;
    private step: number;
    private label?: string;
    private onChange?: (value: number) => void;

    constructor({ id, value, min, max, className = '', step = 1, label, onChange }: SliderInputProps) {
        this.id = id;
        this.value = value;
        this.min = min;
        this.max = max;
        this.className = className;
        this.step = step;
        this.label = label;
        this.onChange = onChange;
    }

    render(): HTMLElement {
        const wrapper = document.createElement('div');
        const sliderContainer = document.createElement('div');
        const labelElement = document.createElement('p');
        const valueDisplay = document.createElement('span');

        wrapper.className = 'slider';
        sliderContainer.className = `slider__container ${this.className}`.trim();
        labelElement.className = 'slider__label-element';
        valueDisplay.className = 'slider__value-display';

        valueDisplay.textContent = this.value.toString();
        labelElement.textContent = `${this.label || ''}: `;
        labelElement.appendChild(valueDisplay);

        const inputElement = document.createElement('input');
        inputElement.type = 'range';
        inputElement.id = this.id;
        inputElement.className = 'slider__input';
        inputElement.min = this.min.toString();
        inputElement.max = this.max.toString();
        inputElement.value = this.value.toString();
        inputElement.step = this.step.toString();

        inputElement.addEventListener('input', (event) => {
            const target = event.target as HTMLInputElement;
            const value = parseInt(target.value, 10);
            valueDisplay.textContent = value.toString();

            if (this.onChange) {
                this.onChange(value);
            }
        });

        sliderContainer.appendChild(inputElement);
        wrapper.appendChild(labelElement);
        wrapper.appendChild(sliderContainer);

        return wrapper;
    }
}