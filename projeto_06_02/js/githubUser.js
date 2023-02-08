export class GithubUser {
  static search(username) {
    const githubHtml = `https://api.github.com/users/${username} `;

    return fetch(githubHtml)
      .then((data) => data.json())
      .then(({ login, name, public_repos, followers }) => ({
        login,
        name,
        public_repos,
        followers,
      }));
  }
}
