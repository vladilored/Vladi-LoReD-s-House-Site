function showPage(pageId) {
    // Скрываем меню и заголовок
    document.getElementById('main-nav').style.display = 'none';
    document.getElementById('main-header').style.opacity = '0.3';
    
    // Скрываем все страницы
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Показываем нужную
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

function showHome() {
    // Показываем меню
    document.getElementById('main-nav').style.display = 'grid';
    document.getElementById('main-header').style.opacity = '1';
    
    // Скрываем все страницы
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
}