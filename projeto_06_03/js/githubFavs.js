export class GithubUsers {
  static search(username) {
    const apiGithub = `https://api.github.com/users/${username}`;
    return fetch(apiGithub)
      .then((data) => data.json())
      .then(({ name, login, public_repos, followers }) => ({
        name,
        login,
        public_repos,
        followers,
      }));
  }
}
