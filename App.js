import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from "react-native";

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Đăng nhập</Text>
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>Nhập số điện thoại</Text>
        </View>
        <View style={styles.desc}>
          <Text>
            Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại
            OneHousing Pro
          </Text>
        </View>
        <View style={styles.inputText}>
          <TextInput
            placeholder="Nhập số điện thoại của bạn"
            keyboardType="numeric"
            style={styles.textInput}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.buttonOpacity}>
            <Text style={styles.buttonText}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 40,
  },
  header: {
    paddingBottom: 10,
    marginBottom: 60,
    borderBottomWidth: 2,
    borderBottomColor: "#D3D3D3",
  },
  headerText: {
    fontSize: 24, // Tăng kích thước chữ
    fontWeight: "bold", // Làm đậm chữ (tuỳ chọn)
  },
  title: {
    marginBottom: 20,
  },
  titleText: {
    fontSize: 20,
  },
  desc: {
    marginBottom: 10,
  },
  inputText: {
    marginBottom: 80,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  buttonOpacity: {
    backgroundColor: "#D3D3D3",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
