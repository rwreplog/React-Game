import React, { PureComponent } from "react";
import { AppRegistry, StyleSheet, StatusBar } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { Finger } from "./components/player";
import { MoveFinger } from "./systems/GameLoop";

//const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const RADIUS = 25;
let counter = 0;
export default class App extends PureComponent {
  constructor() {
    super();
    // this.state = {
    //   x: WIDTH / 2 - 45,
    //   y: HEIGHT / 2 - 50,
    // };
  }

  updateHandler = ({ touches, screen, layout, time }) => {
    // let move = touches.find((x) => x.type === "move");
    // if (move) {
    //   this.setState({
    //     x: this.state.x + move.delta.pageX,
    //     y: this.state.y + move.delta.pageY,
    //   });
    // }
  };

  render() {
    return (
      <GameEngine
        style={styles.container}
        systems={[MoveFinger]} //-- We can add as many systems as needed
        entities={{
          1: { position: [50, 125], text: "1", renderer: <Finger /> }, //-- Notice that each entity has a unique id (required)
          2: { position: [50, 275], text: "19", renderer: <Finger /> }, //-- and a map of components. Each entity has an optional
          3: { position: [50, 525], text: "7", renderer: <Finger /> }, //-- renderer component. If no renderer is supplied with the
          4: { position: [50, 675], text: "4", renderer: <Finger /> }, //-- entity - it won't get displayed.
          5: { position: [270, 125], text: "15", renderer: <Finger /> },
          6: { position: [270, 275], text: "15", renderer: <Finger /> },
          7: { position: [270, 525], text: "15", renderer: <Finger /> },
          8: { position: [270, 675], text: "15", renderer: <Finger /> },
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

//   render() {
//     return (
//       <GameLoop style={styles.container} onUpdate={this.updateHandler}>
//         <View
//           // style={[styles.player, { left: this.state.x, top: this.state.y }]}
//           style={[styles.player, { left: this.state.x, top: this.state.y }]}
//         >
//           <Text style={[styles.targetText]}>3 +</Text>
//         </View>
//         <View style={[styles.btnOne, { left: "5%", top: "10%" }]}>
//           <Text style={[styles.text]}>22</Text>
//         </View>
//         <View style={[styles.btnTwo, { right: "5%", top: "10%" }]}>
//           <Text style={[styles.text]}>9</Text>
//         </View>
//         <View style={[styles.btnThree, { left: "5%", top: "30%" }]}>
//           <Text style={[styles.text]}>7</Text>
//         </View>
//         <View style={[styles.btnFour, { right: "5%", top: "30%" }]}>
//           <Text style={[styles.text]}>15</Text>
//         </View>
//         <View style={[styles.btnFive, { left: "5%", bottom: "10%" }]}>
//           <Text style={[styles.text]}>3</Text>
//         </View>
//         <View style={[styles.btnSix, { right: "5%", bottom: "10%" }]}>
//           <Text style={[styles.text]}>6</Text>
//         </View>
//         <View style={[styles.btnSeven, { left: "5%", bottom: "30%" }]}>
//           <Text style={[styles.text]}>17</Text>
//         </View>
//         <View style={[styles.btnEight, { right: "5%", bottom: "30%" }]}>
//           <Text style={[styles.text]}>2</Text>
//         </View>
//       </GameLoop>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "rgba(0, 0, 255, 0.5)",
//   },
//   player: {
//     // position: "absolute",
//     // backgroundColor: "pink",
//     // width: RADIUS * 2,
//     // height: RADIUS * 2,
//     // borderRadius: RADIUS * 2,
//   },
//   targetText: {
//     fontSize: 99,
//     color: "white",
//     fontFamily: "Arial",
//   },
//   text: {
//     textAlign: "center",
//     marginTop: "auto",
//     marginBottom: "auto",
//     fontSize: 45,
//     fontFamily: "Arial",
//   },
//   btnOne: {
//     position: "absolute",
//     backgroundColor: "white",
//     width: RADIUS * 5,
//     height: RADIUS * 5,
//     borderRadius: RADIUS * 5,
//     borderWidth: 3,
//     borderColor: "rgba(255, 0, 0, 0.7)",
//   },
//   btnTwo: {
//     position: "absolute",
//     backgroundColor: "white",
//     width: RADIUS * 5,
//     height: RADIUS * 5,
//     borderRadius: RADIUS * 5,
//     borderWidth: 3,
//     borderColor: "rgba(255, 0, 0, 0.7)",
//   },
//   btnThree: {
//     position: "absolute",
//     backgroundColor: "white",
//     width: RADIUS * 5,
//     height: RADIUS * 5,
//     borderRadius: RADIUS * 5,
//     borderWidth: 3,
//     borderColor: "rgba(255, 0, 0, 0.7)",
//   },
//   btnFour: {
//     position: "absolute",
//     backgroundColor: "white",
//     width: RADIUS * 5,
//     height: RADIUS * 5,
//     borderRadius: RADIUS * 5,
//     borderWidth: 3,
//     borderColor: "rgba(255, 0, 0, 0.7)",
//   },
//   btnFive: {
//     position: "absolute",
//     backgroundColor: "white",
//     width: RADIUS * 5,
//     height: RADIUS * 5,
//     borderRadius: RADIUS * 5,
//     borderWidth: 3,
//     borderColor: "rgba(255, 0, 0, 0.7)",
//   },
//   btnSix: {
//     position: "absolute",
//     backgroundColor: "white",
//     width: RADIUS * 5,
//     height: RADIUS * 5,
//     borderRadius: RADIUS * 5,
//     borderWidth: 3,
//     borderColor: "rgba(255, 0, 0, 0.7)",
//   },
//   btnSeven: {
//     position: "absolute",
//     backgroundColor: "white",
//     width: RADIUS * 5,
//     height: RADIUS * 5,
//     borderRadius: RADIUS * 5,
//     borderWidth: 3,
//     borderColor: "rgba(255, 0, 0, 0.7)",
//   },
//   btnEight: {
//     position: "absolute",
//     backgroundColor: "white",
//     width: RADIUS * 5,
//     height: RADIUS * 5,
//     borderRadius: RADIUS * 5,
//     borderWidth: 3,
//     borderColor: "rgba(255, 0, 0, 0.7)",
//   },
// });

AppRegistry.registerComponent("BestGameEver", () => BestGameEver);
