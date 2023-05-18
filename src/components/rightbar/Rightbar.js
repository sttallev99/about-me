import './rigthbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';

const Rightbar = ({ user }) => {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightbar = () => {
    return (
      <>
        <div className='birthdayContainer'>
          <img className='giftImg' src={`${PF}gift.png`} alt='' />
          <span className='birthdayText'><b>Георги Сталев</b> and <b>3 other frieds</b> have a birthday today.</span>
        </div>
        <img className='rightbarAd' src={`${PF}ad.jpg`} alt='' />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          {Users.map(u => <Online key={u.id} user={u} />)}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className='rightbarTitle'>User information</h4>
        <div className='rightbarInfo'>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>City:</span>
            <span className='rightbarInfoValue'>{user.city}</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>From:</span>
            <span className='rightbarInfoValue'>{user.from}</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Relationship:</span>
            <span className='rightbarInfoValue'>{user.relationship === 1 ? 'Single' : user.relationship === 2 ? 'In a relationship' : 'Married'}</span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User Friends</h4>
        <div className='rightbarFollowings'>
          <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src={`${PF}persons/1.jpg`} alt='' />
            <span className='rightbarFollowingName'>Georgi Stalev</span>
          </div>
          <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src={`${PF}persons/2.jpg`} alt='' />
            <span className='rightbarFollowingName'>Georgi Stalev</span>
          </div>
          <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src={`${PF}persons/3.jpg`} alt='' />
            <span className='rightbarFollowingName'>Georgi Stalev</span>
          </div>
          <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src={`${PF}persons/4.jpg`} alt='' />
            <span className='rightbarFollowingName'>Georgi Stalev</span>
          </div>
          <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src={`${PF}persons/5.jpg`} alt='' />
            <span className='rightbarFollowingName'>Georgi Stalev</span>
          </div>
          <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src={`${PF}persons/1.jpg`} alt='' />
            <span className='rightbarFollowingName'>Georgi Stalev</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        { user ? <ProfileRightbar /> : <HomeRightbar /> }
      </div>
    </div>
  )
}

export default Rightbar
