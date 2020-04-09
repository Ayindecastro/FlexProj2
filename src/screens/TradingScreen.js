import React, { memo } from "react";
import Background from "../components/Background";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import SwitchComp from "../components/SwitchComp"; 


// Default look for screen
const TradingScreen = ({ navigation }) => (
    <Background>
      <BackButton goBack={() => navigation.navigate("MyProfileScreen")}/>
      <Header>Trade Screen</Header>
      <SwitchComp/>
    </Background>
  );

export default memo(TradingScreen);
