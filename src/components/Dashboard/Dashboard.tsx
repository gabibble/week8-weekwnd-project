import React from "react";
import { NavBar } from "../NavBar";
import { Box, Button, Container, Stack } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { DataDisplay } from "../DataDisplay";
import { getAuth } from "firebase/auth";
import { GoogleButton } from "../SignIn";

export const Dashboard = () => {
    const auth = getAuth();  

if (auth.currentUser) {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="md">
        <Box sx={{ height: "100vh" }} mt={10}>
          <h1>Dashboard</h1>
          <p>User: {auth.currentUser.email}</p>
          <p>User ID: {auth.currentUser.uid}</p>

          {/* stack is nice for flexbox styling!  */}
          {/* <Stack direction="row" justifyContent="center" alignItems="center" my={4}>
            <Button variant="outlined">Add a new Trip!</Button>
          </Stack> */}
          <DataDisplay />
        </Box>
      </Container>
    </div>
  );
} else {
    return (
        <GoogleButton text="Sign in to get started"/>
    )
};
}