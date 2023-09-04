import React from "react"
import { postAPI } from "../services/PostServices"
import PostItem from "./PostItem"

const PostContainer = () => {
    const {data: posts} = postAPI.useFetchAllPostsQuery(5)
    return (
        <>
            {
                posts?.map(post => (
                    <PostItem post={post}/>
                ))
            }
        </>
    )
}

export default PostContainer