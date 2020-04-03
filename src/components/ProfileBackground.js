import React, { memo } from "react";
import { Text, StyleSheet, View} from "react-native";
import MaterialCardWithButtons from "../components/MaterialCardWithButtons.js";
// import Overlay from 'react-native-modal-overlay';



function MyProfileScreenDesign(props) {
  
  return (
    <View style={styles.container}>
      <MaterialCardWithButtons style={styles.materialCardWithButtons}>
        {/* <Overlay isVisible={this.state.isVisible} >
            <Text>Hello from Overlay!</Text>
        </Overlay> */}
      </MaterialCardWithButtons>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "rgba(63,7,114,1)"
  },
  materialCardWithButtons: {
    width: 386,
    height: 812,
    marginLeft: -11
  }
});

export default memo(MyProfileScreenDesign);
