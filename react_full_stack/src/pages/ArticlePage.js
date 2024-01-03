import { useState , useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import NotFoundPage from './NotFoundPage';
import useUser from '../hooks/useUser';
import articles from './article-content';
import CommentsList from '../Components/CommentsList'
import AddCommentForm from '../Components/AddCommentForm';
const ArticlePage = () => {
    const [articleInfo  , setArticleInfo ] = useState({upvotes : 0 , comments : []  , canUpvote : false});
    const { canUpvote } = articleInfo ;
    const { articleId } = useParams();
    const {user , isLoading} = useUser();
    useEffect(()=>{
        const loadArticleInfo = async()=>{
            const token = user && await user.getIdToken() ; 
            const headers = token ? {authtoken : token } : {}
            const response = await axios.get(`/api/articles/${articleId}`,{
                headers 
            });
            const newarticleInfo = response.data;
            setArticleInfo(newarticleInfo);
        }
        if (isLoading) {
            loadArticleInfo();
        }
    },[isLoading , user ]);

   
    const article = articles.find(article => article.name === articleId);

    const addUpvote =  async()=>{
        const token = user && await user.getIdToken();
        const headers = token ? {authtoken : token } : {};
        const response = await axios.put(`/api/articles/${articleId}/upvote` , null , { headers });
        const updatedArticle = response.data ;
        setArticleInfo(updatedArticle);
    }

    if (!article) {
        return (<NotFoundPage />)
    }

    return (
        <>
        <h1 className='article-list-item margin-top'>{article.title}</h1>
        <div className='upvotes-section'>
            {user ? 
            <button onClick={addUpvote}>{canUpvote ? 'Upvote' : 'Alreday Upvoted'}</button>
            : <Link to="/login"><button>Login to Upvote</button></Link>
                }
            <p>This article has {articleInfo.upvotes} upvote(s)</p>
        </div>
        {article.content.map((paragraph, i) => (                
                <p key={i} className='article-list-item p'>{paragraph}</p>
        ))}
        {user ?
            <AddCommentForm articleName={articleId} 
            onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)} />
            :
            <Link to="/login"><button>Login to Add comment</button></Link>
        }
        <CommentsList comments={articleInfo.comments} />
        </>
    );
}

export default ArticlePage;