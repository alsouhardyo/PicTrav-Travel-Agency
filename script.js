// Website Preloader:-

let loader = document.querySelector(".preloader");

window.addEventListener("load", () => {
    setTimeout(() => {
        loader.style.display = "none";
    }, 5000);
});

// Toggle Functionality of Nav Bar:-

const menu = document.querySelector(".menu");
const navItems = document.querySelector(".list-container");

menu.addEventListener("click", () => {
    if (menu.classList.contains("fa-bars")) {
        menu.classList.remove("fa-bars");
        menu.classList.add("fa-xmark");
        navItems.style.display = "block";
    } else {
        menu.classList.add("fa-bars");
        menu.classList.remove("fa-xmark");
        navItems.style.display = "none";
    }
});

// Header-Shadow on scroll:-

const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
        header.classList.add("header-shadow");
    } else {
        header.classList.remove("header-shadow");
    }
});

// Infinite Scroll Animation:-

let scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}

// Slider of Promos Section:-

var swiper = new Swiper(".card_slider", {
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 500,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 4,
        },
    },
});

// Slider for Clients Testimonials Section:-

var clientSlider = new Swiper(".testimonial-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 90,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 4,
        },
    },
    loop: true,
});

// FAQ Feature:-

const chevrons = document.querySelectorAll(".chevron");
let currentOpenAnswer = document.querySelector(".answer:not(.hidden)"); // Initialize with the first open answer

chevrons.forEach((chevron) => {
    chevron.addEventListener("click", () => {
        const parent = chevron.closest(".mb-5");
        const answer = parent.querySelector(".answer");

        if (currentOpenAnswer && currentOpenAnswer !== answer) {
            // Close the previously open answer
            currentOpenAnswer.classList.add("hidden");
            currentOpenAnswer.classList.remove("block");
            currentOpenAnswer.previousElementSibling
                .querySelector(".chevron")
                .classList.add("fa-chevron-down");
            currentOpenAnswer.previousElementSibling
                .querySelector(".chevron")
                .classList.remove("fa-chevron-up");
            currentOpenAnswer.closest(".mb-5").classList.remove("no-border");
        }

        // Toggle the clicked answer
        answer.classList.toggle("hidden");
        answer.classList.toggle("block");
        chevron.classList.toggle("fa-chevron-down");
        chevron.classList.toggle("fa-chevron-up");

        // Toggle border class
        parent.classList.toggle("no-border");

        // Set the current open answer
        currentOpenAnswer = answer.classList.contains("hidden") ? null : answer;
    });
});

// Ensure the first item is opened by default
const firstAnswer = document.querySelector(".answer");
if (firstAnswer) {
    firstAnswer.classList.remove("hidden");
    firstAnswer.classList.add("block");
    const firstChevron =
        firstAnswer.previousElementSibling.querySelector(".chevron");
    if (firstChevron) {
        firstChevron.classList.remove("fa-chevron-down");
        firstChevron.classList.add("fa-chevron-up");
    }
    currentOpenAnswer = firstAnswer;
}

// Adding Scroll Reaveal To Website:-

let sr = ScrollReveal({
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: false,
});
if (window.screen.width > 767) {
    sr.reveal(".service-data", { delay: 300, origin: "left" });
    sr.reveal(".service-img", { delay: 300, origin: "right" });
} else {
    sr.reveal(".service-data", { delay: 300, origin: "top" });
    sr.reveal(".service-img", { delay: 300, origin: "bottom" });
}
sr.reveal(".cta-data", { delay: 400, origin: "left" });
sr.reveal(".testimonial-slider", { delay: 500, origin: "left" });
