import { useState } from "react";
import { useLocation } from "react-router-dom";
import BackButton from './BackButton';
import { useContext } from 'react';
import { postContext } from '../App';


export const SinglePostPage = () => {
    const id = useLocation().pathname.split('/')[2]
    const {posts} = useContext(postContext)
    const currentPost = posts[+id - 1]

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