import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const OrderScreen = () => {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(2);

  return (
    <View style={styles.container}>
      {/* Ảnh sản phẩm */}
      <ImageBackground
        source={require("../assets/img/Rectangle 1.png")}
        style={styles.background}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingTop: 20,
            backgroundColor: "#F8F6EF",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Icon name="arrow-back" size={24} color="black" />
          </TouchableOpacity>

          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Shopping Cart
          </Text>

          <TouchableOpacity onPress={() => console.log("Xóa giỏ hàng")}>
            <Icon name="trash-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/img/OrderScreen/burgerBaoQuat.png")}
            style={styles.mainImage}
          />
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>10% OFF</Text>
          </View>
          <View style={styles.thumbnailContainer}>
            <Image
              source={require("../assets/img/OrderScreen/burger1.png")}
              style={styles.thumbnail}
            />
            <Image
              source={require("../assets/img/OrderScreen/burger2.png")}
              style={styles.thumbnail}
            />
            <Image
              source={require("../assets/img/OrderScreen/burger3.png")}
              style={styles.thumbnail}
            />
          </View>
        </View>

        {/* Thông tin sản phẩm */}
        <View style={styles.productDetails}>
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.productName}>BURGER</Text>
            <Text style={styles.price}>$28</Text>
          </View>

          <View
            style={{
              marginTop: -20,
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.ratingRow}>
              <Ionicons name="star" size={16} color="#FFD700" />
              <Text style={styles.ratingText}> 4.9 (3k+ Rating)</Text>
            </View>

            {/* Chỉnh số lượng */}
            <View style={styles.quantityRow}>
              <TouchableOpacity
                onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              >
                <Ionicons name="remove-circle-outline" size={24} color="gray" />
              </TouchableOpacity>
              <Text style={styles.quantity}>
                {quantity < 10 ? `0${quantity}` : quantity}
              </Text>
              <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                <Ionicons name="add-circle-outline" size={24} color="gray" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Địa chỉ giao hàng */}
          <View style={styles.deliveryAddress}>
            <View
              style={{
                width: 210,
                backgroundColor: "#C0EADB",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                height: 67,
                width: 210,
                borderRadius: 7,
              }}
            >
              <Ionicons name="location" size={20} color="green" />
              <View style={{ paddingLeft: 20 }}>
                <Text>Deliver Address</Text>
                <Text>Dhaka, Bangladesh</Text>
              </View>
            </View>
            <View
              style={{
                height: "100%",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#A9A6FF",
                paddingHorizontal: 20,
                borderRadius: 5,
                marginRight: 20,
              }}
            >
              <TouchableOpacity>
                <Ionicons name="pencil" size={18} color="blue" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Phương thức thanh toán */}
          <View style={styles.paymentMethod}>
            <Ionicons name="card" size={20} color="blue" />
            <Text style={styles.paymentText}>Payment Method</Text>
            <TouchableOpacity
              style={{
                paddingVertical: 7,
                paddingHorizontal: 20,
                borderColor: "#4A43EC",
                borderWidth: 1,
                borderRadius: 20,
              }}
            >
              <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontSize: 14, fontWeight: "900" }}>
              Checkout Summary
            </Text>
          </View>
          <View style={styles.checkoutSummary}>
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.summaryText}>Subtotal (2)</Text>
              <Text style={styles.summaryText}>$56</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.summaryText}>Delivery Fee</Text>
              <Text style={styles.summaryText}>$6.20</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.totalText}>Payable Total</Text>
              <Text style={styles.totalPrice}>$62.2</Text>
            </View>
          </View>

          {/* Nút đặt hàng */}
          <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.confirmText}>Confirm Order</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", marginTop: 20 },
  imageContainer: { alignItems: "center", paddingTop: 20 },
  mainImage: { width: "90%", height: 200, borderRadius: 15 },
  discountBadge: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    left: 40,
    backgroundColor: "blue",
    padding: 5,
    borderRadius: 25,
  },
  discountText: { color: "white", fontSize: 12, fontWeight: "bold" },
  thumbnailContainer: { flexDirection: "row", marginTop: -20 },
  thumbnail: {
    width: 92,
    height: 71,
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
  },
  productDetails: { padding: 20 },
  productName: { fontSize: 30, fontWeight: "bold" },
  price: { fontSize: 22, fontWeight: "bold", color: "blue" },
  ratingRow: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  ratingText: { fontSize: 14, color: "gray" },
  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  quantity: { fontSize: 18, marginHorizontal: 10, fontWeight: "bold" },
  deliveryAddress: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
    // backgroundColor: "#E6F4EA",
    // padding: 10,
    // borderRadius: 10,
    // marginBottom: 10,
  },
  addressText: { flex: 1, fontSize: 14, marginLeft: 10 },
  paymentMethod: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  paymentText: { flex: 1, fontSize: 14, marginLeft: 10 },
  changeText: { color: "blue", fontSize: 14 },
  checkoutSummary: { marginVertical: 10 },
  summaryText: {
    fontSize: 16,
    color: "gray",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalText: { fontSize: 18, fontWeight: "bold" },
  totalPrice: { fontSize: 18, fontWeight: "bold", color: "blue" },
  confirmButton: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 10,
  },
  confirmText: { color: "white", fontSize: 16, fontWeight: "bold" },

  background: {
    width: "100%",
    height: 179, // Đảm bảo chiều cao phù hợp
  },
});

export default OrderScreen;
