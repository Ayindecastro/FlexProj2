import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import TopBar from "../components/TopBar";

const HomeScreen = ({ navigation }) => (
  <Background>
    <TopBar/>
    <Logo />
    <Header>FLEX Trade</Header>

    <Paragraph>
     5C Food Marketplace
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate("LoginScreen")}>
      Login
    </Button>
    <Button mode="outline" onPress={() => navigation.navigate("RegisterScreen")}>
      Sign Up
    </Button>
    {/* <Button mode="outline" onPress={() => navigation.navigate("MyProfileScreen")}>
      Profile
    </Button> */}
  </Background>
);

export default memo(HomeScreen);
