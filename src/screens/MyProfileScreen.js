import React, { memo } from "react";
import { StyleSheet, View, ImageBackground, Button} from "react-native";
import Wallet from "../components/ButtonWallet";
import Friends from "../components/FriendsButton";
import Settings from "../components/SettingsButton";
import BackButton from "../components/BackButton";
import { screenWidth } from "../core/dimensions";


const profileWidth= screenWidth * 0.5;
console.log(profileWidth);

// Profile screen
const MyProfileScreen = ({ navigation }) => (
  
  // {/* Profile Screen's panel conglomeration of components */}
  <View style={[styles.container]}>    
    

    {/* background image*/}
    <ImageBackground
      source={require("../assets/sampleImage.png")}
      style={styles.cardItemImagePlace}/>

    
    {/* buttons for lower panel*/}
    <View style={styles.buttonGroup}>

      {/* button to trading screen */}
      <Wallet  
        onWalletPress = {() => navigation.navigate("TradingScreen")}
        outerComponentStyle = {styles.leftBtn} 
        innerComponentStyle = {styles.icon1} />

      {/* button friends search bar */}
      <Friends
        onFriendPress = {() => navigation.navigate("FriendScreen")}
        outerComponentStyle = {styles.centerBtn}
        innerComponentStyle = {styles.icon2} />

      {/* button to edit his dining preferences,
        trading preferences, etc. */}
      <Settings
        onSettingsPress = {() => navigation.navigate("SettingsScreen")}
        outerComponentStyle = {styles.rightBtn}
        innerComponentStyle = {styles.icon3} />            
    </View>

    <View style = {styles.defaultProPicView}>
      <ImageBackground 
        source = {require("../assets/default_profile.png")}
        style = {styles.profilePic}>
        <View style = {styles.editButtonView}>
          <Button 
            title= "Edit Profile Picture"/>
        </View>
      </ImageBackground>
    </View>

    {/* button back to home
    needs to be after everything else in order to overlay with position = 'absolute' */}
    <BackButton style = {styles.backbutton} goBack = {() => navigation.navigate("HomeScreen")}/>
  </View>
  );


const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    flex: 1,
  },
  cardItemImagePlace: {
    flex: 3,
    width: screenWidth,
  },
  backbuttonView: {
    position: "absolute",
  },
  defaultProPicView: {
    position: "absolute",
    // width: 200,
    // height: 200,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center', 
    alignItems: 'center',
    // backgroundColor: "white",
  },
  profilePic: {
    width: 200,
    height: 200,
  },
  editButtonView: {
    position: "absolute",
    justifyContent: "center",
    backgroundColor: "white",
    color: "black",
    bottom: 0,
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



