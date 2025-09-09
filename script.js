document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-menu a');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        lucide.createIcons(); 
    };

    if (menuBtn) {
        menuBtn.addEventListener('click', toggleMenu);
    }

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('hidden')) {
                toggleMenu();
            }
        });
    });

    lucide.createIcons();
});

