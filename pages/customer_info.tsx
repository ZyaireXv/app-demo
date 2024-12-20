import React from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const CustomerInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>顧客情報</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.section}>
          <Text>前回までのコントクト履歴</Text>
          <View style={styles.contactHistory}>
            <Text>2019年11月28日 セミナー</Text>
            <Text>ああ ああ</Text>
          </View>
        </View>

        <View style={styles.horizontalSection}>
          <Image
            source={{ uri: "https://via.placeholder.com/50" }}
            style={styles.image}
          />
          <View style={styles.middleTextContainer}>
            <Text>ああ</Text>
            <Text>アア</Text>
            <Text>1989年01月01日</Text>
          </View>
          <View style={styles.rightTextContainer}>
            <Text style={styles.bottomText}>35歳</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.gridContainer}>
            <View style={styles.gridItem}>
              <Button title="通信先電話" onPress={() => {}} />
            </View>
            <View style={styles.gridItem}>
              <Text></Text>
            </View>
            <View style={styles.gridItem}>
              <Text></Text>
            </View>
            <View style={styles.gridItem}>
              <Button title="電話番号1" onPress={() => {}} />
            </View>
            <View style={styles.gridItem}>
              <Text>01-8998-0890</Text>
            </View>
            <View style={styles.gridItem}>
              <Text></Text>
            </View>
            <View style={styles.gridItem}>
              <Button title="電話番号2" onPress={() => {}} />
            </View>
            <View style={styles.gridItem}>
              <Text></Text>
            </View>
            <View style={styles.gridItem}>
              <Text></Text>
            </View>
            <View style={styles.gridItem}>
              <Button title="アプリ" onPress={() => {}} />
            </View>
            <View style={styles.gridItem}>
              <Text>未登録</Text>
            </View>
            <View style={styles.gridItem}>
              <Button title="招待·設定" onPress={() => {}} />
            </View>
          </View>
        </View>
        <Text style={styles.aboutAppRegister}>アプリの登録状況について</Text>
        <View style={styles.section}>
          <View style={styles.gridContainer}>
            <View style={styles.gridItem}>
              <Button title="LINE" onPress={() => {}} />
            </View>
            <View style={styles.gridItem}>
              <Text>未登録</Text>
            </View>
            <View style={styles.gridItem}>
              <Text></Text>
            </View>
            <View style={styles.gridItem}>
              <Button title="お客さまWEB 1" onPress={() => {}} />
            </View>
            <View style={styles.gridItem}>
              <Text></Text>
            </View>
            <View style={styles.gridItem}>
              <Text></Text>
            </View>
            <View style={styles.gridItem}>
              <Button title="お客さま" onPress={() => {}} />
            </View>
            <View style={styles.gridItem}>
              <Text></Text>
            </View>
            <View style={styles.gridItem}>
              <Text></Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="契約内容" onPress={() => {}} />
          <Button title="家族" onPress={() => {}} />
          <Button title="カルテ" onPress={() => {}} />
          <Button title="勤務先" onPress={() => {}} />
          <Button title="メモ" onPress={() => {}} />
          <Button title="REC" onPress={() => {}} />
        </View>
      </ScrollView>
      <Button title="編集" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#2196F3",
    padding: 8,
    borderRadius: 0,
    marginBottom: 0,
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "left",
  },
  section: {
    padding: 10,
    marginVertical: 1,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  horizontalSection: {
    flexDirection: "row",
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  middleTextContainer: {
    flex: 1,
  },
  rightTextContainer: {
    justifyContent: "flex-end",
  },
  bottomText: {
    textAlign: "right",
  },
  label: {
    fontWeight: "bold",
  },
  buttonContainer: {
    marginEnd: 10,
    marginStart: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  editButton: {
    marginTop: 20,
    backgroundColor: "#2196F3",
  },
  contactHistory: {
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between", // Space between columns
    padding: 5, // Optional: padding around the grid
  },
  scrollViewContent: {
    paddingVertical: 10, // Optional: Add padding to the content
  },
  gridItem: {
    width: "30%", // Adjust width to fit three items per row
    marginBottom: 10, // Space between rows
    justifyContent: "space-between",
    padding: 5,
    borderRadius: 15,
  },
  aboutAppRegister: {
    fontSize: 20,
    paddingEnd: 30,
    textAlign: "right", // Aligns the text to the right
    textDecorationLine: "underline", // Adds an underline to the text
  },
});

export default CustomerInfo;
