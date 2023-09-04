import React from 'react';
import { postAPI } from '../services/PostServices';
import PostItem from './PostItem';
import { IPostState } from '../module/IPost';

const PostContainer = () => {
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(10);
  const [createPosts, {}] = postAPI.useCreatePostMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();

  const handlePost = async () => {
    const title = prompt();
    await createPosts({ title, body: title } as IPostState);
  };

  const handleRemove = (post: IPostState) => {
    deletePost(post);
  };

  const handleUpdate = (post: IPostState) => {
    updatePost(post);
  };
  return (
    <>
      <button onClick={handlePost}>Add new Post</button>
      {isLoading && <h1>LOADING...</h1>}
      {error && <h1>Some Error, be careful</h1>}
      {posts?.map((post) => (
        <PostItem remove={handleRemove} update={handleUpdate} post={post} />
      ))}
    </>
  );
};

export default PostContainer;
