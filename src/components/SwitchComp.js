import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

export default function SwitchComp() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#6a5cff", true: "green" }}
        thumbColor={isEnabled ? "white" : "white"}
        ios_backgroundColor="#6a5cff"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
  }
});

