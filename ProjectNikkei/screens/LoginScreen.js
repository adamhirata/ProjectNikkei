import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import LRComponent from "./modules/LRComponent";

export default function LoginScreen(navigation) {
  return (
    <View style={styles.container}>
      <LRComponent />
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
