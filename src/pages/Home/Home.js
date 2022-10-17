// import { Button } from '@mui/material'
import React from 'react'
import "./Home.module.css"
import Button from '../../components/Button/Button'
import MapsApi from '../../components/Map/MapApi'

const Home = () => {
  return (
    <main>
      
      <h3>Here is the main landing page of Casa App!</h3>
      <section>
        <Button name='Click Me'/>
      </section>
      <MapsApi />
    </main>
  )
}

export default Home