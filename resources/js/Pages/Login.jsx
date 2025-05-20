import React from 'react';
import './Login.css';
import { 
  Autocomplete,
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

const Login = () => {
  // use query hook
  const { data: countries, isLoading, isError } = useQuery({
    queryKey: ['countries'], // key
    queryFn: fetchCountries // function
  });

  // states
  const [errors, setErrors] = React.useState({}); // error object
  const [showPassword, setShowPassword] = React.useState(false);
  
  /**
   * DO NOT DELETE:
   * fixing the issue concerning the disruption of the custom styling for the country selection autocomplete component 
   */

  // ref of country autocomplete component
  const countrySearchInputRef = React.useRef(null);

  // mounting execution only once
  React.useEffect(() => {
    // Manually focus the input field until after component has been rendered
    if (countrySearchInputRef.current) {
      countrySearchInputRef.current.focus(); // 
    }
  }, []); // <- the dependency array stops the component from getting focused multiple times on re-renders

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
  
    // Clear previous errors
    setErrors({});
  
    // Initialize a flag to track validation
    let isValid = true;
  
    // Validate organization email
    // regex for email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email address' }));
      e.target.email.focus();
      isValid = false;
    }
  
    // Validate school name
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!passwordRegex.test(password)) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Weak password' }));
      e.target.password.focus();
      isValid = false;
    }
  
    // If valid, log the form values
    if (isValid) {
      const formValues = { email, password };
      console.log(formValues);
    }
  }
  
  return (
    <main className='login-page'>
      <div className="login-form-container flex flex-col gap-4">

        {/* title */}
        <div className='login-title-container'>
          <h1 className='login-title text-2xl font-bold'>Welcome back!</h1> {/* title */}
          <em className='login-subtitle text-center'>Log in as the superuser</em> {/* subtitle */}
        </div>

        {/* form */}
        <form
          className='login-form' 
          onSubmit={handleVerification}
        >
          <TextField 
              id="email" 
              error={ errors.email ? true : false }
              helperText={ errors.email ? errors.email : '' }
              label={ errors.email ? "Error" : "Email" } 
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
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? 'text' : 'password'}
            name='password'
            error={errors.password} // --> check useFormControl in https://mui.com/material-ui/react-text-field/ <--
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
