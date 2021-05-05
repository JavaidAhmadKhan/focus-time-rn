import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [focusSubject, setFocusSubject] = useState("Hello World!");

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Text>Here is where i going to build a time</Text>
      ) : (
        <Text>Here I want to build an input for a subject</Text>
      )}
      <StatusBar style="auto" />
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
});
