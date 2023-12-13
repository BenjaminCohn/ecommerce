import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Register.css';
import InputField from '../InputField/InputField';
import PasswordField from '../PasswordField/PasswordField';
import SubmitButton from '../SubmitButton/SubmitButton';
import ErrorForm from '../ErrorForm/ErrorForm';

export default class Register extends Component{
  constructor(props){
    super(props)
    this.state = {}
    this.title = React.createRef()
  }

  handleChange(event){
    this.setState({...this.state,[event.target.name]: event.target.value })
    console.log(this.state);
  }
  render(){

  return <div className="register login">
    <form action="">

      <h2 ref={this.title}
      >Inscription</h2>
      <div className="form-row flex gap-10">
          <input type="text" 
          className="flex-1"  
          name="firstname" 
          placeholder="data ..." 
          onChange= {this.handleChange.bind(this)}
          />
      </div>
      <InputField 
      type="text" 
      name="firstname" 
      placeholder="Your first name ..."
      handleChange={this.handleChange.bind(this)}
      />
      <InputField 
      type="text" 
      name="lastname" 
      placeholder="Your last name ..."
      handleChange={this.handleChange.bind(this)}
      />
      <ErrorForm errorMessage="Your firstname length must between 6 and 20"/>
      <InputField 
      type="email" 
      name="email" 
      placeholder="Your email name ..."
      handleChange={this.handleChange.bind(this)}
      />
      <ErrorForm errorMessage="You email is not correct !"/>
      <PasswordField 
      name ="password" 
      placeholder="Your password ..."
      handleChange={this.handleChange.bind(this)}
      />
      <PasswordField 
      name ="passwordConfirm" 
      placeholder="Confirm your password ..."
      handleChange={this.handleChange.bind(this)}
      />
     
      <SubmitButton> S'inscrire </SubmitButton>
      <div className="form-row">
        <p className="form-info">Vous avez déjà un compte ? Si oui, <a href="/login.html">cliquez ici</a> pour vous
          connecter.</p>
      </div>
    </form>
  </div>
  }
};
