import React, { useContext, useState } from 'react' 
import CloseIcon from '@mui/icons-material/Close';
import { AuthContext } from '../../context/AuthContext';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import './setings.css';
import { editUserCall } from '../../apiCalls'
import axios from 'axios';

const Setings = () => {
    const [coverImg, setCoverImg] = useState(undefined);
    const [userImg, setUserImg] = useState(undefined);
    const {user, dispatch} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const formik = useFormik({
        initialValues: {
            'username': user.username,
            'email': user.email,
            'description': user.description,
            'from': user.from,
            'city': user.city
        },
        onSubmit: async values => {
            if(coverImg) {
                const data = new FormData();
                const fileName = Date.now() + coverImg.name;
                data.append('name', fileName);
                data.append('file', coverImg);
                values.coverPicture = fileName;
                try{
                    await axios.post('/upload', data)
                }catch(err) {}
            }
            if(userImg) {
                const data = new FormData();
                const fileName = Date.now() + userImg.name;
                data.append('name', fileName);
                data.append('file', userImg);
                values.profilePicture = fileName;
                try{
                    await axios.post('/upload', data)
                }catch(err) {}
            }
            editUserCall(user._id, {...values, userId: user._id}, dispatch);
            console.log(values)
        }
    })

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
                    <form onSubmit={formik.handleSubmit} className='profileSettingsFormWrapper'>
                      <div className='formLeft'> 
                            <img 
                                className='profileSettingsCoverImage' 
                                src={ coverImg 
                                        ? URL.createObjectURL(coverImg)
                                        : (user.profilePicture ? PF + user.coverPicture : `${PF}persons/no_cover.jpg`)
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
                          <div className='profileSettingsChangeImages'>
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
                          </div>
                      </div>
                      <div className='formRight'>
                          <div className='formRightFields'>
                              <div className='formRightField'>
                                  <label className='formRightLabel' htmlFor='username'>username</label>
                                  <input
                                      className='formRightInput'
                                      type='text' name='username'
                                      placeholder='Enter username...'
                                      onChange={formik.handleChange}
                                      value={formik.values.username}
                                    />
                              </div>
                              <div className='formRightField'>
                                  <label className='formRightLabel' htmlFor='email'>email</label>
                                  <input 
                                        className='formRightInput' 
                                        type='text' name='email' 
                                        placeholder='Ender email...' 
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                    />
                              </div>
                              <div className='formRightField'>
                                  <label className='formRightLabel' htmlFor='description'>description</label>
                                  <input 
                                        className='formRightInput' 
                                        type='text' name='description' 
                                        placeholder='Enter description...' 
                                        value={formik.values.description}
                                        onChange={formik.handleChange} 
                                    />
                              </div>
                              <div className='formRightField'>
                                  <label className='formRightLabel' htmlFor='from'>from</label>
                                  <input 
                                        className='formRightInput' 
                                        type='text' name='from' 
                                        placeholder='Enter from...' 
                                        value={formik.values.from} 
                                        onChange={formik.handleChange}
                                    />
                              </div>
                              <div className='formRightField'>
                                  <label className='formRightLabel' htmlFor='city'>city</label>
                                  <input 
                                        className='formRightInput' 
                                        type='text' name='city' 
                                        placeholder='Enter city...' 
                                        value={formik.values.city}
                                        onChange={formik.handleChange}
                                    />
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
