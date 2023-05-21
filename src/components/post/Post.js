import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'timeago.js';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import './post.css';


const Post = ({post}) => {

  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const {user: currentUser} = useContext(AuthContext);
  
  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [post.likes, currentUser._id])
  
  useEffect(() => {
    const fetchData = async() => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    }
    fetchData();
  }, [post.userId]);


  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const likeClickHandler = () => {
    try{
      axios.put(`/posts/${post._id}/like`, {userId: currentUser._id});
    }catch(err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked)
  }

  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
            <div className='postLeft'>
              <Link to={`/profile/${user.username}`}>
                <img 
                  className='postProfileImg' 
                  src={ user.profilePicture ? PF + user.profilePicture : `${PF}persons/no_avatar.jpg`} 
                  alt='' 
                />
              </Link>
                <span className='postUsername'>{user.username}</span>
                <span className='postDate'>{format(post.createdAt)}</span>
            </div>
            <div className='postRight'>
                <MoreVertIcon />
            </div>
        </div>
        <div className='postCenter'>
            <span className='postText'>{post?.description}</span>
            <img className='postImg' src={PF+post.img} alt='' />
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
