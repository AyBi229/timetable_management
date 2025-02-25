import React from 'react';
import './Login.css';
import { 
  Autocomplete,
  Box, 
  Button, 
  FormControl, 
  InputLabel, 
  MenuItem, 
  Select,
  TextField
} from '@mui/material';
import axios from 'axios';

// async functions for api calls
// fetch countries
const fetchCountries = async () => {
  try {
    const res = await axios.get('https://restcountries.com/v3.1/all');
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

const Login = () => {
  // states
  const [countries, setCountries] = React.useState([]); // countries list
  const [errors, setErrors] = React.useState({}); // error object
  
  /**
   * DO NOT DELETE:
   * fixing the issue concerning the disruption of the custom styling for the country selection autocomplete component 
   */
  const countrySearchInputRef = React.useRef(null); // ref of country autocomplete component

  // mounting execution only once
  React.useEffect(() => {
    // Manually focus the input field until after component has been rendered
    if (countrySearchInputRef.current) {
      countrySearchInputRef.current.focus(); // 
    }
  }, []); // <- the dependency array stops the component from getting focused multiple times on re-renders

  // api calls
  // country api
  React.useEffect(() => {
    fetchCountries().then((data) => {
      const sortedCountries = data.map((country) => country.name.common)
        .sort((a, b) => a.localeCompare(b));
      
      setCountries(sortedCountries);
    });
  }, []);

  // verification form submission handler
  const handleVerification = (e) => {
    e.preventDefault(); // prevents reload during submission

    // FormData API
    const formData = new FormData(e.target);

    // data
    const first_name = formData.get('first_name');
    const last_name = formData.get('last_name');
    const organization_email = formData.get('organization_email');
    const school_name = formData.get('school_name');

    // error messages
    // first name
    if (first_name.length < 2) {
      errors.first_name = 'First name must be at least 2 characters';
      e.target.first_name.focus();
    }
    // last name
    if (last_name.length < 2) {
      errors.last_name = 'Last name must be at least 2 characters';
      e.target.last_name.focus();
    }
    // organization email
    if (!organization_email.includes('@')) {
      errors.organization_email = 'Invalid email address';
      e.target.organization_email.focus();
    }
    // school name
    if (school_name.length < 2) {
      errors.school_name = 'School name must be at least 2 characters';
      e.target.school_name.focus();
    }

    // form values
    const formValues = {
      country: formData.get('country'),
      first_name: formData.get('first_name'),
      last_name: formData.get('last_name'),
      organization_email: formData.get('organization_email'),
      school_name: formData.get('school_name'),
    };

    console.log(Object.entries(formValues));
  }

  return (
    <main className='login-page'>
      <div className="login-form-container flex flex-col gap-4">

        {/* title */}
        <div className='login-title-container'>
          <h1 className='login-title text-2xl font-bold'>Welcome to Excelor</h1> {/* title */}
          <em className='login-subtitle text-center'>Log in as a member of your organisation</em> {/* subtitle */}
        </div>

        {/* form */}
        <form className='login-form' onSubmit={handleVerification}>

          {/* country autocomplete container */}
          <Box sx={{ width: 500 }}>
            {/* country autocomplete */}
            <Autocomplete
              disablePortal
              options={countries}
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
