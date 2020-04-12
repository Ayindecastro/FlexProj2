import * as React from 'react';
import { Button, Image, View, Text, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { memo } from "react";
import Wallet from "../components/ButtonWallet";
import Friends from "../components/FriendsButton";
import Settings from "../components/SettingsButton";
import LogOut from "../components/LogoutButton";
import TopBar from "../components/TopBar";
import { screenWidth, screenHeight } from "../core/dimensions";
import firebase from "firebase/app";
import "firebase/auth";



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

export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
  };

  // fire base signout method
  signOutUser = async () => {
    try {
        await firebase.auth().signOut();
    } catch (e) {
        console.log(e);
    }
  }
  

  render() {
    let { image } = this.state;

    return (
      
      // {/* Profile Screen's panel conglomeration of components */}
    <View style={[styles.container]}>    
        

    {/* background image*/}
    <ImageBackground
        source={require("../assets/blackbackground.png")}
        style={styles.cardItemImagePlace}/>

    
    {/* buttons for lower panel*/}
    <View style={styles.buttonGroup}>

        {/* button to trading screen */}
        <View style = {styles.walletContainer}>
        <Wallet  
            onWalletPress = {() => this.props.navigation.navigate("TradingScreen")}
            outerComponentStyle = {styles.leftBtn} 
            innerComponentStyle = {styles.icon1} />
        </View>

        {/* button friends search bar */}
        <View style = {styles.friendContainer}>
        <Friends
            onFriendPress = {() => this.props.navigation.navigate("FriendScreen")}
            outerComponentStyle = {styles.centerBtn}
            innerComponentStyle = {styles.icon2} />
        </View>

        {/* button to edit his dining preferences,
        trading preferences, etc. */}
        <View style = {styles.settingsContainer}>
        <Settings
            onSettingsPress = {() => this.props.navigation.navigate("SettingsScreen")}
            outerComponentStyle = {styles.rightBtn}
            innerComponentStyle = {styles.icon3} />     
        </View>       
    </View>

        {/* this is the profile picture - need to figure out how to import*/}
        


        <View style = {styles.containerPic}>
            <ImageBackground 
                source = {{ uri: image }} 
                style = {styles.profilePic}>
                <View style = {styles.editButtonView}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                        <Button title="Edit Profile Picture" onPress={this._pickImage} />
                    </View>
                </View>
            </ImageBackground>
        </View>

        <View style = {styles.school}>
        <Text style = {styles.schoolFont}>
            CMC 
        </Text>
        </View>

        {/* top bar - white to allow user to see time/rest of bar */}
        <TopBar/>
    
        {/* meal container - holds flex and swipe amounts */}
        <View style = {styles.mealContainer}>
        {/* flex amount container */}
        <View style = {styles.flexContainer}>
            <Text style = {styles.flexFont}>
            FLEX: $20   
            </Text>
        </View>

        {/* buffer view to space apart meals and swipe */}
        <View style = {styles.bufferContainer}>
            <Text style = {styles.bufferFont}>
                Adequate 
            </Text>
        </View>

        {/* meal swipe amount container */}
        <View style = {styles.swipeContainer}>
            <Text style = {styles.swipeFont}>
            Swipes: 6
            </Text>
        </View>
        </View>

        

    {/* button back to home
    needs to be after everything else in order to overlay with position = 'absolute' */}
    <LogOut style = {styles.backbuttonView} onLogOutPress = {signOutUser}/>

    
    </View>
    );
  }









  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
}
