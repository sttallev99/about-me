import MoreVertIcon from '@mui/icons-material/MoreVert';

import './post.css';

const Post = ({post}) => {
  console.log(post)
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
            <div className='postLeft'>
                <img className='postProfileImg' src='/assets/persons/1.jpg' alt='' />
                <span className='postUsername'>my name here</span>
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
                <img className='likeIcon' src='/assets/like.png' alt=''/>
                <img className='likeIcon' src='/assets/heart.png' alt=''/>
                <span className='postLikeCounter'>{post?.like} people like it</span>
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