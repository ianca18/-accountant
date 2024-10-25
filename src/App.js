import './App.css';
import React, { useState, useRef } from "react";

function App() {
  const [contador, setContador] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null); 
  const handleContador1 = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setContador((prevContador) => prevContador + 1);
      }, 1000); 
    }
  };

  const handleContador2 = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const handleContador3 = () => {
    setContador(0);
  };

  return (
    <div className="counter">
      <h1>Contadores</h1>
      <span id="counter">{contador}</span> 

      <div className="button-counter">
        <button className='btn1' onClick={handleContador1}>Iniciar</button>
        <button className='btn2' onClick={handleContador2}>Parar</button>
        <button className='btn3' onClick={handleContador3}>Zerar</button> {/* Botão para zerar o contador */}
      </div>
    </div>
  );
}
export default App;
