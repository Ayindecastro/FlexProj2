import React, { memo } from "react";
import {TouchableOpacity, StyleSheet, Text} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";


// used Wallet icon to create a reusable button component
const LogoutBtn = ({onLogOutPress}) => (
    <TouchableOpacity onPress = {onLogOutPress} style = {styles.container}>
          <Text style = {styles.LogOut}>
              Logout
          </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
      top: 10 + getStatusBarHeight(),
      left: 20,
      position: "absolute",
    },
    LogOut: {
        fontSize: 20,
        color: 'white',
    }
});

export default memo(LogoutBtn);