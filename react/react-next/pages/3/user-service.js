export async function getUsers() {
    const response = await fetch(`https://api.github.com/search/users?q=tom&per_page=10`);
    const result = await response.json();
    return result.items;
}