import React, { createContext, useState } from "react";

import api from "../services/api";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loadingAuth, setLoadingAuth] = useState(false)

  const navigation = useNavigation();

  async function signUp(nome, email, password) {
    setLoadingAuth(true);
    try{
      const response = await api.post('/users', {
        name: nome,
        password: password,
        email: email,
      })
      
      setLoadingAuth(false)
      navigation.goBack();

    }catch(err){
      console.log('ERRO AO TENTAR CADASTRAR. ERRO:', err)
      setLoadingAuth(false)
    }
  }

  async function signIn(email, password) {
    console.log('EMAIL TESTE: ', email)
    
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signUp, signIn, loadingAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider