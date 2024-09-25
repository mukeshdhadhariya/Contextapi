import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user}=useContext(UserContext)

    if(!user) return <div className='text-center text-white text-3xl'>Please Login </div>
    return (
    <div className='text-center text-white text-3xl '>Welcome {user.username}</div>
    )
}

export default Profile