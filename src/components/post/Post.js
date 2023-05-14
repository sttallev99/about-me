import MoreVertIcon from '@mui/icons-material/MoreVert';

import './post.css';

const Post = () => {
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
            <div className='postLeft'>
                <img className='postProfileImg' src='/assets/persons/1.jpg' alt='' />
                <span className='postUsername'>my name here</span>
                <span className='postDate'>1 minute ago</span>
            </div>
            <div className='postRight'>
                <MoreVertIcon />
            </div>
        </div>
        <div className='postCenter'>
            <span className='postText'>Hey! Its my first post</span>
            <img className='postImg' src='/assets/posts/1.jpg' alt='' />
        </div>
        <div className='postBottom'>
            <div className='postBottomLeft'>
                <img className='likeIcon' src='/assets/like.png' alt=''/>
                <img className='likeIcon' src='/assets/heart.png' alt=''/>
                <span className='postLikeCounter'>238 people like it</span>
            </div>
            <div className='postBottomRight'>
                <span className='postCommentText'>9 comments</span>
            </div>
        </div>
      </div>
    </div> 
  )
}

export default Post
