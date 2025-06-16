import { AccordionItem } from "./accordion-item/AccordionItem";

interface AccordionSections {
    title: string;
    content: string;
}

export class Accordion {
    private sections: AccordionSections[];
    private items: AccordionItem[] = [];
    private openIndex: number | null = null;
    private container: HTMLElement;

    constructor(sections: AccordionSections[]) {
        this.sections = sections;
        this.container = this.createAccordion();
    }
    
    createAccordion(): HTMLElement {
        const container = document.createElement('div');
        container.className = 'accordion';

        this.sections.forEach((section, index) => {
            const item = new AccordionItem({
                title: section.title,
                content: section.content,
                onToggle: () => this.toggle(index)
            });

            this.items.push(item);
            container.appendChild(item.render());
        });

        return container;
    }

    private toggle = (index: number): void => {
        if (this.openIndex !== null && this.openIndex !== index) {
            this.items[this.openIndex].close();
        }
        
        if (this.openIndex === index) {
            this.items[index].close();
            this.openIndex = null;
        } else {
            this.items[index].open();
            this.openIndex = index;
        }
    }

    render(): HTMLElement {
        return this.container;
    }
}