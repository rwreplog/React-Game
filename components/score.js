import React, { PureComponent } from "react";
import { StyleSheet, Text, View } from "react-native";
import GLOBAL from "../state/global";

class Score extends PureComponent {
  render() {
    let value = this.props.scoreValue;

    return (
      <View style={[styles.score]}>
        <Text>Score</Text>
        <Text style={[styles.text]}>{value}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  score: {
    position: "absolute",
    right: 30,
    top: 10,
    textAlign: "center",
  },
  text: {
    color: "black",
    textAlign: "center",
    marginTop: "auto",
    marginBottom: "auto",
    fontSize: 25,
    fontFamily: "Arial",
  },
});

export { Score };
