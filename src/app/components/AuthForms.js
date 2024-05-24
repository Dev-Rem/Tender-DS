"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";

export default function AuthenticationForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isFormValid, setIsFormValid] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleToggleForm = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if any field is empty
    const isEmptyField = Object.values(formValues).some(
      (value) => value === ""
    );
    setIsFormValid(!isEmptyField);

    if (!isEmptyField) {
      // Simulate form submission (you can replace this with your actual submission logic)
      setTimeout(() => {
        setShowSuccessMessage(true);
        setFormValues({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      }, 1000);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ mt: 1 }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      maxWidth="400px"
      mx="auto"
    >
      <Typography component="h1" variant="h5">
        {isLogin ? "Login" : "Register"}
      </Typography>
      {!isLogin && (
        <>
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="given-name"
            autoFocus
            value={formValues.firstName}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
            value={formValues.lastName}
            onChange={handleChange}
          />
        </>
      )}
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus={!isLogin}
        value={formValues.email}
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete={isLogin ? "current-password" : "new-password"}
        value={formValues.password}
        onChange={handleChange}
      />
      {!isFormValid && (
        <Alert severity="error" sx={{ width: "100%", mt: 1 }}>
          Please fill in all the fields.
        </Alert>
      )}
      {showSuccessMessage && (
        <Alert severity="success" sx={{ width: "100%", mt: 1 }}>
          {isLogin ? "Logged in successfully!" : "Registered successfully!"}
        </Alert>
      )}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="error"
        sx={{ mt: 3, mb: 2 }}
      >
        {isLogin ? "Login" : "Register"}
      </Button>
      <Typography
        variant="body2"
        onClick={handleToggleForm}
        sx={{ cursor: "pointer", textDecoration: "underline" }}
      >
        {isLogin
          ? "Don't have an account? Register"
          : "Already have an account? Login"}
      </Typography>
    </Box>
  );
}
