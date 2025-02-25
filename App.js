import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import PhoneNumberInput from "./component/screens/PhoneNumberInput";
import HomeScreen from "./component/screens/HomeScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PhoneNumberInput">
        <Stack.Screen
          name="PhoneNumberInput"
          component={PhoneNumberInput}
          options={{ title: "Nhập số điện thoại" }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Trang chủ" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
