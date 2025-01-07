import React from "react";
import { View, Text, StyleSheet } from "react-native";
const SquareBox = ({ color, title }) => {
  return (
    <View style={[styles.box, { backgroundColor: color }]}>
      <Text>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "plum",
  },
});
export default SquareBox;
