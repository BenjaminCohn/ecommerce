import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import InputField from '../InputField/InputField';
import ErrorForm from '../ErrorForm/ErrorForm';
import PasswordField from '../PasswordField/PasswordField';
import SubmitButton from '../SubmitButton/SubmitButton';

const Login = () => (
  <div className="login">
    <form action="">
    <h2>Connexion</h2>

    <InputField type="text" name="firstname" placeholder="Your first name ..."/>
    <ErrorForm errorMessage="You email is not correct !"/>
    <PasswordField name ="password" placeholder="Your password ..."/>

    <SubmitButton> Se connecter </SubmitButton>

    <div className="form-row">
        <p className="form-info">Vous n'avez pas de compte ? Si oui, <a href="/register.html">cliquez ici</a> pour vous
            s'inscrire.</p>
    </div>
</form>
  </div>
);

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
