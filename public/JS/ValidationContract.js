const descInput = document.getElementById("desc");
const startDateInput = document.getElementById("startDate");
const dueDateInput = document.getElementById("dueDate");
const respDeptInput = document.getElementById("deptContName");

const errorDescription = document.getElementById("errorDescription");
const errorStartDate = document.getElementById("errorStartDate");
const errorRespDept = document.getElementById("errorDeptContName");
const errorDueDate = document.getElementById("errorDueDate");

function validateForm() {
    resetErrors([descInput, startDateInput, dueDateInput, respDeptInput], [errorDescription, errorStartDate, errorRespDept]);
    let valid = true;
    if (!checkRequired(descInput.value)) {
        valid = false;
        descInput.classList.add("error-input");
        errorDescription.innerText = "This field is required!";
    } else if (!checkTxtLengthRange(descInput.value, 15, 350)) {
        valid = false;
        descInput.classList.add("error-input");
        errorDescription.innerText = "Field should contain between 15 to 350 characters!";
    }
    if (!checkRequired(startDateInput.value)) {
        valid = false;
        startDateInput.classList.add("error-input");
        errorStartDate.innerText = "This field is required!";
    }
    if (!checkRequired(respDeptInput.value)) {
        valid = false;
        respDeptInput.classList.add("error-input");
        errorRespDept.innerText = "This field is required!";
    }
    if (startDateInput.value !== "" && dueDateInput.value !== "") {
        if (!checkDateTermination(startDateInput.value, dueDateInput.value)) {
            valid = false;
            dueDateInput.classList.add("error-input");
            errorDueDate.innerText = "Due date cannot be lower than start date!";
        }
    }
    return valid;
}