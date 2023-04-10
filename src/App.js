import React, {useState, useEffect} from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import ClipLoader from "react-spinners/ClipLoader";


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://www.mocky.io/v2/5185415ba171ea3a00704eed?mocky-delay=5000ms')
    .then(response => response.json())
    .then(data => {
      setLoading(false)
      console.log(data)
    });
  }, [])

  return (
    <div className="app">
     { 

     loading ?
        
     <div className="spinner-wrapper">
        <ClipLoader 
          loading={loading}  
          size={150}
          color="red" 
        />
     </div> 

      :

      <HomeScreen />
      
      }
    </div>
  );
}

export default App;
