interface AccordionItemProps {
    title: string;
    content: string;
    onToggle: () => void;
}

export class AccordionItem {
    private props: AccordionItemProps;
    private container: HTMLElement;
    private content!: HTMLElement;
    private iconWrapper!: HTMLElement;
    public isOpen: boolean = false;

    constructor(props: AccordionItemProps) {
        this.props = props;
        this.container = this.createItem();
    }

    private createItem(): HTMLElement {
        const item = document.createElement('div');
        item.className = 'accordion__item';

        const header = document.createElement('div');
        header.className = 'accordion__header';
        header.addEventListener('click', () => this.props.onToggle());

        this.iconWrapper = document.createElement('span');
        this.iconWrapper.className = 'accordion__icon';
        this.iconWrapper.innerHTML = `
            <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.25 22.5L18.75 15L11.25 7.5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
        `;

        const titleEl = document.createElement('span');
        titleEl.className = 'accordion__title';
        titleEl.textContent = this.props.title;

        header.appendChild(this.iconWrapper);
        header.appendChild(titleEl);
        item.appendChild(header);

        this.content = document.createElement('div');
        this.content.className = 'accordion__content';

        const innerContent = document.createElement('div');
        innerContent.className = 'accordion__content-inner';
        innerContent.textContent = this.props.content;

        this.content.appendChild(innerContent);
        item.appendChild(this.content);

        return item;
    }

    open(): void {
        if (this.isOpen) return;
        this.isOpen = true;
        this.container.classList.add('accordion__item--open');
    }

    close(): void {
        if (!this.isOpen) return;
        this.isOpen = false;
        this.container.classList.remove('accordion__item--open');
    }

    render(): HTMLElement {
        return this.container;
    }
}