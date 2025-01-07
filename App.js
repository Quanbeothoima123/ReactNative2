import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Box from "./component/box";
import SquareBox from "./component/squareBox";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 20, paddingTop: 40 }}>
      <View>
        <SquareBox color={"yellow"} title={"Hello World"}>
          {""}
        </SquareBox>
      </View>
      <View>
        <SquareBox color={"green"} title={"Xin chào mọi người"}>
          {""}
        </SquareBox>
      </View>
    </SafeAreaView>
  );
}
