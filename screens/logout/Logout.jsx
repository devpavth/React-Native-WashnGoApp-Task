// screens/Logout.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Logout = ({ navigation }) => {
  const handleLogout = () => {
    console.log('Logging out');
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.welcomeText}>Welcome Ramesh</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    logo: {
        height: 170, 
        width: 230, 
        alignSelf: 'center', 
        marginBottom: 80, 
        marginTop: -270,
    },
    welcomeText: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 80,
      color: '#000',
    },
    logoutButton: {
      backgroundColor: '#A3CFFF',
      width: 350,
      paddingVertical: 12,
      paddingHorizontal: 40,
      borderRadius: 25,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 2,
      marginTop: 80,
    },
    logoutText: {
      color: '#000',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

export default Logout;
