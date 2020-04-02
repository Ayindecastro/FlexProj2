import React, { memo } from "react";
import Background from "../components/ProfileBackground";
import Header from "../components/Header";
import BackButton from "../components/BackButton";


// Default look for the profile screen
const MyProfileScreen = ({ navigation }) => (
    <Background>
      <BackButton goBack={() => navigation.navigate("HomeScreen")} unsubscribe/>
      <Header>Your Profile</Header>
    </Background>
  );

export default memo(MyProfileScreen);
