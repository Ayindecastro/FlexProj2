import React, { memo } from "react";
import {TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

const FriendsButton = ({onFriendPress, outerComponentStyle, innerComponentStyle}) => (
    <TouchableOpacity onPress = {onFriendPress} style = {outerComponentStyle}>
          <MaterialCommunityIconsIcon
            name="account-group"
            style={innerComponentStyle}
          ></MaterialCommunityIconsIcon>
    </TouchableOpacity>
);

export default memo(FriendsButton);

