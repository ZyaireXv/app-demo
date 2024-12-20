import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import CustomerInfo from "./pages/customer_info";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <CustomerInfo></CustomerInfo>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
