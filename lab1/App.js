import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: "aliceblue" }}>
      <Text
        onPress={() => {
          alert("pressed");
        }}
        style={{ fontSize: 25, marginLeft: 20 }}
      >
        First mobile APP
      </Text>

      <ScrollView horizontal showsVerticalScrollIndicator={false}>
        <Image
          style={{ width: 300, height: 300 }}
          source={{
            uri: "https://plus.unsplash.com/premium_photo-1661476072172-359e53eb83d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          }}
        ></Image>
        <Image
          style={{ width: 300, height: 300, marginLeft: 10 }}
          source={{
            uri: "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
          }}
        ></Image>
        <Image
          style={{ width: 300, height: 300, marginLeft: 10 }}
          source={{
            uri: "https://images.unsplash.com/photo-1531089073319-17596b946d42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
          }}
        ></Image>
      </ScrollView>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 10 }}
      >
        <Image
          style={{ width: 300, height: 300 }}
          source={{
            uri: "https://images.unsplash.com/photo-1552526881-721ce8509abb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
          }}
        ></Image>
        <Image
          style={{ width: 300, height: 300, marginLeft: 10 }}
          source={{
            uri: "https://images.unsplash.com/photo-1515516969-d4008cc6241a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
          }}
        ></Image>
        <Image
          style={{ width: 300, height: 300, marginLeft: 10 }}
          source={{
            uri: "https://images.unsplash.com/photo-1531089073319-17596b946d42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
          }}
        ></Image>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
