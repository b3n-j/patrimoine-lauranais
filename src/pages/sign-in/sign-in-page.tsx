import React from 'react';
import styles from './sign-in-page.module.scss';
import { useHistory, useLocation } from 'react-router-dom';
import { DeviceType } from '../../hooks';
import { Button } from 'components';

type Props = {
  deviceType: DeviceType
}

export function setToken() {
  sessionStorage.setItem('token', 'jesuisletoken');
}

export function getToken() {
  return sessionStorage.getItem('token');
}

const SignInPage: React.FC<Props> = ({}) => {
  const history = useHistory();
  const location = useLocation();
  //@ts-ignore
  const target = location.state.target;


  function signIn() {
    console.log("Sign in")
    console.log("add token")
    console.log("target: " + target)
    setToken();
    history.push(target)
  }

  return (
    <div className={styles.signIn}>
      <h1>Sign In</h1>
      <Button label="Sign In" onClick={signIn}/>
    </div>
  );
}

export default SignInPage;
