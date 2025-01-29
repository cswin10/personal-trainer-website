document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");

    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

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
    } else {
        console.error("Contact form not found");
    }
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});