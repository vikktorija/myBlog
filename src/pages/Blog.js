import { Link, useNavigate } from 'react-router-dom';
import NewsCard from '../components/Cards';
import { useContext, useState } from 'react';
import { postContext } from '../App';

export const Blog = () => {
    const navigate = useNavigate();
    const {posts} = useContext(postContext)

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