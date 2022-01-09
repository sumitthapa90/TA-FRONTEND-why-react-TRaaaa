import PropTypes from "prop-types";

function Article(props) {
  return (
    <article className="article-box">
      <div>
        <img src={props.urlToImage} alt={props.title} width="700" />
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <a href={props.url} className="button">
          Read More
        </a>
      </div>
    </article>
  );
}

Article.PropTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Article;
