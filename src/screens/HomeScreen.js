import React, { memo } from "react";
import Background from "../components/Background";
import {StyleSheet} from 'react-native';
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import TopBarTwo from "../components/TopBarTwo";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
icon1: {
  color: "#000",
},
});

const HomeScreen = ({ navigation }) => (
  <Background>
    <TopBarTwo/>
    <Logo />
    <Header style = {styles.icon1}>FLEX Trade</Header>

    <Paragraph>
     5C Food Marketplace
    </Paragraph>
    {/* <Button mode="containedNew" onPress={() => navigation.navigate("LoginScreen")}>
      Login
    </Button> */}
    <Button mode="outlinedNew" onPress={() => navigation.navigate("LoginScreen")}>
      Login
    </Button>
    <Button mode="outlinedNew" onPress={() => navigation.navigate("RegisterScreen")}>
      Sign Up
    </Button>
    {/* <Button mode="outline" onPress={() => navigation.navigate("MyProfileScreen")}>
      Profile
    </Button> */}
  </Background>
);

export default memo(HomeScreen);
