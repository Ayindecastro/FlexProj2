import React, { memo } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { screenWidth, screenHeight } from "../core/dimensions";


const topBarTwo = () => (
    <View style = {styles.containerTopBarTwo}/>
)


const styles = StyleSheet.create({
    containerTopBarTwo: {
        backgroundColor: '#c9b2ba',
        top: 0,
        width: screenWidth,
        height: '2.69%', 
        // height: 18,
        position: 'absolute',
    }
});

export default memo(topBarTwo);

