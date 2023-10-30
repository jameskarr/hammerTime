import './App.css'
import React, { useState } from 'react'

const HammerTime = () => {

  const [selectedColor, setSelectedColor] = useState('')
  const [cupColor, setCupColor] = useState('')
  const [headColor, setHeadColor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setCupColor(selectedColor)
    setHeadColor(selectedColor)
  }

  const handleCupChange = (e) => {
    setSelectedColor(e.target.value);
  }

  const handleHeadChange = (e) => {
    setSelectedColor(e.target.value);
  }

  return (
    <div>

      <h1>Color Selector</h1>

      <form onSubmit={handleSubmit}>

      <label htmlFor="cups">Head:</label>
        <select id="cups" onChange={handleCupChange}>
          <option value="">Select a color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="orange">Orange</option>
        </select>

      <label htmlFor="head">Cups:</label>
        <select id="head" onChange={handleHeadChange}>
          <option value="">Select a color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="orange">Orange</option>
        </select>

        <button type="submit">Submit</button>
      </form>

     

      <div className='theHammer'>
        <div className='upperHammer'>
          <div className="cups"></div>
          <div className="head" style={{backgroundColor: headColor}}></div>
          <div className="cups" style={{backgroundColor: cupColor}}></div>
        </div>
        <div className='lowerHammer'>
          <div className="shaft"></div>
          <div className="grip"></div>
          <div className="pommel"></div>
        </div>
      </div>

    </div>
  )

}
export default HammerTime