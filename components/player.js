import React from "react";
import { View } from "react-native";
export default function Player({ position, size }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: "red",
        position: "absolute",
        left: position[0] * size,
        top: position[1] * size,
      }}
    ></View>
  );
}
