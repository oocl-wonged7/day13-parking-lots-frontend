import React, { useState } from 'react';

const ParkFetchOperation = () => {
  const [plateNumber, setPlateNumber] = useState('');
  const [parkingBoy, setParkingBoy] = useState('STANDARD');

  const handleParkCar = () => {
    // Logic for parking the car
    console.log(`Parking car with plate number: ${plateNumber} using ${parkingBoy} strategy`);
  };

  const handleFetchCar = () => {
    // Logic for fetching the car
    console.log(`Fetching car with plate number: ${plateNumber} using ${parkingBoy} strategy`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <label style={{ marginRight: '10px' }}>Plate Number:</label>
        <input
          type="text"
          placeholder="Enter plate number"
          value={plateNumber}
          onChange={(e) => setPlateNumber(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <select
          value={parkingBoy}
          onChange={(e) => setParkingBoy(e.target.value)}
          style={{ marginRight: '10px' }}
        >
          <option value="STANDARD">Standard</option>
          <option value="SMART">Smart</option>
          <option value="SUPERSMART">Super smart</option>
        </select>
        <button onClick={handleParkCar} style={{ marginRight: '10px' }}>Park Car</button>
        <button onClick={handleFetchCar}>Fetch Car</button>
      </div>
    </div>
  );
};

export default ParkFetchOperation;