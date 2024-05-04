import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './pages/Login';
import Signup from './pages/Signup';
import WeatherApp from './WeatherApp';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<WeatherApp />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
