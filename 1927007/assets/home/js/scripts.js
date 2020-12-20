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

// phần này dùng cho tabs
function switchToExterior() {
    removeActive();
    hideAll();
    $("#exterior-tab").addClass("is-active");
    $("#exterior-tab-content").removeClass("is-hidden");

}

function switchToInterior() {
    removeActive();
    hideAll();
    $("#interior-tab").addClass("is-active");
    $("#interior-tab-content").removeClass("is-hidden");
}

function switchToDimensions() {
    removeActive();
    hideAll();
    $("#dimensions-tab").addClass("is-active");
    $("#dimensions-tab-content").removeClass("is-hidden");
}

function removeActive() {
    $("li").each(function () {
        $(this).removeClass("is-active");
    });
}

function hideAll() {
    $("#exterior-tab-content").addClass("is-hidden");
    $("#interior-tab-content").addClass("is-hidden");
    $("#dimensions-tab-content").addClass("is-hidden");
}
// kết thúc tabs

// Open modal in Photo Gallery 
// document.querySelector('#open-modal').addEventListener('click', function (event) {
//     event.preventDefault();
//     var modal = document.querySelector('.modal');  // assuming you have only 1
//     var html = document.querySelector('html');
//     modal.classList.add('is-active');
//     html.classList.add('is-clipped');

//     modal.querySelector('.modal-background').addEventListener('click', function (e) {
//         e.preventDefault();
//         modal.classList.remove('is-active');
//         html.classList.remove('is-clipped');
//     });
// });


// Swiper Hero
var swiper = new Swiper(".swiper-container-0", {
    autoplay: {
        delay: 2000,
        reverseDirection: true,
        disableOnInteraction: false,

    },
    speed: 2000,
    preventInteractionOnTransition: true,
    effect: "fade",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    themeColor: '#00d1b2',
});

// Swiper slider - client review

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
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});

//Swiper Find more property

var swiper = new Swiper(".swiper-container-2", {
    autoplay: {
        delay: 2500,
        reverseDirection: true,
        disableOnInteraction: false
    },
    loop: true,
    speed: 500,
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
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});

// Modal
class SUSModal { constructor(t = {}) { if (t = Object.assign({}, { id: null, animation: "fade", animationDuration: 200, width: "400px", height: "auto", backgroundDark: !1, finalPosition: "auto" }, t), this.id = t.id, this.animation = t.animation, this.animationDuration = t.animationDuration, this.width = t.width, this.height = t.height, this.finalPosition = t.finalPosition, this.backgroundDark = t.backgroundDark, this.SUSModal = document.getElementById(this.id), this.SUSModalContent = this.SUSModal.querySelector(".susmodal-content"), this.SUSModalShow = !1, this.focusElementsType = "button, input, a, textarea", this.focusElements = Array.from(this.SUSModalContent.querySelectorAll(this.focusElementsType)), this.stylize(), this.SUSModal.querySelectorAll(".susmodal-close-btn").length > 0) { Array.from(this.SUSModal.querySelectorAll(".susmodal-close-btn")).forEach(t => { t.addEventListener("click", () => { this.hide() }) }) } } show() { this.SUSModal.style.display = "block", this.focusElements[0].focus(), this.SUSModal.removeAttribute("aria-hidden"), this.SUSModal.setAttribute("aria-modal", "true"), this.SUSModalContent.classList.contains("susmodal-content-reverse") && (this.SUSModalContent.classList.remove("susmodal-content-reverse"), this.backgroundDark && document.body.classList.remove("susmodal-body-animation-reverse")), this.SUSModalContent.classList.add("susmodal-animation-" + this.animation), this.backgroundDark && document.body.classList.add("susmodal-body-animation"), window.onkeydown = (t => { this.keydownEvent(t) }), window.onclick = (t => { t.target === this.SUSModal && this.hide() }) } hide() { event.preventDefault(), this.SUSModal.setAttribute("aria-hidden", "true"), this.SUSModal.removeAttribute("aria-modal"), this.SUSModalContent.classList.remove("susmodal-content-animation"), this.SUSModalContent.classList.add("susmodal-content-reverse"), this.backgroundDark && document.body.classList.add("susmodal-body-animation-reverse"), setTimeout(() => { this.SUSModal.style.display = "none" }, this.animationDuration), window.onkeydown = void 0, window.onclick = void 0 } catchFocus(t) { t.preventDefault(); let i = this.focusElements.findIndex(t => t === this.SUSModalContent.querySelector(":focus")); !0 === t.shiftKey ? indexsusmodal-- : i++, i >= this.focusElements.length && (i = 0), i < 0 && (i = this.focusElements.length - 1), this.focusElements[i].focus() } keydownEvent(t) { (this.SUSModal && "Escape" === t.key || "Esc" === t.key) && this.hide(), this.SUSModal && "Tab" === t.key && this.catchFocus(t) } stylize() { let t = "margin:" + this.finalPosition + ";"; this.width && (t += "width:" + this.width + ";"), this.height && (t += "height:" + this.height + ";"), this.animationDuration && (t += "animation-duration:" + this.animationDuration + "ms;"), this.SUSModalContent.style.cssText = t, this.backgroundDark && (document.body.style.cssText = "animation-duration:" + this.animationDuration + "ms;") } };

const MySUSModal1 = new SUSModal({
    id: 'my-bulma-modal-1',
    animation: "top"
}
);
// for example, display the modal when you click on a button
let btnDisplayModal1 = document.getElementById("open-modal-1");
btnDisplayModal1.addEventListener('click', () => {
    MySUSModal1.show();
});

const MySUSModal2 = new SUSModal({
    id: 'my-bulma-modal-2',
    animation: "top"
}
);
// for example, display the modal when you click on a button
let btnDisplayModal2 = document.getElementById("open-modal-2");
btnDisplayModal2.addEventListener('click', () => {
    MySUSModal2.show();
});

const MySUSModal3 = new SUSModal({
    id: 'my-bulma-modal-3',
    animation: "top"
}
);
// for example, display the modal when you click on a button
let btnDisplayModal3 = document.getElementById("open-modal-3");
btnDisplayModal3.addEventListener('click', () => {
    MySUSModal3.show();
});

const MySUSModal4 = new SUSModal({
    id: 'my-bulma-modal-4',
    animation: "top"
}
);
// for example, display the modal when you click on a button
let btnDisplayModal4 = document.getElementById("open-modal-4");
btnDisplayModal4.addEventListener('click', () => {
    MySUSModal4.show();
});

const MySUSModal5 = new SUSModal({
    id: 'my-bulma-modal-5',
    animation: "top"
}
);
// for example, display the modal when you click on a button
let btnDisplayModal5 = document.getElementById("open-modal-5");
btnDisplayModal5.addEventListener('click', () => {
    MySUSModal5.show();
});

// Kết thúc modal
