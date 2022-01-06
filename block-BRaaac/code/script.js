var input = document.querySelector(`input[type="text"]`);
var ulRoot = document.querySelector(".movie-list");

allMovies = [
  {
    name: "Cars",
    watched: false,
  },
];

input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });

    event.target.value = "";
    createUI(allMovies, ulRoot);
  }
});

function handleChange(event) {
  console.log(event);
  var id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  createUI(allMovies, ulRoot);
}

function createElement(type, attr = {}, ...children) {
  let element = document.createElement(type);
  for (let key in attr) {
    if (key.startsWith("data-")) {
      element.setAttribute(key, attr.key);
    } else if (key.startsWith("on")) {
      let eventType = key.replace("on", "").toLowerCase();
      element.addEventListener(eventType, attr[key]);
    } else element[key] = attr[key];
  }
  children.forEach((child) => {
    if (typeof child === "object") {
      element.append(child);
    }
    if (typeof child === "string") {
      let node = document.createTextNode(child);
      element.append(node);
    }
  });
  return element;
}

function createUI(allMovies, ulRoot) {
  ulRoot.innerHTML = "";
  allMovies.forEach((movie, i) => {
    let btn = createElement(
      "button",
      { id: i },
      movie.watched ? "watched" : "to Watched"
    );
    btn.addEventListener("click", handleChange);
    let li = createElement(
      "li",
      {},
      createElement("lable", { for: i }, movie.name),
      btn
    );

    ulRoot.append(li);
  });
}

createUI(allMovies, ulRoot);
