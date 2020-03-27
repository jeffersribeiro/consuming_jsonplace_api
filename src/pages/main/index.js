import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {userInfo} from '../signIn';

export default class Main extends Component {
  render() {
    return (
      <View>
        {console.warn(userInfo.map(e => e.id))}
        <Text>teste</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
  },
});
