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

const OrderScreen = () => {
  const [quantity, setQuantity] = useState(2);

  return (
    <View style={styles.container}>
      {/* Ảnh sản phẩm */}
      <ImageBackground
        source={require("../assets/img/Rectangle 1.png")}
        style={styles.background}
      >
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
            <Ionicons name="location" size={20} color="green" />
            <Text style={styles.addressText}>Dhaka, Bangladesh</Text>
            <TouchableOpacity>
              <Ionicons name="pencil" size={18} color="blue" />
            </TouchableOpacity>
          </View>

          {/* Phương thức thanh toán */}
          <View style={styles.paymentMethod}>
            <Ionicons name="card" size={20} color="blue" />
            <Text style={styles.paymentText}>Payment Method</Text>
            <TouchableOpacity>
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
  container: { flex: 1, backgroundColor: "#fff", marginTop: 60 },
  imageContainer: { alignItems: "center", paddingTop: 20 },
  mainImage: { width: "90%", height: 200, borderRadius: 15 },
  discountBadge: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "blue",
    padding: 5,
    borderRadius: 20,
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
    alignItems: "center",
    backgroundColor: "#E6F4EA",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  addressText: { flex: 1, fontSize: 14, marginLeft: 10 },
  paymentMethod: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F5FF",
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
