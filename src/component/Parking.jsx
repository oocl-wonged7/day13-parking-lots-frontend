import React, { useEffect } from 'react';
import ParkFetchOperation from "./ParkFetchOperator";
import ParkingLots from "./ParkingLots";
import { useParking, GET_ALL_PARKING_LOTS } from '../Reducer/ParkingProvider';
import { getAllParkingLots } from '../api/parkingServices';

const Parking = () => {
    const { dispatch } = useParking();

    const fetchData = async () => {
      try {
        const parkingLots = await getAllParkingLots();
        dispatch({ type: GET_ALL_PARKING_LOTS, payload: parkingLots });
      } catch (error) {
        console.error('Error fetching parking lots:', error);
      }
    };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ParkFetchOperation />
      <ParkingLots/>
    </div>
  );
};

export default Parking;
