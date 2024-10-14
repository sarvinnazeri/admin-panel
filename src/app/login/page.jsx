'use client';

import React from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    if (username === 'sarvinnazeri' && email === 'sarvinnazeri@gmail.com' && password === '44044991') {
      alert('Logged in successfully');
      router.push('/components/home');
    } else {
      alert('Invalid username, email, or password');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginBottom: 10,
          padding: 7,
          borderRadius: 2,
          background: 'white',
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            defaultValue='sarvinnazeri'
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            defaultValue='sarvinnazeri@gmail.com'
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            defaultValue='44044991'
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
