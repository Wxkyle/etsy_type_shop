import { IconButton, Badge, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';

interface NotificationIconProps {
  icon: string;
}

const iconStyle = "m-3 w-6 h-6"
//needs fixing but was made with chat gpt

function NotificationIcon({ icon }: NotificationIconProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton className='p-0' style={{ padding: '0px' }} onClick={handleClick}>
        <Badge className={iconStyle} badgeContent={3} color="secondary">
          <img src={icon} alt="icon" />
        </Badge>
      </IconButton>
      <Menu
        className='mt-10'
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Option 1</MenuItem>
        <MenuItem onClick={handleClose}>Option 2</MenuItem>
        <MenuItem onClick={handleClose}>Option 3</MenuItem>
      </Menu>
    </div >
  );
}

export default NotificationIcon;