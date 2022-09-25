import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { useNavigate } from "react-router-dom";
import { NewTrip } from "../NewTrip";
import { GoogleButton } from "../SignIn";
import { Stack } from "@mui/material";
import { getAuth } from "firebase/auth"; // ** new ** add this for authentication functionality

// import { useNavigate } from "react-router-dom";

const pages = ["Home", "Profile", "Sign In"];

export const NavBar = () => {
  const auth = getAuth();

  const navigate = useNavigate();
  const navLinks = [
    {
      text: "Home",
      onClick: () => navigate("/"),
    },
    {
      text: "Dashboard",
      onClick: () => navigate("/Dashboard"),
    },
  ];

  //copied form MUI template
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  if (auth.currentUser) {
    return (
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <FlightTakeoffIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Trip Planner
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {navLinks.map((item, index) => (
                  <MenuItem key={index} onClick={item.onClick}>
                    <Typography textAlign="center">{item.text}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <FlightTakeoffIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Trip Planner
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {navLinks.map((item, index) => (
                <Button
                  key={index}
                  onClick={item.onClick}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={1}
            >
              <GoogleButton text="Sign Out"/>
              <NewTrip />
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    );
  } else {
    return (
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <FlightTakeoffIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Trip Planner
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {navLinks.map((item, index) => (
                  <MenuItem key={index} onClick={item.onClick}>
                    <Typography textAlign="center">{item.text}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <FlightTakeoffIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Trip Planner
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={1}
            >
              <GoogleButton text="Sign in with Google" />
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
};
