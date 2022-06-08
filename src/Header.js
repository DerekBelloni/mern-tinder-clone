import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import tinderLogo from './images/tinder-logo.png';
import ForumIcon from '@mui/icons-material/Forum';

const Header = () => {
  return (
    <>
      <div className="header">
        <IconButton>
          <PersonIcon fontSize="large" className="header_person" />
        </IconButton>
        <img src={tinderLogo} className="header_logo" />
        <IconButton>
          <ForumIcon fontSize="large" className="header_forum" />
        </IconButton>
      </div>
    </>
  );
}

export default Header;
