import { useState, createContext, useContext } from "react";
import { postContext } from '../App';
import { Navigate, useNavigate } from "react-router-dom";
import SinglePostPage from "../components/SinglePostPage";
import { news } from "../data/NewsCard";

  
function CreatePost () {
    const navigate = useNavigate()
    const { posts, setPosts } = useContext(postContext)

    const [ post, setPost ] = useState({
        id: posts.length + 1,
        image: "/img/img1.jpg",
        date: '',
        title: '',
        text: ''
    })

    const CreatePostHandler = () => {
        setPosts(prev => {
            return [...prev, post]
        })
    
        alert('Add a NEW post!')
    
        setTimeout(() => {
            navigate('/blog')
        }, 1500)

        console.log(posts)
    }

    const handleAddPost =(post) => {
        setPosts(prev => [...prev, post]);
        post.push(setPosts)
      return (
        <div>
          <CreatePost onAddPost={handleAddPost} />
          <SinglePostPage news={news} />
        </div>
      );
    }

    const inputHandler = (e) => {
        const name = e.target.name;
        setPost(prev => ({...prev, [name]: e.target.value}))
    }

    return(
        <div>
            <h2 className="create-post">Create Post</h2>
            <div className="create-form">
                <input className="create-input" name='title' onChange={(e) => {inputHandler(e)}} type="text" placeholder="Title" />
                <br />
                <textarea className="create-text" name='text' onChange={(e) => {inputHandler(e)}} placeholder="Write your text..." />
                <div><button className="create-btn" onClick={CreatePostHandler}>Create</button></div>
            </div>
        </div>
    )
}

export default CreatePost;
