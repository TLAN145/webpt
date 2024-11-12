// Assuming the login form has the following IDs for input elements:
// username, email, phone, and the login button has the ID "login-btn"

document.getElementById("login-btn").addEventListener("click", function (event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (username && email && phone) {
        // Save user data to localStorage
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("phone", phone);

        // Redirect to the contact information page
        window.location.href = "contact-info.html";
    } else {
        alert("Please enter all required fields.");
    }
});
