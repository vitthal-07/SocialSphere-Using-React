import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import { BlankState } from "./BlankState";
import { LoadingState } from "./LoadingState";

export default function PostList() {
    const { postList, fetching } = useContext(PostListContext);
    return (
        <>
            {fetching && <LoadingState />}
            {!fetching && postList.length === 0 && <BlankState />}
            {!fetching &&
                postList.map((post) => <Post key={post.id} post={post} />)}
        </>
    );
}
