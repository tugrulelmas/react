
export function setValidation(inputId) {
    const txtName = document.getElementById(inputId);
    txtName.addEventListener('keyup', checkValidation);
}

function checkValidation(event) {
    if (!event.target)
        return;

    const input = event.target;
    if (!input.value) {
        makeInvalid(input);
        return;
    }

    input.classList.add('is-valid');
    input.classList.remove('is-invalid');
}

export function makeInvalid(input) {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
}