import './App.css'
import { useState } from 'react'

const HammerTime = () => {

  const defaultColor = ''

  const [headColor, setHeadColor] = useState(defaultColor)
  const [cupColor, setCupColor] = useState(defaultColor)
  const [shaftColor, setShaftColor] = useState(defaultColor)
  const [gripColor, setGripColor] = useState(defaultColor)
  const [pommelColor, setPommelColor] = useState(defaultColor)

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
    { name: "Standard", value: defaultColor },
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

  const resetColors = () => {
    setHeadColor(defaultColor)
    setCupColor(defaultColor)
    setShaftColor(defaultColor)
    setGripColor(defaultColor)
    setPommelColor(defaultColor)
  }

  return (

    <div className='container'>
      <header>
        {/* <img></img>
        <button></button>
        <button></button>
        <button></button> */}
      </header>

      <div className='hammerTime'>

        <form>

          <h3><a href='https://www.etsy.com/listing/977244025/hammer-dice-tower-and-vault-dice-storage?variation0=1878384953'>Etsy link</a></h3>

          <button type="button" onClick={resetColors}>Reset</button>

          <div className='userSelection'>
            <label>Head:</label>
            <select onChange={handleHeadChange} value={headColor}>
            {colorOptions.map((el, index) => (
              <option key={index} value={el.value}>
                {el.name}
              </option>
            ))}
            </select>
          </div>

          <div className='userSelection'>
            <label>Cups:</label>
            <select onChange={handleCupChange} value={cupColor}>
            {colorOptions.map((el, index) => (
              <option key={index} value={el.value}>
                {el.name}
              </option>
            ))}
            </select>
          </div>

          <div className='userSelection'>
            <label>Shaft:</label>
            <select onChange={handleShaftChange} value={shaftColor}>
            {colorOptions.map((el, index) => (
              <option key={index} value={el.value}>
                {el.name}
              </option>
            ))}
            </select>
          </div>

          <div className='userSelection'>
            <label>Grip:</label>
            <select onChange={handleGripChange} value={gripColor}>
            {colorOptions.map((el, index) => (
              <option key={index} value={el.value}>
                {el.name}
              </option>
            ))}
            </select>
          </div>

          <div className='userSelection'>
            <label>Pommel:</label>
            <select onChange={handlePommelChange} value={pommelColor}>
            {colorOptions.map((el, index) => (
              <option key={index} value={el.value}>
                {el.name}
              </option>
            ))}
            </select>
          </div>

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

      {/* <textarea>
        <p name={headColor}></p>
        <p name={cupColor}></p>
        <p name={shaftColor}></p>
        <p name={gripColor}></p>
        <p name={pommelColor}></p>
      </textarea> */}

    </div>
  )

}

export default HammerTime