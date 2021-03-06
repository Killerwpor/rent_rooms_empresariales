import React from 'react';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../../container/Dropdown/Dropdown';
import './Navbar.css';

const options = [
  { id: 1, value: 'Medellín' },
  { id: 2, value: 'Cartagena' },
  { id: 3, value: 'Bogotá' },
  { id: 4, value: 'Santa Marta' },
  { id: 5, value: 'Valledupar' },
  { id: 6, value: 'Manizales' },
  { id: 7, value: 'Cúcuta' },
];

function Navbar() {

  const destinationCallback = (destination) => {
    console.log('Destination selected ->', destination)
  }

  return (
    <div className="navbar">
      <div className="destination-container">
        <Dropdown options={options} 
                  placeHolder={"Destino"}
                  icon={faPlaneDeparture} 
                  onOptionSelected={destinationCallback}
                  borderType="left-border" />
      </div>

      <div className="date-container">
        <span>Calendary: inicial</span>
        <span>Calendary: final</span>
      </div>
    </div>
  );
}


export default Navbar;
