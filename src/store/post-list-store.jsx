import { createContext, useReducer, useState, useEffect } from "react";

export const PostListContext = createContext({
    postList: [],
    fetching: false,
    addPost: () => {},
    deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;

    if (action.type === "ADD_POSTS") {
        newPostList = [action.payload.post, ...currPostList];
    } else if (action.type === "ADD_INITIAL_POSTS") {
        newPostList = [...currPostList, ...action.payload.posts];
    } else if (action.type === "DELETE_POSTS") {
        newPostList = currPostList.filter(
            (post) => post.id !== action.payload.postId
        );
    }
    return newPostList;
};

export default function PostContextProvider({ children }) {
    const [postList, dispatchPostList] = useReducer(postListReducer, []);

    const addPost = (post) => {
        dispatchPostList({
            type: "ADD_POSTS",
            payload: { post },
        });
    };
    const addInitialPosts = (posts) => {
        const action = {
            type: "ADD_INITIAL_POSTS",
            payload: {
                posts,
            },
        };
        dispatchPostList(action);
    };

    const deletePost = (postId) => {
        const action = {
            type: "DELETE_POSTS",
            payload: {
                postId,
            },
        };
        dispatchPostList(action);
    };
    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        if (postList.length === 0) {
            setFetching(true);
            const controller = new AbortController();
            const signal = controller.signal;

            fetch("http://localhost:3001/api/posts", { signal })
                .then((res) => res.json())
                .then((data) => {
                    addInitialPosts(data);
                    setFetching(false);
                })
                .catch((error) => {
                    console.error("Error fetching posts:", error);
                    setFetching(false);
                });

            return () => {
                controller.abort();
            };
        }
    }, [postList]);

    return (
        <PostListContext.Provider
            value={{ postList, fetching, addPost, deletePost }}
        >
            {children}
        </PostListContext.Provider>
    );
}
