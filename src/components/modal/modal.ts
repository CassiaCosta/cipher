import { Toast } from '../toast/Toast';

import closeIcon from '../../assets/icons/close-icon.svg';
import copyIcon from '../../assets/icons/copy-icon.svg';

interface ModalProps {
    content: string;
}

export class Modal {
    private content: string;
    private modalElement: HTMLElement | null = null;

    constructor({ content }: ModalProps) {
        this.content = content;
    }

    render(): HTMLElement {
        const overlay = document.createElement('div');
        overlay.className = 'modal';

        const modalBox = document.createElement('div');
        modalBox.className = 'modal__box';

        const closeButton = document.createElement('button');
        const imgCloseBtn = document.createElement('img');
        imgCloseBtn.src = closeIcon;
        closeButton.className = 'modal__close-button';
        closeButton.onclick = () => this.close();
        closeButton.appendChild(imgCloseBtn);

        const contentEl = document.createElement('p');
        contentEl.className = 'modal__content';
        contentEl.innerText = this.content;

        const copyButton = document.createElement('button');
        const imgCopyBtn = document.createElement('img');
        imgCopyBtn.src = copyIcon;
        copyButton.className = 'modal__copy-button';
        copyButton.onclick = () => {
            navigator.clipboard.writeText(this.content).then(() => {
                new Toast({
                    message: 'Copiado',
                    type: 'success'
                }).render();
            }).catch(() => {
                new Toast({
                    message: 'Erro ao copiar!',
                    type: 'error',
                    duration: 3000
                }).render();
            })
        };
        copyButton.appendChild(imgCopyBtn);

        modalBox.appendChild(closeButton);
        modalBox.appendChild(contentEl);
        modalBox.appendChild(copyButton);
        overlay.appendChild(modalBox);

        this.modalElement = overlay;

        return overlay;
    }

    close(): void {
        if (this.modalElement && this.modalElement.parentNode) {
            this.modalElement.parentNode.removeChild(this.modalElement);
        }
    }
}