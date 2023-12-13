import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import InputField from '../InputField/InputField';
import ErrorForm from '../ErrorForm/ErrorForm';
import PasswordField from '../PasswordField/PasswordField';
import SubmitButton from '../SubmitButton/SubmitButton';
import { validator } from '../Helpers/validators';

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {loginData:{}, errors: {email:'', password: ''}}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  checkFormValid(){
    const errors = this.state.errors
    //console.log(errors);
    if(errors && Object.keys(errors).length === 0){
      return true
    }
    this.setState({...this.state, errors: errors })
    return false
  }
  handleSubmit(event){
    event.preventDefault()
    if (this.checkFormValid()) {
      console.log('Formulaire login valide');
      // APPEL SERVEUR
      //console.log(this.state);
    } else {
      console.log('Formulaire login non valide');
    }
  }

  handleChange(event){
    let oldErrors = this.state.errors
    const errors = validator[event.target.name]({ [event.target.name]: event.target.value })
    if(errors[event.target.name]){
      oldErrors[event.target.name] = errors[event.target.name]
    }else{
      delete  oldErrors[event.target.name]
    }
    
    this.setState({
      ...this.state,
      loginData: {
        ...this.state.loginData,
        [event.target.name]: event.target.value
      },
      errors: oldErrors
    })
    
  }

  render(){
    return(
    <div className="login">
      <form action="" onSubmit={this.handleSubmit}>
      <h2>Connexion</h2>
  
      <InputField 
      type="email" 
      name="email" 
      placeholder="Your email ..."
      handleChange={this.handleChange}
      />
       {
          this.state.errors.email ? 
          <ErrorForm errorMessage={this.state.errors.email} /> : 
          null
        }
      <PasswordField 
      name ="password" 
      placeholder="Your password ..."
      handleChange={this.handleChange}
      />
     {
          this.state.errors.password ? 
          <ErrorForm errorMessage={this.state.errors.password} /> : 
          null
        }
      
      <SubmitButton formIsValid={Object.keys(this.state.errors).length === 0}>Se connecter </SubmitButton>
  
      <div className="form-row">
          <p className="form-info">Vous n'avez pas de compte ? Si oui, <a href="/register.html">cliquez ici</a> pour vous
              s'inscrire.</p>
      </div>
  </form>
    </div>)
  }
};