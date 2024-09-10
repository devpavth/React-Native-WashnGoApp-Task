import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-paper';

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')} 
        style={styles.logo}
      />
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>Fill in the below form and add life to </Text>
      <Text style={styles.subtitle}>your car!</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <View style={styles.inputWrapper}>
            <Image
                source={require('../../assets/user.png')} 
                style={styles.icon}
            />
            <TextInput placeholder="Enter your name" style={styles.input} />
        </View>
      </View>

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

      <View style={styles.agreementContainer}>
        <CheckBox value={false} />
        <Text style={styles.agreementText}>
          Agree with <Text style={styles.termsLink}>Terms & Conditions</Text>
        </Text>
      </View>

      <Button 
        mode="contained" 
        onPress={() => navigation.navigate('SignIn')} 
        style={styles.signInButton}
        labelStyle={styles.signInButtonText}
      >
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
    marginBottom: 8, 
    marginTop: -10,
},

title: { 
    fontSize: 30, 
    // fontWeight: 'bold', 
    color: '#000',
    marginVertical: 8,
    fontFamily: 'Poppins-Bold',
},
subtitle: { 
    fontSize: 16, 
    // fontWeight: 'bold', 
    fontFamily: 'Poppins-Medium',
},
inputContainer: { 
    marginBottom: 8, 
},

label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5, 
    color: '#000',
    marginVertical: 6,
    fontFamily: 'Poppins-Regular',
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
    padding: 4, 
    fontSize: 14,
    fontStyle: 'italic',
},

icon: { 
    marginHorizontal: 10 
},

agreementContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginVertical: 10,
    fontFamily: 'Poppins-Regular',

},
agreementText: { 
    marginLeft: 10,
    color: '#000000',
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
},
termsLink: { 
    textDecorationLine: 'underline',
    color: '#777',
    fontFamily: 'Poppins-Regular',
},
signInButton: { 
    backgroundColor: '#A3CFFF', 
    paddingVertical: 8, 
    borderRadius: 30, 
    marginTop: 8, 
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins-Regular',
},

signInButtonText: {
    fontSize: 18,
    // fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Poppins-Bold',
},
signInText: { 
    textAlign: 'center', 
    marginVertical: 10,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
signInLink: { 
    color: '#000',
    textDecorationLine: 'underline',
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
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
    fontFamily: 'Poppins-Regular',
}
});

export default SignUp;
