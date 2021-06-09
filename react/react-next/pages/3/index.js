import { useState } from 'react';
import { getUsers } from './user-service.js';

export default function Page() {
    const [isLoading, setIsLoading] = useState(false);

    const showUsers = async () => {
        setIsLoading(true);

        const users = await getUsers();
        console.log(users);

        setIsLoading(false);
    }

    return (
        <>
            <button onClick={showUsers}>{isLoading ? "Loading..." : "Show Users"}</button>
        </>
    );
}