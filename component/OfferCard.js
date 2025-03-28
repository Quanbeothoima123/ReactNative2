import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const OfferCard = ({ image, title, discount, rating, reviews, avatars }) => {
  return (
    <View style={styles.card}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>Today's Hot Offer</Text>

        <View style={styles.row}>
          <View style={styles.avatars}>
            {avatars.map((avatar, index) => (
              <Image key={index} source={avatar} style={styles.avatar} />
            ))}
          </View>
          <Icon name="star" size={16} color="gold" />
          <Text style={styles.rating}>
            {rating} ({reviews} Rating)
          </Text>
        </View>
      </View>

      <View style={styles.discountTag}>
        <Text style={styles.discountText}>{discount}% OFF</Text>
      </View>

      <Image source={image} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#222",
    borderRadius: 15,
    padding: 30,
    alignItems: "center",
    position: "relative",
    marginVertical: 30,
    marginHorizontal: 10,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    color: "yellow",
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#ccc",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  avatars: {
    flexDirection: "row",
    marginRight: 5,
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#fff",
    marginRight: -6,
  },
  rating: {
    color: "#fff",
    marginLeft: 5,
  },
  discountTag: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "blue",
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  discountText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});

export default OfferCard;
