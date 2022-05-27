import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class NameComponent extends Component<Props> {
  render() {
    return (
      <View>
        <Text style={styles.nameText}>
          Some name goes here... {this.props.name}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nameText: {
    color: '#fff'
  }
});