import { MainSection } from '../components/main-section/MainSection';
import { ColumnLayout } from '../components/column-layout/ColumnLayout';
import { TitlePage } from '../components/title/TitlePage';
import { TextSection } from '../components/description/TextSection';

export class ClassicPage {
    render(): HTMLElement {
        const subtitle = new TitlePage(2, "Método Clássico");
        const classicParagraphs: string[] = [
            'Os métodos clássicos de criptografia referem-se às técnicas e algoritmos de cifragem desenvolvidos antes da era dos computadores, usados para proteger mensagens ao longo da história. Esses métodos envolvem a transformação do texto simples em um texto cifrado, de maneira que apenas aqueles que conhecem a chave de cifragem possam entender a mensagem original.'
        ];

        const description = new TextSection(classicParagraphs);

        const layout = new ColumnLayout({
            leftContent: [subtitle.render(), description.render()],
            rightContent: [],
            className: 'first-layout',
            // leftColumnClassName: 'first-layout__column--left',
            // rightColumnClassName: 'first-layout__column--right',
            // children: [imagePage.render()]
        });

        const section = new MainSection({
            className: 'bg-light',
            children: [layout.render()]
        });

        return section.render();
    }
}