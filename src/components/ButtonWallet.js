import React, { memo } from "react";
import {TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

const ButtonWallet = ({onWalletPress, outerComponentStyle, innerComponentStyle}) => (
    <TouchableOpacity onPress = {onWalletPress} style = {outerComponentStyle}>
          <MaterialCommunityIconsIcon
            name="wallet"
            style={innerComponentStyle}
          ></MaterialCommunityIconsIcon>
    </TouchableOpacity>
);

export default memo(ButtonWallet);