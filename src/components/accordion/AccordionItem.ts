import chevronRight from '../../assets/icons/chevron-right.svg';
import chevronDown from '../../assets/icons/chevron-down.svg';

interface AccordionItemProps {
    title: string;
    content: string;
    onToggle: () => void;
    isOpen: boolean;
}

export class AccordionItem {
    private props: AccordionItemProps;
    private container: HTMLElement;

    constructor(props: AccordionItemProps) {
        this.props = props;
        this.container = this.createItem();
    }

    private createItem(): HTMLElement {
        const item = document.createElement('div');
        item.className = 'accordion-item';

        const header = document.createElement('div');
        header.className = 'accordion-header';
        header.addEventListener('click', () => this.props.onToggle());

        const icon = document.createElement('img');
        icon.className = 'accordion-icon';
        icon.src = this.props.isOpen ? chevronDown : chevronRight;

        const titleEl = document.createElement('span');
        titleEl.className = 'accordion-title';
        titleEl.textContent = this.props.title;

        header.appendChild(icon);
        header.appendChild(titleEl);
        item.appendChild(header);

        if (this.props.isOpen) {
            const content = document.createElement('div');
            content.className = 'accordion-content';
            content.textContent = this.props.content;
            item.appendChild(content);
        }

        return item;
    }

    render(): HTMLElement {
        return this.container;
    }
}