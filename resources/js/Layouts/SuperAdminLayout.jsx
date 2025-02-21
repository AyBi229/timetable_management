import React from 'react'
import Navbar from '../Components/Navbar'

export default function SuperAdminLayout({ children }) {
  return (
    <div>
        <Navbar />
        <main>{children}</main>
        <footer>Super Admin Footer</footer>
    </div>
  )
}
