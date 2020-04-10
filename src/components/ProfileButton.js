import React, { memo } from "react";
import {TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

// used Wallet icon to create a reusable button component
const ButtonProfle = ({onProfilePress, outerComponentStyle, innerComponentStyle}) => (
    <TouchableOpacity onPress = {onProfilePress} style = {outerComponentStyle}>
          <MaterialCommunityIconsIcon
            name="home"
            style={innerComponentStyle}
          ></MaterialCommunityIconsIcon>
    </TouchableOpacity>
);

export default memo(ButtonProfle);