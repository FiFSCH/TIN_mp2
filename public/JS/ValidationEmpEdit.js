const fnameInput = document.getElementById("fname");
const lnameInput = document.getElementById("lname");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const deptInput = document.getElementById("departments");
const employedFromInput = document.getElementById("employedFrom");
const employedToInput = document.getElementById("employedTo");
const passwordInput = document.getElementById('password');

const errorFname = document.getElementById("errorFname");
const errorLname = document.getElementById("errorLname");
const errorPhone = document.getElementById("errorPhoneNumber");
const errorEmail = document.getElementById("errorEmail");
const errorDept = document.getElementById("errorDept");
const errorEmployedFrom = document.getElementById("errorEmployedSince");
const errorEmployedTo = document.getElementById("errorEmployedTo");
const errorPassword = document.getElementById('errorPassword');

function validateForm() {
    resetErrors([fnameInput, lnameInput, phoneInput, emailInput, deptInput, employedFromInput, employedToInput,passwordInput], [errorFname, errorLname, errorPhone, errorEmail, errorDept, errorEmployedFrom, errorEmployedTo,errorPassword]);
    let valid = true;
    if (!checkRequired(fnameInput.value)) {
        valid = false;
        fnameInput.classList.add("error-input");
        errorFname.innerText = "This field is required!";
    } else if (!checkTxtLengthRange(fnameInput.value, 2, 40)) {
        valid = false;
        fnameInput.classList.add("error-input");
        errorFname.innerText = "Field should contain between 2 to 40 characters!";
    }
    if (!checkRequired(lnameInput.value)) {
        valid = false;
        lnameInput.classList.add("error-input");
        errorLname.innerText = "This field is required!";
    } else if (!checkTxtLengthRange(lnameInput.value, 2, 40)) {
        valid = false;
        lnameInput.classList.add("error-input");
        errorLname.innerText = "Field should contain between 2 to 40 characters!";
    }
    if (!checkRequired(emailInput.value)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "This field is required!";
    } else if (!checkTxtLengthRange(emailInput.value, 5, 60)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Field should contain between 5 to 60 characters!";
    } else if (!checkEmail(emailInput.value)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Field should contain correct email address!";
    }
    if (!checkRequired(phoneInput.value)) {
        valid = false;
        phoneInput.classList.add("error-input");
        errorPhone.innerText = "This field is required!";
    } else if (!checkTxtLengthRange(phoneInput.value, 2, 15)) {
        valid = false;
        fnameInput.classList.add("error-input");
        errorPhone.innerText = "Field should contain between 2 to 15 characters!";
    } else if (!checkPhone(phoneInput.value)) {
        valid = false;
        phoneInput.classList.add("error-input");
        errorPhone.innerText = "Field should contain correct phone number!";
    }
    if (!checkRequired(deptInput.value)) {
        valid = false;
        deptInput.classList.add("error-input");
        errorDept.innerText = "This field is required!";
    }
    if (!checkRequired(employedFromInput.value)) {
        valid = false;
        employedFromInput.classList.add("error-input");
        errorEmployedFrom.innerText = "This field is required!";
    } else if (!checkDate(employedFromInput.value)) {
        valid = false;
        employedFromInput.classList.add("error-input");
        errorEmployedFrom.innerText = "Date cannot be grater than today's date!";
    }
    if (employedFromInput.value !== "" && employedToInput.value !== "") {
        if (!checkDateTermination(employedFromInput.value, employedToInput.value)) {
            valid = false;
            employedToInput.classList.add("error-input");
            errorEmployedTo.innerText = "Termination date cannot be lower than employment date!";
        }
    }
    if (!checkRequired(passwordInput.value)) {
        valid = false;
        passwordInput.classList.add("error-input");
        errorPassword.innerText = "This field is required!";
    } else if (!checkTxtLengthRange(passwordInput.value, 5, 60)) {
        valid = false;
        passwordInput.classList.add("error-input");
        errorPassword.innerText = "Field should contain between 5 to 60 characters!";
    }
    return valid;
}