import { useState } from 'react';
import { getUsers } from './user-service.js';
import Page from '../../components/Page';

export default function UsersPage() {
    const [users, setUsers] = useState({ loading: false, data: [] });
    const [username, setUsername] = useState({ initial: true, value: null });

    const showUsers = async (e) => {
        e.preventDefault();

        if (!username.value) {
            setUsername({ initial: false, value: '' });
            return;
        }

        setUsers({ loading: true });
        const users = await getUsers(username.value);
        setUsers({ loading: false, data: users });
    }

    const nameChanged = (e) => {
        setUsername({ initial: false, value: e.target.value });
    }

    return (
        <Page>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={showUsers}>
                            <div className="mb-3">
                                <input type="input" className={username.value === '' ? "form-control is-invalid" :
                                    username.initial ? "form-control" : "form-control is-valid"} placeholder="Github username" onChange={nameChanged}></input>
                                <div className="invalid-feedback">
                                    Please enter a valid name.
                            </div>
                            </div>
                            <div className="float-end">
                                <button className="btn btn-primary" type="submit">{users.loading ? 'Loading...' : 'Show Users'}</button>
                            </div>
                        </form>
                    </div>
                </div>
                {users.data?.length > 0 &&
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Login</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.data.map((user) => <tr key={user.login}>
                                <td>
                                    <img src={user.avatar_url} alt={user.login} className="rounded" height="40em"></img>
                                </td>
                                <td>
                                    {user.login}
                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                }
            </div>
        </Page>
    );
}