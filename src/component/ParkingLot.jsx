import React from 'react';

const ParkingLot = ({ lot }) => {
  const grid = Array.from({ length: lot.capacity }, (_, index) => {
    const ticket = lot.tickets.find(ticket => ticket.position === index + 1);
    return ticket ? ticket.plateNumber : '';
  });

  return (
    <div style={{ margin: '10px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        {grid.map((plateNumber, index) => (
          <div key={index} style={{ border: '1px solid black', padding: '20px', textAlign: 'center' }}>
            {plateNumber}
          </div>
        ))}
      </div>
      <h2 style={{ textAlign: 'center' }}>{lot.name}</h2>
    </div>
  );
};

export default ParkingLot;