const panels = document.querySelectorAll(".panel");

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
}

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
    });
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

function debounce(func, wait = 10) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");

    const leftArrow = document.getElementById("left-arrow");
    const rightArrow = document.getElementById("right-arrow");
    const testimonials = document.querySelectorAll(".testimonial");
    const scrollToTopButton = document.getElementById("scrollToTop");
    const carouselImages = document.querySelectorAll(".carousel img");

    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.opacity = "0";
            testimonial.style.transition = "opacity 0.5s ease-in-out";
            testimonial.style.display = "none";
            if (i === index) {
                testimonial.style.display = "block";
                setTimeout(() => {
                    testimonial.style.opacity = "1";
                }, 100);
            }
        });
    }

    carouselImages.forEach((img, index) => {
        if (index === 0 || index === 1) {
            img.setAttribute("loading", "eager");
        } else {
            img.setAttribute("loading", "lazy");
        }

        img.addEventListener("load", () => {
            console.log(`${img.src} loaded`);
        });
    });

    showTestimonial(currentTestimonial);

    if (leftArrow) {
        leftArrow.addEventListener("click", () => {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentTestimonial);
        });
    }

    if (rightArrow) {
        rightArrow.addEventListener("click", () => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        });
    }

    window.addEventListener("scroll", () => {
        if (window.scrollY > 150) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    if (scrollToTopButton) {
        scrollToTopButton.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
    }
});