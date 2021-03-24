import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import CalendarScreen from "./screens/CalendarScreen";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const screens = {
  CalendarScreen: {
    screen: CalendarScreen,
    navigationOptions: { header: null },
  },
  LoginScreen: { screen: LoginScreen, navigationOptions: { header: null } },
};

const Stack = createStackNavigator(screens);
const Navigator = createAppContainer(Stack);

export default function App() {
  return <Navigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
