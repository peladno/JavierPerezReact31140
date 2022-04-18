import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/index.jsx';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import logo from "../../images/Nook_Inc.png";
import styles from "./index.module.css";



export default function NavBar () {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Link to="/"><img className={styles.webLogo} src={logo} alt="logo" /></Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            <MenuItem  onClick={handleCloseNavMenu}>
              <Typography textAlign="center"><Link style={{textDecoration:"none"}} to="/">Home</Link></Typography>
            </MenuItem>
            <MenuItem  onClick={handleCloseNavMenu}>
              <Typography textAlign="center"><Link style={{textDecoration:"none"}} to="/category/oilCanvas" >Oil on canvas</Link></Typography>
            </MenuItem>
            <MenuItem  onClick={handleCloseNavMenu}>
              <Typography textAlign="center"><Link style={{textDecoration:"none"}} to="/category/bronze">Bronze</Link></Typography>
            </MenuItem>
            <MenuItem  onClick={handleCloseNavMenu}>
              <Typography textAlign="center"><Link style={{textDecoration:"none"}} to="/category/oilWoods">Oil on woods</Link></Typography>
            </MenuItem>
            <MenuItem  onClick={handleCloseNavMenu}>
              <Typography textAlign="center"><Link style={{textDecoration:"none"}} to="/category/woodblockPrint">Woodblock print</Link> </Typography>
            </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <Link to="/"><img className={styles.webLogo} src={logo} alt="logo" /></Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link style={{textDecoration:"none"}} to="/"><Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>Home</Button></Link>
            <Link style={{textDecoration:"none"}} to="/category/oilCanvas"><Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>Oil on canvas </Button></Link> 
            <Link style={{textDecoration:"none"}} to="/category/bronze"><Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>bronze</Button></Link>
            <Link style={{textDecoration:"none"}} to="/category/oilWoods"><Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>Oil on woods</Button></Link>
            <Link style={{textDecoration:"none"}} to="/category/woodblockPrint"><Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>Woodblock print</Button></Link>   
          </Box>  
          <Box sx={{ flexGrow: 0 }}>
            <CartWidget/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};


