// Toggle navbar on mobile devices
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});

// Auto hide navbar on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-58px";
    }
    prevScrollpos = currentScrollPos;
}
$(window).scroll(function () {
    var $nav = $("#navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});


// Agent list

var swiper = new Swiper(".swiper-container", {
    autoplay: {
        delay: 1000,
        disableOnInteraction: false
    },
    loop: true,
    speed: 2500,
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});

// Partner List

var swiper = new Swiper(".swiper-container-1", {
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
        reverseDirection: true,
    },
    loop: true,
    speed: 1500,
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
});
