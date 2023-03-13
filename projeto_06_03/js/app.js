import { GithubUsers } from "./githubFavs.js";

export class FavoritesData {
  constructor(root) {
    this.root = document.querySelector(root);
    this.apiData();
  }

  save() {
    localStorage.setItem("@githubFavorites:", JSON.stringify(this.entries));
  }

  async fetchUser(username) {
    const userAlreadyFavorited = this.entries.find(
      (user) => user.login.toLowerCase() === username.toLowerCase()
    );

    if (userAlreadyFavorited) {
      return alert("User is already in your list");
    }

    const user = await GithubUsers.search(username);
    if (!user.name) {
      return alert("User not found");
    }

    this.entries = [...this.entries, user];
    this.save();
    this.update();
    this.checkHasUsers();
  }

  apiData() {
    this.entries = JSON.parse(localStorage.getItem("@githubFavorites:")) || [];
  }

  removeUser(username) {
    this.entries = this.entries.filter((user) => user.login != username);
    this.update();
    this.save();
    this.checkHasUsers();
  }
}

export class FavoritesView extends FavoritesData {
  constructor(root) {
    super(root);
    this.users = this.root.querySelector(".users");
    this.update();
    this.checkHasUsers();
    this.addUser();
  }

  addUser() {
    const button = this.root.querySelector("#container_input button");
    this.root.addEventListener("keydown", (event) => {
      if (event.keyCode === 13) {
        button.click();
      }
    });

    button.onclick = () => {
      const { value } = this.root.querySelector("#inputText");
      this.fetchUser(value);
      this.root.querySelector("#inputText").value = "";
    };
  }

  checkHasUsers() {
    if (this.entries.length == 0) {
      this.users.classList.add("hide");
      this.root.querySelector(".userNotAdded").classList.remove("hide");
    } else {
      this.users.classList.remove("hide");
      this.root.querySelector(".userNotAdded").classList.add("hide");
    }
  }

  update() {
    this.cleanTable();
    this.entries.forEach((user) => {
      const row = this.createRow();
      row.querySelector("img").src = `https://github.com/${user.login}.png`;
      row.querySelector("img").alt = `picture of ${user.name}`;
      row.querySelector("a").href = `https:github.com/${user.login}`;
      row.querySelector("span").textContent = user.name;
      row.querySelector("p").textContent = user.login;
      row.querySelector(".repositories").textContent = user.public_repos;
      row.querySelector(".followers").textContent = user.followers;

      row.querySelector(".delete").onclick = () => {
        const deleteConfirm = confirm(
          `Do you want to remove ${user.name} from your favorites?`
        );
        if (deleteConfirm) {
          this.removeUser(user.login);
        }
      };

      this.users.append(row);
    });
  }

  createRow() {
    const tr = document.createElement("tr");

    tr.innerHTML = `
    <td>
                <img
                  src="https://github.com/maykbrito.png"
                  alt="picture of Mayk Brito picture"
                />
                <a href="https:github.com/maykbrito" target="_blank"
                  ><span>Mayk Brito</span>
                  <p>/maykbrito</p></a
                >
              </td>
              <td class="repositories">123</td>
              <td class="followers">1234</td>
              <td class="delete">&times;</td>
    `;

    return tr;
  }

  cleanTable() {
    this.users.querySelectorAll("tr").forEach((row) => row.remove());
  }
}
