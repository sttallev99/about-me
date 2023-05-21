import { useContext, useRef, useState } from 'react';
import axios from 'axios';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddReactionIcon from '@mui/icons-material/AddReaction';

import './share.css';
import { AuthContext } from '../../context/AuthContext';

const Share = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  const desc = useRef();

  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      description: desc.current.value
    }

    if(file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append('name', fileName);
      data.append('file', file);
      newPost.img = fileName;
      try{
        await axios.post('/upload', data);
      }catch(err) {}     
    }

    try{
      await axios.post('/posts/create', newPost)
    }catch(err) {}
  }

  return (
    <div className='share'>
      <div className='shareWrapper'>
        <div className='shareTop'>
            <img 
              className='shareProfileImg' 
              src={user.profilePicture ? PF + user.profilePicture : `${PF}/persons/no_avatar.jpg`} 
              alt=''
            />
            <input 
                placeholder={`What's in your mind ${user.username}?`}
                className='shareInput'
                ref={desc} 
            />
        </div>
        <hr className='shareHr' />
        <form className='shareBotton' onSubmit={submitHandler}>
            <div className='shareOptions'>
              <label htmlFor='file' className='shareOption'>
                <PermMediaIcon htmlColor='tomato' className='shareIcon' />
                <span className='shareOptionText'>Photo/Video</span>
                <input 
                  type='file' 
                  id='file' 
                  accept='.png,.jpg,.jpeg' 
                  onChange={(e) => setFile(e.target.files[0])} 
                  style={{display: 'none'}}
                />
              </label>
              <div className='shareOption'>
                <TurnedInIcon htmlColor='blue' className='shareIcon' />
                <span className='shareOptionText'>Tag</span>
              </div>
              <div className='shareOption'>
                <LocationOnIcon htmlColor='green' className='shareIcon' />
                <span className='shareOptionText'>Location</span>
              </div>
              <div className='shareOption'>
                <AddReactionIcon htmlColor='goldenrod' className='shareIcon' />
                <span className='shareOptionText'>Photo/Video</span>
              </div>
              <button className='shareButton' type='submit'>Share</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Share
