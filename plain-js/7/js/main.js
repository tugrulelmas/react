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

    addUsersToTable(users);

    event.target.innerText = "Show Users";
}

function addUsersToTable(users) {
    const tblUsers = document.getElementById('tblUsers');
    clearTable(tblUsers);

    if (!users || users.length === 0) {
        tblUsers.classList.add("d-none");
        return;
    }

    tblUsers.classList.remove("d-none");

    users.forEach((user, index) => {
        const row = tblUsers.insertRow(index + 1);

        const avatarCell = row.insertCell(0);
        avatarCell.innerHTML = `<img src="${user.avatar_url}" alt="${user.login}" class="rounded" height="40em" />`;

        const loginCell = row.insertCell(1);
        loginCell.innerText = user.login;
    });
}

function clearTable(table) {
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
}