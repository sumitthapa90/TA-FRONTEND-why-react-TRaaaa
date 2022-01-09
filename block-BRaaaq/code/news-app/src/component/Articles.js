import articles from "../data/data";
import Article from "./Article";

function Articles() {
  return (
    <div className="article-container">
      <h2>Article List</h2>
      <section>
        {articles.map((article) => (
          <Article key={article.publishedAt} {...article} />
        ))}
      </section>
    </div>
  );
}

export default Articles;
