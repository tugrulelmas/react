import { getUsers } from './user-service.js';

const btnShowUsers = document.getElementById('btnShowUsers');
btnShowUsers.addEventListener('click', showUsers);

async function showUsers(event) {
    if (event) {
        event.preventDefault();
    }

    event.target.innerText = "Loading...";

    const txtName = document.getElementById('txtName');
    const username = txtName.value;

    const users = await getUsers(username);
    console.log(users);

    event.target.innerText = "Show Users";
}