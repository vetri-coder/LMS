// Open Login Modal
function openLogin() {
    document.getElementById("loginModal").style.display = "block";
}

// Close Login Modal
function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
}

// Open Register Modal
function openRegister() {
    document.getElementById("registerModal").style.display = "block";
}

// Close Register Modal
function closeRegister() {
    document.getElementById("registerModal").style.display = "none";
}

// Close modals when clicking outside
window.addEventListener("click", function(event) {
    let loginModal = document.getElementById("loginModal");
    let registerModal = document.getElementById("registerModal");
    
    if (event.target === loginModal) {
        closeLogin();
    }
    if (event.target === registerModal) {
        closeRegister();
    }
});

// Switch to Register Modal
function switchToRegister() {
    closeLogin();
    openRegister();
}

// Switch to Login Modal
function switchToLogin() {
    closeRegister();
    openLogin();
}

// Handle Login Form Submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    handleLogin();
});

// Handle Login Button Click
function handleLogin() {
    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value.trim();

    if (!email || !password) {
        alert("Email and Password cannot be empty.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    alert("Login successful! Redirecting to home page...");
    window.location.href = "home.html"; // Redirect to home page
}

// Email Validation Function
function validateEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Handle Register Form Submission
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    handleRegister();
});

// Handle Register Button Click
function handleRegister() {
    let name = document.getElementById("registerName").value.trim();
    let email = document.getElementById("registerEmail").value.trim();
    let password = document.getElementById("registerPassword").value.trim();
    let termsChecked = document.getElementById("terms").checked;

    if (!name || !email || !password) {
        alert("All fields are required.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    if (!termsChecked) {
        alert("You must agree to the Terms and Conditions.");
        return;
    }

    alert("Registration successful! Redirecting to login page...");
    closeRegister();
    openLogin(); // Open the login modal after successful registration
}
