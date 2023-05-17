import { useEffect, useState } from 'react';
import axios from 'axios';

import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css';

const Feed = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fethPosts = async() => {
      const res = await axios.get('posts/timeline/645d23667c6e5458cbfcbaa1');
      setPosts(res.data);
    }
    fethPosts();
  },[]);

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
