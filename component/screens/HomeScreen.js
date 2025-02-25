import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chào mừng!</Text>
      <Text style={styles.subtitle}>
        Bạn đã đăng nhập với số điện thoại: {route.params.phoneNumber}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default HomeScreen;
