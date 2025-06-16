import { MainSection } from '../../components/main-section/MainSection';
import { ColumnLayout } from '../../components/column-layout/ColumnLayout';
import { TitlePage } from '../../components/title/TitlePage';
import { RenderImage } from '../../components/render-image/render-image';
import { TextInput } from '../../components/text-input/TextInput';
import { SliderInput } from '../../components/slider-input/SliderInput';
import { ToggleButton } from '../../components/buttons/toggle-button/toggleButton';
import { GenerateButton } from '../../components/buttons/generate-button/generateButton';
import { ClearButton } from '../../components/buttons/clear-button/ClearButton';
import { ButtonGroup } from '../../components/button-group/buttonGroup';
import { Modal } from '../../components/modal/modal';
import { Toast } from '../../components/toast/Toast';
import { caesarCipher } from '../../services/cryptography';
import imagePagePath from '../../assets/images/img.jpg';

export class HomePage {
    private currentText = '';
    private currentShift = 1;
    private selectedMode: 'encode' | 'decode' = 'encode';

    render(): HTMLElement {
        const image = new RenderImage({
            src: imagePagePath,
            alt: '',
            className: 'home-layout__image'
        });

        const titlePage = new TitlePage(1, "Criptografia Clássica", [image.render()]);

        const textInput = new TextInput({
            id: 'text-input',
            placeholder: 'Digite sua mensagem aqui...',
            onChange: (newText) => (this.currentText = newText)
        });

        const sliderInput = new SliderInput({
            id: 'cipher-offset',
            value: 1,
            min: 1,
            max: 26,
            className: 'custom-slider',
            label: 'Deslocamento',
            onChange: (shift) => {
                console.log(`Deslocamento: ${shift}`);
                this.currentShift = shift;
            }
        });

        const toggleButton = new ToggleButton({
            onEncode: () => {
                this.selectedMode = 'encode';
                console.log('Modo selecionado: Codificar');

            },
            onDecode: () => {
                this.selectedMode = 'decode';
                console.log('Modo selecionado: Decodificar');
            }
        });

        const generateButton = new GenerateButton({
            label: 'Gerar',
            onClick: () => {
                if (!this.currentText) {
                    console.log('Nenhum texto inserido!');
                    new Toast({
                        message: 'Nenhum texto inserido!',
                        type: 'error',
                        duration: 2000
                    }).render();
                    return;
                }

                let resultText;
                
                if (this.selectedMode === 'encode') {
                    resultText = caesarCipher(this.currentText, this.currentShift);
                    console.log('Texto codificado:', resultText);
                } else {
                    resultText = caesarCipher(this.currentText, -this.currentShift);
                    console.log('Texto decodificado:', resultText);
                }

                const modal = new Modal({ content: resultText });

                document.body.appendChild(modal.render());
            }          
        });

        const clearButton = new ClearButton({
            elements: ['text-input', 'cipher-offset'],
            onClearText: () => {
                this.currentText = '';
                console.log('Variável de texto resetada: ', this.currentText);
            },
            onClearShift: () => {
                this.currentShift = 1;
                console.log('Variável de deslocamento resetada: ', this.currentShift);
            }
        });

        const buttonGroup = new ButtonGroup([
            toggleButton.render(),
            generateButton.render(),
            clearButton.render()
        ]);

        const layout = new ColumnLayout({
            leftContent: [titlePage.render()],
            rightContent: [
                textInput.render(),
                sliderInput.render(),
                buttonGroup.render()
            ],
            className: 'home-layout',
            leftColumnClassName: 'home-layout__column--left',
            rightColumnClassName: 'home-layout__column--right',
            // children: [imagePage.render()]
        });

        const section = new MainSection({
            className: 'bg-dark',
            children: [layout.render()]
        });

        return section.render();
    }

}