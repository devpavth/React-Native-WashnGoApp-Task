import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Wash N Go</Text> */}
      <Image source={require('../../assets/topLogo.png')} style={styles.topLeftLogo} />
      <Image source={require('../../assets/MaskGroup.png')} style={styles.topRightLogo} />
      <Image source={require('../../assets/logo.png')} style={styles.logo} />

      <Text style={styles.title}>Sparkle & Shine Transform</Text>
      <Text style={styles.subtitle}>Your Drive with Every Wash!</Text>
      
      <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.buttonText}>Let's Start</Text>
      </TouchableOpacity>

      <Text style={styles.signInLink}>
        Already have an account?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('SignIn')}>
          Sign in
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  title: {
    fontSize: 20,
    marginTop: 40,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  subtitle: {
    fontSize: 20, 
    marginBottom: 20,
    textAlign: 'center',
    marginHorizontal: 20,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  signInLink: {
    marginTop: 20,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  link: {
    color: '#000',
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-Regular',
  },
  signInButton: {
    backgroundColor: '#A3CFFF',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    width: 280,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: 'Poppins-SemiBold',
  },
  topRightLogo: {
    width: 210,
    height: 230,
    top: 0,
    right: 0,
    position: 'absolute',
  },
  topLeftLogo:{
    width: 250,
    top: 0,
    left: 0,
    position: 'absolute',
  },
  logo: {
    width: 400,
    height: 300,
    marginTop: 100,
  },
});

export default Welcome;
