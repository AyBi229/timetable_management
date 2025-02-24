import React from 'react';
import './Login.css';
import { 
  Box, 
  Button, 
  FormControl, 
  InputLabel, 
  MenuItem, 
  Select,
  TextField 
} from '@mui/material';

const Login = () => {
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
  React.useEffect(() => {})

  // school api call
  React.useEffect(() => {})

  // verification form submission handler
  const handleVerification = (e) => {
    e.preventDefault(); // prevents reload during submission
    console.log("form submitted!")
  }

  return (
    <main className='login-page'>
      <div className="login-form-container flex flex-col gap-4">
        {/* title */}
        <h1 className='login-title text-2xl font-bold'>Login as your organisation's Super Admin</h1>

        {/* form */}
        <form className='login-form' onSubmit={handleVerification}>

          {/* country select box */}
          <Box sx={{ width: 500 }}>
            {/* country select container */}
            <FormControl fullWidth>
              {/* country select label */}
              <InputLabel id="country-id">Choose your country</InputLabel>
              {/* country select */}
              <Select
                labelId="country-id"
                id="country"
                value={country}
                label="Choose your country"
                onChange={handleCountryChange}
                autoFocus
              >
                <MenuItem value={'morocco'}>Morocco</MenuItem>
                <MenuItem value={'france'}>France</MenuItem>
                <MenuItem value={'usa'}>USA</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* first name input */}
          <TextField 
            id="first-name" 
            label="First Name" 
            variant="outlined"
          />

          {/* last name input */}
          <TextField 
            id="last-name" 
            label="Last Name" 
            variant="outlined"
          />

          {/* organization email input */}
          <TextField 
            id="organization-email" 
            label="Organization Email" 
            variant="outlined"
          />

          {/* school select box */}
          <Box sx={{ width: 500 }}>
            {/* school select container */}
            <FormControl fullWidth>
              {/* school select label */}
              <InputLabel id="school-id">Choose your school</InputLabel>
              {/* school select */}
              <Select
                labelId="school-id"
                id="school"
                value={school}
                label="Choose your school"
                onChange={handleSchoolChange}
              >
                <MenuItem value={'morocco'}>School 1</MenuItem>
                <MenuItem value={'france'}>School 2</MenuItem>
                <MenuItem value={'usa'}>School 3</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* verify button */}
          <Button variant="contained" type='submit'>Verify</Button>
        </form>
      </div>
    </main>
  );
};

export default Login;
