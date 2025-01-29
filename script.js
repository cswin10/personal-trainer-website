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
    const contactForm = document.getElementById("contact-form");
    const carouselImages = document.querySelectorAll(".carousel img");

    if (!contactForm) {
        console.error("Contact form not found");
    }

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

    const dropdownMessage = document.createElement("div");
    dropdownMessage.id = "dropdownMessage";
    dropdownMessage.style.position = "fixed";
    dropdownMessage.style.top = "0";
    dropdownMessage.style.left = "0";
    dropdownMessage.style.width = "100%";
    dropdownMessage.style.backgroundColor = "#4CAF50";
    dropdownMessage.style.color = "#fff";
    dropdownMessage.style.textAlign = "center";
    dropdownMessage.style.padding = "10px 0";
    dropdownMessage.style.zIndex = "1000";
    dropdownMessage.style.display = "none";
    dropdownMessage.setAttribute("aria-live", "polite");
    dropdownMessage.textContent = "Thank you for your submission, I will get back to you as soon as possible!";
    document.body.appendChild(dropdownMessage);

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            try {
                dropdownMessage.style.display = "block";

                setTimeout(() => {
                    dropdownMessage.style.display = "none";
                }, 3000);

                contactForm.reset();
            } catch (error) {
                console.error("Error submitting the form:", error);
                alert("An error occurred while submitting the form. Please try again.");
            }
        });
    }
});