document.addEventListener("DOMContentLoaded", function () {
    // Check if the current page is one that requires login (like the contact info page)
    if (window.location.pathname === '/contact-info.html' || window.location.pathname === '/other-secure-page.html') {
        const loggedInUser = localStorage.getItem('loggedInUser');

        // If user is not logged in, redirect to the login page
        if (!loggedInUser) {
            window.location.href = "index.html";  // Redirect to the login page
        } else {
            // User is logged in, display their info or proceed
            const username = localStorage.getItem("username");
            const email = localStorage.getItem("email");
            const phone = localStorage.getItem("phone");

            if (username && email && phone) {
                document.getElementById("username").textContent = username;
                document.getElementById("email").textContent = email;
                document.getElementById("phone").textContent = phone;
            } else {
                alert("No user information available.");
                window.location.href = "index.html"; // Redirect to home if no data
            }
        }
    }

    // Code to handle dark/light mode toggle
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

    // Update login/logout button visibility
    updateButtonVisibility();
});

// Function to update visibility of login/logout buttons
function updateButtonVisibility() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const openModalBtn = document.getElementById('open-modal-btn');
    const logoutBtn = document.getElementById('logout-btn');

    if (loggedInUser) {
        openModalBtn.style.display = 'none';
        logoutBtn.style.display = 'block';
    } else {
        openModalBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
    }
}

// Handle log out
document.getElementById("logout-btn").addEventListener("click", function () {
    localStorage.removeItem("loggedInUser");
    updateButtonVisibility();
    alert('You have been logged out.');
    window.location.href = "index.html";  // Redirect to login page after logout
});
