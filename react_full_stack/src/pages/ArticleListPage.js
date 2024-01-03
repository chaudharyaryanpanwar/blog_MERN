
import articles from './article-content.js';
import ArticleList from '../Components/ArticleList.js';
const ArticleListPage = () => {
    return (
        <>
            <div className=" margin-top margin-left-right ">
            <h1>This is an Article List Page</h1>
            <div >
            {articles.map((article , i )=>(
                <ArticleList article={article} />
            ))}
            </div>
            </div>
        </>
    )
}
export default ArticleListPage ;