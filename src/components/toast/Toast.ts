import successIcon from '../../assets/icons/check-small-icon.svg';

type ToastType = 'success' | 'error';

interface ToastProps {
    message: string;
    type?: ToastType;
    duration?: number;
}

export class Toast {
    private message: string;
    private type: ToastType;
    private duration: number;

    constructor({ message, type = 'success', duration = 1000 }: ToastProps) {
        this.message = message;
        this.type = type;
        this.duration = duration;
    }

    render(): void {
        const toast = document.createElement('div');
        toast.className = `toast toast--${this.type}`;

        const text = document.createElement('span');
        text.className = 'toast__message';
        text.textContent = this.message;

        toast.appendChild(text);

        if (this.type === 'success') {
            const icon = document.createElement('img');
            icon.className = 'toast__icon';
            icon.src = successIcon;
            toast.appendChild(icon);
        }

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('toast--hide');
            toast.addEventListener('transitionend', () => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            });
        }, this.duration);
    }
}