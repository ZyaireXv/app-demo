import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";

const ScheduleScreen = () => {
  const [selectedDate, setSelectedDate] = useState("2024-10-21");

  const scheduleData = [
    { time: "12:00", description: "内部门管理实施报告" },
    // 添加其他活动
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.time}>{item.time}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.calendarContainer}>
        <Calendar
          onDayPress={(day) => {
            setSelectedDate(day.dateString);
          }}
          markedDates={{
            [selectedDate]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: "blue",
            },
          }}
        />
      </View>
      <FlatList
        data={scheduleData}
        renderItem={renderItem}
        keyExtractor={(item) => item.time}
        style={styles.scheduleList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  calendarContainer: {
    marginBottom: 20,
  },
  scheduleList: {
    padding: 8,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  time: {
    fontWeight: "bold",
  },
  description: {
    color: "#555",
  },
});

export default ScheduleScreen;
