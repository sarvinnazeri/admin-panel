'use client';
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    const formData = new FormData(event.target);
    const data = {
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password'),
      phone: formData.get('phone'),
    };

    try {
      const response = await fetch('https://66c3a13cd057009ee9c0dbaf.mockapi.io/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('User added:', result);

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginBottom: 10,
          borderRadius: 2,
          background: 'white',
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
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
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
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone Number"
            name="phone"
            autoComplete="phone"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={loading}
          >
            {loading ? 'Adding User...' : 'Add User'}
          </Button>
          {error && <Typography color="error">{error}</Typography>}
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
