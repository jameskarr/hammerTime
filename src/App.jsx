//npm start
import './App.css'
import { useState } from 'react'
import { CssBaseline, Container, Button, MenuItem, FormControl, InputLabel, Select } from '@mui/material'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'


//alphabetical
const colorOptions = [
  { name: "Standard", value: '' },
  { name: "Black", value: "#000000" },
  { name: "Black Silk", value: "#46494A" },
  { name: "Blue", value: "#0000FF" },
  { name: "Blue Silk", value: "#3d94c6" },
  { name: "Bone (tan/natural)", value: "#e3dac9" },
  { name: "Brown", value: "#964B00" },
  { name: "Copper", value: "#c85f39" },
  { name: "Gold", value: "#b99832" },
  { name: "Grey", value: "#828081" },
  { name: "Magenta", value: "#922341" },
  { name: "Marble", value: "#F0E9D6" },
  { name: "Merlot", value: "#7F171F" },
  { name: "Olive/Army Green", value: "#655f2e" },
  { name: "Orange", value: "#ff5508" },
  { name: "Pink", value: "#FFC0CB" },
  { name: "Pink Silk", value: "#c95e88" },
  { name: "Purple", value: "#583673" },
  { name: "Red", value: "#ff0000" },
  { name: "Silver", value: "#c0c0c0" },
  { name: "White", value: "#FFFFFF" },
  { name: "Yellow", value: "#f7d800" }
]


const images = [
  { original: "https://i.ibb.co/K2SRrTh/hammers1.jpg" },
  { original: "https://i.ibb.co/NSyJDdQ/hammers2.jpg" },
  { original: "https://i.ibb.co/TgXkBpF/hammers3.jpg" },
  { original: "https://i.ibb.co/RPKgfpd/hammers4.jpg" },
  { original: "https://i.ibb.co/DzP1ysd/hammers5.jpg" },
  { original: "https://i.ibb.co/hyMZc12/hammers6.jpg" },
]

const ColorSelector = ({ label, color, setColor }) => (
  <FormControl id='addPad' fullWidth>
    <InputLabel>{label}</InputLabel>
    <Select sx={{ width: '30vw' }}
      label={label}
      value={color}
      onChange={(e) => setColor(e.target.value)}>
      {colorOptions.map((el, index) => (
        <MenuItem key={index} value={el.value}>
          {el.name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
)

const HammerTime = () => {
  
  const [headColor, setHeadColor] = useState('')
  const [cupsColor, setCupsColor] = useState('')
  const [shaftColor, setShaftColor] = useState('')
  const [gripColor, setGripColor] = useState('')
  const [pommelColor, setPommelColor] = useState('')

  const resetColors = () => {
    setHeadColor('')
    setCupsColor('')
    setShaftColor('')
    setGripColor('')
    setPommelColor('')
  }
  
  return (
    <>
    <CssBaseline />
    <Container maxWidth="md">

    <a href='https://www.etsy.com/listing/977244025/hammer-dice-tower-and-vault-dice-storage'><img className='logo' src='tojo.png' alt='togo logo'></img></a>

    <p>**The Standard is a Silver Head and Faces, Brown Shaft, Black Grip, Silver Pommel**</p>

    <div className='bigBox'>

      <div className='theHammer'>
        <div className='upperHammer'>
          <img src='cupL.png' className='cups' alt='cups' style={{backgroundColor: cupsColor}}></img>
          <div className="head" style={{backgroundColor: headColor}}></div>
          <img src='cupR.png' className='cups' alt='cups' style={{backgroundColor: cupsColor}}></img>
        </div>
        <div className='lowerHammer'>
          <div className="shaft" style={{backgroundColor: shaftColor}}></div>
          <img src='grip.png' className="grip" alt='grip' style={{backgroundColor: gripColor}}></img>
          <img src='pommel.png' className="pommel" alt='pommel' style={{backgroundColor: pommelColor}}></img>
        </div>
      </div>      

      <div className='formGalore'>
        
        <ColorSelector label="Head" color={headColor} setColor={setHeadColor} />
        <ColorSelector label="Faces" color={cupsColor} setColor={setCupsColor} />
        <ColorSelector label="Shaft" color={shaftColor} setColor={setShaftColor} />
        <ColorSelector label="Grip" color={gripColor} setColor={setGripColor} />
        <ColorSelector label="Pommel" color={pommelColor} setColor={setPommelColor} />
        
        <Button type="button" onClick={resetColors} variant="contained">Reset</Button>
      
      </div>

    </div>
    
    <br></br>
    
    <ImageGallery items={images} />
    </Container>
    
    </>
  )

}

export default HammerTime