import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import CalendarScreen from "./screens/CalendarScreen";
import MainScreen from "./screens/MainScreen";
//import ExpandableCalendarScreen from "./screens/ExpandableCalendarScreen";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ExecRosterScreen from "./screens/ExecRosterScreen";

const screens = {
  ExecRosterScreen: {
    screen: ExecRosterScreen,
    navigationOptions: { header: navOptions },
  },
  MainScreen: {
    screen: MainScreen,
    navigationOptions: { header: navOptions },
  },
  CalendarScreen: {
    screen: CalendarScreen,
    navigationOptions: { header: navOptions },
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: { header: navOptions },
  },
};

const Stack = createStackNavigator(screens);
const Navigator = createAppContainer(Stack);

export default function App() {
  return <Navigator />;
}

function navOptions({ navigation }) {
  return (
    <View style={styles.header}>
      <Button
        onPress={() => {
          navigation.navigate("MainScreen");
        }}
      />
      <Button
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: "100%",
    backgroundColor: "#e6f3ff",
    shadowColor: "#000",
    shadowOpacity: 0.58,
    shadowRadius: 4.0,
    overflow: "visible",
  },
});
