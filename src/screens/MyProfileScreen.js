import React, { memo } from "react";
import ProfileBackground from "../components/ProfileBackground";
import Header from "../components/Header";
import BackButton from "../components/BackButton";


// Default look for the profile screen
const MyProfileScreen = ({ navigation }) => (
    <ProfileBackground>
      <BackButton goBack={() => navigation.navigate("HomeScreen")} unsubscribe/>
      <Header>Your Profile</Header>
    </ProfileBackground>
  );

export default memo(MyProfileScreen);
