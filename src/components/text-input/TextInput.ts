interface TextInputProps {
    id?: string;
    className?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
}

export class TextInput {
    private id: string;
    private className: string;
    private placeholder: string;
    private onChange?: (value: string) => void;

    constructor({ id = '', className = '', placeholder = '', onChange }: TextInputProps) {
        this.id = id;
        this.className = className;
        this.placeholder = placeholder;
        this.onChange = onChange;
    }

    render(): HTMLElement {
        const inputElement = document.createElement('textarea');

        inputElement.id = this.id;
        inputElement.className = `text-input ${this.className}`.trim();
        inputElement.placeholder = this.placeholder;

        inputElement.addEventListener('input', (event) => {
            const target = event.target as HTMLTextAreaElement;

            if (this.onChange) {
                this.onChange(target.value);
            }
        });

        return inputElement;
    }
}