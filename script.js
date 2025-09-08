document.addEventListener('DOMContentLoaded', () => {
    // Inicializa os ícones da biblioteca Lucide
    lucide.createIcons();

    // Lógica para abrir e fechar o menu mobile
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav-button');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Fecha o menu ao clicar num link (útil para navegação na mesma página)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });
});

