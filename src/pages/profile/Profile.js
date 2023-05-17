import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import './profile.css'

const Profile = () => {
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
                            <img className='profileCoverPhoto' src={`${PF}posts/3.jpg`} alt='' />
                            <img className='profileUserImg' src={`${PF}persons/1.jpg`} alt='' />
                        </div>
                        <div className='profileInfo'>
                            <h4 className='profileInfoName'>Georgi Stalev</h4>
                            <span className='profileInfoDesc'>Some description hqhqhqhqhqhq</span>
                        </div>
                    </div>
                    <div className='profileRightBottom'>
                        <Feed />
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    </div>
  )
}

export default Profile
