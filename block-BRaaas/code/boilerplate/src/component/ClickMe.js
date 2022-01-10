function handleClick() {
  alert("Hello React Event");
}

function ClickMe() {
  return (
    <button onClick={handleClick} className="btn">
      Click Me
    </button>
  );
}



export default ClickMe;
