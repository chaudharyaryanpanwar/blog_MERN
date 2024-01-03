import { BrowserRouter , Routes , Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './pages/HomePage';
import ArticleListPage  from './pages/ArticleListPage';
import AboutPage from './pages/AboutPage'; 
import NotFoundPage from './pages/NotFoundPage';
import ArticlePage from "./pages/ArticlePage";
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';

function App() {
  return (
    <BrowserRouter>
      
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/articles' element={<ArticleListPage />}/>
        <Route path='/articles/:articleId' element={<ArticlePage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/create-account' element={<CreateAccountPage />} />
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
      
      
    </BrowserRouter>
  );
}

export default App;
