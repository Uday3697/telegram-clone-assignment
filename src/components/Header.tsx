import React, { useState } from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import './Header.css';
import { Menu, MenuItem } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';
import {
  Animation,
  AppBlockingOutlined,
  BugReport,
  ContactMailOutlined,
  FeaturedPlayList,
  KebabDiningRounded,
  Logout,
  NightlifeSharp,
  Settings,
  Timelapse,
} from '@mui/icons-material';
import TabsComponent from './TabsComponent';
import { useTheme } from '../context/ThemeContext';
import ChatWindowHead from './ChatWindowHead';

const label = { inputProps: { 'aria-label': 'Switch demo' } };
const Header: React.FC = () => {
  const [showTabs, setShowTabs] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { theme, toggleTheme } = useTheme();
  const handleSearchClick = () => {
    setShowTabs(true);
  };



  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const themeChange = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='headCOntainer'>
      <div className="header">
        <div className="menu-button" style={{ fontSize: 16 }} onClick={handleClick}>
          <FaBars />
        </div>
        <div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            // onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            className='menuContainer'
          >
            <MenuItem onClick={handleClose} className='MenuItem'><MessageIcon className="icon" />Saved Messages</MenuItem>
            <MenuItem onClick={handleClose} className='MenuItem'><ContactMailOutlined className="icon" />Contacts</MenuItem>
            <MenuItem onClick={handleClose} className='MenuItem'><Timelapse className="icon" />My Stories</MenuItem>
            <MenuItem onClick={handleClose} className='MenuItem'><Settings className="icon" />Settings</MenuItem>
            <MenuItem onClick={handleClose} className='MenuItem'><NightlifeSharp className="icon" />Night Mode      <Switch {...label} checked={theme === "dark" ? true : false} size="small" onClick={toggleTheme} /></MenuItem>
            <MenuItem onClick={handleClose} className='MenuItem'><Animation className="icon" />Animation    <Slider style={{ width: 40 }} defaultValue={10} aria-label="Default" valueLabelDisplay="auto" /></MenuItem>
            <MenuItem onClick={handleClose} className='MenuItem'><FeaturedPlayList className="icon" />Telegram Features</MenuItem>
            <MenuItem onClick={handleClose} className='MenuItem'><BugReport className="icon" />Report a Bug</MenuItem>
            <MenuItem onClick={handleClose} className='MenuItem'><KebabDiningRounded className="icon" />Switch to K Version</MenuItem>
            <MenuItem onClick={handleClose} className='MenuItem'><AppBlockingOutlined className="icon" />Install App</MenuItem>
            <MenuItem onClick={handleClose} className='MenuItem'><Logout className="icon" />Logout</MenuItem>
          </Menu>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder={`Search`}
            onClick={handleSearchClick}
          />
          <FaSearch className="search-icon" />

        </div>
      </div>

      {showTabs && (
        <TabsComponent />
      )}
      <ChatWindowHead />

    </div>
  );
};

export default Header;
