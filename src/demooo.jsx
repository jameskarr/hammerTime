// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//       </header>
//     </div>
//   );
// }

// export default App;

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// import React, { Component } from 'react';

// class ThorHammerDiceTower extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       handleColor: 'silver',
//       headColor: 'gray',
//       engravingsColor: 'gold',
//     };
//   }

//   // Function to handle color changes for the handle of the hammer
//   handleHandleColorChange = (e) => {
//     this.setState({ handleColor: e.target.value });
//   }

//   // Function to handle color changes for the head of the hammer
//   handleHeadColorChange = (e) => {
//     this.setState({ headColor: e.target.value });
//   }

//   // Function to handle color changes for the engravings of the hammer
//   handleEngravingsColorChange = (e) => {
//     this.setState({ engravingsColor: e.target.value });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Thor's Hammer Dice Tower Color Customizer</h1>

//         {/* Color picker for the handle of the hammer */}
//         <div>
//           <label>Handle Color: </label>
//           <input type="colorPicker" value={this.state.handleColor} onChange={this.handleHandleColorChange} />
//         </div>

//         {/* Color picker for the head of the hammer */}
//         <div>
//           <label>Head Color: </label>
//           <input type="color" value={this.state.headColor} onChange={this.handleHeadColorChange} />
//         </div>

//         {/* Color picker for the engravings of the hammer */}
//         <div>
//           <label>Engravings Color: </label>
//           <input type="color" value={this.state.engravingsColor} onChange={this.handleEngravingsColorChange} />
//         </div>

//         {/* Render the 3D printed Thor's hammer with customized colors */}
//         <div className="thor-hammer-dice-tower">
//           <div className="handle" style={{ backgroundColor: this.state.handleColor }}>Handle</div>
//           <div className="head" style={{ backgroundColor: this.state.headColor }}>Head</div>
//           <div className="engravings" style={{ color: this.state.engravingsColor }}>Engravings</div>
//         </div>
//       </div>
//     );
//   }
// }

// export default ThorHammerDiceTower;


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react';

// const ColorPicker = () => {
//   const [selectedColor, setSelectedColor] = useState(''); // State to store the selected color

//   // Function to handle color selection
//   const handleColorChange = (e) => {
//     setSelectedColor(e.target.value);
//   };

//   return (
//     <div>
//       <h2>Color Picker</h2>

//       {/* Dropdown to select a color */}
//       <select value={selectedColor} onChange={handleColorChange}>
//         <option value="">Select a color</option>
//         <option value="red">Red</option>
//         <option value="blue">Blue</option>
//         <option value="green">Green</option>
//         <option value="yellow">Yellow</option>
//         <option value="orange">Orange</option>
//       </select>

//       {/* Display the selected color */}
//       {selectedColor && (
//         <div
//           style={{
//             width: '100px',
//             height: '100px',
//             backgroundColor: selectedColor,
//             marginTop: '10px',
//           }}
//         >
//           {/* Display the selected color name */}
//           <p>Selected Color: {selectedColor}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ColorPicker;


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

import React, { useState } from 'react';

const ColorForm = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [submittedColor, setSubmittedColor] = useState('');

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedColor(selectedColor);
  };

  return (
    <div>
      <h2>Color Selector</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="color">Select a color:</label>
        <select id="color" value={selectedColor} onChange={handleColorChange}>
          <option value="">Select a color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="orange">Orange</option>
        </select>

        <button type="submit">Submit</button>
      </form>

      {submittedColor && (
        <div>
          <p>Selected Color: {submittedColor}</p>
          <div
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: submittedColor,
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default ColorForm;