import { Dimensions } from "react-native";

let timer = 0.0;
const colors = ["#FF0000", "#00FF00"];
const MoveFinger = (entities, { touches, time }) => {
  //-- I'm choosing to update the game state (entities) directly for the sake of brevity and simplicity.
  //-- There's nothing stopping you from treating the game state as immutable and returning a copy..
  //-- Example: return { ...entities, t.id: { UPDATED COMPONENTS }};
  //-- That said, it's probably worth considering performance implications in either case.

  // touches
  //   .filter((t) => t.type === "move")
  //   .forEach((t) => {
  //     let finger = entities[t.id];
  //     if (finger && finger.position) {
  //       finger.position = [
  //         finger.position[0] + t.delta.pageX,
  //         finger.position[1] + t.delta.pageY,
  //       ];
  //     }
  //   });

  let background = entities[0];
  let delta = time.delta;
  if (timer >= 5000) {
    console.log("5000");
    timer = 0;
    background.bgColor = colors[Math.floor(Math.random() * colors.length)];
    entities[1].text = (Math.floor(Math.random() * 99) + 1).toString();
    entities[2].text = (Math.floor(Math.random() * 99) + 1).toString();
    entities[3].text = (Math.floor(Math.random() * 99) + 1).toString();
    entities[4].text = (Math.floor(Math.random() * 99) + 1).toString();
    entities[5].text = (Math.floor(Math.random() * 99) + 1).toString();
    entities[6].text = (Math.floor(Math.random() * 99) + 1).toString();
    entities[7].text = (Math.floor(Math.random() * 99) + 1).toString();
    entities[8].text = (Math.floor(Math.random() * 99) + 1).toString();
    entities[9].text = (Math.floor(Math.random() * 99) + 1).toString();
  }

  //console.log(timer);
  timer = timer + delta;

  let bgWidth = (1 - timer / 5000) * Dimensions.get("window").height;
  let bgHeight = (1 - timer / 5000) * Dimensions.get("window").height;
  // console.log(background.size);
  background.size = [bgWidth, bgHeight];

  return entities;
};

export { MoveFinger };
