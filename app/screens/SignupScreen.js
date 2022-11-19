import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { db } from '../../firebaseConfig'

function SignUpScreen() {
  const [email, onChangeEmail] = useState("email");
  const [password, onChangePassword] = useState('password');
  const auth = getAuth();

  return (
    <View style={styles.container}>
      <Text>Hopefully this will start working soon...</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
      />
      <Button onPress={async () => {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      }}></Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default SignUpScreen;