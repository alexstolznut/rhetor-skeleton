import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CreateIcon from '@mui/icons-material/Create';

import { useNavigate } from "react-router-dom";

const pages = ['Products', 'Pricing', 'Blog'];


export default function TopNav() {

    let navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (e) => {
        setAnchorElNav(e.currentTarget);
    };

    const handleOpenUserMenu = (e) => {
        setAnchorElUser(e.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const launchEditor = () => {
        navigate('/editor')
    }
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr:2, display: {xs: 'none', md:'flex'}}}
                        >
                            Rhetor
                    </Typography>
                    
                    <Box sx={{ flexGrow: 1, display: {xs: 'flex', md:'none'} }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-hashpopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit">
                                <MenuIcon />

                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            verical: 'bottom',
                            horizontal: 'left'
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left'
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none'}
                        }}
                        >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{page}</Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>
                    <Typography
                       variant="h6"
                       noWrap
                       component="div"
                       sx={{ flexGrow: 1, display: {xs: 'flex', md: 'none'}}} >
                           Rhetor
                       </Typography>
                       <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'} }}>
                           {pages.map((page)=> (
                               <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block'}}>
                                    {page}
                               </Button>
                           ))}
                           
                       </Box>

                       <Box sx={{ flexGrow: 0}}>
                       <IconButton sx={{ p:1, background:'white'}} onClick={launchEditor}>
                                <CreateIcon alt="write article"></CreateIcon>
                           </IconButton>
                           <IconButton sx={{ p:2}}>
                               <Avatar alt="avatar" src="https://lh3.googleusercontent.com/L0euRD66Hj6l73JwX4Sbc2CV54fGVivVWWiqu06z46ys6449dBSEBAPv2Ivrm0EuwAp5MAIq7fwVuudISO6-7_ZyQXb3QcYQsGrPmY0=w1400-k"></Avatar>
                           </IconButton>
                           
                       </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
