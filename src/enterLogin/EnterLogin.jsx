import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import imgRight from '../assets/large-168.jpg'; // görselin yolu
import './EnterLogin.css';
import { useEffect } from 'react';

const EnterLogin = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);

  return (
    <div className="login-wrapper">
      <div className="login-left">
        <Box component="form" className="login-form" noValidate autoComplete="off">
          <h1>Welcome Back 👋</h1>
          <p>Please log in to your account</p>

          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#000',
                  },
                  '&:hover fieldset': {
                    borderColor: '#000',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#000',
                  },
                },
              }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#000',
                  },
                  '&:hover fieldset': {
                    borderColor: '#000',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#000',
                  },
                },
              }}
          />

          <a href="#" className="forgot-link">Forgot your password?</a>

          <Button
            className='login-submit-btn'
            variant="contained"

            fullWidth
            type="submit"
            sx={{
                mt: 2,
                padding: '10px 0',
                backgroundColor: '#fff',  
                color: '#000',
                '&:hover': {
                  backgroundColor: '#f1f1f1',
                }
              }}
          >
            Log In
          </Button>
        </Box>
      </div>

      <div className="login-right">
        <img src={imgRight} alt="Login visual" />
      </div>
    </div>
  );
};

export default EnterLogin;
