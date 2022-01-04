var input = document.querySelector(`input[type="text"]`);
var ulRoot = document.querySelector(".movie-list");

var allMovies = [
  {
    name: "inception",
    watched: false,
  },
  {
    name: "Red Notice",
    watched: false,
  },
];

input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    console.log(event.target.value);

    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    event.target.value = "";

    displayUI();
  }
});

function deleteMovie(event) {
  event.target.parentElement.remove();
}

function handleChange(event) {
  console.log(event.target);
  let id = event.target.id;

  allMovies[id].watched = !allMovies[id].watched;
}

// <!-- <li>
// <input type="checkbox" class="style-checkbox" id="1" />
// <label for="1"></label>
// <span>X</span>
// </li> -->

function displayUI() {
  ulRoot.innerHTML = "";
  allMovies.forEach((elm, i) => {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.classList.add("style-checkbox");
    input.type = "checkbox";
    input.id = i;
    input.addEventListener("change", handleChange);
    input.checked = elm.watched;
    let label = document.createElement("label");
    label.innerText = elm.name;
    label.for = i;
    let span = document.createElement("span");
    span.innerText = "X";
    span.addEventListener("click", deleteMovie);

    li.append(input, label, span);
    ulRoot.append(li);
  });
}

displayUI();
