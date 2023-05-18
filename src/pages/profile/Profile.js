import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import './profile.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
    const [user, setUser] = useState({});
    
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('/users?username=stalev99');
            console.log(res.data)
            setUser(res.data);
        }
        fetchData();
    }, [])
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div>
        <>
            <Topbar />
            <div className="profileContainer">
                <Sidebar />
                <div className='profileRight'>
                    <div className='profileRightTop'>
                        <div className='profileCover'>
                            <img className='profileCoverPhoto' src={user.coverPicture || `${PF}persons/no_cover.jpg`} alt='' />
                            <img className='profileUserImg' src={user.profilePicture || `${PF}persons/no_avatar.png`} alt='' />
                        </div>
                        <div className='profileInfo'>
                            <h4 className='profileInfoName'>{user.username}</h4>
                            <span className='profileInfoDesc'>{user.description}</span>
                        </div>
                    </div>
                    <div className='profileRightBottom'>
                        <Feed username='stalev99' />
                        <Rightbar user={user}/>
                    </div>
                </div>
            </div>
        </>
    </div>
  )
}

export default Profile
