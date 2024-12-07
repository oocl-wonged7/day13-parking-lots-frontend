import React, { createContext, useReducer, useContext } from 'react';

// Initial state
const initialState = [
  {
    id: 1,
    name: "The Plaza Park",
    tickets: [{ plateNumber: "AB-4321", position: 1, parkingLot: 1 }],
    capacity: 9,
    availableCapacity: 8,
    availablePositionRate: 0.8888888888888888,
    full: false
  },
  {
    id: 2,
    name: "City Mall Garage",
    tickets: [{ plateNumber: "AB-1234", position: 1, parkingLot: 2 }],
    capacity: 12,
    availableCapacity: 11,
    availablePositionRate: 0.9166666666666666,
    full: false
  },
  {
    id: 3,
    name: "Office Tower Parking",
    tickets: [{ plateNumber: "AB-4444", position: 1, parkingLot: 3 }],
    capacity: 9,
    availableCapacity: 8,
    availablePositionRate: 0.8888888888888888,
    full: false
  }
];

// Actions
const GET_ALL_PARKING_LOTS = 'GET_ALL_PARKING_LOTS';
const PARK_CAR = 'PARK_CAR';
const FETCH_CAR = 'FETCH_CAR';

// Reducer
const parkingReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_PARKING_LOTS:
      return action.payload;
    case PARK_CAR:
      return state.map(lot => {
        if (lot.id === action.payload.parkingLot) {
          return {
            ...lot,
            tickets: [...lot.tickets, action.payload],
            availableCapacity: lot.availableCapacity - 1,
            availablePositionRate: (lot.availableCapacity - 1) / lot.capacity,
            full: lot.availableCapacity - 1 === 0
          };
        }
        return lot;
      });
    case FETCH_CAR:
      return state.map(lot => {
        if (lot.tickets.some(ticket => ticket.plateNumber === action.payload.plateNumber)) {
          return {
            ...lot,
            tickets: lot.tickets.filter(ticket => ticket.plateNumber !== action.payload.plateNumber),
            availableCapacity: lot.availableCapacity + 1,
            availablePositionRate: (lot.availableCapacity + 1) / lot.capacity,
            full: false
          };
        }
        return lot;
      });
    default:
      return state;
  }
};

// Context
const ParkingContext = createContext();

// Provider
const ParkingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(parkingReducer, initialState);

  return (
    <ParkingContext.Provider value={{ state, dispatch }}>
      {children}
    </ParkingContext.Provider>
  );
};

// Custom hook to use the ParkingContext
const useParking = () => useContext(ParkingContext);

export { ParkingProvider, useParking, GET_ALL_PARKING_LOTS, PARK_CAR, FETCH_CAR };