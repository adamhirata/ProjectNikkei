import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { postAuth } from "../api/api";

export default function ExecRosterScreen(navigation) {
  const [email, setEmail] = useState();

  // const postAuth = async () => {
  //   try {
  //     const requestOptions = {
  //       method: "POST",
  //       // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  //       // cache: "no-cache",
  //       // credentials: "omit", // include, *same-origin, omit
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": "true",
  //         // 'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //       body: { email: email, pwd: "oof" },
  //     };
  //     console.log(requestOptions.body);
  //     await fetch("http://localhost:5000/auth", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": "true",
  //       },
  //       body: JSON.stringify({ email: email }),
  //     }).then((response) => {
  //       console.log(response);
  //     });
  //     // var request = new XMLHttpRequest();
  //     // request.open("POST", "http://localhost:5000/auth", true);
  //     // request.setRequestHeader(
  //     //   "Content-Type",
  //     //   "application/json; charset=UTF-8"
  //     // );
  //     // request.setRequestHeader("Access-Control-Allow-Origin", true);
  //     // request.send(JSON.stringify({ email: email, pwd: "oof" }));
  //   } catch (error) {
  //     console.log("error");
  //     console.log(error);
  //   }
  // };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(val) => {
          setEmail(val);
        }}
      />
      <Button
        onPress={() => {
          postAuth(email);
        }}
      />
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
  input: {
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 16,
    paddingHorizontal: 6,
    paddingVertical: 6,
    backgroundColor: "white",
  },
});
