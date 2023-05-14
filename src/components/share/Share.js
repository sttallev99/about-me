import PermMediaIcon from '@mui/icons-material/PermMedia';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddReactionIcon from '@mui/icons-material/AddReaction';

import './share.css';

const Share = () => {
  return (
    <div className='share'>
      <div className='shareWrapper'>
        <div className='shareTop'>
            <img className='shareProfileImg' src='/assets/persons/1.jpg' alt='' />
            <input 
                placeholder="What's in your mind Georgi?" 
                className='shareInput' 
            />
        </div>
        <hr className='shareHr' />
        <div className='shareBotton'>
            <div className='shareOptions'>
              <div className='shareOption'>
                <PermMediaIcon htmlColor='tomato' className='shareIcon' />
                <span className='shareOptionText'>Photo/Video</span>
              </div>
              <div className='shareOption'>
                <TurnedInIcon htmlColor='blue' className='shareIcon' />
                <span className='shareOptionText'>Photo/Video</span>
              </div>
              <div className='shareOption'>
                <LocationOnIcon htmlColor='green' className='shareIcon' />
                <span className='shareOptionText'>Photo/Video</span>
              </div>
              <div className='shareOption'>
                <AddReactionIcon htmlColor='goldenrod' className='shareIcon' />
                <span className='shareOptionText'>Photo/Video</span>
              </div>
              <button className='shareButton'>Share</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Share
