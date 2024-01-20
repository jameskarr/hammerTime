import { useState } from 'react'

const colorOptions = [
  { name: "Standard", value: '' },
  { name: "Black", value: "#000000" },
  { name: "Blue", value: "#0000FF" },
  { name: "Brown", value: "#964B00" },
  { name: "Gold", value: "#FFD700" }
]


const HammerTime = () => {

  const [headColor, setHeadColor] = useState('')
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

    <div className='bigBox'>

      <div className='theHammer'>
        <div className='upperHammer'>
          <div className="head" style={{backgroundColor: headColor}}></div>
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