import React from "react";
import { View, StyleSheet } from "react-native";

// Custom Component
const Rectangle = ({ width, height, color }) => {
  return (
    <View
      style={[
        styles.rectangle,
        { width: width, height: height, backgroundColor: color },
      ]}
    />
  );
};

// StyleSheet
const styles = StyleSheet.create({
  rectangle: {
    borderRadius: 8, // Ví dụ: Bo góc
    margin: 10, // Khoảng cách mới
  },
});

export default Rectangle;
