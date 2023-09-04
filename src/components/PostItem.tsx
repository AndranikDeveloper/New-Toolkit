import { FC } from "react"
import { IPostState } from "../module/IPost"

interface PostItemProps {
    post: IPostState
}
const PostItem: FC<PostItemProps> = ({post}) => {
    return (
        <div className="posts">
            {post.id} --- {post.title}
            <button>DELETE</button>
        </div>
    )
}

export default PostItem