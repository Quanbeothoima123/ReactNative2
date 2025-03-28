import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import CategoryCarousel from "../component/CategoryCarousel";
import OfferCard from "../component/OfferCard";
import ProductCarousel from "../component/ProductCarousel";
const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/img/Rectangle 1.png")}
        style={styles.background}
      >
        <View style={styles.header}>
          <Image
            source={require("../assets/img/Ellipse 22.png")}
            style={styles.profileImage}
          />

          <View style={{ marginLeft: 60 }}>
            <Text>Your Location</Text>
            <View style={styles.locationContainer}>
              <Icon name="map-marker" size={20} color="blue" />
              <Text style={{ marginLeft: 5 }}>Savar, Dhaka</Text>
            </View>
          </View>

          <Icon
            name="bell"
            size={25}
            color="black"
            style={styles.notificationIcon}
          />
        </View>
      </ImageBackground>
      <View style={styles.searchFood}>
        <Icon name="search" size={20} color="white" style={styles.icon} />
        <TextInput
          placeholder="Search your food"
          placeholderTextColor="white"
          style={styles.input}
        />
        <Icon name="sliders" size={22} color="white" style={styles.icon} />
      </View>
      <CategoryCarousel />
      <OfferCard
        image={require("../assets/img/Burger.jpg")}
        title="BURGER"
        discount={10}
        rating={4.9}
        reviews="3k+"
        avatars={[
          require("../assets/img/user1.jpg"),
          require("../assets/img/user2.jpg"),
          require("../assets/img/user3.jpg"),
        ]}
      />
      <View style={styles.dotPani}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={[styles.dot, styles.activeDot]} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 20,
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 15, color: "#242424", fontWeight: "900" }}>
          Popular Items
        </Text>
        <Text>View All</Text>
      </View>
      <ProductCarousel />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: 179, // Đảm bảo chiều cao phù hợp
  },
  header: {
    paddingTop: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Đẩy icon sang hai bên
    paddingHorizontal: 20, // Tạo khoảng cách hai bên
  },
  profileImage: {
    width: 49,
    height: 49,
    borderRadius: 25,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  notificationIcon: {
    marginLeft: "auto", // Đẩy icon sang phải
  },
  searchFood: {
    marginTop: -20,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4a3aff", // Màu xanh giống ảnh
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: "85%",
    alignSelf: "center",
  },
  icon: {
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    color: "white",
    fontSize: 16,
  },
  dotPani: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "lightgray",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "black",
  },
});

export default HomeScreen;
