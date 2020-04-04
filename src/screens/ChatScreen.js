import React, { memo } from "react";
import Background from "../components/Background";
import Header from "../components/Header";
import BackButton from "../components/BackButton";


// Default look for screen
const ChatScreen = ({ navigation }) => (
    <Background>
      {/* <BackButton goBack={() => navigation.navigate("MyProfileScreen")}/> */}
      <Header>Chat Screen</Header>
    </Background>
  );

export default memo(ChatScreen);
