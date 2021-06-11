import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Page from '../../components/Page';
import { getRepos } from './user-service';
import UserForm from './UserForm.js';
import UserRepos from './UserRepos';

export default function UserRepo() {
    const router = useRouter()
    const { id } = router.query;
    const [repos, setRepos] = useState({ loading: false, data: [] });

    useEffect(() => {
        if (!id)
            return;

        setRepos({ loading: true, data: [] });
        getRepos(id).then((userRepos) => {
            setRepos({ loading: false, data: userRepos });
        });
    }, [id]);

    const navigatePage = (username) => {
        router.push(`/9/${username}`);
    }

    return (
        <Page>
            <div className="container">
                <UserForm loading={repos.loading} showItems={navigatePage} initialValue={id} />
                <UserRepos repos={repos.data} />
            </div>
        </Page>
    );
}