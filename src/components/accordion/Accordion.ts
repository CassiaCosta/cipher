import { AccordionItem } from "./AccordionItem";

interface AccordionSections {
    title: string;
    content: string;
}

export class Accordion {
    private sections: AccordionSections[];
    private openIndex: number | null = null;

    constructor(sections: AccordionSections[]) {
        this.sections = sections;
    }
    
    render(): HTMLElement {
        const container = document.createElement('div');
        container.className = 'accordion-container';

        this.sections.forEach((section, index) => {
            const item = new AccordionItem({
                title: section.title,
                content: section.content,
                isOpen: index === this.openIndex,
                onToggle: () => {
                    this.toggle(index);

                    const newRender = this.render();
                    container.replaceWith(newRender);
                }
            });

            container.appendChild(item.render());
        });

        return container;
    }

    private toggle = (index: number): void => {
        if (this.openIndex === index) {
            this.openIndex = null;
        } else {
            this.openIndex = index;
        }

        this.render();
    }
}