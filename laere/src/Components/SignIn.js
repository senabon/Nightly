import React, { useEffect, useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { HOME_URL } from '../config/urls';
import UserContext from './UserContext';
import { validateTokenAndObtainSession } from '../utilities/validation';

const { REACT_APP_GOOGLE_CLIENT_ID, REACT_APP_BASE_BACKEND_URL } = process.env;

const Login = () => {
    const history = useNavigate();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const queryParams = new URLSearchParams(history.location.search);

    const error = queryParams.get('error');

    if (error) {
      console.log(error);
      history.replace({ search: null });
    }
  }, [history]);

  const handleUserInit = useCallback(
    resp => {
      if (resp.ok) {
        setUser(resp.data);
        history.push(HOME_URL);
      } else {
        console.log(resp.data[0]);
      }
    },
    [history, setUser]
  );
    const onGoogleLoginSuccess = useCallback(
        response => {
          const idToken = response.tokenId;
          const data = {
            email: response.profileObj.email,
            first_name: response.profileObj.givenName,
            last_name: response.profileObj.familyName
          };
      
          validateTokenAndObtainSession({ data, idToken })
            .then(handleUserInit)
            .catch(console.log());
        },
        [handleUserInit]
      );

const openGoogleLoginPage = useCallback(() => {
        const googleAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
        const redirectUri = 'api/v1/auth/login/google/';
    
        const scope = [
          'https://www.googleapis.com/auth/userinfo.email',
          'https://www.googleapis.com/auth/userinfo.profile'
        ].join(' ');
    
        const params = {
          response_type: 'code',
          client_id: REACT_APP_GOOGLE_CLIENT_ID,
          redirect_uri: `${REACT_APP_BASE_BACKEND_URL}/${redirectUri}`,
          prompt: 'select_account',
          access_type: 'offline',
          scope
        };
    
        const urlParams = new URLSearchParams(params).toString();
    
        window.location = `${googleAuthUrl}?${urlParams}`;
      }, []);

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}  // your Google app client ID
      buttonText="Sign in with Google"
      onSuccess={onGoogleLoginSuccess} // perform your user logic here
      onFailure={({details}) => console.log(details)} // handle errors here
    />
  );
};

export default Login