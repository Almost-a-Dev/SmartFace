import React from 'react';
import ImageForm from '../ImageForm/ImageForm';
import './SmartFace.css';

const SmartFace = ({ imageLink, faceSqr, catchInput, submitImage }) => {
  return (
    <div className='center ma'>
      <div className='mt2 mb2'>
      <ImageForm 
        catchInput={catchInput}
        submitImage={submitImage}
      />
      </div>
      <div className='absolute mt2'>
        <img id='imageTag' alt='' src={imageLink} width = '500px' height = 'auto' />
        <div className='facebox' style = {{top: faceSqr.topRow,bottom: faceSqr.bottomRow,left: faceSqr.leftColumn,right: faceSqr.rightColumn}}>
        </div>
      </div>
    </div>
  );
}

export default SmartFace;