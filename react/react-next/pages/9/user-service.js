export async function getUsers(username) {
    const response = await fetch(`https://api.github.com/search/users?q=${username}&per_page=10`);
    const result = await response.json();
    return result.items;
}

export async function getRepos(username) {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const result = await response.json();
    return result;
}