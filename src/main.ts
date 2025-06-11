import './styles/main.scss';
import { PageContainer } from './components/page-container/PageContainer';
import { Header } from './components/header/header';
import { Router } from './router';
import { PageKey } from "./types/PageKey";

document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('app');
    const mainContainer = document.getElementById('main-content');
    
    if (!appContainer || !mainContainer) return;
    
    // Renderiza o layout principal
    const pageContainer = new PageContainer().render(appContainer);

    // Garante que o conteúdo atual seja incluído dentro do container
    while (appContainer.firstChild && appContainer.firstChild !== pageContainer) {
        pageContainer.appendChild(appContainer.firstChild);
    }
    
    const router = new Router(mainContainer);

    // Cria e renderiza o Header
    const header = new Header();
    header.render(pageContainer);

    // Define os links e passa a função de navegação
    header.setNavLinks([
        {name: 'Home', key: 'home'},
        {name: 'História da Criptografia', key: 'historia'},
        {name: 'Método Clássico', key: 'classico'},
        {name: 'Sobre', key: 'sobre'},
        {name: 'Contato', key: 'contato'}
    ], (pageKey: string) => {
        router.navigate(pageKey as PageKey);
    });

    const initialPage = (window.location.hash.replace('#', '') || 'home') as PageKey;
    router.navigate(initialPage);

    // function getScreenSize() {
    //     const width = window.innerWidth;
    //     const height = window.innerHeight;

    //     console.log(`Largura da tela: ${width}px, Altura da tela ${height}px`);
    // }

    // const screenSize = getScreenSize();
});