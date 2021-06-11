import { useEffect, useState } from 'react';

export default function UserForm({ loading, showItems, initialValue }) {
    const [username, setUsername] = useState({ initial: true, value: '' });

    useEffect(() => {
        setUsername({ initial: true, value: initialValue || '' });
    }, [initialValue])

    const nameChanged = (e) => {
        setUsername({ initial: false, value: e.target.value });
    }

    const validateFormAndShowItems = (e) => {
        e.preventDefault();

        if (!username.value) {
            setUsername({ initial: false, value: '' });
            return;
        }

        showItems(username.value);
    }

    return (
        <div className="card">
            <div className="card-body">
                <form onSubmit={validateFormAndShowItems}>
                    <div className="mb-3">
                        <input type="text" className={username.initial ? "form-control" : username.value === '' ? "form-control is-invalid" : "form-control is-valid"}
                            placeholder="Github username" onChange={nameChanged} value={username.value}></input>
                        <div className="invalid-feedback">
                            Please enter a valid name.
                        </div>
                    </div>
                    <div className="float-end">
                        <button className="btn btn-primary" type="submit">{loading ? 'Loading...' : 'Show'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}