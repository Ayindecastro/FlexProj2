import React, { memo } from "react";
import { ActivityIndicator, SnapshotViewIOS } from "react-native";
import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';
import Background from "../components/Background";
import { theme } from "../core/theme";
import config from "../core/config"

// intializaing database
const db = firebase.firestore();
// reading a collection
db.collection('users').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    // getting data from a doc
    console.log(doc.data())
  })
}).catch(function(error) {
  console.error("Retrieval failed", error);
  throw error;
});


const AuthLoadingScreen = ({ navigation }) => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // User is logged in
      navigation.navigate("MyProfileScreen");
    } else {
      // User is not logged in
      navigation.navigate("HomeScreen");
    }
  });

  return (
    <Background>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </Background>
  );
};

export default memo(AuthLoadingScreen);
