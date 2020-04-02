import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import MaterialCardWithButtons from "../components/MaterialCardWithButtons.js";

function MyProfileScreenDesign(props) {
  return (
    <View style={styles.container}>
      <MaterialCardWithButtons
        style={styles.materialCardWithButtons}
      ></MaterialCardWithButtons>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(63,7,114,1)"
  },
  materialCardWithButtons: {
    width: 386,
    height: 812,
    marginLeft: -11
  }
});

export default memo(MyProfileScreenDesign);
