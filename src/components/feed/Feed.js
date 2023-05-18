import { useEffect, useState } from 'react';
import axios from 'axios';

import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css';

const Feed = ({ username }) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fethPosts = async() => {
      const res = username 
        ? await axios.get(`/posts/profile/${username}`) 
        : await axios.get('/posts/timeline/645d23667c6e5458cbfcbaa1');
      setPosts(res.data);
    }
    fethPosts();
  },[username]);

  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share />
        {posts.map(p => <Post key={p._id} post={p} />)}
      </div>
    </div>
  )
}

export default Feed
