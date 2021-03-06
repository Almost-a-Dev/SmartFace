import React from 'react';
import './ImageForm.css';

const ImageForm = ({ catchInput, submitImage }) => {
  return (
    <div>
      <p className='f3'>
      </p>
      <div className='center ma'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='tex' onChange={catchInput}/>
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple mt4'
            onClick={submitImage}
          >Check Image!</button>
        </div>
      </div>
    </div>
  );
}

export default ImageForm;