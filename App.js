import React, { PureComponent } from "react";
import { AppRegistry, Dimensions, StyleSheet, StatusBar } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { GameButton } from "./components/button";
import { Background } from "./components/background";
import { MoveFinger, colors } from "./systems/GameLoop";
import { TargetValue } from "./components/targetValue";
import { Score } from "./components/score";
import GLOBAL from "./state/global";

export default class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      targetValue: 0,
      selectedValue: 0,
      color: colors[Math.floor(Math.random() * colors.length)],
      score: 0,
    };
    GLOBAL.screen1 = this;
  }

  render() {
    return (
      <GameEngine
        style={styles.container}
        systems={[MoveFinger]} //-- We can add as many systems as needed
        entities={{
          0: {
            size: [
              Dimensions.get("window").height,
              Dimensions.get("window").height,
            ],
            body: { x: 50, y: 50 },
            radius: 0,
            bgColor: this.state.color,
            renderer: <Background />,
          },
          1: { text: generateRandomNumber(), renderer: <TargetValue /> },
          2: {
            position: [50, 125],
            text: generateRandomNumber(),
            renderer: <GameButton />,
          }, //-- Notice that each entity has a unique id (required)
          3: {
            position: [50, 275],
            text: generateRandomNumber(),
            renderer: <GameButton />,
          }, //-- and a map of components. Each entity has an optional
          4: {
            position: [50, 525],
            text: generateRandomNumber(),
            renderer: <GameButton />,
          }, //-- renderer component. If no renderer is supplied with the
          5: {
            position: [50, 675],
            text: generateRandomNumber(),
            renderer: <GameButton />,
          }, //-- entity - it won't get displayed.
          6: {
            position: [270, 125],
            text: generateRandomNumber(),
            renderer: <GameButton />,
          },
          7: {
            position: [270, 275],
            text: generateRandomNumber(),
            renderer: <GameButton />,
          },
          8: {
            position: [270, 525],
            text: generateRandomNumber(),
            renderer: <GameButton />,
          },
          9: {
            position: [270, 675],
            text: generateRandomNumber(),
            renderer: <GameButton />,
          },
          10: {
            scoreValue: this.state.score,
            renderer: <Score />,
          },
        }}
      >
        <StatusBar hidden={true} />
      </GameEngine>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});

const generateRandomNumber = () => {
  const num = Math.floor(Math.random() * 99) + 1;
  return num;
};

AppRegistry.registerComponent("BestGameEver", () => BestGameEver);
