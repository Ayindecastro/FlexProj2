import React, { memo } from "react";
import Background from "../components/Background";
import Header from "../components/Header";


const MyProfileScreen = ({ navigation }) => (
    <Background>
      <Header>Your Profile</Header>

      {/* <Button mode="contained" onPress={() => navigation.navigate("LoginScreen")}>
        Login
      </Button> */}

    </Background>
  );

export default memo(MyProfileScreen);
