function FruitsBtn() {
  let fruits = [
    { id: "apple", value: "🍎 apple" },
    { id: "orange", value: "🍊 orange" },
    { id: "grape", value: "🍇 grape" },
    { id: "pear", value: "🍐 pear" },
  ];

  return fruits.map((fruit) => (
    <button
      key={fruit.id}
      onClick={() => {
        alert(`${fruit.value}`);
      }}
    >
      {fruit.value}
    </button>
  ));

  // return fruits.map((fruit) => (
  //   <button
  //     key={fruit.id}
  //     onClick={() => {
  //       alert(`${fruit.value}`);
  //     }}
  //   >
  //     {fruit.value}
  //   </button>
  // ));
}

export default FruitsBtn;
