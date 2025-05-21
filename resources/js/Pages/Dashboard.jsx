import React, { useState } from 'react'
import { usePage } from '@inertiajs/react'
import { Button } from '@mui/material';

export default function Dashboard() {
    // retrieve the user
    const { auth } = usePage().props;
    const { user } = auth;

    // states
    // create form
    const [showCreateForm, setShowCreateForm] = useState(false);

    // handlers
    const handleCreateClick = () => {
        setShowCreateForm(true);
    }
    
    return (
        <main>
            <h3 className='text-center font-bold text-xl my-10'>Welcome Superuser <em style={{ color: 'rgb(127, 127, 255)' }}>{user.first_name} {user.last_name}</em></h3>
            <div className='flex justify-center items-center'>
                <div className='text-center border border-black-100 rounded-md py-5 px-10 g'>
                    <p>Start by creating your regions</p>
                    <Button onClick={handleCreateClick} sx={{ color: 'rgb(127, 127, 255)', '&:hover': { backgroundColor: 'rgb(250, 250, 255)' } }}>Create</Button>
                </div>
            </div>
            {/* create form */}
            {showCreateForm && (
                <div></div>
            )}
        </main>
    ) 
}
