import React from 'react' 
import CloseIcon from '@mui/icons-material/Close';

import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';

import './setings.css';

const Setings = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
      <>
          <Topbar />
          <div className='mainProfileSettingWrapper'>
              <Sidebar />
              <div className='profileSettingsWrapper'>
                <span className='profileSettingsCloseIcon'><CloseIcon /></span>
                  <div className='profileSetingsTitleWrapper'>
                      <p className='profileSettingsTitle'>Account Settings</p>
                  </div>
                  <div className='profileSettingsActions'>
                      <button className='profileSettingsAction'>Profile</button>
                      <button className='profileSettingsAction'>Friends</button>
                  </div>
                  {/* <div className='profileSettingsFormWrapper'> */}
                  <form className='profileSettingsFormWrapper'>
                      <div className='formLeft'>
                          <img className='profileSettingsCoverImage' src={PF + 'persons/no_cover.jpg'} alt='' />
                          <img className='profileSettingsAvatarImage' src={PF + 'persons/no_avatar.jpg'} alt='' />
                          <div className='profileSettingsChangeImages'>
                              <button className='profileSettingsChangeImageButton'>Change cover</button>
                              <button className='profileSettingsChangeImageButton'>Change avarat</button>
                          </div>
                      </div>
                      <div className='formRight'>
                          <div className='formRightFields'>
                              <div className='formRightField'>
                                  <label className='formRightLabel' htmlFor='username'>username</label>
                                  <input className='formRightInput' type='text' name='username' placeholder='username' value='' />
                              </div>
                              <div className='formRightField'>
                                  <label className='formRightLabel' htmlFor='email'>email</label>
                                  <input className='formRightInput' type='text' name='email' placeholder='email' value='' />
                              </div>
                              <div className='formRightField'>
                                  <label className='formRightLabel' htmlFor='description'>description</label>
                                  <input className='formRightInput' type='text' name='description' placeholder='description' value='' />
                              </div>
                              <div className='formRightField'>
                                  <label className='formRightLabel' htmlFor='from'>from</label>
                                  <input className='formRightInput' type='text' name='from' placeholder='from' value='' />
                              </div>
                              <div className='formRightField'>
                                  <label className='formRightLabel' htmlFor='city'>city</label>
                                  <input className='formRightInput' type='text' name='city' placeholder='city' value='' />
                              </div>
                              <div className='formRightField'>
                                  <label className='formRightLabel' htmlFor='password'>password</label>
                                  <input className='formRightInput' type='password' name='password' placeholder='password' value='' />
                              </div>
                              <div className='formRightField'>
                                  <label className='formRightLabel' htmlFor='repeatPassword'>re-password</label>
                                  <input className='formRightInput' type='password' name='repeatPassword' placeholder='repeat password' value='' />
                              </div>
                              <button className='profileSettingsSubmitButton'>Submit</button>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      </>
  )
}

export default Setings
