import React from 'react';

const Navbar = ({ urlChange, isSigned }) => {
    if (isSigned) {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => urlChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
        </nav>
      );
    } else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => urlChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
          <p onClick={() => urlChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
        </nav>
      );
    }
}

export default Navbar;