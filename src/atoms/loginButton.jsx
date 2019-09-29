import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '../contexts/auth0';
import { setUser } from '../redux/user/actions';

const Button = () => {
  const auth0 = useAuth0();
  const dispatch = useDispatch();
  const localUser = useSelector(({ user }) => user);

  const getUser = () => {
    console.log(localUser);
  };

  const login = async () => {
    try {
      await auth0.loginWithPopup();
      const userData = await auth0.getUser();
      dispatch(setUser(userData));
    } catch (e) {
      console.error(e);
    }
  };

  const logout = async () => {
    try {
      await auth0.logout();
      dispatch(setUser(null));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <button type="button" onClick={login}>Login</button>
      <button type="button" onClick={logout}>Logout</button>
      <button type="button" onClick={getUser}>Get user</button>
    </>
  );
};

export default Button;
