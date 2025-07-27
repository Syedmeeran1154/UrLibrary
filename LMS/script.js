function validateForm() {
    let isValid = true;

    // Get input values
    let username = document.getElementById("username");
    let password = document.getElementById("password");

    // Get error message elements
    let usernameError = document.getElementById("usernameError");
    let passwordError = document.getElementById("passwordError");

    // Username validation
    if (username.value.trim() === "") {
        usernameError.style.visibility = "visible"; 
        username.style.borderColor = "red"; 
        isValid = false;
    } else {
        usernameError.style.visibility = "hidden"; 
        username.style.borderColor = "#ccc"; 
    }

    // Password validation
    if (password.value.trim() === "") {
        passwordError.style.visibility = "visible"; 
        password.style.borderColor = "red"; 
        isValid = false;
    } else {
        passwordError.style.visibility = "hidden"; 
        password.style.borderColor = "#ccc"; 
    }

    return isValid;
}