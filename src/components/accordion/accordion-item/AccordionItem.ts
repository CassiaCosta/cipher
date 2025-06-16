import chevronRight from '../../../assets/icons/chevron-right.svg';
import chevronDown from '../../../assets/icons/chevron-down.svg';

interface AccordionItemProps {
    title: string;
    content: string;
    onToggle: () => void;
}

export class AccordionItem {
    private props: AccordionItemProps;
    private container: HTMLElement;
    private content!: HTMLElement;
    private icon!: HTMLImageElement;
    private isOpen: boolean = false;

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

        this.icon = document.createElement('img');
        this.icon.className = 'accordion__icon';
        this.icon.src = chevronRight;

        const titleEl = document.createElement('span');
        titleEl.className = 'accordion__title';
        titleEl.textContent = this.props.title;

        header.appendChild(this.icon);
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
        this.isOpen = true;
        this.container.classList.add('accordion__item--open');
        this.icon.src = chevronDown;
    }

    close(): void {
        this.isOpen = false;
        this.container.classList.remove('accordion__item--open');
        this.icon.src = chevronRight;
    }

    render(): HTMLElement {
        return this.container;
    }
}