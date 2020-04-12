import {StyleSheet} from 'react-native';
import { memo } from "react";
import { screenWidth, screenHeight } from "../core/dimensions";

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
      backgroundColor: '#151716',
      position: "absolute",
      alignItems: 'center',
      justifyContent: 'center',
      width: 225,
      height: 225,
      marginVertical: 150,    
    },
    school: {
      // todo - change color and name
      // based on school
      backgroundColor: 'maroon',
      position: "absolute",
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
      width: 100,
      height: 30,
      marginVertical: 370,    
    },
    mealContainer: {
      alignItems: "center",
      justifyContent: "center",
      position: 'absolute',
      flexDirection: 'row',
      marginVertical: 425,
      width: 325,
      height: screenHeight / 8,
      backgroundColor: "#151716",
    },
    flexContainer: {
      backgroundColor: "#151716",
      borderWidth: 2,
      borderColor: '#151716',
    },
    swipeContainer: {
      backgroundColor: "#151716",
      borderWidth: 2,
      borderColor: '#151716',
    },
    schoolFont: {
      fontSize: 24,
      color: 'white',
    },
    flexFont: {
      fontSize: 24,
      color: 'white',
    },
    spaceFont: {
      fontSize: 24,
      color: '#151716',
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
      backgroundColor: "#151716",
      width: 200,
      bottom: 0,
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
    thumbnail: {
      width: 300,
      height: 300,
      resizeMode: "contain"
    }, 
});

export default memo(styles);