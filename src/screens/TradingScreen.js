import React, { memo } from "react";
import { StyleSheet, View, ImageBackground} from "react-native";
import Profile from "../components/ProfileButton";
import Friends from "../components/FriendsButton";
import Settings from "../components/SettingsButton";
import Wallet from "../components/ButtonWallet";
import TopBar from "../components/TopBar";
import { screenWidth, screenHeight } from "../core/dimensions";


// const topBarH = (18/screenHeight * 100);
// console.log(topBarH);

// Profile screen
const TradingScreen = ({ navigation }) => (
  
  // {/* Profile Screen's panel conglomeration of components */}
  <View style={[styles.container]}>    
    

    {/* background image*/}
    <ImageBackground
      source={require("../assets/sampleImage.png")}
      style={styles.cardItemImagePlace}/>

    
    {/* buttons for lower panel*/}
    <View style={styles.buttonGroup}>

        {/* button to my profile screen */}
        <View style = {styles.homeContainer}>
        <Profile  
            onProfilePress = {() => navigation.navigate("MyProfileScreen")}
            outerComponentStyle = {styles.leftBtn} 
            innerComponentStyle = {styles.icon1} />
        </View>

      {/* button to trading screen */}
        <View style = {styles.walletContainer}>
        <Wallet
            onWalletPress = {() => navigation.navigate("TradingScreen")}
            outerComponentStyle = {styles.centerBtn1} 
            innerComponentStyle = {styles.icon2} />
        </View>

        {/* button friends search bar */}
        <View style = {styles.friendContainer}>
        <Friends
            onFriendPress = {() => navigation.navigate("FriendScreen")}
            outerComponentStyle = {styles.centerBtn2}
            innerComponentStyle = {styles.icon3} />
        </View>

        {/* button to edit his dining preferences,
        trading preferences, etc. */}
        <View style = {styles.settingsContainer}>
        <Settings
            onSettingsPress = {() => navigation.navigate("SettingsScreen")}
            outerComponentStyle = {styles.rightBtn}
            innerComponentStyle = {styles.icon4} />     
        </View>       
    </View>

      {/* top bar - white to allow user to see time/rest of bar */}
      <TopBar/>  
  </View>
  );


const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    flex: 1,
    alignItems: 'center',
  },
  cardItemImagePlace: {
    flex: 3,
    width: screenWidth,
  },
  backbuttonView: {
    position: "absolute",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 8,
    backgroundColor: "#6a5cff",
    width: screenWidth,
  },
  leftBtn: {
    padding: 8,
  },
  icon1: {
    fontSize: 28,
    color: "#000",
    opacity: 0.5,
  },
  centerBtn1: {
    padding: 8,
  },
  centerBtn2: {
    padding: 8,
  },
  icon2: {
    fontSize: 28,
    color: "#000",
    opacity: 0.5,
  },
  rightBtn: {
    padding: 8,
  },
  icon3: {
    fontSize: 28,
    color: "#000",
    opacity: 0.5,
  },
  icon4: {
    fontSize: 28,
    color: "#000",
    opacity: 0.5,
  },
  homeContainer: {
    width: screenWidth/4,
    alignItems: 'center',
    backgroundColor: "#6a5cff",
  },
  walletContainer: {
    width: screenWidth/4,
    alignItems: 'center',
    backgroundColor: "#6a5cff",
  },
  friendContainer: {
    width: screenWidth/4,
    alignItems: 'center',
    backgroundColor: "#6a5cff",
  },
  settingsContainer: {
    width: screenWidth/4,
    alignItems: 'center',
    backgroundColor: "#6a5cff",
  },
  
});

export default memo(TradingScreen);



