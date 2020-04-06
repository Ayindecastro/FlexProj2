import React, { memo } from "react";
import { Text, StyleSheet, View, ImageBackground, Button} from "react-native";
import Wallet from "../components/ButtonWallet";
import Friends from "../components/FriendsButton";
import Settings from "../components/SettingsButton";
import BackButton from "../components/BackButton";
import TopBar from "../components/TopBar";
import { screenWidth, screenHeight } from "../core/dimensions";
const topBarH = (18/screenHeight * 100);
console.log(topBarH);

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
      <View style = {styles.walletContainer}>
        <Wallet  
          onWalletPress = {() => navigation.navigate("TradingScreen")}
          outerComponentStyle = {styles.leftBtn} 
          innerComponentStyle = {styles.icon1} />
      </View>

      {/* button friends search bar */}
      <View style = {styles.friendContainer}>
        <Friends
          onFriendPress = {() => navigation.navigate("FriendScreen")}
          outerComponentStyle = {styles.centerBtn}
          innerComponentStyle = {styles.icon2} />
      </View>

      {/* button to edit his dining preferences,
        trading preferences, etc. */}
      <View style = {styles.settingsContainer}>
        <Settings
          onSettingsPress = {() => navigation.navigate("SettingsScreen")}
          outerComponentStyle = {styles.rightBtn}
          innerComponentStyle = {styles.icon3} />     
      </View>       
    </View>

      {/* this is the profile picture - need to figure out how to import*/}
      <View style = {styles.containerPic}>
        <ImageBackground 
          source = {require("../assets/default_profile.png")}
          style = {styles.profilePic}>
          <View style = {styles.editButtonView}>
            <Button 
              title= "Edit Profile Picture"/>
          </View>
        </ImageBackground>
      </View>

      {/* top bar - white to allow user to see time/rest of bar */}
      <TopBar topBarStyle = {styles.containerTopBar} />
    
      {/* meal container - holds flex and swipe amounts */}
      <View style = {styles.mealContainer}>
        {/* flex amount container */}
        <View style = {styles.flexContainer}>
          <Text style = {styles.flexFont}>
            Flex
          </Text>
        </View>

        {/* meal swipe amount container */}
        <View style = {styles.swipeContainer}>
          <Text style = {styles.swipeFont}>
            Swipes
          </Text>
        </View>
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
    alignItems: 'center',
  },
  cardItemImagePlace: {
    flex: 3,
    width: screenWidth,
  },
  backbuttonView: {
    position: "absolute",
  },
  containerPic: {
    backgroundColor: 'white',
    position: "absolute",
    alignItems: 'center',
    justifyContent: 'center',
    width: 225,
    height: 225,
    marginVertical: 150,    
  },
  containerTopBar: {
    backgroundColor: 'white',
    top: 0,
    width: screenWidth,
    height: '2.69%', 
    // height: 18,
    position: 'absolute',
  },
  mealContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    flexDirection: 'row',
    marginVertical: 425,
    marginHorizontal: 100,
  },
  flexContainer: {
    backgroundColor: 'purple',
    borderWidth: 2,
    borderColor: 'black',
  },
  swipeContainer: {
    backgroundColor: 'purple',
    borderWidth: 2,
    borderColor: 'black',
  },
  flexFont: {
    fontSize: 24,
    color: 'white',
  },
  swipeFont: {
    fontSize: 24,
    color: 'white',
  },  
  profilePic: {
    width: 200,
    height: 200,
  },
  editButtonView: {
    position: "absolute",
    backgroundColor: "white",
    width: 200,
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
  },
  walletContainer: {
    width: screenWidth/3,
    alignItems: 'center',
  },
  friendContainer: {
    width: screenWidth/3,
    alignItems: 'center',
  },
  settingsContainer: {
    width: screenWidth/3,
    alignItems: 'center',
  },
  
});

export default memo(MyProfileScreen);



