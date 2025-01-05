import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Box({
  children, // Nội dung bên trong Box
  style, // Style tuỳ chỉnh
  myCustomProp, // Dữ liệu tuỳ chỉnh
  title, // Tiêu đề Box
  borderColor = "black", // Màu viền (mặc định là đen)
  borderWidth = 2, // Độ dày viền (mặc định là 2)
}) {
  return (
    <View
      style={[
        styles.box,
        { borderColor: borderColor, borderWidth: borderWidth }, // Áp dụng màu và độ dày viền
        style, // Thêm style tuỳ chỉnh từ props
      ]}
    >
      {title && <Text style={styles.title}>{title}</Text>}{" "}
      {/* Hiển thị tiêu đề nếu có */}
      {children} {/* Nội dung bên trong Box */}
      {myCustomProp && (
        <Text style={styles.customText}>{myCustomProp}</Text>
      )}{" "}
      {/* Nội dung tuỳ chỉnh */}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  customText: {
    marginTop: 10,
    fontSize: 16,
    color: "gray",
  },
});
