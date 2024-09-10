import React, { useEffect } from 'react';
import { View, Image, StyleSheet} from 'react-native';

const LogoPage = ({ navigation }) => {
  useEffect(() => {
    console.log("LogoPage mounted"); // Debug log

    // Check if navigation is passed correctly
    if (navigation) {
      console.log("Navigation prop available");
    } else {
      console.error("Navigation prop is not available");
    }


    // Navigate to Welcome page after 2 seconds
    const timer = setTimeout(() => {
      console.log("Navigating to Welcome"); // Debug log
      navigation.navigate('Welcome');
    }, 2000);

    // Clear timer if the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/topLogo.png')} style={styles.topLeftLogo} />
      <Image source={require('../../assets/MaskGroup.png')} style={styles.topRightLogo} />
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Image source={require('../../assets/bottomLogo.png')} style={styles.bottomRightLogo} />
      {/* <Text>Hello World1</Text> */}
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
  logo: {
    width: 400,
    height: 300,
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
  bottomRightLogo:{
    width: 300,
    height: 230,
    right: 0,
    bottom: 0,
    position: 'absolute',
  }
});

export default LogoPage;
