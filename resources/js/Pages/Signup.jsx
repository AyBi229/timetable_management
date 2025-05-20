import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { fetchCountries } from '../Utilities/apis';
import { Box } from '@mui/system';
import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';

export default function Signup() {
    // use query hook
    // countries
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

    // refs
    // ref of country autocomplete component
    const countrySearchInputRef = React.useRef(null);

    // useEffects
    // mounting execution only once
    React.useEffect(() => {
        // Manually focus the input field until after component has been rendered
        if (countrySearchInputRef.current) {
        countrySearchInputRef.current.focus(); // 
        }
    }, []); // <- the dependency array stops the component from getting focused multiple times on re-renders

    // fetching regions (testing)
    React.useEffect(() => {
        countries.map((c))
    }, []);

    // handlers
    const handleSubmit = () => {}
    return (
        <main className='login-page'>
            <div className="login-form-container flex flex-col gap-4">

                {/* title */}
                <div className='login-title-container'>
                    <h1 className='login-title text-2xl font-bold'>Welcome to Excelor Superadmin</h1> {/* title */}
                    <em className='login-subtitle text-center'>select your region</em> {/* subtitle */}
                </div>

                {/* form */}
                <form className='login-form' onSubmit={handleSubmit}>
                    {/* region */}
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
                </form>
            </div>
        </main>
    )
}
