import React, { memo } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { screenWidth, screenHeight } from "../core/dimensions";


const topBar = ({topBarStyle}) => (
    <View style = {styles.containerTopBar}/>
)


const styles = StyleSheet.create({
    containerTopBar: {
        backgroundColor: 'white',
        top: 0,
        width: screenWidth,
        height: '2.69%', 
        // height: 18,
        position: 'absolute',
    }
});

export default memo(topBar);

