import './App.css'
import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Avatar from '@mui/material/Avatar';


//alphabetical
const colorOptions = [
  { name: "Standard", value: '' },
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


const HammerTime = () => {

  const [headColor, setHeadColor] = useState('')
  const [cupsColor, setCupsColor] = useState('')
  const [shaftColor, setShaftColor] = useState('')
  const [gripColor, setGripColor] = useState('')
  const [pommelColor, setPommelColor] = useState('')

  const handleColorChange = (setter) => (e) => {
    setter(e.target.value)
  }

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
    {/* <img id="headerAI" src="headerAI.jpg" alt="AIs D&D themed header"></img> */}

    <a className='logo' href='https://www.etsy.com/listing/977244025/hammer-dice-tower-and-vault-dice-storage'>
      <Avatar className='logoBorder' 
      sx={{ width: 100, height: 100 }} 
      variant="rounded" 
      src='tojo.png'></Avatar></a>

    <div className='bigBox'>

      <div className='theHammer'>
        <div className='upperHammer'>
          <div className="cups" style={{backgroundColor: cupsColor}}></div>
          <div className="head" style={{backgroundColor: headColor}}></div>
          <div className="cups" style={{backgroundColor: cupsColor}}></div>
        </div>
        <div className='lowerHammer'>
          <div className="shaft" style={{backgroundColor: shaftColor}}></div>
          <div className="grip" style={{backgroundColor: gripColor}}></div>
          <div className="pommel" style={{backgroundColor: pommelColor}}></div>
        </div>
      </div>
      

      <div className='formGalore'>

        <FormControl id='addPad' fullWidth>
        <InputLabel>Head</InputLabel>
        <Select sx={{width: '40vw'}} label="Head" value={headColor} onChange={handleColorChange(setHeadColor)}>
          {colorOptions.map((el, index) => (
              <MenuItem key={index} value={el.value}>
                {el.name}
              </MenuItem>
            ))}
        </Select>
        </FormControl>

        <FormControl id='addPad' fullWidth>
        <InputLabel>Faces</InputLabel>
        <Select sx={{width: '40vw'}} label="Faces" value={cupsColor} onChange={handleColorChange(setCupsColor)}>
          {colorOptions.map((el, index) => (
              <MenuItem key={index} value={el.value}>
                {el.name}
              </MenuItem>
            ))}
        </Select>
        </FormControl>

        <FormControl id='addPad' fullWidth>
        <InputLabel>Shaft</InputLabel>
        <Select sx={{width: '40vw'}} label="Shaft" value={shaftColor} onChange={handleColorChange(setShaftColor)}>
          {colorOptions.map((el, index) => (
              <MenuItem key={index} value={el.value}>
                {el.name}
              </MenuItem>
            ))}
        </Select>
        </FormControl>

        <FormControl id='addPad' fullWidth>
        <InputLabel>Grip</InputLabel>
        <Select sx={{width: '40vw'}} label="Grip" value={gripColor} onChange={handleColorChange(setGripColor)}>
          {colorOptions.map((el, index) => (
              <MenuItem key={index} value={el.value}>
                {el.name}
              </MenuItem>
            ))}
        </Select>
        </FormControl>

        <FormControl id='addPad' fullWidth>
        <InputLabel>Pommel</InputLabel>
        <Select 
        sx={{width: '40vw'}} 
        label="Pommel" 
        value={pommelColor} 
        onChange={handleColorChange(setPommelColor)}>
          {colorOptions.map((el, index) => (
              <MenuItem key={index} value={el.value}>
                {el.name}
              </MenuItem>
            ))}
        </Select>
        </FormControl>

        <Button type="button" onClick={resetColors} variant="contained">Reset</Button>
      
      </div>
    </div>
        
    </Container>
    </>
  )

}

export default HammerTime