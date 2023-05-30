import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import './profile.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';


const Profile = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState('');
    const username = useParams().username;

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('/users?username=' + username);
            setUser(res.data);
        }
        fetchData();
    }, [username])

  return (
    <div>
        <Topbar />
        <div className="profileContainer">
            <Sidebar />
            <div className='profileRight'>
                <div className='profileRightTop'>
                    <div className='profileCover'>
                        <img className='profileCoverPhoto' src={ user.coverPicture  ? PF+user.coverPicture : `${PF}persons/no_cover.jpg`} alt='' />
                        <img className='profileUserImg' src={ user.profilePicture ? PF+user.profilePicture : `${PF}persons/no_avatar.jpg`} alt='' />
                    </div>
                    <div className='profileInfo'>
                        <h4 className='profileInfoName'>{user.username}</h4>
                        <span className='profileInfoDesc'>{user.description}</span>
                    </div>
                </div>
                <div className='profileRightBottom'>
                    {username && <Feed username={username}/>}
                    {user && <Rightbar user={user}/>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile
