import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils.js";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import FormInput from "../../components/form-input/form-input.component.jsx";
import Button from "../../components/button/button.component.jsx";
import "./sign-in.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const logEmailUser = async () => {
    try{
      const response = await signInUserWithEmailAndPassword(email, password);
      console.log(response);
      resetFormFields();
    }catch(error){
      if(error.code = 'auth/user-not-found') alert("User not found!");
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  return (
    <div>
      <div className="sign-in-container">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form>
          <FormInput
            label="email"
            type="email"
            value={email}
            name="email"
            onChange={handleChange}
          />
          <FormInput
            label="password"
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
          />
        </form>
        <Button onClick={logEmailUser}>Sign In</Button>
        <Button buttonType='google' onClick={logGoogleUser}>Sign in with Google</Button>
      </div>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
