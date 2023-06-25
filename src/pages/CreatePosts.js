import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../actions";

function CreatePost () {
    const dispatch = useDispatch();
    const currentDate = new Date().toLocaleString();
    const navigate = useNavigate()

    const [ post, setPost ] = useState({
        image: "/img/img1.jpg",
        date: currentDate,
        title: '',
        text: ''
    })

    const CreatePostHandler = () => {
        dispatch(addPost(post));

        alert('Add a NEW post!');

        setTimeout(() => {
            navigate('/blog')
        }, 1500)
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