import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SigninElements";

const initialFormValues = {
  username: "",
  password: "",
};

const SignIn = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState(false);

  const history = useHistory()

  const click = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/login", formValues)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push('/dashboard')
      })
      .catch((err) => {
        console.log("ERROR ", err);
        setError(true)
      });
  };

  const change = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Cheddar</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Username</FormLabel>
              <FormInput
                name="username"
                value={formValues.username}
                onChange={change}
                type="username"
                required
              />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                name="password"
                value={formValues.password}
                onChange={change}
                type="password"
                required
              />
              <FormButton type="submit" onClick={click}>
                Continue
              </FormButton>
              {error && (
                <Text style={{ color: "red" }}>
                  Username or password incorrect
                </Text>
              )}
              <Text>Forgot password?</Text>
              <Text>Sign up</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
