import axios from 'axios';
import { EditUserSuccess } from './apiCalls';
import { EditUserFail } from './apiCalls';

export {EditUserStart, EditUserSuccess, EditUserFail} from './context/AuthActions';

export const loginCall = async (userCredential, dispatch) => {
    dispatch({type: 'LOGIN_START'});
    try{
        const res = await axios.post('/auth/login', userCredential);
        dispatch({type: 'LOGIN_SUCCESS', payload: res.data}); 
    } catch(err) {
        dispatch({ type: 'LOGIN_FAIL', dispatch: err});
    }
}

export const editUserCall = async ( userId, updatedUserCredential, dispatch) => {
    console.log(updatedUserCredential)
    dispatch({type: 'EDIT_USER_START'});
    try{
        const res = await axios.put(`/users/${userId}`, updatedUserCredential);
        console.log(res.data)
        dispatch(EditUserSuccess(res.data));
    }catch(err) {
        dispatch(EditUserFail(err));
    }
}