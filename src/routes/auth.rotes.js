import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name='SignIn'
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />

      <AuthStack.Screen
        name='SignUp'
        component={SignUp}
        options={{
          headerStyle:{
            backgroundColor: '#0046c9',
            borderBottomWidth: 6,
            borderBottomColor: '#00b94a',
          },
          headerTintColor: '#fff',
          headerTitle: 'Voltar',
          headerBackTitle: false,
        }}
      />
    </AuthStack.Navigator>
  )
}

export default AuthRoutes;