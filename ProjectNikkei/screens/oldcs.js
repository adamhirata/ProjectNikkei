import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CalComponent from "./modules/CalComponent";

export default function CalendarScreen(navigation) {
  return (
    <View style={styles.container}>
      <View style={styles.panel1}></View>
      <View style={styles.panel2}>
        <CalComponent style={{ width: 1000 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "aliceblue",
    alignItems: "center",
    //justifyContent: "center",
  },
  panel1: {
    borderRightWidth: 0,
    width: "33%",
    height: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.58,
    shadowRadius: 4.0,
    overflow: "visible",
  },
  panel2: {
    width: "66%",
    height: "100%",
    flex: 1,
    alignItems: "center",
  },
});
