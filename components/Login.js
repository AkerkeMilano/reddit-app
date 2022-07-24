import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { AUTH_TOKEN } from "../pages/constants";
import { SIGNUP_MUTATION, LOGIN_MUTATION } from "../pages/login-definitions";
import styles from "../styles/Login.module.css";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { useLoginContext } from "../contexts/LoginContext";

const Login = ({handleClose}) => {
  const [formState, setFormState] = useState({
    login: true,
    email: "",
    password: "",
    name: "",
  });

  const {login: loginUser} = useLoginContext();

  const [error, setError] = useState();

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: formState.email,
      password: formState.password,
    },
    onCompleted: ({ login }) => {
      localStorage.setItem(AUTH_TOKEN, login.token);
      loginUser(formState.email);
      handleClose();
    },
    onError: () => {
      setError("User is not found");
    }
  });
  
  const [signup] = useMutation(SIGNUP_MUTATION, {
    variables: {
      name: formState.name,
      email: formState.email,
      password: formState.password,
    },
    onCompleted: ({ signup }) => {
      localStorage.setItem(AUTH_TOKEN, signup.token);
      loginUser(formState.email);
      handleClose();
    },
    onError: () => {
      setError("Already existed user");
    }
  });

  return (
    <div className={styles["login-block"]}>
      <div className={styles["input-fields"]}>
        {!formState.login ? (
          <TextField
            fullWidth
            value={formState.name}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value,
              })
            }
            type="text"
            placeholder="Your name"
          />
        ) : null}

        <TextField
          fullWidth
          value={formState.email}
          onChange={(e) =>
            setFormState({
              ...formState,
              email: e.target.value,
            })
          }
          type="text"
          placeholder="Your email address"
        />
        <TextField
          fullWidth
          value={formState.password}
          onChange={(e) =>
            setFormState({
              ...formState,
              password: e.target.value,
            })
          }
          type="password"
          placeholder="Choose a safe password"
        />
      </div>
      <Button
      variant="contained"
        className="pointer button"
        onClick={formState.login ? login : signup}
      >
        {formState.login ? "Login" : "Create account"}
      </Button>
      <Button
      variant="text"
        className="pointer button"
        onClick={(e) => {
          setFormState({
            ...formState,
            login: !formState.login,
          });
        }}
      >
        {formState.login
          ? "Need to create an account"
          : "Already have a account"}
      </Button>
      <p>{error ? `${error}` : null}</p>
    </div>
  );
};

export default Login;
