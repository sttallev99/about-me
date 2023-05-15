import './rigthbar.css'

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
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img className='rightbarProfileImg' src='/assets/persons/3.jpg' alt='' />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Svetozar Stalev</span>
          </li>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img className='rightbarProfileImg' src='/assets/persons/3.jpg' alt='' />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Svetozar Stalev</span>
          </li>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img className='rightbarProfileImg' src='/assets/persons/3.jpg' alt='' />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Svetozar Stalev</span>
          </li>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img className='rightbarProfileImg' src='/assets/persons/3.jpg' alt='' />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Svetozar Stalev</span>
          </li>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img className='rightbarProfileImg' src='/assets/persons/3.jpg' alt='' />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Svetozar Stalev</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Rightbar
