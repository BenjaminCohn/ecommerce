import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Register.css';
import InputField from '../InputField/InputField';
import PasswordField from '../PasswordField/PasswordField';
import SubmitButton from '../SubmitButton/SubmitButton';
import ErrorForm from '../ErrorForm/ErrorForm';
import InputRadioField from '../InputRadioField/InputRadioField';
import InpuCheckBoxField from '../InpuCheckboxField/InpuCheckboxField'
import SelectField from '../SelectField/SelectField';

export default class Register extends Component{
  constructor(props){
    super(props)
    this.state = {gender: 'male', music: true, country: "france"}
    this.title = React.createRef()
  }

  handleChange(event){
   
    if(event.target.type === "checkbox"){
      console.log(event.target.checked);
      this.setState({...this.state,[event.target.name]: event.target.checked })
      console.log(this.state);
      return
    }
    this.setState({...this.state,[event.target.name]: event.target.value })
    console.log(this.state);
  }
  render(){

  return <div className="register login">
    <form action="">

      <h2 ref={this.title}
      >Inscription</h2>
      <InputRadioField
        handleChange={this.handleChange.bind(this)}
      />
      <InpuCheckBoxField 
        handleChange={this.handleChange.bind(this)}
      />
      <SelectField 
        country = {["france"]}
        handleChange={this.handleChange.bind(this)}
      />
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
