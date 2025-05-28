
import React, { useEffect, useRef } from 'react';
import { loadGLBModel } from './Modelloader';

const Modeimport = ({ i }) => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = null;
      loadGLBModel('containerlo', i);
      console.log(i);
    }
  }, [i]);

  return (
    <div className='w-full h-[50vh] md:h-screen' id='containerlo' ref={containerRef}>
    
    </div>
  );
};

export default Modeimport;
