export class Router {
  routes = {};
  add(routeName, page) {
    this.routes[routeName] = page;
  }

  routing(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);
    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];

    fetch(route)
      .then((data) => data.text())
      .then((html) => (document.querySelector("#app").innerHTML = html));

    this.changeBgImage(pathname);
  }

  changeBgImage(pathname) {
    const img = document.querySelector("body img");
    switch (pathname) {
      case "/":
        img.src = "./img/mountains-universe-1 1.jpg";
        break;
      case "/universe":
        img.src = "./img/mountains-universe-2.jpg";
        break;
      case "/exploration":
        img.src = "./img/mountains-universe-3.jpg";
        break;
      default:
        img.src = "/img/mountains-universe-1 1.jpg";
        break;
    }
  }
}
