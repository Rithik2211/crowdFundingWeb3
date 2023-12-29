import React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {navlinks} from '../constants/index';
import {useNavigate} from 'react-router-dom';

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isConnected, setIsConnected] = useState(null);
  const navigate = useNavigate()

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const connectWallet = async() =>{
    if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setIsConnected(accounts[0]);
      } else {
        alert("Kindly install your wallet extension!!");
      }
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{justifyContent: 'space-between'}}>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Crowdfunding Application
          </Typography>
          {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
          </Box> */}

          {
            isConnected ? 
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {navlinks.map((nav) => (
                  <MenuItem key={nav.name} onClick={()=>{
                      setAnchorElUser(null);
                      navigate(nav.link);
                  }}>
                    <Typography textAlign="center">{nav.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box> : 
            <Box sx={{ flexGrow: 0 }}>
                <Button variant="contained" color="success" onClick={connectWallet}>Connect</Button>
            </Box>
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;