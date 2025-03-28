import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      {/* Nút Back */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Ảnh đại diện */}
      <View style={styles.profileContainer}>
        <Image
          source={require("../assets/img/Ellipse 22.png")}
          style={styles.avatar}
        />
        <TouchableOpacity style={styles.editIcon}>
          <Ionicons name="pencil" size={16} color="white" />
        </TouchableOpacity>
        <Text style={styles.name}>Rakibul Hasan</Text>
        <Text style={styles.email}>rakibhrbrand@gmail.com</Text>
      </View>

      {/* Danh sách chức năng */}
      <View style={styles.menu}>
        <MenuItem icon="home-outline" text="Home" />
        <MenuItem icon="card-outline" text="My Card" />
        <View style={styles.darkModeContainer}>
          <Ionicons name="moon-outline" size={22} color="black" />
          <Text style={styles.menuText}>Dark Mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={(value) => setIsDarkMode(value)}
          />
        </View>
        <MenuItem icon="location-outline" text="Track Your Order" />
        <MenuItem icon="settings-outline" text="Settings" />
        <MenuItem icon="help-circle-outline" text="Help Center" />
      </View>

      {/* Nút Logout */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
        <Ionicons name="log-out-outline" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

// Component Menu Item
const MenuItem = ({ icon, text }) => (
  <TouchableOpacity style={styles.menuItem}>
    <Ionicons name={icon} size={22} color="black" />
    <Text style={styles.menuText}>{text}</Text>
    <Ionicons name="chevron-forward" size={22} color="gray" />
  </TouchableOpacity>
);

export default ProfileScreen;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    paddingHorizontal: 20,
  },
  backButton: {
    marginTop: 40,
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 120,
    backgroundColor: "#6C63FF",
    padding: 5,
    borderRadius: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  email: {
    fontSize: 14,
    color: "gray",
  },
  menu: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  darkModeContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  logoutButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6C63FF",
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 20,
  },
  logoutText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    marginRight: 10,
  },
});
