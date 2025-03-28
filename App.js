import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import "react-native-gesture-handler";

import Icon from "react-native-vector-icons/Ionicons";

// Import các màn hình
import HomeScreen from "./screens/HomeScreen";
import InBoxScreen from "./screens/InBoxScreen";
import ProfileScreen from "./screens/ProfileScreen";
import OrderScreen from "./screens/OrderScreen";

// Tạo Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home-outline";
            } else if (route.name === "Inbox") {
              iconName = "chatbubble-outline";
            } else if (route.name === "Orders") {
              iconName = "cart-outline";
            } else if (route.name === "Profile") {
              iconName = "person-outline";
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#3498db",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: { height: 60, paddingBottom: 5 },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Orders" component={OrderScreen} />
        <Tab.Screen name="Inbox" component={InBoxScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
