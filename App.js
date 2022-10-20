import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  StyleSheet,
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

import { GameEngine } from "react-native-game-engine";
import { TouchableOpacity } from "react-native-gesture-handler";

import React, { useRef, useState, Fragment } from "react";
import GameLoop from "./systems/GameLoop";
import Constants from "./Constants/Constants";
import Player from "./components/player";

export default function App() {
  const BoardSize = Constants.GRID_SIZE * Constants.CELL_SIZE;
  const engine = useRef(null);
  const [isGameRunning, setIsGameRunning] = useState(true);
  const randomPositions = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const resetGame = () => {
    engine.current.swap({
      head: {
        position: [0, 0],
        size: Constants.CELL_SIZE,
        updateFrequency: 10,
        nextMove: 10,
        xspeed: 0,
        yspeed: 0,
        renderer: <Player />,
      },
      // food: {
      //   position: [
      //     randomPositions(0, Constants.GRID_SIZE - 1),
      //     randomPositions(0, Constants.GRID_SIZE - 1),
      //   ],
      //   size: Constants.CELL_SIZE,
      //   updateFrequency: 10,
      //   nextMove: 10,
      //   xspeed: 0,
      //   yspeed: 0,
      //   renderer: <Player />,
      // },
      // tail: {
      //   size: Constants.CELL_SIZE,
      //   elements: [],
      //   renderer: <Player />,
      // },
    });
    setIsGameRunning(true);
  };

  return (
    <Fragment>
      {/* <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        > */}
      <View style={styles.canvas}>
        <GameEngine
          ref={engine}
          style={{
            width: BoardSize,
            height: BoardSize,
            flex: null,
            backgroundColor: "white",
          }}
          entities={{
            head: {
              position: [0, 0],
              size: Constants.CELL_SIZE,
              updateFrequency: 10,
              nextMove: 10,
              xspeed: 0,
              yspeed: 0,
              renderer: <Player />,
            },
            // food: {
            //   position: [
            //     randomPositions(0, Constants.GRID_SIZE - 1),
            //     randomPositions(0, Constants.GRID_SIZE - 1),
            //   ],
            //   size: Constants.CELL_SIZE,
            //   renderer: <Player />,
            // },
            // tail: {
            //   size: Constants.CELL_SIZE,
            //   elements: [],
            //   renderer: <Player />,
            // },
          }}
          systems={[GameLoop]}
          running={isGameRunning}
          onEvent={(e) => {
            switch (e) {
              case "game-over":
                alert("Game over!");
                setIsGameRunning(false);
                return;
            }
          }}
        />
        <View style={styles.controlContainer}>
          <View style={styles.controllerRow}>
            <TouchableOpacity
              onPress={() => engine.current.dispatch("move-up")}
            >
              <View style={styles.controlBtn} />
            </TouchableOpacity>
          </View>
          <View style={styles.controllerRow}>
            <TouchableOpacity
              onPress={() => engine.current.dispatch("move-left")}
            >
              <View style={styles.controlBtn} />
            </TouchableOpacity>
            <View style={[styles.controlBtn, { backgroundColor: null }]} />
            <TouchableOpacity
              onPress={() => engine.current.dispatch("move-right")}
            >
              <View style={styles.controlBtn} />
            </TouchableOpacity>
          </View>
          <View style={styles.controllerRow}>
            <TouchableOpacity
              onPress={() => engine.current.dispatch("move-down")}
            >
              <View style={styles.controlBtn} />
            </TouchableOpacity>
          </View>
        </View>
        {!isGameRunning && (
          <TouchableOpacity onPress={resetGame}>
            <Text
              style={{
                color: "white",
                marginTop: 15,
                fontSize: 22,
                padding: 10,
                backgroundColor: "grey",
                borderRadius: 10,
              }}
            >
              Start New Game
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {/* </ScrollView>
      </SafeAreaView> */}
    </Fragment>
  );
}

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  controlContainer: {
    marginTop: 10,
  },
  controllerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  controlBtn: {
    backgroundColor: "yellow",
    width: 100,
    height: 100,
  },
});
