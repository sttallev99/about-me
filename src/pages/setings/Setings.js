import React, { useContext, useState } from 'react' 
import CloseIcon from '@mui/icons-material/Close';
import { AuthContext } from '../../context/AuthContext';

import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import './setings.css';
import { Link } from 'react-router-dom';

const Setings = () => {
    const [coverImg, setCoverImg] = useState(undefined);
    const [userImg, setUserImg] = useState(undefined);
    const {user} = useContext(AuthContext);
    console.log(user)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
      <>
          <Topbar />
          <div className='mainProfileSettingWrapper'>
              <Sidebar />
              <div className='profileSettingsWrapper'>
                    <Link to={`/profile/${user.username}`} className='profileSettingsCloseIcon'>
                        <CloseIcon style={{ color: 'white'}}/>
                    </Link>
                  <div className='profileSetingsTitleWrapper'>
                      <p className='profileSettingsTitle'>Account Settings</p>
                  </div>
                  <div className='profileSettingsActions'>
                      <button className='profileSettingsAction'>Profile</button>
                      <button className='profileSettingsAction'>Friends</button>
                  </div>
                  <form className='profileSettingsFormWrapper' onSubmit={(e) => {
                    e.preventDefault();
                    console.log('clicked')
                  }}>
                      <div className='formLeft'> 
                            <img 
                                className='profileSettingsCoverImage' 
                                src={ coverImg 
                                        ? URL.createObjectURL(coverImg)
                                        : (user.profilePicture ? PF + user.profilePicture : `${PF}persons/no_cover.jpg`)
                                    } 
                                alt='' 
                            />
                          <img 
                                className='profileSettingsAvatarImage' 
                                src={ userImg 
                                        ? URL.createObjectURL(userImg)
                                        : (user.profilePicture ? PF + user.profilePicture : `${PF}persons/no_avatar.jpg`)
                                    } 
                                alt='' 
                          />
                          <form className='profileSettingsChangeImages'>
                                <label htmlFor='coverImg' className='profileSettingsChangeImageButton'
                                >
                                  <span>Change cover</span>
                                  <input 
                                        type='file' 
                                        id='coverImg' 
                                        style={{display: 'none'}} 
                                        onChange={(e) => setCoverImg(e.target.files[0])}
                                    />
                                </label>
                                <label htmlFor='avatarImg' className='profileSettingsChangeImageButton'>
                                    <span>Change avatar</span>
                                    <input 
                                        type='file' 
                                        id='avatarImg' 
                                        style={{display: 'none'}} 
                                        onChange={(e) => setUserImg(e.target.files[0])}
                                    />
                                </label>
                          </form>
                      </div>
                      <div className='formRight'>
                          <div className='formRightFields'>
                              <div className='formRightField'>
                                  <label className='formRightLabel' htmlFor='username'>username</label>
                                  <input className='formRightInput' type='text' name='username' placeholder='username' defaultValue={user.username} />
                              </div>
                              <div className='formRightField'>
                                  <label className='formRightLabel' htmlFor='email'>email</label>
                                  <input className='formRightInput' type='text' name='email' placeholder='email' defaultValue={user.email} />
                              </div>
                              <div className='formRightField'>
                                  <label className='formRightLabel' htmlFor='description'>description</label>
                                  <input className='formRightInput' type='text' name='description' placeholder='description' defaultValue={user.description} />
                              </div>
                              <div className='formRightField'>
                                  <label className='formRightLabel' htmlFor='from'>from</label>
                                  <input className='formRightInput' type='text' name='from' placeholder='from' defaultValue={user.from} />
                              </div>
                              <div className='formRightField'>
                                  <label className='formRightLabel' htmlFor='city'>city</label>
                                  <input className='formRightInput' type='text' name='city' placeholder='city' defaultValue={user.city} />
                              </div>
                              <div className='formRightField'>
                                  <label className='formRightLabel' htmlFor='password'>password</label>
                                  <input className='formRightInput' type='password' name='password' placeholder='password' defaultValue='' />
                              </div>
                              <div className='formRightField'>
                                  <label className='formRightLabel' htmlFor='repeatPassword'>re-password</label>
                                  <input className='formRightInput' type='password' name='repeatPassword' placeholder='repeat password' defaultValue='' />
                              </div>
                              <button className='profileSettingsSubmitButton' type='submit'>Submit</button>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      </>
  )
}

export default Setings
