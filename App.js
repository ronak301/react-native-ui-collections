import { StyleSheet, Dimensions, Text, View } from 'react-native';
import React, { Component } from 'react';
import { Constants, Svg } from 'expo';
const { width } = Dimensions.get('window')

export default class App extends React.Component {
  render() {
    console.log("width", width)
    return (
      <View style={styles.container}>
        <View style={{ width, height: 100, backgroundColor: 'cyan' }} />
        <View style={{ width, height: 500, backgroundColor: 'gray', alignItems: 'center' }} >
          <Svg height={10} width={width}>
              {this.renderZigZagView()}
          </Svg>
          <Text>I am text</Text>
        </View>
      </View>
    );
  }

  renderZigZagView = () => {
    let nodes = []
    for(var i = 0; i < 40; i++) {
      const point = `${20*i},0 ${20*i+10},10 ${20*(i+1)},0`
      nodes.push(
        <Svg.Polygon
          points={point}
          fill="cyan"
          stroke="cyan"
          strokeWidth="1"
        />
      )
    }
    return nodes
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
