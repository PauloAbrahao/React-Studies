import React from 'react'

import {GoogleOutlined} from '@ant-design/icons'

import firebase from 'firebase/compat/app';
import {auth} from '../firebase'

const Login = () => {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()

    auth.signInWithPopup(provider)
  }

  return (
    <div id='login-page'>
      <div id="login-card">
        <h2>Bem vindo(a) ao Unichat!</h2>

        <div
          className="login-button google"
          onClick={signInWithGoogle}
        >
          <GoogleOutlined /> Entrar com o Google
        </div>

        <br /> <br />
      </div>
    </div>
  )
}

export default Login