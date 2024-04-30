import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './form.css';


function Appointment() {
  const [Date, setDate] = useState('');
  const [East_Campus, setEast_Campus] = useState('');
  const [Civil, setCivil] = useState('');
  const [Mech, setMech] = useState('');
  const [Auto, setAuto] = useState('');
  const [Total, setTotal] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();



// Validation for East_Campus
if (isNaN(East_Campus)) {
  alert('East_CampusCampus value must be a number');
  return;
}

// Validation for Civil
if (isNaN(Civil)) {
  alert('Civil value must be a number');
  return;
}

// Validation for Mech
if (isNaN(Mech)) {
  alert('Mech value must be a number');
  return;
}

// Validation for Auto
if (isNaN(Auto)) {
  alert('Auto value must be a number');
  return;
}

// Validation for Total
if (isNaN(Total)) {
  alert('Total value must be a number');
  return;
}

axios.post('http://localhost:3001/', { Date, East_Campus,  Civil,  Mech,  Auto,  Total })
.then((result) => {
  console.log(result);
  navigate('/');
})
.catch((err) => console.log(err));

  }
  return (
    <div className="form-container">
      <h1>Energy Managment System</h1>

      <form onSubmit={handleSubmit}>
    {/* Date */}
<label htmlFor="Date">Date:</label>
<input type="date" id="Date" name="Date" onChange={(e) => setDate(e.target.value)} />

{/* East_Campus */}
<label htmlFor="East_Campus">East_Campus:</label>
<input type="text" id="East_Campus" name="East_Campus" onChange={(e) => setEast_Campus(e.target.value)} />

{/* Civil */}
<label htmlFor="Civil">Civil:</label>
<input type="text" id="Civil" name="Civil" onChange={(e) => setCivil(e.target.value)} />

{/* Mech */}
<label htmlFor="Mech">Mech:</label>
<input type="text" id="Mech" name="Mech" onChange={(e) => setMech(e.target.value)} />

{/* Auto */}
<label htmlFor="Auto">Auto:</label>
<input type="text" id="Auto" name="Auto" onChange={(e) => setAuto(e.target.value)} />

{/* Total */}
<label htmlFor="Total">Total:</label>
<input type="text" id="Total" name="Total" onChange={(e) => setTotal(e.target.value)} />
    {/* submit button */}
    <button type="submit">Submit</button>
</form>

    </div>
  );
}

export default Appointment;
