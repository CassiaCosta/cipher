interface RenderImageProps {
    src: string;
    alt: string;
    className?: string;
}

export class RenderImage {
    private props: RenderImageProps;

    constructor(props: RenderImageProps) {
        this.props = props;
    }

    render(): HTMLImageElement {
        const imageElement = document.createElement('img');
        imageElement.src = this.props.src;
        imageElement.alt = this.props.alt;

        if (this.props.className) {
            imageElement.className = `image-page ${this.props.className}`.trim();
        }

        return imageElement;
    }
}