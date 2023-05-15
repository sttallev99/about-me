import MoreVertIcon from '@mui/icons-material/MoreVert';

import './post.css';
import { Users } from '../../dummyData'
import { useState } from 'react';

const Post = ({post}) => {

  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeClickHandler = (e) => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked)
  }

  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
            <div className='postLeft'>
                <img className='postProfileImg' src={Users.filter(u => u?.id === post?.userId)[0].profilePicture} alt='' />
                <span className='postUsername'>{Users.filter(u => u?.id === post?.userId)[0].username}</span>
                <span className='postDate'>{post?.date}</span>
            </div>
            <div className='postRight'>
                <MoreVertIcon />
            </div>
        </div>
        <div className='postCenter'>
            <span className='postText'>{post?.desc}</span>
            <img className='postImg' src={post?.photo} alt='' />
        </div>
        <div className='postBottom'>
            <div className='postBottomLeft'>
                <img className='likeIcon' src='/assets/like.png' onClick={likeClickHandler} alt=''/>
                <img className='likeIcon' src='/assets/heart.png' onClick={likeClickHandler} alt=''/>
                <span className='postLikeCounter'>{like} people like it</span>
            </div>
            <div className='postBottomRight'>
                <span className='postCommentText'>{post?.comment} comments</span>
            </div>
        </div>
      </div>
    </div> 
  )
}

export default Post
