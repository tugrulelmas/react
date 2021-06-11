export default function UserRepos({ repos }) {

    if (repos.length === 0)
        return <></>;

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {repos.map((repo) => <tr key={repo.id}>
                    <td>
                        {repo.name}
                    </td>
                </tr>)}
            </tbody>
        </table>
    )
}