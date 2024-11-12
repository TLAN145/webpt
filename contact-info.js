document.addEventListener("DOMContentLoaded", function () {
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

    // Log out functionality
    document.getElementById("logout-btn").addEventListener("click", function () {
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        localStorage.removeItem("phone");
        window.location.href = "index.html";
    });
});
