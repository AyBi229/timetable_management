import React from 'react';
import './Login.css';
import { 
  Autocomplete,
  Box, 
  Button,
  TextField
} from '@mui/material';
import Link from '@mui/material/Link';
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

  // verification form submission handler
  const handleVerification = (e) => {
    // Prevents reload during submission
    e.preventDefault();
  
    // FormData API
    const formData = new FormData(e.target);
  
    // Data
    const country = formData.get('country');
    const first_name = formData.get('first_name');
    const last_name = formData.get('last_name');
    const organization_email = formData.get('organization_email');
    const school_name = formData.get('school_name');
  
    // Clear previous errors
    setErrors({});
  
    // Initialize a flag to track validation
    let isValid = true;
  
    // Validate first name
    if (first_name.length < 2) {
      setErrors((prevErrors) => ({ ...prevErrors, first_name: 'Must be at least 2 characters' }));
      e.target.first_name.focus();
      isValid = false;
    }
  
    // Validate last name
    if (last_name.length < 2) {
      setErrors((prevErrors) => ({ ...prevErrors, last_name: 'Must be at least 2 characters' }));
      e.target.last_name.focus();
      isValid = false;
    }
  
    // Validate organization email
    // regex for email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(organization_email)) {
      setErrors((prevErrors) => ({ ...prevErrors, organization_email: 'Invalid email address' }));
      e.target.organization_email.focus();
      isValid = false;
    }
  
    // Validate school name
    if (school_name.length < 2) {
      setErrors((prevErrors) => ({ ...prevErrors, school_name: 'Must be at least 2 characters' }));
      e.target.school_name.focus();
      isValid = false;
    }
  
    // If valid, log the form values
    if (isValid) {
      const formValues = { country, first_name, last_name, organization_email, school_name };
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
            <TextField
              type='password'
              name='password'
              id='password'
              label={ errors.password ? "Error" : "Password" } 
              error={ errors.password ? true : false }
              helperText={ errors.password ? errors.password : '' }
              variant='outlined'
              required
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
