import { useState, useEffect } from 'react';

export const usePosition = () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const onChange = ({coords}) => { 
    setPosition({
        latitude:coords.latitude, 
        longitude:coords.longitude});
  };

  const onError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;      
   let watcher = geo.watchPosition(onChange, onError);   
   if (!watcher) {
    setError('Геолокація не підтримується  браузером');
    return;
  } 
    return () => geo.clearWatch(watcher);
  }, []);

  return {...position, error};
}