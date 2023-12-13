import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Register.css';
import InputField from '../InputField/InputField';
import PasswordField from '../PasswordField/PasswordField';
import SubmitButton from '../SubmitButton/SubmitButton';
import ErrorForm from '../ErrorForm/ErrorForm';
// import InputRadioField from '../InputRadioField/InputRadioField';
// import InpuCheckBoxField from '../InpuCheckboxField/InpuCheckboxField'
// import SelectField from '../SelectField/SelectField';
import { validator } from '../Helpers/validators';
import TextareaField from '../TextareaField/TextareaField';

export default class Register extends Component{
  constructor(props){
    super(props)
    this.state = {
       registerData :{gender: 'male', music: true, country: "france"},
       errors:{}
      }
      this.title = React.createRef()
  }

  handleChange(event){
   
    // if(event.target.type === "checkbox"){
    //   console.log(event.target.checked);
    //   this.setState({...this.state, 
    //     registerData: {
    //       ...this.state.registerData, 
    //       [event.target.name]: event.target.checked} 
    //   })
    //   return
    // }
    const errors = validator[event.target.name]({[event.target.name]: event.target.value})
    this.setState({...this.state, 
      registerData: {
        ...this.state.registerData, 
        [event.target.name]: event.target.value},
        errors: errors
      } 
    )
  }

  checkFormValid(){
    //Traitement
    const errors = validator.checkAll(this.state.registerData)
    
    if(Object.keys(errors).length === 0){
      return true
    }
    this.setState({...this.state, errors: errors})
    return false
  }

  handleSubmit(event){
      event.preventDefault()
      if(this.checkFormValid()){
        console.log('Formulaire valide !');
      }else{
        console.log('formulaire non valide');
      }
      console.log(this.state);
  }


  render(){
  return <div className="register login">
    <form action="" onSubmit={this.handleSubmit.bind(this)} method="POST">

      <h2 ref={this.title}
      >Inscription</h2>
      {/* <InputRadioField
        handleChange={this.handleChange.bind(this)}
      />
      <InpuCheckBoxField 
        handleChange={this.handleChange.bind(this)}
      />
      <SelectField 
        country = {["France","Belgique", "italie"]}
        handleChange={this.handleChange.bind(this)}
      /> */}
      <InputField 
      type="text" 
      name="firstname" 
      placeholder="Your first name ..."
      handleChange={this.handleChange.bind(this)}
      />
      {
        this.state.errors.firstname ?
        <ErrorForm errorMessage={ this.state.errors.firstname}/> 
        : null
      }
      <InputField 
      type="text" 
      name="lastname" 
      placeholder="Your last name ..."
      handleChange={this.handleChange.bind(this)}
      />
      {
        this.state.errors.lastname ?
        <ErrorForm errorMessage={ this.state.errors.lastname}/> 
        : null
      }
      <InputField 
      type="email" 
      name="email" 
      placeholder="Your email name ..."
      handleChange={this.handleChange.bind(this)}
      />
      {
        this.state.errors.email ?
        <ErrorForm errorMessage={ this.state.errors.email}/> 
        : null
      }
      <PasswordField 
      name ="password" 
      placeholder="Your password ..."
      handleChange={this.handleChange.bind(this)}
      />
      {
        this.state.errors.password ?
        <ErrorForm errorMessage={ this.state.errors.password}/> 
        : null
      }
      <PasswordField 
      name ="passwordConfirm" 
      placeholder="Confirm your password ..."
      handleChange={this.handleChange.bind(this)}
      />
      {
        this.state.errors.passwordConfirm ?
        <ErrorForm errorMessage={ this.state.errors.passwordConfirm}/> 
        : null
      }
      
      <SubmitButton> S'inscrire </SubmitButton>
      <div className="form-row">
        <p className="form-info">Vous avez déjà un compte ? Si oui, <a href="/login.html">cliquez ici</a> pour vous
          connecter.</p>
      </div>
    </form>
  </div>
  }
};
