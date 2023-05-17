import { useEffect, useState } from 'react';
import axios from 'axios';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import './post.css';

const Post = ({post}) => {
  console.log(post)

  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async() => {
      const res = await axios.get(`users/${post.userId}`);
      // console.log(res.data)
      setUser(res.data);
    }
    fetchData();
  }, [])

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const likeClickHandler = (e) => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked)
  }

  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
            <div className='postLeft'>
                <img className='postProfileImg' src={user?.profilePicture} alt='' />
                <span className='postUsername'>{user.username}</span>
                <span className='postDate'>{post?.date}</span>
            </div>
            <div className='postRight'>
                <MoreVertIcon />
            </div>
        </div>
        <div className='postCenter'>
            <span className='postText'>{post?.description}</span>
            <img className='postImg' src={PF+post?.photo} alt='' />
        </div>
        <div className='postBottom'>
            <div className='postBottomLeft'>
                <img className='likeIcon' src={`${PF}like.png`} onClick={likeClickHandler} alt=''/>
                <img className='likeIcon' src={`${PF}heart.png`} onClick={likeClickHandler} alt=''/>
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
