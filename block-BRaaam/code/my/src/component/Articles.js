function Articles() {
  return <Article title="Highway" />;
}

function Article(props) {
  return (
    <div>
      <img src="/image/pik.jpeg" alt="" />
      <h3>{props.title}</h3>
    </div>
  );
}
export default Articles;
