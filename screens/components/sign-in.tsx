import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import './sign-in.scss'; // Assuming the CSS is in a separate file named SignIn.css

const SignIn = () => {

  const goToSignIn = () => {
    // navigate('/login');
  };

  const goToSignUp = () => {
    // navigate('/signup');
  };

  return (
    <ImageBackground
      source={require('./sign-in.png')}
      style={styles.signInBackground}
    >
      <View style={styles.signInContainer}>
        <Text style={styles.label}>
          Shop Smarter, Earn Better With SempsunAI 2.0 Cashback Mall
        </Text>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.signInButton} onPress={goToSignIn}>
            <Text style={styles.signInButtonText}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUpButton} onPress={goToSignUp}>
            <Text style={styles.signUpButtonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    signInBackground: {
      width: 390,
      height: 852,
      justifyContent: 'center',
      alignItems: 'center',
    },
    signInContainer: {
      justifyContent: 'flex-end',
      width: 350,
      marginBottom: 20,
    },
    label: {
      fontSize: 30,
      fontWeight: '700',
      lineHeight: 36.57,
      letterSpacing: -1,
      marginBottom: 40,
      textAlign: 'left',
      color: '#000', // Adjust text color as needed
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    signInButton: {
      borderWidth: 1,
      borderColor: '#111',
      width: 120,
      height: 50,
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 30,
    },
    signInButtonText: {
      color: '#111',
      fontWeight: '700',
      fontSize: 16,
      lineHeight: 19.5,
    },
    signUpButton: {
      width: 220,
      height: 50,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: '#111',
      backgroundColor: '#111',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 30,
    },
    signUpButtonText: {
      color: '#fff',
      fontWeight: '700',
      fontSize: 16,
      lineHeight: 19.5,
    },
  });

export default SignIn;
