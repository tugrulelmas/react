import { getUsers } from './user-service.js';

const btnShowUsers = document.getElementById('btnShowUsers');
btnShowUsers.addEventListener('click', showUsers);

async function showUsers(event) {
    event.target.innerText = "Loading...";

    const users = await getUsers();
    console.log(users);

    event.target.innerText = "Show Users";
}