interface ColumnLayoutProps {
    leftContent: HTMLElement[];
    rightContent: HTMLElement[];
    className?: string;
    leftColumnClassName?: string;
    rightColumnClassName?: string;
    children?: HTMLElement[];
}

export class ColumnLayout {
    private leftContent: HTMLElement[];
    private rightContent: HTMLElement[];
    private className?: string;
    private leftColumnClassName?: string;
    private rightColumnClassName?: string;
    private children?: HTMLElement[];

    constructor({ leftContent, rightContent, className = '', leftColumnClassName = '', rightColumnClassName = '', children }: ColumnLayoutProps) {
        this.leftContent = leftContent;
        this.rightContent = rightContent;
        this.className = className;
        this.children = children;
        this.leftColumnClassName = leftColumnClassName;
        this.rightColumnClassName = rightColumnClassName;
    }

    private createColumn(content: HTMLElement[]): HTMLElement {
        const column = document.createElement('div');

        content.forEach(item => {
            column.appendChild(item);
        })

        return column;
    }

    render(): HTMLElement {
        const columnLayoutContainer = document.createElement('div');
        columnLayoutContainer.className = `layout ${this.className}`.trim();

        const leftColumn = this.createColumn(this.leftContent);
        leftColumn.className = `layout__column layout__column--left ${this.leftColumnClassName}`.trim();

        const rightColumn = this.createColumn(this.rightContent);
        rightColumn.className = `layout__column layout__column--right ${this.rightColumnClassName}`.trim();

        columnLayoutContainer.appendChild(leftColumn);
        columnLayoutContainer.appendChild(rightColumn);

        if (this.children) {
            this.children.forEach(child => {
                columnLayoutContainer.appendChild(child);
            });
        }

        return columnLayoutContainer;
    }
}