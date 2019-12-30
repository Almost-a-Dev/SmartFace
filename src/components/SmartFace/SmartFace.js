import React from 'react';
import './SmartFace.css';

const SmartFace = ({input}) => {
    return (
      <div className='center ma'>
        <div className='absolute mt2'>
          <img id='inputimage' alt='' width='500px' heigh='auto'/>
          <div className='facebox'><h1>{input}</h1></div>
        </div>
      </div>
    );
  }

export default SmartFace;