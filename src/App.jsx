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

  const colorOptions = ['', 'Marble', 'Gold', 'Silver', 'Copper', 'Black', 'Silk Black', 'Brown', 'White', 'Red', 'Merlot', 'Blue', 'Silk Blue', 'Grey', 'Olive/Army Green', 'Pink', 'Silk Pink', 'Magenta', 'Yellow', 'Purple', 'Orange', 'Bone (tan/natural)']
  // [
  //   { name: "Standard", value: "" },
  //   { name: "Marble", value: "" },
  //   { name: "Gold", value: "" },
  //   { name: "Silver", value: "#c0c0c0" },
  //   { name: "Copper", value: "" },
  //   { name: "Black", value: "#000000" },
  //   { name: "Silk Black", value: "" },
  //   { name: "Brown", value: "" },
  //   { name: "White", value: "" },
  //   { name: "Red", value: "" },
  //   { name: "Merlot", value: "" },
  //   { name: "Blue", value: "" },
  //   { name: "Silk Blue", value: "" },
  //   { name: "Grey", value: "" },
  //   { name: "Olive/Army Green", value: "" },
  //   { name: "Pink", value: "" },
  //   { name: "Silk Pink", value: "" },
  //   { name: "Magenta", value: "" },
  //   { name: "Yellow", value: "" },
  //   { name: "Purple", value: "" },
  //   { name: "Orange", value: "" },
  //   { name: "Bone (tan/natural)", value: "" }
  // ]

  return (
    <div>

      <h1>Color Selector</h1>

      <form>

        <label htmlFor="head">Head:</label>
          <select id="head" onChange={handleHeadChange}>
          {colorOptions.map((color, index) => (
            <option key={index} value={color}>
              {color || "Standard"}
            </option>
          ))}
          </select>

        <label htmlFor="cups">Cups:</label>
          <select id="cups" onChange={handleCupChange}>
          {colorOptions.map((color, index) => (
            <option key={index} value={color}>
              {color || "Standard"}
            </option>
          ))}
          </select>

        <label htmlFor="cups">Shaft:</label>
          <select id="cups" onChange={handleShaftChange}>
          {colorOptions.map((color, index) => (
            <option key={index} value={color}>
              {color || "Standard"}
            </option>
          ))}
          </select>

        <label htmlFor="cups">Grip:</label>
          <select id="cups" onChange={handleGripChange}>
          {colorOptions.map((color, index) => (
            <option key={index} value={color}>
              {color || "Standard"}
            </option>
          ))}
          </select>

        <label htmlFor="cups">Pommel:</label>
          <select id="cups" onChange={handlePommelChange}>
          {colorOptions.map((color, index) => (
            <option key={index} value={color}>
              {color || "Standard"}
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