// var input = document.querySelector(`input[type= "text"]`);
// var root = document.querySelector(".movie-list");

// let allMovies = [
//   {
//     name: "love school",
//     watched: false,
//   },
//   {
//     name: "cars",
//     watched: false,
//   },
// ];

// input.addEventListener("keyup", (event) => {
//   if (event.keyCode === 13) {
//     allMovies.push({
//       name: event.target.value,
//       watched: false,
//     });
//     event.target.value = "";
//     createUI(allMovies, root);
//   }
// });

// function handleClick(event) {
//   var id = event.target.id;

//   allMovies[id].watched = !allMovies[id].watched;
//   createUI(allMovies, root);
// }

// function createElement(type, attr = {}, ...children) {
//   let element = document.createElement(type);
//   for (let key in attr) {
//     if (key.startsWith("data-")) {
//       element.setAttribute(key, attr.key);
//     } else if (key.startsWith("on")) {
//       let eventType = key.replace("on", "").toLowerCase();
//       element.addEventListener(eventType, attr[key]);
//     } else element[key] = attr[key];
//   }
//   children.forEach((child) => {
//     if (typeof child === "object") {
//       element.append(child);
//     }
//     if (typeof child === "string") {
//       let node = document.createTextNode(child);
//       element.append(node);
//     }
//   });
//   return element;
// }

// function createUI(allMovies, root) {
//   root.innerHTML = "";
//   allMovies.forEach((movie, i) => {
//     let li = document.createElement(
//       "li",
//       {},
//       createElement("label", {
//         innerText: movie.name,
//         id: i,
//       }),
//       createElement("button", {
//         innerText: movie.watched ? "watched" : "ToWatched",
//         id: i,
//         on("click", handleClick);
//       })
//     );

//     label.innerText = movie.name;
//     label.id = i;

//     button.innerText = movie.watched ? "watched" : "ToWatched";
//     button.id = i;
//     button.addEventListener("click", handleClick);

//     li.append(label, button);
//     root.append(li);
//   });
// }

// createUI(allMovies, root);

let movieInput = document.querySelector(".movieInput");
let list = document.querySelector(".list");

let allMovies = [];

movieInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    createUI(allMovies);
    event.target.value = "";
  }
});

function handleDelete(event) {
  let id = event.target.id;
  allMovies.splice(id, 1);
  createUI(allMovies);
}
function handleChange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  createUI(allMovies);
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

function createUI(allMovies) {
  list.innerHTML = "";
  allMovies.forEach((movie, i) => {
    let li = createElement(
      "li",
      {
        className: "movie",
      },
      createElement(
        "button",
        {
          id: i,
          className: "border px-1 py-1 bg-blue-600 text-white text-xs",
          onClick: handleChange,
        },
        movie.watched ? "watched" : "To Watch"
      ),
      createElement(
        "p",
        {
          className: "text-lg font-bold",
        },
        movie.name
      ),
      createElement(
        "button",
        {
          className: "text-red-500",
          id: i,
          onClick: handleDelete,
        },
        "X"
      )
    );
    list.append(li);
  });
}
createUI(allMovies);
