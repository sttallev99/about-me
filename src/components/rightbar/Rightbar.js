import './rigthbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <div className='birthdayContainer'>
          <img className='giftImg' src='assets/gift.png' alt='' />
          <span className='birthdayText'><b>Георги Сталев</b> and <b>3 other frieds</b> have a birthday today.</span>
        </div>
        <img className='rightbarAd' src='/assets/ad.jpg' alt='' />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          {Users.map(u => <Online key={u.id} user={u} /> )}
        </ul>
      </div>
    </div>
  )
}

export default Rightbar
