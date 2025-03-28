import React, { useState } from "react";
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { categories } from "../data/categories"; // Import danh mục từ data.js

const CategoryCarousel = () => {
  const [selectedCategory, setSelectedCategory] = useState(1); // Mặc định chọn ID = 1

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.categoryItem,
              selectedCategory === item.id && styles.selectedItem,
            ]}
            onPress={() => setSelectedCategory(item.id)}
          >
            <Image source={item.avatar} style={styles.image} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  categoryItem: {
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    padding: 24,
    paddingHorizontal: 25,
    alignItems: "center",
    marginRight: 15,
  },
  selectedItem: {
    backgroundColor: "#1FC67A", // Màu xanh khi được chọn
  },
  image: {
    width: 35,
    height: 52,
  },
});

export default CategoryCarousel;
