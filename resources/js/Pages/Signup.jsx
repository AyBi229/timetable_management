import { Box } from '@mui/system';
import { Autocomplete, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import regions from '../../../regions.json'
import React from 'react';

export default function Signup() {
    // ref of country autocomplete component
    const regionsSearchInputRef = React.useRef(null);

    // mounting execution only once
    React.useEffect(() => {
        // Manually focus the input field until after component has been rendered
        if (regionsSearchInputRef.current) {
            regionsSearchInputRef.current.focus(); // 
        }
    }, []); // <- the dependency array stops the component from getting focused multiple times on re-renders

    const handleSubmit = () => {}

    return (
        <main className='login-page'>
            <div className="login-form-container flex flex-col gap-4">

                {/* title */}
                <div className='login-title-container'>
                    <h1 className='login-title text-2xl font-bold'>Excelor</h1> {/* title */}
                    <em className='login-subtitle text-center'>Welcome back, Superadmin!</em> {/* subtitle */}
                </div>

                {/* form */}
                <form className='login-form' onSubmit={handleSubmit}>
                    {/* region */}
                    <Box sx={{ width: 500 }}>
                        {/* regions autocomplete */}
                        <Autocomplete
                            disablePortal
                            options={regions}
                            getOptionLabel={(option) => option.name}
                            isOptionEqualToValue={(option, value) => option.name === value.name}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    required
                                    name='regions'
                                    label="Choose your region"
                                    inputRef={regionsSearchInputRef} // Attach the ref to the TextField
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

                    {/* verify submit button box */}
                    <Box>
                        {/* verify submit button */}
                        <Button 
                            variant="contained" 
                            type='button'
                            sx={{ 
                                backgroundColor: 'rgb(99, 99, 135)', 
                                padding: '8px 30px',
                                textTransform: 'none',  // This stops the all-caps behavior
                                float: 'right' 
                            }}
                        >
                            Next
                        </Button>
                    </Box>
                </form>
            </div>
        </main>
    )
}
