import { useContext, useEffect } from 'react';

import { get } from './handling';
import  UserContext  from '../Components/UserContext';

const getMe = () => get('users/me');

export const useUserRequired = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      getMe().then(resp => setUser(resp.data));
    }
  }, [user, setUser]);
};