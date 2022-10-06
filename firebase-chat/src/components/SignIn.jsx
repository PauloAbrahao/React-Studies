import React from 'react'

import firebase from 'firebase/compat/app';
import {auth} from '../firebase.js'
import { Button } from '@mui/material';

const SignIn = () => {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '90vh', alignItems: 'center' }}>
    <Button style={{ padding: '30px', fontSize: '20px', borderRadius: '0', fontWeight: '600' }} onClick={signInWithGoogle}>Entre com o Google</Button>
</div>
  )
}

export default SignIn