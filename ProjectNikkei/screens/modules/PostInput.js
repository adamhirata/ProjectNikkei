import React, { useEffect, useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import ReactDOM from "react-dom";
import MDEditor from "@uiw/react-md-editor";

export default function PostInput(props) {
  const [value, setValue] = useState();
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "",
      }}
    >
      <MDEditor
        height={"70%"}
        style={{ width: "70%" }}
        value={value}
        onChange={setValue}
      />
      <MDEditor.Markdown value={value} />
      <Button
        onPress={() => {
          console.log(value);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
