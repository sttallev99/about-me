import PermMediaIcon from '@mui/icons-material/PermMedia';

import './share.css';

const Share = () => {
  return (
    <div className='share'>
      <div className='shareWrapper'>
        <div className='shareTop'>
            {/* <img className='shareProfileImg' src='/assets/persons/1.jpg' alt='' /> */}
            <input 
                placeholder="What's in your mind Georgi?" 
                className='shareInput' 
            />
        </div>
        <hr className='shareHr' />
        <div className='shareBottom'>
            <div className='shareOptions'>
                <PermMediaIcon className='shareIcon' />
                <span className='shareOptionText'>Photo/Video</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Share
