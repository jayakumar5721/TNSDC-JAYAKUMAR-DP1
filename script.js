/* Responsive Navbar */

@media screen and (max-width:

768px) {

.nav-links {

display: none;

flex-direction: column;

background: #333;

position: absolute;

top: 60px;

right: 0;

width: 200px;

}

.nav-links.show {

display: flex;

}

.menu-toggle {

display: block;

}

// Toggle mobile menu

const menu Toggle = document.ge tElementById("menu-toggle"); const navLinks = document.getEle mentById("nav-links");

menu Toggle.addEven tListener("click", () => {

navLinks.classList.toggle("show"); });

// Simple contact form validation const contactForm = document.ge tElementById("contact-form"); const formStatus = document.get ElementById("form-status");

contactForm.addEventL istener("submit", (e) => {

e.preventDefault();

const name = document.getElem entById("name").value.trim(); const email = document.getElem entById("email").value.trim(); const message = document.getElementById("messa ge").value.trim();

if (name && email && message) { formStatus.textContent = "

Message sent successfully!";

formStatus.style.color = "green"; contactForm.reset();

} else {

formStatus.textContent="

Please fill in all fields.";

} formStatus.style.color = "red"; });