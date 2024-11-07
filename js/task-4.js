const form = document.querySelector(".login-form");

form.addEventListener("submit", event => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    const formObj = {
        email: email,
        password: password
    }
    
    if (email === "" || password === "") {
        console.log("All form fields must be filled in");
    } else {
        console.log(formObj)
    }
    form.reset()
});
