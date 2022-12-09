import React, { PureComponent } from "react";
import { View } from "react-native";

class Background extends PureComponent {
  render() {
    const width = this.props.size[0];
    const height = this.props.size[1];
    const x = 0;
    const y = 0;

    return (
      <View
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "auto",
          marginBottom: "auto",
          borderRadius: this.props.radius,
          // top: y,
          // left: x,
          width: width,
          height: height,
          backgroundColor: this.props.bgColor,
        }}
      />
    );
  }
}

export { Background };
