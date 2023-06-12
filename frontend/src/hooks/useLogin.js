import React, { useState } from 'react'
import { ecoModaDB } from '../api/ecoModaDB'

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(true)

  const [userIsLogin, setUserIsLogin] = useState(false)

  // const handleForm = async ({ email, password }) => {
  // 	console.log(email, password)

  // 	const res = await userRequest.signIn(email, password)

  // 	if (res.data.success) {
  // 		navigator.navigate('StackNavigation')
  // 	} else {
  // 		setAlert(true)
  // 	}
  // }

  const postLogin = async (email, password) => {
    const loginPromise = ecoModaDB.post('/signin', { email, password })

    const res = await Promise(loginPromise)

    setUserIsLogin(res.data.success)

    setIsLoading(false)

    return userIsLogin
  }

  return {
    postLogin,
    isLoading,
    userIsLogin
  }
}
