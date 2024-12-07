import logo from './logo.svg';
import './App.css';
import Parking from './component/Parking';
import { ParkingProvider } from './Reducer/ParkingProvider';

function App() {
  return (
    <ParkingProvider>
    <Parking />
  </ParkingProvider>
  );
}

export default App;
