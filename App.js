import React from "react";
import {
  SectionList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  FlatList,
  ScrollView,
} from "react-native";

const App = () => {
  const products = [
    { id: "1", name: "Pixel 4xl", price: "100$" },
    { id: "2", name: "Iphone 15promax", price: "1500$" },
    { id: "3", name: "Iqoo 13", price: "500$" },
  ];

  const groupedProducts = [
    {
      title: "iPhone",
      data: ["iPhone 15 Pro", "iPhone 14", "iPhone SE (2023)"],
    },
    {
      title: "Google Pixel",
      data: ["Google Pixel 8 Pro", "Google Pixel 7a", "Google Pixel Fold"],
    },
    { title: "Vivo", data: ["Vivo X90 Pro", "Vivo Y78", "Vivo V29 5G"] },
    {
      title: "Các sản phẩm mới nhất",
      data: ["Samsung Galaxy S23 Ultra", "OnePlus 12", "Xiaomi 14 Pro"],
    },
  ];

  const handleProductPress = (productName) => {
    Alert.alert("Thông báo", `Tên sản phẩm: ${productName}`);
  };

  const renderItemSection = ({ item }) => (
    <TouchableOpacity onPress={() => handleProductPress(item)}>
      <View style={styles.itemContainer}>
        <Text style={styles.productName}>{item}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleProductPress(item.name)}>
      <View style={styles.itemContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* SectionList */}
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.listTitle}>Danh sách nhóm sản phẩm</Text>
          <SectionList
            sections={groupedProducts}
            keyExtractor={(item, index) => item + index}
            renderItem={renderItemSection}
            renderSectionHeader={({ section }) => (
              <View style={styles.headerContainer}>
                <Text style={styles.sectionTitle}>{section.title}</Text>
              </View>
            )}
            nestedScrollEnabled
          />
        </View>

        {/* FlatList */}
        <View>
          <Text style={styles.listTitle}>Danh sách sản phẩm</Text>
          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            nestedScrollEnabled
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 16,
    paddingTop: 40,
  },
  listTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
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
    color: "#888",
  },
  headerContainer: {
    padding: 10,
    backgroundColor: "yellow",
    borderRadius: 20,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    color: "blue",
  },
});

export default App;
