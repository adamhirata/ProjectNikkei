import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CalendarScreen(navigation) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View
          style={{ width: 100, height: 100, backgroundColor: "blue" }}
        ></View>
      </TouchableOpacity>
      <Text>hi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aliceblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
