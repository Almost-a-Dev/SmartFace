import React from 'react';

const Navbar = () => {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p className='f3 link dim black underline pa3 pointer'>Register</p>
            <p className='f3 link dim black underline pa3 pointer'>Sign In</p>
            <p className='f3 link dim black underline pa3 pointer'>Sign Out</p>
        </nav>
    );
}

export default Navbar;