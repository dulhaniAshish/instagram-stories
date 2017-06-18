import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Animated } from "react-native";

class ProgressBar extends Component {

  componentWillMount() {
    this.animation = new Animated.Value(this.props.progress);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.progress !== this.props.progress) {
      Animated.timing(this.animation, {
        toValue: this.props.progress,
        duration: this.props.duration
      }).start();
    }
  }


  render() {
    const {
      height,
      borderColor,
      borderWidth,
      borderRadius,
      barColor,
      fillColor,
      row
    } = this.props;

    const widthInterpolated = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"],
      extrapolate: "clamp"
    })

    return (
      <View style={[{flexDirection: "row", height }, row ? { flex: 1} : undefined ]}>
        <View style={{ flex: 1, borderColor, borderWidth}}>
          <View
            style={[StyleSheet.absoluteFill, { backgroundColor: fillColor }]}
          />
          <Animated.View
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: widthInterpolated,
              backgroundColor: barColor,
              borderRadius: 5,
            }}
          />
        </View>
      </View>
    )
  }
}

ProgressBar.defaultProps = {
  height: 10,
  borderColor: "#000",
  borderWidth: 2,
  barColor: "tomato",
  fillColor: "rgba(0,0,0,.5)",
  duration: 100
}

class ReactNativeProgressBar extends Component {
  state = {
    progress: 0,
    isProgressBarStarted: false,
  };

  componentWillReceiveProps(nextProps) {
      if(nextProps.start && (!this.state.isProgressBarStarted)) {
        this.setState({isProgressBarStarted: true});
        setInterval(() => {
            this.setState(state => ({
                progress: state.progress + 0.1,
            }));
        }, nextProps.duration);
      }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.progressContainer}>
          <ProgressBar
            row
            progress={this.state.progress}
            duration={this.props.duration}
            height={this.props.height}
            borderWidth={this.props.borderWidth}
            barColor={this.props.barColor}
            fillColor={this.props.fillColor}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  progressContainer: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal : 4,
  }
});

export default ReactNativeProgressBar;
