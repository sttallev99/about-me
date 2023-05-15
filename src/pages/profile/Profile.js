import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import './profile.css'

const Profile = () => {
  return (
    <div>
        <>
            <Topbar />
            <div className="profileContainer">
                <Sidebar />
                <div className='profileRight'>
                    <div className='profileRightTop'>
                        <div className='profileCover'>
                            <img className='profileCoverPhoto' src='assets/posts/3.jpg' alt='' />
                            <img className='profileUserImg' src='assets/persons/1.jpg' alt='' />
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
