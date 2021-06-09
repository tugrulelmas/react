import { useState } from 'react';
import { getUsers } from './user-service.js';
import Page from '../../components/Page';
import UserTable from './UserTable';
import UserForm from './UserForm.js';

export default function UsersPage() {
    const [users, setUsers] = useState({ loading: false, data: [] });

    const showUsers = async (username) => {
        if (!username) {
            return;
        }

        setUsers({ loading: true });
        const users = await getUsers(username);
        setUsers({ loading: false, data: users });
    }

    const deleteRow = (loginName) => {
        setUsers((users) => {
            return { loading: false, data: users.data.filter((user) => user.login !== loginName) }
        });
    }

    return (
        <Page>
            <div className="container">
                <UserForm loading={users.loading} showItems={showUsers} />
                <UserTable users={users} deleteRow={deleteRow} />
            </div>
        </Page>
    );
}