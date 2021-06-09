import { useState } from 'react';
import { getUsers } from './user-service.js';
import Page from '../../components/Page';

export default function UsersPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState(null);

    const showUsers = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        const users = await getUsers(username);
        console.log(users);

        setIsLoading(false);
    }

    const nameChanged = (e) => {
        setUsername(e.target.value);
    }

    return (
        <Page>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={showUsers}>
                            <div className="mb-3">
                                <input type="input" className="form-control" placeholder="Github username" onChange={nameChanged}></input>
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