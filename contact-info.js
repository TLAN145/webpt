document.addEventListener("DOMContentLoaded", function () {
    // Check if user information exists in localStorage
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    const phone = localStorage.getItem("phone");

    // If user is not logged in, redirect to the login page
    if (!username || !email || !phone) {
        window.location.href = "index.html";  // Redirect to the login page
    } else {
        // Display user information if logged in
        document.getElementById("username").textContent = username;
        document.getElementById("email").textContent = email;
        document.getElementById("phone").textContent = phone;
    }

    // Log out functionality
    document.getElementById("logout-btn").addEventListener("click", function () {
        // Clear user data from localStorage on logout
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        localStorage.removeItem("phone");

        // Redirect to login page after logout
        window.location.href = "index.html";  // Redirect to login page
    });
});
