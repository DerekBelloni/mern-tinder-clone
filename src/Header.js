import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';

const Header = () => {
  return (
    <>
      <div className="header">
        <h1>header component</h1>
        <PersonIcon fontSize="large" className="header_icon" />
      </div>
    </>
  );
}

export default Header;
