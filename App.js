import React from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";

const App = () => {
  // Danh sách sản phẩm
  const products = [
    { id: "1", name: "Pixel 4xl", price: "100$" },
    { id: "2", name: "Iphone 15promax", price: "1500$" },
    { id: "3", name: "Iqoo 13", price: "500$" },
  ];

  // Hàm xử lý khi bấm vào sản phẩm
  const handleProductPress = (productName) => {
    Alert.alert("Thông báo", `Tên sản phẩm: ${productName}`);
  };

  // Hàm hiển thị từng item
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleProductPress(item.name)}>
      <View style={styles.itemContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 16,
    paddingTop: 40,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productName: {
    fontSize: 16,
    fontWeight: "500",
  },
  productPrice: {
    fontSize: 14,
    color: "#555",
  },
});

export default App;
