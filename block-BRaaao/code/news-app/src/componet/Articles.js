function Articles() {
  return (
    <>
      <Article title="Sumit" />
      <Article title="Sumit" />
     
    </>
  );
}

function Article(props) {
  return (
    <div>
      <img src="/images/man.jpeg" alt="" width="200" />
      <h2>{props.title}</h2>
    </div>
  );
}

export default Articles;
