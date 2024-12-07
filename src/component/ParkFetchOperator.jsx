import React, { useState } from 'react';
import { useParking, PARK_CAR, FETCH_CAR } from '../Reducer/ParkingProvider';
import { parkCar, fetchCar } from '../api/parkingServices';

const ParkFetchOperation = () => {
  const [plateNumber, setPlateNumber] = useState('');
  const [parkingBoy, setParkingBoy] = useState('STANDARD');
  const { state, dispatch } = useParking();

  const validatePlateNumber = (plateNumber) => {
    const regex = /^[A-Z]{2}-\d{4}$/;
    return regex.test(plateNumber);
  };

  const handleParkCar = async () => {
    if (!validatePlateNumber(plateNumber)) {
      alert('Invalid plate number format. It should be two letters + four digits (e.g., “AB-1234”).');
      return;
    }

    const carExists = state.some(lot => lot.tickets.some(ticket => ticket.plateNumber === plateNumber));
    if (carExists) {
      alert('Car with this plate number is already parked.');
      return;
    }

    try {
      const response = await parkCar(plateNumber, parkingBoy);
      dispatch({ type: PARK_CAR, payload: response });
      console.log(`Parking car with plate number: ${plateNumber} using ${parkingBoy} strategy`);
    } catch (error) {
      console.error('Error parking car:', error);
    }
  };

  const handleFetchCar = async () => {
    if (!validatePlateNumber(plateNumber)) {
      alert('Invalid plate number format. It should be two letters + four digits (e.g., “AB-1234”).');
      return;
    }

    const carExists = state.some(lot => lot.tickets.some(ticket => ticket.plateNumber === plateNumber));
    if (!carExists) {
      alert('Car with this plate number is not found.');
      return;
    }

    try {
      const response = await fetchCar(plateNumber);
      dispatch({ type: FETCH_CAR, payload: response });
      console.log(`Fetching car with plate number: ${plateNumber} using ${parkingBoy} strategy`);
    } catch (error) {
      console.error('Error fetching car:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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