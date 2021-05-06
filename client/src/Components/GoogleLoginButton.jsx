import {useState} from 'react';
import config from '../config';
import services from '../services';

import {Row, Col} from 'react-bootstrap';
import {GoogleLogin} from 'react-google-login';

const GoogleLoginButton = () => {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [error, setError] = useState('')
  const [data, setData] = useState({})

  const onSuccess = async (response) => {
    try {
      const {data} = await services.auth.google({idToken: response.tokenObj.id_token})
      setData(data)
      setIsUserLoggedIn(true)
    } catch (e) {
      setError('There is error in login please try again later');
    }
  }

  const onFailure = () => {
       setError('There is error in login please try again later');
  }

  if (isUserLoggedIn) {
    return (
      <p>Welcome {data.user.name}!</p>
    )
  }

  return (
    <>
    {error && <p className="error">{error}</p>}
    <GoogleLogin
      clientId={config.common.google.clientId}
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
  />
 </>
 )

}

export { GoogleLoginButton  }
