export const LoginStart = (userCredential) => ({
    type: 'LOGIN_START'
});

export const LoginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user
});

export const LoginFail = (error) => ({
    type: 'LOGIN_FAIL',
    payload: error
});

export const Follow = (userId) => ({
    type: 'FOLLOW',
    payload: userId
});

export const Unfollow = (userId) => ({
    type: 'UNFOLLOW',
    payload: userId
});

export const EditUserStart = () => ({
    type: 'EDIT_USER_START'
});

export const EditUserSuccess = (updatedUser) => ({
    type: 'EDIT_USER_SUCCESS',
    payload: updatedUser
});

export const EditUserFail = (error) => ({
    type: 'EDIT_USER_FAIL',
    payload: error
});