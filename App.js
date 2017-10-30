import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC915WSqDQDQduDIxZKUJVUAtOdTplhMQg',
      authDomain: 'auth-acb21.firebaseapp.com',
      databaseURL: 'https://auth-acb21.firebaseio.com',
      projectId: 'auth-acb21',
      storageBucket: 'auth-acb21.appspot.com',
      messagingSenderId: '13828717977'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />
    }
  }

  render() {
    return (
    <View>
      <Header headerText='Authentication' />
      {this.renderContent()}
    </View>
    );
  }

}
