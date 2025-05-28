
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
    <div className='w-full h-[50vh] lg:h-[calc(99vh-56px)]' id='containerlo' ref={containerRef}>
    
    </div>
  );
};

export default Modeimport;
