import React, { memo } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Wallet from "../components/ButtonWallet";
import Friends from "../components/FriendsButton";
import Settings from "../components/SettingsButton"
import { screenWidth } from "../core/dimensions";


// Profile screen
const MyProfileScreen = ({ navigation }) => (
        <View style={[styles.container, styles.materialCardWithButtons]}>
          {/* background image*/}
          <Image
            source={require("../assets/sampleImage.png")}
            style={styles.cardItemImagePlace}
          ></Image>
          {/* buttons for lower panel*/}
          <View style={styles.buttonGroup}>

            {/* button to trading screen */}
            <Wallet  
              onWalletPress = {() => navigation.navigate("TradingScreen")}
              outerComponentStyle = {styles.leftBtn} 
              innerComponentStyle = {styles.icon1} />

            {/* button friends search bar */}
            <Friends
              onFriendPress = {() => navigation.navigate("TradingScreen")}
              outerComponentStyle = {styles.centerBtn}
              innerComponentStyle = {styles.icon2} />

            {/* button to edit his dining preferences,
              trading preferences, etc. */}
            <Settings
              onSettingsPress = {() => navigation.navigate("TradingScreen")}
              outerComponentStyle = {styles.rightBtn}
              innerComponentStyle = {styles.icon3} />            
          </View>
        </View>
  );


const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    flex: 1,
    backgroundColor: "#FFF",
    flexWrap: "nowrap",
    elevation: 3,
    shadowOffset: {
      height: 2,
      width: -2,
    },
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden",
  },
  cardItemImagePlace: {
    flex: 1,
    minHeight: 180,
    width: screenWidth,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 8,
  },
  leftBtn: {
    padding: 8,
  },
  icon1: {
    fontSize: 24,
    color: "#000",
    opacity: 0.5,
  },
  centerBtn: {
    padding: 8,
  },
  icon2: {
    fontSize: 24,
    color: "#000",
    opacity: 0.5,
  },
  rightBtn: {
    padding: 8,
  },
  icon3: {
    fontSize: 24,
    color: "#000",
    opacity: 0.5,
  }
});

export default memo(MyProfileScreen);



