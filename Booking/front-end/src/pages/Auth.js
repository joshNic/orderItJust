import React, { Component } from 'react';
import './Auth.css';

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.emailEl = React.createRef();
    this.passwordEl = React.createRef();
  }
  submitHandler = e => {
    e.preventDefault();
    const email = this.emailEl.current.value;
    const password = this.passwordEl.current.value;
    if (email.length === 0 || password.length === 0) {
      return;
    }
    const requestBody = {
      query: `
      mutation{
        createUser(userInput:{email:"${email}",password:"${password}"}){
          _id
          email
        }
      }
      `
    };
    fetch('http://localhost:8000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };

  render() {
    return (
      <form className='auth-form' onSubmit={this.submitHandler}>
        <div className='form-control'>
          <label htmlFor='email'>E-Mail</label>
          <input type='email' id='email' ref={this.emailEl} />
        </div>
        <div className='form-control'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' ref={this.passwordEl} />
        </div>
        <div className='form-actions'>
          <button type='button'>Switch to SignUp</button>
          <button type='submit'>Submit</button>
        </div>
      </form>
    );
  }
}