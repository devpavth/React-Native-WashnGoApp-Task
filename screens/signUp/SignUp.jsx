import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-paper';

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')} // Add your logo here
        style={styles.logo}
      />
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>Fill in the below form and add life to </Text>
      <Text style={styles.subtitle}>your car!</Text>

      <View style={styles.inputContainer}>
        <Icon name="user" size={20} style={styles.icon} />
        <TextInput placeholder="Enter your name" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} style={styles.icon} />
        <TextInput placeholder="xyz@gmail.com" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} style={styles.icon} />
        <TextInput placeholder="password" secureTextEntry={true} style={styles.input} />
      </View>

      <View style={styles.agreementContainer}>
        <CheckBox value={false} />
        <Text style={styles.agreementText}>
          Agree with <Text style={styles.termsLink}>Terms & Conditions</Text>
        </Text>
      </View>

      <Button mode="contained" onPress={() => navigation.navigate('SignIn')} style={styles.button}>
        Sign Up
      </Button>

      <Text style={styles.signInText}>
        Already have an account?{' '}
        <Text style={styles.signInLink} onPress={() => navigation.navigate('SignIn')}>
          Sign In
        </Text>
      </Text>

      <Image source={require('../../assets/MaskGroupBottomRight.png')} style={styles.bottomRightLogo} />
      <Text style={styles.signUpBelowText}>By login or sign up, you agree to our terms of use and privacy policy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#fff', 
    justifyContent: 'center' 
},

logo: { 
    height: 170, 
    width: 230, 
    alignSelf: 'center', 
    marginBottom: 10, 
    marginTop: -10,
},

title: { 
    fontSize: 30, 
    fontWeight: 'bold', 
    color: '#000',
    marginVertical: 10,
},

  subtitle: { 
    fontSize: 16, 
    fontWeight: 'bold', 
},
  inputContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    borderBottomWidth: 1, 
    borderBottomColor: '#ccc', 
    marginBottom: 15 

  },
  input: { 
    flex: 1, 
    padding: 10, 
    fontSize: 16 

  },
  icon: { 
    marginHorizontal: 10 

  },
  agreementContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginVertical: 10 

  },
  agreementText: { 
    marginLeft: 10 

  },
  termsLink: { 
    color: '#1E90FF' 

  },
  button: { 
    backgroundColor: '#87CEEB', 
    paddingVertical: 10, 
    borderRadius: 25, 
    marginTop: 20 

  },
  signInText: { 
    textAlign: 'center', 
    marginVertical: 10 

  },
  signInLink: { 
    color: '#1E90FF' 

  },
  bottomRightLogo: {
    width: 250,
    height: 150,
    right: 0,
    bottom: 0,
    position: 'absolute',
},
signUpBelowText: {
    textAlign: 'center',
    marginHorizontal: 10,
}
});

export default SignUp;
