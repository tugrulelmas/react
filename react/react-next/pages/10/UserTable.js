import Link from 'next/link'

export default function UserTable({ users, deleteRow }) {
    return (
        <>
            {users.data?.length > 0 &&
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Login</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.data.map((user) => <tr key={user.login}>
                            <td>
                                <img src={user.avatar_url} alt={user.login} className="rounded" height="40em"></img>
                            </td>
                            <td>
                                <Link href={`/9/${user.login}`}>
                                    <a>{user.login}</a>
                                </Link>
                            </td>
                            <td className="text-end">
                                <button onClick={() => deleteRow(user.login)} className="btn btn-danger"> <i className="bi bi-trash"></i> </button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            }
        </>
    )
}