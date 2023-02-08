import { GithubUser } from "./githubUser.js";

export class FavoritesData {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
  }

  save() {
    localStorage.setItem("@githubFavorites", JSON.stringify(this.entries));
  }

  async addUser(username) {
    try {
      const repeatedName = this.entries.find(
        (user) =>
          String(user.login).toLowerCase() === String(username).toLowerCase()
      );
      if (repeatedName) {
        throw new Error("This user is already in your list");
      }
      const user = await GithubUser.search(username);
      if (user.login === undefined) {
        throw new Error("User not found");
      }
      this.entries = [user, ...this.entries];
      this.update();
      this.save();
    } catch (error) {
      alert(error.message);
    }
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem("@githubFavorites")) || [];
  }
}

export class FavoritesView extends FavoritesData {
  constructor(root) {
    super(root);
    this.tbody = this.root.querySelector("tbody");
    this.update();
    this.inputUser();
  }

  inputUser() {
    const buttonAddUser = this.root.querySelector(".search button");

    buttonAddUser.onclick = () => {
      var { value } = this.root.querySelector(".search input");
      this.addUser(value);
      this.root.querySelector(".search input").value = "";
    };
  }

  remove(user) {
    this.entries = this.entries.filter(
      (username) => user.login !== username.login
    );
    this.update();
    this.save();
  }

  update() {
    this.removeAllTr();

    this.entries.forEach((user) => {
      const row = this.createRow();
      row.querySelector("img").src = `https://github.com/${user.login}.png`;
      row.querySelector("img").alt = `Imagem de ${user.name}`;
      row.querySelector("a").href = `https://github.com/${user.login}`;
      row.querySelector("span").textContent = user.name;
      row.querySelector("p").textContent = user.login;
      row.querySelector(".repositories").textContent = user.public_repos;
      row.querySelector(".followers").textContent = user.followers;

      const removeUserButton = row.querySelector("button");
      removeUserButton.onclick = () => this.remove(user);

      this.tbody.append(row);
    });
  }

  createRow() {
    const tr = document.createElement("tr");
    tr.innerHTML = `
                <td>
                  <img
                    src="https://github.com/maykbrito.png"
                    alt="Imagem de Mayk Brito"
                  />
                  <a href="https://github.com/maykbrito.html" target="_blank">
                    <span>Mayk Brito</span>
                    <p>maykbrito</p>
                  </a>
                </td>
                <td class="repositories">13</td>
                <td class="followers">234</td>
                <td><button>&times;</button></td>
`;
    return tr;
  }

  removeAllTr() {
    this.tbody.querySelectorAll("tr").forEach((row) => row.remove());
  }
}
