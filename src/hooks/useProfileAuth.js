import { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import cockie from 'js-cookie';
import { useAuth } from '@hooks/useAuth';
import endPoints from '@services/api';

const useProfileAuth = () => {
  const { auth } = useAuth();
  const router = useRouter();
  const request = async () => {
    if (cockie.get('token')) {
      axios.defaults.headers.Authorization = `Bearer ${cockie.get('token')}`;
      const { data: userProfile } = await axios(endPoints.auth.profile);
      auth(userProfile);
    }
  };
  useEffect(() => {
    try {
      request();
    } catch (e) {
      router.push('/login');
    }
  }, []);
};

export default useProfileAuth;
