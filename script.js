// REGISTER VALIDATION
function validateRegister() {
    let name = document.getElementById("rname").value;
    let email = document.getElementById("remail").value;
    let password = document.getElementById("rpassword").value;
    let confirm = document.getElementById("rconfirm").value;

    if (name === "" || email === "" || password === "" || confirm === "") {
        alert("All fields are required!");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters!");
        return false;
    }

    if (password !== confirm) {
        alert("Passwords do not match!");
        return false;
    }

    alert("Registration Successful!");
    return true;
}

// LOGIN VALIDATION
function validateLogin() {
    let email = document.getElementById("lemail").value;
    let password = document.getElementById("lpassword").value;

    if (email === "" || password === "") {
        alert("Please enter email and password!");
        return false;
    }

    alert("Login Successful!");
    return true;
}