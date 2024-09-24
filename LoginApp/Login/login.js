document.getElementById("togglePassword").addEventListener("click", function() {
    const passwordField = document.getElementById("password");
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "abc@gmail.com" && password === "12345678") {
        alert(JSON.stringify({ code: 1000, message: "login successful" }));
    } else if (email !== "abc@gmail.com") {
        alert(JSON.stringify({ code: 1001, message: "email wrong" }));
    } else if (password !== "12345678") {
        alert(JSON.stringify({ code: 1001, message: "password wrong" }));
    }
});
