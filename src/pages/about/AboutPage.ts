import { MainSection } from '../../components/main-section/MainSection';
import { ColumnLayout } from '../../components/column-layout/ColumnLayout';
import { TitlePage } from '../../components/title/TitlePage';
import { TextSection } from '../../components/description/TextSection';
import { SectionCard } from '../../components/section-card/SectionCard';

export class AboutPage {
    render(): HTMLElement {
        const subtitle = new TitlePage(2, "Sobre");
        const aboutParagraphs: string[] = [
            'Os métodos clássicos de criptografia referem-se às técnicas e algoritmos de cifragem desenvolvidos antes da era dos computadores, usados para proteger mensagens ao longo da história. Esses métodos envolvem a transformação do texto simples em um texto cifrado, de maneira que apenas aqueles que conhecem a chave de cifragem possam entender a mensagem original.'
        ];

        const description = new TextSection(aboutParagraphs);

        const textCard: string[] = [
            'Este projeto foi criado com o objetivo de oferecer uma experiência interativa sobre a Cifra de César, uma das técnicas de criptografia mais antigas e conhecidas. O projeto permite que os usuários experimentem o processo de criptografia e descriptografia usando a Cifra de César, explorando como as mensagens podem ser codificadas e decodificadas de forma simples. Com uma interface intuitiva, o projeto é ideal para iniciantes que desejam ter um primeiro contato prático com a criptografia, sem a necessidade de mergulhar em explicações técnicas complexas.'
        ];
        const titleCard = new TitlePage(3, 'Objetivo do projeto:');
        const descriptionCard = new TextSection(textCard);

        const sectionCard = new SectionCard([
            titleCard.render(),
            descriptionCard.render()
        ]);

        const layout = new ColumnLayout({
            leftContent: [subtitle.render(), description.render()],
            rightContent: [sectionCard.render()],
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