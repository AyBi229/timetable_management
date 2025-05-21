import React, { useEffect, useState } from 'react'
import { usePage } from '@inertiajs/react'
import { Autocomplete, Button } from '@mui/material';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import regions from '../../../regions.json'

/* only the super user and admins can access this page */
export default function Dashboard() {
    // retrieve the user
    const { auth } = usePage().props;
    const { user } = auth;

    // states
    // show create form
    const [showCreateForm, setShowCreateForm] = useState(false);
    // region name error
    const [nameError, setNameError] = useState(null)

    // handlers
    // create click
    const handleCreateClick = () => {
        setShowCreateForm(true);
    }
    // submit region form
    const handleRegionFormSubmission = () => {
        
    }
    
    return (
        <main className='px-10'>
            <h3 className='text-center font-bold text-xl my-10'>Welcome Superuser <em style={{ color: 'rgb(99, 99, 135)' }}>{user.first_name} {user.last_name}</em></h3>
            {!showCreateForm && <div className='flex justify-center items-center'>
                <div className='text-center border border-black-100 rounded-md py-5 px-10'>
                    <p>Start by creating complexes for each region</p>
                    <Button onClick={handleCreateClick} sx={{ color: 'rgb(127, 127, 255)', '&:hover': { backgroundColor: 'rgb(250, 250, 255)' } }}>Create</Button>
                </div>
            </div>}
            {/* create form */}
            {showCreateForm && (
                <div className='border border-black-100 rounded-md py-5 px-10 sm:w-1/2 md:w-1/3 lg:w-1/4 space-y-5'>
                    <h3 className='text-center font-bold text-lg'>New Complex</h3>
                    <form onSubmit={handleRegionFormSubmission} className='space-y-2'>
                        <Box>
                            <Autocomplete
                                id="region"
                                options={regions} // Add options here
                                getOptionLabel={(option) => option.name}
                                disabled={regions.length === 0} // Disable if schools list is empty
                                renderInput={(params) => <TextField name='region' {...params} label="Choose your region" />}
                                 sx={{ 
                                    width: '100%', 
                                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'rgb(99, 99, 135)',
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: 'rgb(99, 99, 135)',
                                    },
                                }}
                            />
                        </Box>
                        <Box>
                            {/* verify submit button */}
                            <Button 
                                variant="contained" 
                                type='submit'
                                sx={{ 
                                    backgroundColor: 'rgb(99, 99, 135)', 
                                    padding: '8px 30px',
                                    textTransform: 'none',  // This stops the all-caps behavior
                                }}
                            >
                                Next
                            </Button>
                        </Box>
                    </form>
                    
                </div>
            )}
        </main>
    ) 
}
