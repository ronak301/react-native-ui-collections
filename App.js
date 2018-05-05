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
        <View style={{ width, height: 500, backgroundColor: 'white' }} >
          <Svg height={10} width={width}>
              {this.renderZigZagView()}
          </Svg>
          <Text>yoo</Text>
        </View>
      </View>
    );
  }

  renderZigZagView = () => {
    let nodes = []
    let result = ''
    for(var i = 0; i < 40; i++) {
      // let points = ''
      // const x1 = i * 10
      // const y1 = (i % 2 === 0) ? 0 : 10
      // const x2 = x1 + 10
      // const y2 = y1 === 0 ? 10 : 0 
      // result += x1 + ","
      // result += x2 + " "
      const point1 = `${20*i},0 ${20*i+10},10 ${20*(i+1)},0`
      console.log("point1", point1)
      nodes.push(
        <Svg.Polygon
          points={point1}
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
