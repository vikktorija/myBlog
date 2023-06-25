import { Link, useNavigate } from 'react-router-dom';
import NewsCard from '../components/Cards';
import { useSelector } from 'react-redux';
import PostDeleteButton from '../components/PostDeleteButton';


export const Blog = () => {
    const {posts} = useSelector(state => state.posts);
    const navigate = useNavigate();

    return (
        <div>
            <div className='back-home'><Link to='/'>&#8592; Home</Link></div>
            <div className="news-list">
            {posts.map((item, index) => (
                <>
                    <PostDeleteButton postId={item.id} />
                    <NewsCard key={index} item={item} />
                </>
            ))}
            </div>
        </div>
    )
}

export default Blog;