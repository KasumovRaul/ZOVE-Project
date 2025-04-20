import React, { useEffect, useRef } from 'react';
import { TextField, Button, Box } from '@mui/material';
import './CreateAccount.css';
import imgRight from '../assets/large-168.jpg'; // görselin yolu
import { Link } from 'react-router-dom';

const CreateAccount = () => {


     useEffect(()=>{
          window.scrollTo(0, 0);
     },[]);

  return (
    <div className="create-account-wrapper">
      <div className="create-account-content">
        <div className="create-account-left">
          <h2>Create Account</h2>
          <p>Start your journey with us today!</p>

          <Box
            component="form"
            className="create-account-form"
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              required
              sx={{ mb: 2,  '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#000',
                },
                '&:hover fieldset': {
                  borderColor: '#000',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#000',
                },
                '& .MuiInputLabel-root': {
                    color: '#000', 
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#000', 
                  },
              }, }}
            />
            <TextField
              label="Email Address"
              type="email"
              variant="outlined"
              fullWidth
              required
              sx={{ mb: 2,  '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#000',
                },
                '&:hover fieldset': {
                  borderColor: '#000',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#000',
                },
                '& .MuiInputLabel-root': {
                    color: '#000', 
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#000', 
                  },
              }, }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              sx={{ mb: 2,  '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#000',
                },
                '&:hover fieldset': {
                  borderColor: '#000',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#000',
                },
                '& .MuiInputLabel-root': {
                    color: '#000', 
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#000', 
                  },
              }, }}
            />
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              sx={{ mb: 2,  '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#000',
                },
                '&:hover fieldset': {
                  borderColor: '#000',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#000',
                },
                '& .MuiInputLabel-root': {
                    color: '#000', 
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#000', 
                  },
              }, }}
            />
            <TextField
              label="Phone Number"
              type="tel"
              variant="outlined"
              fullWidth
              required
              sx={{ mb: 2,  '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#000',
                },
                '&:hover fieldset': {
                  borderColor: '#000',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#000',
                },
                '& .MuiInputLabel-root': {
                    color: '#000', 
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#000', 
                  },
              }, }}
            />

            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{
                backgroundColor: '#fff',
                padding: '10px 0',
                fontWeight: 'bold',
                color:'#000',
                '&:hover': {
                  backgroundColor: '#f1f1f1',
                },
              }}
            >
              Create Account
            </Button>

            <p className="login-link">
              Already have an account? <Link to='/Enterlogin'> <a href="#">Log in</a></Link>
            </p>
          </Box>
        </div>
        <div className="create-account-right">
            <img src={imgRight} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
