import React from "react";
import { SafeAreaView, Text } from "react-native";
import Box from "./component/box";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 20, paddingTop: 40 }}>
      {/* Box 1 */}
      <Box
        title="Box 1"
        borderColor="blue"
        borderWidth={3}
        myCustomProp="Custom content for Box 1"
        style={{ backgroundColor: "#E8F6FF" }}
      >
        <Text style={{ fontSize: 18 }}>This is the first Box</Text>
      </Box>

      {/* Box 2 */}
      <Box
        title="Box 2"
        borderColor="green"
        borderWidth={5}
        myCustomProp="Custom content for Box 2"
        style={{ backgroundColor: "#F0FFF4" }}
      >
        <Text style={{ fontSize: 18, color: "green" }}>
          This is the second Box
        </Text>
      </Box>

      {/* Box 3 without title and myCustomProp */}
      <Box borderColor="red" borderWidth={1}>
        <Text style={{ fontSize: 18 }}>
          This is the third Box without a title
        </Text>
      </Box>
    </SafeAreaView>
  );
}
