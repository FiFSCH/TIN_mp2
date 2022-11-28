const deptNameInput = document.getElementById("name");
const locationInput = document.getElementById("location");

const errorDeptName = document.getElementById("errorDeptName");
const errorDeptLoc = document.getElementById("errorDeptLoc");

function validateForm() {
    resetErrors([deptNameInput, locationInput], [errorDeptName, errorDeptLoc]);
    let valid = true;
    if (!checkRequired(deptNameInput.value)) {
        valid = false;
        deptNameInput.classList.add("error-input");
        errorDeptName.innerText = "This field is required!";
    } else if (!checkTxtLengthRange(deptNameInput.value, 2, 40)) {
        valid = false;
        deptNameInput.classList.add("error-input");
        errorDeptName.innerText = "Field should contain between 2 to 40 characters!";
    }
    if (!checkRequired(locationInput.value)) {
        valid = false;
        locationInput.classList.add("error-input");
        errorDeptLoc.innerText = "This field is required!";
    } else if (!checkTxtLengthRange(locationInput.value, 2, 40)) {
        valid = false;
        locationInput.classList.add("error-input");
        errorDeptLoc.innerText = "Field should contain between 2 to 40 characters!";
    }
    return valid;
}