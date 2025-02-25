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
  // api state lists
  const [countries, setCountries] = React.useState([]); // countries list
  
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
    console.log("form submitted!")
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
              label="First Name" 
              variant="outlined"
              required
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
              label="Last Name" 
              variant="outlined"
              required
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
            label="Organization Email" 
            variant="outlined"
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
            label="School Name" 
            variant="outlined"
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
