import { getUsers } from './user-service.js';
import { setValidation, makeInvalid } from './validation-input.js'

const btnShowUsers = document.getElementById('btnShowUsers');
btnShowUsers.addEventListener('click', showUsers);

setValidation('txtName');

async function showUsers(event) {
    if (event) {
        event.preventDefault();
    }

    const txtName = document.getElementById('txtName');
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