import React, { useState } from "react";
import ReactDom from "react-dom";
import { Text, StyleSheet, View, ImageBackground, Switch } from "react-native";
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import Wallet from "../components/ButtonWallet";
import Friends from "../components/FriendsButton";
import LogOut from "../components/LogoutButton";
import Profile from "../components/ProfileButton";
import TopBar from "../components/TopBar";
import {screenWidth, screenHeight } from "../core/dimensions";

// const topBarH = (18/screenHeight * 100);
// console.log(topBarH);

const styles = StyleSheet.create({

  diningLocationsContainter: {
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    flexDirection: 'row',
    marginVertical: 125,
    width: 200,
    height: screenHeight / 8,
    backgroundColor: "#151716",
  },
  diningLocationsContainter2: {
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    flexDirection: 'row',
    marginVertical: 325,
    width: 200,
    height: screenHeight / 8,
    backgroundColor: "#151716",
  },
  diningHeader: {
    fontSize: 20,
    color: 'white',
  },
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
  centerBtn: {
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
  walletContainer: {
    width: screenWidth/3,
    alignItems: 'center',
    backgroundColor: "#6a5cff",
  },
  friendContainer: {
    width: screenWidth/3,
    alignItems: 'center',
    backgroundColor: "#6a5cff",
  },
  settingsContainer: {
    width: screenWidth/3,
    alignItems: 'center',
    backgroundColor: "#6a5cff",
  },

  
});


  export default class ourSettingScreen extends React.Component {
    state = {
      switchValue: false
    }

    render() {
    
      return (
    
    
      <View style={[styles.container]}>   
    
        {/* background image*/}
        <ImageBackground
          source={require("../assets/blackbackground.png")}
          style={styles.cardItemImagePlace}/>

        <View style={styles.diningLocationsContainter}>
          <Text style={styles.diningHeader}> Dining Locations: </Text>
           {/* Got this from https://reactnative.dev/docs/switch */}
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={this.state.switchValue ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          value={this.state.switchValue}
          onValueChange = {(switchValue) => this.setState((switchValue))}
        />
        </View> 

        <View style={styles.diningLocationsContainter2}>
          <Text style={styles.diningHeader}> Show Balance: </Text>
           {/* Got this from https://reactnative.dev/docs/switch */}
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={this.state.switchValue ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          value={this.state.switchValue}
          onValueChange = {(switchValue) => this.setState((switchValue))}
        />
        </View> 

        {/* buttons for lower panel*/}
        <View style={styles.buttonGroup}>

          {/* button to trading screen */}
          <View style = {styles.walletContainer}>
            <Profile 
              onProfilePress = {() => navigation.navigate("MyProfileScreen")}
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
            <Wallet
              onWalletPress = {() => navigation.navigate("TradingScreen")}
              outerComponentStyle = {styles.rightBtn}
              innerComponentStyle = {styles.icon3} />     
          </View>       
        </View>

        {/* top bar - white to allow user to see time/rest of bar */}
        <TopBar/>  

       
      </View>
  );
}
}

    
    



