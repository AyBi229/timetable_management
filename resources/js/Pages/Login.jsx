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
// fetch schools
const fetchSchools = async (name, country) => {
  try {
    const res = await axios.get(`http://universities.hipolabs.com/search?name=${name}${country}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

const Login = () => {
  // api state lists
  const [countries, setCountries] = React.useState([]); // countries
  const [schools, setSchools] = React.useState([]); // schools

  // states
  const [country, setCountry] = React.useState(''); // country
  const [school, setSchool] = React.useState(''); // school

  // state handlers
  // country select 
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  }

  // school select
  const handleSchoolChange = (e) => {
    setSchool(e.target.value);
  }

  // country api call
  React.useEffect(() => {
    fetchCountries().then((data) => {
      const sortedCountries = data.map((country) => country.name.common)
        .sort((a, b) => a.localeCompare(b));
      
      setCountries(sortedCountries);
    });
  })

  // school api call
  React.useEffect(() => {})

  // verification form submission handler
  const handleVerification = (e) => {
    e.preventDefault(); // prevents reload during submission
    console.log("form submitted!")
  }

  // ref for country search input
  const countrySearchInputRef = React.useRef(null);

  // manual focus on country search input as to not disrupt the custom styling
  React.useEffect(() => {
    // Delay focus until after component has been rendered
    if (countrySearchInputRef.current) {
      countrySearchInputRef.current.focus(); // Manually focus the input field
    }
  }, []); // <- the dependency array stops the element from getting focused multiple times on re-renders

  return (
    <main className='login-page'>
      <div className="login-form-container flex flex-col gap-4">
        {/* title */}
        <h1 className='login-title text-2xl font-bold'>Login as your organisation's Super Admin</h1>

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

          {/* school autocompete box */}
          <Box sx={{ width: 500 }}>
            {/* school autocompete */}
            <Autocomplete
              disablePortal
              options={schools}
              renderInput={(params) => <TextField {...params} label="Choose your school" />}
              sx={{
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'rgb(99, 99, 135)',  // Change label color on focus
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgb(99, 99, 135)',  // Change border color on focus
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgb(99, 99, 135)',  // Change border color on focus
                }
              }}
            />
          </Box>

          {/* verify button box */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            {/* verify button itself */}
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
