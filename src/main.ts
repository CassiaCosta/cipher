import './styles/main.scss';
import imagePagePath from './assets/images/img.jpg';
import { PageContainer } from './components/page-container/PageContainer';
import { Header } from './components/header/header';
import { MainSection } from './components/main-section/MainSection';
import { TextInput } from './components/text-input/TextInput';
import { SliderInput } from './components/slider-input/SliderInput';
import { ToggleButton } from './components/buttons/toggle-button/toggleButton';
import { GenerateButton } from './components/buttons/generate-button/generateButton';
import { ClearButton } from './components/buttons/clear-button/ClearButton';
import { ButtonGroup } from './components/button-group/buttonGroup';
import { ColumnLayout } from './components/column-layout/ColumnLayout';
import { TitlePage } from './components/title/TitlePage';
import { RenderImage } from './components/render-image/render-image';
import { Modal } from './components/modal/modal';
import { Toast } from './components/toast/Toast';
import { caesarCipher } from './services/cryptography';

document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('app');
    const mainContainer = document.getElementById('main-content');
    
    if (appContainer && mainContainer) {
        const pageContainer = new PageContainer().render(appContainer);

        let currentText = '';
        let currentShift = 1;
        let selectedMode: 'encode' | 'decode' = 'encode';

        while (appContainer.firstChild && appContainer.firstChild !== pageContainer) {
            pageContainer.appendChild(appContainer.firstChild);
        }

        const header = new Header();
        header.render(pageContainer);
        header.setNavLinks([
            {name: 'Home', url: ''},
            {name: 'História da Criptografia', url: ''},
            {name: 'Método Clássico', url: ''},
            {name: 'Sobre', url: ''},
            {name: 'Contato', url: ''}
        ]);

        const titlePage = new TitlePage("Criptografia Clássica");

        const textInput = new TextInput({
            id: 'text-input',
            placeholder: 'Digite aqui...',
            onChange: (newText) => {
                currentText = newText;
            }
        });

        const sliderInput = new SliderInput({
            id: 'cipher-offset',
            value: 1,
            min: 1,
            max: 26,
            className: 'custom-slider',
            label: 'Deslocamento',
            onChange: (newShift) => {
                console.log(`Deslocamento: ${newShift}`);
                currentShift = newShift;
            }
        })

        const cryptoButtons = new ToggleButton({
            onEncode: () => {
                selectedMode = 'encode';
                console.log('Modo selecionado: Codificar');

            },
            onDecode: () => {
                selectedMode = 'decode';
                console.log('Modo selecionado: Decodificar');
            }
        });

        const generateButton = new GenerateButton({
            label: 'Gerar',
            onClick: () => {
                if (!currentText) {
                    console.log('Nenhum texto inserido!');
                    new Toast({
                        message: 'Nenhum texto inserido!',
                        type: 'error',
                        duration: 2000
                    }).render();
                    return;
                }

                let resultText;
                
                if (selectedMode === 'encode') {
                    resultText = caesarCipher(currentText, currentShift);
                    console.log('Texto codificado:', resultText);
                } else {
                    resultText = caesarCipher(currentText, -currentShift);
                    console.log('Texto decodificado:', resultText);
                }

                const modal = new Modal({ content: resultText });

                appContainer.appendChild(modal.render());
            }          
        })

        const clearButton = new ClearButton({
            elements: ['text-input', 'cipher-offset'],
            onClearText: () => {
                currentText = '';
                console.log('Variável de texto resetada: ', currentText);
            },
            onClearShift: () => {
                currentShift = 1;
                console.log('Variável de deslocamento resetada: ', currentShift);
            }
        })

        const layoutButtonGroup = new ButtonGroup([cryptoButtons.render(), generateButton.render(), clearButton.render()]);

        const imagePage = new RenderImage({
            src: imagePagePath,
            alt: '',
            className: 'first-layout__image'
        })

        const columnLayout = new ColumnLayout({
            leftContent: [titlePage.render(), imagePage.render()],
            rightContent: [textInput.render(), sliderInput.render(), layoutButtonGroup.render()],
            className: 'first-layout',
            leftColumnClassName: 'first-layout__column--left',
            rightColumnClassName: 'first-layout__column--right',
            // children: [imagePage.render()]
        })

        const mainSection = new MainSection({
            className: 'bg-dark',
            children: [columnLayout.render()]
        });

        mainContainer.appendChild(mainSection.render());
    }

    function getScreenSize() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        console.log(`Largura da tela: ${width}px, Altura da tela ${height}px`);
    }

    const screenSize = getScreenSize();
});