// JavaScript for handling login functionality
document.querySelector('.btn').addEventListener('click', function() {
    const email = document.getElementById('logemail').value;
    const password = document.getElementById('logpass').value;

    // Replace with your actual email and password
    const validEmail = 'Kali';
    const validPassword = 'Kali';

    if (email === validEmail && password === validPassword) {
        // Redirect to another HTML page
        window.location.href = 'https://osintools.tiiny.site/'; // Change to your target page
    } else {
        alert('Invalid email or password. Please try again.');
    }
});
