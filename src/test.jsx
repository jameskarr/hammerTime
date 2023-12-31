import './App.css'
import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
//import AppBar from '@mui/material/AppBar';
//import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
//import Toolbar from '@mui/material/Toolbar';
//import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
//import IconButton from '@mui/material/IconButton';
//import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Avatar from '@mui/material/Avatar';


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
      

      <div className='formGalore'>

        <FormControl id='addPad' fullWidth>
        <InputLabel>Head</InputLabel>
        <Select sx={{width: '40vw'}} label="Head" value={headColor} onChange={handleHeadChange}>
          {colorOptions.map((el, index) => (
              <MenuItem key={index} value={el.value}>
                {el.name}
              </MenuItem>
            ))}
        </Select>
        </FormControl>

        <FormControl id='addPad' fullWidth>
        <InputLabel>Faces</InputLabel>
        <Select sx={{width: '40vw'}} label="Faces" value={cupColor} onChange={handleCupChange}>
          {colorOptions.map((el, index) => (
              <MenuItem key={index} value={el.value}>
                {el.name}
              </MenuItem>
            ))}
        </Select>
        </FormControl>

        <FormControl id='addPad' fullWidth>
        <InputLabel>Shaft</InputLabel>
        <Select sx={{width: '40vw'}} label="Shaft" value={shaftColor} onChange={handleShaftChange}>
          {colorOptions.map((el, index) => (
              <MenuItem key={index} value={el.value}>
                {el.name}
              </MenuItem>
            ))}
        </Select>
        </FormControl>

        <FormControl id='addPad' fullWidth>
        <InputLabel>Grip</InputLabel>
        <Select sx={{width: '40vw'}} label="Grip" value={gripColor} onChange={handleGripChange}>
          {colorOptions.map((el, index) => (
              <MenuItem key={index} value={el.value}>
                {el.name}
              </MenuItem>
            ))}
        </Select>
        </FormControl>

        <FormControl id='addPad' fullWidth>
        <InputLabel>Pommel</InputLabel>
        <Select sx={{width: '40vw'}} label="Pommel" value={pommelColor} onChange={handlePommelChange}>
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