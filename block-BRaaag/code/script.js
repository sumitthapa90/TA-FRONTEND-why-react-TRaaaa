var input = document.querySelector("input");
var root = document.querySelector("ul");

var allMovies = [];

function handleDelete(event) {
  var id = event.target.dataset.id;
  allMovies.splice(id, 1);
  displayMovie(allMovies, root);
}

function handleToggle(event) {
  var id = event.target.dataset.id;
  allMovies[id].isWatched = !allMovies[id].isWatched;
  displayMovie(allMovies, root);
}

function displayMovie(allMovies = [], root) {
  root.innerHTML = "";
  allMovies.forEach((elm, index) => {
    let li = document.createElement("li");
    li.classList.add("liClass");
    let movieName = document.createElement("p");
    movieName.classList.add("name");
    movieName.innerText = elm.name;
    let options = document.createElement("p");
    let toggle = document.createElement("span");
    toggle.innerText = elm.isWatched ? "Watched" : "To Watch";
    toggle.setAttribute("data-id", index);
    toggle.addEventListener("click", handleToggle);
    let dlt = document.createElement("span");
    dlt.innerText = "Remove";
    dlt.setAttribute("data-id", index);
    dlt.addEventListener("click", handleDelete);

    options.append(toggle, dlt);
    li.append(movieName, options);
    root.append(li);
  });
}

input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13 && event.target.value) {
    allMovies.push({
      name: event.target.value,
      isWatched: false,
    });

    event.target.value = "";
    displayMovie(allMovies, root);
  }
});

displayMovie(allMovies, root);
