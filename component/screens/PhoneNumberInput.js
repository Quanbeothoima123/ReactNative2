import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const PhoneNumberInput = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const isValidVietnamPhoneNumber = (number) => {
    const regex = /^(0[2-9])[0-9]{8}$/;
    return regex.test(number);
  };

  const handleChangeText = (text) => {
    const numericText = text.replace(/\D/g, "");
    setPhoneNumber(numericText);

    if (numericText.length === 10) {
      setError("");
    } else {
      setError("Số điện thoại phải có 10 số");
    }
  };

  const handleSubmit = () => {
    if (!isValidVietnamPhoneNumber(phoneNumber)) {
      setError("Số điện thoại không đúng định dạng. Vui lòng nhập lại");
    } else {
      setError("");
      navigation.navigate("Home", { phoneNumber });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <Text style={styles.subtitle}>Nhập số điện thoại</Text>
      <Text style={styles.description}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản OneHousing Pro
      </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={phoneNumber}
        onChangeText={handleChangeText}
        maxLength={10}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: "gray",
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "gray",
    fontSize: 18,
    paddingVertical: 5,
    marginBottom: 10,
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PhoneNumberInput;
