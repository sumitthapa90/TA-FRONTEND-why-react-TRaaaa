function handleClick(event) {
  switch (event.target.innerText) {
    case "Arya":
      alert("Hello Arya");
      break;
    case "John":
      alert("Hello John");
      break;
    case "Bryan":
      alert("Hello Bryan");
      break;

    default:
      break;
  }
}

function PersonalBtn() {
  return (
    <div>
      <button onClick={(event) => handleClick(event)} className="btn">
        Arya
      </button>
      <button onClick={(event) => handleClick(event)} className="btn">
        John
      </button>
      <button onClick={(event) => handleClick(event)} className="btn">
        Bryan
      </button>
    </div>
  );
}

export default PersonalBtn;
