
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './rigthbar.css';
import Online from '../online/Online'
import { Users } from '../../dummyData';
import { AuthContext } from '../../context/AuthContext';

const Rightbar = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const {user:currentUser, dispatch} = useContext(AuthContext);

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
    const [followed, setFollowed] = useState(currentUser.followings.includes(user._id));

    useEffect(() => {
      setFollowed(currentUser.followings.includes(user._id));
    }, [currentUser, user]);

    useEffect(() => {
      const getFriends = async () => {
        const frindsList = await axios.get('/users/friends/' + user._id);
        setFriends(frindsList.data);
      }
      getFriends();
    }, [user]);

    const FriendCard = ({friend}) => {
      return (
        <Link to={`/profile/${friend.username}`} style={{ textDecoration: 'none' }}>
          <div key={friend._id} className='rightbarFollowing'>
            <img className='rightbarFollowingImg'
              src={
                friend.profilePicture
                  ? PF + friend.profilePicture
                  : PF + 'persons/no_avatar.jpg'
              }
              alt='' />
            <span className='rightbarFollowingName'>{friend.username}</span>
          </div>
        </Link>
      )
    }

    const UserFrinds = ({friends}) => {
      return (
        <>
          <h4 className='rightbarTitle'>User Friends</h4>
          <div className='rightbarFollowings'>
            {friends.map(friend => <FriendCard friend={friend} key={friend._id}/>)}
          </div>
        </>
      )
    }

    const followClickHandler = async () => {
      try{
        if(followed) {
          await axios.put(`/users/${user._id}/unfollow`, {userId: currentUser._id});
          dispatch({type: 'UNFOLLOW', payload: user._id});
        } else {
          await axios.put(`/users/${user._id}/follow`, {userId: currentUser._id});
          dispatch({type: 'FOLLOW', payload: user._id});
        }
      }catch(err) {
        console.log(err)
      }
      setFollowed(!followed);
    }


    return (
      <>
      {user.username !== currentUser.username && (
        <button className='rightbaFollowButton' onClick={followClickHandler}>
          {followed ? 'Unfollow' : 'Follow'}
        </button>
      )}
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
