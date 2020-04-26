import * as React from 'react';
import { Button, Image, View, Text, StyleSheet, ImageBackground} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import Profile from "../components/ProfileButton";
import Friends from "../components/FriendsButton";
import Settings from "../components/SettingsButton";
import Wallet from "../components/ButtonWallet";
import LogOut from "../components/LogoutButton";
import TopBar from "../components/TopBar";
import firebase, { database } from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';
import { screenWidth, screenHeight } from "../core/dimensions";
import { State } from 'react-native-gesture-handler';


// intializaing database
const db = firebase.firestore();

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
    backgroundColor: '#c9b2ba',
    position: "absolute",
    alignItems: 'center',
    justifyContent: 'center',
    width: 225,
    height: 225,
    marginVertical: 150,    
  },
  cmc: {
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
  scripps: {
    // todo - change color and name
    // based on school
    backgroundColor: 'green',
    position: "absolute",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 100,
    height: 30,
    marginVertical: 370,    
  },
  mudd: {
    // todo - change color and name
    // based on school
    backgroundColor: 'black',
    position: "absolute",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 100,
    height: 30,
    marginVertical: 370,    
  },
  pomona: {
    // todo - change color and name
    // based on school
    backgroundColor: 'blue',
    position: "absolute",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 100,
    height: 30,
    marginVertical: 370,    
  },
  pitzer: {
    // todo - change color and name
    // based on school
    backgroundColor: 'orange',
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
    backgroundColor: "#c9b2ba",
  },
  flexContainer: {
    backgroundColor: "#c9b2ba",
    borderWidth: 2,
    borderColor: '#c9b2ba',
  },
  swipeContainer: {
    backgroundColor: "#c9b2ba",
    borderWidth: 2,
    borderColor: '#c9b2ba',
  },
  muddFont: {
    fontSize: 24,
    color: 'orange',
  },
  cmcFont: {
    fontSize: 24,
    color: 'white',
  },
  pomonaFont: {
    fontSize: 24,
    color: 'orange',
  },
  pitzerFont: {
    fontSize: 24,
    color: 'white',
  },
  scrippsFont: {
    fontSize: 24,
    color: 'white',
  },

  flexFont: {
    fontSize: 24,
    color: 'black',
  },
  bufferFont: {
    fontSize: 24,
    color: '#c9b2ba',
  },
  spaceFont: {
    fontSize: 24,
    color: '#151716',
  },
  swipeFont: {
    fontSize: 24,
    color: 'black',
  },
  profilePic: {
    width: 200,
    height: 200,
  },
  editButtonView: {
    position: "absolute",
    backgroundColor: "#c9b2ba",
    width: 200,
    bottom: 0,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 8,
    backgroundColor: "#c48b9f",
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
    backgroundColor: "#c48b9f",
  },
  walletContainer: {
    width: screenWidth/4,
    alignItems: 'center',
    backgroundColor: "#c48b9f",
  },
  friendContainer: {
    width: screenWidth/4,
    alignItems: 'center',
    backgroundColor: "#c48b9f",
  },
  settingsContainer: {
    width: screenWidth/4,
    alignItems: 'center',
    backgroundColor: "#c48b9f",
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  }, 

});

let HolderFunc = props => {
  let Holder = React.useState(null);
}


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User UID
    let uid = user.uid;  
      
    // obtaining the URI of the image from the database
    db.collection('profile').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
          // getting data from a doc
          if (doc.data().UID == uid) {
            Holder =  doc.data().imageURI;
            console.log(doc.data().imageURI);
            console.log("This is Holder: " + Holder);
          }
        })
      }).catch(function(error) {
        console.error("Retrieval 1 failed", error);
        throw error;
      });          
}});

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
        source={require("../assets/darkbackground.png")}
        style={styles.cardItemImagePlace}/>

    
    {/* buttons for lower panel*/}
    <View style={styles.buttonGroup}>

        {/* button to my profile screen */}
        <View style = {styles.homeContainer}>
        <Profile  
            onProfilePress = {() => this.props.navigation.navigate("MyProfileScreen")}
            outerComponentStyle = {styles.leftBtn} 
            innerComponentStyle = {styles.icon1} />
        </View>

      {/* button to trading screen */}
        <View style = {styles.walletContainer}>
        <Wallet
            onWalletPress = {() => this.props.navigation.navigate("TradingScreen")}
            outerComponentStyle = {styles.centerBtn1} 
            innerComponentStyle = {styles.icon2} />
        </View>

        {/* button friends search bar */}
        <View style = {styles.friendContainer}>
        <Friends
            onFriendPress = {() => this.props.navigation.navigate("FriendScreen")}
            outerComponentStyle = {styles.centerBtn2}
            innerComponentStyle = {styles.icon3} />
        </View>

        {/* button to edit his dining preferences,
        trading preferences, etc. */}
        <View style = {styles.settingsContainer}>
        <Settings
            onSettingsPress = {() => this.props.navigation.navigate("SettingsScreen")}
            outerComponentStyle = {styles.rightBtn}
            innerComponentStyle = {styles.icon4} />     
        </View>       
    </View>

        {/* this is the profile picture - need to figure out how to import*/}
        <View style = {styles.containerPic}>
            <ImageBackground 
                source = {{ uri: image }} 
                style = {styles.profilePic}>
                <View style = {styles.editButtonView}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 100 }} />}
                        <Button title="Edit Profile Picture" onPress={this._pickImage} />
                    </View>
                </View>
            </ImageBackground>
        </View>

        <View style = {styles.mudd}>
        <Text style = {styles.muddFont}>
            Mudd
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
    <LogOut style = {styles.backbuttonView} onLogOutPress = {this.signOutUser}/>

    </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  };

  // gets permission from device to use photos
  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  // allows for picking of image in profile picture component
  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            // User UID
            let uid = user.uid;
            // update the URI in database
            db.collection("profile").doc(uid).set({
              UID: uid,
              imageURI: result.uri,
            })
            .catch(function(error) {
                console.error("User data did not write to database", error);
                throw error;
            });    
              
            // obtaining the URI of the image from the database
            db.collection('profile').get().then((snapshot) => {
                snapshot.docs.forEach(doc => {
                  // getting data from a doc
                  if (doc.data().UID == uid) {
                    this.setState({ image: doc.data().imageURI})
                    console.log(doc.data().imageURI);
                  }
                })
              }).catch(function(error) {
                console.error("Retrieval failed", error);
                throw error;
              });          
        }});
      }
      // console.log(result.uri);
    } catch (E) {
      console.log(E);
    }
  };
}
