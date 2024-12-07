import React from 'react';
import { useParking } from '../Reducer/ParkingProvider';
import ParkingLot from './ParkingLot';

const ParkingLots = () => {
  const { state } = useParking();

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {state.map(lot => (
        <ParkingLot key={lot.id} lot={lot} />
      ))}
    </div>
  );
};

export default ParkingLots;