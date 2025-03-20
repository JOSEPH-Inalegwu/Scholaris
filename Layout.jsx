import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './src/Components/Header/Header'
import Sidebar from './src/Components/Sidebar/Sidebar'

const Layout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Sidebar />
    </>
  )
}

export default Layout