import { StatusBar } from "expo-status-bar";
import React from "react";
import {  Text, View } from "react-native";
import styles from './app.styles'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Focus Time</Text>
      <StatusBar style="auto" />
    </View>
  );
}


