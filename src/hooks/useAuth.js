import React, { useContext, useState, createContext } from 'react';
import axios from 'axios';
import cookie from 'js-cookie';
import endPoints from '@services/api';

const AuthContext = createContext();

export const ProviderAuth = ({ children }) => {
  const auth = useProviderAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

const useProviderAuth = () => {
  const [user, setUser] = useState(null);

  const options = {
    Headers: {
      accept: '*/*',
      'content-Type': 'aplication/json',
    },
  };
  const signIn = async (email, password) => {
    const {
      data: { access_token },
    } = await axios.post(endPoints.auth.login, { email, password }, options);
    if (access_token) cookie.set('token', access_token, { expires: 5 });

    axios.defaults.headers.Authorization = `Bearer ${cookie.get('token')}`;
    const { data: userProfile } = await axios(endPoints.auth.profile);
    setUser(userProfile);
  };
  const logOut = () => {
    cookie.remove('token');
    setUser(null);
    delete axios.defaults.headers.Authorization;
    window.location.href = '/';
  };
  const auth = async () => {
    try {
      axios.defaults.headers.Authorization = `Bearer ${cookie.get('token')}`;
      const { data: userProfile } = await axios(endPoints.auth.profile);
      setUser(userProfile);
    } catch (e) {
      window.location.href = '/';
    }
  };
  return {
    user,
    signIn,
    logOut,
    auth,
  };
};
