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
            <div className="container" style={{ padding: "10px", border: "3px solid green" }}>
                <div style={{ marginBottom: "15px", border: "2px solid red" }}>
                    <UserForm loading={users.loading} showUsers={showUsers} />
                </div>
                <div style={{ border: "2px solid blue" }}>
                    <UserTable users={users.data} deleteRow={deleteRow} />
                </div>
            </div>
        </Page>
    );
}