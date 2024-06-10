import React, { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostListContext } from "../store/post-list-store";

export default function Post({ post }) {
    const { deletePost } = useContext(PostListContext);

    return (
        <div className='card post-card' style={{ width: "30rem" }}>
            <div className='card-body'>
                <h5 className='card-title'>
                    {post.title}{" "}
                    <span
                        className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'
                        onClick={() => deletePost(post.id)}
                        style={{ cursor: "pointer" }}
                    >
                        <AiFillDelete />
                    </span>
                </h5>
                <p className='card-text'>{post.body}</p>
                {post.tags.map((tag) => (
                    <span key={tag} className='badge text-bg-primary hashtag'>
                        {tag}
                    </span>
                ))}
                <div className='alert alert-success reactions' role='alert'>
                    This post has been viewed by {post.views} people.
                </div>
            </div>
        </div>
    );
}
