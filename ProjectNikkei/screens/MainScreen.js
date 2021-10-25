import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CalendarScreen from "./CalendarScreen";
import PostInput from "./modules/PostInput";

export default function MainScreen(option) {
  return (
    <View style={{ flex: 1 }}>
      {/* <View style={{ height: 100 }}></View>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}> */}
      <PostInput />
      {/* </ScrollView>
      <View style={styles.headerBar}></View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  headerBar: {
    position: "absolute",
    height: 100,
    width: "100%",
    backgroundColor: "#e6f3ff",
    shadowColor: "#000",
    shadowOpacity: 0.58,
    shadowRadius: 4.0,
    overflow: "visible",
  },
});
