// import { useState, useEffect } from 'react';
// import axios from 'axios';

import './rigthbar.css';
import Online from '../online/Online'
import { Users } from '../../dummyData';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

const Rightbar = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

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
    const [friends, setFriends] = useState(undefined);

    useEffect(() => {
      const getFriends = async () => {
        const frindsList = await axios.get('/users/friends/' + user._id);
        setFriends(frindsList.data);
      }
      getFriends();
    }, [user._id]);

    const UserFrinds = ({friends}) => {
      console.log(friends)
      return (
        <>
          <h4 className='rightbarTitle'>User Friends</h4>
          <div className='rightbarFollowings'>
            {friends.map(frind => 
              <>
                <div className='rightbarFollowing'>
                  <img className='rightbarFollowingImg' 
                  src={
                    frind.profilePicture 
                      ? PF + frind.profilePicture 
                      : PF + 'persons/no_avatar.jpg'
                  } 
                  alt='' />
                  <span className='rightbarFollowingName'>{frind.username}</span>
                </div>
              </>
            )}
          </div>
        </>
      )
    }


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
            <span className='rightbarInfoValue'>
              {
                user.relationship === 1
                  ? 'Single' : user.relationship === 2
                    ? 'In a relationship'
                    : 'Married'
              }
            </span>
          </div>
        </div>
        {friends && <UserFrinds friends={friends}/>}
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        { user ? <ProfileRightbar/> : <HomeRightbar /> }
      </div>
    </div>
  )
}

export default Rightbar
