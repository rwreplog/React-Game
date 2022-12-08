import React, { PureComponent } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Button } from "react-native";

const RADIUS = 20;

class Finger extends PureComponent {
  _onPressButton(value) {
    alert(value);
  }

  render() {
    const x = this.props.position[0] - RADIUS / 2;
    const y = this.props.position[1] - RADIUS / 2;
    const t = Math.floor(Math.random() * 20) + 1;

    return (
      <TouchableOpacity
        onPress={() => {
          this._onPressButton(t);
        }}
        style={[styles.btn, { right: x, top: y }]}
      >
        <Text style={[styles.text]}>{t}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    width: RADIUS * 5,
    height: RADIUS * 5,
    borderRadius: RADIUS * 5,
    // borderWidth: 3,
    // borderColor: "rgba(255, 0, 0, 0.7)",
  },
  text: {
    color: "white",
    textAlign: "center",
    marginTop: "auto",
    marginBottom: "auto",
    fontSize: 45,
    fontFamily: "Arial",
  },
});

export { Finger };
