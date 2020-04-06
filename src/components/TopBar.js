import React, { memo } from "react";
import { View } from "react-native";


const topBar = ({topBarStyle}) => (
    <View style = {topBarStyle}/>
)

export default memo(topBar);

