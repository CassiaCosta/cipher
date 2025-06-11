import { MainSection } from '../components/main-section/MainSection';
import { ColumnLayout } from '../components/column-layout/ColumnLayout';
import { TitlePage } from '../components/title/TitlePage';

export class HistoryPage {
    render(): HTMLElement {
        const subtitle = new TitlePage(2, "História da Criptografia");

        const layout = new ColumnLayout({
            leftContent: [subtitle.render()],
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