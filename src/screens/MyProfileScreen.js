import React, { memo } from "react";
import Background from "../components/Background";
import Header from "../components/Header";

// Default look for the profile screen
const MyProfileScreen = ({ navigation }) => (
    <Background>
      <Header>Your Profile</Header>
    </Background>
  );

export default memo(MyProfileScreen);
