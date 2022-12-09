import React, { PureComponent } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import GLOBAL from "../state/global";

const RADIUS = 20;

class GameButton extends PureComponent {
  _onPressButton(value) {
    const selection = Number(GLOBAL.screen1.state.targetValue) + Number(value);
    const targetColor = GLOBAL.screen1.state.color;

    if (targetColor === "#FF0000") {
      if (selection % 2 == 0) {
        GLOBAL.screen1.setState({
          score: GLOBAL.screen1.state.score + 1,
        });
      } else {
        GLOBAL.screen1.setState({
          score: GLOBAL.screen1.state.score - 1,
        });
      }
    } else if (targetColor === "#00FF00") {
      if (selection % 2 == 0) {
        GLOBAL.screen1.setState({
          score: GLOBAL.screen1.state.score - 1,
        });
      } else {
        GLOBAL.screen1.setState({
          score: GLOBAL.screen1.state.score + 1,
        });
      }
    }
  }

  render() {
    const x = this.props.position[0] - RADIUS / 2;
    const y = this.props.position[1] - RADIUS / 2;
    const t = this.props.text;

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

export { GameButton };
