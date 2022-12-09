import React, { PureComponent } from "react";
import { AppRegistry, Dimensions, StyleSheet, StatusBar } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { GameButton } from "./components/button";
import { Background } from "./components/background";
import { MoveFinger } from "./systems/GameLoop";
import { TargetValue } from "./components/targetValue";
import GLOBAL from "./state/global";

export default class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      targetValue: 0,
      selectedValue: 0,
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
            bgColor: "#00ff00",
            renderer: <Background />,
          },
          1: { text: "3 + ", renderer: <TargetValue /> },
          2: { position: [50, 125], text: "1", renderer: <GameButton /> }, //-- Notice that each entity has a unique id (required)
          3: { position: [50, 275], text: "19", renderer: <GameButton /> }, //-- and a map of components. Each entity has an optional
          4: { position: [50, 525], text: "7", renderer: <GameButton /> }, //-- renderer component. If no renderer is supplied with the
          5: { position: [50, 675], text: "4", renderer: <GameButton /> }, //-- entity - it won't get displayed.
          6: { position: [270, 125], text: "15", renderer: <GameButton /> },
          7: { position: [270, 275], text: "15", renderer: <GameButton /> },
          8: { position: [270, 525], text: "15", renderer: <GameButton /> },
          9: { position: [270, 675], text: "15", renderer: <GameButton /> },
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

AppRegistry.registerComponent("BestGameEver", () => BestGameEver);
