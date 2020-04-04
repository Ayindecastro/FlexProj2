import React, { memo } from "react";
import {TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

const SettingsButton = ({onSettingsPress, outerComponentStyle, innerComponentStyle}) => (
    <TouchableOpacity onPress = {onSettingsPress} style = {outerComponentStyle}>
          <MaterialCommunityIconsIcon
            name="cogs"
            style={innerComponentStyle}
          ></MaterialCommunityIconsIcon>
    </TouchableOpacity>
);

export default memo(SettingsButton);

