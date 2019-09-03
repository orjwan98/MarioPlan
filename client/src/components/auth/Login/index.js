import React, { Component } from 'react';
import { thisExpression } from '@babel/types';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  handleOnChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleOnSubmit}>
          <h5 className="grey-text text-darken-3">Log In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" onChange={this.handleOnChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              onChange={this.handleOnChange}
            />
          </div>
          <div className="input-field">
            <button className="btn purple lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
