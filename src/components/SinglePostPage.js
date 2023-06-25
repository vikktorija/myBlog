import { useLocation } from "react-router-dom";
import BackButton from './BackButton';
import { useSelector } from 'react-redux';

export const SinglePostPage = () => {
    const id = useLocation().pathname.split('/')[2];
    const posts = useSelector(state => state.posts);
    const currentPost = posts.find(post => post.id === Number(id));  

    return(
        <>
            <div>
                <BackButton />
                <h3 className="post-title">{currentPost.title}</h3>
                <div className="post-content">
                    <img className="post-img" src={currentPost.image} />
                    <p className="post-text"> {currentPost.text}</p>
                </div>
            </div>
        </>
    )

}

export default SinglePostPage;