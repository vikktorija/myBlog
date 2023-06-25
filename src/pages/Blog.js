import { Link, useNavigate } from 'react-router-dom';
import NewsCard from '../components/Cards';
import { useSelector } from 'react-redux';


export const Blog = () => {
    const posts = useSelector(state => state.posts);
    const navigate = useNavigate();

    return (
        <div>
            <div className='back-home'><Link to='/'>&#8592; Home</Link></div>
            <div className="news-list">
            {posts.map((item, index) => (
                <NewsCard key={index} item={item} />
            ))}
            </div>
        </div>
    )
}

export default Blog;