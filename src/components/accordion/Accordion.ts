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
    
    private createAccordion(): HTMLElement {
        const container = document.createElement('div');
        container.className = 'accordion';

        this.sections.forEach((section, index) => {
            const item = new AccordionItem({
                title: section.title,
                content: section.content,
                onToggle: () => this.toggle(index),
            });

            this.items.push(item);
            container.appendChild(item.render());
        });

        return container;
    }

    private toggle = (index: number): void => {
        const currentlyOpen = this.openIndex;
        const item = this.items[index];

        if (currentlyOpen === index) {
            item.close();
            this.openIndex = null;
            return;
        }
        
        if (currentlyOpen !== null) {
            this.items[currentlyOpen].close();
        }

        item.open();
        this.openIndex = index;

        item.render().scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    render(): HTMLElement {
        return this.container;
    }
}