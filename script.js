document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const header = document.getElementById('header-container');
    const toggleThemeButton = document.getElementById('toggle-theme');

    if (localStorage.getItem('darkMode') === 'true') {
        body.classList.add('dark-mode');
        header.classList.add('dark-mode');
        toggleThemeButton.textContent = 'Switch to Light Mode';
    }

    toggleThemeButton.addEventListener('click', () => {
        const isDarkMode = body.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode');
        toggleThemeButton.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
        localStorage.setItem('darkMode', isDarkMode);
    });
});

// Get modal and buttons
const modal = document.getElementById('auth-modal');
const openModalBtn = document.getElementById('open-modal-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const showRegisterBtn = document.getElementById('show-register');
const showLoginBtn = document.getElementById('show-login');
const logoutBtn = document.getElementById('logout-btn');

function updateButtonVisibility() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        openModalBtn.style.display = 'none';
        logoutBtn.style.display = 'block';
    } else {
        openModalBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
    }
}

updateButtonVisibility();

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

showRegisterBtn.addEventListener('click', () => {
    document.getElementById('login-form-container').style.display = 'none';
    document.getElementById('register-form-container').style.display = 'block';
});

showLoginBtn.addEventListener('click', () => {
    document.getElementById('register-form-container').style.display = 'none';
    document.getElementById('login-form-container').style.display = 'block';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Validation function
function validateForm(username, email, password, phone) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!username || !email || !password || !phone) {
        alert("All fields are required.");
        return false;
    }
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (!phoneRegex.test(phone)) {
        alert("Phone number must be 10 digits.");
        return false;
    }
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters long and include both letters and numbers.");
        return false;
    }
    return true;
}

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();
    const userData = JSON.parse(localStorage.getItem(email));

    if (userData && userData.password === password) {
        alert(`Welcome back, ${userData.username}!`);
        localStorage.setItem('loggedInUser', email);
        modal.style.display = 'none';
        updateButtonVisibility();
    } else {
        alert('Invalid email or password.');
    }
});

// Handle registration form submission
document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('register-username').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value.trim();
    const phone = document.getElementById('register-phone').value.trim();

    if (!validateForm(username, email, password, phone)) return;

    if (localStorage.getItem(email)) {
        alert('User already exists. Please choose a different email.');
        return;
    }

    const userData = { username, email, password, phone };
    localStorage.setItem(email, JSON.stringify(userData));

    alert('Registration successful! You can now log in.');
    modal.style.display = 'none';
});

// Handle log out
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('loggedInUser');
    updateButtonVisibility();
    alert('You have been logged out.');
});

