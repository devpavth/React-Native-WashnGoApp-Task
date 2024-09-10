import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-paper';

const SignIn = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')} 
        style={styles.logo}
      />
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subtitle}>Hi! Welcome back, you </Text>
      <Text style={styles.subtitle}>have been missed</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputWrapper}>
            <Image
                source={require('../../assets/mail.png')} 
                style={styles.icon}
            />
            <TextInput placeholder="xyz@gmail.com" style={styles.input} />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputWrapper}>
            <Image
                source={require('../../assets/lock.png')} 
                style={styles.icon}
            />
            <TextInput placeholder="password" secureTextEntry={true} style={styles.input} />
            <Image
                source={require('../../assets/eye.png')} 
                style={styles.icon}
            />
        </View>
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      <Button 
        mode="contained" 
        onPress={() => navigation.navigate('Logout')} 
        style={styles.signInButton}
        labelStyle={styles.signInButtonText}
      >
        Sign In
      </Button>

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.or}>or</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.socialLoginContainer}>
        <Image
            source={require('../../assets/google.png')} 
            style={styles.socialButton}
        />
        <Image
            source={require('../../assets/apple.png')} 
            style={styles.socialButton}
        />
      </View>

      <Text style={styles.signUpText}>
        Don't have an account?{' '}
        <Text style={styles.signUpLink} onPress={() => navigation.navigate('SignUp')}>
          Sign Up
        </Text>
      </Text>
      <Image source={require('../../assets/MaskGroupBottomLeft.png')} style={styles.bottomLeftLogo} />
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
    marginBottom: 15, 
},

label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5, 
    color: '#000',
    marginVertical: 10,
},

inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 10,
    padding: 5,
    backgroundColor: '#fff',
    marginTop: 10,
},


  input: { 
    flex: 1, 
    padding: 10, 
    fontSize: 16,
    fontStyle: 'italic',
},

  icon: { 
    marginHorizontal: 10 
},

  forgotPassword: { 
    textAlign: 'right', 
    color: '#000000',
    textDecorationLine: 'underline',
},


signInButton: { 
    backgroundColor: '#A3CFFF', 
    paddingVertical: 10, 
    borderRadius: 30, 
    marginTop: 20, 
    justifyContent: 'center',
    alignItems: 'center',
},

signInButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
},

orContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginVertical: 15 
  },

  line: { 
    height: 1, 
    width: 100, 
    backgroundColor: '#A3CFFF', 
    marginHorizontal: 10 
  },

  or: { 
    textAlign: 'center', 
    color: '#666161', 
    fontSize: 16 
  },


  socialLoginContainer: { 
    flexDirection: 'row', 
    justifyContent: 'center' 
},

  socialButton: { 
    paddingHorizontal: 20,
    marginHorizontal: 10,
},

  signUpText: { 
    textAlign: 'center', 
    marginVertical: 20,
    marginBottom: 20,
},

  signUpLink: { 
    color: '#000000',
    textDecorationLine: 'underline',
},

bottomLeftLogo: {
    width: 200,
    height: 120,
    left: 0,
    bottom: 0,
    position: 'absolute',
},
signUpBelowText: {
    textAlign: 'center',
    marginHorizontal: 10,
}
});

export default SignIn;
