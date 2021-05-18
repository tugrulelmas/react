import { getUsers } from './user-service.js';

const btnShowUsers = document.getElementById('btnShowUsers');
btnShowUsers.addEventListener('click', showUsers);

async function showUsers() {
    const users = await getUsers();
    console.log(users);
}