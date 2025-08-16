// Select the form
const contactForm = document.querySelector('.contact-form');

// Create a message element
const msgBox = document.createElement('div');
msgBox.className = 'form-message';
contactForm.appendChild(msgBox);

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    // Get input values
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    // Validation
    if(name === '' || email === '' || message === '') {
        showMessage('Please fill in all fields.', 'error');
        return;
    }

    // Success message
    showMessage(`Thanks ${name}! Your message has been sent successfully.`, 'success');

    // Reset form
    contactForm.reset();
});

// Function to show message
function showMessage(text, type) {
    msgBox.textContent = text;
    msgBox.className = `form-message ${type}`;
    msgBox.style.opacity = 1;

    // Fade out after 4 seconds
    setTimeout(() => {
        msgBox.style.opacity = 0;
    }, 4000);
}
