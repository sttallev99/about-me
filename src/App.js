import { Route, Routes, redirect } from 'react-router-dom'
import { useContext } from 'react';

import Home from "./pages/home/Home";
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { AuthContext } from './context/AuthContext';

function App() {

  const {user} = useContext(AuthContext)

  return (
    <Routes>
      <Route path='/' element={ user ? <Home /> : <Login />} />
      <Route path='/login' element={ user ? redirect('/') : <Login />} />
      <Route path='/register' element={ user ? redirect('/') : <Register />} />
      <Route path='/profile/:username' element={<Profile />} />
    </Routes>
  );
}

export default App;
