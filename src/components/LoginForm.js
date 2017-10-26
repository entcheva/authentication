import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

export default class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder='person@example.com'
            label='Email'
            value={this.state.email}
            changeText={(text) => this.setState({ email: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder='password'
            label='Password'
            value={this.state.password}
            changeText={password => this.setState({ password })}
          />
        </CardSection>

        <CardSection>
          <Button>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}
