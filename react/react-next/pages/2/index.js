import { getUsers } from './user-service.js';

export default function Page() {
    const showUsers = async () => {
        const users = await getUsers();
        console.log(users);
    }

    return (
        <>
            <button onClick={showUsers}>Show Users</button>
        </>
    );
}