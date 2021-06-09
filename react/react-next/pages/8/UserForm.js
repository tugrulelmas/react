import { useState } from 'react';

export default function UserForm({ loading, showUsers }) {
    const [username, setUsername] = useState({ initial: true, value: null });

    const nameChanged = (e) => {
        setUsername({ initial: false, value: e.target.value });
    }

    const validateFormAndShowUsers = (e) => {
        e.preventDefault();

        if (!username.value) {
            setUsername({ initial: false, value: '' });
            return;
        }

        showUsers(username.value);
    }

    return (
        <div className="card">
            <div className="card-body">
                <form onSubmit={validateFormAndShowUsers}>
                    <div className="mb-3">
                        <input type="input" className={username.value === '' ? "form-control is-invalid" :
                            username.initial ? "form-control" : "form-control is-valid"} placeholder="Github username" onChange={nameChanged}></input>
                        <div className="invalid-feedback">
                            Please enter a valid name.
                        </div>
                    </div>
                    <div className="float-end">
                        <button className="btn btn-primary" type="submit">{loading ? 'Loading...' : 'Show Users'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}