// screens/Logout.js
import React from 'react';
import { View, Button } from 'react-native';

const Logout = ({ navigation }) => {
  const handleLogout = () => {
    console.log('Logging out');
    navigation.navigate('SignIn');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Log Out" onPress={handleLogout} />
    </View>
  );
};

export default Logout;
