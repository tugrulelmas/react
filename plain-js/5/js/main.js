import { getUsers } from './user-service.js';

const btnShowUsers = document.getElementById('btnShowUsers');
btnShowUsers.addEventListener('click', showUsers);

const txtName = document.getElementById('txtName');
txtName.addEventListener('keyup', checkValidation);

async function showUsers(event) {
    if (event) {
        event.preventDefault();
    }

    const username = txtName.value;
    if (!username) {
        makeInvalid(txtName);
        return;
    }

    event.target.innerText = "Loading...";

    const users = await getUsers(username);
    console.log(users);

    event.target.innerText = "Show Users";
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

function makeInvalid(input) {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
}