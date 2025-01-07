import React from "react";
import { SafeAreaView, FlatList, StyleSheet, View, Text } from "react-native";
import NoticeCustom from "./component/NoticeCustom";

const App = () => {
  const data = [
    {
      id: 1,
      iConName: "check-circle",
      Title: "Bước 1: Xác định nhu cầu khách hàng",
      Desc: "Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00",
      SubTitle: "20/08/2020, 06:00",
    },
    {
      id: 2,
      iConName: "users",
      Title: "Bạn có khách hàng mới!",
      Desc: "Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.",
      SubTitle: "20/08/2020, 06:00",
    },
    {
      id: 3,
      iConName: "users",
      Title: "Khách hàng được chia sẻ bị trùng",
      Desc: "Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống.",
      SubTitle: "20/08/2020, 06:00",
    },
    {
      id: 4,
      iConName: "users",
      Title: "Khách hàng được thêm bị trùng",
      Desc: "Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống.",
      SubTitle: "20/08/2020, 06:00",
    },
    {
      id: 5,
      iConName: "check-circle",
      Title: "Công việc sắp đến hạn trong hôm nay",
      Desc: "Bạn có 17 công việc sắp đến hạn.",
      SubTitle: "20/08/2020, 06:00",
    },
    {
      id: 6,
      iConName: "check-circle",
      Title: "Công việc đã quá hạn",
      Desc: "Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch.",
      SubTitle: "20/08/2020, 06:00",
    },
  ];

  const renderItem = ({ item }) => (
    <NoticeCustom
      iConName={item.iConName}
      Title={item.Title}
      Desc={item.Desc}
      SubTitle={item.SubTitle}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.alignText}>
        <Text>Thông báo</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    paddingTop: 50,
  },
  alignText: {
    alignItems: "center",
  },
});
