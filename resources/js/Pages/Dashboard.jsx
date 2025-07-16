import React, { useEffect, useState } from 'react'
import { usePage } from '@inertiajs/react'
import { Autocomplete, Button } from '@mui/material';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import regions from '../../../regions.json'
import { router } from '@inertiajs/react';
import RegionalOfficesCard from '../Components/RegionalOfficesCard';

/* only the super user and admins can access this page */
export default function Dashboard() {
    // retrieve the user
    const { auth } = usePage().props;
    const { user } = auth;
    const { flash } = usePage().props;
    // modules
    const { regional_offices: regionalOffices } = usePage().props;
    const { complexes } = usePage().props;
    const { institutions } = usePage().props;
    const { admins } = usePage().props;
    // const moea = usePage().props

    // states
    // show create form
    const [showCreateForm, setShowCreateForm] = useState(false);
    // region name error
    const [error, setError] = useState(null)
    // successful creation
    const [success, setSuccess] = useState(flash.success);
    // introduction msg
    const [intro, setIntro] = useState(null)
    // is the region card open or not?
    const [regionOpen, setRegionOpen] = useState(false);
    const [complexOpen, setComplexOpen] = useState(false);
    const [institutionOpen, setInstitutionOpen] = useState(false);
    const [adminOpen, setAdminOpen] = useState(false);

    // effects
    // is it introduction time?
    useEffect(() => {
        console.log(regionalOffices)
        if (regionalOffices?.length) {
            setIntro(false);
        } else {
            setIntro(true)
        }
    }, [regionalOffices]);
    // successful msg display
    useEffect(() => {
        if (success) {
            const timeout = setTimeout(() => {
                setSuccess(null);
            }, 5000);

            return () => clearTimeout(timeout);
        }
    }, [success]);

    // handlers
    // create click
    const handleCreateClick = () => {
        setShowCreateForm(true);
    }
    // submit region form
    const handleRegionFormSubmission = (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        const region = formdata.get('region');
        
        if(!region) {
            setError('a region must be selected')
        } else {
            setError(null)
        }
        console.log(region)
        console.log(error)

        router.post('/regional-office', { region }, {
              onError: (errors) => {
                console.error(errors);
            },
              onSuccess: (res) => {
                console.log(res)
                setShowCreateForm(false);
            }
        })
    }
    const handleCancelForm = () => {
        setShowCreateForm(false)
    }
    // cards openings
    const handleCardOpen = (card) => {
        switch(card) {
            case 'region':
                setRegionOpen(prev => !prev)
                break;
            case 'complex':
                setComplexOpen(prev => !prev)
                break
            case 'intitution':
                setInstitutionOpen(prev => !prev)
                break
            case 'admin':
                setAdminOpen(prev => !prev)
            default:
                console.error('error in handle card open name')
        }
    }
    
    return (
        <main className='px-10'>
            {success && (
                <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 w-1/3 top-10 right-10 absolute rounded-lg transition-opacity duration-300 ease-in-out">
                    <b>{success}</b>
                </div>
            )}
            <h3 className='text-center font-bold text-xl my-10'>Welcome Superuser <em style={{ color: 'rgb(99, 99, 135)' }}>{user.first_name} {user.last_name}</em></h3>
            {intro && !showCreateForm ? <div className='flex justify-center items-center'>
                <div className='text-center border border-black-100 rounded-md py-5 px-10'>
                    <p>Start by creating offices for each region</p>
                    <Button onClick={handleCreateClick} sx={{ color: 'rgb(127, 127, 255)', '&:hover': { backgroundColor: 'rgb(250, 250, 255)' } }}>Create</Button>
                </div>
            </div>
            : <div className='flex gap-10 justify-center items-center'>
                <div onClick={()=> handleCardOpen('region')} className='hover:cursor-pointer text-center border border-black-100 rounded-md py-5 px-10 space-y-5'>
                    <h3 className='text-center text-lg space-x-2'>
                        <span className='font-semibold'>Regional Offices</span>
                        <b className='text-orange-500 bg-orange-100 rounded-full px-3 py-1'>{regionalOffices?.length}</b>
                    </h3>
                    {regionOpen && (
                        <RegionalOfficesCard regionalOffices={regionalOffices} />
                    )}
                    
                </div>
                <div className='text-center border border-black-100 rounded-md py-5 px-10'>
                    <h3 className='text-center text-lg space-x-2'>
                        <span className='font-semibold'>Complexes</span>
                        <b className='text-yellow-500 bg-yellow-100 rounded-full px-3 py-1'>{complexes.length}</b>
                    </h3>
                </div>
                <div className='text-center border border-black-100 rounded-md py-5 px-10'>
                    <h3 className='text-center text-lg space-x-2'>
                        <span className='font-semibold'>Institutions</span>
                        <b className='text-green-500 bg-green-100 rounded-full px-3 py-1'>{institutions.length}</b>
                    </h3>
                </div>
                <div className='text-center border border-black-100 rounded-md py-5 px-10'>
                    <h3 className='text-center text-lg space-x-2'>
                        <span className='font-semibold'>Admins</span>
                        <b className='text-cyan-500 bg-cyan-100 rounded-full px-3 py-1'>{admins.superadmins.length + admins.regional_admins.length + admins.institution_admins.length}</b>
                    </h3>
                </div>
            </div>}
            {/* create form */}
            {showCreateForm && (
                <div className='border border-black-100 rounded-md py-5 px-10 sm:w-1/2 md:w-1/3 lg:w-1/4 space-y-5 max-h-[90vh] overflow-y-auto'>
                    <h3 className='text-center font-bold text-lg'>New regional office</h3>

                    <form onSubmit={handleRegionFormSubmission} className='space-y-4'>
                        <Box className="w-full">
                            <Autocomplete
                            id="region"
                            options={regions}
                            getOptionLabel={(option) => option.name}
                            disabled={regions.length === 0}
                            renderInput={(params) => (
                                <TextField
                                {...params}
                                name='region'
                                error={error}
                                helperText={error}
                                label="Choose your region"
                                fullWidth
                                onChange={() => setError(null)}
                                />
                            )}
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

                        <Box className="w-full flex justify-between items-center pt-2">
                            <Button
                            variant="outlined"
                            onClick={handleCancelForm}
                            size='small'
                            sx={{
                                color: 'rgb(99, 99, 135)',
                                border: '1px solid rgb(99, 99, 135)',
                                padding: '8px 20px',
                                textTransform: 'none',
                                '&:hover': { backgroundColor: 'rgb(250, 250, 255)' },
                            }}
                            >
                            Cancel
                            </Button>

                            <Button
                            variant="contained"
                            type='submit'
                            size='small'
                            sx={{
                                backgroundColor: 'rgb(99, 99, 135)',
                                padding: '8px 20px',
                                textTransform: 'none',
                            }}
                            >
                            Create
                            </Button>
                        </Box>
                    </form>
                </div>
            )}

        </main>
    ) 
}
