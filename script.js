// Load user theme preference from local storage
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}


// Toggle Dark Mode and save preference
const toggleThemeButton = document.createElement('button');
toggleThemeButton.textContent = 'Toggle Dark Mode';
document.body.appendChild(toggleThemeButton);

toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    toggleThemeButton.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    // Save preference to local storage
    localStorage.setItem('darkMode', isDarkMode);
});


// Get modal and buttons
const modal = document.getElementById('auth-modal');
const openModalBtn = document.getElementById('open-modal-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const showRegisterBtn = document.getElementById('show-register');
const showLoginBtn = document.getElementById('show-login');
const logoutBtn = document.getElementById('logout-btn');

// Check user login status on page load
function updateButtonVisibility() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        openModalBtn.style.display = 'none'; // Hide Log In / Register button
        logoutBtn.style.display = 'block'; // Show Log Out button
    } else {
        openModalBtn.style.display = 'block'; // Show Log In / Register button
        logoutBtn.style.display = 'none'; // Hide Log Out button
    }
}

// Call the function on page load
updateButtonVisibility();

// Open the modal
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close the modal
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Switch to Registration Form
showRegisterBtn.addEventListener('click', () => {
    document.getElementById('login-form-container').style.display = 'none';
    document.getElementById('register-form-container').style.display = 'block';
});

// Switch to Login Form
showLoginBtn.addEventListener('click', () => {
    document.getElementById('register-form-container').style.display = 'none';
    document.getElementById('login-form-container').style.display = 'block';
});

// Click outside modal to close
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Function to get greeting based on the current time
function getGreeting(name) {
    const currentHour = new Date().getHours(); // Get current hour (0-23)
    let greeting;

    if (currentHour < 12) {
        greeting = `Good morning, ${name}!`; // Morning greeting
    } else if (currentHour < 18) {
        greeting = `Good afternoon, ${name}!`; // Afternoon greeting
    } else {
        greeting = `Good evening, ${name}!`; // Evening greeting
    }

    return greeting;
}

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById('login-username').value.trim();
    const userData = localStorage.getItem(username);
    if (userData) {
        const parsedData = JSON.parse(userData); // Parse the user data
        const greetingMessage = getGreeting(parsedData.username); // Get the greeting message

        alert(greetingMessage); // Display the greeting message
        localStorage.setItem('loggedInUser', username);
        modal.style.display = 'none'; // Close the modal
        updateButtonVisibility(); // Update button visibility
    } else {
        alert('User not found. Please register first.');
    }
});


// Handle registration form submission
document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();

    // Check if user already exists
    if (localStorage.getItem(username)) {
        alert('User already exists. Please choose a different username.');
        return;
    }

    // Save user data to local storage
    const userData = { username, email };
    localStorage.setItem(username, JSON.stringify(userData));

    alert('Registration successful! You can now log in.');
    modal.style.display = 'none'; // Close the modal
});

// Handle log out
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('loggedInUser'); // Clear the logged-in user
    updateButtonVisibility(); // Update button visibility
    alert('You have been logged out.');
});

