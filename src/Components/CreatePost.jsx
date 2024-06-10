import { useContext } from "react";
import { Form, useNavigate } from "react-router-dom";
import { PostListContext } from "../store/post-list-store";

export default function CreatePost() {
    const { addPost } = useContext(PostListContext);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Post called");
        const formData = new FormData(event.target);
        const postData = Object.fromEntries(formData);
        postData.tags = postData.tags.split(" ");
        postData.views = parseInt(postData.views);

        const response = await fetch("http://localhost:3001/api/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(postData),
        });
        const post = await response.json();

        navigate("/");
    };

    return (
        <Form className='createPost' method='post' onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor='title' className='form-label'>
                    Post Title
                </label>
                <input
                    type='text'
                    name='title'
                    className='form-control form-control-dark text-bg-dark'
                    id='titleElement'
                    placeholder="How's your mood today..."
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='bodyElement' className='form-label'>
                    Enter content
                </label>
                <textarea
                    rows='4'
                    className='form-control form-control-dark text-bg-dark'
                    id='bodyElement'
                    name='body'
                    placeholder='Tell us more about it'
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='tags' className='form-label'>
                    Tags
                </label>
                <input
                    type='text'
                    className='form-control form-control-dark text-bg-dark'
                    id='tagsElement'
                    name='tags'
                    placeholder='Enter your tags using spaces'
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='views' className='form-label'>
                    Views
                </label>
                <input
                    type='text'
                    name='views'
                    className='form-control form-control-dark text-bg-dark'
                    id='viewsElement'
                    placeholder='Enter number of views'
                />
            </div>
            <button type='submit' className='btn btn-primary'>
                Post
            </button>
        </Form>
    );
}
