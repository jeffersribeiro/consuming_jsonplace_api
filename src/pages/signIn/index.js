import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StackActions, NavigationActions} from 'react-navigation';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';

import api from '../../services/api';

export let userInfo = [];

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    loading: false,
    error: '',
  };
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      dispatch: PropTypes.func,
    }).isRequired,
  };

  handleEmailChange = email => {
    this.setState({
      email,
    });
  };
  handlePasswordChange = password => {
    this.setState({
      password,
    });
  };

  handleSignInPress = () => {
    if (this.state.email.length === 0 || this.state.password.length === 0) {
      this.setState({
        error: 'Preencha usuário e senha para continuar!',
      });
    } else {
      this.setState({
        loading: true,
      });
      api.get('/users').then(res => {
        userInfo.unshift(res.data.find(e => e.email === this.state.email));
        res.data.find(e =>
          e.email === this.state.email
            ? this.props.navigation.navigate('Main')
            : this.setState({
                error:
                  'Houve um problema com o login, verifique suas credenciais!',
                loading: false,
              }),
        );
      });
    }
    setTimeout(() => {
      this.setState({
        error: '',
      });
    }, 3000);
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Image
          source={require('../../assets/images/code-logo.jpg')}
          style={styles.logoImage}
        />
        <TextInput
          style={styles.input}
          placeholder="email"
          autoCompleteType="email"
          value={this.state.email}
          onChangeText={this.handleEmailChange}
        />
        <TextInput
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="off"
          style={styles.input}
          placeholder="password"
          value={this.state.password}
          onChangeText={this.handlePasswordChange}
        />
        {this.state.error.length !== 0 && (
          <Text style={styles.textError}>{this.state.error}</Text>
        )}
        <TouchableHighlight
          onPress={this.handleSignInPress}
          style={styles.button}>
          {this.state.loading !== false ? (
            <ActivityIndicator size={30} color="white" />
          ) : (
            <Text style={styles.textButton}>Entrar</Text>
          )}
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={styles.textSignUp}>Registra-se</Text>
        </TouchableHighlight>
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
  input: {
    backgroundColor: 'white',
    height: '10%',
    borderRadius: 8,
    margin: 20,
    fontSize: 15,
    borderBottomColor: 'darkgray',
    borderBottomWidth: 1,
  },
  button: {
    backgroundColor: 'skyblue',
    padding: 20,
    margin: 8,
    borderRadius: 8,
  },
  textButton: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  textSignUp: {
    fontSize: 18,
    textAlign: 'center',
    margin: 20,
    color: 'darkgray',
  },
  textError: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
  logoImage: {height: '40%', width: '100%'},
});

export default SignIn;
