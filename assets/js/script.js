let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav-links ul li a');

window.onscroll = () => {

    section.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.nav-links ul li a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}

jQuery(function ($) {
    var $navbar = $('.navbar');
    $(window).scroll(function (event) {
        var $current = $(this).scrollTop();
        if ($current > 0) {
            $navbar.addClass('navbar-color');

        } else {
            $navbar.removeClass('navbar-color');
        }
    });
});