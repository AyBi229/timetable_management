import React from 'react';
import './Login.css';
import { 
  Box, 
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useQuery } from '@tanstack/react-query';
import { fetchCountries } from '../Utilities/apis.js';
import axios from 'axios';

const Login = () => {
  // states
  const [error, setError] = React.useState(null);
  const [showPassword, setShowPassword] = React.useState(false);

  // handlers
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  const handleVerification = (e) => {
    // Prevents reload during submission
    e.preventDefault();
  
    // FormData API
    const formData = new FormData(e.target);
  
    // Data
    const email = formData.get('email');
    const password = formData.get('password');
    
  }
  
  return (
    <main className='login-page'>
      <div className="login-form-container flex flex-col gap-4">

        {/* title */}
        <div className='login-title-container'>
          <h1 className='login-title text-2xl font-bold'>Welcome back!</h1> {/* title */}
          <em className='login-subtitle text-center'>Log in as superuser</em> {/* subtitle */}
          { error && <small className='text-red-500'>One of the credentials are incorrect</small> }
        </div>

        {/* form */}
        <form
          className='login-form' 
          onSubmit={handleVerification}
        >
          <TextField 
              id="email" 
              label="Email"
              variant="outlined"
              required
              name='email'
              type='email'
              sx={{ 
                width: '100%', 
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgb(99, 99, 135)',  // Change border color on focus
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'rgb(99, 99, 135)',  // Change label color on focus
                },
              }}
            />
            
            <FormControl sx={{ width: '100%' }} variant="outlined">
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                required
                type={showPassword ? 'text' : 'password'}
                name='password'
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword ? 'hide the password' : 'display the password'
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                sx={{ 
                  width: '100%', 
                  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgb(99, 99, 135)',  // Change border color on focus
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: 'rgb(99, 99, 135)',  // Change label color on focus
                  },
                }}
              />
            </FormControl>
            <Box>
              {/* verify submit button */}
              <Button 
                variant="contained" 
                type='submit'
                sx={{ 
                  backgroundColor: 'rgb(99, 99, 135)', 
                  padding: '8px 30px',
                  textTransform: 'none',  // This stops the all-caps behavior
                  float: 'right'
                }}
              >
                Verify
              </Button>
            </Box>
        </form>
      </div>
    </main>
  );
};

export default Login;
