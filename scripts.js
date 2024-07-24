const submitButton = document.querySelector("form button");
const errorMessage  = document.querySelector("#error-message");



function hideErrorMessage () {
    errorMessage.classList.add("hidden");
}

function showErrorMessage () {
    errorMessage.classList.remove("hidden");
}


submitButton.addEventListener("click",(event) => {
    event.preventDefault;
    const firstNameInput = document.querySelector("#first-name");
    const lastNameInput = document.querySelector("#last-name");
    const emailInput = document.querySelector("#email");
    const phoneNumberInput = document.querySelector("#phone-number");
    const passwordInput = document.querySelector("#password");
    const confirmPasswordInput = document.querySelector("#confirm-password");
    
    if (firstNameInput.value.length ===0 || lastNameInput.value.length === 0 ||
        emailInput.value.length === 0 || phoneNumberInput.value.length === 0 ||
        passwordInput.value.length === 0 || confirmPasswordInput.value.length === 0
     ) {
        errorMessage.textContent = "* Please fill all the fields!";
        showErrorMessage();
        if (firstNameInput.value.length === 0) {
            firstNameInput.classList.add("invalid");
        }
        if (lastNameInput.value.length === 0) {
            lastNameInput.classList.add("invalid");
        }
        if (emailInput.value.length === 0) {
            emailInput.classList.add("invalid");
        }
        if (phoneNumberInput.value.length === 0) {
            phoneNumberInput.classList.add("invalid");
        }
        if (passwordInput.value.length === 0) {
            passwordInput.classList.add("invalid");
        }
        if (confirmPasswordInput.value.length === 0) {
            confirmPasswordInput.classList.add("invalid");
        }
    } else if (passwordInput.value !== confirmPasswordInput.value) {
        showErrorMessage();
        errorMessage.textContent = "* Password do not match!";
        passwordInput.classList.add("invalid");
        confirmPasswordInput.classList.add("invalid");
    } else {
        hideErrorMessage();
        firstNameInput.classList.remove("invalid");
        lastNameInput.classList.remove("invalid");
        emailInput.classList.remove("invalid");
        phoneNumberInput.classList.remove("invalid");
        passwordInput.classList.remove("invalid");
        confirmPasswordInput.classList.remove("invalid");
    }

})