// Nav Button

const navButton = document.querySelector(".nav_button");
const navIcon = document.querySelector(".nav_icon");

navButton.addEventListener("click", () => {
    if (navIcon.classList.contains("fa-bars")) {
        navIcon.classList.add("fa-x");
        navIcon.classList.remove("fa-bars");
    } else {
        navIcon.classList.remove("fa-x");
        navIcon.classList.add("fa-bars");
    }
    // rotate magic
    navIcon.classList.contains("rotate")
        ? navIcon.classList.remove("rotate")
        : navIcon.classList.add("rotate");
});

// Counter

// Slider

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        576: {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        960: {
            slidesPerView:5,
            slidesPerGroup: 1,
        },
        1200: {
            slidesPerView: 6,
            slidesPerGroup: 1,
        },
    },
});
