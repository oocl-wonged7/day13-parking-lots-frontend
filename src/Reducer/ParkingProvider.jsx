import React, { createContext, useReducer, useContext } from 'react';

// Initial state
const initialState = [];

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