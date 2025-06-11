import { MainSection } from '../components/main-section/MainSection';
import { ColumnLayout } from '../components/column-layout/ColumnLayout';
import { TitlePage } from '../components/title/TitlePage';
import { TextSection } from '../components/description/TextSection';
import { Accordion } from '../components/accordion/Accordion';

export class HistoryPage {
    render(): HTMLElement {
        const subtitle = new TitlePage(2, "História da Criptografia");
        const historyParagraphs: string[] = [
            'A criptografia é a arte e ciência de codificar mensagens para proteger informações, e sua história é tão antiga quanto a própria escrita.',
            'Desde tempos remotos, civilizações buscaram formas de ocultar suas comunicações para proteger segredos militares, políticos e comerciais.'
        ];

        const sections = [
            {
                title: 'Origens Antigas',
                content: ''
            },
            {
                title: 'Criptografia Medieval',
                content: 'Durante a Idade Média, a criptografia tornou-se mais sofisticada, especialmente nas cortes reais e no âmbito religioso. O Papa Gregório XIII, por exemplo, usava cifras para proteger suas correspondências. Nesse período, surgiram métodos de substituição mais complexos, como a cifra de Vigenère, que empregava um padrão de letras para criar uma chave mais difícil de decifrar.'
            },
            {
                title: 'Renascimento e Avanços Científicos',
                content: ''
            },
            {
                title: 'Criptografia Moderna',
                content: ''
            },
            {
                title: 'Era Digital',
                content: 'No século XX, com o avanço dos computadores, a criptografia evoluiu rapidamente. O desenvolvimento da criptografia de chave pública, com figuras como Whitfield Diffie e Martin Hellman, revolucionou o campo, tornando a comunicação segura mais acessível. Hoje, a criptografia é um componente essencial na segurança digital, protegendo desde transações financeiras até comunicações pessoais.'
            },
        ]

        const description = new TextSection(historyParagraphs);

        const accordion = new Accordion(sections);

        const layout = new ColumnLayout({
            leftContent: [subtitle.render(), description.render()],
            rightContent: [accordion.render()],
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