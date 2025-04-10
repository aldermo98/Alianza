(function($) {
    'use strict';
    $(document).ready(function() {
        // Menu Expanded
        $(".sub-menu-trigger").on('click', function(e) {
            $("sm-clean").toggleClass("menu-active");
            $("#header").toggleClass("header-expanded");
        });

        AOS.init({
            duration: 3000,
        });

        window.addEventListener("scroll", () => {
            const btn = document.getElementById('scrollToTopButton');
            if (btn) {
                btn.style.display = (document.documentElement.scrollTop > 200) ? 'block' : 'none';
            }
        });       

        const scrollToTopButton = document.createElement('button');
        scrollToTopButton.id = 'scrollToTopButton';
        scrollToTopButton.className = 'scroll-to-top-btn';
        scrollToTopButton.style.display = 'none';
        scrollToTopButton.textContent = '↑';
        scrollToTopButton.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
        document.body.appendChild(scrollToTopButton);

        // Smartmenus
        $(function() {
            $('#main-menu').smartmenus();
        });
    });
})(jQuery);
