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

// const styles = StyleSheet.create({
//     icon1: {
//         fontSize: 24,
//         color: "#000",
//         opacity: 0.5
//     },
// });

export default memo(ButtonWallet);