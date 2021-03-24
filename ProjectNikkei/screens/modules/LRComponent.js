import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const faces = [
  "\n.｡･ﾟﾟ･(＞_＜)･ﾟﾟ･｡.",
  "\n(ノ°益°)ノ",
  "\n(ᗒᗣᗕ)՞",
  "\n(＃`Д´)",
  "\n凸(￣ヘ￣)",
];

function errorHandling(email, password, setMsg) {
  if (
    (email == undefined || email == null || email == "") &&
    (password == undefined || password == null || password == "")
  ) {
    setMsg(
      <Text style={styles.error}>
        [!] Please enter an email and password
        {faces[Math.floor(Math.random() * faces.length)]}
      </Text>
    );
    return true;
  } else if (email == undefined || email == null || email == "") {
    setMsg(
      <Text style={styles.error}>
        [!] Please enter an email
        {faces[Math.floor(Math.random() * faces.length)]}
      </Text>
    );
    return true;
  } else if (password == undefined || password == null || password == "") {
    setMsg(
      <Text style={styles.error}>
        [!] Please enter your password
        {faces[Math.floor(Math.random() * faces.length)]}
      </Text>
    );
    return true;
  }
}

export default function LRComponent(navigation, loginFunc, registerFunc) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirm, setConfirm] = useState();
  const [errorMsg, setMsg] = useState();

  const [secureTextEntry, setShow] = useState(true);
  const [registerComponent, setComponent] = useState();
  const [registering, setRegister] = useState(false);

  const confirmCheck = (val) => {
    setConfirm(val);
    console.log(confirm);
    if (password != confirm) {
      setMsg(
        <Text style={styles.error}>
          [!] Both Password Inputs must match
          {faces[Math.floor(Math.random() * faces.length)]}
        </Text>
      );
    }
  };

  const renderRegister = () => {
    setRegister(!registering);
    if (registering) {
      setComponent(
        <View>
          <Text style={styles.text}>Confirm Password</Text>
          <View></View>
          <TextInput
            style={styles.input}
            onChangeText={(val) => confirmCheck(val)}
            secureTextEntry={secureTextEntry}
          ></TextInput>
        </View>
      );
    } else {
      setComponent();
    }
  };

  const login = () => {
    if (errorHandling(email, password, setMsg)) {
      return;
    }
    setMsg();
    console.log([email, password]);
  };

  return (
    <View>
      <View style={styles.paper}>
        <View>
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            placeholder="Welcome Back ヽ(・∀・)ﾉ"
          ></TextInput>
        </View>
        <View>
          <Text style={styles.text}>Password</Text>
          <View></View>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            secureTextEntry={secureTextEntry}
          ></TextInput>
          {registerComponent}
          <TouchableOpacity>
            <Text
              onPress={() => setShow(!secureTextEntry)}
              style={{ color: "blue", fontSize: 12 }}
            >
              Show Password
            </Text>
            {errorMsg}
          </TouchableOpacity>
          <Text style={{ textAlign: "center", marginTop: 40 }}>
            New to the site?
          </Text>
          <TouchableOpacity>
            <Text
              onPress={renderRegister}
              style={{ textAlign: "center", color: "blue" }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Button title="Login" color="red" onPress={login} />
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    color: "red",
    paddingTop: 10,
    textAlign: "center",
  },
  paper: {
    padding: 40,
    paddingBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.58,
    shadowRadius: 4.0,
    overflow: "visible",
    borderRadius: 25,
    backgroundColor: "white",
  },
  text: {
    fontSize: 18,
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
