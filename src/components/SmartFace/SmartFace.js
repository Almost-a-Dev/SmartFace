import React from 'react';
import './SmartFace.css';

const SmartFace = ({imageLink, faceSqr}) => {
    return (
      <div className='center ma'>
        <div className='absolute mt5 mb5'>
          <img id='imageTag' alt=''src={imageLink} width='500px' height='auto'/>
          <div 
            className='facebox'
            style=
            {{
              top: faceSqr.topRow, 
              bottom: faceSqr.bottomRow, 
              left: faceSqr.leftColumn, 
              right: faceSqr.rightColumn
            }}>
          </div>
        </div>
      </div>
    );
  }

export default SmartFace;