import {Link} from "react-router-dom";
const ArticleList = ({article}) => {
    return (
        <Link to={`/articles/${article.name}`}>
            <h1 className="margin-top article-list-item">{article.title}</h1>
            <p className="article-list-item p">{article.content[0].substring(0,150)}...</p>
        </Link>
    )
}
export default ArticleList ;