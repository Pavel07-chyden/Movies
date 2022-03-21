import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { FooterIkra } from './FooterIkra'

export const Footer = () => {
  return (
    <div>
      Footer
      <Routes>
        <Route
          path='/footer'
          element={<FooterIkra />}
        />
      </Routes>
    </div>
  )
}
