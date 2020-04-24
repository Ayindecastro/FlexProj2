import React, { memo } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { screenWidth, screenHeight } from "../core/dimensions";


const topBar = () => (
    <View style = {styles.containerTopBar}/>
)


const styles = StyleSheet.create({
    containerTopBar: {
        backgroundColor: '#c9b2ba',
        top: 0,
        width: screenWidth,
        height: '2.69%', 
        // height: 18,
        position: 'absolute',
    }
});

export default memo(topBar);

