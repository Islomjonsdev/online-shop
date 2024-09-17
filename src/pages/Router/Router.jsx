import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Layout />}>

            </Route>
        </Routes>
    </div>
  )
}

export default Router