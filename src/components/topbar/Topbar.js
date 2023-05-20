import { Link } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';

import {AuthContext} from '../../context/AuthContext';


import './topbar.css'
import { useContext } from 'react';

const Topbar = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user } = useContext(AuthContext)
  return (
    <div className='topbarContainer'>
        <div className='topbarLeft'>
            <Link to='/' style={{textDecoration: 'none'}}>
                <span className='logo'>About me</span>
            </Link>
        </div>
        <div className='topbarCenter'>
            <div className='searchbar'>
                <SearchIcon className='searchIcon'/>
                <input placeholder='Search for frinds, post or video' className='searchInput' />
            </div>
        </div>
        <div className='topbarRight'>
            <div className='topbarLinks'>
                <span className='topbarLink'>Homepage</span>
                <span className='topbarLink'>Timeline</span>
            </div>
            <div className='topbarIcons'>
                <div className='topbarIconItem'>
                    <PersonIcon className='personIcon'/>
                    <span className='topbarIconBadge'>1</span>
                </div>
                <div className='topbarIconItem'>
                    <ChatIcon className='chatIcon'/>
                    <span className='topbarIconBadge'>3</span>
                </div>
                <div className='topbarIconItem'>
                    <NotificationsIcon className='notificationIcon'/>
                    <span className='topbarIconBadge'>2</span>
                </div>
            </div>
            <Link to={`/profile/${user.username}`}>
                <img 
                    src={
                        user.profilePicture
                            ? PF + user.profilePicture
                            : PF + 'persons/no_avatar.jpg'
                    } 
                    alt='' 
                    className='topbarImg' 
                />
            </Link>
        </div>
    </div>
  )
}

export default Topbar
