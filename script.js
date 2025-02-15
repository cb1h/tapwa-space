document.getElementById('sendButton').addEventListener('click', function() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const errorMessage = document.getElementById('errorMessage');
    const digitsOnly = phoneNumber.replace(/\D/g, ''); // Remove all non-digit characters

    if (digitsOnly.length >= 7) { // Minimum phone number length
        const whatsappUrl = `https://wa.me/${digitsOnly}`;
        window.location.href = whatsappUrl;
    } else {
        errorMessage.textContent = 'Invalid phone number';
    }
});

function darkModeSwitch1() {
    const body = document.body;
    const check = document.getElementById("switch-image");
    if (check.classList.contains("darkActive")) {
        check.classList.remove("darkActive");
        body.classList.remove("body-dark");
    } else {
        check.classList.add("darkActive");
        body.classList.add("body-dark");
    }
}

// Add keyboard support for the theme switch
document.getElementById('switch').addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        darkModeSwitch1();
    }
});

// Check user preference and set initial theme
window.onload = function() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const body = document.body;
    const switchImage = document.getElementById("switch-image");

    if (prefersDarkScheme) {
        body.classList.add("body-dark");
        switchImage.classList.add("darkActive");
    } else {
        body.classList.remove("body-dark");
        switchImage.classList.remove("darkActive");
    }
};