import React from "react";
import { Text, StyleSheet, View, ImageBackground, Switch } from "react-native";
import Wallet from "../components/ButtonWallet";
import Settings from "../components/SettingsButton";
import Friends from "../components/FriendsButton";
import Profile from "../components/ProfileButton";
import TopBar from "../components/TopBar";
import {screenWidth, screenHeight } from "../core/dimensions";
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { Title } from "react-native-paper";
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
    backgroundColor: "#c9b2ba",
  },
  diningLocationsContainter2: {
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    flexDirection: 'row',
    marginVertical: 325,
    width: 200,
    height: screenHeight / 8,
    backgroundColor: "#c9b2ba",
  },
  diningHeader: {
    fontSize: 20,
    color: 'black',
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
  sectionContainter: {
    backgroundColor: "#c9b2ba",
    borderWidth: 2,
    borderColor: '#c9b2ba',
  },
  textSelectionContainer: {
    backgroundColor: "#c9b2ba",
    borderWidth: 2,
    borderColor: '#c9b2ba',
  },
  bufferContainer: {
    backgroundColor: "#c9b2ba",
    borderWidth: 2,
    borderColor: '#c9b2ba',
    
  },
  bufferFont: {
    fontSize: 24,
    color: '#c9b2ba',
  },
  
});

const items = [
  // this is the parent or 'item'
  {
    name: 'Dining Halls',
    id: 0,
    // these are the children or 'sub items'
    children: [
      {
        name: 'Collins',
        id: 10,
        color: 'black',
      },
      {
        name: 'Malott',
        id: 17,
      },
      {
        name: 'Frary',
        id: 13,
      },
      {
        name: 'Frank',
        id: 14,
      },
      {
        name: 'Hoch-Shanahan',
        id: 15,
      },
      {
        name: 'McConnel',
        id: 16,
      },
    ],
  },
];

const colorSettings = {
  primary: '#c48b9f',
  cancel: '#ba6b6c',
  //disabled: '#ba6b6c',
  chipColor: '#fff',
  
}
  export default class ourSettingScreen extends React.Component {
    state = {
      switchValue1: false,
      switchValue2: false
    }

    
    state = {
      selectedItems: [],
    };
    
    onSelectedItemsChange = (selectedItems) => {
      this.setState({ selectedItems });
    };
    render() {
    
      return (
       

      
      <View style={[styles.container]}>   
    

        {/* background image*/}
        <ImageBackground
            source={require("../assets/darkbackground.png")}
          style={styles.cardItemImagePlace}/>

        <View style={styles.diningLocationsContainter}>

        
        {/* https://github.com/renrizzolo/react-native-sectioned-multi-select */}

    

       
        
        <Title>Dining Hall Preferences:</Title>
        <SectionedMultiSelect
          items={items}
        
          colors = {colorSettings}
          uniqueKey="id"
          subKey="children"
          showCancelButton = {true}
          hideSearch = {true}
         modalWithSafeAreaView = {true}
         modalWithTouchable = {true}
          selectText="Preferences:"
          //alwaysShowSelectText = {true}
         
          showDropDowns={false}
          readOnlyHeadings={true}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
        />
       
    
    

       

       
        </View> 

        <View style={styles.diningLocationsContainter2}>
        <Text style={styles.diningHeader}> FLEX Balance </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#c48b9f" }}
          thumbColor={this.state.switchValue1 ? "#f4f3f4" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          value={this.state.switchValue1}
          onValueChange = {this._switchState1}
        />
          <Text style={styles.diningHeader}> Swipes Balance: </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#c48b9f" }}
          thumbColor={this.state.switchValue2 ? "#f4f3f4" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          value={this.state.switchValue2}
          onValueChange = {this._switchState2}
        />
        </View> 

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

        {/* top bar - white to allow user to see time/rest of bar */}
        <TopBar/>  

       
      </View>
  );
}
      _switchState1 = async () => {
        this.setState({switchValue1 : !this.state.switchValue1}) 
      }

      _switchState2 = async () => {
        this.setState({switchValue2 : !this.state.switchValue2}) 
      }


}

    
    



