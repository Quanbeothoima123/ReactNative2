import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomButton = ({ colorButton, colorText, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: colorButton }]}
    >
      <Text style={[styles.text, { color: colorText }]}>{colorButton}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton; // Xuất mặc định ở đây

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    width: 120, // Định kích thước cho nút bấm
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
