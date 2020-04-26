import React, { memo, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
import {
  emailValidator,
  passwordValidator,
  nameValidator
} from "../core/utils";
import { signInUser } from "../api/auth-api";
import Toast from "../components/Toast";
import TopBar from "../components/TopBar";
import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';
import config from "../core/config";
// import * as admin from 'firebase-admin';


// intializaing database
const db = firebase.firestore();
//const form = document.querySelector('#login-form');
//document.querySelector('#login-form');

// saving data 
// listen for a submit even on the form
// form.addEventListener('submit', (event) => {
//   // prevents default from 
//   event.preventDefault();
//   // get a reference to collection
//   db.collection("users").add({
//     name: form.name.value,
//     email: form.email.value,
//     password:  form.password.value,
//   });
//   form.email.value = '';
//   form.name.value = '';
//   form.password.value = '';
// });

// function user(doc) {
//   let userEmail = document.createElement('span');
//   let password = document.createElement('span');

//   userEmail.textContent = doc.data().email;
//   password.textContent = doc.data().password;
// }



const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const _onSignUpPressed = async () => {
    if (loading) return;

    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    setLoading(true);

    const response = await signInUser({
      name: name.value,
      email: email.value,
      password: password.value
    });

    if (response.error) {
      setError(response.error);
    }

    // TODO add on complete lisetener
    // sends out email verification to current user
    firebase.auth().currentUser.sendEmailVerification();
    
    // finds current UID and uses that as the name of the document
    // for the details of the user's registration information
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User UID
        let uid = user.uid;
        let data = {
          name: name.value,
          email: email.value,
          password:  password.value,
        }
        {/* if sign-up works then add the user's name, email,
        and password to the database */}
        db.collection("users").doc(uid).set(data)
        .catch(function(error) {
            console.error("User data did not write to database", error);
            throw error;
          });    
      }
    });
    
    
    setLoading(false);
  };

  return (
    <Background>
      <TopBar/>
      <BackButton goBack={() => navigation.navigate("HomeScreen")} />

      <Logo />

      <Header>Create Account</Header>

      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({ value: text, error: "" })}
        error={!!name.error}
        errorText={name.error}
      />

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
        autoCapitalize="none"
      />
      

      <Button
        loading={loading}
        mode="outlinedNew"
        onPress={_onSignUpPressed}
        style={styles.button}
      >
        Sign Up
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>

      <Toast message={error} onDismiss={() => setError("")} />
    </Background>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary
  },
  button: {
    marginTop: 24
  },
  row: {
    flexDirection: "row",
    marginTop: 4
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary
  }
});

export default memo(RegisterScreen);
