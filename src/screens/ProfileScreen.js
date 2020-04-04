import React, { memo } from "react";
import Background from "../components/Background";
import Header from "../components/Header";
import BackButton from "../components/BackButton";


// Default look for screen
const ProfileScreen = ({ navigation }) => (
    <Background>
      <BackButton goBack={() => navigation.navigate("MyProfileScreen")}/>
      <Header>Profile Screen</Header>
    </Background>
  );

export default memo(ProfileScreen);
