import {
    FETCH_USER,
    FETCH_USER_FAILED,
    FETCH_USER_SUCCESS
  } from '../constants';
  
  import fetchUserSerivce from '../services';
  
  export default function getUser (username) {
    // return dispatch => {
    //   dispatch(fetchUser());
    //   fetchUserSerivce(username)
    //     .then(user => dispatch(fetchUserSuccess(user)))
    //     .catch(error => dispatch(fetchUserFailed(error)))
    // }
    return async dispatch => {
        try {
            dispatch(fetchUser());
            const {data} = await fetchUserSerivce(username);
            dispatch(fetchUserSuccess(data));
        } catch (error) {
            dispatch(fetchUserFailed(error));
        }
    }
  }
  
  const fetchUser = () => ({
    type: FETCH_USER
  });
  
  const fetchUserSuccess = user => ({
    type: FETCH_USER_SUCCESS,
    payload: {
      user
    },
  })
  
  const fetchUserFailed = error => ({
    type: FETCH_USER_FAILED,
    payload: { error }
  })