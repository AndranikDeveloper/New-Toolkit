import { FC } from 'react';
import { IPostState } from '../module/IPost';
import '../../src/App.css';

interface PostItemProps {
  post: IPostState;
  remove: (post: IPostState) => void;
  update: (post: IPostState) => void;
}
const PostItem: FC<PostItemProps> = ({ post, remove, update }) => {
  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(post);
  };

  const handleUpdate = (event: React.MouseEvent) => {
    const title = prompt() || '';
    update({ ...post, title });
  };

  return (
    <div className='posts'>
      {post.id} --- {post.title}
      <button onClick={handleRemove}>DELETE</button>
    </div>
  );
};

export default PostItem;
