import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import { Constants, Svg } from 'expo';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: 400, height: 200, backgroundColor: 'white' }}>
        <Svg height={200} width={400}>
          {this.renderZigZagView()}
        </Svg>
        </View>
      </View>
    );
  }

  renderZigZagView = () => {
    let nodes = []
    for(var i = 0; i < 40; i++) {
      const x1 = i * 10
      const y1 = (i % 2 === 0) ? 0 : 10
      const x2 = x1 + 10
      const y2 = y1 === 0 ? 10 : 0 
      nodes.push(
        <Svg.Line
          x1={x1+''}
          y1={y1+''}
          x2={x2+''}
          y2={y2+''}
          stroke="green"
          strokeWidth="2"
        />
      )
    }
    return nodes
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
