import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { AppContext } from "../context/AppContext";

const ProfileScreen = () => {
  const { setIsLoggedIn } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Button title="Sign Out" onPress={() => setIsLoggedIn(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24 },
});

export default ProfileScreen;
