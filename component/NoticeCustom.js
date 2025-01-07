import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const NoticeCustom = ({ iConName, Title, Desc, SubTitle }) => {
  return (
    <View style={styles.container}>
      {/* Icon */}
      <View style={styles.iconContainer}>
        <FontAwesome name={iConName} size={20} color="blue" />
      </View>
      {/* Content */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{Title}</Text>
        <Text style={styles.desc}>{Desc}</Text>
        <Text style={styles.subTitle}>{SubTitle}</Text>
      </View>
    </View>
  );
};

export default NoticeCustom;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Sắp xếp icon và nội dung theo hàng ngang
    alignItems: "center",
    backgroundColor: "#f2f6ff", // Màu nền nhẹ
    padding: 10,
    borderRadius: 8, // Bo tròn khối
    marginVertical: 5,
    shadowColor: "#000", // Hiệu ứng đổ bóng
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Đổ bóng trên Android
  },
  iconContainer: {
    marginRight: 10, // Khoảng cách giữa icon và nội dung
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#333",
    marginBottom: 4,
  },
  desc: {
    fontSize: 12,
    color: "#555",
    marginBottom: 4,
  },
  subTitle: {
    fontSize: 11,
    color: "#999",
  },
});
