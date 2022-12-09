import React, { PureComponent } from "react";
import { StyleSheet, Text, View } from "react-native";

const RADIUS = 20;

class TargetValue extends PureComponent {
  render() {
    const t = this.props.text;

    return (
      <View style={[styles.targetValue]}>
        <Text style={[styles.text]}>{t}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  targetValue: {
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: "center",
  },
  text: {
    color: "black",
    textAlign: "center",
    marginTop: "auto",
    marginBottom: "auto",
    fontSize: 95,
    fontFamily: "Arial",
  },
});

export { TargetValue };
