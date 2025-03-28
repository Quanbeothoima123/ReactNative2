import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { products } from "../data/products";

const ProductCarousel = () => {
  return (
    <FlatList
      data={products}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    width: 159,
    height: 150,
    alignItems: "center",
    marginHorizontal: 10,
  },
  image: {
    width: 159,
    height: 117,
    borderRadius: 10,
  },
  name: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default ProductCarousel;
