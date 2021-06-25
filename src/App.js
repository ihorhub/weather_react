import React from 'react';
import {DayWeather} from './components/dayWeather'
// import WeekWeather from './components/weekWeather'
import './App.css';


function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});


  return (
  <div>
           


<DayWeather/>









  </div>
  );
}

export default App;
