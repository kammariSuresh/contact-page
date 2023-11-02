document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission.

        // You can add more comprehensive form validation here.
        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields');
        } else {
            // Display the success message and hide the form.
            contactForm.style.display = 'none';
            successMessage.style.display = 'block';
        }
    });
});
