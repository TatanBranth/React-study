import React from 'react';
import './App.css'
import { useEffect, useState } from 'react';

function App() {

  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({x: 'x', y: 'y'});

  useEffect(()=>{
    console.log(`effect`);

    const handleMove = (event) => {
      const { clientY, clientX } = event;
      console.log(`handle move ${clientX}, ${clientY}`);
      setPosition({x: clientX, y: clientY});
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: .8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px,${position.y}px)`
      }}>

      </div>
      <button onClick={()=> setEnabled(!enabled)}>{enabled?'Activate':'Desactivate'} follow button</button>
    </main>
  )
}

export default App
