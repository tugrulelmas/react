import { useState } from 'react';
import { getUsers } from './user-service.js';
import Page from '../../components/Page';

export default function UsersPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState({ initial: true, value: null });

    const showUsers = async (e) => {
        e.preventDefault();

        if (!username.value) {
            setUsername({ initial: false, value: '' });
            return;
        }

        setIsLoading(true);

        const users = await getUsers(username.value);
        console.log(users);

        setIsLoading(false);
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
                                <button className="btn btn-primary" type="submit">{isLoading ? "Loading..." : "Show Users"}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Page>
    );
}