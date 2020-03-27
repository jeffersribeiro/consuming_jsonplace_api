import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {userInfo} from '../signIn';

export default class Main extends Component {
  state = {userInformation: userInfo};
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Name: {this.state.userInformation.map(e => e.name)}
        </Text>
        <Text style={styles.text}>
          username: {this.state.userInformation.map(e => e.username)}
        </Text>
        <Text style={styles.text}>
          E-mail: {this.state.userInformation.map(e => e.email)}
        </Text>
        <Text style={styles.text}>
          Phone: {this.state.userInformation.map(e => e.phone)}
        </Text>
        <Text style={styles.text}>
          website: {this.state.userInformation.map(e => e.website)}
        </Text>
        <Text style={styles.text}>Company information</Text>
        <Text style={styles.text}>
          Name: {this.state.userInformation.map(e => e.company.name)}
        </Text>
        <Text style={styles.text}>
          catchPhrase:{' '}
          {this.state.userInformation.map(e => e.company.catchPhrase)}
        </Text>
        <Text style={styles.text}>
          bs: {this.state.userInformation.map(e => e.company.bs)}
        </Text>
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
  text: {
    fontSize: 20,
    margin: 10,
  },
});
