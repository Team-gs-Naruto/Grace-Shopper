import React, {useState, useEffect} from 'react'
import Parallax from './parallax'
import Slider from './slider'

const HomePage = () => {
  return (
    <div>
      <Slider />
      <Parallax />
    </div>
  )
}

export default HomePage
