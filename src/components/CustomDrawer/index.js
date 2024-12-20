import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';

import { DrawerItemList, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import { AuthContext } from '../../contexts/auth';

export default function CustomDrawer(props) {
  const { user, signOut } = useContext(AuthContext)

  return (
    <DrawerContentScrollView>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
        <Image
          source={require('../../assets/Logo.png')}
          style={{ width: 90, height: 90 }}
          resizeMode='contain'
        />

        <Text style={{ fontSize: 18, marginTop: 14, color: '#000' }}>
          Bem vindo
        </Text>

        <Text
          style={{ fontSize: 17, fontWeight: 'bold', marginBottom: 15, paddingHorizontal: 20, color: '#000' }}
          numberOfLines={1}>
          {user && user.name}
        </Text>
      </View>
      <DrawerItemList {...props} />

      <DrawerItem
      {...props}
      label='Sair do app'
      onPress={() => signOut()}
      style={{
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 30,
        marginTop: 190
      }}
      labelStyle={{
        color: '#000'
      }}
      />
    </DrawerContentScrollView>
  );
}