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
//alphabetical
  const colorOptions = [
    { name: "Standard", value: "" },
    { name: "Black", value: "#000000" },
    { name: "Black Silk", value: "#46494A" },
    { name: "Blue", value: "#0000FF" },
    { name: "Blue Silk", value: "#488AC7" },
    { name: "Bone (tan/natural)", value: "#e3dac9" },
    { name: "Brown", value: "#964B00" },
    { name: "Copper", value: "#B87333" },
    { name: "Gold", value: "#FFD700" },
    { name: "Grey", value: "#B9B5AB" },
    { name: "Magenta", value: "#FF00FF" },
    { name: "Marble", value: "#F0E9D6" },
    { name: "Merlot", value: "#7F171F" },
    { name: "Olive/Army Green", value: "#808000" },
    { name: "Orange", value: "#FFA500" },
    { name: "Pink", value: "#FFC0CB" },
    { name: "Pink Silk", value: "#FFCBD6" },
    { name: "Purple", value: "#800080" },
    { name: "Red", value: "#ff0000" },
    { name: "Silver", value: "#c0c0c0" },
    { name: "White", value: "#FFFFFF" },
    { name: "Yellow", value: "#FFFF00" }
  ]

  return (
    <div>

      <h1>Color Selector</h1>

      <form>

        <label htmlFor="head">Head:</label>
          <select id="head" onChange={handleHeadChange}>
          {colorOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.name}
            </option>
          ))}
          </select>

        <label htmlFor="cups">Cups:</label>
          <select id="cups" onChange={handleCupChange}>
          {colorOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.name}
            </option>
          ))}
          </select>

        <label htmlFor="cups">Shaft:</label>
          <select id="cups" onChange={handleShaftChange}>
          {colorOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.name}
            </option>
          ))}
          </select>

        <label htmlFor="cups">Grip:</label>
          <select id="cups" onChange={handleGripChange}>
          {colorOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.name}
            </option>
          ))}
          </select>

        <label htmlFor="cups">Pommel:</label>
          <select id="cups" onChange={handlePommelChange}>
          {colorOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.name}
            </option>
          ))}
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