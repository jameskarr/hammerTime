import './App.css'
import { useState } from 'react'

const HammerTime = () => {

  const [headColor, setHeadColor] = useState('')
  const [cupColor, setCupColor] = useState('')
  const [shaftColor, setShaftColor] = useState('')
  const [gripColor, setGripColor] = useState('')
  const [pommelColor, setPommelColor] = useState('')

  const handleHeadChange = (e) => {
    setHeadColor(e.target.value)
  }

  const handleCupChange = (e) => {
    setCupColor(e.target.value)
  }

  const handleShaftChange = (e) => {
    setShaftColor(e.target.value)
  }

  const handleGripChange = (e) => {
    setGripColor(e.target.value)
  }

  const handlePommelChange = (e) => {
    setPommelColor(e.target.value)
  }

  return (
    <div>

      <h1>Color Selector</h1>

      <form>
        <label htmlFor="head">Head:</label>
          <select id="head" onChange={handleHeadChange}>
            <option value="">Select a color</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="orange">Orange</option>
          </select>

        <label htmlFor="cups">Cups:</label>
          <select id="cups" onChange={handleCupChange}>
            <option value="">Select a color</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="orange">Orange</option>
          </select>

        <label htmlFor="cups">Shaft:</label>
          <select id="cups" onChange={handleShaftChange}>
            <option value="">Select a color</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="orange">Orange</option>
          </select>

        <label htmlFor="cups">Grip:</label>
          <select id="cups" onChange={handleGripChange}>
            <option value="">Select a color</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="orange">Orange</option>
          </select>

        <label htmlFor="cups">Pommel:</label>
          <select id="cups" onChange={handlePommelChange}>
            <option value="">Select a color</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="orange">Orange</option>
          </select>

          <button type="submit">Reset</button>
      </form>

     

      <div className='theHammer'>
        <div className='upperHammer'>
          <div className="cups" style={{backgroundColor: cupColor}}></div>
          <div className="head" style={{backgroundColor: headColor}}></div>
          <div className="cups" style={{backgroundColor: cupColor}}></div>
        </div>
        <div className='lowerHammer'>
          <div className="shaft" style={{backgroundColor: shaftColor}}></div>
          <div className="grip" style={{backgroundColor: gripColor}}></div>
          <div className="pommel" style={{backgroundColor: pommelColor}}></div>
        </div>
      </div>

    </div>
  )

}
export default HammerTime