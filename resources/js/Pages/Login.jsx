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
          <em className='login-subtitle text-center'>Log in as a member of your organisation</em> {/* subtitle */}
        </div>

        {/* form */}
        <form className='login-form' onSubmit={handleVerification}>

          {/* country autocomplete container */}
          <Box sx={{ width: 500 }}>
            {/* country autocomplete */}
            <Autocomplete
              disablePortal
              options={countries || []}
              loading={isLoading}
              getOptionLabel={(option) => option.name.common}
              isOptionEqualToValue={(option, value) => option.name.common === value.name.common}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  name='country'
                  label="Choose your country"
                  inputRef={countrySearchInputRef} // Attach the ref to the TextField
                  sx={{
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'rgb(99, 99, 135)', // Change label color on focus
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgb(99, 99, 135) !important', // Forcefully change border color on focus
                    },
                    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgb(99, 99, 135) !important', // Forcefully change border color on focus
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgb(99, 99, 135)', // Initial label color
                    },
                    // Add a transition for smooth focusing
                    '& .MuiOutlinedInput-root': {
                      transition: 'border-color 0.3s ease',
                    },
                  }}
                />
              )}
            />
          </Box>

          {/* first & last name inputs box */}
          <Box sx={{ width: 500, display: 'flex', gap: '1rem' }}>
            {/* first name input */}
            <TextField 
              id="first-name" 
              error={ errors.first_name ? true : false }
              helperText={ errors.first_name ? errors.first_name : '' }
              label={ errors.first_name ? "Error" : "First Name" } 
              variant="outlined"
              required
              name='first_name'
              sx={{ 
                width: '50%', 
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgb(99, 99, 135)',  // Change border color on focus
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'rgb(99, 99, 135)',  // Change label color on focus
                },
              }}
            />

            {/* last name input */}
            <TextField 
              id="last-name" 
              error={ errors.last_name ? true : false }
              helperText={ errors.last_name ? errors.last_name : '' }
              label={ errors.last_name ? "Error" : "Last Name" }
              variant="outlined"
              required
              name='last_name'
              sx={{ 
                width: '50%', 
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgb(99, 99, 135)',  // Change border color on focus
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'rgb(99, 99, 135)',  // Change label color on focus
                },
              }}
            />
          </Box>

          {/* organization email input */}
          <TextField 
            required
            error={ errors.organization_email ? true : false }
            helperText={ errors.organization_email ? errors.organization_email : '' }
            sx={{
              width: 500,
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgb(99, 99, 135)',  // Change border color on focus
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'rgb(99, 99, 135)',  // Change label color on focus
              },
            }}
            id="organization-email" 
            label={ errors.organization_email ? "Error" : "Organization Email" }
            variant="outlined"
            name='organization_email'
          />
        
          {/* school name */}
          <TextField 
            required
            sx={{
              width: 500,
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgb(99, 99, 135)',  // Change border color on focus
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'rgb(99, 99, 135)',  // Change label color on focus
              },
            }}
            id="school-name" 
            error={ errors.school_name ? true : false }
            helperText={ errors.school_name ? errors.school_name : '' }
            label={ errors.school_name ? "Error" : "School Name" }
            variant="outlined"
            name='school_name'
          />

          {/* link to sign up */}
          <Link href="/signup" underline="hover" sx={{ color: 'rgb(99, 99, 135)' }}>
            First time here?
          </Link>

          {/* verify submit button box */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            {/* verify submit button */}
            <Button 
              variant="contained" 
              type='submit'
              sx={{ 
                backgroundColor: 'rgb(99, 99, 135)', 
                padding: '5px 30px',
                textTransform: 'none'  // This stops the all-caps behavior
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
