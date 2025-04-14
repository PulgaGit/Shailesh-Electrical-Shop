// Fade-in effect for the hero section when the page is loaded
document.addEventListener("DOMContentLoaded", function () {
    const heroHeading = document.querySelector('.hero h2');
    const heroText = document.querySelector('.hero p');
    
    heroHeading.classList.add('fade-in');
    heroText.classList.add('fade-in');
});

// Example interactive feature
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', () => {
    alert("Redirecting you to our product page!");
});
