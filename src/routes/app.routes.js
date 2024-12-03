import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../pages/Home";
import New from "../pages/New";
import Profile from "../pages/Profile";

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
  return (
    <AppDrawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          borderColor: '#fff',
          paddingTop: 20,
        },

        drawerActiveBackgroundColor: '#0046c9',
        drawerActiveTintColor: '#fff',

        drawerInactiveBackgroundColor: '#f0f2ff',
        drawerInactiveTintColor: '#121212',

        drawerItemStyle: {
          marginBottom: 10,
        }
      }}
    >
      <AppDrawer.Screen
        name='Home'
        component={Home}
      />

      <AppDrawer.Screen
        name='Registrar'
        component={New}
      />

      <AppDrawer.Screen
        name="Perfil"
        component={Profile}
      />
    </AppDrawer.Navigator>
  )
}

export default AppRoutes